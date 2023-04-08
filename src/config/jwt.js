const jwt = require('jsonwebtoken');


const createToken = (data) => {

    let token = jwt.sign({ data }, "node", { expiresIn: "5m"});

    return token;
};

const checkToken = (token) => {
    const verifyToken = jwt.verify(token, "node");
    return verifyToken;
};

const descriptToken = (token) => {
    return jwt.decode(token)
};

module.exports = {
    createToken,
    checkToken,
    descriptToken
}