import { GraphQLError } from "graphql";
import { IncomingMessage } from "http";
import { ServerResponse } from "http";
export declare const handleErrors: (style?: "default" | "shape", defaultHandler?: (error: GraphQLError) => GraphQLError) => (errors: readonly GraphQLError[], _req: IncomingMessage, _res: ServerResponse) => Array<GraphQLError>;
