import express from "express";
import cors from "cors";
const app = express();
app.use(
  cors({
    origin: "*",
    credentials: false,
  })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

//routes import
import booksRoute from "./routes/books.routes.js";

//routes declarations
app.use("/api/v1/books", booksRoute);

export { app };
