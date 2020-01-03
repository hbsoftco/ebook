const bookController = new (require('../app/Controllers/BookController'));

module.exports = (app) => {

    app.get('/', bookController.index);
    
}