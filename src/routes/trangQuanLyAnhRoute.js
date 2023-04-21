const express = require("express");
const { getUserToken, getAnhDaLuuByID, getAnhDaTaoByID, deleteHinhAnhByID } = require("../controllers/trangQuanLyAnhController");
const { authentication } = require("../auth/authentication");


const trangQuanLyAnhRoute = express.Router();


trangQuanLyAnhRoute.get("/thong-tin-user", authentication, getUserToken);
trangQuanLyAnhRoute.get("/anh-da-luu/:id", getAnhDaLuuByID);
trangQuanLyAnhRoute.get("/anh-da-tao/:id", getAnhDaTaoByID);
trangQuanLyAnhRoute.delete("/delete-anh/:id", authentication, deleteHinhAnhByID);



module.exports = {
    trangQuanLyAnhRoute
}