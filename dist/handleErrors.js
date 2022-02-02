"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleErrors = void 0;
const formatErrors_1 = require("./formatErrors");
const handleErrors = (style = "default", defaultHandler = (error) => error) => {
    return (errors) => {
        return errors.map((error) => {
            const isFromValidationPlugin = error.message.startsWith("ValidationError(");
            if (isFromValidationPlugin) {
                const content = JSON.parse(error.message.slice(16, -1));
                return {
                    validation: style === "default"
                        ? content
                        : Object.keys(content).map((error) => (0, formatErrors_1.formatErrors)(error, content[error])),
                };
            }
            return defaultHandler(error);
        });
    };
};
exports.handleErrors = handleErrors;
