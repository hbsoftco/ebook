const bookController = new (require('../app/Controllers/BookController'));

module.exports = (app) => {

    // Book
    app.get('/', bookController.index);
    // app.post('/', bookController.store);

}