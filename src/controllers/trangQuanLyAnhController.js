const { PrismaClient } = require("@prisma/client");
const { descriptToken } = require("../config/jwt");
const { successCode, errorCode, failCode } = require("../config/response");

const prisma = new PrismaClient();

const getUserToken = async (req, res) => {
  try {
    let { token } = req.headers;
    // giải mã token
    const decodeToken = await descriptToken(token);
    let { nguoi_dung_id } = decodeToken.data;

    const user = await prisma.nguoi_dung.findUnique({
      where: {
        nguoi_dung_id,
      },
    });

    successCode(res, user, "Thông tin người dùng");
  } catch (error) {
    failCode(res, "Lỗi BE");
  }
};

const getAnhDaLuuByID = async (req, res) => {
  try {
    const { id } = req.params;

    const anhDaLuu = await prisma.luu_anh.findMany({
      where: {
        nguoi_dung_id: Number(id),
      },
      include: {
        nguoi_dung: true,
        hinh_anh: true,
      },
    });

    if (anhDaLuu == "") {
      return errorCode(
        res,
        id,
        "Bạn chưa lưu ảnh nào! Hãy lưu một ảnh để hiển thị"
      );
    }

    successCode(res, anhDaLuu, `danh sách ảnh đã lưu với id ${id}`);
  } catch (error) {
    failCode(res, "Lỗi BE");
  }
};

const getAnhDaTaoByID = async (req, res) => {
  try {
    const { id } = req.params;
    const listHinhAnh = await prisma.hinh_anh.findMany({
      where: {
        nguoi_dung_id: Number(id),
      },
      include: {
        nguoi_dung: true,
      },
    });
    if (listHinhAnh == "") {
      return errorCode(
        res,
        id,
        "Bạn chưa đăng ảnh nào! Hãy đăng hình ảnh để có người yêu <3"
      );
    }
    successCode(res, listHinhAnh, "Danh sách ảnh đã tạo");
  } catch (error) {
    failCode(res, "Lỗi BE");
  }
};

const deleteHinhAnhByID = async (req, res) => {
  try {
    const { id } = req.params;
    // xóa lưu ảnh
    const luuAnh = await prisma.luu_anh.deleteMany({
      where: {
        hinh_id: Number(id),
      },
    });
    // xóa bình luận
    const binhLuan = await prisma.binh_luan.deleteMany({
      where: {
        hinh_id: Number(id),
      },
    });

    // xóa ảnh
    const hinhAnh = await prisma.hinh_anh.delete({
      where: {
        hinh_id: Number(id),
      },
    });

    successCode(res, hinhAnh, `xóa thành công ảnh ${id}`);
  } catch (error) {
    errorCode(res, "Hình ảnh không tồn tại hoặc đã được xóa trước đó");
  }
};

module.exports = {
  getUserToken,
  getAnhDaLuuByID,
  getAnhDaTaoByID,
  deleteHinhAnhByID,
};
