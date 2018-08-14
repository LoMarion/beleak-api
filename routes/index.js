import express from 'express';
const rootRouter = express.Router();
import booksRouter from './books';

rootRouter.use('/books', booksRouter);

export default rootRouter;