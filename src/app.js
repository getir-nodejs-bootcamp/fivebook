const express = require("express");
const app = express();
const { UserRoutes, BlogRoutes } = require("./routes");
const config = require("./config");
const loaders = require("./loaders");

config();
loaders();
app.use(express.json());

app.listen(process.env.PORT, () => {
  app.use("/", UserRoutes);
  app.use("/blog", BlogRoutes);
});
