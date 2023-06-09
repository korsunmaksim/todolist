"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var CustomError = /** @class */ (function (_super) {
    __extends(CustomError, _super);
    function CustomError(status, message) {
        var _this = _super.call(this, message) || this;
        _this.status = status;
        Object.setPrototypeOf(_this, CustomError.prototype);
        return _this;
    }
    CustomError.BadRequest = function (message) {
        return new CustomError(400, message);
    };
    CustomError.Unauthorized = function () {
        return new CustomError(401, 'Unauthorized');
    };
    CustomError.Forbidden = function (message) {
        return new CustomError(403, message);
    };
    return CustomError;
}(Error));
exports.default = CustomError;
//# sourceMappingURL=custom-error.utils.js.map