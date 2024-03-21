const asyncHandler = require("express-async-handler");
const Prisma = require("../Config/Prisma");
const getAllMaahMaahyo = asyncHandler(async (req, res) => {
  const AllMaahMaahyo = await Prisma.maahMaahyo.findMany();
  res.status(200).json({
    success: true,
    maahMaahyo: AllMaahMaahyo,
  });
});
const addMaahMaahyo = asyncHandler(async (req, res) => {
  const { maahmaahyo } = req.body;
  if (!maahmaahyo) {
    res.status(403);
    throw new Error("Fadlan qoraal soo geli!");
  }

  const existingMaahMaahyo = await Prisma.maahMaahyo.findUnique({
    where: {
      maahmaahyo: maahmaahyo,
    },
  });

  if (existingMaahMaahyo) {
    res.status(409).json({
      success: false,
      message: "Maahmaahyadan wey xareysantahay fadlan mid cusub soo geli.",
      existingMaahMaahyo,
    });
    return;
  }
  const newMaahMaahyo = await Prisma.maahMaahyo.create({
    data: {
      maahmaahyo,
    },
  });
  res.status(200).json({
    success: true,
    message: "Waxaad ku dartay maahmaahyo cusub",
    newMaahMaahyo,
  });
});

module.exports = {
  getAllMaahMaahyo,
  addMaahMaahyo,
};
