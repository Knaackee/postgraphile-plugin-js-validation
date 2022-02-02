import { makeWrapResolversPlugin } from "postgraphile";
import { Validator } from "./Validator";

export const ValidationPlugin = (
  mutations: { [key: string]: Validator<any, any, any, any> },
  options: {
    inputFieldName: string;
  } = {
    inputFieldName: "input",
  }
) =>
  makeWrapResolversPlugin(
    (context) => {
      if (context.scope.isRootMutation) {
        return { scope: context.scope };
      }
      return null;
    },
    ({ scope }) =>
      async (resolver, source, args, context, resolveInfo) => {
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
        const validationResult = await validator(input, {
          resolver,
          source,
          args,
          context,
          resolveInfo,
        } as any);
        // resolve or throw
        if (!validationResult || Object.keys(validationResult).length != 0) {
          throw new Error(
            `ValidationError(${JSON.stringify(validationResult)})`
          );
        }
        return resolver(source, args, context, resolveInfo);
      }
  );
