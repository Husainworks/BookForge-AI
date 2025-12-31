const express = require("express");
const {
  exportAsDocument,
  exportAsPDF,
} = require("../controlller/exportController");
const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/:id/pdf", protect, exportAsPDF);
router.get("/:id/doc", protect, exportAsDocument);

module.exports = router;
