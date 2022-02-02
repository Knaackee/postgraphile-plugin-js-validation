# postgraphile-plugin-js-validation

## Interfaces

- [Options](interfaces/Options.md)

## Type aliases

### Error

Ƭ **Error**: `string` \| { [key: string]: `string` \| [`Error`](modules.md#error);  }

#### Defined in

[Error.ts:1](https://github.com/Knaackee/postgraphile-plugin-js-validation/blob/94d1f80/src/Error.ts#L1)

___

### MutationsMap

Ƭ **MutationsMap**: `Object`

#### Index signature

▪ [key: `string`]: [`Validator`](modules.md#validator)<`any`, `any`, `any`, `any`\>

#### Defined in

[ValidationPlugin.ts:14](https://github.com/Knaackee/postgraphile-plugin-js-validation/blob/94d1f80/src/ValidationPlugin.ts#L14)

___

### ResolverInfo

Ƭ **ResolverInfo**<`TSource`, `TContext`, `TArgs`\>: `Object`

#### Type parameters

| Name |
| :------ |
| `TSource` |
| `TContext` |
| `TArgs` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `args` | `TArgs` |
| `context` | `TContext` |
| `resolveInfo` | `GraphQLResolveInfo` |
| `resolver` | `GraphQLFieldResolver`<`TSource`, `TContext`, `TArgs`\> |
| `source` | `TSource` |

#### Defined in

[ResolverInfo.ts:3](https://github.com/Knaackee/postgraphile-plugin-js-validation/blob/94d1f80/src/ResolverInfo.ts#L3)

___

### Validator

Ƭ **Validator**<`TInput`, `TSource`, `TContext`, `TArgs`\>: (`input`: `TInput`, `info`: [`ResolverInfo`](modules.md#resolverinfo)<`TSource`, `TContext`, `TArgs`\>) => `Promise`<{ [key: string]: [`Error`](modules.md#error);  }\>

#### Type parameters

| Name |
| :------ |
| `TInput` |
| `TSource` |
| `TContext` |
| `TArgs` |

#### Type declaration

▸ (`input`, `info`): `Promise`<{ [key: string]: [`Error`](modules.md#error);  }\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `TInput` |
| `info` | [`ResolverInfo`](modules.md#resolverinfo)<`TSource`, `TContext`, `TArgs`\> |

##### Returns

`Promise`<{ [key: string]: [`Error`](modules.md#error);  }\>

#### Defined in

[Validator.ts:4](https://github.com/Knaackee/postgraphile-plugin-js-validation/blob/94d1f80/src/Validator.ts#L4)

## Functions

### ValidationPlugin

▸ **ValidationPlugin**(`mutations`, `options?`): `void`

**`export`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `mutations` | [`MutationsMap`](modules.md#mutationsmap) |
| `options` | [`Options`](interfaces/Options.md) |

#### Returns

`void`

#### Defined in

[ValidationPlugin.ts:25](https://github.com/Knaackee/postgraphile-plugin-js-validation/blob/94d1f80/src/ValidationPlugin.ts#L25)

___

### handleErrors

▸ **handleErrors**(`style?`, `defaultHandler?`): (`errors`: readonly `GraphQLError`[], `_req`: `IncomingMessage`, `_res`: `ServerResponse`) => `GraphQLError`[]

handleErrors

**`export`**

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `style` | ``"default"`` \| ``"shape"`` | `"default"` |
| `defaultHandler` | (`error`: `GraphQLError`) => `GraphQLError` | `undefined` |

#### Returns

`fn`

▸ (`errors`, `_req`, `_res`): `GraphQLError`[]

##### Parameters

| Name | Type |
| :------ | :------ |
| `errors` | readonly `GraphQLError`[] |
| `_req` | `IncomingMessage` |
| `_res` | `ServerResponse` |

##### Returns

`GraphQLError`[]

#### Defined in

[handleErrors.ts:14](https://github.com/Knaackee/postgraphile-plugin-js-validation/blob/94d1f80/src/handleErrors.ts#L14)
