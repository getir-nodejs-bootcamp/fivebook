const service = require("../services/Users");

const register = (req, res) => {
  service
    .register(req.body)
    .then((ret) => {
      res.status(ret.statusCode).send(ret.user);
    })
    .catch((ret) => {
      res.status(ret.statusCode).send(ret.message);
    });
};

const login = (req, res) => {
  service
    .login(req.body)
    .then((ret) => {
      res.status(ret.statusCode).send(ret.token);
    })
    .catch((ret) => {
      res.status(ret.statusCode).send(ret.message);
    });
};

module.exports = {
  register,
  login,
};
