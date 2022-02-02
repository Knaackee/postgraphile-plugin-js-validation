import { GraphQLFormattedErrorExtended } from "postgraphile";
export declare const handleErrors: (style?: "default" | "shape", defaultHandler?: (error: GraphQLFormattedErrorExtended) => {}) => (errors: Array<GraphQLFormattedErrorExtended>) => {}[];
