const Many = require('extends-classes');
const BaseController = require('./BaseController');

class CardController extends Many(BaseController) {

    /**
     * Create a new controller instance.
     */
    constructor() {
    }

    /**
     * Display a listing of the resource.
     */
    index() { }

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

module.exports = CardController  
