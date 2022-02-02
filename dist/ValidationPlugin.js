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
exports.ValidationPlugin = void 0;
const postgraphile_1 = require("postgraphile");
const ValidationPlugin = (mutations, options = {
    inputFieldName: "input",
}) => (0, postgraphile_1.makeWrapResolversPlugin)((context) => {
    if (context.scope.isRootMutation) {
        return { scope: context.scope };
    }
    return null;
}, ({ scope }) => (resolver, source, args, context, resolveInfo) => __awaiter(void 0, void 0, void 0, function* () {
    // check if validator is registered for mutation
    const mutationName = scope.fieldName;
    if (!mutations[mutationName]) {
        console.log("no validation for mutation", mutationName);
        return resolver(source, args, context, resolveInfo);
    }
    // get validator
    const validator = mutations[mutationName];
    // get input
    const input = args[options.inputFieldName];
    // call validator
    const validationResult = yield validator(input, {
        resolver,
        source,
        args,
        context,
        resolveInfo,
    });
    // resolve or throw
    if (!validationResult || Object.keys(validationResult).length != 0) {
        throw new Error(`ValidationError(${JSON.stringify(validationResult)})`);
    }
    return resolver(source, args, context, resolveInfo);
}));
exports.ValidationPlugin = ValidationPlugin;
