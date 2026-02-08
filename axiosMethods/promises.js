const axios = require("axios");

const isbn = "9780132350884";

axios
  .get(`http://localhost:3000/general/books/isbn/${isbn}`)
  .then((response) => {
    console.log("Book details:");
    console.log(response.data);
  })
  .catch((error) => {
    console.log("Error fetching book");
  });
