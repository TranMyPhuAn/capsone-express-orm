const express = require('express');
const { createHinhAnh } = require('../controllers/trangThemAnhController');
const { authentication } = require('../auth/authentication');


const trangThemAnhRoute = express.Router();

trangThemAnhRoute.post("/them-anh-user", authentication, createHinhAnh)



module.exports = {
    trangThemAnhRoute
}