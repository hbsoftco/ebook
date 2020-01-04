const Base = require('./BaseController');
const models = require( '../Models/index');

class BookController extends Base {

    /**
     * Create a new controller instance.
     */
    constructor() {
        super();
    }

    /**
     * Display a listing of the resource.
     */
    index = (request, res) => {
        models.User.findAll().then(users => {
            // users will be an array of all User instances        
            res.send(this.sendResponse(users, 'users list'));
        })
    };

    /**
     * Store a newly created resource in storage.
     */
    store = (request, res) => {
        res.send(this.sendResponse(request.body, ''));
    };

    /**
     * Update the specified resource in storage.
     */
    update(request, id) { }

    /**
     * Remove the specified resource from storage.     
     */
    destroy() { }
}

module.exports = BookController
