const Many = require('extends-classes');
const Base = require('./BaseController');

// class BookController extends Many(BaseController) {
class BookController extends Base {

    /**
     * Create a new controller instance.
     */
    constructor() { }

    /**
     * Display a listing of the resource.
     */
    index() {
    }

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
