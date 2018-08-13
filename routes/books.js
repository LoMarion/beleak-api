import express from 'express';
let router = express.Router();
import * as asyncHandler from 'express-async-handler';
import connection from '../db/db.js';
import Book from '../models/book.js'
import bluebird from 'bluebird';

const createNewBook = (book) => {
const book = await connection.execute(
    'INSERT INTO books ?, ?, ? , ?, ? , ?, ?, ?, ?', 
    [book.title, book.author, book.picture, book.country, book.publicationDate, book.category, book.summary, book.annotation, book.rate]);
    return book;
}

// create new book
router.post('/book', asyncHandler(async (req, res, next) => {
        const book = await createNewBook(req.body);
        res.json(book)
}));