import express, { Router } from "express";
import { SpecificGenre, SpecificGenreSciFi, featuredBooks, getAllBooks, } from "./book.controller";
// import { getAllBooksFromDb } from "./book.service";

const router: Router = Router();

router.get("/getAllBooks", getAllBooks);  // show all books from database
router.get("/SpecificGenre", SpecificGenre);  // task 2
router.get("/SpecificGenreSciFi", SpecificGenreSciFi); // task 3
router.get("/featuredBooks", featuredBooks); // task 4
// router.get("./updatePriceStrToInt", updatePriceStrToInt); // task 5

export default router;
