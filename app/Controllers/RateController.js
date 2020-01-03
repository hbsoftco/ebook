const Base = require('./BaseController');

class RateController extends Base {

    /**
     * Create a new controller instance.
     */
    constructor() {
        super();
        console.log('rate cons');
        const h = super.sendError('error');

    }

    /**
     * Display a listing of the resource.
     */
    index() {
        console.log('hossein bajan hastam');
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

module.exports = RateController  
