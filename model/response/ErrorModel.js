class ErrorModel extends Error {

    constructor(statusCode, statusMessage) {
        super()
        this.statusCode = statusCode;
        this.statusMessage = statusMessage;
    }

}

module.exports = ErrorModel