import { Error } from "./Error";
import { ResolverInfo } from "./ResolverInfo";

export type Validator<TInput, TSource, TContext, TArgs> = (
  input: TInput,
  info: ResolverInfo<TSource, TContext, TArgs>
) => Promise<{ [key: string]: Error }>;
