const Many = require('extends-classes');
const BaseController = require('./BaseController');

class BookController extends Many(BaseController) {

    /**
     * Create a new controller instance.
     */
    constructor() { }

    /**
     * Display a listing of the resource.
     */
    index(data) {
        const hb = BookController.sendResponse('hossein', 'bajan');
        return hb;
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
