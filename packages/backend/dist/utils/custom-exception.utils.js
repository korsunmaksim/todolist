"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CustomException = /** @class */ (function () {
    function CustomException(status, message) {
        this.status = status;
        this.message = message;
    }
    CustomException.BadRequest = function (message) {
        return new CustomException(400, message);
    };
    CustomException.Unauthorized = function () {
        return new CustomException(401, "Unauthorized");
    };
    CustomException.Forbidden = function (message) {
        return new CustomException(403, message);
    };
    CustomException.NotFound = function (message) {
        return new CustomException(404, message);
    };
    return CustomException;
}());
exports.default = CustomException;
//# sourceMappingURL=custom-exception.utils.js.map