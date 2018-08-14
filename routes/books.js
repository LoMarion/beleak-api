import express from 'express';
const router = express.Router();
import getConnection from '../db/db.js';
import Book from '../models/book.js'
import bluebird from 'bluebird';
import 'express-async-errors';

const createNewBook = async (book) => {
const createdBook = await getConnection.execute(
    'INSERT INTO books ?, ?, ? , ?, ? , ?, ?, ?, ?', 
    [book.title, book.author, book.picture, book.country, book.publicationDate, book.category, book.summary, book.annotation, book.rate]);
    return createdBook;
}

// create new book
router.post('/', async (req, res, next) => {
    const book = await createNewBook(req.body);
    res.json(book)
});


export default router;