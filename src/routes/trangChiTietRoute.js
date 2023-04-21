const express = require('express');
const { getAnhVaNguoiTaoAnh, getBinhLuanByID, getLuuAnhByID, createBinhLuan } = require('../controllers/trangChiTietController');
const { authentication } = require('../auth/authentication');

const trangChiTietRoute = express.Router();


trangChiTietRoute.get("/anh-va-nguoi-tao-anh/:id", authentication, getAnhVaNguoiTaoAnh);
trangChiTietRoute.get("/binh-luan/:id", authentication, getBinhLuanByID);
trangChiTietRoute.get("/luu-anh/:id", authentication, getLuuAnhByID);
trangChiTietRoute.post("/binh-luan", authentication, createBinhLuan);


module.exports = {
    trangChiTietRoute
}