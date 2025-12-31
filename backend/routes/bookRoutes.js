const express = require("express");
const { protect } = require("../middleware/authMiddleware");
const {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook,
  updateBookCover,
} = require("../controlller/bookController");
const upload = require("../middleware/uploadMiddleware");

const router = express.Router();

router.use(protect);

router.route("/").post(createBook).get(getBooks);
router.route("/:id").get(getBookById).put(updateBook).delete(deleteBook);
router.put("/cover/:id", upload.single("coverImage"), updateBookCover);

module.exports = router;
