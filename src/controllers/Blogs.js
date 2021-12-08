const service = require("../services/Blogs");

const list = (req, res) => {
  service
    .list(req.body)
    .then((ret) => {
      res.status(ret.statusCode).send(ret.user);
    })
    .catch((ret) => {
      res.status(ret.statusCode).send(ret.message);
    });
};

const create = (req, res) => {
  service
    .create(req.body)
    .then((ret) => {
      res.status(ret.statusCode).send(ret.user);
    })
    .catch((ret) => {
      res.status(ret.statusCode).send(ret.message);
    });
};

module.exports = { list, create };
