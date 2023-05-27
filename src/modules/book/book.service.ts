import { IBook } from "./book.interface";
import { Book } from "./book.model";

// show all books from the database
export const getAllBooksFromDb = async (): Promise<IBook[]> => {
  return Book.find({});
};

// task 2 ( find specific genre such as "Fantasy" )
export const getSpecificGenre = async (genre: string): Promise<IBook[]> => {
  const findSpecificGenre = Book.find({ genre: "Fantasy" });
  return findSpecificGenre;
};

// task 3 ( find specific genre "Sci-Fi" and published by "Roli Books" )
export const getSpecificGenreSciFi = async (genre: string, publisher: string): Promise<IBook[]> => {
  const findSpecificGenreSciFi = Book.find({ genre: "Sci-Fi", "publisher.name": "Roli Books" });
  return findSpecificGenreSciFi;
}

// task 4 
export const getFeaturedBooks = async (rating: number): Promise<IBook[]> => {
  const featuredBooks = Book.aggregate<IBook>([
    {
      $match: { rating: { $gte: 4 } }
    },
    {
      $addFields: {
        featured: {
          $cond: {
            if: { $gte: ['$rating', 4.5] },
            then: 'BestSeller',
            else: 'Popular'
          }
        }
      }
    },
    // { $out: "featuredBooks" }
  ]);
  return featuredBooks;
}

// Task 5 ( update price string to integer which publishes after 2020 )
export const convertPriceStrToInt = async () => {
  const updatePriceStrToInt = Book.updateMany(
    { publicationYear: { $gt: 2020 }, price: { $type: "string" } },
    [
      {
        $set: {
          price: { $toInt: "$price" }
        }
      }
    ]
  )
  // return updatePriceStrToInt;
}