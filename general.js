```javascript
const axios = require("axios");

const BASE_URL = "http://localhost:5000";

// Retrieve all books
async function getAllBooks() {
  try {
    const response = await axios.get(`${BASE_URL}/api/books`);
    console.log("All Books:");
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error retrieving books:", error.message);
  }
}

// Retrieve books by author
async function getBooksByAuthor(author) {
  try {
    const response = await axios.get(
      `${BASE_URL}/api/books/author/${encodeURIComponent(author)}`
    );

    console.log(`Books by ${author}:`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error retrieving books by author:", error.message);
  }
}

// Retrieve books by title
async function getBooksByTitle(title) {
  try {
    const response = await axios.get(
      `${BASE_URL}/api/books/title/${encodeURIComponent(title)}`
    );

    console.log(`Books with title ${title}:`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error retrieving books by title:", error.message);
  }
}

// Retrieve book by ISBN
async function getBookByISBN(isbn) {
  try {
    const response = await axios.get(
      `${BASE_URL}/api/books/${encodeURIComponent(isbn)}`
    );

    console.log(`Book with ISBN ${isbn}:`);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error retrieving book by ISBN:", error.message);
  }
}

module.exports = {
  getAllBooks,
  getBooksByAuthor,
  getBooksByTitle,
  getBookByISBN,
};
```
