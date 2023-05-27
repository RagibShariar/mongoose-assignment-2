import { NextFunction, Request, Response } from "express";
import { convertPriceStrToInt, getAllBooksFromDb, getFeaturedBooks, getSpecificGenre, getSpecificGenreSciFi } from "./book.service";


//   get all books 
export const getAllBooks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const book = await getAllBooksFromDb();
  res.send(book);
};

// task 2 ( find specific genre such as "Fantasy")
export const SpecificGenre = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { genre } = req.params;
  const book = await getSpecificGenre(genre);
  res.send(book);
};

// task 3 ( find specific genre "Sci-Fi" and published by "Roli Books" )
export const SpecificGenreSciFi = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { genre, publisher } = req.params;
  const book = await getSpecificGenreSciFi(genre, publisher);
  res.send(book);
}

// task 4
export const featuredBooks = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { rating } = req.params;
  const book = await getFeaturedBooks(parseInt(rating));
  res.send(book);
}

// // Task 5 ( update price string to integer which publishes after 2020 )
// export const updatePriceStrToInt = async (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   const book = await convertPriceStrToInt();
//   res.send(book);
// }