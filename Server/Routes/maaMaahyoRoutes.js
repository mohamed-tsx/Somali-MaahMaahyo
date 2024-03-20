const express = require("express");
const {
  getAllMaahMaahyo,
  addMaahMaahyo,
} = require("../Controllers/maahMaahyoController");
const router = express.Router();

router.get("/dhamaanMaahMaahyooyinka", getAllMaahMaahyo);
router.post("/kudarMaahmaayo", addMaahMaahyo);

module.exports = router;
