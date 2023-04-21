const express = require("express");
const trangChuRoute = express.Router();

const { getDanhSachAnh, getDanhSachAnhTheoTen } = require("../controllers/trangChuController");



trangChuRoute.get("/danh-sach-anh", getDanhSachAnh);
trangChuRoute.get("/tim-kiem-anh", getDanhSachAnhTheoTen);


module.exports = {
    trangChuRoute
};
