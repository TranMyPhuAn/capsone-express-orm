const bcrypt = require("bcrypt");
const { PrismaClient } = require("@prisma/client");
const { createToken, descriptToken } = require("../config/jwt");
const { successCode, failCode, errorCode } = require("../config/response");
const { getUserToken } = require("./trangQuanLyAnhController");

const prisma = new PrismaClient();

const userSignUp = async (req, res) => {
  try {
    let { email, mat_khau, ho_ten, tuoi, anh_dai_dien } = req.body;
    const checkUser = await prisma.nguoi_dung.findFirst({
      where: {
        email,
      },
    });
    
    if (!checkUser) {
      let data = {
        email,
        mat_khau: bcrypt.hashSync(mat_khau, 10),
        ho_ten,
        tuoi,
        anh_dai_dien,
      };

      let createUser = await prisma.nguoi_dung.create({ data: data });

      successCode(res, createUser, "Đăng ký thành công");
    } else {
      errorCode(
        res,
        email,
        `Địa chỉ email: ${email} đã tồn tại trong hệ thống`
      );
    }
  } catch (error) {
    failCode(res, "Lỗi BE");
  }
};

const userLogin = async (req, res) => {
  let { email, mat_khau } = req.body;
  try {
    let checkUser = await prisma.nguoi_dung.findFirst({
      where: {
        email: email,
      },
    });

    if (checkUser) {
      let checkPass = bcrypt.compareSync(mat_khau, checkUser.mat_khau);

      if (checkPass) {
        let token = createToken(checkUser);
        successCode(
          res,
          { nguoi_dung: checkUser, token },
          "Đăng nhập thành công"
        );
      } else {
        errorCode(res, checkPass, "Mật khẩu không chính xác");
      }
    } else {
      errorCode(res, checkUser, "Email không tồn tại");
    }
  } catch (error) {
    failCode(res, "Lỗi BE");
  }
};

const updateUser = async (req, res) => {
  //nguoi_dung_id nhận từ authenticate
  // const {nguoi_dung_id} = req;
  try {
    const { email, mat_khau, ho_ten, tuoi, anh_dai_dien } = req.body;
  
    // giải mã token và tìm id
    let { token } = req.headers;
    const decodeToken = await descriptToken(token);
    const idToken = decodeToken.data.nguoi_dung_id;

    //update
    const userUpdate = await prisma.nguoi_dung.update({
      where : {
        nguoi_dung_id: idToken
      },
      data: {
        email, 
        mat_khau: bcrypt.hashSync(mat_khau, 10), 
        ho_ten, 
        tuoi, 
        anh_dai_dien
      }
    });
    
    successCode(res, userUpdate, "update thành công!");
  } catch (error) {
    failCode(res, "Lỗi BE");
  }
};

module.exports = {
  userLogin,
  userSignUp,
  updateUser
};
