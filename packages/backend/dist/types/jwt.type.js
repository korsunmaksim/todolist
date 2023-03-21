"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtPayload = void 0;
var JwtPayload = /** @class */ (function () {
    function JwtPayload(user) {
        this._id = user._id;
    }
    JwtPayload.create = function (user) {
        var payload = new JwtPayload(user);
        return __assign({}, payload);
    };
    return JwtPayload;
}());
exports.JwtPayload = JwtPayload;
//# sourceMappingURL=jwt.type.js.map