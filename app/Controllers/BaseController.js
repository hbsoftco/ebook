
class BaseController {

    constructor() { }

    sendResponse(data, message) {
        let response = {
            'success': true,
            'data': data,
            'message': message
        }
        return response;
    }

    sendError(error) {
        let response = {
            'success': false,
            'message': error
        }
        return response;
    }

}

module.exports = BaseController;
