const express = require("express");
const { trangChuRoute } = require("./trangChuRoute");
const { trangChiTietRoute } = require("./trangChiTietRoute");
const { userRoute } = require("./userRoute");
const { trangQuanLyAnhRoute } = require("./trangQuanLyAnhRoute");
const { trangThemAnhRoute } = require("./trangThemAnhRoute");

const rootRoute = express.Router();

rootRoute.use("/user", userRoute);
rootRoute.use("/trang-chu", trangChuRoute);
rootRoute.use("/trang-chi-tiet", trangChiTietRoute);
rootRoute.use("/trang-quan-ly-anh", trangQuanLyAnhRoute);
rootRoute.use("/trang-them-anh", trangThemAnhRoute);



module.exports = {
  rootRoute,
};
