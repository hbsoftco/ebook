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
    index = (req, res) => {
        // res.send(super.sendResponse(req.body, 'sara'));
        res.send(this.sendResponse(req.body, 'sara'));
        // res.json(req.body);
    };

    /**
     * Display a listing of the resource.
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