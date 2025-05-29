#  Book Management REST API

A simple REST API built with Node.js and Express.js to manage a list of books. This API supports basic CRUD operations (Create, Read, Update, Delete) and stores data in-memory (no database required).

---

##  Features

- View all books (`GET /books`)
- Add a new book (`POST /books`)
- Update a book by ID (`PATCH /books/:id`)
- Delete a book by ID (`DELETE /books/:id`)
- Data is stored in memory (array), no external database

---

##  Tech Stack

- Node.js
- Express.js
- UUID (for generating unique book IDs)
- Postman (for API testing)

---

##  Project Structure

```
project-root/
├── src/
│   ├── app.js                # Express app setup
│   ├── index.js              # Entry point (starts the server)
│   ├── routes/
│   │   └── books.routes.js   # Routes for book endpoints
│   ├── controller/
│   │   └── books.controller.js # CRUD logic
│   ├── utils/
│   │   ├── ApiError.js       # Custom error handler
│   │   └── ApiResponse.js    # Standard response wrapper
├── package.json
├── README.md
```

---

##  Installation

```bash
git clone https://github.com/yourusername/elevatelab-task3.git
cd elevatelab-task3
npm install
```

---

##  Usage

### Start the Server

```bash
npm run dev   # Development with nodemon (auto-restarts)
npm start     # Production-ready
```

Server will run on: `http://localhost:3000`

---

##  API Endpoints

###  Add a Book

**POST** `/api/v1/books`

```json
{
  "name": "The Hobbit",
  "author": "J.R.R. Tolkien"
}
```

 **Response:**
```json
{
  "success": true,
  "message": "Books added successfully",
  "data": {
    "id": "uuid",
    "name": "The Hobbit",
    "author": "J.R.R. Tolkien"
  }
}
```

---

###  Get All Books

**GET** `/api/v1/books`

 **Response:**
```json
[
  {
    "id": "uuid",
    "name": "1984",
    "author": "George Orwell"
  },
  ...
]
```

---

###  Update a Book

**PATCH** `/api/v1/books/:id`

```json
{
  "name": "Updated Book Title",
  "author": "Updated Author"
}
```

 **Response:**
```json
{
  "success": true,
  "message": "Book information updated successfully",
  "data": {
    "id": "uuid",
    "name": "Updated Book Title",
    "author": "Updated Author"
  }
}
```

---

###  Delete a Book

**DELETE** `/api/v1/books/:id`

**Response:**
```json
{
  "success": true,
  "message": "Book Deleted Successfully",
  "data": {}
}
```

---

##  Sample Data

```js
[
  {
    "id": "uuid1",
    "name": "To Kill a Mockingbird",
    "author": "Harper Lee"
  },
  {
    "id": "uuid2",
    "name": "1984",
    "author": "George Orwell"
  }
]
```

---

##  Testing

Use [Postman](https://www.postman.com/) or any API client to test the endpoints.

---

##  Notes

- Books are stored in memory, so restarting the server will reset the list.
- `uuid` is used to uniquely identify each book.
- API responses are standardized using `ApiResponse`.
- Errors are handled using a custom `ApiError` class.

---
