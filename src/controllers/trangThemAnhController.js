const { PrismaClient } = require('@prisma/client');
const { errorCode, successCode, failCode } = require('../config/response');


const prisma = new PrismaClient();


const createHinhAnh = async (req, res) => {
    try {
        //nguoi_dung_id từ authentica
        const { nguoi_dung_id } = req;
        const { ten_hinh, duong_dan, mo_ta } = req.body;
    
        // const nguoiDung = await prisma.nguoi_dung.findUnique({
        //     where : {
        //         nguoi_dung_id
        //     }
        // });
        // if(!nguoiDung){
        //     return errorCode(res, nguoi_dung_id, `không tìm thấy người dùng có id: ${nguoi_dung_id}`)
        // }
     
        const hinhAnh = await prisma.hinh_anh.create({
            data: {
                ten_hinh,
                duong_dan,
                mo_ta,
                nguoi_dung_id
            }
        });
        successCode(res, hinhAnh, "Thêm ảnh thành công!");
    } catch (error) {
        failCode(res, "Lỗi BE");
    }
}


module.exports = {
    createHinhAnh,
}