const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getProductById,
  addProduct,
} = require("../controllers/productController");

router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.post("/", addProduct); // admin (hardcoded)

module.exports = router;
