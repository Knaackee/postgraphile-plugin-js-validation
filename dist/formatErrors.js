"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatErrors = void 0;
const formatErrors = (key, value) => {
    var obj = {};
    var result = (obj = {});
    var arr = key.split(".");
    for (var i = 0; i < arr.length - 1; i++) {
        obj = obj[arr[i]] = {};
    }
    obj[arr[arr.length - 1]] = value;
    return result;
};
exports.formatErrors = formatErrors;
