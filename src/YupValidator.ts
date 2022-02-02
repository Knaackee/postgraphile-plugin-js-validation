import { AnyObject, SchemaLike, ValidateOptions } from "yup/lib/types";
import { ValidationError } from "yup";
import { Validator } from "./Validator";
import { ResolverInfo } from ".";

export const YupValidator = <TInput, TSource, TContext, TArgs>(
  getSchema: (
    info: ResolverInfo<TSource, TContext, TArgs>
  ) => Promise<SchemaLike>,
  options?: ValidateOptions<AnyObject>
): Validator<TInput, TSource, TContext, TArgs> => {
  return async (input, info) => {
    try {
      // validate the input using the schema
      const schema = await getSchema(info);
      console.log("-------------------------------------");
      await schema.validate(input, options);
    } catch (validationResult: any) {
      const validationError = validationResult as ValidationError;
      const result: { [key: string]: string } = {};
      // on abortEarly = false, we get an array of errors
      if (validationError.inner.length > 0) {
        validationError.inner.forEach((error) => {
          const key = error.path as string;
          result[key] = error.message;
        });
      } else {
        // on abortEarly = true (default), we get a single error
        const key = validationError.path as string;
        result[key] = validationResult.message;
      }
      return result;
    }
    return {};
  };
};
