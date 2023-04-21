const { PrismaClient } = require("@prisma/client");
const { successCode, failCode, errorCode } = require("../config/response");

const prisma = new PrismaClient();

const getAnhVaNguoiTaoAnh = async (req, res) => {
  try {
    const { id } = req.params;
    const image = await prisma.hinh_anh.findMany({
      where: {
        hinh_id: Number(id),
      },
      include: {
        nguoi_dung: true,
      },
    });

    if (image == "") {
      return errorCode(res, id, `không tìm thấy hình có id: ${id}`);
    }

    successCode(
      res,
      image,
      `Thông tin hình ảnh có id ${id} được tạo ra bởi người dùng`
    );
  } catch (error) {
    failCode(res, "Lỗi BE");
  }
};

const getBinhLuanByID = async (req, res) => {
  try {
    const { id } = req.params;
    const comment = await prisma.binh_luan.findMany({
      where: {
        hinh_id: Number(id),
      },
      include: {
        hinh_anh: true,
        nguoi_dung: true,
      },
    });

    if (comment == "") {
      return errorCode(
        res,
        id,
        "Chưa có bình luận nào! Hãy cho tôi biết cảm nghĩ của bạn nhé"
      );
    }

    successCode(res, comment, `Thông tin bình luận theo id ảnh`);
  } catch (error) {
    failCode(res, "Lỗi BE");
  }
};

const getLuuAnhByID = async (req, res) => {
  try {
    const { id } = req.params;
    const luuAnh = await prisma.luu_anh.findMany({
      where: {
        hinh_id: Number(id),
      },
      include: {
        nguoi_dung: true,
        hinh_anh: true,
      },
    });

    if (luuAnh == "") {
      errorCode(res, id, "Chưa lưu ảnh");
    } else {
      successCode(res, luuAnh, "Đã lưu ảnh");
    }
  } catch (error) {
    failCode(res, "Lỗi BE");
  }
};

const createBinhLuan = async (req, res) => {
    try {
        const { nguoi_dung_id, hinh_id, noi_dung } = req.body;

        // kiểm tra người dùng có tồn tại không
        const nguoiDung = await prisma.nguoi_dung.findUnique({
          where: {
            nguoi_dung_id : nguoi_dung_id,
          },
        });
        if (!nguoiDung) {
          return errorCode(res, nguoi_dung_id, "Không tìm thấy người dùng");
        };
      
        // kiểm tra hình ảnh có tồn tại không
        const hinhAnh = await prisma.hinh_anh.findUnique({
          where: {
            hinh_id : hinh_id,
          },
        });
        if (!hinhAnh) {
          return errorCode(res, hinh_id, "Không tìm thấy hình ảnh");
        }
      
        // thêm bình luận
        const data = {
          nguoi_dung_id,
          hinh_id,
          noi_dung,
        };
      
        const binhLuan = await prisma.binh_luan.create({ data: data });
      
        successCode(res, binhLuan, `Thêm bình luận thành công`);
    } catch (error) {
        failCode(res, "Lỗi BE");
    }
};

module.exports = {
  getAnhVaNguoiTaoAnh,
  getBinhLuanByID,
  getLuuAnhByID,
  createBinhLuan,
};
