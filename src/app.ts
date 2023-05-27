import express, { Application, NextFunction, Request, Response } from "express";
import cors from "cors";


const app: Application = express();

// using cors
app.use(cors());

// parse data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// we will import all routes here 
import bookRoute from "./modules/book/book.route";

// here will be default routes
app.get("/", (req, res)=>{
    res.send("Hello World");
})

// custom routes here
app.use("/v1/books", bookRoute);


export default app;
