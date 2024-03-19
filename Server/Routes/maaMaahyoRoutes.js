const express = require("express");
const { getAllMaahMaahyo } = require("../Controllers/maahMaahyoController");
const router = express.Router();

router.get("/dhamaanMaahMaahyooyinka", getAllMaahMaahyo);

module.exports = router;
