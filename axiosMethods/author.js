const axios = require("axios");

async function searchByAuthor(author) {
  try {
    const response = await axios.get(
      `http://localhost:3000/general/books/author/${encodeURIComponent(author)}`
    );
    console.log(`Books by ${author}:`);
    console.log(response.data);
  } catch (error) {
    console.log("Error fetching books by author");
  }
}

// call
searchByAuthor("Robert C. Martin");