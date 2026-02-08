const express = require("express");
const router = express.Router();

const books = require("../data/books");
const users = require("../data/users");

/**
 * TASK 8
 * Add or modify a book review
 */
router.put("/review/:isbn", (req, res) => {
  const isbn = req.params.isbn;
  const { username, review } = req.body;

  // Check user
  if (!users[username]) {
    return res.status(404).json({ message: "User not found" });
  }

  // Check book
  if (!books[isbn]) {
    return res.status(404).json({ message: "Book not found" });
  }

  // Add or update review
  books[isbn].reviews[username] = review;

  res.status(200).json({
    message: "Review added/updated successfully",
  });
});

module.exports = router;

/**
 * TASK 9
 * Delete a book review by a particular user
 */
router.delete("/review/:isbn", (req, res) => {
  const isbn = req.params.isbn;
  const { username } = req.body;

  // Check user
  if (!users[username]) {
    return res.status(404).json({ message: "User not found" });
  }

  // Check book
  if (!books[isbn]) {
    return res.status(404).json({ message: "Book not found" });
  }

  // Check if review exists
  if (!books[isbn].reviews[username]) {
    return res.status(404).json({ message: "Review not found for this user" });
  }

  // Delete review
  delete books[isbn].reviews[username];

  res.status(200).json({ message: "Review deleted successfully" });
});
