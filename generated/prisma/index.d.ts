
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model VerificationChecklist
 * 
 */
export type VerificationChecklist = $Result.DefaultSelection<Prisma.$VerificationChecklistPayload>
/**
 * Model Reaction
 * 
 */
export type Reaction = $Result.DefaultSelection<Prisma.$ReactionPayload>
/**
 * Model NDA
 * 
 */
export type NDA = $Result.DefaultSelection<Prisma.$NDAPayload>
/**
 * Model ContactRequest
 * 
 */
export type ContactRequest = $Result.DefaultSelection<Prisma.$ContactRequestPayload>
/**
 * Model Payment
 * 
 */
export type Payment = $Result.DefaultSelection<Prisma.$PaymentPayload>
/**
 * Model DocumentoSensivel
 * 
 */
export type DocumentoSensivel = $Result.DefaultSelection<Prisma.$DocumentoSensivelPayload>
/**
 * Model NewsletterSubscription
 * 
 */
export type NewsletterSubscription = $Result.DefaultSelection<Prisma.$NewsletterSubscriptionPayload>
/**
 * Model EditorialPick
 * 
 */
export type EditorialPick = $Result.DefaultSelection<Prisma.$EditorialPickPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  reader: 'reader',
  founder: 'founder',
  admin: 'admin'
};

export type Role = (typeof Role)[keyof typeof Role]


export const KycStatus: {
  nao_iniciado: 'nao_iniciado',
  pendente: 'pendente',
  aprovado: 'aprovado',
  rejeitado: 'rejeitado'
};

export type KycStatus = (typeof KycStatus)[keyof typeof KycStatus]


export const Seccao: {
  lancamento: 'lancamento',
  ideia: 'ideia',
  em_alta: 'em_alta',
  em_funcionamento: 'em_funcionamento',
  a_venda: 'a_venda'
};

export type Seccao = (typeof Seccao)[keyof typeof Seccao]


export const NivelVerificacao: {
  nao_verificado: 'nao_verificado',
  parcialmente_verificado: 'parcialmente_verificado',
  verificado: 'verificado',
  nao_aplicavel: 'nao_aplicavel'
};

export type NivelVerificacao = (typeof NivelVerificacao)[keyof typeof NivelVerificacao]


export const EstadoProjecto: {
  rascunho: 'rascunho',
  pendente_revisao: 'pendente_revisao',
  publicado: 'publicado',
  rejeitado: 'rejeitado',
  arquivado: 'arquivado'
};

export type EstadoProjecto = (typeof EstadoProjecto)[keyof typeof EstadoProjecto]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type KycStatus = $Enums.KycStatus

export const KycStatus: typeof $Enums.KycStatus

export type Seccao = $Enums.Seccao

export const Seccao: typeof $Enums.Seccao

export type NivelVerificacao = $Enums.NivelVerificacao

export const NivelVerificacao: typeof $Enums.NivelVerificacao

export type EstadoProjecto = $Enums.EstadoProjecto

export const EstadoProjecto: typeof $Enums.EstadoProjecto

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationChecklist`: Exposes CRUD operations for the **VerificationChecklist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationChecklists
    * const verificationChecklists = await prisma.verificationChecklist.findMany()
    * ```
    */
  get verificationChecklist(): Prisma.VerificationChecklistDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reaction`: Exposes CRUD operations for the **Reaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reactions
    * const reactions = await prisma.reaction.findMany()
    * ```
    */
  get reaction(): Prisma.ReactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.nDA`: Exposes CRUD operations for the **NDA** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NDAS
    * const nDAS = await prisma.nDA.findMany()
    * ```
    */
  get nDA(): Prisma.NDADelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contactRequest`: Exposes CRUD operations for the **ContactRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ContactRequests
    * const contactRequests = await prisma.contactRequest.findMany()
    * ```
    */
  get contactRequest(): Prisma.ContactRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.payment`: Exposes CRUD operations for the **Payment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Payments
    * const payments = await prisma.payment.findMany()
    * ```
    */
  get payment(): Prisma.PaymentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.documentoSensivel`: Exposes CRUD operations for the **DocumentoSensivel** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DocumentoSensivels
    * const documentoSensivels = await prisma.documentoSensivel.findMany()
    * ```
    */
  get documentoSensivel(): Prisma.DocumentoSensivelDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.newsletterSubscription`: Exposes CRUD operations for the **NewsletterSubscription** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more NewsletterSubscriptions
    * const newsletterSubscriptions = await prisma.newsletterSubscription.findMany()
    * ```
    */
  get newsletterSubscription(): Prisma.NewsletterSubscriptionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.editorialPick`: Exposes CRUD operations for the **EditorialPick** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more EditorialPicks
    * const editorialPicks = await prisma.editorialPick.findMany()
    * ```
    */
  get editorialPick(): Prisma.EditorialPickDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Account: 'Account',
    Session: 'Session',
    VerificationToken: 'VerificationToken',
    Project: 'Project',
    VerificationChecklist: 'VerificationChecklist',
    Reaction: 'Reaction',
    NDA: 'NDA',
    ContactRequest: 'ContactRequest',
    Payment: 'Payment',
    DocumentoSensivel: 'DocumentoSensivel',
    NewsletterSubscription: 'NewsletterSubscription',
    EditorialPick: 'EditorialPick'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "account" | "session" | "verificationToken" | "project" | "verificationChecklist" | "reaction" | "nDA" | "contactRequest" | "payment" | "documentoSensivel" | "newsletterSubscription" | "editorialPick"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      VerificationChecklist: {
        payload: Prisma.$VerificationChecklistPayload<ExtArgs>
        fields: Prisma.VerificationChecklistFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationChecklistFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationChecklistPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationChecklistFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationChecklistPayload>
          }
          findFirst: {
            args: Prisma.VerificationChecklistFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationChecklistPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationChecklistFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationChecklistPayload>
          }
          findMany: {
            args: Prisma.VerificationChecklistFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationChecklistPayload>[]
          }
          create: {
            args: Prisma.VerificationChecklistCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationChecklistPayload>
          }
          createMany: {
            args: Prisma.VerificationChecklistCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationChecklistCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationChecklistPayload>[]
          }
          delete: {
            args: Prisma.VerificationChecklistDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationChecklistPayload>
          }
          update: {
            args: Prisma.VerificationChecklistUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationChecklistPayload>
          }
          deleteMany: {
            args: Prisma.VerificationChecklistDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationChecklistUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationChecklistUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationChecklistPayload>[]
          }
          upsert: {
            args: Prisma.VerificationChecklistUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationChecklistPayload>
          }
          aggregate: {
            args: Prisma.VerificationChecklistAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationChecklist>
          }
          groupBy: {
            args: Prisma.VerificationChecklistGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationChecklistGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationChecklistCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationChecklistCountAggregateOutputType> | number
          }
        }
      }
      Reaction: {
        payload: Prisma.$ReactionPayload<ExtArgs>
        fields: Prisma.ReactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>
          }
          findFirst: {
            args: Prisma.ReactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>
          }
          findMany: {
            args: Prisma.ReactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>[]
          }
          create: {
            args: Prisma.ReactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>
          }
          createMany: {
            args: Prisma.ReactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>[]
          }
          delete: {
            args: Prisma.ReactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>
          }
          update: {
            args: Prisma.ReactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>
          }
          deleteMany: {
            args: Prisma.ReactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>[]
          }
          upsert: {
            args: Prisma.ReactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReactionPayload>
          }
          aggregate: {
            args: Prisma.ReactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReaction>
          }
          groupBy: {
            args: Prisma.ReactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReactionCountArgs<ExtArgs>
            result: $Utils.Optional<ReactionCountAggregateOutputType> | number
          }
        }
      }
      NDA: {
        payload: Prisma.$NDAPayload<ExtArgs>
        fields: Prisma.NDAFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NDAFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NDAPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NDAFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NDAPayload>
          }
          findFirst: {
            args: Prisma.NDAFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NDAPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NDAFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NDAPayload>
          }
          findMany: {
            args: Prisma.NDAFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NDAPayload>[]
          }
          create: {
            args: Prisma.NDACreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NDAPayload>
          }
          createMany: {
            args: Prisma.NDACreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NDACreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NDAPayload>[]
          }
          delete: {
            args: Prisma.NDADeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NDAPayload>
          }
          update: {
            args: Prisma.NDAUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NDAPayload>
          }
          deleteMany: {
            args: Prisma.NDADeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NDAUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NDAUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NDAPayload>[]
          }
          upsert: {
            args: Prisma.NDAUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NDAPayload>
          }
          aggregate: {
            args: Prisma.NDAAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNDA>
          }
          groupBy: {
            args: Prisma.NDAGroupByArgs<ExtArgs>
            result: $Utils.Optional<NDAGroupByOutputType>[]
          }
          count: {
            args: Prisma.NDACountArgs<ExtArgs>
            result: $Utils.Optional<NDACountAggregateOutputType> | number
          }
        }
      }
      ContactRequest: {
        payload: Prisma.$ContactRequestPayload<ExtArgs>
        fields: Prisma.ContactRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactRequestPayload>
          }
          findFirst: {
            args: Prisma.ContactRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactRequestPayload>
          }
          findMany: {
            args: Prisma.ContactRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactRequestPayload>[]
          }
          create: {
            args: Prisma.ContactRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactRequestPayload>
          }
          createMany: {
            args: Prisma.ContactRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactRequestPayload>[]
          }
          delete: {
            args: Prisma.ContactRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactRequestPayload>
          }
          update: {
            args: Prisma.ContactRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactRequestPayload>
          }
          deleteMany: {
            args: Prisma.ContactRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactRequestPayload>[]
          }
          upsert: {
            args: Prisma.ContactRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactRequestPayload>
          }
          aggregate: {
            args: Prisma.ContactRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContactRequest>
          }
          groupBy: {
            args: Prisma.ContactRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactRequestCountArgs<ExtArgs>
            result: $Utils.Optional<ContactRequestCountAggregateOutputType> | number
          }
        }
      }
      Payment: {
        payload: Prisma.$PaymentPayload<ExtArgs>
        fields: Prisma.PaymentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PaymentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PaymentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findFirst: {
            args: Prisma.PaymentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PaymentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          findMany: {
            args: Prisma.PaymentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          create: {
            args: Prisma.PaymentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          createMany: {
            args: Prisma.PaymentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PaymentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          delete: {
            args: Prisma.PaymentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          update: {
            args: Prisma.PaymentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          deleteMany: {
            args: Prisma.PaymentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PaymentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PaymentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>[]
          }
          upsert: {
            args: Prisma.PaymentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PaymentPayload>
          }
          aggregate: {
            args: Prisma.PaymentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePayment>
          }
          groupBy: {
            args: Prisma.PaymentGroupByArgs<ExtArgs>
            result: $Utils.Optional<PaymentGroupByOutputType>[]
          }
          count: {
            args: Prisma.PaymentCountArgs<ExtArgs>
            result: $Utils.Optional<PaymentCountAggregateOutputType> | number
          }
        }
      }
      DocumentoSensivel: {
        payload: Prisma.$DocumentoSensivelPayload<ExtArgs>
        fields: Prisma.DocumentoSensivelFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DocumentoSensivelFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoSensivelPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DocumentoSensivelFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoSensivelPayload>
          }
          findFirst: {
            args: Prisma.DocumentoSensivelFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoSensivelPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DocumentoSensivelFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoSensivelPayload>
          }
          findMany: {
            args: Prisma.DocumentoSensivelFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoSensivelPayload>[]
          }
          create: {
            args: Prisma.DocumentoSensivelCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoSensivelPayload>
          }
          createMany: {
            args: Prisma.DocumentoSensivelCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DocumentoSensivelCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoSensivelPayload>[]
          }
          delete: {
            args: Prisma.DocumentoSensivelDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoSensivelPayload>
          }
          update: {
            args: Prisma.DocumentoSensivelUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoSensivelPayload>
          }
          deleteMany: {
            args: Prisma.DocumentoSensivelDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DocumentoSensivelUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DocumentoSensivelUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoSensivelPayload>[]
          }
          upsert: {
            args: Prisma.DocumentoSensivelUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DocumentoSensivelPayload>
          }
          aggregate: {
            args: Prisma.DocumentoSensivelAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDocumentoSensivel>
          }
          groupBy: {
            args: Prisma.DocumentoSensivelGroupByArgs<ExtArgs>
            result: $Utils.Optional<DocumentoSensivelGroupByOutputType>[]
          }
          count: {
            args: Prisma.DocumentoSensivelCountArgs<ExtArgs>
            result: $Utils.Optional<DocumentoSensivelCountAggregateOutputType> | number
          }
        }
      }
      NewsletterSubscription: {
        payload: Prisma.$NewsletterSubscriptionPayload<ExtArgs>
        fields: Prisma.NewsletterSubscriptionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NewsletterSubscriptionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterSubscriptionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NewsletterSubscriptionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterSubscriptionPayload>
          }
          findFirst: {
            args: Prisma.NewsletterSubscriptionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterSubscriptionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NewsletterSubscriptionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterSubscriptionPayload>
          }
          findMany: {
            args: Prisma.NewsletterSubscriptionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterSubscriptionPayload>[]
          }
          create: {
            args: Prisma.NewsletterSubscriptionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterSubscriptionPayload>
          }
          createMany: {
            args: Prisma.NewsletterSubscriptionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NewsletterSubscriptionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterSubscriptionPayload>[]
          }
          delete: {
            args: Prisma.NewsletterSubscriptionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterSubscriptionPayload>
          }
          update: {
            args: Prisma.NewsletterSubscriptionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterSubscriptionPayload>
          }
          deleteMany: {
            args: Prisma.NewsletterSubscriptionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NewsletterSubscriptionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NewsletterSubscriptionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterSubscriptionPayload>[]
          }
          upsert: {
            args: Prisma.NewsletterSubscriptionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NewsletterSubscriptionPayload>
          }
          aggregate: {
            args: Prisma.NewsletterSubscriptionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNewsletterSubscription>
          }
          groupBy: {
            args: Prisma.NewsletterSubscriptionGroupByArgs<ExtArgs>
            result: $Utils.Optional<NewsletterSubscriptionGroupByOutputType>[]
          }
          count: {
            args: Prisma.NewsletterSubscriptionCountArgs<ExtArgs>
            result: $Utils.Optional<NewsletterSubscriptionCountAggregateOutputType> | number
          }
        }
      }
      EditorialPick: {
        payload: Prisma.$EditorialPickPayload<ExtArgs>
        fields: Prisma.EditorialPickFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EditorialPickFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditorialPickPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EditorialPickFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditorialPickPayload>
          }
          findFirst: {
            args: Prisma.EditorialPickFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditorialPickPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EditorialPickFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditorialPickPayload>
          }
          findMany: {
            args: Prisma.EditorialPickFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditorialPickPayload>[]
          }
          create: {
            args: Prisma.EditorialPickCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditorialPickPayload>
          }
          createMany: {
            args: Prisma.EditorialPickCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EditorialPickCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditorialPickPayload>[]
          }
          delete: {
            args: Prisma.EditorialPickDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditorialPickPayload>
          }
          update: {
            args: Prisma.EditorialPickUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditorialPickPayload>
          }
          deleteMany: {
            args: Prisma.EditorialPickDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EditorialPickUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EditorialPickUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditorialPickPayload>[]
          }
          upsert: {
            args: Prisma.EditorialPickUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EditorialPickPayload>
          }
          aggregate: {
            args: Prisma.EditorialPickAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEditorialPick>
          }
          groupBy: {
            args: Prisma.EditorialPickGroupByArgs<ExtArgs>
            result: $Utils.Optional<EditorialPickGroupByOutputType>[]
          }
          count: {
            args: Prisma.EditorialPickCountArgs<ExtArgs>
            result: $Utils.Optional<EditorialPickCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    account?: AccountOmit
    session?: SessionOmit
    verificationToken?: VerificationTokenOmit
    project?: ProjectOmit
    verificationChecklist?: VerificationChecklistOmit
    reaction?: ReactionOmit
    nDA?: NDAOmit
    contactRequest?: ContactRequestOmit
    payment?: PaymentOmit
    documentoSensivel?: DocumentoSensivelOmit
    newsletterSubscription?: NewsletterSubscriptionOmit
    editorialPick?: EditorialPickOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    sessions: number
    projects: number
    reactions: number
    ndasComoComprador: number
    contactRequests: number
    payments: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    projects?: boolean | UserCountOutputTypeCountProjectsArgs
    reactions?: boolean | UserCountOutputTypeCountReactionsArgs
    ndasComoComprador?: boolean | UserCountOutputTypeCountNdasComoCompradorArgs
    contactRequests?: boolean | UserCountOutputTypeCountContactRequestsArgs
    payments?: boolean | UserCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReactionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNdasComoCompradorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NDAWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountContactRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactRequestWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    checklists: number
    reactions: number
    ndas: number
    contactRequests: number
    documentos: number
    editorialPicks: number
    payments: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    checklists?: boolean | ProjectCountOutputTypeCountChecklistsArgs
    reactions?: boolean | ProjectCountOutputTypeCountReactionsArgs
    ndas?: boolean | ProjectCountOutputTypeCountNdasArgs
    contactRequests?: boolean | ProjectCountOutputTypeCountContactRequestsArgs
    documentos?: boolean | ProjectCountOutputTypeCountDocumentosArgs
    editorialPicks?: boolean | ProjectCountOutputTypeCountEditorialPicksArgs
    payments?: boolean | ProjectCountOutputTypeCountPaymentsArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountChecklistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationChecklistWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountReactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReactionWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountNdasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NDAWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountContactRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactRequestWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountDocumentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentoSensivelWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountEditorialPicksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EditorialPickWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountPaymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    passwordHash: string | null
    role: $Enums.Role | null
    telefone: string | null
    biNuit: string | null
    kycStatus: $Enums.KycStatus | null
    criadoEm: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    passwordHash: string | null
    role: $Enums.Role | null
    telefone: string | null
    biNuit: string | null
    kycStatus: $Enums.KycStatus | null
    criadoEm: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    passwordHash: number
    role: number
    telefone: number
    biNuit: number
    kycStatus: number
    criadoEm: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    passwordHash?: true
    role?: true
    telefone?: true
    biNuit?: true
    kycStatus?: true
    criadoEm?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    passwordHash?: true
    role?: true
    telefone?: true
    biNuit?: true
    kycStatus?: true
    criadoEm?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    passwordHash?: true
    role?: true
    telefone?: true
    biNuit?: true
    kycStatus?: true
    criadoEm?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string
    emailVerified: Date | null
    image: string | null
    passwordHash: string | null
    role: $Enums.Role
    telefone: string | null
    biNuit: string | null
    kycStatus: $Enums.KycStatus
    criadoEm: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    passwordHash?: boolean
    role?: boolean
    telefone?: boolean
    biNuit?: boolean
    kycStatus?: boolean
    criadoEm?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    projects?: boolean | User$projectsArgs<ExtArgs>
    reactions?: boolean | User$reactionsArgs<ExtArgs>
    ndasComoComprador?: boolean | User$ndasComoCompradorArgs<ExtArgs>
    contactRequests?: boolean | User$contactRequestsArgs<ExtArgs>
    payments?: boolean | User$paymentsArgs<ExtArgs>
    newsletterSubscription?: boolean | User$newsletterSubscriptionArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    passwordHash?: boolean
    role?: boolean
    telefone?: boolean
    biNuit?: boolean
    kycStatus?: boolean
    criadoEm?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    passwordHash?: boolean
    role?: boolean
    telefone?: boolean
    biNuit?: boolean
    kycStatus?: boolean
    criadoEm?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    passwordHash?: boolean
    role?: boolean
    telefone?: boolean
    biNuit?: boolean
    kycStatus?: boolean
    criadoEm?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "passwordHash" | "role" | "telefone" | "biNuit" | "kycStatus" | "criadoEm", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    projects?: boolean | User$projectsArgs<ExtArgs>
    reactions?: boolean | User$reactionsArgs<ExtArgs>
    ndasComoComprador?: boolean | User$ndasComoCompradorArgs<ExtArgs>
    contactRequests?: boolean | User$contactRequestsArgs<ExtArgs>
    payments?: boolean | User$paymentsArgs<ExtArgs>
    newsletterSubscription?: boolean | User$newsletterSubscriptionArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      projects: Prisma.$ProjectPayload<ExtArgs>[]
      reactions: Prisma.$ReactionPayload<ExtArgs>[]
      ndasComoComprador: Prisma.$NDAPayload<ExtArgs>[]
      contactRequests: Prisma.$ContactRequestPayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
      newsletterSubscription: Prisma.$NewsletterSubscriptionPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
      emailVerified: Date | null
      image: string | null
      passwordHash: string | null
      role: $Enums.Role
      telefone: string | null
      biNuit: string | null
      kycStatus: $Enums.KycStatus
      criadoEm: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    projects<T extends User$projectsArgs<ExtArgs> = {}>(args?: Subset<T, User$projectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reactions<T extends User$reactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$reactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ndasComoComprador<T extends User$ndasComoCompradorArgs<ExtArgs> = {}>(args?: Subset<T, User$ndasComoCompradorArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NDAPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contactRequests<T extends User$contactRequestsArgs<ExtArgs> = {}>(args?: Subset<T, User$contactRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends User$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, User$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    newsletterSubscription<T extends User$newsletterSubscriptionArgs<ExtArgs> = {}>(args?: Subset<T, User$newsletterSubscriptionArgs<ExtArgs>>): Prisma__NewsletterSubscriptionClient<$Result.GetResult<Prisma.$NewsletterSubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly telefone: FieldRef<"User", 'String'>
    readonly biNuit: FieldRef<"User", 'String'>
    readonly kycStatus: FieldRef<"User", 'KycStatus'>
    readonly criadoEm: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.projects
   */
  export type User$projectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    cursor?: ProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * User.reactions
   */
  export type User$reactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    where?: ReactionWhereInput
    orderBy?: ReactionOrderByWithRelationInput | ReactionOrderByWithRelationInput[]
    cursor?: ReactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReactionScalarFieldEnum | ReactionScalarFieldEnum[]
  }

  /**
   * User.ndasComoComprador
   */
  export type User$ndasComoCompradorArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NDA
     */
    select?: NDASelect<ExtArgs> | null
    /**
     * Omit specific fields from the NDA
     */
    omit?: NDAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NDAInclude<ExtArgs> | null
    where?: NDAWhereInput
    orderBy?: NDAOrderByWithRelationInput | NDAOrderByWithRelationInput[]
    cursor?: NDAWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NDAScalarFieldEnum | NDAScalarFieldEnum[]
  }

  /**
   * User.contactRequests
   */
  export type User$contactRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactRequest
     */
    select?: ContactRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactRequest
     */
    omit?: ContactRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactRequestInclude<ExtArgs> | null
    where?: ContactRequestWhereInput
    orderBy?: ContactRequestOrderByWithRelationInput | ContactRequestOrderByWithRelationInput[]
    cursor?: ContactRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContactRequestScalarFieldEnum | ContactRequestScalarFieldEnum[]
  }

  /**
   * User.payments
   */
  export type User$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * User.newsletterSubscription
   */
  export type User$newsletterSubscriptionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterSubscription
     */
    select?: NewsletterSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterSubscription
     */
    omit?: NewsletterSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterSubscriptionInclude<ExtArgs> | null
    where?: NewsletterSubscriptionWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.updateManyAndReturn({
     *   select: { identifier: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken updateManyAndReturn
   */
  export type VerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    ownerId: string | null
    seccao: $Enums.Seccao | null
    titulo: string | null
    descricao: string | null
    categoria: string | null
    sector: string | null
    localizacao: string | null
    nivelVerificacao: $Enums.NivelVerificacao | null
    estado: $Enums.EstadoProjecto | null
    boostActivoAte: Date | null
    criadoEm: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    ownerId: string | null
    seccao: $Enums.Seccao | null
    titulo: string | null
    descricao: string | null
    categoria: string | null
    sector: string | null
    localizacao: string | null
    nivelVerificacao: $Enums.NivelVerificacao | null
    estado: $Enums.EstadoProjecto | null
    boostActivoAte: Date | null
    criadoEm: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    ownerId: number
    seccao: number
    titulo: number
    descricao: number
    categoria: number
    sector: number
    localizacao: number
    nivelVerificacao: number
    estado: number
    boostActivoAte: number
    criadoEm: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    ownerId?: true
    seccao?: true
    titulo?: true
    descricao?: true
    categoria?: true
    sector?: true
    localizacao?: true
    nivelVerificacao?: true
    estado?: true
    boostActivoAte?: true
    criadoEm?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    ownerId?: true
    seccao?: true
    titulo?: true
    descricao?: true
    categoria?: true
    sector?: true
    localizacao?: true
    nivelVerificacao?: true
    estado?: true
    boostActivoAte?: true
    criadoEm?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    ownerId?: true
    seccao?: true
    titulo?: true
    descricao?: true
    categoria?: true
    sector?: true
    localizacao?: true
    nivelVerificacao?: true
    estado?: true
    boostActivoAte?: true
    criadoEm?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    ownerId: string
    seccao: $Enums.Seccao
    titulo: string
    descricao: string
    categoria: string
    sector: string
    localizacao: string
    nivelVerificacao: $Enums.NivelVerificacao
    estado: $Enums.EstadoProjecto
    boostActivoAte: Date | null
    criadoEm: Date
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    seccao?: boolean
    titulo?: boolean
    descricao?: boolean
    categoria?: boolean
    sector?: boolean
    localizacao?: boolean
    nivelVerificacao?: boolean
    estado?: boolean
    boostActivoAte?: boolean
    criadoEm?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
    checklists?: boolean | Project$checklistsArgs<ExtArgs>
    reactions?: boolean | Project$reactionsArgs<ExtArgs>
    ndas?: boolean | Project$ndasArgs<ExtArgs>
    contactRequests?: boolean | Project$contactRequestsArgs<ExtArgs>
    documentos?: boolean | Project$documentosArgs<ExtArgs>
    editorialPicks?: boolean | Project$editorialPicksArgs<ExtArgs>
    payments?: boolean | Project$paymentsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    seccao?: boolean
    titulo?: boolean
    descricao?: boolean
    categoria?: boolean
    sector?: boolean
    localizacao?: boolean
    nivelVerificacao?: boolean
    estado?: boolean
    boostActivoAte?: boolean
    criadoEm?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ownerId?: boolean
    seccao?: boolean
    titulo?: boolean
    descricao?: boolean
    categoria?: boolean
    sector?: boolean
    localizacao?: boolean
    nivelVerificacao?: boolean
    estado?: boolean
    boostActivoAte?: boolean
    criadoEm?: boolean
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    ownerId?: boolean
    seccao?: boolean
    titulo?: boolean
    descricao?: boolean
    categoria?: boolean
    sector?: boolean
    localizacao?: boolean
    nivelVerificacao?: boolean
    estado?: boolean
    boostActivoAte?: boolean
    criadoEm?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ownerId" | "seccao" | "titulo" | "descricao" | "categoria" | "sector" | "localizacao" | "nivelVerificacao" | "estado" | "boostActivoAte" | "criadoEm", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
    checklists?: boolean | Project$checklistsArgs<ExtArgs>
    reactions?: boolean | Project$reactionsArgs<ExtArgs>
    ndas?: boolean | Project$ndasArgs<ExtArgs>
    contactRequests?: boolean | Project$contactRequestsArgs<ExtArgs>
    documentos?: boolean | Project$documentosArgs<ExtArgs>
    editorialPicks?: boolean | Project$editorialPicksArgs<ExtArgs>
    payments?: boolean | Project$paymentsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    owner?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      owner: Prisma.$UserPayload<ExtArgs>
      checklists: Prisma.$VerificationChecklistPayload<ExtArgs>[]
      reactions: Prisma.$ReactionPayload<ExtArgs>[]
      ndas: Prisma.$NDAPayload<ExtArgs>[]
      contactRequests: Prisma.$ContactRequestPayload<ExtArgs>[]
      documentos: Prisma.$DocumentoSensivelPayload<ExtArgs>[]
      editorialPicks: Prisma.$EditorialPickPayload<ExtArgs>[]
      payments: Prisma.$PaymentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      ownerId: string
      seccao: $Enums.Seccao
      titulo: string
      descricao: string
      categoria: string
      sector: string
      localizacao: string
      nivelVerificacao: $Enums.NivelVerificacao
      estado: $Enums.EstadoProjecto
      boostActivoAte: Date | null
      criadoEm: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    owner<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    checklists<T extends Project$checklistsArgs<ExtArgs> = {}>(args?: Subset<T, Project$checklistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationChecklistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reactions<T extends Project$reactionsArgs<ExtArgs> = {}>(args?: Subset<T, Project$reactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    ndas<T extends Project$ndasArgs<ExtArgs> = {}>(args?: Subset<T, Project$ndasArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NDAPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    contactRequests<T extends Project$contactRequestsArgs<ExtArgs> = {}>(args?: Subset<T, Project$contactRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    documentos<T extends Project$documentosArgs<ExtArgs> = {}>(args?: Subset<T, Project$documentosArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentoSensivelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    editorialPicks<T extends Project$editorialPicksArgs<ExtArgs> = {}>(args?: Subset<T, Project$editorialPicksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EditorialPickPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    payments<T extends Project$paymentsArgs<ExtArgs> = {}>(args?: Subset<T, Project$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly ownerId: FieldRef<"Project", 'String'>
    readonly seccao: FieldRef<"Project", 'Seccao'>
    readonly titulo: FieldRef<"Project", 'String'>
    readonly descricao: FieldRef<"Project", 'String'>
    readonly categoria: FieldRef<"Project", 'String'>
    readonly sector: FieldRef<"Project", 'String'>
    readonly localizacao: FieldRef<"Project", 'String'>
    readonly nivelVerificacao: FieldRef<"Project", 'NivelVerificacao'>
    readonly estado: FieldRef<"Project", 'EstadoProjecto'>
    readonly boostActivoAte: FieldRef<"Project", 'DateTime'>
    readonly criadoEm: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.checklists
   */
  export type Project$checklistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationChecklist
     */
    select?: VerificationChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationChecklist
     */
    omit?: VerificationChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationChecklistInclude<ExtArgs> | null
    where?: VerificationChecklistWhereInput
    orderBy?: VerificationChecklistOrderByWithRelationInput | VerificationChecklistOrderByWithRelationInput[]
    cursor?: VerificationChecklistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VerificationChecklistScalarFieldEnum | VerificationChecklistScalarFieldEnum[]
  }

  /**
   * Project.reactions
   */
  export type Project$reactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    where?: ReactionWhereInput
    orderBy?: ReactionOrderByWithRelationInput | ReactionOrderByWithRelationInput[]
    cursor?: ReactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReactionScalarFieldEnum | ReactionScalarFieldEnum[]
  }

  /**
   * Project.ndas
   */
  export type Project$ndasArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NDA
     */
    select?: NDASelect<ExtArgs> | null
    /**
     * Omit specific fields from the NDA
     */
    omit?: NDAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NDAInclude<ExtArgs> | null
    where?: NDAWhereInput
    orderBy?: NDAOrderByWithRelationInput | NDAOrderByWithRelationInput[]
    cursor?: NDAWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NDAScalarFieldEnum | NDAScalarFieldEnum[]
  }

  /**
   * Project.contactRequests
   */
  export type Project$contactRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactRequest
     */
    select?: ContactRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactRequest
     */
    omit?: ContactRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactRequestInclude<ExtArgs> | null
    where?: ContactRequestWhereInput
    orderBy?: ContactRequestOrderByWithRelationInput | ContactRequestOrderByWithRelationInput[]
    cursor?: ContactRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContactRequestScalarFieldEnum | ContactRequestScalarFieldEnum[]
  }

  /**
   * Project.documentos
   */
  export type Project$documentosArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentoSensivel
     */
    select?: DocumentoSensivelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentoSensivel
     */
    omit?: DocumentoSensivelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoSensivelInclude<ExtArgs> | null
    where?: DocumentoSensivelWhereInput
    orderBy?: DocumentoSensivelOrderByWithRelationInput | DocumentoSensivelOrderByWithRelationInput[]
    cursor?: DocumentoSensivelWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DocumentoSensivelScalarFieldEnum | DocumentoSensivelScalarFieldEnum[]
  }

  /**
   * Project.editorialPicks
   */
  export type Project$editorialPicksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EditorialPick
     */
    select?: EditorialPickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EditorialPick
     */
    omit?: EditorialPickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditorialPickInclude<ExtArgs> | null
    where?: EditorialPickWhereInput
    orderBy?: EditorialPickOrderByWithRelationInput | EditorialPickOrderByWithRelationInput[]
    cursor?: EditorialPickWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EditorialPickScalarFieldEnum | EditorialPickScalarFieldEnum[]
  }

  /**
   * Project.payments
   */
  export type Project$paymentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    cursor?: PaymentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model VerificationChecklist
   */

  export type AggregateVerificationChecklist = {
    _count: VerificationChecklistCountAggregateOutputType | null
    _min: VerificationChecklistMinAggregateOutputType | null
    _max: VerificationChecklistMaxAggregateOutputType | null
  }

  export type VerificationChecklistMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    tipo: string | null
    respostasJson: string | null
    documentosUrls: string | null
    estado: string | null
  }

  export type VerificationChecklistMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    tipo: string | null
    respostasJson: string | null
    documentosUrls: string | null
    estado: string | null
  }

  export type VerificationChecklistCountAggregateOutputType = {
    id: number
    projectId: number
    tipo: number
    respostasJson: number
    documentosUrls: number
    estado: number
    _all: number
  }


  export type VerificationChecklistMinAggregateInputType = {
    id?: true
    projectId?: true
    tipo?: true
    respostasJson?: true
    documentosUrls?: true
    estado?: true
  }

  export type VerificationChecklistMaxAggregateInputType = {
    id?: true
    projectId?: true
    tipo?: true
    respostasJson?: true
    documentosUrls?: true
    estado?: true
  }

  export type VerificationChecklistCountAggregateInputType = {
    id?: true
    projectId?: true
    tipo?: true
    respostasJson?: true
    documentosUrls?: true
    estado?: true
    _all?: true
  }

  export type VerificationChecklistAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationChecklist to aggregate.
     */
    where?: VerificationChecklistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationChecklists to fetch.
     */
    orderBy?: VerificationChecklistOrderByWithRelationInput | VerificationChecklistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationChecklistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationChecklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationChecklists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationChecklists
    **/
    _count?: true | VerificationChecklistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationChecklistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationChecklistMaxAggregateInputType
  }

  export type GetVerificationChecklistAggregateType<T extends VerificationChecklistAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationChecklist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationChecklist[P]>
      : GetScalarType<T[P], AggregateVerificationChecklist[P]>
  }




  export type VerificationChecklistGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationChecklistWhereInput
    orderBy?: VerificationChecklistOrderByWithAggregationInput | VerificationChecklistOrderByWithAggregationInput[]
    by: VerificationChecklistScalarFieldEnum[] | VerificationChecklistScalarFieldEnum
    having?: VerificationChecklistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationChecklistCountAggregateInputType | true
    _min?: VerificationChecklistMinAggregateInputType
    _max?: VerificationChecklistMaxAggregateInputType
  }

  export type VerificationChecklistGroupByOutputType = {
    id: string
    projectId: string
    tipo: string
    respostasJson: string
    documentosUrls: string
    estado: string
    _count: VerificationChecklistCountAggregateOutputType | null
    _min: VerificationChecklistMinAggregateOutputType | null
    _max: VerificationChecklistMaxAggregateOutputType | null
  }

  type GetVerificationChecklistGroupByPayload<T extends VerificationChecklistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationChecklistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationChecklistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationChecklistGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationChecklistGroupByOutputType[P]>
        }
      >
    >


  export type VerificationChecklistSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    tipo?: boolean
    respostasJson?: boolean
    documentosUrls?: boolean
    estado?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verificationChecklist"]>

  export type VerificationChecklistSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    tipo?: boolean
    respostasJson?: boolean
    documentosUrls?: boolean
    estado?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verificationChecklist"]>

  export type VerificationChecklistSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    tipo?: boolean
    respostasJson?: boolean
    documentosUrls?: boolean
    estado?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["verificationChecklist"]>

  export type VerificationChecklistSelectScalar = {
    id?: boolean
    projectId?: boolean
    tipo?: boolean
    respostasJson?: boolean
    documentosUrls?: boolean
    estado?: boolean
  }

  export type VerificationChecklistOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "tipo" | "respostasJson" | "documentosUrls" | "estado", ExtArgs["result"]["verificationChecklist"]>
  export type VerificationChecklistInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type VerificationChecklistIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type VerificationChecklistIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $VerificationChecklistPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationChecklist"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      tipo: string
      respostasJson: string
      documentosUrls: string
      estado: string
    }, ExtArgs["result"]["verificationChecklist"]>
    composites: {}
  }

  type VerificationChecklistGetPayload<S extends boolean | null | undefined | VerificationChecklistDefaultArgs> = $Result.GetResult<Prisma.$VerificationChecklistPayload, S>

  type VerificationChecklistCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationChecklistFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationChecklistCountAggregateInputType | true
    }

  export interface VerificationChecklistDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationChecklist'], meta: { name: 'VerificationChecklist' } }
    /**
     * Find zero or one VerificationChecklist that matches the filter.
     * @param {VerificationChecklistFindUniqueArgs} args - Arguments to find a VerificationChecklist
     * @example
     * // Get one VerificationChecklist
     * const verificationChecklist = await prisma.verificationChecklist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationChecklistFindUniqueArgs>(args: SelectSubset<T, VerificationChecklistFindUniqueArgs<ExtArgs>>): Prisma__VerificationChecklistClient<$Result.GetResult<Prisma.$VerificationChecklistPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationChecklist that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationChecklistFindUniqueOrThrowArgs} args - Arguments to find a VerificationChecklist
     * @example
     * // Get one VerificationChecklist
     * const verificationChecklist = await prisma.verificationChecklist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationChecklistFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationChecklistFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationChecklistClient<$Result.GetResult<Prisma.$VerificationChecklistPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationChecklist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationChecklistFindFirstArgs} args - Arguments to find a VerificationChecklist
     * @example
     * // Get one VerificationChecklist
     * const verificationChecklist = await prisma.verificationChecklist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationChecklistFindFirstArgs>(args?: SelectSubset<T, VerificationChecklistFindFirstArgs<ExtArgs>>): Prisma__VerificationChecklistClient<$Result.GetResult<Prisma.$VerificationChecklistPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationChecklist that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationChecklistFindFirstOrThrowArgs} args - Arguments to find a VerificationChecklist
     * @example
     * // Get one VerificationChecklist
     * const verificationChecklist = await prisma.verificationChecklist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationChecklistFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationChecklistFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationChecklistClient<$Result.GetResult<Prisma.$VerificationChecklistPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationChecklists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationChecklistFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationChecklists
     * const verificationChecklists = await prisma.verificationChecklist.findMany()
     * 
     * // Get first 10 VerificationChecklists
     * const verificationChecklists = await prisma.verificationChecklist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const verificationChecklistWithIdOnly = await prisma.verificationChecklist.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VerificationChecklistFindManyArgs>(args?: SelectSubset<T, VerificationChecklistFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationChecklistPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationChecklist.
     * @param {VerificationChecklistCreateArgs} args - Arguments to create a VerificationChecklist.
     * @example
     * // Create one VerificationChecklist
     * const VerificationChecklist = await prisma.verificationChecklist.create({
     *   data: {
     *     // ... data to create a VerificationChecklist
     *   }
     * })
     * 
     */
    create<T extends VerificationChecklistCreateArgs>(args: SelectSubset<T, VerificationChecklistCreateArgs<ExtArgs>>): Prisma__VerificationChecklistClient<$Result.GetResult<Prisma.$VerificationChecklistPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationChecklists.
     * @param {VerificationChecklistCreateManyArgs} args - Arguments to create many VerificationChecklists.
     * @example
     * // Create many VerificationChecklists
     * const verificationChecklist = await prisma.verificationChecklist.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationChecklistCreateManyArgs>(args?: SelectSubset<T, VerificationChecklistCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationChecklists and returns the data saved in the database.
     * @param {VerificationChecklistCreateManyAndReturnArgs} args - Arguments to create many VerificationChecklists.
     * @example
     * // Create many VerificationChecklists
     * const verificationChecklist = await prisma.verificationChecklist.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationChecklists and only return the `id`
     * const verificationChecklistWithIdOnly = await prisma.verificationChecklist.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationChecklistCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationChecklistCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationChecklistPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationChecklist.
     * @param {VerificationChecklistDeleteArgs} args - Arguments to delete one VerificationChecklist.
     * @example
     * // Delete one VerificationChecklist
     * const VerificationChecklist = await prisma.verificationChecklist.delete({
     *   where: {
     *     // ... filter to delete one VerificationChecklist
     *   }
     * })
     * 
     */
    delete<T extends VerificationChecklistDeleteArgs>(args: SelectSubset<T, VerificationChecklistDeleteArgs<ExtArgs>>): Prisma__VerificationChecklistClient<$Result.GetResult<Prisma.$VerificationChecklistPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationChecklist.
     * @param {VerificationChecklistUpdateArgs} args - Arguments to update one VerificationChecklist.
     * @example
     * // Update one VerificationChecklist
     * const verificationChecklist = await prisma.verificationChecklist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationChecklistUpdateArgs>(args: SelectSubset<T, VerificationChecklistUpdateArgs<ExtArgs>>): Prisma__VerificationChecklistClient<$Result.GetResult<Prisma.$VerificationChecklistPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationChecklists.
     * @param {VerificationChecklistDeleteManyArgs} args - Arguments to filter VerificationChecklists to delete.
     * @example
     * // Delete a few VerificationChecklists
     * const { count } = await prisma.verificationChecklist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationChecklistDeleteManyArgs>(args?: SelectSubset<T, VerificationChecklistDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationChecklists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationChecklistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationChecklists
     * const verificationChecklist = await prisma.verificationChecklist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationChecklistUpdateManyArgs>(args: SelectSubset<T, VerificationChecklistUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationChecklists and returns the data updated in the database.
     * @param {VerificationChecklistUpdateManyAndReturnArgs} args - Arguments to update many VerificationChecklists.
     * @example
     * // Update many VerificationChecklists
     * const verificationChecklist = await prisma.verificationChecklist.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationChecklists and only return the `id`
     * const verificationChecklistWithIdOnly = await prisma.verificationChecklist.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationChecklistUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationChecklistUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationChecklistPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationChecklist.
     * @param {VerificationChecklistUpsertArgs} args - Arguments to update or create a VerificationChecklist.
     * @example
     * // Update or create a VerificationChecklist
     * const verificationChecklist = await prisma.verificationChecklist.upsert({
     *   create: {
     *     // ... data to create a VerificationChecklist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationChecklist we want to update
     *   }
     * })
     */
    upsert<T extends VerificationChecklistUpsertArgs>(args: SelectSubset<T, VerificationChecklistUpsertArgs<ExtArgs>>): Prisma__VerificationChecklistClient<$Result.GetResult<Prisma.$VerificationChecklistPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationChecklists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationChecklistCountArgs} args - Arguments to filter VerificationChecklists to count.
     * @example
     * // Count the number of VerificationChecklists
     * const count = await prisma.verificationChecklist.count({
     *   where: {
     *     // ... the filter for the VerificationChecklists we want to count
     *   }
     * })
    **/
    count<T extends VerificationChecklistCountArgs>(
      args?: Subset<T, VerificationChecklistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationChecklistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationChecklist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationChecklistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationChecklistAggregateArgs>(args: Subset<T, VerificationChecklistAggregateArgs>): Prisma.PrismaPromise<GetVerificationChecklistAggregateType<T>>

    /**
     * Group by VerificationChecklist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationChecklistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationChecklistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationChecklistGroupByArgs['orderBy'] }
        : { orderBy?: VerificationChecklistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationChecklistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationChecklistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationChecklist model
   */
  readonly fields: VerificationChecklistFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationChecklist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationChecklistClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VerificationChecklist model
   */
  interface VerificationChecklistFieldRefs {
    readonly id: FieldRef<"VerificationChecklist", 'String'>
    readonly projectId: FieldRef<"VerificationChecklist", 'String'>
    readonly tipo: FieldRef<"VerificationChecklist", 'String'>
    readonly respostasJson: FieldRef<"VerificationChecklist", 'String'>
    readonly documentosUrls: FieldRef<"VerificationChecklist", 'String'>
    readonly estado: FieldRef<"VerificationChecklist", 'String'>
  }
    

  // Custom InputTypes
  /**
   * VerificationChecklist findUnique
   */
  export type VerificationChecklistFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationChecklist
     */
    select?: VerificationChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationChecklist
     */
    omit?: VerificationChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationChecklistInclude<ExtArgs> | null
    /**
     * Filter, which VerificationChecklist to fetch.
     */
    where: VerificationChecklistWhereUniqueInput
  }

  /**
   * VerificationChecklist findUniqueOrThrow
   */
  export type VerificationChecklistFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationChecklist
     */
    select?: VerificationChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationChecklist
     */
    omit?: VerificationChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationChecklistInclude<ExtArgs> | null
    /**
     * Filter, which VerificationChecklist to fetch.
     */
    where: VerificationChecklistWhereUniqueInput
  }

  /**
   * VerificationChecklist findFirst
   */
  export type VerificationChecklistFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationChecklist
     */
    select?: VerificationChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationChecklist
     */
    omit?: VerificationChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationChecklistInclude<ExtArgs> | null
    /**
     * Filter, which VerificationChecklist to fetch.
     */
    where?: VerificationChecklistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationChecklists to fetch.
     */
    orderBy?: VerificationChecklistOrderByWithRelationInput | VerificationChecklistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationChecklists.
     */
    cursor?: VerificationChecklistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationChecklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationChecklists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationChecklists.
     */
    distinct?: VerificationChecklistScalarFieldEnum | VerificationChecklistScalarFieldEnum[]
  }

  /**
   * VerificationChecklist findFirstOrThrow
   */
  export type VerificationChecklistFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationChecklist
     */
    select?: VerificationChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationChecklist
     */
    omit?: VerificationChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationChecklistInclude<ExtArgs> | null
    /**
     * Filter, which VerificationChecklist to fetch.
     */
    where?: VerificationChecklistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationChecklists to fetch.
     */
    orderBy?: VerificationChecklistOrderByWithRelationInput | VerificationChecklistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationChecklists.
     */
    cursor?: VerificationChecklistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationChecklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationChecklists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationChecklists.
     */
    distinct?: VerificationChecklistScalarFieldEnum | VerificationChecklistScalarFieldEnum[]
  }

  /**
   * VerificationChecklist findMany
   */
  export type VerificationChecklistFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationChecklist
     */
    select?: VerificationChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationChecklist
     */
    omit?: VerificationChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationChecklistInclude<ExtArgs> | null
    /**
     * Filter, which VerificationChecklists to fetch.
     */
    where?: VerificationChecklistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationChecklists to fetch.
     */
    orderBy?: VerificationChecklistOrderByWithRelationInput | VerificationChecklistOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationChecklists.
     */
    cursor?: VerificationChecklistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationChecklists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationChecklists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationChecklists.
     */
    distinct?: VerificationChecklistScalarFieldEnum | VerificationChecklistScalarFieldEnum[]
  }

  /**
   * VerificationChecklist create
   */
  export type VerificationChecklistCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationChecklist
     */
    select?: VerificationChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationChecklist
     */
    omit?: VerificationChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationChecklistInclude<ExtArgs> | null
    /**
     * The data needed to create a VerificationChecklist.
     */
    data: XOR<VerificationChecklistCreateInput, VerificationChecklistUncheckedCreateInput>
  }

  /**
   * VerificationChecklist createMany
   */
  export type VerificationChecklistCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationChecklists.
     */
    data: VerificationChecklistCreateManyInput | VerificationChecklistCreateManyInput[]
  }

  /**
   * VerificationChecklist createManyAndReturn
   */
  export type VerificationChecklistCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationChecklist
     */
    select?: VerificationChecklistSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationChecklist
     */
    omit?: VerificationChecklistOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationChecklists.
     */
    data: VerificationChecklistCreateManyInput | VerificationChecklistCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationChecklistIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VerificationChecklist update
   */
  export type VerificationChecklistUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationChecklist
     */
    select?: VerificationChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationChecklist
     */
    omit?: VerificationChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationChecklistInclude<ExtArgs> | null
    /**
     * The data needed to update a VerificationChecklist.
     */
    data: XOR<VerificationChecklistUpdateInput, VerificationChecklistUncheckedUpdateInput>
    /**
     * Choose, which VerificationChecklist to update.
     */
    where: VerificationChecklistWhereUniqueInput
  }

  /**
   * VerificationChecklist updateMany
   */
  export type VerificationChecklistUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationChecklists.
     */
    data: XOR<VerificationChecklistUpdateManyMutationInput, VerificationChecklistUncheckedUpdateManyInput>
    /**
     * Filter which VerificationChecklists to update
     */
    where?: VerificationChecklistWhereInput
    /**
     * Limit how many VerificationChecklists to update.
     */
    limit?: number
  }

  /**
   * VerificationChecklist updateManyAndReturn
   */
  export type VerificationChecklistUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationChecklist
     */
    select?: VerificationChecklistSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationChecklist
     */
    omit?: VerificationChecklistOmit<ExtArgs> | null
    /**
     * The data used to update VerificationChecklists.
     */
    data: XOR<VerificationChecklistUpdateManyMutationInput, VerificationChecklistUncheckedUpdateManyInput>
    /**
     * Filter which VerificationChecklists to update
     */
    where?: VerificationChecklistWhereInput
    /**
     * Limit how many VerificationChecklists to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationChecklistIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VerificationChecklist upsert
   */
  export type VerificationChecklistUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationChecklist
     */
    select?: VerificationChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationChecklist
     */
    omit?: VerificationChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationChecklistInclude<ExtArgs> | null
    /**
     * The filter to search for the VerificationChecklist to update in case it exists.
     */
    where: VerificationChecklistWhereUniqueInput
    /**
     * In case the VerificationChecklist found by the `where` argument doesn't exist, create a new VerificationChecklist with this data.
     */
    create: XOR<VerificationChecklistCreateInput, VerificationChecklistUncheckedCreateInput>
    /**
     * In case the VerificationChecklist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationChecklistUpdateInput, VerificationChecklistUncheckedUpdateInput>
  }

  /**
   * VerificationChecklist delete
   */
  export type VerificationChecklistDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationChecklist
     */
    select?: VerificationChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationChecklist
     */
    omit?: VerificationChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationChecklistInclude<ExtArgs> | null
    /**
     * Filter which VerificationChecklist to delete.
     */
    where: VerificationChecklistWhereUniqueInput
  }

  /**
   * VerificationChecklist deleteMany
   */
  export type VerificationChecklistDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationChecklists to delete
     */
    where?: VerificationChecklistWhereInput
    /**
     * Limit how many VerificationChecklists to delete.
     */
    limit?: number
  }

  /**
   * VerificationChecklist without action
   */
  export type VerificationChecklistDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationChecklist
     */
    select?: VerificationChecklistSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationChecklist
     */
    omit?: VerificationChecklistOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VerificationChecklistInclude<ExtArgs> | null
  }


  /**
   * Model Reaction
   */

  export type AggregateReaction = {
    _count: ReactionCountAggregateOutputType | null
    _min: ReactionMinAggregateOutputType | null
    _max: ReactionMaxAggregateOutputType | null
  }

  export type ReactionMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    userId: string | null
    tipo: string | null
    criadoEm: Date | null
  }

  export type ReactionMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    userId: string | null
    tipo: string | null
    criadoEm: Date | null
  }

  export type ReactionCountAggregateOutputType = {
    id: number
    projectId: number
    userId: number
    tipo: number
    criadoEm: number
    _all: number
  }


  export type ReactionMinAggregateInputType = {
    id?: true
    projectId?: true
    userId?: true
    tipo?: true
    criadoEm?: true
  }

  export type ReactionMaxAggregateInputType = {
    id?: true
    projectId?: true
    userId?: true
    tipo?: true
    criadoEm?: true
  }

  export type ReactionCountAggregateInputType = {
    id?: true
    projectId?: true
    userId?: true
    tipo?: true
    criadoEm?: true
    _all?: true
  }

  export type ReactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reaction to aggregate.
     */
    where?: ReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reactions to fetch.
     */
    orderBy?: ReactionOrderByWithRelationInput | ReactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reactions
    **/
    _count?: true | ReactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReactionMaxAggregateInputType
  }

  export type GetReactionAggregateType<T extends ReactionAggregateArgs> = {
        [P in keyof T & keyof AggregateReaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReaction[P]>
      : GetScalarType<T[P], AggregateReaction[P]>
  }




  export type ReactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReactionWhereInput
    orderBy?: ReactionOrderByWithAggregationInput | ReactionOrderByWithAggregationInput[]
    by: ReactionScalarFieldEnum[] | ReactionScalarFieldEnum
    having?: ReactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReactionCountAggregateInputType | true
    _min?: ReactionMinAggregateInputType
    _max?: ReactionMaxAggregateInputType
  }

  export type ReactionGroupByOutputType = {
    id: string
    projectId: string
    userId: string
    tipo: string
    criadoEm: Date
    _count: ReactionCountAggregateOutputType | null
    _min: ReactionMinAggregateOutputType | null
    _max: ReactionMaxAggregateOutputType | null
  }

  type GetReactionGroupByPayload<T extends ReactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReactionGroupByOutputType[P]>
            : GetScalarType<T[P], ReactionGroupByOutputType[P]>
        }
      >
    >


  export type ReactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    userId?: boolean
    tipo?: boolean
    criadoEm?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reaction"]>

  export type ReactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    userId?: boolean
    tipo?: boolean
    criadoEm?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reaction"]>

  export type ReactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    userId?: boolean
    tipo?: boolean
    criadoEm?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reaction"]>

  export type ReactionSelectScalar = {
    id?: boolean
    projectId?: boolean
    userId?: boolean
    tipo?: boolean
    criadoEm?: boolean
  }

  export type ReactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "userId" | "tipo" | "criadoEm", ExtArgs["result"]["reaction"]>
  export type ReactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ReactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ReactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reaction"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      userId: string
      tipo: string
      criadoEm: Date
    }, ExtArgs["result"]["reaction"]>
    composites: {}
  }

  type ReactionGetPayload<S extends boolean | null | undefined | ReactionDefaultArgs> = $Result.GetResult<Prisma.$ReactionPayload, S>

  type ReactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReactionCountAggregateInputType | true
    }

  export interface ReactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reaction'], meta: { name: 'Reaction' } }
    /**
     * Find zero or one Reaction that matches the filter.
     * @param {ReactionFindUniqueArgs} args - Arguments to find a Reaction
     * @example
     * // Get one Reaction
     * const reaction = await prisma.reaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReactionFindUniqueArgs>(args: SelectSubset<T, ReactionFindUniqueArgs<ExtArgs>>): Prisma__ReactionClient<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReactionFindUniqueOrThrowArgs} args - Arguments to find a Reaction
     * @example
     * // Get one Reaction
     * const reaction = await prisma.reaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReactionFindUniqueOrThrowArgs>(args: SelectSubset<T, ReactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReactionClient<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionFindFirstArgs} args - Arguments to find a Reaction
     * @example
     * // Get one Reaction
     * const reaction = await prisma.reaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReactionFindFirstArgs>(args?: SelectSubset<T, ReactionFindFirstArgs<ExtArgs>>): Prisma__ReactionClient<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionFindFirstOrThrowArgs} args - Arguments to find a Reaction
     * @example
     * // Get one Reaction
     * const reaction = await prisma.reaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReactionFindFirstOrThrowArgs>(args?: SelectSubset<T, ReactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReactionClient<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reactions
     * const reactions = await prisma.reaction.findMany()
     * 
     * // Get first 10 Reactions
     * const reactions = await prisma.reaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reactionWithIdOnly = await prisma.reaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReactionFindManyArgs>(args?: SelectSubset<T, ReactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reaction.
     * @param {ReactionCreateArgs} args - Arguments to create a Reaction.
     * @example
     * // Create one Reaction
     * const Reaction = await prisma.reaction.create({
     *   data: {
     *     // ... data to create a Reaction
     *   }
     * })
     * 
     */
    create<T extends ReactionCreateArgs>(args: SelectSubset<T, ReactionCreateArgs<ExtArgs>>): Prisma__ReactionClient<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reactions.
     * @param {ReactionCreateManyArgs} args - Arguments to create many Reactions.
     * @example
     * // Create many Reactions
     * const reaction = await prisma.reaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReactionCreateManyArgs>(args?: SelectSubset<T, ReactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reactions and returns the data saved in the database.
     * @param {ReactionCreateManyAndReturnArgs} args - Arguments to create many Reactions.
     * @example
     * // Create many Reactions
     * const reaction = await prisma.reaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reactions and only return the `id`
     * const reactionWithIdOnly = await prisma.reaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReactionCreateManyAndReturnArgs>(args?: SelectSubset<T, ReactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reaction.
     * @param {ReactionDeleteArgs} args - Arguments to delete one Reaction.
     * @example
     * // Delete one Reaction
     * const Reaction = await prisma.reaction.delete({
     *   where: {
     *     // ... filter to delete one Reaction
     *   }
     * })
     * 
     */
    delete<T extends ReactionDeleteArgs>(args: SelectSubset<T, ReactionDeleteArgs<ExtArgs>>): Prisma__ReactionClient<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reaction.
     * @param {ReactionUpdateArgs} args - Arguments to update one Reaction.
     * @example
     * // Update one Reaction
     * const reaction = await prisma.reaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReactionUpdateArgs>(args: SelectSubset<T, ReactionUpdateArgs<ExtArgs>>): Prisma__ReactionClient<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reactions.
     * @param {ReactionDeleteManyArgs} args - Arguments to filter Reactions to delete.
     * @example
     * // Delete a few Reactions
     * const { count } = await prisma.reaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReactionDeleteManyArgs>(args?: SelectSubset<T, ReactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reactions
     * const reaction = await prisma.reaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReactionUpdateManyArgs>(args: SelectSubset<T, ReactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reactions and returns the data updated in the database.
     * @param {ReactionUpdateManyAndReturnArgs} args - Arguments to update many Reactions.
     * @example
     * // Update many Reactions
     * const reaction = await prisma.reaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reactions and only return the `id`
     * const reactionWithIdOnly = await prisma.reaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReactionUpdateManyAndReturnArgs>(args: SelectSubset<T, ReactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reaction.
     * @param {ReactionUpsertArgs} args - Arguments to update or create a Reaction.
     * @example
     * // Update or create a Reaction
     * const reaction = await prisma.reaction.upsert({
     *   create: {
     *     // ... data to create a Reaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reaction we want to update
     *   }
     * })
     */
    upsert<T extends ReactionUpsertArgs>(args: SelectSubset<T, ReactionUpsertArgs<ExtArgs>>): Prisma__ReactionClient<$Result.GetResult<Prisma.$ReactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionCountArgs} args - Arguments to filter Reactions to count.
     * @example
     * // Count the number of Reactions
     * const count = await prisma.reaction.count({
     *   where: {
     *     // ... the filter for the Reactions we want to count
     *   }
     * })
    **/
    count<T extends ReactionCountArgs>(
      args?: Subset<T, ReactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReactionAggregateArgs>(args: Subset<T, ReactionAggregateArgs>): Prisma.PrismaPromise<GetReactionAggregateType<T>>

    /**
     * Group by Reaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReactionGroupByArgs['orderBy'] }
        : { orderBy?: ReactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reaction model
   */
  readonly fields: ReactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Reaction model
   */
  interface ReactionFieldRefs {
    readonly id: FieldRef<"Reaction", 'String'>
    readonly projectId: FieldRef<"Reaction", 'String'>
    readonly userId: FieldRef<"Reaction", 'String'>
    readonly tipo: FieldRef<"Reaction", 'String'>
    readonly criadoEm: FieldRef<"Reaction", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Reaction findUnique
   */
  export type ReactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * Filter, which Reaction to fetch.
     */
    where: ReactionWhereUniqueInput
  }

  /**
   * Reaction findUniqueOrThrow
   */
  export type ReactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * Filter, which Reaction to fetch.
     */
    where: ReactionWhereUniqueInput
  }

  /**
   * Reaction findFirst
   */
  export type ReactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * Filter, which Reaction to fetch.
     */
    where?: ReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reactions to fetch.
     */
    orderBy?: ReactionOrderByWithRelationInput | ReactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reactions.
     */
    cursor?: ReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reactions.
     */
    distinct?: ReactionScalarFieldEnum | ReactionScalarFieldEnum[]
  }

  /**
   * Reaction findFirstOrThrow
   */
  export type ReactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * Filter, which Reaction to fetch.
     */
    where?: ReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reactions to fetch.
     */
    orderBy?: ReactionOrderByWithRelationInput | ReactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reactions.
     */
    cursor?: ReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reactions.
     */
    distinct?: ReactionScalarFieldEnum | ReactionScalarFieldEnum[]
  }

  /**
   * Reaction findMany
   */
  export type ReactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * Filter, which Reactions to fetch.
     */
    where?: ReactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reactions to fetch.
     */
    orderBy?: ReactionOrderByWithRelationInput | ReactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reactions.
     */
    cursor?: ReactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reactions.
     */
    distinct?: ReactionScalarFieldEnum | ReactionScalarFieldEnum[]
  }

  /**
   * Reaction create
   */
  export type ReactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * The data needed to create a Reaction.
     */
    data: XOR<ReactionCreateInput, ReactionUncheckedCreateInput>
  }

  /**
   * Reaction createMany
   */
  export type ReactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reactions.
     */
    data: ReactionCreateManyInput | ReactionCreateManyInput[]
  }

  /**
   * Reaction createManyAndReturn
   */
  export type ReactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * The data used to create many Reactions.
     */
    data: ReactionCreateManyInput | ReactionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reaction update
   */
  export type ReactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * The data needed to update a Reaction.
     */
    data: XOR<ReactionUpdateInput, ReactionUncheckedUpdateInput>
    /**
     * Choose, which Reaction to update.
     */
    where: ReactionWhereUniqueInput
  }

  /**
   * Reaction updateMany
   */
  export type ReactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reactions.
     */
    data: XOR<ReactionUpdateManyMutationInput, ReactionUncheckedUpdateManyInput>
    /**
     * Filter which Reactions to update
     */
    where?: ReactionWhereInput
    /**
     * Limit how many Reactions to update.
     */
    limit?: number
  }

  /**
   * Reaction updateManyAndReturn
   */
  export type ReactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * The data used to update Reactions.
     */
    data: XOR<ReactionUpdateManyMutationInput, ReactionUncheckedUpdateManyInput>
    /**
     * Filter which Reactions to update
     */
    where?: ReactionWhereInput
    /**
     * Limit how many Reactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reaction upsert
   */
  export type ReactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * The filter to search for the Reaction to update in case it exists.
     */
    where: ReactionWhereUniqueInput
    /**
     * In case the Reaction found by the `where` argument doesn't exist, create a new Reaction with this data.
     */
    create: XOR<ReactionCreateInput, ReactionUncheckedCreateInput>
    /**
     * In case the Reaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReactionUpdateInput, ReactionUncheckedUpdateInput>
  }

  /**
   * Reaction delete
   */
  export type ReactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
    /**
     * Filter which Reaction to delete.
     */
    where: ReactionWhereUniqueInput
  }

  /**
   * Reaction deleteMany
   */
  export type ReactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reactions to delete
     */
    where?: ReactionWhereInput
    /**
     * Limit how many Reactions to delete.
     */
    limit?: number
  }

  /**
   * Reaction without action
   */
  export type ReactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reaction
     */
    select?: ReactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reaction
     */
    omit?: ReactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReactionInclude<ExtArgs> | null
  }


  /**
   * Model NDA
   */

  export type AggregateNDA = {
    _count: NDACountAggregateOutputType | null
    _min: NDAMinAggregateOutputType | null
    _max: NDAMaxAggregateOutputType | null
  }

  export type NDAMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    buyerId: string | null
    aceiteEm: Date | null
    ip: string | null
    pago: boolean | null
    criadoEm: Date | null
  }

  export type NDAMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    buyerId: string | null
    aceiteEm: Date | null
    ip: string | null
    pago: boolean | null
    criadoEm: Date | null
  }

  export type NDACountAggregateOutputType = {
    id: number
    projectId: number
    buyerId: number
    aceiteEm: number
    ip: number
    pago: number
    criadoEm: number
    _all: number
  }


  export type NDAMinAggregateInputType = {
    id?: true
    projectId?: true
    buyerId?: true
    aceiteEm?: true
    ip?: true
    pago?: true
    criadoEm?: true
  }

  export type NDAMaxAggregateInputType = {
    id?: true
    projectId?: true
    buyerId?: true
    aceiteEm?: true
    ip?: true
    pago?: true
    criadoEm?: true
  }

  export type NDACountAggregateInputType = {
    id?: true
    projectId?: true
    buyerId?: true
    aceiteEm?: true
    ip?: true
    pago?: true
    criadoEm?: true
    _all?: true
  }

  export type NDAAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NDA to aggregate.
     */
    where?: NDAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NDAS to fetch.
     */
    orderBy?: NDAOrderByWithRelationInput | NDAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NDAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NDAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NDAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NDAS
    **/
    _count?: true | NDACountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NDAMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NDAMaxAggregateInputType
  }

  export type GetNDAAggregateType<T extends NDAAggregateArgs> = {
        [P in keyof T & keyof AggregateNDA]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNDA[P]>
      : GetScalarType<T[P], AggregateNDA[P]>
  }




  export type NDAGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NDAWhereInput
    orderBy?: NDAOrderByWithAggregationInput | NDAOrderByWithAggregationInput[]
    by: NDAScalarFieldEnum[] | NDAScalarFieldEnum
    having?: NDAScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NDACountAggregateInputType | true
    _min?: NDAMinAggregateInputType
    _max?: NDAMaxAggregateInputType
  }

  export type NDAGroupByOutputType = {
    id: string
    projectId: string
    buyerId: string
    aceiteEm: Date
    ip: string
    pago: boolean
    criadoEm: Date
    _count: NDACountAggregateOutputType | null
    _min: NDAMinAggregateOutputType | null
    _max: NDAMaxAggregateOutputType | null
  }

  type GetNDAGroupByPayload<T extends NDAGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NDAGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NDAGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NDAGroupByOutputType[P]>
            : GetScalarType<T[P], NDAGroupByOutputType[P]>
        }
      >
    >


  export type NDASelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    buyerId?: boolean
    aceiteEm?: boolean
    ip?: boolean
    pago?: boolean
    criadoEm?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    buyer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nDA"]>

  export type NDASelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    buyerId?: boolean
    aceiteEm?: boolean
    ip?: boolean
    pago?: boolean
    criadoEm?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    buyer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nDA"]>

  export type NDASelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    buyerId?: boolean
    aceiteEm?: boolean
    ip?: boolean
    pago?: boolean
    criadoEm?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    buyer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["nDA"]>

  export type NDASelectScalar = {
    id?: boolean
    projectId?: boolean
    buyerId?: boolean
    aceiteEm?: boolean
    ip?: boolean
    pago?: boolean
    criadoEm?: boolean
  }

  export type NDAOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "buyerId" | "aceiteEm" | "ip" | "pago" | "criadoEm", ExtArgs["result"]["nDA"]>
  export type NDAInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    buyer?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NDAIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    buyer?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NDAIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    buyer?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NDAPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NDA"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      buyer: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      buyerId: string
      aceiteEm: Date
      ip: string
      pago: boolean
      criadoEm: Date
    }, ExtArgs["result"]["nDA"]>
    composites: {}
  }

  type NDAGetPayload<S extends boolean | null | undefined | NDADefaultArgs> = $Result.GetResult<Prisma.$NDAPayload, S>

  type NDACountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NDAFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NDACountAggregateInputType | true
    }

  export interface NDADelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NDA'], meta: { name: 'NDA' } }
    /**
     * Find zero or one NDA that matches the filter.
     * @param {NDAFindUniqueArgs} args - Arguments to find a NDA
     * @example
     * // Get one NDA
     * const nDA = await prisma.nDA.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NDAFindUniqueArgs>(args: SelectSubset<T, NDAFindUniqueArgs<ExtArgs>>): Prisma__NDAClient<$Result.GetResult<Prisma.$NDAPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NDA that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NDAFindUniqueOrThrowArgs} args - Arguments to find a NDA
     * @example
     * // Get one NDA
     * const nDA = await prisma.nDA.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NDAFindUniqueOrThrowArgs>(args: SelectSubset<T, NDAFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NDAClient<$Result.GetResult<Prisma.$NDAPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NDA that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NDAFindFirstArgs} args - Arguments to find a NDA
     * @example
     * // Get one NDA
     * const nDA = await prisma.nDA.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NDAFindFirstArgs>(args?: SelectSubset<T, NDAFindFirstArgs<ExtArgs>>): Prisma__NDAClient<$Result.GetResult<Prisma.$NDAPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NDA that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NDAFindFirstOrThrowArgs} args - Arguments to find a NDA
     * @example
     * // Get one NDA
     * const nDA = await prisma.nDA.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NDAFindFirstOrThrowArgs>(args?: SelectSubset<T, NDAFindFirstOrThrowArgs<ExtArgs>>): Prisma__NDAClient<$Result.GetResult<Prisma.$NDAPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NDAS that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NDAFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NDAS
     * const nDAS = await prisma.nDA.findMany()
     * 
     * // Get first 10 NDAS
     * const nDAS = await prisma.nDA.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nDAWithIdOnly = await prisma.nDA.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NDAFindManyArgs>(args?: SelectSubset<T, NDAFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NDAPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NDA.
     * @param {NDACreateArgs} args - Arguments to create a NDA.
     * @example
     * // Create one NDA
     * const NDA = await prisma.nDA.create({
     *   data: {
     *     // ... data to create a NDA
     *   }
     * })
     * 
     */
    create<T extends NDACreateArgs>(args: SelectSubset<T, NDACreateArgs<ExtArgs>>): Prisma__NDAClient<$Result.GetResult<Prisma.$NDAPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NDAS.
     * @param {NDACreateManyArgs} args - Arguments to create many NDAS.
     * @example
     * // Create many NDAS
     * const nDA = await prisma.nDA.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NDACreateManyArgs>(args?: SelectSubset<T, NDACreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NDAS and returns the data saved in the database.
     * @param {NDACreateManyAndReturnArgs} args - Arguments to create many NDAS.
     * @example
     * // Create many NDAS
     * const nDA = await prisma.nDA.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NDAS and only return the `id`
     * const nDAWithIdOnly = await prisma.nDA.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NDACreateManyAndReturnArgs>(args?: SelectSubset<T, NDACreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NDAPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NDA.
     * @param {NDADeleteArgs} args - Arguments to delete one NDA.
     * @example
     * // Delete one NDA
     * const NDA = await prisma.nDA.delete({
     *   where: {
     *     // ... filter to delete one NDA
     *   }
     * })
     * 
     */
    delete<T extends NDADeleteArgs>(args: SelectSubset<T, NDADeleteArgs<ExtArgs>>): Prisma__NDAClient<$Result.GetResult<Prisma.$NDAPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NDA.
     * @param {NDAUpdateArgs} args - Arguments to update one NDA.
     * @example
     * // Update one NDA
     * const nDA = await prisma.nDA.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NDAUpdateArgs>(args: SelectSubset<T, NDAUpdateArgs<ExtArgs>>): Prisma__NDAClient<$Result.GetResult<Prisma.$NDAPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NDAS.
     * @param {NDADeleteManyArgs} args - Arguments to filter NDAS to delete.
     * @example
     * // Delete a few NDAS
     * const { count } = await prisma.nDA.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NDADeleteManyArgs>(args?: SelectSubset<T, NDADeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NDAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NDAUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NDAS
     * const nDA = await prisma.nDA.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NDAUpdateManyArgs>(args: SelectSubset<T, NDAUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NDAS and returns the data updated in the database.
     * @param {NDAUpdateManyAndReturnArgs} args - Arguments to update many NDAS.
     * @example
     * // Update many NDAS
     * const nDA = await prisma.nDA.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NDAS and only return the `id`
     * const nDAWithIdOnly = await prisma.nDA.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NDAUpdateManyAndReturnArgs>(args: SelectSubset<T, NDAUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NDAPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NDA.
     * @param {NDAUpsertArgs} args - Arguments to update or create a NDA.
     * @example
     * // Update or create a NDA
     * const nDA = await prisma.nDA.upsert({
     *   create: {
     *     // ... data to create a NDA
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NDA we want to update
     *   }
     * })
     */
    upsert<T extends NDAUpsertArgs>(args: SelectSubset<T, NDAUpsertArgs<ExtArgs>>): Prisma__NDAClient<$Result.GetResult<Prisma.$NDAPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NDAS.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NDACountArgs} args - Arguments to filter NDAS to count.
     * @example
     * // Count the number of NDAS
     * const count = await prisma.nDA.count({
     *   where: {
     *     // ... the filter for the NDAS we want to count
     *   }
     * })
    **/
    count<T extends NDACountArgs>(
      args?: Subset<T, NDACountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NDACountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NDA.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NDAAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NDAAggregateArgs>(args: Subset<T, NDAAggregateArgs>): Prisma.PrismaPromise<GetNDAAggregateType<T>>

    /**
     * Group by NDA.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NDAGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NDAGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NDAGroupByArgs['orderBy'] }
        : { orderBy?: NDAGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NDAGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNDAGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NDA model
   */
  readonly fields: NDAFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NDA.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NDAClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    buyer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NDA model
   */
  interface NDAFieldRefs {
    readonly id: FieldRef<"NDA", 'String'>
    readonly projectId: FieldRef<"NDA", 'String'>
    readonly buyerId: FieldRef<"NDA", 'String'>
    readonly aceiteEm: FieldRef<"NDA", 'DateTime'>
    readonly ip: FieldRef<"NDA", 'String'>
    readonly pago: FieldRef<"NDA", 'Boolean'>
    readonly criadoEm: FieldRef<"NDA", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NDA findUnique
   */
  export type NDAFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NDA
     */
    select?: NDASelect<ExtArgs> | null
    /**
     * Omit specific fields from the NDA
     */
    omit?: NDAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NDAInclude<ExtArgs> | null
    /**
     * Filter, which NDA to fetch.
     */
    where: NDAWhereUniqueInput
  }

  /**
   * NDA findUniqueOrThrow
   */
  export type NDAFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NDA
     */
    select?: NDASelect<ExtArgs> | null
    /**
     * Omit specific fields from the NDA
     */
    omit?: NDAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NDAInclude<ExtArgs> | null
    /**
     * Filter, which NDA to fetch.
     */
    where: NDAWhereUniqueInput
  }

  /**
   * NDA findFirst
   */
  export type NDAFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NDA
     */
    select?: NDASelect<ExtArgs> | null
    /**
     * Omit specific fields from the NDA
     */
    omit?: NDAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NDAInclude<ExtArgs> | null
    /**
     * Filter, which NDA to fetch.
     */
    where?: NDAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NDAS to fetch.
     */
    orderBy?: NDAOrderByWithRelationInput | NDAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NDAS.
     */
    cursor?: NDAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NDAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NDAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NDAS.
     */
    distinct?: NDAScalarFieldEnum | NDAScalarFieldEnum[]
  }

  /**
   * NDA findFirstOrThrow
   */
  export type NDAFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NDA
     */
    select?: NDASelect<ExtArgs> | null
    /**
     * Omit specific fields from the NDA
     */
    omit?: NDAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NDAInclude<ExtArgs> | null
    /**
     * Filter, which NDA to fetch.
     */
    where?: NDAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NDAS to fetch.
     */
    orderBy?: NDAOrderByWithRelationInput | NDAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NDAS.
     */
    cursor?: NDAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NDAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NDAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NDAS.
     */
    distinct?: NDAScalarFieldEnum | NDAScalarFieldEnum[]
  }

  /**
   * NDA findMany
   */
  export type NDAFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NDA
     */
    select?: NDASelect<ExtArgs> | null
    /**
     * Omit specific fields from the NDA
     */
    omit?: NDAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NDAInclude<ExtArgs> | null
    /**
     * Filter, which NDAS to fetch.
     */
    where?: NDAWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NDAS to fetch.
     */
    orderBy?: NDAOrderByWithRelationInput | NDAOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NDAS.
     */
    cursor?: NDAWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NDAS from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NDAS.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NDAS.
     */
    distinct?: NDAScalarFieldEnum | NDAScalarFieldEnum[]
  }

  /**
   * NDA create
   */
  export type NDACreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NDA
     */
    select?: NDASelect<ExtArgs> | null
    /**
     * Omit specific fields from the NDA
     */
    omit?: NDAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NDAInclude<ExtArgs> | null
    /**
     * The data needed to create a NDA.
     */
    data: XOR<NDACreateInput, NDAUncheckedCreateInput>
  }

  /**
   * NDA createMany
   */
  export type NDACreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NDAS.
     */
    data: NDACreateManyInput | NDACreateManyInput[]
  }

  /**
   * NDA createManyAndReturn
   */
  export type NDACreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NDA
     */
    select?: NDASelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NDA
     */
    omit?: NDAOmit<ExtArgs> | null
    /**
     * The data used to create many NDAS.
     */
    data: NDACreateManyInput | NDACreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NDAIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NDA update
   */
  export type NDAUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NDA
     */
    select?: NDASelect<ExtArgs> | null
    /**
     * Omit specific fields from the NDA
     */
    omit?: NDAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NDAInclude<ExtArgs> | null
    /**
     * The data needed to update a NDA.
     */
    data: XOR<NDAUpdateInput, NDAUncheckedUpdateInput>
    /**
     * Choose, which NDA to update.
     */
    where: NDAWhereUniqueInput
  }

  /**
   * NDA updateMany
   */
  export type NDAUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NDAS.
     */
    data: XOR<NDAUpdateManyMutationInput, NDAUncheckedUpdateManyInput>
    /**
     * Filter which NDAS to update
     */
    where?: NDAWhereInput
    /**
     * Limit how many NDAS to update.
     */
    limit?: number
  }

  /**
   * NDA updateManyAndReturn
   */
  export type NDAUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NDA
     */
    select?: NDASelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NDA
     */
    omit?: NDAOmit<ExtArgs> | null
    /**
     * The data used to update NDAS.
     */
    data: XOR<NDAUpdateManyMutationInput, NDAUncheckedUpdateManyInput>
    /**
     * Filter which NDAS to update
     */
    where?: NDAWhereInput
    /**
     * Limit how many NDAS to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NDAIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NDA upsert
   */
  export type NDAUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NDA
     */
    select?: NDASelect<ExtArgs> | null
    /**
     * Omit specific fields from the NDA
     */
    omit?: NDAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NDAInclude<ExtArgs> | null
    /**
     * The filter to search for the NDA to update in case it exists.
     */
    where: NDAWhereUniqueInput
    /**
     * In case the NDA found by the `where` argument doesn't exist, create a new NDA with this data.
     */
    create: XOR<NDACreateInput, NDAUncheckedCreateInput>
    /**
     * In case the NDA was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NDAUpdateInput, NDAUncheckedUpdateInput>
  }

  /**
   * NDA delete
   */
  export type NDADeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NDA
     */
    select?: NDASelect<ExtArgs> | null
    /**
     * Omit specific fields from the NDA
     */
    omit?: NDAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NDAInclude<ExtArgs> | null
    /**
     * Filter which NDA to delete.
     */
    where: NDAWhereUniqueInput
  }

  /**
   * NDA deleteMany
   */
  export type NDADeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NDAS to delete
     */
    where?: NDAWhereInput
    /**
     * Limit how many NDAS to delete.
     */
    limit?: number
  }

  /**
   * NDA without action
   */
  export type NDADefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NDA
     */
    select?: NDASelect<ExtArgs> | null
    /**
     * Omit specific fields from the NDA
     */
    omit?: NDAOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NDAInclude<ExtArgs> | null
  }


  /**
   * Model ContactRequest
   */

  export type AggregateContactRequest = {
    _count: ContactRequestCountAggregateOutputType | null
    _min: ContactRequestMinAggregateOutputType | null
    _max: ContactRequestMaxAggregateOutputType | null
  }

  export type ContactRequestMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    buyerId: string | null
    estado: string | null
    criadoEm: Date | null
  }

  export type ContactRequestMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    buyerId: string | null
    estado: string | null
    criadoEm: Date | null
  }

  export type ContactRequestCountAggregateOutputType = {
    id: number
    projectId: number
    buyerId: number
    estado: number
    criadoEm: number
    _all: number
  }


  export type ContactRequestMinAggregateInputType = {
    id?: true
    projectId?: true
    buyerId?: true
    estado?: true
    criadoEm?: true
  }

  export type ContactRequestMaxAggregateInputType = {
    id?: true
    projectId?: true
    buyerId?: true
    estado?: true
    criadoEm?: true
  }

  export type ContactRequestCountAggregateInputType = {
    id?: true
    projectId?: true
    buyerId?: true
    estado?: true
    criadoEm?: true
    _all?: true
  }

  export type ContactRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactRequest to aggregate.
     */
    where?: ContactRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactRequests to fetch.
     */
    orderBy?: ContactRequestOrderByWithRelationInput | ContactRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ContactRequests
    **/
    _count?: true | ContactRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactRequestMaxAggregateInputType
  }

  export type GetContactRequestAggregateType<T extends ContactRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateContactRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContactRequest[P]>
      : GetScalarType<T[P], AggregateContactRequest[P]>
  }




  export type ContactRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactRequestWhereInput
    orderBy?: ContactRequestOrderByWithAggregationInput | ContactRequestOrderByWithAggregationInput[]
    by: ContactRequestScalarFieldEnum[] | ContactRequestScalarFieldEnum
    having?: ContactRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactRequestCountAggregateInputType | true
    _min?: ContactRequestMinAggregateInputType
    _max?: ContactRequestMaxAggregateInputType
  }

  export type ContactRequestGroupByOutputType = {
    id: string
    projectId: string
    buyerId: string
    estado: string
    criadoEm: Date
    _count: ContactRequestCountAggregateOutputType | null
    _min: ContactRequestMinAggregateOutputType | null
    _max: ContactRequestMaxAggregateOutputType | null
  }

  type GetContactRequestGroupByPayload<T extends ContactRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactRequestGroupByOutputType[P]>
            : GetScalarType<T[P], ContactRequestGroupByOutputType[P]>
        }
      >
    >


  export type ContactRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    buyerId?: boolean
    estado?: boolean
    criadoEm?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    buyer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contactRequest"]>

  export type ContactRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    buyerId?: boolean
    estado?: boolean
    criadoEm?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    buyer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contactRequest"]>

  export type ContactRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    buyerId?: boolean
    estado?: boolean
    criadoEm?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    buyer?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contactRequest"]>

  export type ContactRequestSelectScalar = {
    id?: boolean
    projectId?: boolean
    buyerId?: boolean
    estado?: boolean
    criadoEm?: boolean
  }

  export type ContactRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "buyerId" | "estado" | "criadoEm", ExtArgs["result"]["contactRequest"]>
  export type ContactRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    buyer?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ContactRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    buyer?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ContactRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    buyer?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ContactRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ContactRequest"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      buyer: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      buyerId: string
      estado: string
      criadoEm: Date
    }, ExtArgs["result"]["contactRequest"]>
    composites: {}
  }

  type ContactRequestGetPayload<S extends boolean | null | undefined | ContactRequestDefaultArgs> = $Result.GetResult<Prisma.$ContactRequestPayload, S>

  type ContactRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactRequestCountAggregateInputType | true
    }

  export interface ContactRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ContactRequest'], meta: { name: 'ContactRequest' } }
    /**
     * Find zero or one ContactRequest that matches the filter.
     * @param {ContactRequestFindUniqueArgs} args - Arguments to find a ContactRequest
     * @example
     * // Get one ContactRequest
     * const contactRequest = await prisma.contactRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactRequestFindUniqueArgs>(args: SelectSubset<T, ContactRequestFindUniqueArgs<ExtArgs>>): Prisma__ContactRequestClient<$Result.GetResult<Prisma.$ContactRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ContactRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactRequestFindUniqueOrThrowArgs} args - Arguments to find a ContactRequest
     * @example
     * // Get one ContactRequest
     * const contactRequest = await prisma.contactRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactRequestClient<$Result.GetResult<Prisma.$ContactRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactRequestFindFirstArgs} args - Arguments to find a ContactRequest
     * @example
     * // Get one ContactRequest
     * const contactRequest = await prisma.contactRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactRequestFindFirstArgs>(args?: SelectSubset<T, ContactRequestFindFirstArgs<ExtArgs>>): Prisma__ContactRequestClient<$Result.GetResult<Prisma.$ContactRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ContactRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactRequestFindFirstOrThrowArgs} args - Arguments to find a ContactRequest
     * @example
     * // Get one ContactRequest
     * const contactRequest = await prisma.contactRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactRequestClient<$Result.GetResult<Prisma.$ContactRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ContactRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ContactRequests
     * const contactRequests = await prisma.contactRequest.findMany()
     * 
     * // Get first 10 ContactRequests
     * const contactRequests = await prisma.contactRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactRequestWithIdOnly = await prisma.contactRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactRequestFindManyArgs>(args?: SelectSubset<T, ContactRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ContactRequest.
     * @param {ContactRequestCreateArgs} args - Arguments to create a ContactRequest.
     * @example
     * // Create one ContactRequest
     * const ContactRequest = await prisma.contactRequest.create({
     *   data: {
     *     // ... data to create a ContactRequest
     *   }
     * })
     * 
     */
    create<T extends ContactRequestCreateArgs>(args: SelectSubset<T, ContactRequestCreateArgs<ExtArgs>>): Prisma__ContactRequestClient<$Result.GetResult<Prisma.$ContactRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ContactRequests.
     * @param {ContactRequestCreateManyArgs} args - Arguments to create many ContactRequests.
     * @example
     * // Create many ContactRequests
     * const contactRequest = await prisma.contactRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactRequestCreateManyArgs>(args?: SelectSubset<T, ContactRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ContactRequests and returns the data saved in the database.
     * @param {ContactRequestCreateManyAndReturnArgs} args - Arguments to create many ContactRequests.
     * @example
     * // Create many ContactRequests
     * const contactRequest = await prisma.contactRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ContactRequests and only return the `id`
     * const contactRequestWithIdOnly = await prisma.contactRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ContactRequest.
     * @param {ContactRequestDeleteArgs} args - Arguments to delete one ContactRequest.
     * @example
     * // Delete one ContactRequest
     * const ContactRequest = await prisma.contactRequest.delete({
     *   where: {
     *     // ... filter to delete one ContactRequest
     *   }
     * })
     * 
     */
    delete<T extends ContactRequestDeleteArgs>(args: SelectSubset<T, ContactRequestDeleteArgs<ExtArgs>>): Prisma__ContactRequestClient<$Result.GetResult<Prisma.$ContactRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ContactRequest.
     * @param {ContactRequestUpdateArgs} args - Arguments to update one ContactRequest.
     * @example
     * // Update one ContactRequest
     * const contactRequest = await prisma.contactRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactRequestUpdateArgs>(args: SelectSubset<T, ContactRequestUpdateArgs<ExtArgs>>): Prisma__ContactRequestClient<$Result.GetResult<Prisma.$ContactRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ContactRequests.
     * @param {ContactRequestDeleteManyArgs} args - Arguments to filter ContactRequests to delete.
     * @example
     * // Delete a few ContactRequests
     * const { count } = await prisma.contactRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactRequestDeleteManyArgs>(args?: SelectSubset<T, ContactRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ContactRequests
     * const contactRequest = await prisma.contactRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactRequestUpdateManyArgs>(args: SelectSubset<T, ContactRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ContactRequests and returns the data updated in the database.
     * @param {ContactRequestUpdateManyAndReturnArgs} args - Arguments to update many ContactRequests.
     * @example
     * // Update many ContactRequests
     * const contactRequest = await prisma.contactRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ContactRequests and only return the `id`
     * const contactRequestWithIdOnly = await prisma.contactRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContactRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ContactRequest.
     * @param {ContactRequestUpsertArgs} args - Arguments to update or create a ContactRequest.
     * @example
     * // Update or create a ContactRequest
     * const contactRequest = await prisma.contactRequest.upsert({
     *   create: {
     *     // ... data to create a ContactRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ContactRequest we want to update
     *   }
     * })
     */
    upsert<T extends ContactRequestUpsertArgs>(args: SelectSubset<T, ContactRequestUpsertArgs<ExtArgs>>): Prisma__ContactRequestClient<$Result.GetResult<Prisma.$ContactRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ContactRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactRequestCountArgs} args - Arguments to filter ContactRequests to count.
     * @example
     * // Count the number of ContactRequests
     * const count = await prisma.contactRequest.count({
     *   where: {
     *     // ... the filter for the ContactRequests we want to count
     *   }
     * })
    **/
    count<T extends ContactRequestCountArgs>(
      args?: Subset<T, ContactRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ContactRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContactRequestAggregateArgs>(args: Subset<T, ContactRequestAggregateArgs>): Prisma.PrismaPromise<GetContactRequestAggregateType<T>>

    /**
     * Group by ContactRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContactRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactRequestGroupByArgs['orderBy'] }
        : { orderBy?: ContactRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContactRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ContactRequest model
   */
  readonly fields: ContactRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ContactRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    buyer<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ContactRequest model
   */
  interface ContactRequestFieldRefs {
    readonly id: FieldRef<"ContactRequest", 'String'>
    readonly projectId: FieldRef<"ContactRequest", 'String'>
    readonly buyerId: FieldRef<"ContactRequest", 'String'>
    readonly estado: FieldRef<"ContactRequest", 'String'>
    readonly criadoEm: FieldRef<"ContactRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ContactRequest findUnique
   */
  export type ContactRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactRequest
     */
    select?: ContactRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactRequest
     */
    omit?: ContactRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactRequestInclude<ExtArgs> | null
    /**
     * Filter, which ContactRequest to fetch.
     */
    where: ContactRequestWhereUniqueInput
  }

  /**
   * ContactRequest findUniqueOrThrow
   */
  export type ContactRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactRequest
     */
    select?: ContactRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactRequest
     */
    omit?: ContactRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactRequestInclude<ExtArgs> | null
    /**
     * Filter, which ContactRequest to fetch.
     */
    where: ContactRequestWhereUniqueInput
  }

  /**
   * ContactRequest findFirst
   */
  export type ContactRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactRequest
     */
    select?: ContactRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactRequest
     */
    omit?: ContactRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactRequestInclude<ExtArgs> | null
    /**
     * Filter, which ContactRequest to fetch.
     */
    where?: ContactRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactRequests to fetch.
     */
    orderBy?: ContactRequestOrderByWithRelationInput | ContactRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactRequests.
     */
    cursor?: ContactRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactRequests.
     */
    distinct?: ContactRequestScalarFieldEnum | ContactRequestScalarFieldEnum[]
  }

  /**
   * ContactRequest findFirstOrThrow
   */
  export type ContactRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactRequest
     */
    select?: ContactRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactRequest
     */
    omit?: ContactRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactRequestInclude<ExtArgs> | null
    /**
     * Filter, which ContactRequest to fetch.
     */
    where?: ContactRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactRequests to fetch.
     */
    orderBy?: ContactRequestOrderByWithRelationInput | ContactRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ContactRequests.
     */
    cursor?: ContactRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactRequests.
     */
    distinct?: ContactRequestScalarFieldEnum | ContactRequestScalarFieldEnum[]
  }

  /**
   * ContactRequest findMany
   */
  export type ContactRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactRequest
     */
    select?: ContactRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactRequest
     */
    omit?: ContactRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactRequestInclude<ExtArgs> | null
    /**
     * Filter, which ContactRequests to fetch.
     */
    where?: ContactRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ContactRequests to fetch.
     */
    orderBy?: ContactRequestOrderByWithRelationInput | ContactRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ContactRequests.
     */
    cursor?: ContactRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ContactRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ContactRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ContactRequests.
     */
    distinct?: ContactRequestScalarFieldEnum | ContactRequestScalarFieldEnum[]
  }

  /**
   * ContactRequest create
   */
  export type ContactRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactRequest
     */
    select?: ContactRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactRequest
     */
    omit?: ContactRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a ContactRequest.
     */
    data: XOR<ContactRequestCreateInput, ContactRequestUncheckedCreateInput>
  }

  /**
   * ContactRequest createMany
   */
  export type ContactRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ContactRequests.
     */
    data: ContactRequestCreateManyInput | ContactRequestCreateManyInput[]
  }

  /**
   * ContactRequest createManyAndReturn
   */
  export type ContactRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactRequest
     */
    select?: ContactRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactRequest
     */
    omit?: ContactRequestOmit<ExtArgs> | null
    /**
     * The data used to create many ContactRequests.
     */
    data: ContactRequestCreateManyInput | ContactRequestCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContactRequest update
   */
  export type ContactRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactRequest
     */
    select?: ContactRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactRequest
     */
    omit?: ContactRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a ContactRequest.
     */
    data: XOR<ContactRequestUpdateInput, ContactRequestUncheckedUpdateInput>
    /**
     * Choose, which ContactRequest to update.
     */
    where: ContactRequestWhereUniqueInput
  }

  /**
   * ContactRequest updateMany
   */
  export type ContactRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ContactRequests.
     */
    data: XOR<ContactRequestUpdateManyMutationInput, ContactRequestUncheckedUpdateManyInput>
    /**
     * Filter which ContactRequests to update
     */
    where?: ContactRequestWhereInput
    /**
     * Limit how many ContactRequests to update.
     */
    limit?: number
  }

  /**
   * ContactRequest updateManyAndReturn
   */
  export type ContactRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactRequest
     */
    select?: ContactRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ContactRequest
     */
    omit?: ContactRequestOmit<ExtArgs> | null
    /**
     * The data used to update ContactRequests.
     */
    data: XOR<ContactRequestUpdateManyMutationInput, ContactRequestUncheckedUpdateManyInput>
    /**
     * Filter which ContactRequests to update
     */
    where?: ContactRequestWhereInput
    /**
     * Limit how many ContactRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ContactRequest upsert
   */
  export type ContactRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactRequest
     */
    select?: ContactRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactRequest
     */
    omit?: ContactRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the ContactRequest to update in case it exists.
     */
    where: ContactRequestWhereUniqueInput
    /**
     * In case the ContactRequest found by the `where` argument doesn't exist, create a new ContactRequest with this data.
     */
    create: XOR<ContactRequestCreateInput, ContactRequestUncheckedCreateInput>
    /**
     * In case the ContactRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactRequestUpdateInput, ContactRequestUncheckedUpdateInput>
  }

  /**
   * ContactRequest delete
   */
  export type ContactRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactRequest
     */
    select?: ContactRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactRequest
     */
    omit?: ContactRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactRequestInclude<ExtArgs> | null
    /**
     * Filter which ContactRequest to delete.
     */
    where: ContactRequestWhereUniqueInput
  }

  /**
   * ContactRequest deleteMany
   */
  export type ContactRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ContactRequests to delete
     */
    where?: ContactRequestWhereInput
    /**
     * Limit how many ContactRequests to delete.
     */
    limit?: number
  }

  /**
   * ContactRequest without action
   */
  export type ContactRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContactRequest
     */
    select?: ContactRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ContactRequest
     */
    omit?: ContactRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContactRequestInclude<ExtArgs> | null
  }


  /**
   * Model Payment
   */

  export type AggregatePayment = {
    _count: PaymentCountAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  export type PaymentMinAggregateOutputType = {
    id: string | null
    tipo: string | null
    projectId: string | null
    userId: string | null
    metodo: string | null
    comprovativoUrl: string | null
    estado: string | null
    confirmadoPor: string | null
    criadoEm: Date | null
  }

  export type PaymentMaxAggregateOutputType = {
    id: string | null
    tipo: string | null
    projectId: string | null
    userId: string | null
    metodo: string | null
    comprovativoUrl: string | null
    estado: string | null
    confirmadoPor: string | null
    criadoEm: Date | null
  }

  export type PaymentCountAggregateOutputType = {
    id: number
    tipo: number
    projectId: number
    userId: number
    metodo: number
    comprovativoUrl: number
    estado: number
    confirmadoPor: number
    criadoEm: number
    _all: number
  }


  export type PaymentMinAggregateInputType = {
    id?: true
    tipo?: true
    projectId?: true
    userId?: true
    metodo?: true
    comprovativoUrl?: true
    estado?: true
    confirmadoPor?: true
    criadoEm?: true
  }

  export type PaymentMaxAggregateInputType = {
    id?: true
    tipo?: true
    projectId?: true
    userId?: true
    metodo?: true
    comprovativoUrl?: true
    estado?: true
    confirmadoPor?: true
    criadoEm?: true
  }

  export type PaymentCountAggregateInputType = {
    id?: true
    tipo?: true
    projectId?: true
    userId?: true
    metodo?: true
    comprovativoUrl?: true
    estado?: true
    confirmadoPor?: true
    criadoEm?: true
    _all?: true
  }

  export type PaymentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payment to aggregate.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Payments
    **/
    _count?: true | PaymentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PaymentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PaymentMaxAggregateInputType
  }

  export type GetPaymentAggregateType<T extends PaymentAggregateArgs> = {
        [P in keyof T & keyof AggregatePayment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePayment[P]>
      : GetScalarType<T[P], AggregatePayment[P]>
  }




  export type PaymentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PaymentWhereInput
    orderBy?: PaymentOrderByWithAggregationInput | PaymentOrderByWithAggregationInput[]
    by: PaymentScalarFieldEnum[] | PaymentScalarFieldEnum
    having?: PaymentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PaymentCountAggregateInputType | true
    _min?: PaymentMinAggregateInputType
    _max?: PaymentMaxAggregateInputType
  }

  export type PaymentGroupByOutputType = {
    id: string
    tipo: string
    projectId: string | null
    userId: string
    metodo: string
    comprovativoUrl: string | null
    estado: string
    confirmadoPor: string | null
    criadoEm: Date
    _count: PaymentCountAggregateOutputType | null
    _min: PaymentMinAggregateOutputType | null
    _max: PaymentMaxAggregateOutputType | null
  }

  type GetPaymentGroupByPayload<T extends PaymentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PaymentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PaymentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PaymentGroupByOutputType[P]>
            : GetScalarType<T[P], PaymentGroupByOutputType[P]>
        }
      >
    >


  export type PaymentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    projectId?: boolean
    userId?: boolean
    metodo?: boolean
    comprovativoUrl?: boolean
    estado?: boolean
    confirmadoPor?: boolean
    criadoEm?: boolean
    project?: boolean | Payment$projectArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    projectId?: boolean
    userId?: boolean
    metodo?: boolean
    comprovativoUrl?: boolean
    estado?: boolean
    confirmadoPor?: boolean
    criadoEm?: boolean
    project?: boolean | Payment$projectArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    tipo?: boolean
    projectId?: boolean
    userId?: boolean
    metodo?: boolean
    comprovativoUrl?: boolean
    estado?: boolean
    confirmadoPor?: boolean
    criadoEm?: boolean
    project?: boolean | Payment$projectArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["payment"]>

  export type PaymentSelectScalar = {
    id?: boolean
    tipo?: boolean
    projectId?: boolean
    userId?: boolean
    metodo?: boolean
    comprovativoUrl?: boolean
    estado?: boolean
    confirmadoPor?: boolean
    criadoEm?: boolean
  }

  export type PaymentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "tipo" | "projectId" | "userId" | "metodo" | "comprovativoUrl" | "estado" | "confirmadoPor" | "criadoEm", ExtArgs["result"]["payment"]>
  export type PaymentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | Payment$projectArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | Payment$projectArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type PaymentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | Payment$projectArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $PaymentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Payment"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs> | null
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      tipo: string
      projectId: string | null
      userId: string
      metodo: string
      comprovativoUrl: string | null
      estado: string
      confirmadoPor: string | null
      criadoEm: Date
    }, ExtArgs["result"]["payment"]>
    composites: {}
  }

  type PaymentGetPayload<S extends boolean | null | undefined | PaymentDefaultArgs> = $Result.GetResult<Prisma.$PaymentPayload, S>

  type PaymentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PaymentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PaymentCountAggregateInputType | true
    }

  export interface PaymentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Payment'], meta: { name: 'Payment' } }
    /**
     * Find zero or one Payment that matches the filter.
     * @param {PaymentFindUniqueArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PaymentFindUniqueArgs>(args: SelectSubset<T, PaymentFindUniqueArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Payment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PaymentFindUniqueOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PaymentFindUniqueOrThrowArgs>(args: SelectSubset<T, PaymentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PaymentFindFirstArgs>(args?: SelectSubset<T, PaymentFindFirstArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Payment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindFirstOrThrowArgs} args - Arguments to find a Payment
     * @example
     * // Get one Payment
     * const payment = await prisma.payment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PaymentFindFirstOrThrowArgs>(args?: SelectSubset<T, PaymentFindFirstOrThrowArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Payments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Payments
     * const payments = await prisma.payment.findMany()
     * 
     * // Get first 10 Payments
     * const payments = await prisma.payment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const paymentWithIdOnly = await prisma.payment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PaymentFindManyArgs>(args?: SelectSubset<T, PaymentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Payment.
     * @param {PaymentCreateArgs} args - Arguments to create a Payment.
     * @example
     * // Create one Payment
     * const Payment = await prisma.payment.create({
     *   data: {
     *     // ... data to create a Payment
     *   }
     * })
     * 
     */
    create<T extends PaymentCreateArgs>(args: SelectSubset<T, PaymentCreateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Payments.
     * @param {PaymentCreateManyArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PaymentCreateManyArgs>(args?: SelectSubset<T, PaymentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Payments and returns the data saved in the database.
     * @param {PaymentCreateManyAndReturnArgs} args - Arguments to create many Payments.
     * @example
     * // Create many Payments
     * const payment = await prisma.payment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PaymentCreateManyAndReturnArgs>(args?: SelectSubset<T, PaymentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Payment.
     * @param {PaymentDeleteArgs} args - Arguments to delete one Payment.
     * @example
     * // Delete one Payment
     * const Payment = await prisma.payment.delete({
     *   where: {
     *     // ... filter to delete one Payment
     *   }
     * })
     * 
     */
    delete<T extends PaymentDeleteArgs>(args: SelectSubset<T, PaymentDeleteArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Payment.
     * @param {PaymentUpdateArgs} args - Arguments to update one Payment.
     * @example
     * // Update one Payment
     * const payment = await prisma.payment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PaymentUpdateArgs>(args: SelectSubset<T, PaymentUpdateArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Payments.
     * @param {PaymentDeleteManyArgs} args - Arguments to filter Payments to delete.
     * @example
     * // Delete a few Payments
     * const { count } = await prisma.payment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PaymentDeleteManyArgs>(args?: SelectSubset<T, PaymentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PaymentUpdateManyArgs>(args: SelectSubset<T, PaymentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Payments and returns the data updated in the database.
     * @param {PaymentUpdateManyAndReturnArgs} args - Arguments to update many Payments.
     * @example
     * // Update many Payments
     * const payment = await prisma.payment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Payments and only return the `id`
     * const paymentWithIdOnly = await prisma.payment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PaymentUpdateManyAndReturnArgs>(args: SelectSubset<T, PaymentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Payment.
     * @param {PaymentUpsertArgs} args - Arguments to update or create a Payment.
     * @example
     * // Update or create a Payment
     * const payment = await prisma.payment.upsert({
     *   create: {
     *     // ... data to create a Payment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Payment we want to update
     *   }
     * })
     */
    upsert<T extends PaymentUpsertArgs>(args: SelectSubset<T, PaymentUpsertArgs<ExtArgs>>): Prisma__PaymentClient<$Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Payments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentCountArgs} args - Arguments to filter Payments to count.
     * @example
     * // Count the number of Payments
     * const count = await prisma.payment.count({
     *   where: {
     *     // ... the filter for the Payments we want to count
     *   }
     * })
    **/
    count<T extends PaymentCountArgs>(
      args?: Subset<T, PaymentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PaymentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PaymentAggregateArgs>(args: Subset<T, PaymentAggregateArgs>): Prisma.PrismaPromise<GetPaymentAggregateType<T>>

    /**
     * Group by Payment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PaymentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PaymentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PaymentGroupByArgs['orderBy'] }
        : { orderBy?: PaymentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PaymentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPaymentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Payment model
   */
  readonly fields: PaymentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Payment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PaymentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends Payment$projectArgs<ExtArgs> = {}>(args?: Subset<T, Payment$projectArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Payment model
   */
  interface PaymentFieldRefs {
    readonly id: FieldRef<"Payment", 'String'>
    readonly tipo: FieldRef<"Payment", 'String'>
    readonly projectId: FieldRef<"Payment", 'String'>
    readonly userId: FieldRef<"Payment", 'String'>
    readonly metodo: FieldRef<"Payment", 'String'>
    readonly comprovativoUrl: FieldRef<"Payment", 'String'>
    readonly estado: FieldRef<"Payment", 'String'>
    readonly confirmadoPor: FieldRef<"Payment", 'String'>
    readonly criadoEm: FieldRef<"Payment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Payment findUnique
   */
  export type PaymentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findUniqueOrThrow
   */
  export type PaymentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment findFirst
   */
  export type PaymentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findFirstOrThrow
   */
  export type PaymentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payment to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment findMany
   */
  export type PaymentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter, which Payments to fetch.
     */
    where?: PaymentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Payments to fetch.
     */
    orderBy?: PaymentOrderByWithRelationInput | PaymentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Payments.
     */
    cursor?: PaymentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Payments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Payments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Payments.
     */
    distinct?: PaymentScalarFieldEnum | PaymentScalarFieldEnum[]
  }

  /**
   * Payment create
   */
  export type PaymentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to create a Payment.
     */
    data: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
  }

  /**
   * Payment createMany
   */
  export type PaymentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
  }

  /**
   * Payment createManyAndReturn
   */
  export type PaymentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to create many Payments.
     */
    data: PaymentCreateManyInput | PaymentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment update
   */
  export type PaymentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The data needed to update a Payment.
     */
    data: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
    /**
     * Choose, which Payment to update.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment updateMany
   */
  export type PaymentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
  }

  /**
   * Payment updateManyAndReturn
   */
  export type PaymentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * The data used to update Payments.
     */
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyInput>
    /**
     * Filter which Payments to update
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Payment upsert
   */
  export type PaymentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * The filter to search for the Payment to update in case it exists.
     */
    where: PaymentWhereUniqueInput
    /**
     * In case the Payment found by the `where` argument doesn't exist, create a new Payment with this data.
     */
    create: XOR<PaymentCreateInput, PaymentUncheckedCreateInput>
    /**
     * In case the Payment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PaymentUpdateInput, PaymentUncheckedUpdateInput>
  }

  /**
   * Payment delete
   */
  export type PaymentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
    /**
     * Filter which Payment to delete.
     */
    where: PaymentWhereUniqueInput
  }

  /**
   * Payment deleteMany
   */
  export type PaymentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Payments to delete
     */
    where?: PaymentWhereInput
    /**
     * Limit how many Payments to delete.
     */
    limit?: number
  }

  /**
   * Payment.project
   */
  export type Payment$projectArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    where?: ProjectWhereInput
  }

  /**
   * Payment without action
   */
  export type PaymentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: PaymentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Payment
     */
    omit?: PaymentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PaymentInclude<ExtArgs> | null
  }


  /**
   * Model DocumentoSensivel
   */

  export type AggregateDocumentoSensivel = {
    _count: DocumentoSensivelCountAggregateOutputType | null
    _min: DocumentoSensivelMinAggregateOutputType | null
    _max: DocumentoSensivelMaxAggregateOutputType | null
  }

  export type DocumentoSensivelMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    tipo: string | null
    urlEncriptado: string | null
    expiraEm: Date | null
    criadoEm: Date | null
  }

  export type DocumentoSensivelMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    tipo: string | null
    urlEncriptado: string | null
    expiraEm: Date | null
    criadoEm: Date | null
  }

  export type DocumentoSensivelCountAggregateOutputType = {
    id: number
    projectId: number
    tipo: number
    urlEncriptado: number
    expiraEm: number
    criadoEm: number
    _all: number
  }


  export type DocumentoSensivelMinAggregateInputType = {
    id?: true
    projectId?: true
    tipo?: true
    urlEncriptado?: true
    expiraEm?: true
    criadoEm?: true
  }

  export type DocumentoSensivelMaxAggregateInputType = {
    id?: true
    projectId?: true
    tipo?: true
    urlEncriptado?: true
    expiraEm?: true
    criadoEm?: true
  }

  export type DocumentoSensivelCountAggregateInputType = {
    id?: true
    projectId?: true
    tipo?: true
    urlEncriptado?: true
    expiraEm?: true
    criadoEm?: true
    _all?: true
  }

  export type DocumentoSensivelAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentoSensivel to aggregate.
     */
    where?: DocumentoSensivelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentoSensivels to fetch.
     */
    orderBy?: DocumentoSensivelOrderByWithRelationInput | DocumentoSensivelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DocumentoSensivelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentoSensivels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentoSensivels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DocumentoSensivels
    **/
    _count?: true | DocumentoSensivelCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DocumentoSensivelMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DocumentoSensivelMaxAggregateInputType
  }

  export type GetDocumentoSensivelAggregateType<T extends DocumentoSensivelAggregateArgs> = {
        [P in keyof T & keyof AggregateDocumentoSensivel]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDocumentoSensivel[P]>
      : GetScalarType<T[P], AggregateDocumentoSensivel[P]>
  }




  export type DocumentoSensivelGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DocumentoSensivelWhereInput
    orderBy?: DocumentoSensivelOrderByWithAggregationInput | DocumentoSensivelOrderByWithAggregationInput[]
    by: DocumentoSensivelScalarFieldEnum[] | DocumentoSensivelScalarFieldEnum
    having?: DocumentoSensivelScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DocumentoSensivelCountAggregateInputType | true
    _min?: DocumentoSensivelMinAggregateInputType
    _max?: DocumentoSensivelMaxAggregateInputType
  }

  export type DocumentoSensivelGroupByOutputType = {
    id: string
    projectId: string
    tipo: string
    urlEncriptado: string
    expiraEm: Date | null
    criadoEm: Date
    _count: DocumentoSensivelCountAggregateOutputType | null
    _min: DocumentoSensivelMinAggregateOutputType | null
    _max: DocumentoSensivelMaxAggregateOutputType | null
  }

  type GetDocumentoSensivelGroupByPayload<T extends DocumentoSensivelGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DocumentoSensivelGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DocumentoSensivelGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DocumentoSensivelGroupByOutputType[P]>
            : GetScalarType<T[P], DocumentoSensivelGroupByOutputType[P]>
        }
      >
    >


  export type DocumentoSensivelSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    tipo?: boolean
    urlEncriptado?: boolean
    expiraEm?: boolean
    criadoEm?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentoSensivel"]>

  export type DocumentoSensivelSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    tipo?: boolean
    urlEncriptado?: boolean
    expiraEm?: boolean
    criadoEm?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentoSensivel"]>

  export type DocumentoSensivelSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    tipo?: boolean
    urlEncriptado?: boolean
    expiraEm?: boolean
    criadoEm?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["documentoSensivel"]>

  export type DocumentoSensivelSelectScalar = {
    id?: boolean
    projectId?: boolean
    tipo?: boolean
    urlEncriptado?: boolean
    expiraEm?: boolean
    criadoEm?: boolean
  }

  export type DocumentoSensivelOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "tipo" | "urlEncriptado" | "expiraEm" | "criadoEm", ExtArgs["result"]["documentoSensivel"]>
  export type DocumentoSensivelInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type DocumentoSensivelIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type DocumentoSensivelIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $DocumentoSensivelPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DocumentoSensivel"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      tipo: string
      urlEncriptado: string
      expiraEm: Date | null
      criadoEm: Date
    }, ExtArgs["result"]["documentoSensivel"]>
    composites: {}
  }

  type DocumentoSensivelGetPayload<S extends boolean | null | undefined | DocumentoSensivelDefaultArgs> = $Result.GetResult<Prisma.$DocumentoSensivelPayload, S>

  type DocumentoSensivelCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DocumentoSensivelFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DocumentoSensivelCountAggregateInputType | true
    }

  export interface DocumentoSensivelDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DocumentoSensivel'], meta: { name: 'DocumentoSensivel' } }
    /**
     * Find zero or one DocumentoSensivel that matches the filter.
     * @param {DocumentoSensivelFindUniqueArgs} args - Arguments to find a DocumentoSensivel
     * @example
     * // Get one DocumentoSensivel
     * const documentoSensivel = await prisma.documentoSensivel.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DocumentoSensivelFindUniqueArgs>(args: SelectSubset<T, DocumentoSensivelFindUniqueArgs<ExtArgs>>): Prisma__DocumentoSensivelClient<$Result.GetResult<Prisma.$DocumentoSensivelPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one DocumentoSensivel that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DocumentoSensivelFindUniqueOrThrowArgs} args - Arguments to find a DocumentoSensivel
     * @example
     * // Get one DocumentoSensivel
     * const documentoSensivel = await prisma.documentoSensivel.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DocumentoSensivelFindUniqueOrThrowArgs>(args: SelectSubset<T, DocumentoSensivelFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DocumentoSensivelClient<$Result.GetResult<Prisma.$DocumentoSensivelPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentoSensivel that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentoSensivelFindFirstArgs} args - Arguments to find a DocumentoSensivel
     * @example
     * // Get one DocumentoSensivel
     * const documentoSensivel = await prisma.documentoSensivel.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DocumentoSensivelFindFirstArgs>(args?: SelectSubset<T, DocumentoSensivelFindFirstArgs<ExtArgs>>): Prisma__DocumentoSensivelClient<$Result.GetResult<Prisma.$DocumentoSensivelPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first DocumentoSensivel that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentoSensivelFindFirstOrThrowArgs} args - Arguments to find a DocumentoSensivel
     * @example
     * // Get one DocumentoSensivel
     * const documentoSensivel = await prisma.documentoSensivel.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DocumentoSensivelFindFirstOrThrowArgs>(args?: SelectSubset<T, DocumentoSensivelFindFirstOrThrowArgs<ExtArgs>>): Prisma__DocumentoSensivelClient<$Result.GetResult<Prisma.$DocumentoSensivelPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more DocumentoSensivels that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentoSensivelFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DocumentoSensivels
     * const documentoSensivels = await prisma.documentoSensivel.findMany()
     * 
     * // Get first 10 DocumentoSensivels
     * const documentoSensivels = await prisma.documentoSensivel.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const documentoSensivelWithIdOnly = await prisma.documentoSensivel.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DocumentoSensivelFindManyArgs>(args?: SelectSubset<T, DocumentoSensivelFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentoSensivelPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a DocumentoSensivel.
     * @param {DocumentoSensivelCreateArgs} args - Arguments to create a DocumentoSensivel.
     * @example
     * // Create one DocumentoSensivel
     * const DocumentoSensivel = await prisma.documentoSensivel.create({
     *   data: {
     *     // ... data to create a DocumentoSensivel
     *   }
     * })
     * 
     */
    create<T extends DocumentoSensivelCreateArgs>(args: SelectSubset<T, DocumentoSensivelCreateArgs<ExtArgs>>): Prisma__DocumentoSensivelClient<$Result.GetResult<Prisma.$DocumentoSensivelPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many DocumentoSensivels.
     * @param {DocumentoSensivelCreateManyArgs} args - Arguments to create many DocumentoSensivels.
     * @example
     * // Create many DocumentoSensivels
     * const documentoSensivel = await prisma.documentoSensivel.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DocumentoSensivelCreateManyArgs>(args?: SelectSubset<T, DocumentoSensivelCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DocumentoSensivels and returns the data saved in the database.
     * @param {DocumentoSensivelCreateManyAndReturnArgs} args - Arguments to create many DocumentoSensivels.
     * @example
     * // Create many DocumentoSensivels
     * const documentoSensivel = await prisma.documentoSensivel.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DocumentoSensivels and only return the `id`
     * const documentoSensivelWithIdOnly = await prisma.documentoSensivel.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DocumentoSensivelCreateManyAndReturnArgs>(args?: SelectSubset<T, DocumentoSensivelCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentoSensivelPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a DocumentoSensivel.
     * @param {DocumentoSensivelDeleteArgs} args - Arguments to delete one DocumentoSensivel.
     * @example
     * // Delete one DocumentoSensivel
     * const DocumentoSensivel = await prisma.documentoSensivel.delete({
     *   where: {
     *     // ... filter to delete one DocumentoSensivel
     *   }
     * })
     * 
     */
    delete<T extends DocumentoSensivelDeleteArgs>(args: SelectSubset<T, DocumentoSensivelDeleteArgs<ExtArgs>>): Prisma__DocumentoSensivelClient<$Result.GetResult<Prisma.$DocumentoSensivelPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one DocumentoSensivel.
     * @param {DocumentoSensivelUpdateArgs} args - Arguments to update one DocumentoSensivel.
     * @example
     * // Update one DocumentoSensivel
     * const documentoSensivel = await prisma.documentoSensivel.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DocumentoSensivelUpdateArgs>(args: SelectSubset<T, DocumentoSensivelUpdateArgs<ExtArgs>>): Prisma__DocumentoSensivelClient<$Result.GetResult<Prisma.$DocumentoSensivelPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more DocumentoSensivels.
     * @param {DocumentoSensivelDeleteManyArgs} args - Arguments to filter DocumentoSensivels to delete.
     * @example
     * // Delete a few DocumentoSensivels
     * const { count } = await prisma.documentoSensivel.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DocumentoSensivelDeleteManyArgs>(args?: SelectSubset<T, DocumentoSensivelDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentoSensivels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentoSensivelUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DocumentoSensivels
     * const documentoSensivel = await prisma.documentoSensivel.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DocumentoSensivelUpdateManyArgs>(args: SelectSubset<T, DocumentoSensivelUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DocumentoSensivels and returns the data updated in the database.
     * @param {DocumentoSensivelUpdateManyAndReturnArgs} args - Arguments to update many DocumentoSensivels.
     * @example
     * // Update many DocumentoSensivels
     * const documentoSensivel = await prisma.documentoSensivel.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more DocumentoSensivels and only return the `id`
     * const documentoSensivelWithIdOnly = await prisma.documentoSensivel.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends DocumentoSensivelUpdateManyAndReturnArgs>(args: SelectSubset<T, DocumentoSensivelUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DocumentoSensivelPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one DocumentoSensivel.
     * @param {DocumentoSensivelUpsertArgs} args - Arguments to update or create a DocumentoSensivel.
     * @example
     * // Update or create a DocumentoSensivel
     * const documentoSensivel = await prisma.documentoSensivel.upsert({
     *   create: {
     *     // ... data to create a DocumentoSensivel
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DocumentoSensivel we want to update
     *   }
     * })
     */
    upsert<T extends DocumentoSensivelUpsertArgs>(args: SelectSubset<T, DocumentoSensivelUpsertArgs<ExtArgs>>): Prisma__DocumentoSensivelClient<$Result.GetResult<Prisma.$DocumentoSensivelPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of DocumentoSensivels.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentoSensivelCountArgs} args - Arguments to filter DocumentoSensivels to count.
     * @example
     * // Count the number of DocumentoSensivels
     * const count = await prisma.documentoSensivel.count({
     *   where: {
     *     // ... the filter for the DocumentoSensivels we want to count
     *   }
     * })
    **/
    count<T extends DocumentoSensivelCountArgs>(
      args?: Subset<T, DocumentoSensivelCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DocumentoSensivelCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DocumentoSensivel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentoSensivelAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DocumentoSensivelAggregateArgs>(args: Subset<T, DocumentoSensivelAggregateArgs>): Prisma.PrismaPromise<GetDocumentoSensivelAggregateType<T>>

    /**
     * Group by DocumentoSensivel.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DocumentoSensivelGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DocumentoSensivelGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DocumentoSensivelGroupByArgs['orderBy'] }
        : { orderBy?: DocumentoSensivelGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DocumentoSensivelGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDocumentoSensivelGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DocumentoSensivel model
   */
  readonly fields: DocumentoSensivelFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DocumentoSensivel.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DocumentoSensivelClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DocumentoSensivel model
   */
  interface DocumentoSensivelFieldRefs {
    readonly id: FieldRef<"DocumentoSensivel", 'String'>
    readonly projectId: FieldRef<"DocumentoSensivel", 'String'>
    readonly tipo: FieldRef<"DocumentoSensivel", 'String'>
    readonly urlEncriptado: FieldRef<"DocumentoSensivel", 'String'>
    readonly expiraEm: FieldRef<"DocumentoSensivel", 'DateTime'>
    readonly criadoEm: FieldRef<"DocumentoSensivel", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DocumentoSensivel findUnique
   */
  export type DocumentoSensivelFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentoSensivel
     */
    select?: DocumentoSensivelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentoSensivel
     */
    omit?: DocumentoSensivelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoSensivelInclude<ExtArgs> | null
    /**
     * Filter, which DocumentoSensivel to fetch.
     */
    where: DocumentoSensivelWhereUniqueInput
  }

  /**
   * DocumentoSensivel findUniqueOrThrow
   */
  export type DocumentoSensivelFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentoSensivel
     */
    select?: DocumentoSensivelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentoSensivel
     */
    omit?: DocumentoSensivelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoSensivelInclude<ExtArgs> | null
    /**
     * Filter, which DocumentoSensivel to fetch.
     */
    where: DocumentoSensivelWhereUniqueInput
  }

  /**
   * DocumentoSensivel findFirst
   */
  export type DocumentoSensivelFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentoSensivel
     */
    select?: DocumentoSensivelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentoSensivel
     */
    omit?: DocumentoSensivelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoSensivelInclude<ExtArgs> | null
    /**
     * Filter, which DocumentoSensivel to fetch.
     */
    where?: DocumentoSensivelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentoSensivels to fetch.
     */
    orderBy?: DocumentoSensivelOrderByWithRelationInput | DocumentoSensivelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentoSensivels.
     */
    cursor?: DocumentoSensivelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentoSensivels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentoSensivels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentoSensivels.
     */
    distinct?: DocumentoSensivelScalarFieldEnum | DocumentoSensivelScalarFieldEnum[]
  }

  /**
   * DocumentoSensivel findFirstOrThrow
   */
  export type DocumentoSensivelFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentoSensivel
     */
    select?: DocumentoSensivelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentoSensivel
     */
    omit?: DocumentoSensivelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoSensivelInclude<ExtArgs> | null
    /**
     * Filter, which DocumentoSensivel to fetch.
     */
    where?: DocumentoSensivelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentoSensivels to fetch.
     */
    orderBy?: DocumentoSensivelOrderByWithRelationInput | DocumentoSensivelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DocumentoSensivels.
     */
    cursor?: DocumentoSensivelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentoSensivels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentoSensivels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentoSensivels.
     */
    distinct?: DocumentoSensivelScalarFieldEnum | DocumentoSensivelScalarFieldEnum[]
  }

  /**
   * DocumentoSensivel findMany
   */
  export type DocumentoSensivelFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentoSensivel
     */
    select?: DocumentoSensivelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentoSensivel
     */
    omit?: DocumentoSensivelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoSensivelInclude<ExtArgs> | null
    /**
     * Filter, which DocumentoSensivels to fetch.
     */
    where?: DocumentoSensivelWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DocumentoSensivels to fetch.
     */
    orderBy?: DocumentoSensivelOrderByWithRelationInput | DocumentoSensivelOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DocumentoSensivels.
     */
    cursor?: DocumentoSensivelWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DocumentoSensivels from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DocumentoSensivels.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DocumentoSensivels.
     */
    distinct?: DocumentoSensivelScalarFieldEnum | DocumentoSensivelScalarFieldEnum[]
  }

  /**
   * DocumentoSensivel create
   */
  export type DocumentoSensivelCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentoSensivel
     */
    select?: DocumentoSensivelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentoSensivel
     */
    omit?: DocumentoSensivelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoSensivelInclude<ExtArgs> | null
    /**
     * The data needed to create a DocumentoSensivel.
     */
    data: XOR<DocumentoSensivelCreateInput, DocumentoSensivelUncheckedCreateInput>
  }

  /**
   * DocumentoSensivel createMany
   */
  export type DocumentoSensivelCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DocumentoSensivels.
     */
    data: DocumentoSensivelCreateManyInput | DocumentoSensivelCreateManyInput[]
  }

  /**
   * DocumentoSensivel createManyAndReturn
   */
  export type DocumentoSensivelCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentoSensivel
     */
    select?: DocumentoSensivelSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentoSensivel
     */
    omit?: DocumentoSensivelOmit<ExtArgs> | null
    /**
     * The data used to create many DocumentoSensivels.
     */
    data: DocumentoSensivelCreateManyInput | DocumentoSensivelCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoSensivelIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DocumentoSensivel update
   */
  export type DocumentoSensivelUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentoSensivel
     */
    select?: DocumentoSensivelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentoSensivel
     */
    omit?: DocumentoSensivelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoSensivelInclude<ExtArgs> | null
    /**
     * The data needed to update a DocumentoSensivel.
     */
    data: XOR<DocumentoSensivelUpdateInput, DocumentoSensivelUncheckedUpdateInput>
    /**
     * Choose, which DocumentoSensivel to update.
     */
    where: DocumentoSensivelWhereUniqueInput
  }

  /**
   * DocumentoSensivel updateMany
   */
  export type DocumentoSensivelUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DocumentoSensivels.
     */
    data: XOR<DocumentoSensivelUpdateManyMutationInput, DocumentoSensivelUncheckedUpdateManyInput>
    /**
     * Filter which DocumentoSensivels to update
     */
    where?: DocumentoSensivelWhereInput
    /**
     * Limit how many DocumentoSensivels to update.
     */
    limit?: number
  }

  /**
   * DocumentoSensivel updateManyAndReturn
   */
  export type DocumentoSensivelUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentoSensivel
     */
    select?: DocumentoSensivelSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentoSensivel
     */
    omit?: DocumentoSensivelOmit<ExtArgs> | null
    /**
     * The data used to update DocumentoSensivels.
     */
    data: XOR<DocumentoSensivelUpdateManyMutationInput, DocumentoSensivelUncheckedUpdateManyInput>
    /**
     * Filter which DocumentoSensivels to update
     */
    where?: DocumentoSensivelWhereInput
    /**
     * Limit how many DocumentoSensivels to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoSensivelIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * DocumentoSensivel upsert
   */
  export type DocumentoSensivelUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentoSensivel
     */
    select?: DocumentoSensivelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentoSensivel
     */
    omit?: DocumentoSensivelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoSensivelInclude<ExtArgs> | null
    /**
     * The filter to search for the DocumentoSensivel to update in case it exists.
     */
    where: DocumentoSensivelWhereUniqueInput
    /**
     * In case the DocumentoSensivel found by the `where` argument doesn't exist, create a new DocumentoSensivel with this data.
     */
    create: XOR<DocumentoSensivelCreateInput, DocumentoSensivelUncheckedCreateInput>
    /**
     * In case the DocumentoSensivel was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DocumentoSensivelUpdateInput, DocumentoSensivelUncheckedUpdateInput>
  }

  /**
   * DocumentoSensivel delete
   */
  export type DocumentoSensivelDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentoSensivel
     */
    select?: DocumentoSensivelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentoSensivel
     */
    omit?: DocumentoSensivelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoSensivelInclude<ExtArgs> | null
    /**
     * Filter which DocumentoSensivel to delete.
     */
    where: DocumentoSensivelWhereUniqueInput
  }

  /**
   * DocumentoSensivel deleteMany
   */
  export type DocumentoSensivelDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DocumentoSensivels to delete
     */
    where?: DocumentoSensivelWhereInput
    /**
     * Limit how many DocumentoSensivels to delete.
     */
    limit?: number
  }

  /**
   * DocumentoSensivel without action
   */
  export type DocumentoSensivelDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DocumentoSensivel
     */
    select?: DocumentoSensivelSelect<ExtArgs> | null
    /**
     * Omit specific fields from the DocumentoSensivel
     */
    omit?: DocumentoSensivelOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DocumentoSensivelInclude<ExtArgs> | null
  }


  /**
   * Model NewsletterSubscription
   */

  export type AggregateNewsletterSubscription = {
    _count: NewsletterSubscriptionCountAggregateOutputType | null
    _min: NewsletterSubscriptionMinAggregateOutputType | null
    _max: NewsletterSubscriptionMaxAggregateOutputType | null
  }

  export type NewsletterSubscriptionMinAggregateOutputType = {
    id: string | null
    userId: string | null
    estado: string | null
    criadoEm: Date | null
  }

  export type NewsletterSubscriptionMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    estado: string | null
    criadoEm: Date | null
  }

  export type NewsletterSubscriptionCountAggregateOutputType = {
    id: number
    userId: number
    estado: number
    criadoEm: number
    _all: number
  }


  export type NewsletterSubscriptionMinAggregateInputType = {
    id?: true
    userId?: true
    estado?: true
    criadoEm?: true
  }

  export type NewsletterSubscriptionMaxAggregateInputType = {
    id?: true
    userId?: true
    estado?: true
    criadoEm?: true
  }

  export type NewsletterSubscriptionCountAggregateInputType = {
    id?: true
    userId?: true
    estado?: true
    criadoEm?: true
    _all?: true
  }

  export type NewsletterSubscriptionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsletterSubscription to aggregate.
     */
    where?: NewsletterSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsletterSubscriptions to fetch.
     */
    orderBy?: NewsletterSubscriptionOrderByWithRelationInput | NewsletterSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NewsletterSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsletterSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsletterSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned NewsletterSubscriptions
    **/
    _count?: true | NewsletterSubscriptionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NewsletterSubscriptionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NewsletterSubscriptionMaxAggregateInputType
  }

  export type GetNewsletterSubscriptionAggregateType<T extends NewsletterSubscriptionAggregateArgs> = {
        [P in keyof T & keyof AggregateNewsletterSubscription]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNewsletterSubscription[P]>
      : GetScalarType<T[P], AggregateNewsletterSubscription[P]>
  }




  export type NewsletterSubscriptionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NewsletterSubscriptionWhereInput
    orderBy?: NewsletterSubscriptionOrderByWithAggregationInput | NewsletterSubscriptionOrderByWithAggregationInput[]
    by: NewsletterSubscriptionScalarFieldEnum[] | NewsletterSubscriptionScalarFieldEnum
    having?: NewsletterSubscriptionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NewsletterSubscriptionCountAggregateInputType | true
    _min?: NewsletterSubscriptionMinAggregateInputType
    _max?: NewsletterSubscriptionMaxAggregateInputType
  }

  export type NewsletterSubscriptionGroupByOutputType = {
    id: string
    userId: string
    estado: string
    criadoEm: Date
    _count: NewsletterSubscriptionCountAggregateOutputType | null
    _min: NewsletterSubscriptionMinAggregateOutputType | null
    _max: NewsletterSubscriptionMaxAggregateOutputType | null
  }

  type GetNewsletterSubscriptionGroupByPayload<T extends NewsletterSubscriptionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NewsletterSubscriptionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NewsletterSubscriptionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NewsletterSubscriptionGroupByOutputType[P]>
            : GetScalarType<T[P], NewsletterSubscriptionGroupByOutputType[P]>
        }
      >
    >


  export type NewsletterSubscriptionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    estado?: boolean
    criadoEm?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsletterSubscription"]>

  export type NewsletterSubscriptionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    estado?: boolean
    criadoEm?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsletterSubscription"]>

  export type NewsletterSubscriptionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    estado?: boolean
    criadoEm?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["newsletterSubscription"]>

  export type NewsletterSubscriptionSelectScalar = {
    id?: boolean
    userId?: boolean
    estado?: boolean
    criadoEm?: boolean
  }

  export type NewsletterSubscriptionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "estado" | "criadoEm", ExtArgs["result"]["newsletterSubscription"]>
  export type NewsletterSubscriptionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NewsletterSubscriptionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type NewsletterSubscriptionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $NewsletterSubscriptionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "NewsletterSubscription"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      estado: string
      criadoEm: Date
    }, ExtArgs["result"]["newsletterSubscription"]>
    composites: {}
  }

  type NewsletterSubscriptionGetPayload<S extends boolean | null | undefined | NewsletterSubscriptionDefaultArgs> = $Result.GetResult<Prisma.$NewsletterSubscriptionPayload, S>

  type NewsletterSubscriptionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NewsletterSubscriptionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NewsletterSubscriptionCountAggregateInputType | true
    }

  export interface NewsletterSubscriptionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['NewsletterSubscription'], meta: { name: 'NewsletterSubscription' } }
    /**
     * Find zero or one NewsletterSubscription that matches the filter.
     * @param {NewsletterSubscriptionFindUniqueArgs} args - Arguments to find a NewsletterSubscription
     * @example
     * // Get one NewsletterSubscription
     * const newsletterSubscription = await prisma.newsletterSubscription.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NewsletterSubscriptionFindUniqueArgs>(args: SelectSubset<T, NewsletterSubscriptionFindUniqueArgs<ExtArgs>>): Prisma__NewsletterSubscriptionClient<$Result.GetResult<Prisma.$NewsletterSubscriptionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one NewsletterSubscription that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NewsletterSubscriptionFindUniqueOrThrowArgs} args - Arguments to find a NewsletterSubscription
     * @example
     * // Get one NewsletterSubscription
     * const newsletterSubscription = await prisma.newsletterSubscription.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NewsletterSubscriptionFindUniqueOrThrowArgs>(args: SelectSubset<T, NewsletterSubscriptionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NewsletterSubscriptionClient<$Result.GetResult<Prisma.$NewsletterSubscriptionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsletterSubscription that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterSubscriptionFindFirstArgs} args - Arguments to find a NewsletterSubscription
     * @example
     * // Get one NewsletterSubscription
     * const newsletterSubscription = await prisma.newsletterSubscription.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NewsletterSubscriptionFindFirstArgs>(args?: SelectSubset<T, NewsletterSubscriptionFindFirstArgs<ExtArgs>>): Prisma__NewsletterSubscriptionClient<$Result.GetResult<Prisma.$NewsletterSubscriptionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first NewsletterSubscription that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterSubscriptionFindFirstOrThrowArgs} args - Arguments to find a NewsletterSubscription
     * @example
     * // Get one NewsletterSubscription
     * const newsletterSubscription = await prisma.newsletterSubscription.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NewsletterSubscriptionFindFirstOrThrowArgs>(args?: SelectSubset<T, NewsletterSubscriptionFindFirstOrThrowArgs<ExtArgs>>): Prisma__NewsletterSubscriptionClient<$Result.GetResult<Prisma.$NewsletterSubscriptionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more NewsletterSubscriptions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterSubscriptionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all NewsletterSubscriptions
     * const newsletterSubscriptions = await prisma.newsletterSubscription.findMany()
     * 
     * // Get first 10 NewsletterSubscriptions
     * const newsletterSubscriptions = await prisma.newsletterSubscription.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const newsletterSubscriptionWithIdOnly = await prisma.newsletterSubscription.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NewsletterSubscriptionFindManyArgs>(args?: SelectSubset<T, NewsletterSubscriptionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsletterSubscriptionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a NewsletterSubscription.
     * @param {NewsletterSubscriptionCreateArgs} args - Arguments to create a NewsletterSubscription.
     * @example
     * // Create one NewsletterSubscription
     * const NewsletterSubscription = await prisma.newsletterSubscription.create({
     *   data: {
     *     // ... data to create a NewsletterSubscription
     *   }
     * })
     * 
     */
    create<T extends NewsletterSubscriptionCreateArgs>(args: SelectSubset<T, NewsletterSubscriptionCreateArgs<ExtArgs>>): Prisma__NewsletterSubscriptionClient<$Result.GetResult<Prisma.$NewsletterSubscriptionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many NewsletterSubscriptions.
     * @param {NewsletterSubscriptionCreateManyArgs} args - Arguments to create many NewsletterSubscriptions.
     * @example
     * // Create many NewsletterSubscriptions
     * const newsletterSubscription = await prisma.newsletterSubscription.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NewsletterSubscriptionCreateManyArgs>(args?: SelectSubset<T, NewsletterSubscriptionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many NewsletterSubscriptions and returns the data saved in the database.
     * @param {NewsletterSubscriptionCreateManyAndReturnArgs} args - Arguments to create many NewsletterSubscriptions.
     * @example
     * // Create many NewsletterSubscriptions
     * const newsletterSubscription = await prisma.newsletterSubscription.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many NewsletterSubscriptions and only return the `id`
     * const newsletterSubscriptionWithIdOnly = await prisma.newsletterSubscription.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NewsletterSubscriptionCreateManyAndReturnArgs>(args?: SelectSubset<T, NewsletterSubscriptionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsletterSubscriptionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a NewsletterSubscription.
     * @param {NewsletterSubscriptionDeleteArgs} args - Arguments to delete one NewsletterSubscription.
     * @example
     * // Delete one NewsletterSubscription
     * const NewsletterSubscription = await prisma.newsletterSubscription.delete({
     *   where: {
     *     // ... filter to delete one NewsletterSubscription
     *   }
     * })
     * 
     */
    delete<T extends NewsletterSubscriptionDeleteArgs>(args: SelectSubset<T, NewsletterSubscriptionDeleteArgs<ExtArgs>>): Prisma__NewsletterSubscriptionClient<$Result.GetResult<Prisma.$NewsletterSubscriptionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one NewsletterSubscription.
     * @param {NewsletterSubscriptionUpdateArgs} args - Arguments to update one NewsletterSubscription.
     * @example
     * // Update one NewsletterSubscription
     * const newsletterSubscription = await prisma.newsletterSubscription.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NewsletterSubscriptionUpdateArgs>(args: SelectSubset<T, NewsletterSubscriptionUpdateArgs<ExtArgs>>): Prisma__NewsletterSubscriptionClient<$Result.GetResult<Prisma.$NewsletterSubscriptionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more NewsletterSubscriptions.
     * @param {NewsletterSubscriptionDeleteManyArgs} args - Arguments to filter NewsletterSubscriptions to delete.
     * @example
     * // Delete a few NewsletterSubscriptions
     * const { count } = await prisma.newsletterSubscription.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NewsletterSubscriptionDeleteManyArgs>(args?: SelectSubset<T, NewsletterSubscriptionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsletterSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterSubscriptionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many NewsletterSubscriptions
     * const newsletterSubscription = await prisma.newsletterSubscription.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NewsletterSubscriptionUpdateManyArgs>(args: SelectSubset<T, NewsletterSubscriptionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more NewsletterSubscriptions and returns the data updated in the database.
     * @param {NewsletterSubscriptionUpdateManyAndReturnArgs} args - Arguments to update many NewsletterSubscriptions.
     * @example
     * // Update many NewsletterSubscriptions
     * const newsletterSubscription = await prisma.newsletterSubscription.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more NewsletterSubscriptions and only return the `id`
     * const newsletterSubscriptionWithIdOnly = await prisma.newsletterSubscription.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NewsletterSubscriptionUpdateManyAndReturnArgs>(args: SelectSubset<T, NewsletterSubscriptionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NewsletterSubscriptionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one NewsletterSubscription.
     * @param {NewsletterSubscriptionUpsertArgs} args - Arguments to update or create a NewsletterSubscription.
     * @example
     * // Update or create a NewsletterSubscription
     * const newsletterSubscription = await prisma.newsletterSubscription.upsert({
     *   create: {
     *     // ... data to create a NewsletterSubscription
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the NewsletterSubscription we want to update
     *   }
     * })
     */
    upsert<T extends NewsletterSubscriptionUpsertArgs>(args: SelectSubset<T, NewsletterSubscriptionUpsertArgs<ExtArgs>>): Prisma__NewsletterSubscriptionClient<$Result.GetResult<Prisma.$NewsletterSubscriptionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of NewsletterSubscriptions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterSubscriptionCountArgs} args - Arguments to filter NewsletterSubscriptions to count.
     * @example
     * // Count the number of NewsletterSubscriptions
     * const count = await prisma.newsletterSubscription.count({
     *   where: {
     *     // ... the filter for the NewsletterSubscriptions we want to count
     *   }
     * })
    **/
    count<T extends NewsletterSubscriptionCountArgs>(
      args?: Subset<T, NewsletterSubscriptionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NewsletterSubscriptionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a NewsletterSubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterSubscriptionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends NewsletterSubscriptionAggregateArgs>(args: Subset<T, NewsletterSubscriptionAggregateArgs>): Prisma.PrismaPromise<GetNewsletterSubscriptionAggregateType<T>>

    /**
     * Group by NewsletterSubscription.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NewsletterSubscriptionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends NewsletterSubscriptionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NewsletterSubscriptionGroupByArgs['orderBy'] }
        : { orderBy?: NewsletterSubscriptionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, NewsletterSubscriptionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNewsletterSubscriptionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the NewsletterSubscription model
   */
  readonly fields: NewsletterSubscriptionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for NewsletterSubscription.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NewsletterSubscriptionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the NewsletterSubscription model
   */
  interface NewsletterSubscriptionFieldRefs {
    readonly id: FieldRef<"NewsletterSubscription", 'String'>
    readonly userId: FieldRef<"NewsletterSubscription", 'String'>
    readonly estado: FieldRef<"NewsletterSubscription", 'String'>
    readonly criadoEm: FieldRef<"NewsletterSubscription", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * NewsletterSubscription findUnique
   */
  export type NewsletterSubscriptionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterSubscription
     */
    select?: NewsletterSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterSubscription
     */
    omit?: NewsletterSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which NewsletterSubscription to fetch.
     */
    where: NewsletterSubscriptionWhereUniqueInput
  }

  /**
   * NewsletterSubscription findUniqueOrThrow
   */
  export type NewsletterSubscriptionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterSubscription
     */
    select?: NewsletterSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterSubscription
     */
    omit?: NewsletterSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which NewsletterSubscription to fetch.
     */
    where: NewsletterSubscriptionWhereUniqueInput
  }

  /**
   * NewsletterSubscription findFirst
   */
  export type NewsletterSubscriptionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterSubscription
     */
    select?: NewsletterSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterSubscription
     */
    omit?: NewsletterSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which NewsletterSubscription to fetch.
     */
    where?: NewsletterSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsletterSubscriptions to fetch.
     */
    orderBy?: NewsletterSubscriptionOrderByWithRelationInput | NewsletterSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsletterSubscriptions.
     */
    cursor?: NewsletterSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsletterSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsletterSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsletterSubscriptions.
     */
    distinct?: NewsletterSubscriptionScalarFieldEnum | NewsletterSubscriptionScalarFieldEnum[]
  }

  /**
   * NewsletterSubscription findFirstOrThrow
   */
  export type NewsletterSubscriptionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterSubscription
     */
    select?: NewsletterSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterSubscription
     */
    omit?: NewsletterSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which NewsletterSubscription to fetch.
     */
    where?: NewsletterSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsletterSubscriptions to fetch.
     */
    orderBy?: NewsletterSubscriptionOrderByWithRelationInput | NewsletterSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for NewsletterSubscriptions.
     */
    cursor?: NewsletterSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsletterSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsletterSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsletterSubscriptions.
     */
    distinct?: NewsletterSubscriptionScalarFieldEnum | NewsletterSubscriptionScalarFieldEnum[]
  }

  /**
   * NewsletterSubscription findMany
   */
  export type NewsletterSubscriptionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterSubscription
     */
    select?: NewsletterSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterSubscription
     */
    omit?: NewsletterSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterSubscriptionInclude<ExtArgs> | null
    /**
     * Filter, which NewsletterSubscriptions to fetch.
     */
    where?: NewsletterSubscriptionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of NewsletterSubscriptions to fetch.
     */
    orderBy?: NewsletterSubscriptionOrderByWithRelationInput | NewsletterSubscriptionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing NewsletterSubscriptions.
     */
    cursor?: NewsletterSubscriptionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` NewsletterSubscriptions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` NewsletterSubscriptions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of NewsletterSubscriptions.
     */
    distinct?: NewsletterSubscriptionScalarFieldEnum | NewsletterSubscriptionScalarFieldEnum[]
  }

  /**
   * NewsletterSubscription create
   */
  export type NewsletterSubscriptionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterSubscription
     */
    select?: NewsletterSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterSubscription
     */
    omit?: NewsletterSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterSubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to create a NewsletterSubscription.
     */
    data: XOR<NewsletterSubscriptionCreateInput, NewsletterSubscriptionUncheckedCreateInput>
  }

  /**
   * NewsletterSubscription createMany
   */
  export type NewsletterSubscriptionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many NewsletterSubscriptions.
     */
    data: NewsletterSubscriptionCreateManyInput | NewsletterSubscriptionCreateManyInput[]
  }

  /**
   * NewsletterSubscription createManyAndReturn
   */
  export type NewsletterSubscriptionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterSubscription
     */
    select?: NewsletterSubscriptionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterSubscription
     */
    omit?: NewsletterSubscriptionOmit<ExtArgs> | null
    /**
     * The data used to create many NewsletterSubscriptions.
     */
    data: NewsletterSubscriptionCreateManyInput | NewsletterSubscriptionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterSubscriptionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * NewsletterSubscription update
   */
  export type NewsletterSubscriptionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterSubscription
     */
    select?: NewsletterSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterSubscription
     */
    omit?: NewsletterSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterSubscriptionInclude<ExtArgs> | null
    /**
     * The data needed to update a NewsletterSubscription.
     */
    data: XOR<NewsletterSubscriptionUpdateInput, NewsletterSubscriptionUncheckedUpdateInput>
    /**
     * Choose, which NewsletterSubscription to update.
     */
    where: NewsletterSubscriptionWhereUniqueInput
  }

  /**
   * NewsletterSubscription updateMany
   */
  export type NewsletterSubscriptionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update NewsletterSubscriptions.
     */
    data: XOR<NewsletterSubscriptionUpdateManyMutationInput, NewsletterSubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which NewsletterSubscriptions to update
     */
    where?: NewsletterSubscriptionWhereInput
    /**
     * Limit how many NewsletterSubscriptions to update.
     */
    limit?: number
  }

  /**
   * NewsletterSubscription updateManyAndReturn
   */
  export type NewsletterSubscriptionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterSubscription
     */
    select?: NewsletterSubscriptionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterSubscription
     */
    omit?: NewsletterSubscriptionOmit<ExtArgs> | null
    /**
     * The data used to update NewsletterSubscriptions.
     */
    data: XOR<NewsletterSubscriptionUpdateManyMutationInput, NewsletterSubscriptionUncheckedUpdateManyInput>
    /**
     * Filter which NewsletterSubscriptions to update
     */
    where?: NewsletterSubscriptionWhereInput
    /**
     * Limit how many NewsletterSubscriptions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterSubscriptionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * NewsletterSubscription upsert
   */
  export type NewsletterSubscriptionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterSubscription
     */
    select?: NewsletterSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterSubscription
     */
    omit?: NewsletterSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterSubscriptionInclude<ExtArgs> | null
    /**
     * The filter to search for the NewsletterSubscription to update in case it exists.
     */
    where: NewsletterSubscriptionWhereUniqueInput
    /**
     * In case the NewsletterSubscription found by the `where` argument doesn't exist, create a new NewsletterSubscription with this data.
     */
    create: XOR<NewsletterSubscriptionCreateInput, NewsletterSubscriptionUncheckedCreateInput>
    /**
     * In case the NewsletterSubscription was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NewsletterSubscriptionUpdateInput, NewsletterSubscriptionUncheckedUpdateInput>
  }

  /**
   * NewsletterSubscription delete
   */
  export type NewsletterSubscriptionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterSubscription
     */
    select?: NewsletterSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterSubscription
     */
    omit?: NewsletterSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterSubscriptionInclude<ExtArgs> | null
    /**
     * Filter which NewsletterSubscription to delete.
     */
    where: NewsletterSubscriptionWhereUniqueInput
  }

  /**
   * NewsletterSubscription deleteMany
   */
  export type NewsletterSubscriptionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which NewsletterSubscriptions to delete
     */
    where?: NewsletterSubscriptionWhereInput
    /**
     * Limit how many NewsletterSubscriptions to delete.
     */
    limit?: number
  }

  /**
   * NewsletterSubscription without action
   */
  export type NewsletterSubscriptionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the NewsletterSubscription
     */
    select?: NewsletterSubscriptionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the NewsletterSubscription
     */
    omit?: NewsletterSubscriptionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NewsletterSubscriptionInclude<ExtArgs> | null
  }


  /**
   * Model EditorialPick
   */

  export type AggregateEditorialPick = {
    _count: EditorialPickCountAggregateOutputType | null
    _avg: EditorialPickAvgAggregateOutputType | null
    _sum: EditorialPickSumAggregateOutputType | null
    _min: EditorialPickMinAggregateOutputType | null
    _max: EditorialPickMaxAggregateOutputType | null
  }

  export type EditorialPickAvgAggregateOutputType = {
    posicao: number | null
  }

  export type EditorialPickSumAggregateOutputType = {
    posicao: number | null
  }

  export type EditorialPickMinAggregateOutputType = {
    id: string | null
    projectId: string | null
    seccao: $Enums.Seccao | null
    posicao: number | null
    semanaReferencia: string | null
  }

  export type EditorialPickMaxAggregateOutputType = {
    id: string | null
    projectId: string | null
    seccao: $Enums.Seccao | null
    posicao: number | null
    semanaReferencia: string | null
  }

  export type EditorialPickCountAggregateOutputType = {
    id: number
    projectId: number
    seccao: number
    posicao: number
    semanaReferencia: number
    _all: number
  }


  export type EditorialPickAvgAggregateInputType = {
    posicao?: true
  }

  export type EditorialPickSumAggregateInputType = {
    posicao?: true
  }

  export type EditorialPickMinAggregateInputType = {
    id?: true
    projectId?: true
    seccao?: true
    posicao?: true
    semanaReferencia?: true
  }

  export type EditorialPickMaxAggregateInputType = {
    id?: true
    projectId?: true
    seccao?: true
    posicao?: true
    semanaReferencia?: true
  }

  export type EditorialPickCountAggregateInputType = {
    id?: true
    projectId?: true
    seccao?: true
    posicao?: true
    semanaReferencia?: true
    _all?: true
  }

  export type EditorialPickAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EditorialPick to aggregate.
     */
    where?: EditorialPickWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EditorialPicks to fetch.
     */
    orderBy?: EditorialPickOrderByWithRelationInput | EditorialPickOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EditorialPickWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EditorialPicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EditorialPicks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned EditorialPicks
    **/
    _count?: true | EditorialPickCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EditorialPickAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EditorialPickSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EditorialPickMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EditorialPickMaxAggregateInputType
  }

  export type GetEditorialPickAggregateType<T extends EditorialPickAggregateArgs> = {
        [P in keyof T & keyof AggregateEditorialPick]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEditorialPick[P]>
      : GetScalarType<T[P], AggregateEditorialPick[P]>
  }




  export type EditorialPickGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EditorialPickWhereInput
    orderBy?: EditorialPickOrderByWithAggregationInput | EditorialPickOrderByWithAggregationInput[]
    by: EditorialPickScalarFieldEnum[] | EditorialPickScalarFieldEnum
    having?: EditorialPickScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EditorialPickCountAggregateInputType | true
    _avg?: EditorialPickAvgAggregateInputType
    _sum?: EditorialPickSumAggregateInputType
    _min?: EditorialPickMinAggregateInputType
    _max?: EditorialPickMaxAggregateInputType
  }

  export type EditorialPickGroupByOutputType = {
    id: string
    projectId: string
    seccao: $Enums.Seccao
    posicao: number
    semanaReferencia: string
    _count: EditorialPickCountAggregateOutputType | null
    _avg: EditorialPickAvgAggregateOutputType | null
    _sum: EditorialPickSumAggregateOutputType | null
    _min: EditorialPickMinAggregateOutputType | null
    _max: EditorialPickMaxAggregateOutputType | null
  }

  type GetEditorialPickGroupByPayload<T extends EditorialPickGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EditorialPickGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EditorialPickGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EditorialPickGroupByOutputType[P]>
            : GetScalarType<T[P], EditorialPickGroupByOutputType[P]>
        }
      >
    >


  export type EditorialPickSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    seccao?: boolean
    posicao?: boolean
    semanaReferencia?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["editorialPick"]>

  export type EditorialPickSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    seccao?: boolean
    posicao?: boolean
    semanaReferencia?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["editorialPick"]>

  export type EditorialPickSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    projectId?: boolean
    seccao?: boolean
    posicao?: boolean
    semanaReferencia?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["editorialPick"]>

  export type EditorialPickSelectScalar = {
    id?: boolean
    projectId?: boolean
    seccao?: boolean
    posicao?: boolean
    semanaReferencia?: boolean
  }

  export type EditorialPickOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "projectId" | "seccao" | "posicao" | "semanaReferencia", ExtArgs["result"]["editorialPick"]>
  export type EditorialPickInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type EditorialPickIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type EditorialPickIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $EditorialPickPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "EditorialPick"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      projectId: string
      seccao: $Enums.Seccao
      posicao: number
      semanaReferencia: string
    }, ExtArgs["result"]["editorialPick"]>
    composites: {}
  }

  type EditorialPickGetPayload<S extends boolean | null | undefined | EditorialPickDefaultArgs> = $Result.GetResult<Prisma.$EditorialPickPayload, S>

  type EditorialPickCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EditorialPickFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EditorialPickCountAggregateInputType | true
    }

  export interface EditorialPickDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['EditorialPick'], meta: { name: 'EditorialPick' } }
    /**
     * Find zero or one EditorialPick that matches the filter.
     * @param {EditorialPickFindUniqueArgs} args - Arguments to find a EditorialPick
     * @example
     * // Get one EditorialPick
     * const editorialPick = await prisma.editorialPick.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EditorialPickFindUniqueArgs>(args: SelectSubset<T, EditorialPickFindUniqueArgs<ExtArgs>>): Prisma__EditorialPickClient<$Result.GetResult<Prisma.$EditorialPickPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one EditorialPick that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EditorialPickFindUniqueOrThrowArgs} args - Arguments to find a EditorialPick
     * @example
     * // Get one EditorialPick
     * const editorialPick = await prisma.editorialPick.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EditorialPickFindUniqueOrThrowArgs>(args: SelectSubset<T, EditorialPickFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EditorialPickClient<$Result.GetResult<Prisma.$EditorialPickPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EditorialPick that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EditorialPickFindFirstArgs} args - Arguments to find a EditorialPick
     * @example
     * // Get one EditorialPick
     * const editorialPick = await prisma.editorialPick.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EditorialPickFindFirstArgs>(args?: SelectSubset<T, EditorialPickFindFirstArgs<ExtArgs>>): Prisma__EditorialPickClient<$Result.GetResult<Prisma.$EditorialPickPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first EditorialPick that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EditorialPickFindFirstOrThrowArgs} args - Arguments to find a EditorialPick
     * @example
     * // Get one EditorialPick
     * const editorialPick = await prisma.editorialPick.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EditorialPickFindFirstOrThrowArgs>(args?: SelectSubset<T, EditorialPickFindFirstOrThrowArgs<ExtArgs>>): Prisma__EditorialPickClient<$Result.GetResult<Prisma.$EditorialPickPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more EditorialPicks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EditorialPickFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EditorialPicks
     * const editorialPicks = await prisma.editorialPick.findMany()
     * 
     * // Get first 10 EditorialPicks
     * const editorialPicks = await prisma.editorialPick.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const editorialPickWithIdOnly = await prisma.editorialPick.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EditorialPickFindManyArgs>(args?: SelectSubset<T, EditorialPickFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EditorialPickPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a EditorialPick.
     * @param {EditorialPickCreateArgs} args - Arguments to create a EditorialPick.
     * @example
     * // Create one EditorialPick
     * const EditorialPick = await prisma.editorialPick.create({
     *   data: {
     *     // ... data to create a EditorialPick
     *   }
     * })
     * 
     */
    create<T extends EditorialPickCreateArgs>(args: SelectSubset<T, EditorialPickCreateArgs<ExtArgs>>): Prisma__EditorialPickClient<$Result.GetResult<Prisma.$EditorialPickPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many EditorialPicks.
     * @param {EditorialPickCreateManyArgs} args - Arguments to create many EditorialPicks.
     * @example
     * // Create many EditorialPicks
     * const editorialPick = await prisma.editorialPick.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EditorialPickCreateManyArgs>(args?: SelectSubset<T, EditorialPickCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many EditorialPicks and returns the data saved in the database.
     * @param {EditorialPickCreateManyAndReturnArgs} args - Arguments to create many EditorialPicks.
     * @example
     * // Create many EditorialPicks
     * const editorialPick = await prisma.editorialPick.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many EditorialPicks and only return the `id`
     * const editorialPickWithIdOnly = await prisma.editorialPick.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EditorialPickCreateManyAndReturnArgs>(args?: SelectSubset<T, EditorialPickCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EditorialPickPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a EditorialPick.
     * @param {EditorialPickDeleteArgs} args - Arguments to delete one EditorialPick.
     * @example
     * // Delete one EditorialPick
     * const EditorialPick = await prisma.editorialPick.delete({
     *   where: {
     *     // ... filter to delete one EditorialPick
     *   }
     * })
     * 
     */
    delete<T extends EditorialPickDeleteArgs>(args: SelectSubset<T, EditorialPickDeleteArgs<ExtArgs>>): Prisma__EditorialPickClient<$Result.GetResult<Prisma.$EditorialPickPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one EditorialPick.
     * @param {EditorialPickUpdateArgs} args - Arguments to update one EditorialPick.
     * @example
     * // Update one EditorialPick
     * const editorialPick = await prisma.editorialPick.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EditorialPickUpdateArgs>(args: SelectSubset<T, EditorialPickUpdateArgs<ExtArgs>>): Prisma__EditorialPickClient<$Result.GetResult<Prisma.$EditorialPickPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more EditorialPicks.
     * @param {EditorialPickDeleteManyArgs} args - Arguments to filter EditorialPicks to delete.
     * @example
     * // Delete a few EditorialPicks
     * const { count } = await prisma.editorialPick.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EditorialPickDeleteManyArgs>(args?: SelectSubset<T, EditorialPickDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EditorialPicks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EditorialPickUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EditorialPicks
     * const editorialPick = await prisma.editorialPick.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EditorialPickUpdateManyArgs>(args: SelectSubset<T, EditorialPickUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more EditorialPicks and returns the data updated in the database.
     * @param {EditorialPickUpdateManyAndReturnArgs} args - Arguments to update many EditorialPicks.
     * @example
     * // Update many EditorialPicks
     * const editorialPick = await prisma.editorialPick.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more EditorialPicks and only return the `id`
     * const editorialPickWithIdOnly = await prisma.editorialPick.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EditorialPickUpdateManyAndReturnArgs>(args: SelectSubset<T, EditorialPickUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EditorialPickPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one EditorialPick.
     * @param {EditorialPickUpsertArgs} args - Arguments to update or create a EditorialPick.
     * @example
     * // Update or create a EditorialPick
     * const editorialPick = await prisma.editorialPick.upsert({
     *   create: {
     *     // ... data to create a EditorialPick
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EditorialPick we want to update
     *   }
     * })
     */
    upsert<T extends EditorialPickUpsertArgs>(args: SelectSubset<T, EditorialPickUpsertArgs<ExtArgs>>): Prisma__EditorialPickClient<$Result.GetResult<Prisma.$EditorialPickPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of EditorialPicks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EditorialPickCountArgs} args - Arguments to filter EditorialPicks to count.
     * @example
     * // Count the number of EditorialPicks
     * const count = await prisma.editorialPick.count({
     *   where: {
     *     // ... the filter for the EditorialPicks we want to count
     *   }
     * })
    **/
    count<T extends EditorialPickCountArgs>(
      args?: Subset<T, EditorialPickCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EditorialPickCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a EditorialPick.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EditorialPickAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EditorialPickAggregateArgs>(args: Subset<T, EditorialPickAggregateArgs>): Prisma.PrismaPromise<GetEditorialPickAggregateType<T>>

    /**
     * Group by EditorialPick.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EditorialPickGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EditorialPickGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EditorialPickGroupByArgs['orderBy'] }
        : { orderBy?: EditorialPickGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EditorialPickGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEditorialPickGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the EditorialPick model
   */
  readonly fields: EditorialPickFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for EditorialPick.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EditorialPickClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the EditorialPick model
   */
  interface EditorialPickFieldRefs {
    readonly id: FieldRef<"EditorialPick", 'String'>
    readonly projectId: FieldRef<"EditorialPick", 'String'>
    readonly seccao: FieldRef<"EditorialPick", 'Seccao'>
    readonly posicao: FieldRef<"EditorialPick", 'Int'>
    readonly semanaReferencia: FieldRef<"EditorialPick", 'String'>
  }
    

  // Custom InputTypes
  /**
   * EditorialPick findUnique
   */
  export type EditorialPickFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EditorialPick
     */
    select?: EditorialPickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EditorialPick
     */
    omit?: EditorialPickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditorialPickInclude<ExtArgs> | null
    /**
     * Filter, which EditorialPick to fetch.
     */
    where: EditorialPickWhereUniqueInput
  }

  /**
   * EditorialPick findUniqueOrThrow
   */
  export type EditorialPickFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EditorialPick
     */
    select?: EditorialPickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EditorialPick
     */
    omit?: EditorialPickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditorialPickInclude<ExtArgs> | null
    /**
     * Filter, which EditorialPick to fetch.
     */
    where: EditorialPickWhereUniqueInput
  }

  /**
   * EditorialPick findFirst
   */
  export type EditorialPickFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EditorialPick
     */
    select?: EditorialPickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EditorialPick
     */
    omit?: EditorialPickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditorialPickInclude<ExtArgs> | null
    /**
     * Filter, which EditorialPick to fetch.
     */
    where?: EditorialPickWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EditorialPicks to fetch.
     */
    orderBy?: EditorialPickOrderByWithRelationInput | EditorialPickOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EditorialPicks.
     */
    cursor?: EditorialPickWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EditorialPicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EditorialPicks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EditorialPicks.
     */
    distinct?: EditorialPickScalarFieldEnum | EditorialPickScalarFieldEnum[]
  }

  /**
   * EditorialPick findFirstOrThrow
   */
  export type EditorialPickFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EditorialPick
     */
    select?: EditorialPickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EditorialPick
     */
    omit?: EditorialPickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditorialPickInclude<ExtArgs> | null
    /**
     * Filter, which EditorialPick to fetch.
     */
    where?: EditorialPickWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EditorialPicks to fetch.
     */
    orderBy?: EditorialPickOrderByWithRelationInput | EditorialPickOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for EditorialPicks.
     */
    cursor?: EditorialPickWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EditorialPicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EditorialPicks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EditorialPicks.
     */
    distinct?: EditorialPickScalarFieldEnum | EditorialPickScalarFieldEnum[]
  }

  /**
   * EditorialPick findMany
   */
  export type EditorialPickFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EditorialPick
     */
    select?: EditorialPickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EditorialPick
     */
    omit?: EditorialPickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditorialPickInclude<ExtArgs> | null
    /**
     * Filter, which EditorialPicks to fetch.
     */
    where?: EditorialPickWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of EditorialPicks to fetch.
     */
    orderBy?: EditorialPickOrderByWithRelationInput | EditorialPickOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing EditorialPicks.
     */
    cursor?: EditorialPickWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` EditorialPicks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` EditorialPicks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of EditorialPicks.
     */
    distinct?: EditorialPickScalarFieldEnum | EditorialPickScalarFieldEnum[]
  }

  /**
   * EditorialPick create
   */
  export type EditorialPickCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EditorialPick
     */
    select?: EditorialPickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EditorialPick
     */
    omit?: EditorialPickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditorialPickInclude<ExtArgs> | null
    /**
     * The data needed to create a EditorialPick.
     */
    data: XOR<EditorialPickCreateInput, EditorialPickUncheckedCreateInput>
  }

  /**
   * EditorialPick createMany
   */
  export type EditorialPickCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many EditorialPicks.
     */
    data: EditorialPickCreateManyInput | EditorialPickCreateManyInput[]
  }

  /**
   * EditorialPick createManyAndReturn
   */
  export type EditorialPickCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EditorialPick
     */
    select?: EditorialPickSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EditorialPick
     */
    omit?: EditorialPickOmit<ExtArgs> | null
    /**
     * The data used to create many EditorialPicks.
     */
    data: EditorialPickCreateManyInput | EditorialPickCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditorialPickIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * EditorialPick update
   */
  export type EditorialPickUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EditorialPick
     */
    select?: EditorialPickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EditorialPick
     */
    omit?: EditorialPickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditorialPickInclude<ExtArgs> | null
    /**
     * The data needed to update a EditorialPick.
     */
    data: XOR<EditorialPickUpdateInput, EditorialPickUncheckedUpdateInput>
    /**
     * Choose, which EditorialPick to update.
     */
    where: EditorialPickWhereUniqueInput
  }

  /**
   * EditorialPick updateMany
   */
  export type EditorialPickUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update EditorialPicks.
     */
    data: XOR<EditorialPickUpdateManyMutationInput, EditorialPickUncheckedUpdateManyInput>
    /**
     * Filter which EditorialPicks to update
     */
    where?: EditorialPickWhereInput
    /**
     * Limit how many EditorialPicks to update.
     */
    limit?: number
  }

  /**
   * EditorialPick updateManyAndReturn
   */
  export type EditorialPickUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EditorialPick
     */
    select?: EditorialPickSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the EditorialPick
     */
    omit?: EditorialPickOmit<ExtArgs> | null
    /**
     * The data used to update EditorialPicks.
     */
    data: XOR<EditorialPickUpdateManyMutationInput, EditorialPickUncheckedUpdateManyInput>
    /**
     * Filter which EditorialPicks to update
     */
    where?: EditorialPickWhereInput
    /**
     * Limit how many EditorialPicks to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditorialPickIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * EditorialPick upsert
   */
  export type EditorialPickUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EditorialPick
     */
    select?: EditorialPickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EditorialPick
     */
    omit?: EditorialPickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditorialPickInclude<ExtArgs> | null
    /**
     * The filter to search for the EditorialPick to update in case it exists.
     */
    where: EditorialPickWhereUniqueInput
    /**
     * In case the EditorialPick found by the `where` argument doesn't exist, create a new EditorialPick with this data.
     */
    create: XOR<EditorialPickCreateInput, EditorialPickUncheckedCreateInput>
    /**
     * In case the EditorialPick was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EditorialPickUpdateInput, EditorialPickUncheckedUpdateInput>
  }

  /**
   * EditorialPick delete
   */
  export type EditorialPickDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EditorialPick
     */
    select?: EditorialPickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EditorialPick
     */
    omit?: EditorialPickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditorialPickInclude<ExtArgs> | null
    /**
     * Filter which EditorialPick to delete.
     */
    where: EditorialPickWhereUniqueInput
  }

  /**
   * EditorialPick deleteMany
   */
  export type EditorialPickDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which EditorialPicks to delete
     */
    where?: EditorialPickWhereInput
    /**
     * Limit how many EditorialPicks to delete.
     */
    limit?: number
  }

  /**
   * EditorialPick without action
   */
  export type EditorialPickDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EditorialPick
     */
    select?: EditorialPickSelect<ExtArgs> | null
    /**
     * Omit specific fields from the EditorialPick
     */
    omit?: EditorialPickOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EditorialPickInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    passwordHash: 'passwordHash',
    role: 'role',
    telefone: 'telefone',
    biNuit: 'biNuit',
    kycStatus: 'kycStatus',
    criadoEm: 'criadoEm'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    ownerId: 'ownerId',
    seccao: 'seccao',
    titulo: 'titulo',
    descricao: 'descricao',
    categoria: 'categoria',
    sector: 'sector',
    localizacao: 'localizacao',
    nivelVerificacao: 'nivelVerificacao',
    estado: 'estado',
    boostActivoAte: 'boostActivoAte',
    criadoEm: 'criadoEm'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const VerificationChecklistScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    tipo: 'tipo',
    respostasJson: 'respostasJson',
    documentosUrls: 'documentosUrls',
    estado: 'estado'
  };

  export type VerificationChecklistScalarFieldEnum = (typeof VerificationChecklistScalarFieldEnum)[keyof typeof VerificationChecklistScalarFieldEnum]


  export const ReactionScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    userId: 'userId',
    tipo: 'tipo',
    criadoEm: 'criadoEm'
  };

  export type ReactionScalarFieldEnum = (typeof ReactionScalarFieldEnum)[keyof typeof ReactionScalarFieldEnum]


  export const NDAScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    buyerId: 'buyerId',
    aceiteEm: 'aceiteEm',
    ip: 'ip',
    pago: 'pago',
    criadoEm: 'criadoEm'
  };

  export type NDAScalarFieldEnum = (typeof NDAScalarFieldEnum)[keyof typeof NDAScalarFieldEnum]


  export const ContactRequestScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    buyerId: 'buyerId',
    estado: 'estado',
    criadoEm: 'criadoEm'
  };

  export type ContactRequestScalarFieldEnum = (typeof ContactRequestScalarFieldEnum)[keyof typeof ContactRequestScalarFieldEnum]


  export const PaymentScalarFieldEnum: {
    id: 'id',
    tipo: 'tipo',
    projectId: 'projectId',
    userId: 'userId',
    metodo: 'metodo',
    comprovativoUrl: 'comprovativoUrl',
    estado: 'estado',
    confirmadoPor: 'confirmadoPor',
    criadoEm: 'criadoEm'
  };

  export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum]


  export const DocumentoSensivelScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    tipo: 'tipo',
    urlEncriptado: 'urlEncriptado',
    expiraEm: 'expiraEm',
    criadoEm: 'criadoEm'
  };

  export type DocumentoSensivelScalarFieldEnum = (typeof DocumentoSensivelScalarFieldEnum)[keyof typeof DocumentoSensivelScalarFieldEnum]


  export const NewsletterSubscriptionScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    estado: 'estado',
    criadoEm: 'criadoEm'
  };

  export type NewsletterSubscriptionScalarFieldEnum = (typeof NewsletterSubscriptionScalarFieldEnum)[keyof typeof NewsletterSubscriptionScalarFieldEnum]


  export const EditorialPickScalarFieldEnum: {
    id: 'id',
    projectId: 'projectId',
    seccao: 'seccao',
    posicao: 'posicao',
    semanaReferencia: 'semanaReferencia'
  };

  export type EditorialPickScalarFieldEnum = (typeof EditorialPickScalarFieldEnum)[keyof typeof EditorialPickScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'KycStatus'
   */
  export type EnumKycStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'KycStatus'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Seccao'
   */
  export type EnumSeccaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Seccao'>
    


  /**
   * Reference to a field of type 'NivelVerificacao'
   */
  export type EnumNivelVerificacaoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'NivelVerificacao'>
    


  /**
   * Reference to a field of type 'EstadoProjecto'
   */
  export type EnumEstadoProjectoFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'EstadoProjecto'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    telefone?: StringNullableFilter<"User"> | string | null
    biNuit?: StringNullableFilter<"User"> | string | null
    kycStatus?: EnumKycStatusFilter<"User"> | $Enums.KycStatus
    criadoEm?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    projects?: ProjectListRelationFilter
    reactions?: ReactionListRelationFilter
    ndasComoComprador?: NDAListRelationFilter
    contactRequests?: ContactRequestListRelationFilter
    payments?: PaymentListRelationFilter
    newsletterSubscription?: XOR<NewsletterSubscriptionNullableScalarRelationFilter, NewsletterSubscriptionWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    passwordHash?: SortOrderInput | SortOrder
    role?: SortOrder
    telefone?: SortOrderInput | SortOrder
    biNuit?: SortOrderInput | SortOrder
    kycStatus?: SortOrder
    criadoEm?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    projects?: ProjectOrderByRelationAggregateInput
    reactions?: ReactionOrderByRelationAggregateInput
    ndasComoComprador?: NDAOrderByRelationAggregateInput
    contactRequests?: ContactRequestOrderByRelationAggregateInput
    payments?: PaymentOrderByRelationAggregateInput
    newsletterSubscription?: NewsletterSubscriptionOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    passwordHash?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    telefone?: StringNullableFilter<"User"> | string | null
    biNuit?: StringNullableFilter<"User"> | string | null
    kycStatus?: EnumKycStatusFilter<"User"> | $Enums.KycStatus
    criadoEm?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    projects?: ProjectListRelationFilter
    reactions?: ReactionListRelationFilter
    ndasComoComprador?: NDAListRelationFilter
    contactRequests?: ContactRequestListRelationFilter
    payments?: PaymentListRelationFilter
    newsletterSubscription?: XOR<NewsletterSubscriptionNullableScalarRelationFilter, NewsletterSubscriptionWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    passwordHash?: SortOrderInput | SortOrder
    role?: SortOrder
    telefone?: SortOrderInput | SortOrder
    biNuit?: SortOrderInput | SortOrder
    kycStatus?: SortOrder
    criadoEm?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    passwordHash?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    telefone?: StringNullableWithAggregatesFilter<"User"> | string | null
    biNuit?: StringNullableWithAggregatesFilter<"User"> | string | null
    kycStatus?: EnumKycStatusWithAggregatesFilter<"User"> | $Enums.KycStatus
    criadoEm?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    ownerId?: StringFilter<"Project"> | string
    seccao?: EnumSeccaoFilter<"Project"> | $Enums.Seccao
    titulo?: StringFilter<"Project"> | string
    descricao?: StringFilter<"Project"> | string
    categoria?: StringFilter<"Project"> | string
    sector?: StringFilter<"Project"> | string
    localizacao?: StringFilter<"Project"> | string
    nivelVerificacao?: EnumNivelVerificacaoFilter<"Project"> | $Enums.NivelVerificacao
    estado?: EnumEstadoProjectoFilter<"Project"> | $Enums.EstadoProjecto
    boostActivoAte?: DateTimeNullableFilter<"Project"> | Date | string | null
    criadoEm?: DateTimeFilter<"Project"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    checklists?: VerificationChecklistListRelationFilter
    reactions?: ReactionListRelationFilter
    ndas?: NDAListRelationFilter
    contactRequests?: ContactRequestListRelationFilter
    documentos?: DocumentoSensivelListRelationFilter
    editorialPicks?: EditorialPickListRelationFilter
    payments?: PaymentListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    seccao?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    categoria?: SortOrder
    sector?: SortOrder
    localizacao?: SortOrder
    nivelVerificacao?: SortOrder
    estado?: SortOrder
    boostActivoAte?: SortOrderInput | SortOrder
    criadoEm?: SortOrder
    owner?: UserOrderByWithRelationInput
    checklists?: VerificationChecklistOrderByRelationAggregateInput
    reactions?: ReactionOrderByRelationAggregateInput
    ndas?: NDAOrderByRelationAggregateInput
    contactRequests?: ContactRequestOrderByRelationAggregateInput
    documentos?: DocumentoSensivelOrderByRelationAggregateInput
    editorialPicks?: EditorialPickOrderByRelationAggregateInput
    payments?: PaymentOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    ownerId?: StringFilter<"Project"> | string
    seccao?: EnumSeccaoFilter<"Project"> | $Enums.Seccao
    titulo?: StringFilter<"Project"> | string
    descricao?: StringFilter<"Project"> | string
    categoria?: StringFilter<"Project"> | string
    sector?: StringFilter<"Project"> | string
    localizacao?: StringFilter<"Project"> | string
    nivelVerificacao?: EnumNivelVerificacaoFilter<"Project"> | $Enums.NivelVerificacao
    estado?: EnumEstadoProjectoFilter<"Project"> | $Enums.EstadoProjecto
    boostActivoAte?: DateTimeNullableFilter<"Project"> | Date | string | null
    criadoEm?: DateTimeFilter<"Project"> | Date | string
    owner?: XOR<UserScalarRelationFilter, UserWhereInput>
    checklists?: VerificationChecklistListRelationFilter
    reactions?: ReactionListRelationFilter
    ndas?: NDAListRelationFilter
    contactRequests?: ContactRequestListRelationFilter
    documentos?: DocumentoSensivelListRelationFilter
    editorialPicks?: EditorialPickListRelationFilter
    payments?: PaymentListRelationFilter
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    ownerId?: SortOrder
    seccao?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    categoria?: SortOrder
    sector?: SortOrder
    localizacao?: SortOrder
    nivelVerificacao?: SortOrder
    estado?: SortOrder
    boostActivoAte?: SortOrderInput | SortOrder
    criadoEm?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    ownerId?: StringWithAggregatesFilter<"Project"> | string
    seccao?: EnumSeccaoWithAggregatesFilter<"Project"> | $Enums.Seccao
    titulo?: StringWithAggregatesFilter<"Project"> | string
    descricao?: StringWithAggregatesFilter<"Project"> | string
    categoria?: StringWithAggregatesFilter<"Project"> | string
    sector?: StringWithAggregatesFilter<"Project"> | string
    localizacao?: StringWithAggregatesFilter<"Project"> | string
    nivelVerificacao?: EnumNivelVerificacaoWithAggregatesFilter<"Project"> | $Enums.NivelVerificacao
    estado?: EnumEstadoProjectoWithAggregatesFilter<"Project"> | $Enums.EstadoProjecto
    boostActivoAte?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
    criadoEm?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type VerificationChecklistWhereInput = {
    AND?: VerificationChecklistWhereInput | VerificationChecklistWhereInput[]
    OR?: VerificationChecklistWhereInput[]
    NOT?: VerificationChecklistWhereInput | VerificationChecklistWhereInput[]
    id?: StringFilter<"VerificationChecklist"> | string
    projectId?: StringFilter<"VerificationChecklist"> | string
    tipo?: StringFilter<"VerificationChecklist"> | string
    respostasJson?: StringFilter<"VerificationChecklist"> | string
    documentosUrls?: StringFilter<"VerificationChecklist"> | string
    estado?: StringFilter<"VerificationChecklist"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type VerificationChecklistOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    tipo?: SortOrder
    respostasJson?: SortOrder
    documentosUrls?: SortOrder
    estado?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type VerificationChecklistWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VerificationChecklistWhereInput | VerificationChecklistWhereInput[]
    OR?: VerificationChecklistWhereInput[]
    NOT?: VerificationChecklistWhereInput | VerificationChecklistWhereInput[]
    projectId?: StringFilter<"VerificationChecklist"> | string
    tipo?: StringFilter<"VerificationChecklist"> | string
    respostasJson?: StringFilter<"VerificationChecklist"> | string
    documentosUrls?: StringFilter<"VerificationChecklist"> | string
    estado?: StringFilter<"VerificationChecklist"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id">

  export type VerificationChecklistOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    tipo?: SortOrder
    respostasJson?: SortOrder
    documentosUrls?: SortOrder
    estado?: SortOrder
    _count?: VerificationChecklistCountOrderByAggregateInput
    _max?: VerificationChecklistMaxOrderByAggregateInput
    _min?: VerificationChecklistMinOrderByAggregateInput
  }

  export type VerificationChecklistScalarWhereWithAggregatesInput = {
    AND?: VerificationChecklistScalarWhereWithAggregatesInput | VerificationChecklistScalarWhereWithAggregatesInput[]
    OR?: VerificationChecklistScalarWhereWithAggregatesInput[]
    NOT?: VerificationChecklistScalarWhereWithAggregatesInput | VerificationChecklistScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"VerificationChecklist"> | string
    projectId?: StringWithAggregatesFilter<"VerificationChecklist"> | string
    tipo?: StringWithAggregatesFilter<"VerificationChecklist"> | string
    respostasJson?: StringWithAggregatesFilter<"VerificationChecklist"> | string
    documentosUrls?: StringWithAggregatesFilter<"VerificationChecklist"> | string
    estado?: StringWithAggregatesFilter<"VerificationChecklist"> | string
  }

  export type ReactionWhereInput = {
    AND?: ReactionWhereInput | ReactionWhereInput[]
    OR?: ReactionWhereInput[]
    NOT?: ReactionWhereInput | ReactionWhereInput[]
    id?: StringFilter<"Reaction"> | string
    projectId?: StringFilter<"Reaction"> | string
    userId?: StringFilter<"Reaction"> | string
    tipo?: StringFilter<"Reaction"> | string
    criadoEm?: DateTimeFilter<"Reaction"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ReactionOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    tipo?: SortOrder
    criadoEm?: SortOrder
    project?: ProjectOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ReactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    projectId_userId_tipo?: ReactionProjectIdUserIdTipoCompoundUniqueInput
    AND?: ReactionWhereInput | ReactionWhereInput[]
    OR?: ReactionWhereInput[]
    NOT?: ReactionWhereInput | ReactionWhereInput[]
    projectId?: StringFilter<"Reaction"> | string
    userId?: StringFilter<"Reaction"> | string
    tipo?: StringFilter<"Reaction"> | string
    criadoEm?: DateTimeFilter<"Reaction"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "projectId_userId_tipo">

  export type ReactionOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    tipo?: SortOrder
    criadoEm?: SortOrder
    _count?: ReactionCountOrderByAggregateInput
    _max?: ReactionMaxOrderByAggregateInput
    _min?: ReactionMinOrderByAggregateInput
  }

  export type ReactionScalarWhereWithAggregatesInput = {
    AND?: ReactionScalarWhereWithAggregatesInput | ReactionScalarWhereWithAggregatesInput[]
    OR?: ReactionScalarWhereWithAggregatesInput[]
    NOT?: ReactionScalarWhereWithAggregatesInput | ReactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Reaction"> | string
    projectId?: StringWithAggregatesFilter<"Reaction"> | string
    userId?: StringWithAggregatesFilter<"Reaction"> | string
    tipo?: StringWithAggregatesFilter<"Reaction"> | string
    criadoEm?: DateTimeWithAggregatesFilter<"Reaction"> | Date | string
  }

  export type NDAWhereInput = {
    AND?: NDAWhereInput | NDAWhereInput[]
    OR?: NDAWhereInput[]
    NOT?: NDAWhereInput | NDAWhereInput[]
    id?: StringFilter<"NDA"> | string
    projectId?: StringFilter<"NDA"> | string
    buyerId?: StringFilter<"NDA"> | string
    aceiteEm?: DateTimeFilter<"NDA"> | Date | string
    ip?: StringFilter<"NDA"> | string
    pago?: BoolFilter<"NDA"> | boolean
    criadoEm?: DateTimeFilter<"NDA"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    buyer?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NDAOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    buyerId?: SortOrder
    aceiteEm?: SortOrder
    ip?: SortOrder
    pago?: SortOrder
    criadoEm?: SortOrder
    project?: ProjectOrderByWithRelationInput
    buyer?: UserOrderByWithRelationInput
  }

  export type NDAWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NDAWhereInput | NDAWhereInput[]
    OR?: NDAWhereInput[]
    NOT?: NDAWhereInput | NDAWhereInput[]
    projectId?: StringFilter<"NDA"> | string
    buyerId?: StringFilter<"NDA"> | string
    aceiteEm?: DateTimeFilter<"NDA"> | Date | string
    ip?: StringFilter<"NDA"> | string
    pago?: BoolFilter<"NDA"> | boolean
    criadoEm?: DateTimeFilter<"NDA"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    buyer?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type NDAOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    buyerId?: SortOrder
    aceiteEm?: SortOrder
    ip?: SortOrder
    pago?: SortOrder
    criadoEm?: SortOrder
    _count?: NDACountOrderByAggregateInput
    _max?: NDAMaxOrderByAggregateInput
    _min?: NDAMinOrderByAggregateInput
  }

  export type NDAScalarWhereWithAggregatesInput = {
    AND?: NDAScalarWhereWithAggregatesInput | NDAScalarWhereWithAggregatesInput[]
    OR?: NDAScalarWhereWithAggregatesInput[]
    NOT?: NDAScalarWhereWithAggregatesInput | NDAScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NDA"> | string
    projectId?: StringWithAggregatesFilter<"NDA"> | string
    buyerId?: StringWithAggregatesFilter<"NDA"> | string
    aceiteEm?: DateTimeWithAggregatesFilter<"NDA"> | Date | string
    ip?: StringWithAggregatesFilter<"NDA"> | string
    pago?: BoolWithAggregatesFilter<"NDA"> | boolean
    criadoEm?: DateTimeWithAggregatesFilter<"NDA"> | Date | string
  }

  export type ContactRequestWhereInput = {
    AND?: ContactRequestWhereInput | ContactRequestWhereInput[]
    OR?: ContactRequestWhereInput[]
    NOT?: ContactRequestWhereInput | ContactRequestWhereInput[]
    id?: StringFilter<"ContactRequest"> | string
    projectId?: StringFilter<"ContactRequest"> | string
    buyerId?: StringFilter<"ContactRequest"> | string
    estado?: StringFilter<"ContactRequest"> | string
    criadoEm?: DateTimeFilter<"ContactRequest"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    buyer?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ContactRequestOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    buyerId?: SortOrder
    estado?: SortOrder
    criadoEm?: SortOrder
    project?: ProjectOrderByWithRelationInput
    buyer?: UserOrderByWithRelationInput
  }

  export type ContactRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContactRequestWhereInput | ContactRequestWhereInput[]
    OR?: ContactRequestWhereInput[]
    NOT?: ContactRequestWhereInput | ContactRequestWhereInput[]
    projectId?: StringFilter<"ContactRequest"> | string
    buyerId?: StringFilter<"ContactRequest"> | string
    estado?: StringFilter<"ContactRequest"> | string
    criadoEm?: DateTimeFilter<"ContactRequest"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    buyer?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ContactRequestOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    buyerId?: SortOrder
    estado?: SortOrder
    criadoEm?: SortOrder
    _count?: ContactRequestCountOrderByAggregateInput
    _max?: ContactRequestMaxOrderByAggregateInput
    _min?: ContactRequestMinOrderByAggregateInput
  }

  export type ContactRequestScalarWhereWithAggregatesInput = {
    AND?: ContactRequestScalarWhereWithAggregatesInput | ContactRequestScalarWhereWithAggregatesInput[]
    OR?: ContactRequestScalarWhereWithAggregatesInput[]
    NOT?: ContactRequestScalarWhereWithAggregatesInput | ContactRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ContactRequest"> | string
    projectId?: StringWithAggregatesFilter<"ContactRequest"> | string
    buyerId?: StringWithAggregatesFilter<"ContactRequest"> | string
    estado?: StringWithAggregatesFilter<"ContactRequest"> | string
    criadoEm?: DateTimeWithAggregatesFilter<"ContactRequest"> | Date | string
  }

  export type PaymentWhereInput = {
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    id?: StringFilter<"Payment"> | string
    tipo?: StringFilter<"Payment"> | string
    projectId?: StringNullableFilter<"Payment"> | string | null
    userId?: StringFilter<"Payment"> | string
    metodo?: StringFilter<"Payment"> | string
    comprovativoUrl?: StringNullableFilter<"Payment"> | string | null
    estado?: StringFilter<"Payment"> | string
    confirmadoPor?: StringNullableFilter<"Payment"> | string | null
    criadoEm?: DateTimeFilter<"Payment"> | Date | string
    project?: XOR<ProjectNullableScalarRelationFilter, ProjectWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type PaymentOrderByWithRelationInput = {
    id?: SortOrder
    tipo?: SortOrder
    projectId?: SortOrderInput | SortOrder
    userId?: SortOrder
    metodo?: SortOrder
    comprovativoUrl?: SortOrderInput | SortOrder
    estado?: SortOrder
    confirmadoPor?: SortOrderInput | SortOrder
    criadoEm?: SortOrder
    project?: ProjectOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type PaymentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PaymentWhereInput | PaymentWhereInput[]
    OR?: PaymentWhereInput[]
    NOT?: PaymentWhereInput | PaymentWhereInput[]
    tipo?: StringFilter<"Payment"> | string
    projectId?: StringNullableFilter<"Payment"> | string | null
    userId?: StringFilter<"Payment"> | string
    metodo?: StringFilter<"Payment"> | string
    comprovativoUrl?: StringNullableFilter<"Payment"> | string | null
    estado?: StringFilter<"Payment"> | string
    confirmadoPor?: StringNullableFilter<"Payment"> | string | null
    criadoEm?: DateTimeFilter<"Payment"> | Date | string
    project?: XOR<ProjectNullableScalarRelationFilter, ProjectWhereInput> | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type PaymentOrderByWithAggregationInput = {
    id?: SortOrder
    tipo?: SortOrder
    projectId?: SortOrderInput | SortOrder
    userId?: SortOrder
    metodo?: SortOrder
    comprovativoUrl?: SortOrderInput | SortOrder
    estado?: SortOrder
    confirmadoPor?: SortOrderInput | SortOrder
    criadoEm?: SortOrder
    _count?: PaymentCountOrderByAggregateInput
    _max?: PaymentMaxOrderByAggregateInput
    _min?: PaymentMinOrderByAggregateInput
  }

  export type PaymentScalarWhereWithAggregatesInput = {
    AND?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    OR?: PaymentScalarWhereWithAggregatesInput[]
    NOT?: PaymentScalarWhereWithAggregatesInput | PaymentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Payment"> | string
    tipo?: StringWithAggregatesFilter<"Payment"> | string
    projectId?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    userId?: StringWithAggregatesFilter<"Payment"> | string
    metodo?: StringWithAggregatesFilter<"Payment"> | string
    comprovativoUrl?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    estado?: StringWithAggregatesFilter<"Payment"> | string
    confirmadoPor?: StringNullableWithAggregatesFilter<"Payment"> | string | null
    criadoEm?: DateTimeWithAggregatesFilter<"Payment"> | Date | string
  }

  export type DocumentoSensivelWhereInput = {
    AND?: DocumentoSensivelWhereInput | DocumentoSensivelWhereInput[]
    OR?: DocumentoSensivelWhereInput[]
    NOT?: DocumentoSensivelWhereInput | DocumentoSensivelWhereInput[]
    id?: StringFilter<"DocumentoSensivel"> | string
    projectId?: StringFilter<"DocumentoSensivel"> | string
    tipo?: StringFilter<"DocumentoSensivel"> | string
    urlEncriptado?: StringFilter<"DocumentoSensivel"> | string
    expiraEm?: DateTimeNullableFilter<"DocumentoSensivel"> | Date | string | null
    criadoEm?: DateTimeFilter<"DocumentoSensivel"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type DocumentoSensivelOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    tipo?: SortOrder
    urlEncriptado?: SortOrder
    expiraEm?: SortOrderInput | SortOrder
    criadoEm?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type DocumentoSensivelWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: DocumentoSensivelWhereInput | DocumentoSensivelWhereInput[]
    OR?: DocumentoSensivelWhereInput[]
    NOT?: DocumentoSensivelWhereInput | DocumentoSensivelWhereInput[]
    projectId?: StringFilter<"DocumentoSensivel"> | string
    tipo?: StringFilter<"DocumentoSensivel"> | string
    urlEncriptado?: StringFilter<"DocumentoSensivel"> | string
    expiraEm?: DateTimeNullableFilter<"DocumentoSensivel"> | Date | string | null
    criadoEm?: DateTimeFilter<"DocumentoSensivel"> | Date | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id">

  export type DocumentoSensivelOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    tipo?: SortOrder
    urlEncriptado?: SortOrder
    expiraEm?: SortOrderInput | SortOrder
    criadoEm?: SortOrder
    _count?: DocumentoSensivelCountOrderByAggregateInput
    _max?: DocumentoSensivelMaxOrderByAggregateInput
    _min?: DocumentoSensivelMinOrderByAggregateInput
  }

  export type DocumentoSensivelScalarWhereWithAggregatesInput = {
    AND?: DocumentoSensivelScalarWhereWithAggregatesInput | DocumentoSensivelScalarWhereWithAggregatesInput[]
    OR?: DocumentoSensivelScalarWhereWithAggregatesInput[]
    NOT?: DocumentoSensivelScalarWhereWithAggregatesInput | DocumentoSensivelScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"DocumentoSensivel"> | string
    projectId?: StringWithAggregatesFilter<"DocumentoSensivel"> | string
    tipo?: StringWithAggregatesFilter<"DocumentoSensivel"> | string
    urlEncriptado?: StringWithAggregatesFilter<"DocumentoSensivel"> | string
    expiraEm?: DateTimeNullableWithAggregatesFilter<"DocumentoSensivel"> | Date | string | null
    criadoEm?: DateTimeWithAggregatesFilter<"DocumentoSensivel"> | Date | string
  }

  export type NewsletterSubscriptionWhereInput = {
    AND?: NewsletterSubscriptionWhereInput | NewsletterSubscriptionWhereInput[]
    OR?: NewsletterSubscriptionWhereInput[]
    NOT?: NewsletterSubscriptionWhereInput | NewsletterSubscriptionWhereInput[]
    id?: StringFilter<"NewsletterSubscription"> | string
    userId?: StringFilter<"NewsletterSubscription"> | string
    estado?: StringFilter<"NewsletterSubscription"> | string
    criadoEm?: DateTimeFilter<"NewsletterSubscription"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type NewsletterSubscriptionOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    estado?: SortOrder
    criadoEm?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type NewsletterSubscriptionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: NewsletterSubscriptionWhereInput | NewsletterSubscriptionWhereInput[]
    OR?: NewsletterSubscriptionWhereInput[]
    NOT?: NewsletterSubscriptionWhereInput | NewsletterSubscriptionWhereInput[]
    estado?: StringFilter<"NewsletterSubscription"> | string
    criadoEm?: DateTimeFilter<"NewsletterSubscription"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "userId">

  export type NewsletterSubscriptionOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    estado?: SortOrder
    criadoEm?: SortOrder
    _count?: NewsletterSubscriptionCountOrderByAggregateInput
    _max?: NewsletterSubscriptionMaxOrderByAggregateInput
    _min?: NewsletterSubscriptionMinOrderByAggregateInput
  }

  export type NewsletterSubscriptionScalarWhereWithAggregatesInput = {
    AND?: NewsletterSubscriptionScalarWhereWithAggregatesInput | NewsletterSubscriptionScalarWhereWithAggregatesInput[]
    OR?: NewsletterSubscriptionScalarWhereWithAggregatesInput[]
    NOT?: NewsletterSubscriptionScalarWhereWithAggregatesInput | NewsletterSubscriptionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"NewsletterSubscription"> | string
    userId?: StringWithAggregatesFilter<"NewsletterSubscription"> | string
    estado?: StringWithAggregatesFilter<"NewsletterSubscription"> | string
    criadoEm?: DateTimeWithAggregatesFilter<"NewsletterSubscription"> | Date | string
  }

  export type EditorialPickWhereInput = {
    AND?: EditorialPickWhereInput | EditorialPickWhereInput[]
    OR?: EditorialPickWhereInput[]
    NOT?: EditorialPickWhereInput | EditorialPickWhereInput[]
    id?: StringFilter<"EditorialPick"> | string
    projectId?: StringFilter<"EditorialPick"> | string
    seccao?: EnumSeccaoFilter<"EditorialPick"> | $Enums.Seccao
    posicao?: IntFilter<"EditorialPick"> | number
    semanaReferencia?: StringFilter<"EditorialPick"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type EditorialPickOrderByWithRelationInput = {
    id?: SortOrder
    projectId?: SortOrder
    seccao?: SortOrder
    posicao?: SortOrder
    semanaReferencia?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type EditorialPickWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EditorialPickWhereInput | EditorialPickWhereInput[]
    OR?: EditorialPickWhereInput[]
    NOT?: EditorialPickWhereInput | EditorialPickWhereInput[]
    projectId?: StringFilter<"EditorialPick"> | string
    seccao?: EnumSeccaoFilter<"EditorialPick"> | $Enums.Seccao
    posicao?: IntFilter<"EditorialPick"> | number
    semanaReferencia?: StringFilter<"EditorialPick"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id">

  export type EditorialPickOrderByWithAggregationInput = {
    id?: SortOrder
    projectId?: SortOrder
    seccao?: SortOrder
    posicao?: SortOrder
    semanaReferencia?: SortOrder
    _count?: EditorialPickCountOrderByAggregateInput
    _avg?: EditorialPickAvgOrderByAggregateInput
    _max?: EditorialPickMaxOrderByAggregateInput
    _min?: EditorialPickMinOrderByAggregateInput
    _sum?: EditorialPickSumOrderByAggregateInput
  }

  export type EditorialPickScalarWhereWithAggregatesInput = {
    AND?: EditorialPickScalarWhereWithAggregatesInput | EditorialPickScalarWhereWithAggregatesInput[]
    OR?: EditorialPickScalarWhereWithAggregatesInput[]
    NOT?: EditorialPickScalarWhereWithAggregatesInput | EditorialPickScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"EditorialPick"> | string
    projectId?: StringWithAggregatesFilter<"EditorialPick"> | string
    seccao?: EnumSeccaoWithAggregatesFilter<"EditorialPick"> | $Enums.Seccao
    posicao?: IntWithAggregatesFilter<"EditorialPick"> | number
    semanaReferencia?: StringWithAggregatesFilter<"EditorialPick"> | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    passwordHash?: string | null
    role?: $Enums.Role
    telefone?: string | null
    biNuit?: string | null
    kycStatus?: $Enums.KycStatus
    criadoEm?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutOwnerInput
    reactions?: ReactionCreateNestedManyWithoutUserInput
    ndasComoComprador?: NDACreateNestedManyWithoutBuyerInput
    contactRequests?: ContactRequestCreateNestedManyWithoutBuyerInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    newsletterSubscription?: NewsletterSubscriptionCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    passwordHash?: string | null
    role?: $Enums.Role
    telefone?: string | null
    biNuit?: string | null
    kycStatus?: $Enums.KycStatus
    criadoEm?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutUserInput
    ndasComoComprador?: NDAUncheckedCreateNestedManyWithoutBuyerInput
    contactRequests?: ContactRequestUncheckedCreateNestedManyWithoutBuyerInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    newsletterSubscription?: NewsletterSubscriptionUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    biNuit?: NullableStringFieldUpdateOperationsInput | string | null
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutOwnerNestedInput
    reactions?: ReactionUpdateManyWithoutUserNestedInput
    ndasComoComprador?: NDAUpdateManyWithoutBuyerNestedInput
    contactRequests?: ContactRequestUpdateManyWithoutBuyerNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    newsletterSubscription?: NewsletterSubscriptionUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    biNuit?: NullableStringFieldUpdateOperationsInput | string | null
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutUserNestedInput
    ndasComoComprador?: NDAUncheckedUpdateManyWithoutBuyerNestedInput
    contactRequests?: ContactRequestUncheckedUpdateManyWithoutBuyerNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    newsletterSubscription?: NewsletterSubscriptionUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    passwordHash?: string | null
    role?: $Enums.Role
    telefone?: string | null
    biNuit?: string | null
    kycStatus?: $Enums.KycStatus
    criadoEm?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    biNuit?: NullableStringFieldUpdateOperationsInput | string | null
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    biNuit?: NullableStringFieldUpdateOperationsInput | string | null
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateInput = {
    id?: string
    seccao: $Enums.Seccao
    titulo: string
    descricao: string
    categoria: string
    sector: string
    localizacao: string
    nivelVerificacao?: $Enums.NivelVerificacao
    estado?: $Enums.EstadoProjecto
    boostActivoAte?: Date | string | null
    criadoEm?: Date | string
    owner: UserCreateNestedOneWithoutProjectsInput
    checklists?: VerificationChecklistCreateNestedManyWithoutProjectInput
    reactions?: ReactionCreateNestedManyWithoutProjectInput
    ndas?: NDACreateNestedManyWithoutProjectInput
    contactRequests?: ContactRequestCreateNestedManyWithoutProjectInput
    documentos?: DocumentoSensivelCreateNestedManyWithoutProjectInput
    editorialPicks?: EditorialPickCreateNestedManyWithoutProjectInput
    payments?: PaymentCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    ownerId: string
    seccao: $Enums.Seccao
    titulo: string
    descricao: string
    categoria: string
    sector: string
    localizacao: string
    nivelVerificacao?: $Enums.NivelVerificacao
    estado?: $Enums.EstadoProjecto
    boostActivoAte?: Date | string | null
    criadoEm?: Date | string
    checklists?: VerificationChecklistUncheckedCreateNestedManyWithoutProjectInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutProjectInput
    ndas?: NDAUncheckedCreateNestedManyWithoutProjectInput
    contactRequests?: ContactRequestUncheckedCreateNestedManyWithoutProjectInput
    documentos?: DocumentoSensivelUncheckedCreateNestedManyWithoutProjectInput
    editorialPicks?: EditorialPickUncheckedCreateNestedManyWithoutProjectInput
    payments?: PaymentUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    seccao?: EnumSeccaoFieldUpdateOperationsInput | $Enums.Seccao
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    nivelVerificacao?: EnumNivelVerificacaoFieldUpdateOperationsInput | $Enums.NivelVerificacao
    estado?: EnumEstadoProjectoFieldUpdateOperationsInput | $Enums.EstadoProjecto
    boostActivoAte?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutProjectsNestedInput
    checklists?: VerificationChecklistUpdateManyWithoutProjectNestedInput
    reactions?: ReactionUpdateManyWithoutProjectNestedInput
    ndas?: NDAUpdateManyWithoutProjectNestedInput
    contactRequests?: ContactRequestUpdateManyWithoutProjectNestedInput
    documentos?: DocumentoSensivelUpdateManyWithoutProjectNestedInput
    editorialPicks?: EditorialPickUpdateManyWithoutProjectNestedInput
    payments?: PaymentUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    seccao?: EnumSeccaoFieldUpdateOperationsInput | $Enums.Seccao
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    nivelVerificacao?: EnumNivelVerificacaoFieldUpdateOperationsInput | $Enums.NivelVerificacao
    estado?: EnumEstadoProjectoFieldUpdateOperationsInput | $Enums.EstadoProjecto
    boostActivoAte?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    checklists?: VerificationChecklistUncheckedUpdateManyWithoutProjectNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutProjectNestedInput
    ndas?: NDAUncheckedUpdateManyWithoutProjectNestedInput
    contactRequests?: ContactRequestUncheckedUpdateManyWithoutProjectNestedInput
    documentos?: DocumentoSensivelUncheckedUpdateManyWithoutProjectNestedInput
    editorialPicks?: EditorialPickUncheckedUpdateManyWithoutProjectNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    ownerId: string
    seccao: $Enums.Seccao
    titulo: string
    descricao: string
    categoria: string
    sector: string
    localizacao: string
    nivelVerificacao?: $Enums.NivelVerificacao
    estado?: $Enums.EstadoProjecto
    boostActivoAte?: Date | string | null
    criadoEm?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    seccao?: EnumSeccaoFieldUpdateOperationsInput | $Enums.Seccao
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    nivelVerificacao?: EnumNivelVerificacaoFieldUpdateOperationsInput | $Enums.NivelVerificacao
    estado?: EnumEstadoProjectoFieldUpdateOperationsInput | $Enums.EstadoProjecto
    boostActivoAte?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    seccao?: EnumSeccaoFieldUpdateOperationsInput | $Enums.Seccao
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    nivelVerificacao?: EnumNivelVerificacaoFieldUpdateOperationsInput | $Enums.NivelVerificacao
    estado?: EnumEstadoProjectoFieldUpdateOperationsInput | $Enums.EstadoProjecto
    boostActivoAte?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationChecklistCreateInput = {
    id?: string
    tipo: string
    respostasJson: string
    documentosUrls: string
    estado?: string
    project: ProjectCreateNestedOneWithoutChecklistsInput
  }

  export type VerificationChecklistUncheckedCreateInput = {
    id?: string
    projectId: string
    tipo: string
    respostasJson: string
    documentosUrls: string
    estado?: string
  }

  export type VerificationChecklistUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    respostasJson?: StringFieldUpdateOperationsInput | string
    documentosUrls?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    project?: ProjectUpdateOneRequiredWithoutChecklistsNestedInput
  }

  export type VerificationChecklistUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    respostasJson?: StringFieldUpdateOperationsInput | string
    documentosUrls?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type VerificationChecklistCreateManyInput = {
    id?: string
    projectId: string
    tipo: string
    respostasJson: string
    documentosUrls: string
    estado?: string
  }

  export type VerificationChecklistUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    respostasJson?: StringFieldUpdateOperationsInput | string
    documentosUrls?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type VerificationChecklistUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    respostasJson?: StringFieldUpdateOperationsInput | string
    documentosUrls?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type ReactionCreateInput = {
    id?: string
    tipo?: string
    criadoEm?: Date | string
    project: ProjectCreateNestedOneWithoutReactionsInput
    user: UserCreateNestedOneWithoutReactionsInput
  }

  export type ReactionUncheckedCreateInput = {
    id?: string
    projectId: string
    userId: string
    tipo?: string
    criadoEm?: Date | string
  }

  export type ReactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutReactionsNestedInput
    user?: UserUpdateOneRequiredWithoutReactionsNestedInput
  }

  export type ReactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReactionCreateManyInput = {
    id?: string
    projectId: string
    userId: string
    tipo?: string
    criadoEm?: Date | string
  }

  export type ReactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NDACreateInput = {
    id?: string
    aceiteEm?: Date | string
    ip: string
    pago?: boolean
    criadoEm?: Date | string
    project: ProjectCreateNestedOneWithoutNdasInput
    buyer: UserCreateNestedOneWithoutNdasComoCompradorInput
  }

  export type NDAUncheckedCreateInput = {
    id?: string
    projectId: string
    buyerId: string
    aceiteEm?: Date | string
    ip: string
    pago?: boolean
    criadoEm?: Date | string
  }

  export type NDAUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    aceiteEm?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: StringFieldUpdateOperationsInput | string
    pago?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutNdasNestedInput
    buyer?: UserUpdateOneRequiredWithoutNdasComoCompradorNestedInput
  }

  export type NDAUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    aceiteEm?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: StringFieldUpdateOperationsInput | string
    pago?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NDACreateManyInput = {
    id?: string
    projectId: string
    buyerId: string
    aceiteEm?: Date | string
    ip: string
    pago?: boolean
    criadoEm?: Date | string
  }

  export type NDAUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    aceiteEm?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: StringFieldUpdateOperationsInput | string
    pago?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NDAUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    aceiteEm?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: StringFieldUpdateOperationsInput | string
    pago?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactRequestCreateInput = {
    id?: string
    estado?: string
    criadoEm?: Date | string
    project: ProjectCreateNestedOneWithoutContactRequestsInput
    buyer: UserCreateNestedOneWithoutContactRequestsInput
  }

  export type ContactRequestUncheckedCreateInput = {
    id?: string
    projectId: string
    buyerId: string
    estado?: string
    criadoEm?: Date | string
  }

  export type ContactRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutContactRequestsNestedInput
    buyer?: UserUpdateOneRequiredWithoutContactRequestsNestedInput
  }

  export type ContactRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactRequestCreateManyInput = {
    id?: string
    projectId: string
    buyerId: string
    estado?: string
    criadoEm?: Date | string
  }

  export type ContactRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateInput = {
    id?: string
    tipo: string
    metodo: string
    comprovativoUrl?: string | null
    estado?: string
    confirmadoPor?: string | null
    criadoEm?: Date | string
    project?: ProjectCreateNestedOneWithoutPaymentsInput
    user: UserCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateInput = {
    id?: string
    tipo: string
    projectId?: string | null
    userId: string
    metodo: string
    comprovativoUrl?: string | null
    estado?: string
    confirmadoPor?: string | null
    criadoEm?: Date | string
  }

  export type PaymentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    metodo?: StringFieldUpdateOperationsInput | string
    comprovativoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    confirmadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneWithoutPaymentsNestedInput
    user?: UserUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    metodo?: StringFieldUpdateOperationsInput | string
    comprovativoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    confirmadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentCreateManyInput = {
    id?: string
    tipo: string
    projectId?: string | null
    userId: string
    metodo: string
    comprovativoUrl?: string | null
    estado?: string
    confirmadoPor?: string | null
    criadoEm?: Date | string
  }

  export type PaymentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    metodo?: StringFieldUpdateOperationsInput | string
    comprovativoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    confirmadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    metodo?: StringFieldUpdateOperationsInput | string
    comprovativoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    confirmadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentoSensivelCreateInput = {
    id?: string
    tipo: string
    urlEncriptado: string
    expiraEm?: Date | string | null
    criadoEm?: Date | string
    project: ProjectCreateNestedOneWithoutDocumentosInput
  }

  export type DocumentoSensivelUncheckedCreateInput = {
    id?: string
    projectId: string
    tipo: string
    urlEncriptado: string
    expiraEm?: Date | string | null
    criadoEm?: Date | string
  }

  export type DocumentoSensivelUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    urlEncriptado?: StringFieldUpdateOperationsInput | string
    expiraEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutDocumentosNestedInput
  }

  export type DocumentoSensivelUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    urlEncriptado?: StringFieldUpdateOperationsInput | string
    expiraEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentoSensivelCreateManyInput = {
    id?: string
    projectId: string
    tipo: string
    urlEncriptado: string
    expiraEm?: Date | string | null
    criadoEm?: Date | string
  }

  export type DocumentoSensivelUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    urlEncriptado?: StringFieldUpdateOperationsInput | string
    expiraEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentoSensivelUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    urlEncriptado?: StringFieldUpdateOperationsInput | string
    expiraEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsletterSubscriptionCreateInput = {
    id?: string
    estado?: string
    criadoEm?: Date | string
    user: UserCreateNestedOneWithoutNewsletterSubscriptionInput
  }

  export type NewsletterSubscriptionUncheckedCreateInput = {
    id?: string
    userId: string
    estado?: string
    criadoEm?: Date | string
  }

  export type NewsletterSubscriptionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutNewsletterSubscriptionNestedInput
  }

  export type NewsletterSubscriptionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsletterSubscriptionCreateManyInput = {
    id?: string
    userId: string
    estado?: string
    criadoEm?: Date | string
  }

  export type NewsletterSubscriptionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsletterSubscriptionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EditorialPickCreateInput = {
    id?: string
    seccao: $Enums.Seccao
    posicao: number
    semanaReferencia: string
    project: ProjectCreateNestedOneWithoutEditorialPicksInput
  }

  export type EditorialPickUncheckedCreateInput = {
    id?: string
    projectId: string
    seccao: $Enums.Seccao
    posicao: number
    semanaReferencia: string
  }

  export type EditorialPickUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    seccao?: EnumSeccaoFieldUpdateOperationsInput | $Enums.Seccao
    posicao?: IntFieldUpdateOperationsInput | number
    semanaReferencia?: StringFieldUpdateOperationsInput | string
    project?: ProjectUpdateOneRequiredWithoutEditorialPicksNestedInput
  }

  export type EditorialPickUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    seccao?: EnumSeccaoFieldUpdateOperationsInput | $Enums.Seccao
    posicao?: IntFieldUpdateOperationsInput | number
    semanaReferencia?: StringFieldUpdateOperationsInput | string
  }

  export type EditorialPickCreateManyInput = {
    id?: string
    projectId: string
    seccao: $Enums.Seccao
    posicao: number
    semanaReferencia: string
  }

  export type EditorialPickUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    seccao?: EnumSeccaoFieldUpdateOperationsInput | $Enums.Seccao
    posicao?: IntFieldUpdateOperationsInput | number
    semanaReferencia?: StringFieldUpdateOperationsInput | string
  }

  export type EditorialPickUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    seccao?: EnumSeccaoFieldUpdateOperationsInput | $Enums.Seccao
    posicao?: IntFieldUpdateOperationsInput | number
    semanaReferencia?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type EnumKycStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.KycStatus | EnumKycStatusFieldRefInput<$PrismaModel>
    in?: $Enums.KycStatus[]
    notIn?: $Enums.KycStatus[]
    not?: NestedEnumKycStatusFilter<$PrismaModel> | $Enums.KycStatus
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type ProjectListRelationFilter = {
    every?: ProjectWhereInput
    some?: ProjectWhereInput
    none?: ProjectWhereInput
  }

  export type ReactionListRelationFilter = {
    every?: ReactionWhereInput
    some?: ReactionWhereInput
    none?: ReactionWhereInput
  }

  export type NDAListRelationFilter = {
    every?: NDAWhereInput
    some?: NDAWhereInput
    none?: NDAWhereInput
  }

  export type ContactRequestListRelationFilter = {
    every?: ContactRequestWhereInput
    some?: ContactRequestWhereInput
    none?: ContactRequestWhereInput
  }

  export type PaymentListRelationFilter = {
    every?: PaymentWhereInput
    some?: PaymentWhereInput
    none?: PaymentWhereInput
  }

  export type NewsletterSubscriptionNullableScalarRelationFilter = {
    is?: NewsletterSubscriptionWhereInput | null
    isNot?: NewsletterSubscriptionWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NDAOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContactRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PaymentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    telefone?: SortOrder
    biNuit?: SortOrder
    kycStatus?: SortOrder
    criadoEm?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    telefone?: SortOrder
    biNuit?: SortOrder
    kycStatus?: SortOrder
    criadoEm?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    passwordHash?: SortOrder
    role?: SortOrder
    telefone?: SortOrder
    biNuit?: SortOrder
    kycStatus?: SortOrder
    criadoEm?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type EnumKycStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.KycStatus | EnumKycStatusFieldRefInput<$PrismaModel>
    in?: $Enums.KycStatus[]
    notIn?: $Enums.KycStatus[]
    not?: NestedEnumKycStatusWithAggregatesFilter<$PrismaModel> | $Enums.KycStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKycStatusFilter<$PrismaModel>
    _max?: NestedEnumKycStatusFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type EnumSeccaoFilter<$PrismaModel = never> = {
    equals?: $Enums.Seccao | EnumSeccaoFieldRefInput<$PrismaModel>
    in?: $Enums.Seccao[]
    notIn?: $Enums.Seccao[]
    not?: NestedEnumSeccaoFilter<$PrismaModel> | $Enums.Seccao
  }

  export type EnumNivelVerificacaoFilter<$PrismaModel = never> = {
    equals?: $Enums.NivelVerificacao | EnumNivelVerificacaoFieldRefInput<$PrismaModel>
    in?: $Enums.NivelVerificacao[]
    notIn?: $Enums.NivelVerificacao[]
    not?: NestedEnumNivelVerificacaoFilter<$PrismaModel> | $Enums.NivelVerificacao
  }

  export type EnumEstadoProjectoFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoProjecto | EnumEstadoProjectoFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoProjecto[]
    notIn?: $Enums.EstadoProjecto[]
    not?: NestedEnumEstadoProjectoFilter<$PrismaModel> | $Enums.EstadoProjecto
  }

  export type VerificationChecklistListRelationFilter = {
    every?: VerificationChecklistWhereInput
    some?: VerificationChecklistWhereInput
    none?: VerificationChecklistWhereInput
  }

  export type DocumentoSensivelListRelationFilter = {
    every?: DocumentoSensivelWhereInput
    some?: DocumentoSensivelWhereInput
    none?: DocumentoSensivelWhereInput
  }

  export type EditorialPickListRelationFilter = {
    every?: EditorialPickWhereInput
    some?: EditorialPickWhereInput
    none?: EditorialPickWhereInput
  }

  export type VerificationChecklistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DocumentoSensivelOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EditorialPickOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    seccao?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    categoria?: SortOrder
    sector?: SortOrder
    localizacao?: SortOrder
    nivelVerificacao?: SortOrder
    estado?: SortOrder
    boostActivoAte?: SortOrder
    criadoEm?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    seccao?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    categoria?: SortOrder
    sector?: SortOrder
    localizacao?: SortOrder
    nivelVerificacao?: SortOrder
    estado?: SortOrder
    boostActivoAte?: SortOrder
    criadoEm?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    ownerId?: SortOrder
    seccao?: SortOrder
    titulo?: SortOrder
    descricao?: SortOrder
    categoria?: SortOrder
    sector?: SortOrder
    localizacao?: SortOrder
    nivelVerificacao?: SortOrder
    estado?: SortOrder
    boostActivoAte?: SortOrder
    criadoEm?: SortOrder
  }

  export type EnumSeccaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Seccao | EnumSeccaoFieldRefInput<$PrismaModel>
    in?: $Enums.Seccao[]
    notIn?: $Enums.Seccao[]
    not?: NestedEnumSeccaoWithAggregatesFilter<$PrismaModel> | $Enums.Seccao
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSeccaoFilter<$PrismaModel>
    _max?: NestedEnumSeccaoFilter<$PrismaModel>
  }

  export type EnumNivelVerificacaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NivelVerificacao | EnumNivelVerificacaoFieldRefInput<$PrismaModel>
    in?: $Enums.NivelVerificacao[]
    notIn?: $Enums.NivelVerificacao[]
    not?: NestedEnumNivelVerificacaoWithAggregatesFilter<$PrismaModel> | $Enums.NivelVerificacao
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNivelVerificacaoFilter<$PrismaModel>
    _max?: NestedEnumNivelVerificacaoFilter<$PrismaModel>
  }

  export type EnumEstadoProjectoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoProjecto | EnumEstadoProjectoFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoProjecto[]
    notIn?: $Enums.EstadoProjecto[]
    not?: NestedEnumEstadoProjectoWithAggregatesFilter<$PrismaModel> | $Enums.EstadoProjecto
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoProjectoFilter<$PrismaModel>
    _max?: NestedEnumEstadoProjectoFilter<$PrismaModel>
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type VerificationChecklistCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    tipo?: SortOrder
    respostasJson?: SortOrder
    documentosUrls?: SortOrder
    estado?: SortOrder
  }

  export type VerificationChecklistMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    tipo?: SortOrder
    respostasJson?: SortOrder
    documentosUrls?: SortOrder
    estado?: SortOrder
  }

  export type VerificationChecklistMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    tipo?: SortOrder
    respostasJson?: SortOrder
    documentosUrls?: SortOrder
    estado?: SortOrder
  }

  export type ReactionProjectIdUserIdTipoCompoundUniqueInput = {
    projectId: string
    userId: string
    tipo: string
  }

  export type ReactionCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    tipo?: SortOrder
    criadoEm?: SortOrder
  }

  export type ReactionMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    tipo?: SortOrder
    criadoEm?: SortOrder
  }

  export type ReactionMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    tipo?: SortOrder
    criadoEm?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NDACountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    buyerId?: SortOrder
    aceiteEm?: SortOrder
    ip?: SortOrder
    pago?: SortOrder
    criadoEm?: SortOrder
  }

  export type NDAMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    buyerId?: SortOrder
    aceiteEm?: SortOrder
    ip?: SortOrder
    pago?: SortOrder
    criadoEm?: SortOrder
  }

  export type NDAMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    buyerId?: SortOrder
    aceiteEm?: SortOrder
    ip?: SortOrder
    pago?: SortOrder
    criadoEm?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type ContactRequestCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    buyerId?: SortOrder
    estado?: SortOrder
    criadoEm?: SortOrder
  }

  export type ContactRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    buyerId?: SortOrder
    estado?: SortOrder
    criadoEm?: SortOrder
  }

  export type ContactRequestMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    buyerId?: SortOrder
    estado?: SortOrder
    criadoEm?: SortOrder
  }

  export type ProjectNullableScalarRelationFilter = {
    is?: ProjectWhereInput | null
    isNot?: ProjectWhereInput | null
  }

  export type PaymentCountOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    metodo?: SortOrder
    comprovativoUrl?: SortOrder
    estado?: SortOrder
    confirmadoPor?: SortOrder
    criadoEm?: SortOrder
  }

  export type PaymentMaxOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    metodo?: SortOrder
    comprovativoUrl?: SortOrder
    estado?: SortOrder
    confirmadoPor?: SortOrder
    criadoEm?: SortOrder
  }

  export type PaymentMinOrderByAggregateInput = {
    id?: SortOrder
    tipo?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    metodo?: SortOrder
    comprovativoUrl?: SortOrder
    estado?: SortOrder
    confirmadoPor?: SortOrder
    criadoEm?: SortOrder
  }

  export type DocumentoSensivelCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    tipo?: SortOrder
    urlEncriptado?: SortOrder
    expiraEm?: SortOrder
    criadoEm?: SortOrder
  }

  export type DocumentoSensivelMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    tipo?: SortOrder
    urlEncriptado?: SortOrder
    expiraEm?: SortOrder
    criadoEm?: SortOrder
  }

  export type DocumentoSensivelMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    tipo?: SortOrder
    urlEncriptado?: SortOrder
    expiraEm?: SortOrder
    criadoEm?: SortOrder
  }

  export type NewsletterSubscriptionCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    estado?: SortOrder
    criadoEm?: SortOrder
  }

  export type NewsletterSubscriptionMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    estado?: SortOrder
    criadoEm?: SortOrder
  }

  export type NewsletterSubscriptionMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    estado?: SortOrder
    criadoEm?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EditorialPickCountOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    seccao?: SortOrder
    posicao?: SortOrder
    semanaReferencia?: SortOrder
  }

  export type EditorialPickAvgOrderByAggregateInput = {
    posicao?: SortOrder
  }

  export type EditorialPickMaxOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    seccao?: SortOrder
    posicao?: SortOrder
    semanaReferencia?: SortOrder
  }

  export type EditorialPickMinOrderByAggregateInput = {
    id?: SortOrder
    projectId?: SortOrder
    seccao?: SortOrder
    posicao?: SortOrder
    semanaReferencia?: SortOrder
  }

  export type EditorialPickSumOrderByAggregateInput = {
    posicao?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type ProjectCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput> | ProjectCreateWithoutOwnerInput[] | ProjectUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutOwnerInput | ProjectCreateOrConnectWithoutOwnerInput[]
    createMany?: ProjectCreateManyOwnerInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ReactionCreateNestedManyWithoutUserInput = {
    create?: XOR<ReactionCreateWithoutUserInput, ReactionUncheckedCreateWithoutUserInput> | ReactionCreateWithoutUserInput[] | ReactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutUserInput | ReactionCreateOrConnectWithoutUserInput[]
    createMany?: ReactionCreateManyUserInputEnvelope
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
  }

  export type NDACreateNestedManyWithoutBuyerInput = {
    create?: XOR<NDACreateWithoutBuyerInput, NDAUncheckedCreateWithoutBuyerInput> | NDACreateWithoutBuyerInput[] | NDAUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: NDACreateOrConnectWithoutBuyerInput | NDACreateOrConnectWithoutBuyerInput[]
    createMany?: NDACreateManyBuyerInputEnvelope
    connect?: NDAWhereUniqueInput | NDAWhereUniqueInput[]
  }

  export type ContactRequestCreateNestedManyWithoutBuyerInput = {
    create?: XOR<ContactRequestCreateWithoutBuyerInput, ContactRequestUncheckedCreateWithoutBuyerInput> | ContactRequestCreateWithoutBuyerInput[] | ContactRequestUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: ContactRequestCreateOrConnectWithoutBuyerInput | ContactRequestCreateOrConnectWithoutBuyerInput[]
    createMany?: ContactRequestCreateManyBuyerInputEnvelope
    connect?: ContactRequestWhereUniqueInput | ContactRequestWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type NewsletterSubscriptionCreateNestedOneWithoutUserInput = {
    create?: XOR<NewsletterSubscriptionCreateWithoutUserInput, NewsletterSubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: NewsletterSubscriptionCreateOrConnectWithoutUserInput
    connect?: NewsletterSubscriptionWhereUniqueInput
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type ProjectUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput> | ProjectCreateWithoutOwnerInput[] | ProjectUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutOwnerInput | ProjectCreateOrConnectWithoutOwnerInput[]
    createMany?: ProjectCreateManyOwnerInputEnvelope
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
  }

  export type ReactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReactionCreateWithoutUserInput, ReactionUncheckedCreateWithoutUserInput> | ReactionCreateWithoutUserInput[] | ReactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutUserInput | ReactionCreateOrConnectWithoutUserInput[]
    createMany?: ReactionCreateManyUserInputEnvelope
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
  }

  export type NDAUncheckedCreateNestedManyWithoutBuyerInput = {
    create?: XOR<NDACreateWithoutBuyerInput, NDAUncheckedCreateWithoutBuyerInput> | NDACreateWithoutBuyerInput[] | NDAUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: NDACreateOrConnectWithoutBuyerInput | NDACreateOrConnectWithoutBuyerInput[]
    createMany?: NDACreateManyBuyerInputEnvelope
    connect?: NDAWhereUniqueInput | NDAWhereUniqueInput[]
  }

  export type ContactRequestUncheckedCreateNestedManyWithoutBuyerInput = {
    create?: XOR<ContactRequestCreateWithoutBuyerInput, ContactRequestUncheckedCreateWithoutBuyerInput> | ContactRequestCreateWithoutBuyerInput[] | ContactRequestUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: ContactRequestCreateOrConnectWithoutBuyerInput | ContactRequestCreateOrConnectWithoutBuyerInput[]
    createMany?: ContactRequestCreateManyBuyerInputEnvelope
    connect?: ContactRequestWhereUniqueInput | ContactRequestWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type NewsletterSubscriptionUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<NewsletterSubscriptionCreateWithoutUserInput, NewsletterSubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: NewsletterSubscriptionCreateOrConnectWithoutUserInput
    connect?: NewsletterSubscriptionWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type EnumKycStatusFieldUpdateOperationsInput = {
    set?: $Enums.KycStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type ProjectUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput> | ProjectCreateWithoutOwnerInput[] | ProjectUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutOwnerInput | ProjectCreateOrConnectWithoutOwnerInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutOwnerInput | ProjectUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ProjectCreateManyOwnerInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutOwnerInput | ProjectUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutOwnerInput | ProjectUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ReactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReactionCreateWithoutUserInput, ReactionUncheckedCreateWithoutUserInput> | ReactionCreateWithoutUserInput[] | ReactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutUserInput | ReactionCreateOrConnectWithoutUserInput[]
    upsert?: ReactionUpsertWithWhereUniqueWithoutUserInput | ReactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReactionCreateManyUserInputEnvelope
    set?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    disconnect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    delete?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    update?: ReactionUpdateWithWhereUniqueWithoutUserInput | ReactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReactionUpdateManyWithWhereWithoutUserInput | ReactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReactionScalarWhereInput | ReactionScalarWhereInput[]
  }

  export type NDAUpdateManyWithoutBuyerNestedInput = {
    create?: XOR<NDACreateWithoutBuyerInput, NDAUncheckedCreateWithoutBuyerInput> | NDACreateWithoutBuyerInput[] | NDAUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: NDACreateOrConnectWithoutBuyerInput | NDACreateOrConnectWithoutBuyerInput[]
    upsert?: NDAUpsertWithWhereUniqueWithoutBuyerInput | NDAUpsertWithWhereUniqueWithoutBuyerInput[]
    createMany?: NDACreateManyBuyerInputEnvelope
    set?: NDAWhereUniqueInput | NDAWhereUniqueInput[]
    disconnect?: NDAWhereUniqueInput | NDAWhereUniqueInput[]
    delete?: NDAWhereUniqueInput | NDAWhereUniqueInput[]
    connect?: NDAWhereUniqueInput | NDAWhereUniqueInput[]
    update?: NDAUpdateWithWhereUniqueWithoutBuyerInput | NDAUpdateWithWhereUniqueWithoutBuyerInput[]
    updateMany?: NDAUpdateManyWithWhereWithoutBuyerInput | NDAUpdateManyWithWhereWithoutBuyerInput[]
    deleteMany?: NDAScalarWhereInput | NDAScalarWhereInput[]
  }

  export type ContactRequestUpdateManyWithoutBuyerNestedInput = {
    create?: XOR<ContactRequestCreateWithoutBuyerInput, ContactRequestUncheckedCreateWithoutBuyerInput> | ContactRequestCreateWithoutBuyerInput[] | ContactRequestUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: ContactRequestCreateOrConnectWithoutBuyerInput | ContactRequestCreateOrConnectWithoutBuyerInput[]
    upsert?: ContactRequestUpsertWithWhereUniqueWithoutBuyerInput | ContactRequestUpsertWithWhereUniqueWithoutBuyerInput[]
    createMany?: ContactRequestCreateManyBuyerInputEnvelope
    set?: ContactRequestWhereUniqueInput | ContactRequestWhereUniqueInput[]
    disconnect?: ContactRequestWhereUniqueInput | ContactRequestWhereUniqueInput[]
    delete?: ContactRequestWhereUniqueInput | ContactRequestWhereUniqueInput[]
    connect?: ContactRequestWhereUniqueInput | ContactRequestWhereUniqueInput[]
    update?: ContactRequestUpdateWithWhereUniqueWithoutBuyerInput | ContactRequestUpdateWithWhereUniqueWithoutBuyerInput[]
    updateMany?: ContactRequestUpdateManyWithWhereWithoutBuyerInput | ContactRequestUpdateManyWithWhereWithoutBuyerInput[]
    deleteMany?: ContactRequestScalarWhereInput | ContactRequestScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type NewsletterSubscriptionUpdateOneWithoutUserNestedInput = {
    create?: XOR<NewsletterSubscriptionCreateWithoutUserInput, NewsletterSubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: NewsletterSubscriptionCreateOrConnectWithoutUserInput
    upsert?: NewsletterSubscriptionUpsertWithoutUserInput
    disconnect?: NewsletterSubscriptionWhereInput | boolean
    delete?: NewsletterSubscriptionWhereInput | boolean
    connect?: NewsletterSubscriptionWhereUniqueInput
    update?: XOR<XOR<NewsletterSubscriptionUpdateToOneWithWhereWithoutUserInput, NewsletterSubscriptionUpdateWithoutUserInput>, NewsletterSubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type ProjectUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput> | ProjectCreateWithoutOwnerInput[] | ProjectUncheckedCreateWithoutOwnerInput[]
    connectOrCreate?: ProjectCreateOrConnectWithoutOwnerInput | ProjectCreateOrConnectWithoutOwnerInput[]
    upsert?: ProjectUpsertWithWhereUniqueWithoutOwnerInput | ProjectUpsertWithWhereUniqueWithoutOwnerInput[]
    createMany?: ProjectCreateManyOwnerInputEnvelope
    set?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    disconnect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    delete?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    connect?: ProjectWhereUniqueInput | ProjectWhereUniqueInput[]
    update?: ProjectUpdateWithWhereUniqueWithoutOwnerInput | ProjectUpdateWithWhereUniqueWithoutOwnerInput[]
    updateMany?: ProjectUpdateManyWithWhereWithoutOwnerInput | ProjectUpdateManyWithWhereWithoutOwnerInput[]
    deleteMany?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
  }

  export type ReactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReactionCreateWithoutUserInput, ReactionUncheckedCreateWithoutUserInput> | ReactionCreateWithoutUserInput[] | ReactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutUserInput | ReactionCreateOrConnectWithoutUserInput[]
    upsert?: ReactionUpsertWithWhereUniqueWithoutUserInput | ReactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReactionCreateManyUserInputEnvelope
    set?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    disconnect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    delete?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    update?: ReactionUpdateWithWhereUniqueWithoutUserInput | ReactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReactionUpdateManyWithWhereWithoutUserInput | ReactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReactionScalarWhereInput | ReactionScalarWhereInput[]
  }

  export type NDAUncheckedUpdateManyWithoutBuyerNestedInput = {
    create?: XOR<NDACreateWithoutBuyerInput, NDAUncheckedCreateWithoutBuyerInput> | NDACreateWithoutBuyerInput[] | NDAUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: NDACreateOrConnectWithoutBuyerInput | NDACreateOrConnectWithoutBuyerInput[]
    upsert?: NDAUpsertWithWhereUniqueWithoutBuyerInput | NDAUpsertWithWhereUniqueWithoutBuyerInput[]
    createMany?: NDACreateManyBuyerInputEnvelope
    set?: NDAWhereUniqueInput | NDAWhereUniqueInput[]
    disconnect?: NDAWhereUniqueInput | NDAWhereUniqueInput[]
    delete?: NDAWhereUniqueInput | NDAWhereUniqueInput[]
    connect?: NDAWhereUniqueInput | NDAWhereUniqueInput[]
    update?: NDAUpdateWithWhereUniqueWithoutBuyerInput | NDAUpdateWithWhereUniqueWithoutBuyerInput[]
    updateMany?: NDAUpdateManyWithWhereWithoutBuyerInput | NDAUpdateManyWithWhereWithoutBuyerInput[]
    deleteMany?: NDAScalarWhereInput | NDAScalarWhereInput[]
  }

  export type ContactRequestUncheckedUpdateManyWithoutBuyerNestedInput = {
    create?: XOR<ContactRequestCreateWithoutBuyerInput, ContactRequestUncheckedCreateWithoutBuyerInput> | ContactRequestCreateWithoutBuyerInput[] | ContactRequestUncheckedCreateWithoutBuyerInput[]
    connectOrCreate?: ContactRequestCreateOrConnectWithoutBuyerInput | ContactRequestCreateOrConnectWithoutBuyerInput[]
    upsert?: ContactRequestUpsertWithWhereUniqueWithoutBuyerInput | ContactRequestUpsertWithWhereUniqueWithoutBuyerInput[]
    createMany?: ContactRequestCreateManyBuyerInputEnvelope
    set?: ContactRequestWhereUniqueInput | ContactRequestWhereUniqueInput[]
    disconnect?: ContactRequestWhereUniqueInput | ContactRequestWhereUniqueInput[]
    delete?: ContactRequestWhereUniqueInput | ContactRequestWhereUniqueInput[]
    connect?: ContactRequestWhereUniqueInput | ContactRequestWhereUniqueInput[]
    update?: ContactRequestUpdateWithWhereUniqueWithoutBuyerInput | ContactRequestUpdateWithWhereUniqueWithoutBuyerInput[]
    updateMany?: ContactRequestUpdateManyWithWhereWithoutBuyerInput | ContactRequestUpdateManyWithWhereWithoutBuyerInput[]
    deleteMany?: ContactRequestScalarWhereInput | ContactRequestScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput> | PaymentCreateWithoutUserInput[] | PaymentUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutUserInput | PaymentCreateOrConnectWithoutUserInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutUserInput | PaymentUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PaymentCreateManyUserInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutUserInput | PaymentUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutUserInput | PaymentUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type NewsletterSubscriptionUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<NewsletterSubscriptionCreateWithoutUserInput, NewsletterSubscriptionUncheckedCreateWithoutUserInput>
    connectOrCreate?: NewsletterSubscriptionCreateOrConnectWithoutUserInput
    upsert?: NewsletterSubscriptionUpsertWithoutUserInput
    disconnect?: NewsletterSubscriptionWhereInput | boolean
    delete?: NewsletterSubscriptionWhereInput | boolean
    connect?: NewsletterSubscriptionWhereUniqueInput
    update?: XOR<XOR<NewsletterSubscriptionUpdateToOneWithWhereWithoutUserInput, NewsletterSubscriptionUpdateWithoutUserInput>, NewsletterSubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserCreateNestedOneWithoutProjectsInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    connect?: UserWhereUniqueInput
  }

  export type VerificationChecklistCreateNestedManyWithoutProjectInput = {
    create?: XOR<VerificationChecklistCreateWithoutProjectInput, VerificationChecklistUncheckedCreateWithoutProjectInput> | VerificationChecklistCreateWithoutProjectInput[] | VerificationChecklistUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: VerificationChecklistCreateOrConnectWithoutProjectInput | VerificationChecklistCreateOrConnectWithoutProjectInput[]
    createMany?: VerificationChecklistCreateManyProjectInputEnvelope
    connect?: VerificationChecklistWhereUniqueInput | VerificationChecklistWhereUniqueInput[]
  }

  export type ReactionCreateNestedManyWithoutProjectInput = {
    create?: XOR<ReactionCreateWithoutProjectInput, ReactionUncheckedCreateWithoutProjectInput> | ReactionCreateWithoutProjectInput[] | ReactionUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutProjectInput | ReactionCreateOrConnectWithoutProjectInput[]
    createMany?: ReactionCreateManyProjectInputEnvelope
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
  }

  export type NDACreateNestedManyWithoutProjectInput = {
    create?: XOR<NDACreateWithoutProjectInput, NDAUncheckedCreateWithoutProjectInput> | NDACreateWithoutProjectInput[] | NDAUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: NDACreateOrConnectWithoutProjectInput | NDACreateOrConnectWithoutProjectInput[]
    createMany?: NDACreateManyProjectInputEnvelope
    connect?: NDAWhereUniqueInput | NDAWhereUniqueInput[]
  }

  export type ContactRequestCreateNestedManyWithoutProjectInput = {
    create?: XOR<ContactRequestCreateWithoutProjectInput, ContactRequestUncheckedCreateWithoutProjectInput> | ContactRequestCreateWithoutProjectInput[] | ContactRequestUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ContactRequestCreateOrConnectWithoutProjectInput | ContactRequestCreateOrConnectWithoutProjectInput[]
    createMany?: ContactRequestCreateManyProjectInputEnvelope
    connect?: ContactRequestWhereUniqueInput | ContactRequestWhereUniqueInput[]
  }

  export type DocumentoSensivelCreateNestedManyWithoutProjectInput = {
    create?: XOR<DocumentoSensivelCreateWithoutProjectInput, DocumentoSensivelUncheckedCreateWithoutProjectInput> | DocumentoSensivelCreateWithoutProjectInput[] | DocumentoSensivelUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: DocumentoSensivelCreateOrConnectWithoutProjectInput | DocumentoSensivelCreateOrConnectWithoutProjectInput[]
    createMany?: DocumentoSensivelCreateManyProjectInputEnvelope
    connect?: DocumentoSensivelWhereUniqueInput | DocumentoSensivelWhereUniqueInput[]
  }

  export type EditorialPickCreateNestedManyWithoutProjectInput = {
    create?: XOR<EditorialPickCreateWithoutProjectInput, EditorialPickUncheckedCreateWithoutProjectInput> | EditorialPickCreateWithoutProjectInput[] | EditorialPickUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: EditorialPickCreateOrConnectWithoutProjectInput | EditorialPickCreateOrConnectWithoutProjectInput[]
    createMany?: EditorialPickCreateManyProjectInputEnvelope
    connect?: EditorialPickWhereUniqueInput | EditorialPickWhereUniqueInput[]
  }

  export type PaymentCreateNestedManyWithoutProjectInput = {
    create?: XOR<PaymentCreateWithoutProjectInput, PaymentUncheckedCreateWithoutProjectInput> | PaymentCreateWithoutProjectInput[] | PaymentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutProjectInput | PaymentCreateOrConnectWithoutProjectInput[]
    createMany?: PaymentCreateManyProjectInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type VerificationChecklistUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<VerificationChecklistCreateWithoutProjectInput, VerificationChecklistUncheckedCreateWithoutProjectInput> | VerificationChecklistCreateWithoutProjectInput[] | VerificationChecklistUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: VerificationChecklistCreateOrConnectWithoutProjectInput | VerificationChecklistCreateOrConnectWithoutProjectInput[]
    createMany?: VerificationChecklistCreateManyProjectInputEnvelope
    connect?: VerificationChecklistWhereUniqueInput | VerificationChecklistWhereUniqueInput[]
  }

  export type ReactionUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ReactionCreateWithoutProjectInput, ReactionUncheckedCreateWithoutProjectInput> | ReactionCreateWithoutProjectInput[] | ReactionUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutProjectInput | ReactionCreateOrConnectWithoutProjectInput[]
    createMany?: ReactionCreateManyProjectInputEnvelope
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
  }

  export type NDAUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<NDACreateWithoutProjectInput, NDAUncheckedCreateWithoutProjectInput> | NDACreateWithoutProjectInput[] | NDAUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: NDACreateOrConnectWithoutProjectInput | NDACreateOrConnectWithoutProjectInput[]
    createMany?: NDACreateManyProjectInputEnvelope
    connect?: NDAWhereUniqueInput | NDAWhereUniqueInput[]
  }

  export type ContactRequestUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<ContactRequestCreateWithoutProjectInput, ContactRequestUncheckedCreateWithoutProjectInput> | ContactRequestCreateWithoutProjectInput[] | ContactRequestUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ContactRequestCreateOrConnectWithoutProjectInput | ContactRequestCreateOrConnectWithoutProjectInput[]
    createMany?: ContactRequestCreateManyProjectInputEnvelope
    connect?: ContactRequestWhereUniqueInput | ContactRequestWhereUniqueInput[]
  }

  export type DocumentoSensivelUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<DocumentoSensivelCreateWithoutProjectInput, DocumentoSensivelUncheckedCreateWithoutProjectInput> | DocumentoSensivelCreateWithoutProjectInput[] | DocumentoSensivelUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: DocumentoSensivelCreateOrConnectWithoutProjectInput | DocumentoSensivelCreateOrConnectWithoutProjectInput[]
    createMany?: DocumentoSensivelCreateManyProjectInputEnvelope
    connect?: DocumentoSensivelWhereUniqueInput | DocumentoSensivelWhereUniqueInput[]
  }

  export type EditorialPickUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<EditorialPickCreateWithoutProjectInput, EditorialPickUncheckedCreateWithoutProjectInput> | EditorialPickCreateWithoutProjectInput[] | EditorialPickUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: EditorialPickCreateOrConnectWithoutProjectInput | EditorialPickCreateOrConnectWithoutProjectInput[]
    createMany?: EditorialPickCreateManyProjectInputEnvelope
    connect?: EditorialPickWhereUniqueInput | EditorialPickWhereUniqueInput[]
  }

  export type PaymentUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<PaymentCreateWithoutProjectInput, PaymentUncheckedCreateWithoutProjectInput> | PaymentCreateWithoutProjectInput[] | PaymentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutProjectInput | PaymentCreateOrConnectWithoutProjectInput[]
    createMany?: PaymentCreateManyProjectInputEnvelope
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
  }

  export type EnumSeccaoFieldUpdateOperationsInput = {
    set?: $Enums.Seccao
  }

  export type EnumNivelVerificacaoFieldUpdateOperationsInput = {
    set?: $Enums.NivelVerificacao
  }

  export type EnumEstadoProjectoFieldUpdateOperationsInput = {
    set?: $Enums.EstadoProjecto
  }

  export type UserUpdateOneRequiredWithoutProjectsNestedInput = {
    create?: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutProjectsInput
    upsert?: UserUpsertWithoutProjectsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutProjectsInput, UserUpdateWithoutProjectsInput>, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type VerificationChecklistUpdateManyWithoutProjectNestedInput = {
    create?: XOR<VerificationChecklistCreateWithoutProjectInput, VerificationChecklistUncheckedCreateWithoutProjectInput> | VerificationChecklistCreateWithoutProjectInput[] | VerificationChecklistUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: VerificationChecklistCreateOrConnectWithoutProjectInput | VerificationChecklistCreateOrConnectWithoutProjectInput[]
    upsert?: VerificationChecklistUpsertWithWhereUniqueWithoutProjectInput | VerificationChecklistUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: VerificationChecklistCreateManyProjectInputEnvelope
    set?: VerificationChecklistWhereUniqueInput | VerificationChecklistWhereUniqueInput[]
    disconnect?: VerificationChecklistWhereUniqueInput | VerificationChecklistWhereUniqueInput[]
    delete?: VerificationChecklistWhereUniqueInput | VerificationChecklistWhereUniqueInput[]
    connect?: VerificationChecklistWhereUniqueInput | VerificationChecklistWhereUniqueInput[]
    update?: VerificationChecklistUpdateWithWhereUniqueWithoutProjectInput | VerificationChecklistUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: VerificationChecklistUpdateManyWithWhereWithoutProjectInput | VerificationChecklistUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: VerificationChecklistScalarWhereInput | VerificationChecklistScalarWhereInput[]
  }

  export type ReactionUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ReactionCreateWithoutProjectInput, ReactionUncheckedCreateWithoutProjectInput> | ReactionCreateWithoutProjectInput[] | ReactionUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutProjectInput | ReactionCreateOrConnectWithoutProjectInput[]
    upsert?: ReactionUpsertWithWhereUniqueWithoutProjectInput | ReactionUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ReactionCreateManyProjectInputEnvelope
    set?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    disconnect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    delete?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    update?: ReactionUpdateWithWhereUniqueWithoutProjectInput | ReactionUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ReactionUpdateManyWithWhereWithoutProjectInput | ReactionUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ReactionScalarWhereInput | ReactionScalarWhereInput[]
  }

  export type NDAUpdateManyWithoutProjectNestedInput = {
    create?: XOR<NDACreateWithoutProjectInput, NDAUncheckedCreateWithoutProjectInput> | NDACreateWithoutProjectInput[] | NDAUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: NDACreateOrConnectWithoutProjectInput | NDACreateOrConnectWithoutProjectInput[]
    upsert?: NDAUpsertWithWhereUniqueWithoutProjectInput | NDAUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: NDACreateManyProjectInputEnvelope
    set?: NDAWhereUniqueInput | NDAWhereUniqueInput[]
    disconnect?: NDAWhereUniqueInput | NDAWhereUniqueInput[]
    delete?: NDAWhereUniqueInput | NDAWhereUniqueInput[]
    connect?: NDAWhereUniqueInput | NDAWhereUniqueInput[]
    update?: NDAUpdateWithWhereUniqueWithoutProjectInput | NDAUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: NDAUpdateManyWithWhereWithoutProjectInput | NDAUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: NDAScalarWhereInput | NDAScalarWhereInput[]
  }

  export type ContactRequestUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ContactRequestCreateWithoutProjectInput, ContactRequestUncheckedCreateWithoutProjectInput> | ContactRequestCreateWithoutProjectInput[] | ContactRequestUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ContactRequestCreateOrConnectWithoutProjectInput | ContactRequestCreateOrConnectWithoutProjectInput[]
    upsert?: ContactRequestUpsertWithWhereUniqueWithoutProjectInput | ContactRequestUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ContactRequestCreateManyProjectInputEnvelope
    set?: ContactRequestWhereUniqueInput | ContactRequestWhereUniqueInput[]
    disconnect?: ContactRequestWhereUniqueInput | ContactRequestWhereUniqueInput[]
    delete?: ContactRequestWhereUniqueInput | ContactRequestWhereUniqueInput[]
    connect?: ContactRequestWhereUniqueInput | ContactRequestWhereUniqueInput[]
    update?: ContactRequestUpdateWithWhereUniqueWithoutProjectInput | ContactRequestUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ContactRequestUpdateManyWithWhereWithoutProjectInput | ContactRequestUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ContactRequestScalarWhereInput | ContactRequestScalarWhereInput[]
  }

  export type DocumentoSensivelUpdateManyWithoutProjectNestedInput = {
    create?: XOR<DocumentoSensivelCreateWithoutProjectInput, DocumentoSensivelUncheckedCreateWithoutProjectInput> | DocumentoSensivelCreateWithoutProjectInput[] | DocumentoSensivelUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: DocumentoSensivelCreateOrConnectWithoutProjectInput | DocumentoSensivelCreateOrConnectWithoutProjectInput[]
    upsert?: DocumentoSensivelUpsertWithWhereUniqueWithoutProjectInput | DocumentoSensivelUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: DocumentoSensivelCreateManyProjectInputEnvelope
    set?: DocumentoSensivelWhereUniqueInput | DocumentoSensivelWhereUniqueInput[]
    disconnect?: DocumentoSensivelWhereUniqueInput | DocumentoSensivelWhereUniqueInput[]
    delete?: DocumentoSensivelWhereUniqueInput | DocumentoSensivelWhereUniqueInput[]
    connect?: DocumentoSensivelWhereUniqueInput | DocumentoSensivelWhereUniqueInput[]
    update?: DocumentoSensivelUpdateWithWhereUniqueWithoutProjectInput | DocumentoSensivelUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: DocumentoSensivelUpdateManyWithWhereWithoutProjectInput | DocumentoSensivelUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: DocumentoSensivelScalarWhereInput | DocumentoSensivelScalarWhereInput[]
  }

  export type EditorialPickUpdateManyWithoutProjectNestedInput = {
    create?: XOR<EditorialPickCreateWithoutProjectInput, EditorialPickUncheckedCreateWithoutProjectInput> | EditorialPickCreateWithoutProjectInput[] | EditorialPickUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: EditorialPickCreateOrConnectWithoutProjectInput | EditorialPickCreateOrConnectWithoutProjectInput[]
    upsert?: EditorialPickUpsertWithWhereUniqueWithoutProjectInput | EditorialPickUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: EditorialPickCreateManyProjectInputEnvelope
    set?: EditorialPickWhereUniqueInput | EditorialPickWhereUniqueInput[]
    disconnect?: EditorialPickWhereUniqueInput | EditorialPickWhereUniqueInput[]
    delete?: EditorialPickWhereUniqueInput | EditorialPickWhereUniqueInput[]
    connect?: EditorialPickWhereUniqueInput | EditorialPickWhereUniqueInput[]
    update?: EditorialPickUpdateWithWhereUniqueWithoutProjectInput | EditorialPickUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: EditorialPickUpdateManyWithWhereWithoutProjectInput | EditorialPickUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: EditorialPickScalarWhereInput | EditorialPickScalarWhereInput[]
  }

  export type PaymentUpdateManyWithoutProjectNestedInput = {
    create?: XOR<PaymentCreateWithoutProjectInput, PaymentUncheckedCreateWithoutProjectInput> | PaymentCreateWithoutProjectInput[] | PaymentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutProjectInput | PaymentCreateOrConnectWithoutProjectInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutProjectInput | PaymentUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: PaymentCreateManyProjectInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutProjectInput | PaymentUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutProjectInput | PaymentUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type VerificationChecklistUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<VerificationChecklistCreateWithoutProjectInput, VerificationChecklistUncheckedCreateWithoutProjectInput> | VerificationChecklistCreateWithoutProjectInput[] | VerificationChecklistUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: VerificationChecklistCreateOrConnectWithoutProjectInput | VerificationChecklistCreateOrConnectWithoutProjectInput[]
    upsert?: VerificationChecklistUpsertWithWhereUniqueWithoutProjectInput | VerificationChecklistUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: VerificationChecklistCreateManyProjectInputEnvelope
    set?: VerificationChecklistWhereUniqueInput | VerificationChecklistWhereUniqueInput[]
    disconnect?: VerificationChecklistWhereUniqueInput | VerificationChecklistWhereUniqueInput[]
    delete?: VerificationChecklistWhereUniqueInput | VerificationChecklistWhereUniqueInput[]
    connect?: VerificationChecklistWhereUniqueInput | VerificationChecklistWhereUniqueInput[]
    update?: VerificationChecklistUpdateWithWhereUniqueWithoutProjectInput | VerificationChecklistUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: VerificationChecklistUpdateManyWithWhereWithoutProjectInput | VerificationChecklistUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: VerificationChecklistScalarWhereInput | VerificationChecklistScalarWhereInput[]
  }

  export type ReactionUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ReactionCreateWithoutProjectInput, ReactionUncheckedCreateWithoutProjectInput> | ReactionCreateWithoutProjectInput[] | ReactionUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ReactionCreateOrConnectWithoutProjectInput | ReactionCreateOrConnectWithoutProjectInput[]
    upsert?: ReactionUpsertWithWhereUniqueWithoutProjectInput | ReactionUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ReactionCreateManyProjectInputEnvelope
    set?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    disconnect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    delete?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    connect?: ReactionWhereUniqueInput | ReactionWhereUniqueInput[]
    update?: ReactionUpdateWithWhereUniqueWithoutProjectInput | ReactionUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ReactionUpdateManyWithWhereWithoutProjectInput | ReactionUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ReactionScalarWhereInput | ReactionScalarWhereInput[]
  }

  export type NDAUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<NDACreateWithoutProjectInput, NDAUncheckedCreateWithoutProjectInput> | NDACreateWithoutProjectInput[] | NDAUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: NDACreateOrConnectWithoutProjectInput | NDACreateOrConnectWithoutProjectInput[]
    upsert?: NDAUpsertWithWhereUniqueWithoutProjectInput | NDAUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: NDACreateManyProjectInputEnvelope
    set?: NDAWhereUniqueInput | NDAWhereUniqueInput[]
    disconnect?: NDAWhereUniqueInput | NDAWhereUniqueInput[]
    delete?: NDAWhereUniqueInput | NDAWhereUniqueInput[]
    connect?: NDAWhereUniqueInput | NDAWhereUniqueInput[]
    update?: NDAUpdateWithWhereUniqueWithoutProjectInput | NDAUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: NDAUpdateManyWithWhereWithoutProjectInput | NDAUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: NDAScalarWhereInput | NDAScalarWhereInput[]
  }

  export type ContactRequestUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<ContactRequestCreateWithoutProjectInput, ContactRequestUncheckedCreateWithoutProjectInput> | ContactRequestCreateWithoutProjectInput[] | ContactRequestUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: ContactRequestCreateOrConnectWithoutProjectInput | ContactRequestCreateOrConnectWithoutProjectInput[]
    upsert?: ContactRequestUpsertWithWhereUniqueWithoutProjectInput | ContactRequestUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: ContactRequestCreateManyProjectInputEnvelope
    set?: ContactRequestWhereUniqueInput | ContactRequestWhereUniqueInput[]
    disconnect?: ContactRequestWhereUniqueInput | ContactRequestWhereUniqueInput[]
    delete?: ContactRequestWhereUniqueInput | ContactRequestWhereUniqueInput[]
    connect?: ContactRequestWhereUniqueInput | ContactRequestWhereUniqueInput[]
    update?: ContactRequestUpdateWithWhereUniqueWithoutProjectInput | ContactRequestUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: ContactRequestUpdateManyWithWhereWithoutProjectInput | ContactRequestUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: ContactRequestScalarWhereInput | ContactRequestScalarWhereInput[]
  }

  export type DocumentoSensivelUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<DocumentoSensivelCreateWithoutProjectInput, DocumentoSensivelUncheckedCreateWithoutProjectInput> | DocumentoSensivelCreateWithoutProjectInput[] | DocumentoSensivelUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: DocumentoSensivelCreateOrConnectWithoutProjectInput | DocumentoSensivelCreateOrConnectWithoutProjectInput[]
    upsert?: DocumentoSensivelUpsertWithWhereUniqueWithoutProjectInput | DocumentoSensivelUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: DocumentoSensivelCreateManyProjectInputEnvelope
    set?: DocumentoSensivelWhereUniqueInput | DocumentoSensivelWhereUniqueInput[]
    disconnect?: DocumentoSensivelWhereUniqueInput | DocumentoSensivelWhereUniqueInput[]
    delete?: DocumentoSensivelWhereUniqueInput | DocumentoSensivelWhereUniqueInput[]
    connect?: DocumentoSensivelWhereUniqueInput | DocumentoSensivelWhereUniqueInput[]
    update?: DocumentoSensivelUpdateWithWhereUniqueWithoutProjectInput | DocumentoSensivelUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: DocumentoSensivelUpdateManyWithWhereWithoutProjectInput | DocumentoSensivelUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: DocumentoSensivelScalarWhereInput | DocumentoSensivelScalarWhereInput[]
  }

  export type EditorialPickUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<EditorialPickCreateWithoutProjectInput, EditorialPickUncheckedCreateWithoutProjectInput> | EditorialPickCreateWithoutProjectInput[] | EditorialPickUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: EditorialPickCreateOrConnectWithoutProjectInput | EditorialPickCreateOrConnectWithoutProjectInput[]
    upsert?: EditorialPickUpsertWithWhereUniqueWithoutProjectInput | EditorialPickUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: EditorialPickCreateManyProjectInputEnvelope
    set?: EditorialPickWhereUniqueInput | EditorialPickWhereUniqueInput[]
    disconnect?: EditorialPickWhereUniqueInput | EditorialPickWhereUniqueInput[]
    delete?: EditorialPickWhereUniqueInput | EditorialPickWhereUniqueInput[]
    connect?: EditorialPickWhereUniqueInput | EditorialPickWhereUniqueInput[]
    update?: EditorialPickUpdateWithWhereUniqueWithoutProjectInput | EditorialPickUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: EditorialPickUpdateManyWithWhereWithoutProjectInput | EditorialPickUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: EditorialPickScalarWhereInput | EditorialPickScalarWhereInput[]
  }

  export type PaymentUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<PaymentCreateWithoutProjectInput, PaymentUncheckedCreateWithoutProjectInput> | PaymentCreateWithoutProjectInput[] | PaymentUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: PaymentCreateOrConnectWithoutProjectInput | PaymentCreateOrConnectWithoutProjectInput[]
    upsert?: PaymentUpsertWithWhereUniqueWithoutProjectInput | PaymentUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: PaymentCreateManyProjectInputEnvelope
    set?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    disconnect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    delete?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    connect?: PaymentWhereUniqueInput | PaymentWhereUniqueInput[]
    update?: PaymentUpdateWithWhereUniqueWithoutProjectInput | PaymentUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: PaymentUpdateManyWithWhereWithoutProjectInput | PaymentUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
  }

  export type ProjectCreateNestedOneWithoutChecklistsInput = {
    create?: XOR<ProjectCreateWithoutChecklistsInput, ProjectUncheckedCreateWithoutChecklistsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutChecklistsInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutChecklistsNestedInput = {
    create?: XOR<ProjectCreateWithoutChecklistsInput, ProjectUncheckedCreateWithoutChecklistsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutChecklistsInput
    upsert?: ProjectUpsertWithoutChecklistsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutChecklistsInput, ProjectUpdateWithoutChecklistsInput>, ProjectUncheckedUpdateWithoutChecklistsInput>
  }

  export type ProjectCreateNestedOneWithoutReactionsInput = {
    create?: XOR<ProjectCreateWithoutReactionsInput, ProjectUncheckedCreateWithoutReactionsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutReactionsInput
    connect?: ProjectWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutReactionsInput = {
    create?: XOR<UserCreateWithoutReactionsInput, UserUncheckedCreateWithoutReactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReactionsInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutReactionsNestedInput = {
    create?: XOR<ProjectCreateWithoutReactionsInput, ProjectUncheckedCreateWithoutReactionsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutReactionsInput
    upsert?: ProjectUpsertWithoutReactionsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutReactionsInput, ProjectUpdateWithoutReactionsInput>, ProjectUncheckedUpdateWithoutReactionsInput>
  }

  export type UserUpdateOneRequiredWithoutReactionsNestedInput = {
    create?: XOR<UserCreateWithoutReactionsInput, UserUncheckedCreateWithoutReactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReactionsInput
    upsert?: UserUpsertWithoutReactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReactionsInput, UserUpdateWithoutReactionsInput>, UserUncheckedUpdateWithoutReactionsInput>
  }

  export type ProjectCreateNestedOneWithoutNdasInput = {
    create?: XOR<ProjectCreateWithoutNdasInput, ProjectUncheckedCreateWithoutNdasInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutNdasInput
    connect?: ProjectWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutNdasComoCompradorInput = {
    create?: XOR<UserCreateWithoutNdasComoCompradorInput, UserUncheckedCreateWithoutNdasComoCompradorInput>
    connectOrCreate?: UserCreateOrConnectWithoutNdasComoCompradorInput
    connect?: UserWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ProjectUpdateOneRequiredWithoutNdasNestedInput = {
    create?: XOR<ProjectCreateWithoutNdasInput, ProjectUncheckedCreateWithoutNdasInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutNdasInput
    upsert?: ProjectUpsertWithoutNdasInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutNdasInput, ProjectUpdateWithoutNdasInput>, ProjectUncheckedUpdateWithoutNdasInput>
  }

  export type UserUpdateOneRequiredWithoutNdasComoCompradorNestedInput = {
    create?: XOR<UserCreateWithoutNdasComoCompradorInput, UserUncheckedCreateWithoutNdasComoCompradorInput>
    connectOrCreate?: UserCreateOrConnectWithoutNdasComoCompradorInput
    upsert?: UserUpsertWithoutNdasComoCompradorInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNdasComoCompradorInput, UserUpdateWithoutNdasComoCompradorInput>, UserUncheckedUpdateWithoutNdasComoCompradorInput>
  }

  export type ProjectCreateNestedOneWithoutContactRequestsInput = {
    create?: XOR<ProjectCreateWithoutContactRequestsInput, ProjectUncheckedCreateWithoutContactRequestsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutContactRequestsInput
    connect?: ProjectWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutContactRequestsInput = {
    create?: XOR<UserCreateWithoutContactRequestsInput, UserUncheckedCreateWithoutContactRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutContactRequestsInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutContactRequestsNestedInput = {
    create?: XOR<ProjectCreateWithoutContactRequestsInput, ProjectUncheckedCreateWithoutContactRequestsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutContactRequestsInput
    upsert?: ProjectUpsertWithoutContactRequestsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutContactRequestsInput, ProjectUpdateWithoutContactRequestsInput>, ProjectUncheckedUpdateWithoutContactRequestsInput>
  }

  export type UserUpdateOneRequiredWithoutContactRequestsNestedInput = {
    create?: XOR<UserCreateWithoutContactRequestsInput, UserUncheckedCreateWithoutContactRequestsInput>
    connectOrCreate?: UserCreateOrConnectWithoutContactRequestsInput
    upsert?: UserUpsertWithoutContactRequestsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutContactRequestsInput, UserUpdateWithoutContactRequestsInput>, UserUncheckedUpdateWithoutContactRequestsInput>
  }

  export type ProjectCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<ProjectCreateWithoutPaymentsInput, ProjectUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutPaymentsInput
    connect?: ProjectWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutPaymentsInput = {
    create?: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectUpdateOneWithoutPaymentsNestedInput = {
    create?: XOR<ProjectCreateWithoutPaymentsInput, ProjectUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutPaymentsInput
    upsert?: ProjectUpsertWithoutPaymentsInput
    disconnect?: ProjectWhereInput | boolean
    delete?: ProjectWhereInput | boolean
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutPaymentsInput, ProjectUpdateWithoutPaymentsInput>, ProjectUncheckedUpdateWithoutPaymentsInput>
  }

  export type UserUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutPaymentsInput
    upsert?: UserUpsertWithoutPaymentsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutPaymentsInput, UserUpdateWithoutPaymentsInput>, UserUncheckedUpdateWithoutPaymentsInput>
  }

  export type ProjectCreateNestedOneWithoutDocumentosInput = {
    create?: XOR<ProjectCreateWithoutDocumentosInput, ProjectUncheckedCreateWithoutDocumentosInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutDocumentosInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutDocumentosNestedInput = {
    create?: XOR<ProjectCreateWithoutDocumentosInput, ProjectUncheckedCreateWithoutDocumentosInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutDocumentosInput
    upsert?: ProjectUpsertWithoutDocumentosInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutDocumentosInput, ProjectUpdateWithoutDocumentosInput>, ProjectUncheckedUpdateWithoutDocumentosInput>
  }

  export type UserCreateNestedOneWithoutNewsletterSubscriptionInput = {
    create?: XOR<UserCreateWithoutNewsletterSubscriptionInput, UserUncheckedCreateWithoutNewsletterSubscriptionInput>
    connectOrCreate?: UserCreateOrConnectWithoutNewsletterSubscriptionInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNewsletterSubscriptionNestedInput = {
    create?: XOR<UserCreateWithoutNewsletterSubscriptionInput, UserUncheckedCreateWithoutNewsletterSubscriptionInput>
    connectOrCreate?: UserCreateOrConnectWithoutNewsletterSubscriptionInput
    upsert?: UserUpsertWithoutNewsletterSubscriptionInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNewsletterSubscriptionInput, UserUpdateWithoutNewsletterSubscriptionInput>, UserUncheckedUpdateWithoutNewsletterSubscriptionInput>
  }

  export type ProjectCreateNestedOneWithoutEditorialPicksInput = {
    create?: XOR<ProjectCreateWithoutEditorialPicksInput, ProjectUncheckedCreateWithoutEditorialPicksInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutEditorialPicksInput
    connect?: ProjectWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProjectUpdateOneRequiredWithoutEditorialPicksNestedInput = {
    create?: XOR<ProjectCreateWithoutEditorialPicksInput, ProjectUncheckedCreateWithoutEditorialPicksInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutEditorialPicksInput
    upsert?: ProjectUpsertWithoutEditorialPicksInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutEditorialPicksInput, ProjectUpdateWithoutEditorialPicksInput>, ProjectUncheckedUpdateWithoutEditorialPicksInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedEnumKycStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.KycStatus | EnumKycStatusFieldRefInput<$PrismaModel>
    in?: $Enums.KycStatus[]
    notIn?: $Enums.KycStatus[]
    not?: NestedEnumKycStatusFilter<$PrismaModel> | $Enums.KycStatus
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[]
    notIn?: $Enums.Role[]
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedEnumKycStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.KycStatus | EnumKycStatusFieldRefInput<$PrismaModel>
    in?: $Enums.KycStatus[]
    notIn?: $Enums.KycStatus[]
    not?: NestedEnumKycStatusWithAggregatesFilter<$PrismaModel> | $Enums.KycStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumKycStatusFilter<$PrismaModel>
    _max?: NestedEnumKycStatusFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumSeccaoFilter<$PrismaModel = never> = {
    equals?: $Enums.Seccao | EnumSeccaoFieldRefInput<$PrismaModel>
    in?: $Enums.Seccao[]
    notIn?: $Enums.Seccao[]
    not?: NestedEnumSeccaoFilter<$PrismaModel> | $Enums.Seccao
  }

  export type NestedEnumNivelVerificacaoFilter<$PrismaModel = never> = {
    equals?: $Enums.NivelVerificacao | EnumNivelVerificacaoFieldRefInput<$PrismaModel>
    in?: $Enums.NivelVerificacao[]
    notIn?: $Enums.NivelVerificacao[]
    not?: NestedEnumNivelVerificacaoFilter<$PrismaModel> | $Enums.NivelVerificacao
  }

  export type NestedEnumEstadoProjectoFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoProjecto | EnumEstadoProjectoFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoProjecto[]
    notIn?: $Enums.EstadoProjecto[]
    not?: NestedEnumEstadoProjectoFilter<$PrismaModel> | $Enums.EstadoProjecto
  }

  export type NestedEnumSeccaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Seccao | EnumSeccaoFieldRefInput<$PrismaModel>
    in?: $Enums.Seccao[]
    notIn?: $Enums.Seccao[]
    not?: NestedEnumSeccaoWithAggregatesFilter<$PrismaModel> | $Enums.Seccao
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSeccaoFilter<$PrismaModel>
    _max?: NestedEnumSeccaoFilter<$PrismaModel>
  }

  export type NestedEnumNivelVerificacaoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.NivelVerificacao | EnumNivelVerificacaoFieldRefInput<$PrismaModel>
    in?: $Enums.NivelVerificacao[]
    notIn?: $Enums.NivelVerificacao[]
    not?: NestedEnumNivelVerificacaoWithAggregatesFilter<$PrismaModel> | $Enums.NivelVerificacao
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumNivelVerificacaoFilter<$PrismaModel>
    _max?: NestedEnumNivelVerificacaoFilter<$PrismaModel>
  }

  export type NestedEnumEstadoProjectoWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.EstadoProjecto | EnumEstadoProjectoFieldRefInput<$PrismaModel>
    in?: $Enums.EstadoProjecto[]
    notIn?: $Enums.EstadoProjecto[]
    not?: NestedEnumEstadoProjectoWithAggregatesFilter<$PrismaModel> | $Enums.EstadoProjecto
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumEstadoProjectoFilter<$PrismaModel>
    _max?: NestedEnumEstadoProjectoFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
  }

  export type ProjectCreateWithoutOwnerInput = {
    id?: string
    seccao: $Enums.Seccao
    titulo: string
    descricao: string
    categoria: string
    sector: string
    localizacao: string
    nivelVerificacao?: $Enums.NivelVerificacao
    estado?: $Enums.EstadoProjecto
    boostActivoAte?: Date | string | null
    criadoEm?: Date | string
    checklists?: VerificationChecklistCreateNestedManyWithoutProjectInput
    reactions?: ReactionCreateNestedManyWithoutProjectInput
    ndas?: NDACreateNestedManyWithoutProjectInput
    contactRequests?: ContactRequestCreateNestedManyWithoutProjectInput
    documentos?: DocumentoSensivelCreateNestedManyWithoutProjectInput
    editorialPicks?: EditorialPickCreateNestedManyWithoutProjectInput
    payments?: PaymentCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutOwnerInput = {
    id?: string
    seccao: $Enums.Seccao
    titulo: string
    descricao: string
    categoria: string
    sector: string
    localizacao: string
    nivelVerificacao?: $Enums.NivelVerificacao
    estado?: $Enums.EstadoProjecto
    boostActivoAte?: Date | string | null
    criadoEm?: Date | string
    checklists?: VerificationChecklistUncheckedCreateNestedManyWithoutProjectInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutProjectInput
    ndas?: NDAUncheckedCreateNestedManyWithoutProjectInput
    contactRequests?: ContactRequestUncheckedCreateNestedManyWithoutProjectInput
    documentos?: DocumentoSensivelUncheckedCreateNestedManyWithoutProjectInput
    editorialPicks?: EditorialPickUncheckedCreateNestedManyWithoutProjectInput
    payments?: PaymentUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutOwnerInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput>
  }

  export type ProjectCreateManyOwnerInputEnvelope = {
    data: ProjectCreateManyOwnerInput | ProjectCreateManyOwnerInput[]
  }

  export type ReactionCreateWithoutUserInput = {
    id?: string
    tipo?: string
    criadoEm?: Date | string
    project: ProjectCreateNestedOneWithoutReactionsInput
  }

  export type ReactionUncheckedCreateWithoutUserInput = {
    id?: string
    projectId: string
    tipo?: string
    criadoEm?: Date | string
  }

  export type ReactionCreateOrConnectWithoutUserInput = {
    where: ReactionWhereUniqueInput
    create: XOR<ReactionCreateWithoutUserInput, ReactionUncheckedCreateWithoutUserInput>
  }

  export type ReactionCreateManyUserInputEnvelope = {
    data: ReactionCreateManyUserInput | ReactionCreateManyUserInput[]
  }

  export type NDACreateWithoutBuyerInput = {
    id?: string
    aceiteEm?: Date | string
    ip: string
    pago?: boolean
    criadoEm?: Date | string
    project: ProjectCreateNestedOneWithoutNdasInput
  }

  export type NDAUncheckedCreateWithoutBuyerInput = {
    id?: string
    projectId: string
    aceiteEm?: Date | string
    ip: string
    pago?: boolean
    criadoEm?: Date | string
  }

  export type NDACreateOrConnectWithoutBuyerInput = {
    where: NDAWhereUniqueInput
    create: XOR<NDACreateWithoutBuyerInput, NDAUncheckedCreateWithoutBuyerInput>
  }

  export type NDACreateManyBuyerInputEnvelope = {
    data: NDACreateManyBuyerInput | NDACreateManyBuyerInput[]
  }

  export type ContactRequestCreateWithoutBuyerInput = {
    id?: string
    estado?: string
    criadoEm?: Date | string
    project: ProjectCreateNestedOneWithoutContactRequestsInput
  }

  export type ContactRequestUncheckedCreateWithoutBuyerInput = {
    id?: string
    projectId: string
    estado?: string
    criadoEm?: Date | string
  }

  export type ContactRequestCreateOrConnectWithoutBuyerInput = {
    where: ContactRequestWhereUniqueInput
    create: XOR<ContactRequestCreateWithoutBuyerInput, ContactRequestUncheckedCreateWithoutBuyerInput>
  }

  export type ContactRequestCreateManyBuyerInputEnvelope = {
    data: ContactRequestCreateManyBuyerInput | ContactRequestCreateManyBuyerInput[]
  }

  export type PaymentCreateWithoutUserInput = {
    id?: string
    tipo: string
    metodo: string
    comprovativoUrl?: string | null
    estado?: string
    confirmadoPor?: string | null
    criadoEm?: Date | string
    project?: ProjectCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutUserInput = {
    id?: string
    tipo: string
    projectId?: string | null
    metodo: string
    comprovativoUrl?: string | null
    estado?: string
    confirmadoPor?: string | null
    criadoEm?: Date | string
  }

  export type PaymentCreateOrConnectWithoutUserInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentCreateManyUserInputEnvelope = {
    data: PaymentCreateManyUserInput | PaymentCreateManyUserInput[]
  }

  export type NewsletterSubscriptionCreateWithoutUserInput = {
    id?: string
    estado?: string
    criadoEm?: Date | string
  }

  export type NewsletterSubscriptionUncheckedCreateWithoutUserInput = {
    id?: string
    estado?: string
    criadoEm?: Date | string
  }

  export type NewsletterSubscriptionCreateOrConnectWithoutUserInput = {
    where: NewsletterSubscriptionWhereUniqueInput
    create: XOR<NewsletterSubscriptionCreateWithoutUserInput, NewsletterSubscriptionUncheckedCreateWithoutUserInput>
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type ProjectUpsertWithWhereUniqueWithoutOwnerInput = {
    where: ProjectWhereUniqueInput
    update: XOR<ProjectUpdateWithoutOwnerInput, ProjectUncheckedUpdateWithoutOwnerInput>
    create: XOR<ProjectCreateWithoutOwnerInput, ProjectUncheckedCreateWithoutOwnerInput>
  }

  export type ProjectUpdateWithWhereUniqueWithoutOwnerInput = {
    where: ProjectWhereUniqueInput
    data: XOR<ProjectUpdateWithoutOwnerInput, ProjectUncheckedUpdateWithoutOwnerInput>
  }

  export type ProjectUpdateManyWithWhereWithoutOwnerInput = {
    where: ProjectScalarWhereInput
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyWithoutOwnerInput>
  }

  export type ProjectScalarWhereInput = {
    AND?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    OR?: ProjectScalarWhereInput[]
    NOT?: ProjectScalarWhereInput | ProjectScalarWhereInput[]
    id?: StringFilter<"Project"> | string
    ownerId?: StringFilter<"Project"> | string
    seccao?: EnumSeccaoFilter<"Project"> | $Enums.Seccao
    titulo?: StringFilter<"Project"> | string
    descricao?: StringFilter<"Project"> | string
    categoria?: StringFilter<"Project"> | string
    sector?: StringFilter<"Project"> | string
    localizacao?: StringFilter<"Project"> | string
    nivelVerificacao?: EnumNivelVerificacaoFilter<"Project"> | $Enums.NivelVerificacao
    estado?: EnumEstadoProjectoFilter<"Project"> | $Enums.EstadoProjecto
    boostActivoAte?: DateTimeNullableFilter<"Project"> | Date | string | null
    criadoEm?: DateTimeFilter<"Project"> | Date | string
  }

  export type ReactionUpsertWithWhereUniqueWithoutUserInput = {
    where: ReactionWhereUniqueInput
    update: XOR<ReactionUpdateWithoutUserInput, ReactionUncheckedUpdateWithoutUserInput>
    create: XOR<ReactionCreateWithoutUserInput, ReactionUncheckedCreateWithoutUserInput>
  }

  export type ReactionUpdateWithWhereUniqueWithoutUserInput = {
    where: ReactionWhereUniqueInput
    data: XOR<ReactionUpdateWithoutUserInput, ReactionUncheckedUpdateWithoutUserInput>
  }

  export type ReactionUpdateManyWithWhereWithoutUserInput = {
    where: ReactionScalarWhereInput
    data: XOR<ReactionUpdateManyMutationInput, ReactionUncheckedUpdateManyWithoutUserInput>
  }

  export type ReactionScalarWhereInput = {
    AND?: ReactionScalarWhereInput | ReactionScalarWhereInput[]
    OR?: ReactionScalarWhereInput[]
    NOT?: ReactionScalarWhereInput | ReactionScalarWhereInput[]
    id?: StringFilter<"Reaction"> | string
    projectId?: StringFilter<"Reaction"> | string
    userId?: StringFilter<"Reaction"> | string
    tipo?: StringFilter<"Reaction"> | string
    criadoEm?: DateTimeFilter<"Reaction"> | Date | string
  }

  export type NDAUpsertWithWhereUniqueWithoutBuyerInput = {
    where: NDAWhereUniqueInput
    update: XOR<NDAUpdateWithoutBuyerInput, NDAUncheckedUpdateWithoutBuyerInput>
    create: XOR<NDACreateWithoutBuyerInput, NDAUncheckedCreateWithoutBuyerInput>
  }

  export type NDAUpdateWithWhereUniqueWithoutBuyerInput = {
    where: NDAWhereUniqueInput
    data: XOR<NDAUpdateWithoutBuyerInput, NDAUncheckedUpdateWithoutBuyerInput>
  }

  export type NDAUpdateManyWithWhereWithoutBuyerInput = {
    where: NDAScalarWhereInput
    data: XOR<NDAUpdateManyMutationInput, NDAUncheckedUpdateManyWithoutBuyerInput>
  }

  export type NDAScalarWhereInput = {
    AND?: NDAScalarWhereInput | NDAScalarWhereInput[]
    OR?: NDAScalarWhereInput[]
    NOT?: NDAScalarWhereInput | NDAScalarWhereInput[]
    id?: StringFilter<"NDA"> | string
    projectId?: StringFilter<"NDA"> | string
    buyerId?: StringFilter<"NDA"> | string
    aceiteEm?: DateTimeFilter<"NDA"> | Date | string
    ip?: StringFilter<"NDA"> | string
    pago?: BoolFilter<"NDA"> | boolean
    criadoEm?: DateTimeFilter<"NDA"> | Date | string
  }

  export type ContactRequestUpsertWithWhereUniqueWithoutBuyerInput = {
    where: ContactRequestWhereUniqueInput
    update: XOR<ContactRequestUpdateWithoutBuyerInput, ContactRequestUncheckedUpdateWithoutBuyerInput>
    create: XOR<ContactRequestCreateWithoutBuyerInput, ContactRequestUncheckedCreateWithoutBuyerInput>
  }

  export type ContactRequestUpdateWithWhereUniqueWithoutBuyerInput = {
    where: ContactRequestWhereUniqueInput
    data: XOR<ContactRequestUpdateWithoutBuyerInput, ContactRequestUncheckedUpdateWithoutBuyerInput>
  }

  export type ContactRequestUpdateManyWithWhereWithoutBuyerInput = {
    where: ContactRequestScalarWhereInput
    data: XOR<ContactRequestUpdateManyMutationInput, ContactRequestUncheckedUpdateManyWithoutBuyerInput>
  }

  export type ContactRequestScalarWhereInput = {
    AND?: ContactRequestScalarWhereInput | ContactRequestScalarWhereInput[]
    OR?: ContactRequestScalarWhereInput[]
    NOT?: ContactRequestScalarWhereInput | ContactRequestScalarWhereInput[]
    id?: StringFilter<"ContactRequest"> | string
    projectId?: StringFilter<"ContactRequest"> | string
    buyerId?: StringFilter<"ContactRequest"> | string
    estado?: StringFilter<"ContactRequest"> | string
    criadoEm?: DateTimeFilter<"ContactRequest"> | Date | string
  }

  export type PaymentUpsertWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
    create: XOR<PaymentCreateWithoutUserInput, PaymentUncheckedCreateWithoutUserInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutUserInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutUserInput, PaymentUncheckedUpdateWithoutUserInput>
  }

  export type PaymentUpdateManyWithWhereWithoutUserInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutUserInput>
  }

  export type PaymentScalarWhereInput = {
    AND?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    OR?: PaymentScalarWhereInput[]
    NOT?: PaymentScalarWhereInput | PaymentScalarWhereInput[]
    id?: StringFilter<"Payment"> | string
    tipo?: StringFilter<"Payment"> | string
    projectId?: StringNullableFilter<"Payment"> | string | null
    userId?: StringFilter<"Payment"> | string
    metodo?: StringFilter<"Payment"> | string
    comprovativoUrl?: StringNullableFilter<"Payment"> | string | null
    estado?: StringFilter<"Payment"> | string
    confirmadoPor?: StringNullableFilter<"Payment"> | string | null
    criadoEm?: DateTimeFilter<"Payment"> | Date | string
  }

  export type NewsletterSubscriptionUpsertWithoutUserInput = {
    update: XOR<NewsletterSubscriptionUpdateWithoutUserInput, NewsletterSubscriptionUncheckedUpdateWithoutUserInput>
    create: XOR<NewsletterSubscriptionCreateWithoutUserInput, NewsletterSubscriptionUncheckedCreateWithoutUserInput>
    where?: NewsletterSubscriptionWhereInput
  }

  export type NewsletterSubscriptionUpdateToOneWithWhereWithoutUserInput = {
    where?: NewsletterSubscriptionWhereInput
    data: XOR<NewsletterSubscriptionUpdateWithoutUserInput, NewsletterSubscriptionUncheckedUpdateWithoutUserInput>
  }

  export type NewsletterSubscriptionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NewsletterSubscriptionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    passwordHash?: string | null
    role?: $Enums.Role
    telefone?: string | null
    biNuit?: string | null
    kycStatus?: $Enums.KycStatus
    criadoEm?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutOwnerInput
    reactions?: ReactionCreateNestedManyWithoutUserInput
    ndasComoComprador?: NDACreateNestedManyWithoutBuyerInput
    contactRequests?: ContactRequestCreateNestedManyWithoutBuyerInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    newsletterSubscription?: NewsletterSubscriptionCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    passwordHash?: string | null
    role?: $Enums.Role
    telefone?: string | null
    biNuit?: string | null
    kycStatus?: $Enums.KycStatus
    criadoEm?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutUserInput
    ndasComoComprador?: NDAUncheckedCreateNestedManyWithoutBuyerInput
    contactRequests?: ContactRequestUncheckedCreateNestedManyWithoutBuyerInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    newsletterSubscription?: NewsletterSubscriptionUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    biNuit?: NullableStringFieldUpdateOperationsInput | string | null
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutOwnerNestedInput
    reactions?: ReactionUpdateManyWithoutUserNestedInput
    ndasComoComprador?: NDAUpdateManyWithoutBuyerNestedInput
    contactRequests?: ContactRequestUpdateManyWithoutBuyerNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    newsletterSubscription?: NewsletterSubscriptionUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    biNuit?: NullableStringFieldUpdateOperationsInput | string | null
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutUserNestedInput
    ndasComoComprador?: NDAUncheckedUpdateManyWithoutBuyerNestedInput
    contactRequests?: ContactRequestUncheckedUpdateManyWithoutBuyerNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    newsletterSubscription?: NewsletterSubscriptionUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    passwordHash?: string | null
    role?: $Enums.Role
    telefone?: string | null
    biNuit?: string | null
    kycStatus?: $Enums.KycStatus
    criadoEm?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutOwnerInput
    reactions?: ReactionCreateNestedManyWithoutUserInput
    ndasComoComprador?: NDACreateNestedManyWithoutBuyerInput
    contactRequests?: ContactRequestCreateNestedManyWithoutBuyerInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    newsletterSubscription?: NewsletterSubscriptionCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    passwordHash?: string | null
    role?: $Enums.Role
    telefone?: string | null
    biNuit?: string | null
    kycStatus?: $Enums.KycStatus
    criadoEm?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutUserInput
    ndasComoComprador?: NDAUncheckedCreateNestedManyWithoutBuyerInput
    contactRequests?: ContactRequestUncheckedCreateNestedManyWithoutBuyerInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    newsletterSubscription?: NewsletterSubscriptionUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    biNuit?: NullableStringFieldUpdateOperationsInput | string | null
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutOwnerNestedInput
    reactions?: ReactionUpdateManyWithoutUserNestedInput
    ndasComoComprador?: NDAUpdateManyWithoutBuyerNestedInput
    contactRequests?: ContactRequestUpdateManyWithoutBuyerNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    newsletterSubscription?: NewsletterSubscriptionUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    biNuit?: NullableStringFieldUpdateOperationsInput | string | null
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutUserNestedInput
    ndasComoComprador?: NDAUncheckedUpdateManyWithoutBuyerNestedInput
    contactRequests?: ContactRequestUncheckedUpdateManyWithoutBuyerNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    newsletterSubscription?: NewsletterSubscriptionUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutProjectsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    passwordHash?: string | null
    role?: $Enums.Role
    telefone?: string | null
    biNuit?: string | null
    kycStatus?: $Enums.KycStatus
    criadoEm?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    reactions?: ReactionCreateNestedManyWithoutUserInput
    ndasComoComprador?: NDACreateNestedManyWithoutBuyerInput
    contactRequests?: ContactRequestCreateNestedManyWithoutBuyerInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    newsletterSubscription?: NewsletterSubscriptionCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutProjectsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    passwordHash?: string | null
    role?: $Enums.Role
    telefone?: string | null
    biNuit?: string | null
    kycStatus?: $Enums.KycStatus
    criadoEm?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutUserInput
    ndasComoComprador?: NDAUncheckedCreateNestedManyWithoutBuyerInput
    contactRequests?: ContactRequestUncheckedCreateNestedManyWithoutBuyerInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    newsletterSubscription?: NewsletterSubscriptionUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutProjectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
  }

  export type VerificationChecklistCreateWithoutProjectInput = {
    id?: string
    tipo: string
    respostasJson: string
    documentosUrls: string
    estado?: string
  }

  export type VerificationChecklistUncheckedCreateWithoutProjectInput = {
    id?: string
    tipo: string
    respostasJson: string
    documentosUrls: string
    estado?: string
  }

  export type VerificationChecklistCreateOrConnectWithoutProjectInput = {
    where: VerificationChecklistWhereUniqueInput
    create: XOR<VerificationChecklistCreateWithoutProjectInput, VerificationChecklistUncheckedCreateWithoutProjectInput>
  }

  export type VerificationChecklistCreateManyProjectInputEnvelope = {
    data: VerificationChecklistCreateManyProjectInput | VerificationChecklistCreateManyProjectInput[]
  }

  export type ReactionCreateWithoutProjectInput = {
    id?: string
    tipo?: string
    criadoEm?: Date | string
    user: UserCreateNestedOneWithoutReactionsInput
  }

  export type ReactionUncheckedCreateWithoutProjectInput = {
    id?: string
    userId: string
    tipo?: string
    criadoEm?: Date | string
  }

  export type ReactionCreateOrConnectWithoutProjectInput = {
    where: ReactionWhereUniqueInput
    create: XOR<ReactionCreateWithoutProjectInput, ReactionUncheckedCreateWithoutProjectInput>
  }

  export type ReactionCreateManyProjectInputEnvelope = {
    data: ReactionCreateManyProjectInput | ReactionCreateManyProjectInput[]
  }

  export type NDACreateWithoutProjectInput = {
    id?: string
    aceiteEm?: Date | string
    ip: string
    pago?: boolean
    criadoEm?: Date | string
    buyer: UserCreateNestedOneWithoutNdasComoCompradorInput
  }

  export type NDAUncheckedCreateWithoutProjectInput = {
    id?: string
    buyerId: string
    aceiteEm?: Date | string
    ip: string
    pago?: boolean
    criadoEm?: Date | string
  }

  export type NDACreateOrConnectWithoutProjectInput = {
    where: NDAWhereUniqueInput
    create: XOR<NDACreateWithoutProjectInput, NDAUncheckedCreateWithoutProjectInput>
  }

  export type NDACreateManyProjectInputEnvelope = {
    data: NDACreateManyProjectInput | NDACreateManyProjectInput[]
  }

  export type ContactRequestCreateWithoutProjectInput = {
    id?: string
    estado?: string
    criadoEm?: Date | string
    buyer: UserCreateNestedOneWithoutContactRequestsInput
  }

  export type ContactRequestUncheckedCreateWithoutProjectInput = {
    id?: string
    buyerId: string
    estado?: string
    criadoEm?: Date | string
  }

  export type ContactRequestCreateOrConnectWithoutProjectInput = {
    where: ContactRequestWhereUniqueInput
    create: XOR<ContactRequestCreateWithoutProjectInput, ContactRequestUncheckedCreateWithoutProjectInput>
  }

  export type ContactRequestCreateManyProjectInputEnvelope = {
    data: ContactRequestCreateManyProjectInput | ContactRequestCreateManyProjectInput[]
  }

  export type DocumentoSensivelCreateWithoutProjectInput = {
    id?: string
    tipo: string
    urlEncriptado: string
    expiraEm?: Date | string | null
    criadoEm?: Date | string
  }

  export type DocumentoSensivelUncheckedCreateWithoutProjectInput = {
    id?: string
    tipo: string
    urlEncriptado: string
    expiraEm?: Date | string | null
    criadoEm?: Date | string
  }

  export type DocumentoSensivelCreateOrConnectWithoutProjectInput = {
    where: DocumentoSensivelWhereUniqueInput
    create: XOR<DocumentoSensivelCreateWithoutProjectInput, DocumentoSensivelUncheckedCreateWithoutProjectInput>
  }

  export type DocumentoSensivelCreateManyProjectInputEnvelope = {
    data: DocumentoSensivelCreateManyProjectInput | DocumentoSensivelCreateManyProjectInput[]
  }

  export type EditorialPickCreateWithoutProjectInput = {
    id?: string
    seccao: $Enums.Seccao
    posicao: number
    semanaReferencia: string
  }

  export type EditorialPickUncheckedCreateWithoutProjectInput = {
    id?: string
    seccao: $Enums.Seccao
    posicao: number
    semanaReferencia: string
  }

  export type EditorialPickCreateOrConnectWithoutProjectInput = {
    where: EditorialPickWhereUniqueInput
    create: XOR<EditorialPickCreateWithoutProjectInput, EditorialPickUncheckedCreateWithoutProjectInput>
  }

  export type EditorialPickCreateManyProjectInputEnvelope = {
    data: EditorialPickCreateManyProjectInput | EditorialPickCreateManyProjectInput[]
  }

  export type PaymentCreateWithoutProjectInput = {
    id?: string
    tipo: string
    metodo: string
    comprovativoUrl?: string | null
    estado?: string
    confirmadoPor?: string | null
    criadoEm?: Date | string
    user: UserCreateNestedOneWithoutPaymentsInput
  }

  export type PaymentUncheckedCreateWithoutProjectInput = {
    id?: string
    tipo: string
    userId: string
    metodo: string
    comprovativoUrl?: string | null
    estado?: string
    confirmadoPor?: string | null
    criadoEm?: Date | string
  }

  export type PaymentCreateOrConnectWithoutProjectInput = {
    where: PaymentWhereUniqueInput
    create: XOR<PaymentCreateWithoutProjectInput, PaymentUncheckedCreateWithoutProjectInput>
  }

  export type PaymentCreateManyProjectInputEnvelope = {
    data: PaymentCreateManyProjectInput | PaymentCreateManyProjectInput[]
  }

  export type UserUpsertWithoutProjectsInput = {
    update: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
    create: XOR<UserCreateWithoutProjectsInput, UserUncheckedCreateWithoutProjectsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutProjectsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutProjectsInput, UserUncheckedUpdateWithoutProjectsInput>
  }

  export type UserUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    biNuit?: NullableStringFieldUpdateOperationsInput | string | null
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    reactions?: ReactionUpdateManyWithoutUserNestedInput
    ndasComoComprador?: NDAUpdateManyWithoutBuyerNestedInput
    contactRequests?: ContactRequestUpdateManyWithoutBuyerNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    newsletterSubscription?: NewsletterSubscriptionUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    biNuit?: NullableStringFieldUpdateOperationsInput | string | null
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutUserNestedInput
    ndasComoComprador?: NDAUncheckedUpdateManyWithoutBuyerNestedInput
    contactRequests?: ContactRequestUncheckedUpdateManyWithoutBuyerNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    newsletterSubscription?: NewsletterSubscriptionUncheckedUpdateOneWithoutUserNestedInput
  }

  export type VerificationChecklistUpsertWithWhereUniqueWithoutProjectInput = {
    where: VerificationChecklistWhereUniqueInput
    update: XOR<VerificationChecklistUpdateWithoutProjectInput, VerificationChecklistUncheckedUpdateWithoutProjectInput>
    create: XOR<VerificationChecklistCreateWithoutProjectInput, VerificationChecklistUncheckedCreateWithoutProjectInput>
  }

  export type VerificationChecklistUpdateWithWhereUniqueWithoutProjectInput = {
    where: VerificationChecklistWhereUniqueInput
    data: XOR<VerificationChecklistUpdateWithoutProjectInput, VerificationChecklistUncheckedUpdateWithoutProjectInput>
  }

  export type VerificationChecklistUpdateManyWithWhereWithoutProjectInput = {
    where: VerificationChecklistScalarWhereInput
    data: XOR<VerificationChecklistUpdateManyMutationInput, VerificationChecklistUncheckedUpdateManyWithoutProjectInput>
  }

  export type VerificationChecklistScalarWhereInput = {
    AND?: VerificationChecklistScalarWhereInput | VerificationChecklistScalarWhereInput[]
    OR?: VerificationChecklistScalarWhereInput[]
    NOT?: VerificationChecklistScalarWhereInput | VerificationChecklistScalarWhereInput[]
    id?: StringFilter<"VerificationChecklist"> | string
    projectId?: StringFilter<"VerificationChecklist"> | string
    tipo?: StringFilter<"VerificationChecklist"> | string
    respostasJson?: StringFilter<"VerificationChecklist"> | string
    documentosUrls?: StringFilter<"VerificationChecklist"> | string
    estado?: StringFilter<"VerificationChecklist"> | string
  }

  export type ReactionUpsertWithWhereUniqueWithoutProjectInput = {
    where: ReactionWhereUniqueInput
    update: XOR<ReactionUpdateWithoutProjectInput, ReactionUncheckedUpdateWithoutProjectInput>
    create: XOR<ReactionCreateWithoutProjectInput, ReactionUncheckedCreateWithoutProjectInput>
  }

  export type ReactionUpdateWithWhereUniqueWithoutProjectInput = {
    where: ReactionWhereUniqueInput
    data: XOR<ReactionUpdateWithoutProjectInput, ReactionUncheckedUpdateWithoutProjectInput>
  }

  export type ReactionUpdateManyWithWhereWithoutProjectInput = {
    where: ReactionScalarWhereInput
    data: XOR<ReactionUpdateManyMutationInput, ReactionUncheckedUpdateManyWithoutProjectInput>
  }

  export type NDAUpsertWithWhereUniqueWithoutProjectInput = {
    where: NDAWhereUniqueInput
    update: XOR<NDAUpdateWithoutProjectInput, NDAUncheckedUpdateWithoutProjectInput>
    create: XOR<NDACreateWithoutProjectInput, NDAUncheckedCreateWithoutProjectInput>
  }

  export type NDAUpdateWithWhereUniqueWithoutProjectInput = {
    where: NDAWhereUniqueInput
    data: XOR<NDAUpdateWithoutProjectInput, NDAUncheckedUpdateWithoutProjectInput>
  }

  export type NDAUpdateManyWithWhereWithoutProjectInput = {
    where: NDAScalarWhereInput
    data: XOR<NDAUpdateManyMutationInput, NDAUncheckedUpdateManyWithoutProjectInput>
  }

  export type ContactRequestUpsertWithWhereUniqueWithoutProjectInput = {
    where: ContactRequestWhereUniqueInput
    update: XOR<ContactRequestUpdateWithoutProjectInput, ContactRequestUncheckedUpdateWithoutProjectInput>
    create: XOR<ContactRequestCreateWithoutProjectInput, ContactRequestUncheckedCreateWithoutProjectInput>
  }

  export type ContactRequestUpdateWithWhereUniqueWithoutProjectInput = {
    where: ContactRequestWhereUniqueInput
    data: XOR<ContactRequestUpdateWithoutProjectInput, ContactRequestUncheckedUpdateWithoutProjectInput>
  }

  export type ContactRequestUpdateManyWithWhereWithoutProjectInput = {
    where: ContactRequestScalarWhereInput
    data: XOR<ContactRequestUpdateManyMutationInput, ContactRequestUncheckedUpdateManyWithoutProjectInput>
  }

  export type DocumentoSensivelUpsertWithWhereUniqueWithoutProjectInput = {
    where: DocumentoSensivelWhereUniqueInput
    update: XOR<DocumentoSensivelUpdateWithoutProjectInput, DocumentoSensivelUncheckedUpdateWithoutProjectInput>
    create: XOR<DocumentoSensivelCreateWithoutProjectInput, DocumentoSensivelUncheckedCreateWithoutProjectInput>
  }

  export type DocumentoSensivelUpdateWithWhereUniqueWithoutProjectInput = {
    where: DocumentoSensivelWhereUniqueInput
    data: XOR<DocumentoSensivelUpdateWithoutProjectInput, DocumentoSensivelUncheckedUpdateWithoutProjectInput>
  }

  export type DocumentoSensivelUpdateManyWithWhereWithoutProjectInput = {
    where: DocumentoSensivelScalarWhereInput
    data: XOR<DocumentoSensivelUpdateManyMutationInput, DocumentoSensivelUncheckedUpdateManyWithoutProjectInput>
  }

  export type DocumentoSensivelScalarWhereInput = {
    AND?: DocumentoSensivelScalarWhereInput | DocumentoSensivelScalarWhereInput[]
    OR?: DocumentoSensivelScalarWhereInput[]
    NOT?: DocumentoSensivelScalarWhereInput | DocumentoSensivelScalarWhereInput[]
    id?: StringFilter<"DocumentoSensivel"> | string
    projectId?: StringFilter<"DocumentoSensivel"> | string
    tipo?: StringFilter<"DocumentoSensivel"> | string
    urlEncriptado?: StringFilter<"DocumentoSensivel"> | string
    expiraEm?: DateTimeNullableFilter<"DocumentoSensivel"> | Date | string | null
    criadoEm?: DateTimeFilter<"DocumentoSensivel"> | Date | string
  }

  export type EditorialPickUpsertWithWhereUniqueWithoutProjectInput = {
    where: EditorialPickWhereUniqueInput
    update: XOR<EditorialPickUpdateWithoutProjectInput, EditorialPickUncheckedUpdateWithoutProjectInput>
    create: XOR<EditorialPickCreateWithoutProjectInput, EditorialPickUncheckedCreateWithoutProjectInput>
  }

  export type EditorialPickUpdateWithWhereUniqueWithoutProjectInput = {
    where: EditorialPickWhereUniqueInput
    data: XOR<EditorialPickUpdateWithoutProjectInput, EditorialPickUncheckedUpdateWithoutProjectInput>
  }

  export type EditorialPickUpdateManyWithWhereWithoutProjectInput = {
    where: EditorialPickScalarWhereInput
    data: XOR<EditorialPickUpdateManyMutationInput, EditorialPickUncheckedUpdateManyWithoutProjectInput>
  }

  export type EditorialPickScalarWhereInput = {
    AND?: EditorialPickScalarWhereInput | EditorialPickScalarWhereInput[]
    OR?: EditorialPickScalarWhereInput[]
    NOT?: EditorialPickScalarWhereInput | EditorialPickScalarWhereInput[]
    id?: StringFilter<"EditorialPick"> | string
    projectId?: StringFilter<"EditorialPick"> | string
    seccao?: EnumSeccaoFilter<"EditorialPick"> | $Enums.Seccao
    posicao?: IntFilter<"EditorialPick"> | number
    semanaReferencia?: StringFilter<"EditorialPick"> | string
  }

  export type PaymentUpsertWithWhereUniqueWithoutProjectInput = {
    where: PaymentWhereUniqueInput
    update: XOR<PaymentUpdateWithoutProjectInput, PaymentUncheckedUpdateWithoutProjectInput>
    create: XOR<PaymentCreateWithoutProjectInput, PaymentUncheckedCreateWithoutProjectInput>
  }

  export type PaymentUpdateWithWhereUniqueWithoutProjectInput = {
    where: PaymentWhereUniqueInput
    data: XOR<PaymentUpdateWithoutProjectInput, PaymentUncheckedUpdateWithoutProjectInput>
  }

  export type PaymentUpdateManyWithWhereWithoutProjectInput = {
    where: PaymentScalarWhereInput
    data: XOR<PaymentUpdateManyMutationInput, PaymentUncheckedUpdateManyWithoutProjectInput>
  }

  export type ProjectCreateWithoutChecklistsInput = {
    id?: string
    seccao: $Enums.Seccao
    titulo: string
    descricao: string
    categoria: string
    sector: string
    localizacao: string
    nivelVerificacao?: $Enums.NivelVerificacao
    estado?: $Enums.EstadoProjecto
    boostActivoAte?: Date | string | null
    criadoEm?: Date | string
    owner: UserCreateNestedOneWithoutProjectsInput
    reactions?: ReactionCreateNestedManyWithoutProjectInput
    ndas?: NDACreateNestedManyWithoutProjectInput
    contactRequests?: ContactRequestCreateNestedManyWithoutProjectInput
    documentos?: DocumentoSensivelCreateNestedManyWithoutProjectInput
    editorialPicks?: EditorialPickCreateNestedManyWithoutProjectInput
    payments?: PaymentCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutChecklistsInput = {
    id?: string
    ownerId: string
    seccao: $Enums.Seccao
    titulo: string
    descricao: string
    categoria: string
    sector: string
    localizacao: string
    nivelVerificacao?: $Enums.NivelVerificacao
    estado?: $Enums.EstadoProjecto
    boostActivoAte?: Date | string | null
    criadoEm?: Date | string
    reactions?: ReactionUncheckedCreateNestedManyWithoutProjectInput
    ndas?: NDAUncheckedCreateNestedManyWithoutProjectInput
    contactRequests?: ContactRequestUncheckedCreateNestedManyWithoutProjectInput
    documentos?: DocumentoSensivelUncheckedCreateNestedManyWithoutProjectInput
    editorialPicks?: EditorialPickUncheckedCreateNestedManyWithoutProjectInput
    payments?: PaymentUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutChecklistsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutChecklistsInput, ProjectUncheckedCreateWithoutChecklistsInput>
  }

  export type ProjectUpsertWithoutChecklistsInput = {
    update: XOR<ProjectUpdateWithoutChecklistsInput, ProjectUncheckedUpdateWithoutChecklistsInput>
    create: XOR<ProjectCreateWithoutChecklistsInput, ProjectUncheckedCreateWithoutChecklistsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutChecklistsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutChecklistsInput, ProjectUncheckedUpdateWithoutChecklistsInput>
  }

  export type ProjectUpdateWithoutChecklistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    seccao?: EnumSeccaoFieldUpdateOperationsInput | $Enums.Seccao
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    nivelVerificacao?: EnumNivelVerificacaoFieldUpdateOperationsInput | $Enums.NivelVerificacao
    estado?: EnumEstadoProjectoFieldUpdateOperationsInput | $Enums.EstadoProjecto
    boostActivoAte?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutProjectsNestedInput
    reactions?: ReactionUpdateManyWithoutProjectNestedInput
    ndas?: NDAUpdateManyWithoutProjectNestedInput
    contactRequests?: ContactRequestUpdateManyWithoutProjectNestedInput
    documentos?: DocumentoSensivelUpdateManyWithoutProjectNestedInput
    editorialPicks?: EditorialPickUpdateManyWithoutProjectNestedInput
    payments?: PaymentUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutChecklistsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    seccao?: EnumSeccaoFieldUpdateOperationsInput | $Enums.Seccao
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    nivelVerificacao?: EnumNivelVerificacaoFieldUpdateOperationsInput | $Enums.NivelVerificacao
    estado?: EnumEstadoProjectoFieldUpdateOperationsInput | $Enums.EstadoProjecto
    boostActivoAte?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    reactions?: ReactionUncheckedUpdateManyWithoutProjectNestedInput
    ndas?: NDAUncheckedUpdateManyWithoutProjectNestedInput
    contactRequests?: ContactRequestUncheckedUpdateManyWithoutProjectNestedInput
    documentos?: DocumentoSensivelUncheckedUpdateManyWithoutProjectNestedInput
    editorialPicks?: EditorialPickUncheckedUpdateManyWithoutProjectNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateWithoutReactionsInput = {
    id?: string
    seccao: $Enums.Seccao
    titulo: string
    descricao: string
    categoria: string
    sector: string
    localizacao: string
    nivelVerificacao?: $Enums.NivelVerificacao
    estado?: $Enums.EstadoProjecto
    boostActivoAte?: Date | string | null
    criadoEm?: Date | string
    owner: UserCreateNestedOneWithoutProjectsInput
    checklists?: VerificationChecklistCreateNestedManyWithoutProjectInput
    ndas?: NDACreateNestedManyWithoutProjectInput
    contactRequests?: ContactRequestCreateNestedManyWithoutProjectInput
    documentos?: DocumentoSensivelCreateNestedManyWithoutProjectInput
    editorialPicks?: EditorialPickCreateNestedManyWithoutProjectInput
    payments?: PaymentCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutReactionsInput = {
    id?: string
    ownerId: string
    seccao: $Enums.Seccao
    titulo: string
    descricao: string
    categoria: string
    sector: string
    localizacao: string
    nivelVerificacao?: $Enums.NivelVerificacao
    estado?: $Enums.EstadoProjecto
    boostActivoAte?: Date | string | null
    criadoEm?: Date | string
    checklists?: VerificationChecklistUncheckedCreateNestedManyWithoutProjectInput
    ndas?: NDAUncheckedCreateNestedManyWithoutProjectInput
    contactRequests?: ContactRequestUncheckedCreateNestedManyWithoutProjectInput
    documentos?: DocumentoSensivelUncheckedCreateNestedManyWithoutProjectInput
    editorialPicks?: EditorialPickUncheckedCreateNestedManyWithoutProjectInput
    payments?: PaymentUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutReactionsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutReactionsInput, ProjectUncheckedCreateWithoutReactionsInput>
  }

  export type UserCreateWithoutReactionsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    passwordHash?: string | null
    role?: $Enums.Role
    telefone?: string | null
    biNuit?: string | null
    kycStatus?: $Enums.KycStatus
    criadoEm?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutOwnerInput
    ndasComoComprador?: NDACreateNestedManyWithoutBuyerInput
    contactRequests?: ContactRequestCreateNestedManyWithoutBuyerInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    newsletterSubscription?: NewsletterSubscriptionCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReactionsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    passwordHash?: string | null
    role?: $Enums.Role
    telefone?: string | null
    biNuit?: string | null
    kycStatus?: $Enums.KycStatus
    criadoEm?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    ndasComoComprador?: NDAUncheckedCreateNestedManyWithoutBuyerInput
    contactRequests?: ContactRequestUncheckedCreateNestedManyWithoutBuyerInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    newsletterSubscription?: NewsletterSubscriptionUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReactionsInput, UserUncheckedCreateWithoutReactionsInput>
  }

  export type ProjectUpsertWithoutReactionsInput = {
    update: XOR<ProjectUpdateWithoutReactionsInput, ProjectUncheckedUpdateWithoutReactionsInput>
    create: XOR<ProjectCreateWithoutReactionsInput, ProjectUncheckedCreateWithoutReactionsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutReactionsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutReactionsInput, ProjectUncheckedUpdateWithoutReactionsInput>
  }

  export type ProjectUpdateWithoutReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    seccao?: EnumSeccaoFieldUpdateOperationsInput | $Enums.Seccao
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    nivelVerificacao?: EnumNivelVerificacaoFieldUpdateOperationsInput | $Enums.NivelVerificacao
    estado?: EnumEstadoProjectoFieldUpdateOperationsInput | $Enums.EstadoProjecto
    boostActivoAte?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutProjectsNestedInput
    checklists?: VerificationChecklistUpdateManyWithoutProjectNestedInput
    ndas?: NDAUpdateManyWithoutProjectNestedInput
    contactRequests?: ContactRequestUpdateManyWithoutProjectNestedInput
    documentos?: DocumentoSensivelUpdateManyWithoutProjectNestedInput
    editorialPicks?: EditorialPickUpdateManyWithoutProjectNestedInput
    payments?: PaymentUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    seccao?: EnumSeccaoFieldUpdateOperationsInput | $Enums.Seccao
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    nivelVerificacao?: EnumNivelVerificacaoFieldUpdateOperationsInput | $Enums.NivelVerificacao
    estado?: EnumEstadoProjectoFieldUpdateOperationsInput | $Enums.EstadoProjecto
    boostActivoAte?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    checklists?: VerificationChecklistUncheckedUpdateManyWithoutProjectNestedInput
    ndas?: NDAUncheckedUpdateManyWithoutProjectNestedInput
    contactRequests?: ContactRequestUncheckedUpdateManyWithoutProjectNestedInput
    documentos?: DocumentoSensivelUncheckedUpdateManyWithoutProjectNestedInput
    editorialPicks?: EditorialPickUncheckedUpdateManyWithoutProjectNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type UserUpsertWithoutReactionsInput = {
    update: XOR<UserUpdateWithoutReactionsInput, UserUncheckedUpdateWithoutReactionsInput>
    create: XOR<UserCreateWithoutReactionsInput, UserUncheckedCreateWithoutReactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReactionsInput, UserUncheckedUpdateWithoutReactionsInput>
  }

  export type UserUpdateWithoutReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    biNuit?: NullableStringFieldUpdateOperationsInput | string | null
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutOwnerNestedInput
    ndasComoComprador?: NDAUpdateManyWithoutBuyerNestedInput
    contactRequests?: ContactRequestUpdateManyWithoutBuyerNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    newsletterSubscription?: NewsletterSubscriptionUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    biNuit?: NullableStringFieldUpdateOperationsInput | string | null
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    ndasComoComprador?: NDAUncheckedUpdateManyWithoutBuyerNestedInput
    contactRequests?: ContactRequestUncheckedUpdateManyWithoutBuyerNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    newsletterSubscription?: NewsletterSubscriptionUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ProjectCreateWithoutNdasInput = {
    id?: string
    seccao: $Enums.Seccao
    titulo: string
    descricao: string
    categoria: string
    sector: string
    localizacao: string
    nivelVerificacao?: $Enums.NivelVerificacao
    estado?: $Enums.EstadoProjecto
    boostActivoAte?: Date | string | null
    criadoEm?: Date | string
    owner: UserCreateNestedOneWithoutProjectsInput
    checklists?: VerificationChecklistCreateNestedManyWithoutProjectInput
    reactions?: ReactionCreateNestedManyWithoutProjectInput
    contactRequests?: ContactRequestCreateNestedManyWithoutProjectInput
    documentos?: DocumentoSensivelCreateNestedManyWithoutProjectInput
    editorialPicks?: EditorialPickCreateNestedManyWithoutProjectInput
    payments?: PaymentCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutNdasInput = {
    id?: string
    ownerId: string
    seccao: $Enums.Seccao
    titulo: string
    descricao: string
    categoria: string
    sector: string
    localizacao: string
    nivelVerificacao?: $Enums.NivelVerificacao
    estado?: $Enums.EstadoProjecto
    boostActivoAte?: Date | string | null
    criadoEm?: Date | string
    checklists?: VerificationChecklistUncheckedCreateNestedManyWithoutProjectInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutProjectInput
    contactRequests?: ContactRequestUncheckedCreateNestedManyWithoutProjectInput
    documentos?: DocumentoSensivelUncheckedCreateNestedManyWithoutProjectInput
    editorialPicks?: EditorialPickUncheckedCreateNestedManyWithoutProjectInput
    payments?: PaymentUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutNdasInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutNdasInput, ProjectUncheckedCreateWithoutNdasInput>
  }

  export type UserCreateWithoutNdasComoCompradorInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    passwordHash?: string | null
    role?: $Enums.Role
    telefone?: string | null
    biNuit?: string | null
    kycStatus?: $Enums.KycStatus
    criadoEm?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutOwnerInput
    reactions?: ReactionCreateNestedManyWithoutUserInput
    contactRequests?: ContactRequestCreateNestedManyWithoutBuyerInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    newsletterSubscription?: NewsletterSubscriptionCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNdasComoCompradorInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    passwordHash?: string | null
    role?: $Enums.Role
    telefone?: string | null
    biNuit?: string | null
    kycStatus?: $Enums.KycStatus
    criadoEm?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutUserInput
    contactRequests?: ContactRequestUncheckedCreateNestedManyWithoutBuyerInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    newsletterSubscription?: NewsletterSubscriptionUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNdasComoCompradorInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNdasComoCompradorInput, UserUncheckedCreateWithoutNdasComoCompradorInput>
  }

  export type ProjectUpsertWithoutNdasInput = {
    update: XOR<ProjectUpdateWithoutNdasInput, ProjectUncheckedUpdateWithoutNdasInput>
    create: XOR<ProjectCreateWithoutNdasInput, ProjectUncheckedCreateWithoutNdasInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutNdasInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutNdasInput, ProjectUncheckedUpdateWithoutNdasInput>
  }

  export type ProjectUpdateWithoutNdasInput = {
    id?: StringFieldUpdateOperationsInput | string
    seccao?: EnumSeccaoFieldUpdateOperationsInput | $Enums.Seccao
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    nivelVerificacao?: EnumNivelVerificacaoFieldUpdateOperationsInput | $Enums.NivelVerificacao
    estado?: EnumEstadoProjectoFieldUpdateOperationsInput | $Enums.EstadoProjecto
    boostActivoAte?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutProjectsNestedInput
    checklists?: VerificationChecklistUpdateManyWithoutProjectNestedInput
    reactions?: ReactionUpdateManyWithoutProjectNestedInput
    contactRequests?: ContactRequestUpdateManyWithoutProjectNestedInput
    documentos?: DocumentoSensivelUpdateManyWithoutProjectNestedInput
    editorialPicks?: EditorialPickUpdateManyWithoutProjectNestedInput
    payments?: PaymentUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutNdasInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    seccao?: EnumSeccaoFieldUpdateOperationsInput | $Enums.Seccao
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    nivelVerificacao?: EnumNivelVerificacaoFieldUpdateOperationsInput | $Enums.NivelVerificacao
    estado?: EnumEstadoProjectoFieldUpdateOperationsInput | $Enums.EstadoProjecto
    boostActivoAte?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    checklists?: VerificationChecklistUncheckedUpdateManyWithoutProjectNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutProjectNestedInput
    contactRequests?: ContactRequestUncheckedUpdateManyWithoutProjectNestedInput
    documentos?: DocumentoSensivelUncheckedUpdateManyWithoutProjectNestedInput
    editorialPicks?: EditorialPickUncheckedUpdateManyWithoutProjectNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type UserUpsertWithoutNdasComoCompradorInput = {
    update: XOR<UserUpdateWithoutNdasComoCompradorInput, UserUncheckedUpdateWithoutNdasComoCompradorInput>
    create: XOR<UserCreateWithoutNdasComoCompradorInput, UserUncheckedCreateWithoutNdasComoCompradorInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNdasComoCompradorInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNdasComoCompradorInput, UserUncheckedUpdateWithoutNdasComoCompradorInput>
  }

  export type UserUpdateWithoutNdasComoCompradorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    biNuit?: NullableStringFieldUpdateOperationsInput | string | null
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutOwnerNestedInput
    reactions?: ReactionUpdateManyWithoutUserNestedInput
    contactRequests?: ContactRequestUpdateManyWithoutBuyerNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    newsletterSubscription?: NewsletterSubscriptionUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNdasComoCompradorInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    biNuit?: NullableStringFieldUpdateOperationsInput | string | null
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutUserNestedInput
    contactRequests?: ContactRequestUncheckedUpdateManyWithoutBuyerNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    newsletterSubscription?: NewsletterSubscriptionUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ProjectCreateWithoutContactRequestsInput = {
    id?: string
    seccao: $Enums.Seccao
    titulo: string
    descricao: string
    categoria: string
    sector: string
    localizacao: string
    nivelVerificacao?: $Enums.NivelVerificacao
    estado?: $Enums.EstadoProjecto
    boostActivoAte?: Date | string | null
    criadoEm?: Date | string
    owner: UserCreateNestedOneWithoutProjectsInput
    checklists?: VerificationChecklistCreateNestedManyWithoutProjectInput
    reactions?: ReactionCreateNestedManyWithoutProjectInput
    ndas?: NDACreateNestedManyWithoutProjectInput
    documentos?: DocumentoSensivelCreateNestedManyWithoutProjectInput
    editorialPicks?: EditorialPickCreateNestedManyWithoutProjectInput
    payments?: PaymentCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutContactRequestsInput = {
    id?: string
    ownerId: string
    seccao: $Enums.Seccao
    titulo: string
    descricao: string
    categoria: string
    sector: string
    localizacao: string
    nivelVerificacao?: $Enums.NivelVerificacao
    estado?: $Enums.EstadoProjecto
    boostActivoAte?: Date | string | null
    criadoEm?: Date | string
    checklists?: VerificationChecklistUncheckedCreateNestedManyWithoutProjectInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutProjectInput
    ndas?: NDAUncheckedCreateNestedManyWithoutProjectInput
    documentos?: DocumentoSensivelUncheckedCreateNestedManyWithoutProjectInput
    editorialPicks?: EditorialPickUncheckedCreateNestedManyWithoutProjectInput
    payments?: PaymentUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutContactRequestsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutContactRequestsInput, ProjectUncheckedCreateWithoutContactRequestsInput>
  }

  export type UserCreateWithoutContactRequestsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    passwordHash?: string | null
    role?: $Enums.Role
    telefone?: string | null
    biNuit?: string | null
    kycStatus?: $Enums.KycStatus
    criadoEm?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutOwnerInput
    reactions?: ReactionCreateNestedManyWithoutUserInput
    ndasComoComprador?: NDACreateNestedManyWithoutBuyerInput
    payments?: PaymentCreateNestedManyWithoutUserInput
    newsletterSubscription?: NewsletterSubscriptionCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutContactRequestsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    passwordHash?: string | null
    role?: $Enums.Role
    telefone?: string | null
    biNuit?: string | null
    kycStatus?: $Enums.KycStatus
    criadoEm?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutUserInput
    ndasComoComprador?: NDAUncheckedCreateNestedManyWithoutBuyerInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
    newsletterSubscription?: NewsletterSubscriptionUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutContactRequestsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutContactRequestsInput, UserUncheckedCreateWithoutContactRequestsInput>
  }

  export type ProjectUpsertWithoutContactRequestsInput = {
    update: XOR<ProjectUpdateWithoutContactRequestsInput, ProjectUncheckedUpdateWithoutContactRequestsInput>
    create: XOR<ProjectCreateWithoutContactRequestsInput, ProjectUncheckedCreateWithoutContactRequestsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutContactRequestsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutContactRequestsInput, ProjectUncheckedUpdateWithoutContactRequestsInput>
  }

  export type ProjectUpdateWithoutContactRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    seccao?: EnumSeccaoFieldUpdateOperationsInput | $Enums.Seccao
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    nivelVerificacao?: EnumNivelVerificacaoFieldUpdateOperationsInput | $Enums.NivelVerificacao
    estado?: EnumEstadoProjectoFieldUpdateOperationsInput | $Enums.EstadoProjecto
    boostActivoAte?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutProjectsNestedInput
    checklists?: VerificationChecklistUpdateManyWithoutProjectNestedInput
    reactions?: ReactionUpdateManyWithoutProjectNestedInput
    ndas?: NDAUpdateManyWithoutProjectNestedInput
    documentos?: DocumentoSensivelUpdateManyWithoutProjectNestedInput
    editorialPicks?: EditorialPickUpdateManyWithoutProjectNestedInput
    payments?: PaymentUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutContactRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    seccao?: EnumSeccaoFieldUpdateOperationsInput | $Enums.Seccao
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    nivelVerificacao?: EnumNivelVerificacaoFieldUpdateOperationsInput | $Enums.NivelVerificacao
    estado?: EnumEstadoProjectoFieldUpdateOperationsInput | $Enums.EstadoProjecto
    boostActivoAte?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    checklists?: VerificationChecklistUncheckedUpdateManyWithoutProjectNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutProjectNestedInput
    ndas?: NDAUncheckedUpdateManyWithoutProjectNestedInput
    documentos?: DocumentoSensivelUncheckedUpdateManyWithoutProjectNestedInput
    editorialPicks?: EditorialPickUncheckedUpdateManyWithoutProjectNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type UserUpsertWithoutContactRequestsInput = {
    update: XOR<UserUpdateWithoutContactRequestsInput, UserUncheckedUpdateWithoutContactRequestsInput>
    create: XOR<UserCreateWithoutContactRequestsInput, UserUncheckedCreateWithoutContactRequestsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutContactRequestsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutContactRequestsInput, UserUncheckedUpdateWithoutContactRequestsInput>
  }

  export type UserUpdateWithoutContactRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    biNuit?: NullableStringFieldUpdateOperationsInput | string | null
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutOwnerNestedInput
    reactions?: ReactionUpdateManyWithoutUserNestedInput
    ndasComoComprador?: NDAUpdateManyWithoutBuyerNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
    newsletterSubscription?: NewsletterSubscriptionUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutContactRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    biNuit?: NullableStringFieldUpdateOperationsInput | string | null
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutUserNestedInput
    ndasComoComprador?: NDAUncheckedUpdateManyWithoutBuyerNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
    newsletterSubscription?: NewsletterSubscriptionUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ProjectCreateWithoutPaymentsInput = {
    id?: string
    seccao: $Enums.Seccao
    titulo: string
    descricao: string
    categoria: string
    sector: string
    localizacao: string
    nivelVerificacao?: $Enums.NivelVerificacao
    estado?: $Enums.EstadoProjecto
    boostActivoAte?: Date | string | null
    criadoEm?: Date | string
    owner: UserCreateNestedOneWithoutProjectsInput
    checklists?: VerificationChecklistCreateNestedManyWithoutProjectInput
    reactions?: ReactionCreateNestedManyWithoutProjectInput
    ndas?: NDACreateNestedManyWithoutProjectInput
    contactRequests?: ContactRequestCreateNestedManyWithoutProjectInput
    documentos?: DocumentoSensivelCreateNestedManyWithoutProjectInput
    editorialPicks?: EditorialPickCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutPaymentsInput = {
    id?: string
    ownerId: string
    seccao: $Enums.Seccao
    titulo: string
    descricao: string
    categoria: string
    sector: string
    localizacao: string
    nivelVerificacao?: $Enums.NivelVerificacao
    estado?: $Enums.EstadoProjecto
    boostActivoAte?: Date | string | null
    criadoEm?: Date | string
    checklists?: VerificationChecklistUncheckedCreateNestedManyWithoutProjectInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutProjectInput
    ndas?: NDAUncheckedCreateNestedManyWithoutProjectInput
    contactRequests?: ContactRequestUncheckedCreateNestedManyWithoutProjectInput
    documentos?: DocumentoSensivelUncheckedCreateNestedManyWithoutProjectInput
    editorialPicks?: EditorialPickUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutPaymentsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutPaymentsInput, ProjectUncheckedCreateWithoutPaymentsInput>
  }

  export type UserCreateWithoutPaymentsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    passwordHash?: string | null
    role?: $Enums.Role
    telefone?: string | null
    biNuit?: string | null
    kycStatus?: $Enums.KycStatus
    criadoEm?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutOwnerInput
    reactions?: ReactionCreateNestedManyWithoutUserInput
    ndasComoComprador?: NDACreateNestedManyWithoutBuyerInput
    contactRequests?: ContactRequestCreateNestedManyWithoutBuyerInput
    newsletterSubscription?: NewsletterSubscriptionCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPaymentsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    passwordHash?: string | null
    role?: $Enums.Role
    telefone?: string | null
    biNuit?: string | null
    kycStatus?: $Enums.KycStatus
    criadoEm?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutUserInput
    ndasComoComprador?: NDAUncheckedCreateNestedManyWithoutBuyerInput
    contactRequests?: ContactRequestUncheckedCreateNestedManyWithoutBuyerInput
    newsletterSubscription?: NewsletterSubscriptionUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPaymentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
  }

  export type ProjectUpsertWithoutPaymentsInput = {
    update: XOR<ProjectUpdateWithoutPaymentsInput, ProjectUncheckedUpdateWithoutPaymentsInput>
    create: XOR<ProjectCreateWithoutPaymentsInput, ProjectUncheckedCreateWithoutPaymentsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutPaymentsInput, ProjectUncheckedUpdateWithoutPaymentsInput>
  }

  export type ProjectUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    seccao?: EnumSeccaoFieldUpdateOperationsInput | $Enums.Seccao
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    nivelVerificacao?: EnumNivelVerificacaoFieldUpdateOperationsInput | $Enums.NivelVerificacao
    estado?: EnumEstadoProjectoFieldUpdateOperationsInput | $Enums.EstadoProjecto
    boostActivoAte?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutProjectsNestedInput
    checklists?: VerificationChecklistUpdateManyWithoutProjectNestedInput
    reactions?: ReactionUpdateManyWithoutProjectNestedInput
    ndas?: NDAUpdateManyWithoutProjectNestedInput
    contactRequests?: ContactRequestUpdateManyWithoutProjectNestedInput
    documentos?: DocumentoSensivelUpdateManyWithoutProjectNestedInput
    editorialPicks?: EditorialPickUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    seccao?: EnumSeccaoFieldUpdateOperationsInput | $Enums.Seccao
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    nivelVerificacao?: EnumNivelVerificacaoFieldUpdateOperationsInput | $Enums.NivelVerificacao
    estado?: EnumEstadoProjectoFieldUpdateOperationsInput | $Enums.EstadoProjecto
    boostActivoAte?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    checklists?: VerificationChecklistUncheckedUpdateManyWithoutProjectNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutProjectNestedInput
    ndas?: NDAUncheckedUpdateManyWithoutProjectNestedInput
    contactRequests?: ContactRequestUncheckedUpdateManyWithoutProjectNestedInput
    documentos?: DocumentoSensivelUncheckedUpdateManyWithoutProjectNestedInput
    editorialPicks?: EditorialPickUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type UserUpsertWithoutPaymentsInput = {
    update: XOR<UserUpdateWithoutPaymentsInput, UserUncheckedUpdateWithoutPaymentsInput>
    create: XOR<UserCreateWithoutPaymentsInput, UserUncheckedCreateWithoutPaymentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutPaymentsInput, UserUncheckedUpdateWithoutPaymentsInput>
  }

  export type UserUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    biNuit?: NullableStringFieldUpdateOperationsInput | string | null
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutOwnerNestedInput
    reactions?: ReactionUpdateManyWithoutUserNestedInput
    ndasComoComprador?: NDAUpdateManyWithoutBuyerNestedInput
    contactRequests?: ContactRequestUpdateManyWithoutBuyerNestedInput
    newsletterSubscription?: NewsletterSubscriptionUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPaymentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    biNuit?: NullableStringFieldUpdateOperationsInput | string | null
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutUserNestedInput
    ndasComoComprador?: NDAUncheckedUpdateManyWithoutBuyerNestedInput
    contactRequests?: ContactRequestUncheckedUpdateManyWithoutBuyerNestedInput
    newsletterSubscription?: NewsletterSubscriptionUncheckedUpdateOneWithoutUserNestedInput
  }

  export type ProjectCreateWithoutDocumentosInput = {
    id?: string
    seccao: $Enums.Seccao
    titulo: string
    descricao: string
    categoria: string
    sector: string
    localizacao: string
    nivelVerificacao?: $Enums.NivelVerificacao
    estado?: $Enums.EstadoProjecto
    boostActivoAte?: Date | string | null
    criadoEm?: Date | string
    owner: UserCreateNestedOneWithoutProjectsInput
    checklists?: VerificationChecklistCreateNestedManyWithoutProjectInput
    reactions?: ReactionCreateNestedManyWithoutProjectInput
    ndas?: NDACreateNestedManyWithoutProjectInput
    contactRequests?: ContactRequestCreateNestedManyWithoutProjectInput
    editorialPicks?: EditorialPickCreateNestedManyWithoutProjectInput
    payments?: PaymentCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutDocumentosInput = {
    id?: string
    ownerId: string
    seccao: $Enums.Seccao
    titulo: string
    descricao: string
    categoria: string
    sector: string
    localizacao: string
    nivelVerificacao?: $Enums.NivelVerificacao
    estado?: $Enums.EstadoProjecto
    boostActivoAte?: Date | string | null
    criadoEm?: Date | string
    checklists?: VerificationChecklistUncheckedCreateNestedManyWithoutProjectInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutProjectInput
    ndas?: NDAUncheckedCreateNestedManyWithoutProjectInput
    contactRequests?: ContactRequestUncheckedCreateNestedManyWithoutProjectInput
    editorialPicks?: EditorialPickUncheckedCreateNestedManyWithoutProjectInput
    payments?: PaymentUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutDocumentosInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutDocumentosInput, ProjectUncheckedCreateWithoutDocumentosInput>
  }

  export type ProjectUpsertWithoutDocumentosInput = {
    update: XOR<ProjectUpdateWithoutDocumentosInput, ProjectUncheckedUpdateWithoutDocumentosInput>
    create: XOR<ProjectCreateWithoutDocumentosInput, ProjectUncheckedCreateWithoutDocumentosInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutDocumentosInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutDocumentosInput, ProjectUncheckedUpdateWithoutDocumentosInput>
  }

  export type ProjectUpdateWithoutDocumentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    seccao?: EnumSeccaoFieldUpdateOperationsInput | $Enums.Seccao
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    nivelVerificacao?: EnumNivelVerificacaoFieldUpdateOperationsInput | $Enums.NivelVerificacao
    estado?: EnumEstadoProjectoFieldUpdateOperationsInput | $Enums.EstadoProjecto
    boostActivoAte?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutProjectsNestedInput
    checklists?: VerificationChecklistUpdateManyWithoutProjectNestedInput
    reactions?: ReactionUpdateManyWithoutProjectNestedInput
    ndas?: NDAUpdateManyWithoutProjectNestedInput
    contactRequests?: ContactRequestUpdateManyWithoutProjectNestedInput
    editorialPicks?: EditorialPickUpdateManyWithoutProjectNestedInput
    payments?: PaymentUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutDocumentosInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    seccao?: EnumSeccaoFieldUpdateOperationsInput | $Enums.Seccao
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    nivelVerificacao?: EnumNivelVerificacaoFieldUpdateOperationsInput | $Enums.NivelVerificacao
    estado?: EnumEstadoProjectoFieldUpdateOperationsInput | $Enums.EstadoProjecto
    boostActivoAte?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    checklists?: VerificationChecklistUncheckedUpdateManyWithoutProjectNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutProjectNestedInput
    ndas?: NDAUncheckedUpdateManyWithoutProjectNestedInput
    contactRequests?: ContactRequestUncheckedUpdateManyWithoutProjectNestedInput
    editorialPicks?: EditorialPickUncheckedUpdateManyWithoutProjectNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type UserCreateWithoutNewsletterSubscriptionInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    passwordHash?: string | null
    role?: $Enums.Role
    telefone?: string | null
    biNuit?: string | null
    kycStatus?: $Enums.KycStatus
    criadoEm?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    projects?: ProjectCreateNestedManyWithoutOwnerInput
    reactions?: ReactionCreateNestedManyWithoutUserInput
    ndasComoComprador?: NDACreateNestedManyWithoutBuyerInput
    contactRequests?: ContactRequestCreateNestedManyWithoutBuyerInput
    payments?: PaymentCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutNewsletterSubscriptionInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    passwordHash?: string | null
    role?: $Enums.Role
    telefone?: string | null
    biNuit?: string | null
    kycStatus?: $Enums.KycStatus
    criadoEm?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    projects?: ProjectUncheckedCreateNestedManyWithoutOwnerInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutUserInput
    ndasComoComprador?: NDAUncheckedCreateNestedManyWithoutBuyerInput
    contactRequests?: ContactRequestUncheckedCreateNestedManyWithoutBuyerInput
    payments?: PaymentUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutNewsletterSubscriptionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNewsletterSubscriptionInput, UserUncheckedCreateWithoutNewsletterSubscriptionInput>
  }

  export type UserUpsertWithoutNewsletterSubscriptionInput = {
    update: XOR<UserUpdateWithoutNewsletterSubscriptionInput, UserUncheckedUpdateWithoutNewsletterSubscriptionInput>
    create: XOR<UserCreateWithoutNewsletterSubscriptionInput, UserUncheckedCreateWithoutNewsletterSubscriptionInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNewsletterSubscriptionInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNewsletterSubscriptionInput, UserUncheckedUpdateWithoutNewsletterSubscriptionInput>
  }

  export type UserUpdateWithoutNewsletterSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    biNuit?: NullableStringFieldUpdateOperationsInput | string | null
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    projects?: ProjectUpdateManyWithoutOwnerNestedInput
    reactions?: ReactionUpdateManyWithoutUserNestedInput
    ndasComoComprador?: NDAUpdateManyWithoutBuyerNestedInput
    contactRequests?: ContactRequestUpdateManyWithoutBuyerNestedInput
    payments?: PaymentUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutNewsletterSubscriptionInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    telefone?: NullableStringFieldUpdateOperationsInput | string | null
    biNuit?: NullableStringFieldUpdateOperationsInput | string | null
    kycStatus?: EnumKycStatusFieldUpdateOperationsInput | $Enums.KycStatus
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    projects?: ProjectUncheckedUpdateManyWithoutOwnerNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutUserNestedInput
    ndasComoComprador?: NDAUncheckedUpdateManyWithoutBuyerNestedInput
    contactRequests?: ContactRequestUncheckedUpdateManyWithoutBuyerNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProjectCreateWithoutEditorialPicksInput = {
    id?: string
    seccao: $Enums.Seccao
    titulo: string
    descricao: string
    categoria: string
    sector: string
    localizacao: string
    nivelVerificacao?: $Enums.NivelVerificacao
    estado?: $Enums.EstadoProjecto
    boostActivoAte?: Date | string | null
    criadoEm?: Date | string
    owner: UserCreateNestedOneWithoutProjectsInput
    checklists?: VerificationChecklistCreateNestedManyWithoutProjectInput
    reactions?: ReactionCreateNestedManyWithoutProjectInput
    ndas?: NDACreateNestedManyWithoutProjectInput
    contactRequests?: ContactRequestCreateNestedManyWithoutProjectInput
    documentos?: DocumentoSensivelCreateNestedManyWithoutProjectInput
    payments?: PaymentCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutEditorialPicksInput = {
    id?: string
    ownerId: string
    seccao: $Enums.Seccao
    titulo: string
    descricao: string
    categoria: string
    sector: string
    localizacao: string
    nivelVerificacao?: $Enums.NivelVerificacao
    estado?: $Enums.EstadoProjecto
    boostActivoAte?: Date | string | null
    criadoEm?: Date | string
    checklists?: VerificationChecklistUncheckedCreateNestedManyWithoutProjectInput
    reactions?: ReactionUncheckedCreateNestedManyWithoutProjectInput
    ndas?: NDAUncheckedCreateNestedManyWithoutProjectInput
    contactRequests?: ContactRequestUncheckedCreateNestedManyWithoutProjectInput
    documentos?: DocumentoSensivelUncheckedCreateNestedManyWithoutProjectInput
    payments?: PaymentUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutEditorialPicksInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutEditorialPicksInput, ProjectUncheckedCreateWithoutEditorialPicksInput>
  }

  export type ProjectUpsertWithoutEditorialPicksInput = {
    update: XOR<ProjectUpdateWithoutEditorialPicksInput, ProjectUncheckedUpdateWithoutEditorialPicksInput>
    create: XOR<ProjectCreateWithoutEditorialPicksInput, ProjectUncheckedCreateWithoutEditorialPicksInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutEditorialPicksInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutEditorialPicksInput, ProjectUncheckedUpdateWithoutEditorialPicksInput>
  }

  export type ProjectUpdateWithoutEditorialPicksInput = {
    id?: StringFieldUpdateOperationsInput | string
    seccao?: EnumSeccaoFieldUpdateOperationsInput | $Enums.Seccao
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    nivelVerificacao?: EnumNivelVerificacaoFieldUpdateOperationsInput | $Enums.NivelVerificacao
    estado?: EnumEstadoProjectoFieldUpdateOperationsInput | $Enums.EstadoProjecto
    boostActivoAte?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    owner?: UserUpdateOneRequiredWithoutProjectsNestedInput
    checklists?: VerificationChecklistUpdateManyWithoutProjectNestedInput
    reactions?: ReactionUpdateManyWithoutProjectNestedInput
    ndas?: NDAUpdateManyWithoutProjectNestedInput
    contactRequests?: ContactRequestUpdateManyWithoutProjectNestedInput
    documentos?: DocumentoSensivelUpdateManyWithoutProjectNestedInput
    payments?: PaymentUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutEditorialPicksInput = {
    id?: StringFieldUpdateOperationsInput | string
    ownerId?: StringFieldUpdateOperationsInput | string
    seccao?: EnumSeccaoFieldUpdateOperationsInput | $Enums.Seccao
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    nivelVerificacao?: EnumNivelVerificacaoFieldUpdateOperationsInput | $Enums.NivelVerificacao
    estado?: EnumEstadoProjectoFieldUpdateOperationsInput | $Enums.EstadoProjecto
    boostActivoAte?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    checklists?: VerificationChecklistUncheckedUpdateManyWithoutProjectNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutProjectNestedInput
    ndas?: NDAUncheckedUpdateManyWithoutProjectNestedInput
    contactRequests?: ContactRequestUncheckedUpdateManyWithoutProjectNestedInput
    documentos?: DocumentoSensivelUncheckedUpdateManyWithoutProjectNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type ProjectCreateManyOwnerInput = {
    id?: string
    seccao: $Enums.Seccao
    titulo: string
    descricao: string
    categoria: string
    sector: string
    localizacao: string
    nivelVerificacao?: $Enums.NivelVerificacao
    estado?: $Enums.EstadoProjecto
    boostActivoAte?: Date | string | null
    criadoEm?: Date | string
  }

  export type ReactionCreateManyUserInput = {
    id?: string
    projectId: string
    tipo?: string
    criadoEm?: Date | string
  }

  export type NDACreateManyBuyerInput = {
    id?: string
    projectId: string
    aceiteEm?: Date | string
    ip: string
    pago?: boolean
    criadoEm?: Date | string
  }

  export type ContactRequestCreateManyBuyerInput = {
    id?: string
    projectId: string
    estado?: string
    criadoEm?: Date | string
  }

  export type PaymentCreateManyUserInput = {
    id?: string
    tipo: string
    projectId?: string | null
    metodo: string
    comprovativoUrl?: string | null
    estado?: string
    confirmadoPor?: string | null
    criadoEm?: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    seccao?: EnumSeccaoFieldUpdateOperationsInput | $Enums.Seccao
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    nivelVerificacao?: EnumNivelVerificacaoFieldUpdateOperationsInput | $Enums.NivelVerificacao
    estado?: EnumEstadoProjectoFieldUpdateOperationsInput | $Enums.EstadoProjecto
    boostActivoAte?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    checklists?: VerificationChecklistUpdateManyWithoutProjectNestedInput
    reactions?: ReactionUpdateManyWithoutProjectNestedInput
    ndas?: NDAUpdateManyWithoutProjectNestedInput
    contactRequests?: ContactRequestUpdateManyWithoutProjectNestedInput
    documentos?: DocumentoSensivelUpdateManyWithoutProjectNestedInput
    editorialPicks?: EditorialPickUpdateManyWithoutProjectNestedInput
    payments?: PaymentUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    seccao?: EnumSeccaoFieldUpdateOperationsInput | $Enums.Seccao
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    nivelVerificacao?: EnumNivelVerificacaoFieldUpdateOperationsInput | $Enums.NivelVerificacao
    estado?: EnumEstadoProjectoFieldUpdateOperationsInput | $Enums.EstadoProjecto
    boostActivoAte?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    checklists?: VerificationChecklistUncheckedUpdateManyWithoutProjectNestedInput
    reactions?: ReactionUncheckedUpdateManyWithoutProjectNestedInput
    ndas?: NDAUncheckedUpdateManyWithoutProjectNestedInput
    contactRequests?: ContactRequestUncheckedUpdateManyWithoutProjectNestedInput
    documentos?: DocumentoSensivelUncheckedUpdateManyWithoutProjectNestedInput
    editorialPicks?: EditorialPickUncheckedUpdateManyWithoutProjectNestedInput
    payments?: PaymentUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateManyWithoutOwnerInput = {
    id?: StringFieldUpdateOperationsInput | string
    seccao?: EnumSeccaoFieldUpdateOperationsInput | $Enums.Seccao
    titulo?: StringFieldUpdateOperationsInput | string
    descricao?: StringFieldUpdateOperationsInput | string
    categoria?: StringFieldUpdateOperationsInput | string
    sector?: StringFieldUpdateOperationsInput | string
    localizacao?: StringFieldUpdateOperationsInput | string
    nivelVerificacao?: EnumNivelVerificacaoFieldUpdateOperationsInput | $Enums.NivelVerificacao
    estado?: EnumEstadoProjectoFieldUpdateOperationsInput | $Enums.EstadoProjecto
    boostActivoAte?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReactionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutReactionsNestedInput
  }

  export type ReactionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReactionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NDAUpdateWithoutBuyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    aceiteEm?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: StringFieldUpdateOperationsInput | string
    pago?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutNdasNestedInput
  }

  export type NDAUncheckedUpdateWithoutBuyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    aceiteEm?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: StringFieldUpdateOperationsInput | string
    pago?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NDAUncheckedUpdateManyWithoutBuyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    aceiteEm?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: StringFieldUpdateOperationsInput | string
    pago?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactRequestUpdateWithoutBuyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutContactRequestsNestedInput
  }

  export type ContactRequestUncheckedUpdateWithoutBuyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactRequestUncheckedUpdateManyWithoutBuyerInput = {
    id?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    metodo?: StringFieldUpdateOperationsInput | string
    comprovativoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    confirmadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    metodo?: StringFieldUpdateOperationsInput | string
    comprovativoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    confirmadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    projectId?: NullableStringFieldUpdateOperationsInput | string | null
    metodo?: StringFieldUpdateOperationsInput | string
    comprovativoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    confirmadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationChecklistCreateManyProjectInput = {
    id?: string
    tipo: string
    respostasJson: string
    documentosUrls: string
    estado?: string
  }

  export type ReactionCreateManyProjectInput = {
    id?: string
    userId: string
    tipo?: string
    criadoEm?: Date | string
  }

  export type NDACreateManyProjectInput = {
    id?: string
    buyerId: string
    aceiteEm?: Date | string
    ip: string
    pago?: boolean
    criadoEm?: Date | string
  }

  export type ContactRequestCreateManyProjectInput = {
    id?: string
    buyerId: string
    estado?: string
    criadoEm?: Date | string
  }

  export type DocumentoSensivelCreateManyProjectInput = {
    id?: string
    tipo: string
    urlEncriptado: string
    expiraEm?: Date | string | null
    criadoEm?: Date | string
  }

  export type EditorialPickCreateManyProjectInput = {
    id?: string
    seccao: $Enums.Seccao
    posicao: number
    semanaReferencia: string
  }

  export type PaymentCreateManyProjectInput = {
    id?: string
    tipo: string
    userId: string
    metodo: string
    comprovativoUrl?: string | null
    estado?: string
    confirmadoPor?: string | null
    criadoEm?: Date | string
  }

  export type VerificationChecklistUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    respostasJson?: StringFieldUpdateOperationsInput | string
    documentosUrls?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type VerificationChecklistUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    respostasJson?: StringFieldUpdateOperationsInput | string
    documentosUrls?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type VerificationChecklistUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    respostasJson?: StringFieldUpdateOperationsInput | string
    documentosUrls?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
  }

  export type ReactionUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReactionsNestedInput
  }

  export type ReactionUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReactionUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NDAUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    aceiteEm?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: StringFieldUpdateOperationsInput | string
    pago?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    buyer?: UserUpdateOneRequiredWithoutNdasComoCompradorNestedInput
  }

  export type NDAUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    aceiteEm?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: StringFieldUpdateOperationsInput | string
    pago?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NDAUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    aceiteEm?: DateTimeFieldUpdateOperationsInput | Date | string
    ip?: StringFieldUpdateOperationsInput | string
    pago?: BoolFieldUpdateOperationsInput | boolean
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactRequestUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    buyer?: UserUpdateOneRequiredWithoutContactRequestsNestedInput
  }

  export type ContactRequestUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactRequestUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    buyerId?: StringFieldUpdateOperationsInput | string
    estado?: StringFieldUpdateOperationsInput | string
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentoSensivelUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    urlEncriptado?: StringFieldUpdateOperationsInput | string
    expiraEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentoSensivelUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    urlEncriptado?: StringFieldUpdateOperationsInput | string
    expiraEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DocumentoSensivelUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    urlEncriptado?: StringFieldUpdateOperationsInput | string
    expiraEm?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EditorialPickUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    seccao?: EnumSeccaoFieldUpdateOperationsInput | $Enums.Seccao
    posicao?: IntFieldUpdateOperationsInput | number
    semanaReferencia?: StringFieldUpdateOperationsInput | string
  }

  export type EditorialPickUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    seccao?: EnumSeccaoFieldUpdateOperationsInput | $Enums.Seccao
    posicao?: IntFieldUpdateOperationsInput | number
    semanaReferencia?: StringFieldUpdateOperationsInput | string
  }

  export type EditorialPickUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    seccao?: EnumSeccaoFieldUpdateOperationsInput | $Enums.Seccao
    posicao?: IntFieldUpdateOperationsInput | number
    semanaReferencia?: StringFieldUpdateOperationsInput | string
  }

  export type PaymentUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    metodo?: StringFieldUpdateOperationsInput | string
    comprovativoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    confirmadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutPaymentsNestedInput
  }

  export type PaymentUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    metodo?: StringFieldUpdateOperationsInput | string
    comprovativoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    confirmadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PaymentUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    tipo?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    metodo?: StringFieldUpdateOperationsInput | string
    comprovativoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    estado?: StringFieldUpdateOperationsInput | string
    confirmadoPor?: NullableStringFieldUpdateOperationsInput | string | null
    criadoEm?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}