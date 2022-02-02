import { AnyObject, SchemaLike, ValidateOptions } from "yup/lib/types";
import { Validator } from "./Validator";
import { ResolverInfo } from ".";
export declare const YupValidator: <TInput, TSource, TContext, TArgs>(getSchema: (info: ResolverInfo<TSource, TContext, TArgs>) => SchemaLike, options?: ValidateOptions<AnyObject> | undefined) => Validator<TInput, TSource, TContext, TArgs>;
