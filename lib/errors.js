'use strict';


function RequestError(cause) {

    this.name = 'RequestError';
    this.message = String(cause);
    this.cause = cause;

    if (Error.captureStackTrace) {
        Error.captureStackTrace(this);
    }

}
RequestError.prototype = Object.create(Error.prototype);
RequestError.prototype.constructor = RequestError;


function StatusCodeError(statusCode, message) {

    this.name = 'StatusCodeError';
    this.statusCode = statusCode;
    this.message = statusCode + ' - ' + message;

    if (Error.captureStackTrace) {
        Error.captureStackTrace(this);
    }

}
StatusCodeError.prototype = Object.create(Error.prototype);
StatusCodeError.prototype.constructor = StatusCodeError;


module.exports = {
    RequestError: RequestError,
    StatusCodeError: StatusCodeError
};
