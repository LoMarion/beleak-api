export default {
    const createdBook = await getConnection.execute(
        'INSERT INTO books ?, ?, ? , ?, ? , ?, ?, ?, ?', 
        [book.title, book.author, book.picture, book.country, book.publicationDate, book.category, book.summary, book.annotation, book.rate]);
        return createdBook;
    }
}

