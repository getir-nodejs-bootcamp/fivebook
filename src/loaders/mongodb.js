const Mongoose = require("mongoose");

const db = Mongoose.connection;

db.once("open", () => {
  console.log("Connected to MongoDB successfully.");
});

const connectDB = async () => {
  const { DB_CONNECTION_STRING, DB_NAME, DB_USERNAME, DB_USERPWD } =
    process.env;
  await Mongoose.connect(DB_CONNECTION_STRING, {
    dbName: DB_NAME,
    user: DB_USERNAME,
    pass: DB_USERPWD,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = {
  connectDB,
};
