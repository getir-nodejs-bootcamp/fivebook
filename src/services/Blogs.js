const hs = require("http-status");
const Blog = require("../models/Blog");

const list = () => {
  return new Promise((resolve, reject) => {
    const blogs = Blog.find({});
    blogs
      .then((blogList) => {
        if (!blogList)
          reject({
            statusCode: hs.NOT_FOUND,
            message: "Blog list is not found.",
          });
        else resolve({ statusCode: hs.OK, blogs: blogList });
      })
      .catch((e) => {
        reject({
          statusCode: hs.INTERNAL_SERVER_ERROR,
          message: e,
        });
      });
  });
};

const create = (data) => {
  return new Promise((resolve, reject) => {
    const blog = new Blog(data);
    const saveBlog = blog.save();
    saveBlog
      .then((createdBlog) => {
        if (!createdBlog)
          reject({
            statusCode: hs.INTERNAL_SERVER_ERROR,
            message: "A new blog has not been created.",
          });
        else resolve({ statusCode: hs.OK, blog: createdBlog });
      })
      .catch((e) => {
        reject({
          statusCode: hs.INTERNAL_SERVER_ERROR,
          message: e,
        });
      });
  });
};

module.exports = { list, create };
