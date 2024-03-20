const express = require("express");
require("dotenv").config();
const maahmaayoRoutes = require("./Routes/maaMaahyoRoutes");

const server = express();
server.use(express.json());
server.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT;

server.use("/api/v1/maahmaayo/", maahmaayoRoutes);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
