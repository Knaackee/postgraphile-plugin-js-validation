import { GraphQLFieldResolver, GraphQLResolveInfo } from "graphql";

export type ResolverInfo<TSource, TContext, TArgs> = {
  resolver: GraphQLFieldResolver<TSource, TContext, TArgs>;
  source: TSource;
  args: TArgs;
  context: TContext;
  resolveInfo: GraphQLResolveInfo;
};
