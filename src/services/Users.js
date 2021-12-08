const hs = require("http-status");
const User = require("../models/User");

const register = (data) => {
  return new Promise((resolve, reject) => {
    const user = new User(data);
    const saveUser = user.save();
    saveUser
      .then((createdUser) => {
        if (!createdUser)
          reject({
            statusCode: hs.INTERNAL_SERVER_ERROR,
            message: "User has not been registered.",
          });
        resolve({ statusCode: hs.OK, user: createdUser });
      })
      .catch((e) => {
        reject({
          statusCode: hs.INTERNAL_SERVER_ERROR,
          message: e,
        });
      });
  });
};

const login = (credentials) => {
  return new Promise((resolve, reject) => {
    if (checkLogin(credentials))
      resolve({
        statusCode: hs.OK,
        token: jwt.sign(credentials, process.env.JWT_SECRET),
      });
    else
      reject({
        statusCode: hs.UNAUTHORIZED,
        message: "User and password combination is not found.",
      });
  });
};

// TODO: add hash algorithm for passwords.
const checkLogin = (credentials) => {
  const user = User.find((us) => us.name === credentials.name);
  if (user) return credentials.password === user.password;
  return false;
};

module.exports = { register, login };
