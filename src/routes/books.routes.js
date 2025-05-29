import { Router } from "express";
import {
  addBook,
  updateBookInfo,
  deleteBook,
  getAllBooks,
} from "../controller/books.controller";
const router = Router();

//Routes
router.route("/").get(getAllBooks).post(addBook);
router.route("/:id").patch(updateBookInfo).delete(deleteBook);

export default router;
