const Many = require('extends-classes');
const Base = require('./BaseController');

// class BookController extends Many(BaseController) {
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
        res.send(this.sendResponse(request.body, 'sara'));
    };

    /**
     * Store a newly created resource in storage.
     */
    store(request) { }

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

exports.index = (req, res) => {
    res.send('NOT IMPLEMENTED: Site Home Page');
};