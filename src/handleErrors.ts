import { formatErrors } from "./formatErrors";
import { GraphQLError } from "graphql";
import { IncomingMessage } from "http";
import { ServerResponse } from "http";

/**
 * handleErrors
 *
 * @export
 * @param {("default" | "shape")} [style="default"]
 * @param {(error: GraphQLError) => GraphQLError} [defaultHandler=(error) => error]
 * @return {*}
 */
export function handleErrors(
  style: "default" | "shape" = "default",
  defaultHandler: (error: GraphQLError) => GraphQLError = (error) => error
) {
  return (
    errors: readonly GraphQLError[],
    _req: IncomingMessage,
    _res: ServerResponse
  ): Array<GraphQLError> => {
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
        } as any;
      }
      return defaultHandler(error);
    });
  };
}
