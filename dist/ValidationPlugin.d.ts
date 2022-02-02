import { Validator } from "./Validator";
export declare const ValidationPlugin: (mutations: {
    [key: string]: Validator<any, any, any, any>;
}, options?: {
    inputFieldName: string;
}) => import("postgraphile").Plugin;
