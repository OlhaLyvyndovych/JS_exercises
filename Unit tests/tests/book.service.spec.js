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
                    title: "Test book",
                    publishedDate: '2009-10-15T00:00:00.000-0700'
                }
            ]);
            emailService.sendMissingBookEmail = jest.fn(() => {
                text: "Message text of the email"
            });
        });
        // it(name, fn, timeout) - a test method that runs a test 
        it ('should return 1 book', () => {
            const books = bookService.searchBooks('Test');
            expect(books.length).toBe(1);
        });

        it ('should concatenate a title with a year of published date', () => {
            const books = bookService.searchBooks('Test');
            expect(books[0]).toMatchObject({
                title: 'Test book 2009'
            });
        });

        it ('should not call send email function', () => {
            const books = bookService.searchBooks('book');
            expect(emailService.sendMissingBookEmail).not.toHaveBeenCalled();
        });
    });
    //describe.only(name, fn) - to run only one describe block
    describe ('When zero books match search text', () => {
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
        //it.only or test.only to specify which tests are the only ones you want to run in test file
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

describe ('getMostPopularBook', () => {
    describe ('when two books are given', () => {
        //Mock the books from booksProvider
        beforeEach(() => {
            booksProvider.getBooks = jest.fn(() => [
                {
                    _id: 1,
                    ordered: 100
                },
                {
                    _id: 2,
                    ordered: 50
                }
            ]);
        });
        it ('should return the book with higher order count', () => {
            const book = bookService.getMostPopularBook();
            expect (book.ordered).toBe(100);
        });
    });

});

describe ('calculateDiscount', () => {
    describe ('when book is given with id', () => {
        beforeEach (() => {
            booksProvider.getBooks = jest.fn(() => [
                {
                    _id: 1,
                    price: 100
                }
            ]);
        });
        it ('should return price with 20% discount', () => {
            const price = bookService.calculateDiscount(1);
            expect (price).toBe(80);
        });
    });

    describe ('when book with given id is not found', () => {
        beforeEach (() => {
            booksProvider.getBooks = jest.fn(() => []);
        });
        it ('should throw an error', () => {
            
            expect (() => bookService.calculateDiscount(1)).toThrow('Book with such id not found');
        });
    });
});

describe ('calculateDiscountAsync', () => {
    describe ('when book is given with id', () => {
        beforeEach (() => {
            booksProvider.getBooks = jest.fn(() => [
                {
                    _id: 1,
                    price: 100
                }
            ]);
        });
        it ('should return price with 20% discount', async () => {
            const price = await bookService.calculateDiscountAsync(1);
            expect (price).toBe(80);
        });
    });

    describe ('when book with given id is not found', () => {
        beforeEach (() => {
            booksProvider.getBooks = jest.fn(() => []);
        });
        it ('should throw an error', () => {
            
            expect (async () => await bookService.calculateDiscountAsync(1)).rejects.toThrow('Book with such id not found');
        });
    });
});