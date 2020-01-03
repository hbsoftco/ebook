
class BaseController {

    constructor() { }

    static sendResponse(data, message) {
        let response = {
            'success': true,
            'data': data,
            'message': message
        }
        return response;
    }

    static sendError(error) {
        let response = {
            'success': false,
            'message': error
        }
        return response;
    }

}

module.exports = BaseController;

