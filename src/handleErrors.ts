import { GraphQLFormattedErrorExtended } from "postgraphile";
import { formatErrors } from "./formatErrors";

export const handleErrors = (
  style: "default" | "shape" = "default",
  defaultHandler: (error: GraphQLFormattedErrorExtended) => {} = (error) =>
    error
) => {
  return (errors: Array<GraphQLFormattedErrorExtended>) => {
    return errors.map((error) => {
      const isFromValidationPlugin =
        error.message.startsWith("ValidationError(");
      if (isFromValidationPlugin) {
        const content = JSON.parse(error.message.slice(16, -1));
        return {
          validation:
            style === "default"
              ? content
              : Object.keys(content).map((error) =>
                  formatErrors(error, content[error])
                ),
        };
      }
      return defaultHandler(error);
    });
  };
};
