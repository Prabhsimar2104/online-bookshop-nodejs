const express = require("express");
const router = express.Router();

const books = require("../data/books");

const users = require("../data/users");

/**
 * TASK 1
 * Get all books available in the shop
 */
router.get("/books", (req, res) => {
  res.status(200).json(books);
});

module.exports = router;

/**
 * TASK 2
 * Get book details based on ISBN
 */
router.get("/books/isbn/:isbn", (req, res) => {
  const isbn = req.params.isbn;

  if (books[isbn]) {
    res.status(200).json(books[isbn]);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

/**
 * TASK 3
 * Get all books by Author
 */
router.get("/books/author/:author", (req, res) => {
  const authorName = req.params.author.toLowerCase();

  const result = Object.values(books).filter(
    (book) => book.author.toLowerCase() === authorName
  );

  if (result.length > 0) {
    res.status(200).json(result);
  } else {
    res.status(404).json({ message: "No books found for this author" });
  }
});

/**
 * TASK 4
 * Get all books based on Title
 */
router.get("/books/title/:title", (req, res) => {
  const titleQuery = req.params.title.toLowerCase();

  const result = Object.values(books).filter(
    (book) => book.title.toLowerCase().includes(titleQuery)
  );

  if (result.length > 0) {
    res.status(200).json(result);
  } else {
    res.status(404).json({ message: "No books found with this title" });
  }
});

/**
 * TASK 5
 * Get book reviews based on ISBN
 */
router.get("/books/review/:isbn", (req, res) => {
  const isbn = req.params.isbn;

  if (books[isbn]) {
    res.status(200).json(books[isbn].reviews);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
});

/**
 * TASK 6
 * Register a new user
 */
router.post("/register", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Username and password required" });
  }

  if (users[username]) {
    return res.status(409).json({ message: "User already exists" });
  }

  users[username] = { password };
  res.status(201).json({ message: "User registered successfully" });
});

/**
 * TASK 7
 * Login as a registered user
 */
router.post("/login", (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: "Username and password required" });
  }

  if (!users[username]) {
    return res.status(404).json({ message: "User does not exist" });
  }

  if (users[username].password !== password) {
    return res.status(401).json({ message: "Invalid password" });
  }

  res.status(200).json({ message: "Login successful" });
});

