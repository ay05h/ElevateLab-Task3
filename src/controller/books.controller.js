import { v4 as uuid } from "uuid";
import { ApiError } from "../utils/ApiError.js";
import { json } from "express";
import { ApiResponse } from "../utils/ApiResponse";

let books = [];

const getAllBooks = (req, res) => {
  return res
    .status(200)
    .json(new ApiResponse(200, { books }, "All books fetched successfully"));
};

const deleteBook = (req, res) => {
  const { id } = req.params;

  const isBookExist = books.some((item) => item.id === id);

  if (!isBookExist) {
    throw new ApiError(404, "Book not found");
  }

  books = books.filter((item) => item.id !== id);

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Book Deleted Successfully"));
};

const updateBookInfo = (req, res) => {
  const { id } = req.params;

  let { name, author } = req.body;
  name = name?.trim();
  author = author?.trim();

  if (!name || !author) {
    throw new ApiError(400, "Name and Author name is required");
  }

  const book = books.find((item) => item.id === id);

  if (!book) {
    throw new ApiError(404, "Book not found");
  }
  book.name = name;
  book.author = author;

  return res
    .status(200)
    .json(new ApiResponse(200, book, "Book information updated successfully"));
};

const addBook = (req, res) => {
  let { name, author } = req.body;
  name = name?.trim();
  author = author?.trim();

  if (!name || !author) {
    throw new ApiError(400, "Name and Author name is required");
  }

  const book = {
    id: uuid(),
    name: name,
    author: author,
  };
  books.push(book);

  return res
    .status(200)
    .json(new ApiResponse(201, book, "Books added successfully"));
};

export { getAllBooks, updateBookInfo, deleteBook, addBook };
