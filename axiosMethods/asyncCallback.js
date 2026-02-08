const axios = require("axios");

// async function with callback
async function getAllBooks(callback) {
  try {
    const response = await axios.get(
      "http://localhost:3000/general/books"
    );
    callback(null, response.data);
  } catch (error) {
    callback(error, null);
  }
}

// calling the function
getAllBooks((err, data) => {
  if (err) {
    console.log("Error fetching books");
  } else {
    console.log("All Books:");
    console.log(data);
  }
});