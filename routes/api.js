const bookController = new (require('../app/Controllers/BookController'));

module.exports = (app) => {

    // Book
    app.get('/', bookController.index);
    app.get('/api/books', bookController.index);
    app.post('/api/book/create', bookController.store);

}