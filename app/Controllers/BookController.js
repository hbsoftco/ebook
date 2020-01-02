const Base = require('./BaseController')

class BookController {

    /**
     * Create a new controller instance.
     */
    constructor() {
        console.log(process.env.DB_HOST);
    }

    /**
     * Display a listing of the resource.
     */
    inde() { }

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
