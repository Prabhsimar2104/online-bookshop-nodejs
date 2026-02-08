# Online Bookshop – Node.js Project

## Project Description
This project is a Node.js + Express based Online Bookshop API that allows general users and registered users to interact with a collection of books. It demonstrates the use of Axios with async/await, callbacks, and promises to fetch data from APIs.

## Technologies Used
- Node.js
- Express.js
- Axios
- Body-Parser
- Nodemon
- Git & GitHub

## Project Structure

```
online-bookshop/
│
├── index.js
├── package.json
├── README.md
│
├── data/
│   ├── books.js
│   └── users.js
│
├── routes/
│   ├── general.js
│   └── registered.js
│
├── axiosMethods/
│   ├── asyncCallback.js
│   ├── promises.js
│   ├── author.js
│   └── title.js
```

## How to Run the Project

### Install Dependencies
```bash
npm install
```

### Start the Server
```bash
npm run dev
```

Server runs on: `http://localhost:3000`

## General User APIs (Tasks 1–7)

### Task 1: Get all books
```
GET /general/books
```

### Task 2: Get book by ISBN
```
GET /general/books/isbn/:isbn
```

### Task 3: Get books by Author
```
GET /general/books/author/:author
```

### Task 4: Get books by Title
```
GET /general/books/title/:title
```

### Task 5: Get book reviews
```
GET /general/books/review/:isbn
```

### Task 6: Register new user
```
POST /general/register
```

**Request Body (JSON):**
```json
{
  "username": "prabh",
  "password": "1234"
}
```

### Task 7: Login user
```
POST /general/login
```

**Request Body (JSON):**
```json
{
  "username": "prabh",
  "password": "1234"
}
```

## Registered User APIs (Tasks 8–9)

### Task 8: Add / Modify Book Review
```
PUT /registered/review/:isbn
```

**Request Body (JSON):**
```json
{
  "username": "prabh",
  "review": "Excellent book"
}
```

### Task 9: Delete Book Review
```
DELETE /registered/review/:isbn
```

**Request Body (JSON):**
```json
{
  "username": "prabh"
}
```

## Axios Programs (Tasks 10–13)

These are standalone Node.js programs that call the APIs.

### Task 10: Get all books (Async + Callback)
```bash
node axiosMethods/asyncCallback.js
```

### Task 11: Search by ISBN (Promises)
```bash
node axiosMethods/promises.js
```

### Task 12: Search by Author
```bash
node axiosMethods/author.js
```

### Task 13: Search by Title
```bash
node axiosMethods/title.js
```

## Screenshots
Screenshots have been taken for each task, showing:
- API requests
- Axios outputs
- Terminal responses

## Task 14: GitHub Repository

GitHub Link: `https://github.com/<your-username>/online-bookshop-nodejs`

## Conclusion
This project demonstrates:
- REST API development using Express
- User authentication (basic)
- Review management
- Axios usage with async/await, callbacks, and promises
- Proper modular Node.js structure

## Author
Prabh

## License
This project is open source and available under the MIT License.