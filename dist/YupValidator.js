"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.YupValidator = void 0;
const YupValidator = (getSchema, options) => {
    return (input, info) => __awaiter(void 0, void 0, void 0, function* () {
        try {
            // validate the input using the schema
            const schema = yield getSchema(info);
            console.log("-------------------------------------");
            yield schema.validate(input, options);
        }
        catch (validationResult) {
            const validationError = validationResult;
            const result = {};
            // on abortEarly = false, we get an array of errors
            if (validationError.inner.length > 0) {
                validationError.inner.forEach((error) => {
                    const key = error.path;
                    result[key] = error.message;
                });
            }
            else {
                // on abortEarly = true (default), we get a single error
                const key = validationError.path;
                result[key] = validationResult.message;
            }
            return result;
        }
        return {};
    });
};
exports.YupValidator = YupValidator;
