const { PrismaClient } = require("@prisma/client");
const { successCode, errorCode, failCode } = require("../config/response");

const prisma = new PrismaClient();

const getDanhSachAnh = async (req, res) => {
  try {
    const danhSachAnh = await prisma.hinh_anh.findMany();
    successCode(res, danhSachAnh, "Danh sách hình ảnh trang chủ");
  } catch (error) {
    errorCode(res, "Lỗi BE");
  }
};

// tìm kiếm danh sách ảnh theo tên hoặc mô tả
const getDanhSachAnhTheoTen = async (req, res) => {
  try {
    const { keyword } = req.query;
    const images = await prisma.hinh_anh.findMany({
      where: {
        OR: [
          { ten_hinh: { contains: keyword.toLowerCase() } }, //toLowerCase() chuyển thành chữ thường
          { mo_ta: { contains: keyword.toLowerCase() } },
        ],
      },
      include: {
        nguoi_dung: true,
        binh_luan: true,
        luu_anh: true,
      },
    });
    successCode(res, images, `danh sách tìm kiếm với keyword: ${keyword}`);
  } catch (error) {
    failCode(res, "Lỗi BE")
  }
};

module.exports = {
  getDanhSachAnh,
  getDanhSachAnhTheoTen,
};
