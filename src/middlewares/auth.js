const jwt = require("jsonwebtoken");

// TODO: refactor and modify.
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.status(401).send({ message: "Unauthorized!" });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).send({ message: "Forbidden!" });
    next();
  });
};
module.exports = authenticateToken;
