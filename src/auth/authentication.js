const { checkToken } = require("../config/jwt");


const authentication = (req, res, next) => {
    
    try {
        let { token } = req.headers;
        // kiểm tra token
       const tokenCheck = checkToken(token);

        // console.log("checkToken", checkToken(token))
        // bóc tách id cho hàm tiếp theo
        req.nguoi_dung_id = tokenCheck.data.nguoi_dung_id;

        // nếu hợp lệ
        next()
    } catch (error) {
        res.status(401).send(error.message);
    }
}

module.exports = {
    authentication
}