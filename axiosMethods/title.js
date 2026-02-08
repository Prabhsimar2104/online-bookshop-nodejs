const axios = require("axios");

async function searchByTitle(title) {
  try {
    const response = await axios.get(
      `http://localhost:3000/general/books/title/${encodeURIComponent(title)}`
    );
    console.log(`Books with title "${title}":`);
    console.log(response.data);
  } catch (error) {
    console.log("Error fetching books by title");
  }
}

// call
searchByTitle("clean");