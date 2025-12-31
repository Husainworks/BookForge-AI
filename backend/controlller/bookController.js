const Book = require("../models/Book");

const createBook = async (req, res) => {
  try {
    const { title, author, subTitle, chapters } = req.body;

    if (!title || !author) {
      return res.status(400).json({
        message: "Please provide a title or author",
      });
    }

    const book = await Book.create({
      userId: req.user._id,
      title,
      author,
      subTitle,
      chapters,
    });

    res.status(201).json({
      book,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

const getBooks = async (req, res) => {
  try {
    const books = await Book.find({ userId: req.user._id }).sort({
      createdAt: -1,
    });

    res.status(200).json({
      books,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

const getBookById = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      res.status(404).json({
        message: "Book not Found",
      });
    }

    if (book.userId.toString() !== req.user._id.toString()) {
      res.status(401).json({
        message: "Not authorized to view this book",
      });
    }

    res.status(200).json({
      book,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

const updateBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      res.status(404).json({
        message: "Book not Found",
      });
    }

    if (book.userId.toString() !== req.user._id.toString()) {
      res.status(401).json({
        message: "Not authorized to update this book",
      });
    }

    const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });

    res.status(200).json({
      updatedBook,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

const deleteBook = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) {
      res.status(404).json({
        message: "Book not Found",
      });
    }

    if (book.userId.toString() !== req.user._id.toString()) {
      res.status(401).json({
        message: "Not authorized to delete this book",
      });
    }

    await book.deleteOne();

    res.status(200).json({
      message: "Book deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

const updateBookCover = async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);

    if (!book) return res.status(404).json({ message: "Book not Found" });

    if (book.userId.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "Not authorized" });
    }

    if (!req.file) {
      return res.status(400).json({ message: "No image file provided" });
    }

    if (book.coverImage) {
      const publicId = book.coverImage
        .split("/")
        .slice(-2)
        .join("/")
        .split(".")[0];

      await cloudinary.uploader.destroy(publicId);
    }

    book.coverImage = req.file.path;

    const updatedBook = await book.save();

    res.status(200).json({
      updatedBook,
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error",
    });
  }
};

module.exports = {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook,
  updateBookCover,
};
