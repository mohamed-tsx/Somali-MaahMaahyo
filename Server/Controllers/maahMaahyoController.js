const asyncHandler = require("express-async-handler");
const Prisma = require("../Config/Prisma");
const getAllMaahMaahyo = asyncHandler(async (req, res) => {
  const AllMaahMaahyo = Prisma.maahMaahyo.findMany();
  res.status(200).json({
    success: true,
    maahMaahyo: AllMaahMaahyo,
  });
});

module.exports = {
  getAllMaahMaahyo,
};
