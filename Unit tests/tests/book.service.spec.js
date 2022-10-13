const bookService = require('../src/book.service');
const booksProvider = require('../src/books-provider');
const emailService = require('../src/email.service');

//describe(name, fn) - creates a block that groups together several related tests
describe ('searchBook', () => {
    //first part of condition - behavioral notation 
    //describe can be nested
    describe ('when one book matches search text', () => {
        //beforeEach(fn, timeout) - runs a function before each of the tests in this file runs
        beforeEach (() => {
            booksProvider.getBooks = jest.fn(() => [
                {
                    _id: 1, 
                    title: "A book",
                    publishedDate: '2009'
                }
            ]);
            emailService.sendMissingBookEmail = jest.fn(() => {
                text: "Message text of the email"
            });
        });
        // it(name, fn, timeout) - a test method that runs a test 
        it ('should return 1 book', () => {
            const books = bookService.searchBooks('book');
            expect(books.length).toBe(1);
        });

        it ('should return 1 book', () => {
            const books = bookService.searchBooks('book');
            expect(books[0].title).toBe('A book 2009');
        });

        it ('should not call send email function', () => {
            const books = bookService.searchBooks('book');
            expect(emailService.sendMissingBookEmail).not.toHaveBeenCalled();
        });
    });
    describe('When zero books match search text', () => {
        beforeEach (() => {
            booksProvider.getBooks = jest.fn(() => [
                {
                    _id: 1, 
                    title: "A book",
                    publishedDate: '2009'
                }
            ]);
            emailService.sendMissingBookEmail = jest.fn(() => {
                text: "Message text of the email"
            });
        });
        it ('should return 0 book', () => {
            const books = bookService.searchBooks('another');
            expect(books.length).toBe(0);
        });
        it ('should call send email function', () => {
            const books = bookService.searchBooks('another');
            expect(emailService.sendMissingBookEmail).toHaveBeenCalled();
        });
    });
});