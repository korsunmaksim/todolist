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
var CustomException = /** @class */ (function (_super) {
    __extends(CustomException, _super);
    function CustomException(status, message) {
        var _this = _super.call(this, message) || this;
        _this.status = status;
        Object.setPrototypeOf(_this, CustomException.prototype);
        return _this;
    }
    CustomException.BadRequest = function (message) {
        return new CustomException(400, message);
    };
    CustomException.Unauthorized = function () {
        return new CustomException(401, 'Unauthorized');
    };
    CustomException.Forbidden = function (message) {
        return new CustomException(403, message);
    };
    return CustomException;
}(Error));
exports.default = CustomException;
//# sourceMappingURL=custom-exception.util.js.map