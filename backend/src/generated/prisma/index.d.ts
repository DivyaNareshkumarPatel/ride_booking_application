
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
 * Model drivers
 * 
 */
export type drivers = $Result.DefaultSelection<Prisma.$driversPayload>
/**
 * Model ride_tracking
 * This table is a partition table and requires additional setup for migrations. Visit https://pris.ly/d/partition-tables for more info.
 */
export type ride_tracking = $Result.DefaultSelection<Prisma.$ride_trackingPayload>
/**
 * Model rides
 * This table is a partition table and requires additional setup for migrations. Visit https://pris.ly/d/partition-tables for more info.
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type rides = $Result.DefaultSelection<Prisma.$ridesPayload>
/**
 * Model spatial_ref_sys
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type spatial_ref_sys = $Result.DefaultSelection<Prisma.$spatial_ref_sysPayload>
/**
 * Model users
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Drivers
 * const drivers = await prisma.drivers.findMany()
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
   * // Fetch zero or more Drivers
   * const drivers = await prisma.drivers.findMany()
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
   * `prisma.drivers`: Exposes CRUD operations for the **drivers** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Drivers
    * const drivers = await prisma.drivers.findMany()
    * ```
    */
  get drivers(): Prisma.driversDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.ride_tracking`: Exposes CRUD operations for the **ride_tracking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ride_trackings
    * const ride_trackings = await prisma.ride_tracking.findMany()
    * ```
    */
  get ride_tracking(): Prisma.ride_trackingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.rides`: Exposes CRUD operations for the **rides** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Rides
    * const rides = await prisma.rides.findMany()
    * ```
    */
  get rides(): Prisma.ridesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.spatial_ref_sys`: Exposes CRUD operations for the **spatial_ref_sys** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Spatial_ref_sys
    * const spatial_ref_sys = await prisma.spatial_ref_sys.findMany()
    * ```
    */
  get spatial_ref_sys(): Prisma.spatial_ref_sysDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
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
    drivers: 'drivers',
    ride_tracking: 'ride_tracking',
    rides: 'rides',
    spatial_ref_sys: 'spatial_ref_sys',
    users: 'users'
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
      modelProps: "drivers" | "ride_tracking" | "rides" | "spatial_ref_sys" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      drivers: {
        payload: Prisma.$driversPayload<ExtArgs>
        fields: Prisma.driversFieldRefs
        operations: {
          findUnique: {
            args: Prisma.driversFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$driversPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.driversFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$driversPayload>
          }
          findFirst: {
            args: Prisma.driversFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$driversPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.driversFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$driversPayload>
          }
          findMany: {
            args: Prisma.driversFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$driversPayload>[]
          }
          create: {
            args: Prisma.driversCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$driversPayload>
          }
          createMany: {
            args: Prisma.driversCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.driversCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$driversPayload>[]
          }
          delete: {
            args: Prisma.driversDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$driversPayload>
          }
          update: {
            args: Prisma.driversUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$driversPayload>
          }
          deleteMany: {
            args: Prisma.driversDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.driversUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.driversUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$driversPayload>[]
          }
          upsert: {
            args: Prisma.driversUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$driversPayload>
          }
          aggregate: {
            args: Prisma.DriversAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDrivers>
          }
          groupBy: {
            args: Prisma.driversGroupByArgs<ExtArgs>
            result: $Utils.Optional<DriversGroupByOutputType>[]
          }
          count: {
            args: Prisma.driversCountArgs<ExtArgs>
            result: $Utils.Optional<DriversCountAggregateOutputType> | number
          }
        }
      }
      ride_tracking: {
        payload: Prisma.$ride_trackingPayload<ExtArgs>
        fields: Prisma.ride_trackingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ride_trackingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ride_trackingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ride_trackingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ride_trackingPayload>
          }
          findFirst: {
            args: Prisma.ride_trackingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ride_trackingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ride_trackingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ride_trackingPayload>
          }
          findMany: {
            args: Prisma.ride_trackingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ride_trackingPayload>[]
          }
          delete: {
            args: Prisma.ride_trackingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ride_trackingPayload>
          }
          update: {
            args: Prisma.ride_trackingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ride_trackingPayload>
          }
          deleteMany: {
            args: Prisma.ride_trackingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ride_trackingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ride_trackingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ride_trackingPayload>[]
          }
          aggregate: {
            args: Prisma.Ride_trackingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRide_tracking>
          }
          groupBy: {
            args: Prisma.ride_trackingGroupByArgs<ExtArgs>
            result: $Utils.Optional<Ride_trackingGroupByOutputType>[]
          }
          count: {
            args: Prisma.ride_trackingCountArgs<ExtArgs>
            result: $Utils.Optional<Ride_trackingCountAggregateOutputType> | number
          }
        }
      }
      rides: {
        payload: Prisma.$ridesPayload<ExtArgs>
        fields: Prisma.ridesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ridesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ridesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ridesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ridesPayload>
          }
          findFirst: {
            args: Prisma.ridesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ridesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ridesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ridesPayload>
          }
          findMany: {
            args: Prisma.ridesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ridesPayload>[]
          }
          delete: {
            args: Prisma.ridesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ridesPayload>
          }
          update: {
            args: Prisma.ridesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ridesPayload>
          }
          deleteMany: {
            args: Prisma.ridesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ridesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ridesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ridesPayload>[]
          }
          aggregate: {
            args: Prisma.RidesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRides>
          }
          groupBy: {
            args: Prisma.ridesGroupByArgs<ExtArgs>
            result: $Utils.Optional<RidesGroupByOutputType>[]
          }
          count: {
            args: Prisma.ridesCountArgs<ExtArgs>
            result: $Utils.Optional<RidesCountAggregateOutputType> | number
          }
        }
      }
      spatial_ref_sys: {
        payload: Prisma.$spatial_ref_sysPayload<ExtArgs>
        fields: Prisma.spatial_ref_sysFieldRefs
        operations: {
          findUnique: {
            args: Prisma.spatial_ref_sysFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.spatial_ref_sysFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload>
          }
          findFirst: {
            args: Prisma.spatial_ref_sysFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.spatial_ref_sysFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload>
          }
          findMany: {
            args: Prisma.spatial_ref_sysFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload>[]
          }
          create: {
            args: Prisma.spatial_ref_sysCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload>
          }
          createMany: {
            args: Prisma.spatial_ref_sysCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.spatial_ref_sysCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload>[]
          }
          delete: {
            args: Prisma.spatial_ref_sysDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload>
          }
          update: {
            args: Prisma.spatial_ref_sysUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload>
          }
          deleteMany: {
            args: Prisma.spatial_ref_sysDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.spatial_ref_sysUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.spatial_ref_sysUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload>[]
          }
          upsert: {
            args: Prisma.spatial_ref_sysUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$spatial_ref_sysPayload>
          }
          aggregate: {
            args: Prisma.Spatial_ref_sysAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSpatial_ref_sys>
          }
          groupBy: {
            args: Prisma.spatial_ref_sysGroupByArgs<ExtArgs>
            result: $Utils.Optional<Spatial_ref_sysGroupByOutputType>[]
          }
          count: {
            args: Prisma.spatial_ref_sysCountArgs<ExtArgs>
            result: $Utils.Optional<Spatial_ref_sysCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
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
    drivers?: driversOmit
    ride_tracking?: ride_trackingOmit
    rides?: ridesOmit
    spatial_ref_sys?: spatial_ref_sysOmit
    users?: usersOmit
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
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    rides_rides_driver_idTousers: number
    rides_rides_rider_idTousers: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rides_rides_driver_idTousers?: boolean | UsersCountOutputTypeCountRides_rides_driver_idTousersArgs
    rides_rides_rider_idTousers?: boolean | UsersCountOutputTypeCountRides_rides_rider_idTousersArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountRides_rides_driver_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ridesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountRides_rides_rider_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ridesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model drivers
   */

  export type AggregateDrivers = {
    _count: DriversCountAggregateOutputType | null
    _avg: DriversAvgAggregateOutputType | null
    _sum: DriversSumAggregateOutputType | null
    _min: DriversMinAggregateOutputType | null
    _max: DriversMaxAggregateOutputType | null
  }

  export type DriversAvgAggregateOutputType = {
    rating: Decimal | null
  }

  export type DriversSumAggregateOutputType = {
    rating: Decimal | null
  }

  export type DriversMinAggregateOutputType = {
    id: string | null
    vehicle_model: string | null
    vehicle_plate: string | null
    is_available: boolean | null
    rating: Decimal | null
    is_on_trip: boolean | null
  }

  export type DriversMaxAggregateOutputType = {
    id: string | null
    vehicle_model: string | null
    vehicle_plate: string | null
    is_available: boolean | null
    rating: Decimal | null
    is_on_trip: boolean | null
  }

  export type DriversCountAggregateOutputType = {
    id: number
    vehicle_model: number
    vehicle_plate: number
    is_available: number
    rating: number
    is_on_trip: number
    _all: number
  }


  export type DriversAvgAggregateInputType = {
    rating?: true
  }

  export type DriversSumAggregateInputType = {
    rating?: true
  }

  export type DriversMinAggregateInputType = {
    id?: true
    vehicle_model?: true
    vehicle_plate?: true
    is_available?: true
    rating?: true
    is_on_trip?: true
  }

  export type DriversMaxAggregateInputType = {
    id?: true
    vehicle_model?: true
    vehicle_plate?: true
    is_available?: true
    rating?: true
    is_on_trip?: true
  }

  export type DriversCountAggregateInputType = {
    id?: true
    vehicle_model?: true
    vehicle_plate?: true
    is_available?: true
    rating?: true
    is_on_trip?: true
    _all?: true
  }

  export type DriversAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which drivers to aggregate.
     */
    where?: driversWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of drivers to fetch.
     */
    orderBy?: driversOrderByWithRelationInput | driversOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: driversWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned drivers
    **/
    _count?: true | DriversCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DriversAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DriversSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DriversMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DriversMaxAggregateInputType
  }

  export type GetDriversAggregateType<T extends DriversAggregateArgs> = {
        [P in keyof T & keyof AggregateDrivers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDrivers[P]>
      : GetScalarType<T[P], AggregateDrivers[P]>
  }




  export type driversGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: driversWhereInput
    orderBy?: driversOrderByWithAggregationInput | driversOrderByWithAggregationInput[]
    by: DriversScalarFieldEnum[] | DriversScalarFieldEnum
    having?: driversScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DriversCountAggregateInputType | true
    _avg?: DriversAvgAggregateInputType
    _sum?: DriversSumAggregateInputType
    _min?: DriversMinAggregateInputType
    _max?: DriversMaxAggregateInputType
  }

  export type DriversGroupByOutputType = {
    id: string
    vehicle_model: string | null
    vehicle_plate: string | null
    is_available: boolean | null
    rating: Decimal | null
    is_on_trip: boolean | null
    _count: DriversCountAggregateOutputType | null
    _avg: DriversAvgAggregateOutputType | null
    _sum: DriversSumAggregateOutputType | null
    _min: DriversMinAggregateOutputType | null
    _max: DriversMaxAggregateOutputType | null
  }

  type GetDriversGroupByPayload<T extends driversGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DriversGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DriversGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DriversGroupByOutputType[P]>
            : GetScalarType<T[P], DriversGroupByOutputType[P]>
        }
      >
    >


  export type driversSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicle_model?: boolean
    vehicle_plate?: boolean
    is_available?: boolean
    rating?: boolean
    is_on_trip?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["drivers"]>

  export type driversSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicle_model?: boolean
    vehicle_plate?: boolean
    is_available?: boolean
    rating?: boolean
    is_on_trip?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["drivers"]>

  export type driversSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    vehicle_model?: boolean
    vehicle_plate?: boolean
    is_available?: boolean
    rating?: boolean
    is_on_trip?: boolean
    users?: boolean | usersDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["drivers"]>

  export type driversSelectScalar = {
    id?: boolean
    vehicle_model?: boolean
    vehicle_plate?: boolean
    is_available?: boolean
    rating?: boolean
    is_on_trip?: boolean
  }

  export type driversOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "vehicle_model" | "vehicle_plate" | "is_available" | "rating" | "is_on_trip", ExtArgs["result"]["drivers"]>
  export type driversInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type driversIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }
  export type driversIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | usersDefaultArgs<ExtArgs>
  }

  export type $driversPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "drivers"
    objects: {
      users: Prisma.$usersPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      vehicle_model: string | null
      vehicle_plate: string | null
      is_available: boolean | null
      rating: Prisma.Decimal | null
      is_on_trip: boolean | null
    }, ExtArgs["result"]["drivers"]>
    composites: {}
  }

  type driversGetPayload<S extends boolean | null | undefined | driversDefaultArgs> = $Result.GetResult<Prisma.$driversPayload, S>

  type driversCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<driversFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DriversCountAggregateInputType | true
    }

  export interface driversDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['drivers'], meta: { name: 'drivers' } }
    /**
     * Find zero or one Drivers that matches the filter.
     * @param {driversFindUniqueArgs} args - Arguments to find a Drivers
     * @example
     * // Get one Drivers
     * const drivers = await prisma.drivers.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends driversFindUniqueArgs>(args: SelectSubset<T, driversFindUniqueArgs<ExtArgs>>): Prisma__driversClient<$Result.GetResult<Prisma.$driversPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Drivers that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {driversFindUniqueOrThrowArgs} args - Arguments to find a Drivers
     * @example
     * // Get one Drivers
     * const drivers = await prisma.drivers.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends driversFindUniqueOrThrowArgs>(args: SelectSubset<T, driversFindUniqueOrThrowArgs<ExtArgs>>): Prisma__driversClient<$Result.GetResult<Prisma.$driversPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Drivers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {driversFindFirstArgs} args - Arguments to find a Drivers
     * @example
     * // Get one Drivers
     * const drivers = await prisma.drivers.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends driversFindFirstArgs>(args?: SelectSubset<T, driversFindFirstArgs<ExtArgs>>): Prisma__driversClient<$Result.GetResult<Prisma.$driversPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Drivers that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {driversFindFirstOrThrowArgs} args - Arguments to find a Drivers
     * @example
     * // Get one Drivers
     * const drivers = await prisma.drivers.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends driversFindFirstOrThrowArgs>(args?: SelectSubset<T, driversFindFirstOrThrowArgs<ExtArgs>>): Prisma__driversClient<$Result.GetResult<Prisma.$driversPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Drivers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {driversFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Drivers
     * const drivers = await prisma.drivers.findMany()
     * 
     * // Get first 10 Drivers
     * const drivers = await prisma.drivers.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const driversWithIdOnly = await prisma.drivers.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends driversFindManyArgs>(args?: SelectSubset<T, driversFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$driversPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Drivers.
     * @param {driversCreateArgs} args - Arguments to create a Drivers.
     * @example
     * // Create one Drivers
     * const Drivers = await prisma.drivers.create({
     *   data: {
     *     // ... data to create a Drivers
     *   }
     * })
     * 
     */
    create<T extends driversCreateArgs>(args: SelectSubset<T, driversCreateArgs<ExtArgs>>): Prisma__driversClient<$Result.GetResult<Prisma.$driversPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Drivers.
     * @param {driversCreateManyArgs} args - Arguments to create many Drivers.
     * @example
     * // Create many Drivers
     * const drivers = await prisma.drivers.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends driversCreateManyArgs>(args?: SelectSubset<T, driversCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Drivers and returns the data saved in the database.
     * @param {driversCreateManyAndReturnArgs} args - Arguments to create many Drivers.
     * @example
     * // Create many Drivers
     * const drivers = await prisma.drivers.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Drivers and only return the `id`
     * const driversWithIdOnly = await prisma.drivers.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends driversCreateManyAndReturnArgs>(args?: SelectSubset<T, driversCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$driversPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Drivers.
     * @param {driversDeleteArgs} args - Arguments to delete one Drivers.
     * @example
     * // Delete one Drivers
     * const Drivers = await prisma.drivers.delete({
     *   where: {
     *     // ... filter to delete one Drivers
     *   }
     * })
     * 
     */
    delete<T extends driversDeleteArgs>(args: SelectSubset<T, driversDeleteArgs<ExtArgs>>): Prisma__driversClient<$Result.GetResult<Prisma.$driversPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Drivers.
     * @param {driversUpdateArgs} args - Arguments to update one Drivers.
     * @example
     * // Update one Drivers
     * const drivers = await prisma.drivers.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends driversUpdateArgs>(args: SelectSubset<T, driversUpdateArgs<ExtArgs>>): Prisma__driversClient<$Result.GetResult<Prisma.$driversPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Drivers.
     * @param {driversDeleteManyArgs} args - Arguments to filter Drivers to delete.
     * @example
     * // Delete a few Drivers
     * const { count } = await prisma.drivers.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends driversDeleteManyArgs>(args?: SelectSubset<T, driversDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {driversUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Drivers
     * const drivers = await prisma.drivers.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends driversUpdateManyArgs>(args: SelectSubset<T, driversUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Drivers and returns the data updated in the database.
     * @param {driversUpdateManyAndReturnArgs} args - Arguments to update many Drivers.
     * @example
     * // Update many Drivers
     * const drivers = await prisma.drivers.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Drivers and only return the `id`
     * const driversWithIdOnly = await prisma.drivers.updateManyAndReturn({
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
    updateManyAndReturn<T extends driversUpdateManyAndReturnArgs>(args: SelectSubset<T, driversUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$driversPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Drivers.
     * @param {driversUpsertArgs} args - Arguments to update or create a Drivers.
     * @example
     * // Update or create a Drivers
     * const drivers = await prisma.drivers.upsert({
     *   create: {
     *     // ... data to create a Drivers
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Drivers we want to update
     *   }
     * })
     */
    upsert<T extends driversUpsertArgs>(args: SelectSubset<T, driversUpsertArgs<ExtArgs>>): Prisma__driversClient<$Result.GetResult<Prisma.$driversPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Drivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {driversCountArgs} args - Arguments to filter Drivers to count.
     * @example
     * // Count the number of Drivers
     * const count = await prisma.drivers.count({
     *   where: {
     *     // ... the filter for the Drivers we want to count
     *   }
     * })
    **/
    count<T extends driversCountArgs>(
      args?: Subset<T, driversCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DriversCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Drivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DriversAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DriversAggregateArgs>(args: Subset<T, DriversAggregateArgs>): Prisma.PrismaPromise<GetDriversAggregateType<T>>

    /**
     * Group by Drivers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {driversGroupByArgs} args - Group by arguments.
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
      T extends driversGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: driversGroupByArgs['orderBy'] }
        : { orderBy?: driversGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, driversGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDriversGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the drivers model
   */
  readonly fields: driversFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for drivers.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__driversClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends usersDefaultArgs<ExtArgs> = {}>(args?: Subset<T, usersDefaultArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the drivers model
   */
  interface driversFieldRefs {
    readonly id: FieldRef<"drivers", 'String'>
    readonly vehicle_model: FieldRef<"drivers", 'String'>
    readonly vehicle_plate: FieldRef<"drivers", 'String'>
    readonly is_available: FieldRef<"drivers", 'Boolean'>
    readonly rating: FieldRef<"drivers", 'Decimal'>
    readonly is_on_trip: FieldRef<"drivers", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * drivers findUnique
   */
  export type driversFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the drivers
     */
    select?: driversSelect<ExtArgs> | null
    /**
     * Omit specific fields from the drivers
     */
    omit?: driversOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: driversInclude<ExtArgs> | null
    /**
     * Filter, which drivers to fetch.
     */
    where: driversWhereUniqueInput
  }

  /**
   * drivers findUniqueOrThrow
   */
  export type driversFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the drivers
     */
    select?: driversSelect<ExtArgs> | null
    /**
     * Omit specific fields from the drivers
     */
    omit?: driversOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: driversInclude<ExtArgs> | null
    /**
     * Filter, which drivers to fetch.
     */
    where: driversWhereUniqueInput
  }

  /**
   * drivers findFirst
   */
  export type driversFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the drivers
     */
    select?: driversSelect<ExtArgs> | null
    /**
     * Omit specific fields from the drivers
     */
    omit?: driversOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: driversInclude<ExtArgs> | null
    /**
     * Filter, which drivers to fetch.
     */
    where?: driversWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of drivers to fetch.
     */
    orderBy?: driversOrderByWithRelationInput | driversOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for drivers.
     */
    cursor?: driversWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of drivers.
     */
    distinct?: DriversScalarFieldEnum | DriversScalarFieldEnum[]
  }

  /**
   * drivers findFirstOrThrow
   */
  export type driversFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the drivers
     */
    select?: driversSelect<ExtArgs> | null
    /**
     * Omit specific fields from the drivers
     */
    omit?: driversOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: driversInclude<ExtArgs> | null
    /**
     * Filter, which drivers to fetch.
     */
    where?: driversWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of drivers to fetch.
     */
    orderBy?: driversOrderByWithRelationInput | driversOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for drivers.
     */
    cursor?: driversWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of drivers.
     */
    distinct?: DriversScalarFieldEnum | DriversScalarFieldEnum[]
  }

  /**
   * drivers findMany
   */
  export type driversFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the drivers
     */
    select?: driversSelect<ExtArgs> | null
    /**
     * Omit specific fields from the drivers
     */
    omit?: driversOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: driversInclude<ExtArgs> | null
    /**
     * Filter, which drivers to fetch.
     */
    where?: driversWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of drivers to fetch.
     */
    orderBy?: driversOrderByWithRelationInput | driversOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing drivers.
     */
    cursor?: driversWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` drivers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` drivers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of drivers.
     */
    distinct?: DriversScalarFieldEnum | DriversScalarFieldEnum[]
  }

  /**
   * drivers create
   */
  export type driversCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the drivers
     */
    select?: driversSelect<ExtArgs> | null
    /**
     * Omit specific fields from the drivers
     */
    omit?: driversOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: driversInclude<ExtArgs> | null
    /**
     * The data needed to create a drivers.
     */
    data: XOR<driversCreateInput, driversUncheckedCreateInput>
  }

  /**
   * drivers createMany
   */
  export type driversCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many drivers.
     */
    data: driversCreateManyInput | driversCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * drivers createManyAndReturn
   */
  export type driversCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the drivers
     */
    select?: driversSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the drivers
     */
    omit?: driversOmit<ExtArgs> | null
    /**
     * The data used to create many drivers.
     */
    data: driversCreateManyInput | driversCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: driversIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * drivers update
   */
  export type driversUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the drivers
     */
    select?: driversSelect<ExtArgs> | null
    /**
     * Omit specific fields from the drivers
     */
    omit?: driversOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: driversInclude<ExtArgs> | null
    /**
     * The data needed to update a drivers.
     */
    data: XOR<driversUpdateInput, driversUncheckedUpdateInput>
    /**
     * Choose, which drivers to update.
     */
    where: driversWhereUniqueInput
  }

  /**
   * drivers updateMany
   */
  export type driversUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update drivers.
     */
    data: XOR<driversUpdateManyMutationInput, driversUncheckedUpdateManyInput>
    /**
     * Filter which drivers to update
     */
    where?: driversWhereInput
    /**
     * Limit how many drivers to update.
     */
    limit?: number
  }

  /**
   * drivers updateManyAndReturn
   */
  export type driversUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the drivers
     */
    select?: driversSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the drivers
     */
    omit?: driversOmit<ExtArgs> | null
    /**
     * The data used to update drivers.
     */
    data: XOR<driversUpdateManyMutationInput, driversUncheckedUpdateManyInput>
    /**
     * Filter which drivers to update
     */
    where?: driversWhereInput
    /**
     * Limit how many drivers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: driversIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * drivers upsert
   */
  export type driversUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the drivers
     */
    select?: driversSelect<ExtArgs> | null
    /**
     * Omit specific fields from the drivers
     */
    omit?: driversOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: driversInclude<ExtArgs> | null
    /**
     * The filter to search for the drivers to update in case it exists.
     */
    where: driversWhereUniqueInput
    /**
     * In case the drivers found by the `where` argument doesn't exist, create a new drivers with this data.
     */
    create: XOR<driversCreateInput, driversUncheckedCreateInput>
    /**
     * In case the drivers was found with the provided `where` argument, update it with this data.
     */
    update: XOR<driversUpdateInput, driversUncheckedUpdateInput>
  }

  /**
   * drivers delete
   */
  export type driversDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the drivers
     */
    select?: driversSelect<ExtArgs> | null
    /**
     * Omit specific fields from the drivers
     */
    omit?: driversOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: driversInclude<ExtArgs> | null
    /**
     * Filter which drivers to delete.
     */
    where: driversWhereUniqueInput
  }

  /**
   * drivers deleteMany
   */
  export type driversDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which drivers to delete
     */
    where?: driversWhereInput
    /**
     * Limit how many drivers to delete.
     */
    limit?: number
  }

  /**
   * drivers without action
   */
  export type driversDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the drivers
     */
    select?: driversSelect<ExtArgs> | null
    /**
     * Omit specific fields from the drivers
     */
    omit?: driversOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: driversInclude<ExtArgs> | null
  }


  /**
   * Model ride_tracking
   */

  export type AggregateRide_tracking = {
    _count: Ride_trackingCountAggregateOutputType | null
    _avg: Ride_trackingAvgAggregateOutputType | null
    _sum: Ride_trackingSumAggregateOutputType | null
    _min: Ride_trackingMinAggregateOutputType | null
    _max: Ride_trackingMaxAggregateOutputType | null
  }

  export type Ride_trackingAvgAggregateOutputType = {
    id: number | null
  }

  export type Ride_trackingSumAggregateOutputType = {
    id: bigint | null
  }

  export type Ride_trackingMinAggregateOutputType = {
    id: bigint | null
    ride_id: string | null
    recorded_at: Date | null
  }

  export type Ride_trackingMaxAggregateOutputType = {
    id: bigint | null
    ride_id: string | null
    recorded_at: Date | null
  }

  export type Ride_trackingCountAggregateOutputType = {
    id: number
    ride_id: number
    recorded_at: number
    _all: number
  }


  export type Ride_trackingAvgAggregateInputType = {
    id?: true
  }

  export type Ride_trackingSumAggregateInputType = {
    id?: true
  }

  export type Ride_trackingMinAggregateInputType = {
    id?: true
    ride_id?: true
    recorded_at?: true
  }

  export type Ride_trackingMaxAggregateInputType = {
    id?: true
    ride_id?: true
    recorded_at?: true
  }

  export type Ride_trackingCountAggregateInputType = {
    id?: true
    ride_id?: true
    recorded_at?: true
    _all?: true
  }

  export type Ride_trackingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ride_tracking to aggregate.
     */
    where?: ride_trackingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ride_trackings to fetch.
     */
    orderBy?: ride_trackingOrderByWithRelationInput | ride_trackingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ride_trackingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ride_trackings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ride_trackings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ride_trackings
    **/
    _count?: true | Ride_trackingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Ride_trackingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Ride_trackingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Ride_trackingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Ride_trackingMaxAggregateInputType
  }

  export type GetRide_trackingAggregateType<T extends Ride_trackingAggregateArgs> = {
        [P in keyof T & keyof AggregateRide_tracking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRide_tracking[P]>
      : GetScalarType<T[P], AggregateRide_tracking[P]>
  }




  export type ride_trackingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ride_trackingWhereInput
    orderBy?: ride_trackingOrderByWithAggregationInput | ride_trackingOrderByWithAggregationInput[]
    by: Ride_trackingScalarFieldEnum[] | Ride_trackingScalarFieldEnum
    having?: ride_trackingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Ride_trackingCountAggregateInputType | true
    _avg?: Ride_trackingAvgAggregateInputType
    _sum?: Ride_trackingSumAggregateInputType
    _min?: Ride_trackingMinAggregateInputType
    _max?: Ride_trackingMaxAggregateInputType
  }

  export type Ride_trackingGroupByOutputType = {
    id: bigint
    ride_id: string
    recorded_at: Date
    _count: Ride_trackingCountAggregateOutputType | null
    _avg: Ride_trackingAvgAggregateOutputType | null
    _sum: Ride_trackingSumAggregateOutputType | null
    _min: Ride_trackingMinAggregateOutputType | null
    _max: Ride_trackingMaxAggregateOutputType | null
  }

  type GetRide_trackingGroupByPayload<T extends ride_trackingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Ride_trackingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Ride_trackingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Ride_trackingGroupByOutputType[P]>
            : GetScalarType<T[P], Ride_trackingGroupByOutputType[P]>
        }
      >
    >


  export type ride_trackingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ride_id?: boolean
    recorded_at?: boolean
  }, ExtArgs["result"]["ride_tracking"]>


  export type ride_trackingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    ride_id?: boolean
    recorded_at?: boolean
  }, ExtArgs["result"]["ride_tracking"]>

  export type ride_trackingSelectScalar = {
    id?: boolean
    ride_id?: boolean
    recorded_at?: boolean
  }

  export type ride_trackingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "ride_id" | "recorded_at", ExtArgs["result"]["ride_tracking"]>

  export type $ride_trackingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ride_tracking"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: bigint
      ride_id: string
      recorded_at: Date
    }, ExtArgs["result"]["ride_tracking"]>
    composites: {}
  }

  type ride_trackingGetPayload<S extends boolean | null | undefined | ride_trackingDefaultArgs> = $Result.GetResult<Prisma.$ride_trackingPayload, S>

  type ride_trackingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ride_trackingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Ride_trackingCountAggregateInputType | true
    }

  export interface ride_trackingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ride_tracking'], meta: { name: 'ride_tracking' } }
    /**
     * Find zero or one Ride_tracking that matches the filter.
     * @param {ride_trackingFindUniqueArgs} args - Arguments to find a Ride_tracking
     * @example
     * // Get one Ride_tracking
     * const ride_tracking = await prisma.ride_tracking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ride_trackingFindUniqueArgs>(args: SelectSubset<T, ride_trackingFindUniqueArgs<ExtArgs>>): Prisma__ride_trackingClient<$Result.GetResult<Prisma.$ride_trackingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Ride_tracking that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ride_trackingFindUniqueOrThrowArgs} args - Arguments to find a Ride_tracking
     * @example
     * // Get one Ride_tracking
     * const ride_tracking = await prisma.ride_tracking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ride_trackingFindUniqueOrThrowArgs>(args: SelectSubset<T, ride_trackingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ride_trackingClient<$Result.GetResult<Prisma.$ride_trackingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ride_tracking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ride_trackingFindFirstArgs} args - Arguments to find a Ride_tracking
     * @example
     * // Get one Ride_tracking
     * const ride_tracking = await prisma.ride_tracking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ride_trackingFindFirstArgs>(args?: SelectSubset<T, ride_trackingFindFirstArgs<ExtArgs>>): Prisma__ride_trackingClient<$Result.GetResult<Prisma.$ride_trackingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Ride_tracking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ride_trackingFindFirstOrThrowArgs} args - Arguments to find a Ride_tracking
     * @example
     * // Get one Ride_tracking
     * const ride_tracking = await prisma.ride_tracking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ride_trackingFindFirstOrThrowArgs>(args?: SelectSubset<T, ride_trackingFindFirstOrThrowArgs<ExtArgs>>): Prisma__ride_trackingClient<$Result.GetResult<Prisma.$ride_trackingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Ride_trackings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ride_trackingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ride_trackings
     * const ride_trackings = await prisma.ride_tracking.findMany()
     * 
     * // Get first 10 Ride_trackings
     * const ride_trackings = await prisma.ride_tracking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ride_trackingWithIdOnly = await prisma.ride_tracking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ride_trackingFindManyArgs>(args?: SelectSubset<T, ride_trackingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ride_trackingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Delete a Ride_tracking.
     * @param {ride_trackingDeleteArgs} args - Arguments to delete one Ride_tracking.
     * @example
     * // Delete one Ride_tracking
     * const Ride_tracking = await prisma.ride_tracking.delete({
     *   where: {
     *     // ... filter to delete one Ride_tracking
     *   }
     * })
     * 
     */
    delete<T extends ride_trackingDeleteArgs>(args: SelectSubset<T, ride_trackingDeleteArgs<ExtArgs>>): Prisma__ride_trackingClient<$Result.GetResult<Prisma.$ride_trackingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Ride_tracking.
     * @param {ride_trackingUpdateArgs} args - Arguments to update one Ride_tracking.
     * @example
     * // Update one Ride_tracking
     * const ride_tracking = await prisma.ride_tracking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ride_trackingUpdateArgs>(args: SelectSubset<T, ride_trackingUpdateArgs<ExtArgs>>): Prisma__ride_trackingClient<$Result.GetResult<Prisma.$ride_trackingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Ride_trackings.
     * @param {ride_trackingDeleteManyArgs} args - Arguments to filter Ride_trackings to delete.
     * @example
     * // Delete a few Ride_trackings
     * const { count } = await prisma.ride_tracking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ride_trackingDeleteManyArgs>(args?: SelectSubset<T, ride_trackingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ride_trackings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ride_trackingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ride_trackings
     * const ride_tracking = await prisma.ride_tracking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ride_trackingUpdateManyArgs>(args: SelectSubset<T, ride_trackingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ride_trackings and returns the data updated in the database.
     * @param {ride_trackingUpdateManyAndReturnArgs} args - Arguments to update many Ride_trackings.
     * @example
     * // Update many Ride_trackings
     * const ride_tracking = await prisma.ride_tracking.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Ride_trackings and only return the `id`
     * const ride_trackingWithIdOnly = await prisma.ride_tracking.updateManyAndReturn({
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
    updateManyAndReturn<T extends ride_trackingUpdateManyAndReturnArgs>(args: SelectSubset<T, ride_trackingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ride_trackingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>


    /**
     * Count the number of Ride_trackings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ride_trackingCountArgs} args - Arguments to filter Ride_trackings to count.
     * @example
     * // Count the number of Ride_trackings
     * const count = await prisma.ride_tracking.count({
     *   where: {
     *     // ... the filter for the Ride_trackings we want to count
     *   }
     * })
    **/
    count<T extends ride_trackingCountArgs>(
      args?: Subset<T, ride_trackingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Ride_trackingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Ride_tracking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Ride_trackingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Ride_trackingAggregateArgs>(args: Subset<T, Ride_trackingAggregateArgs>): Prisma.PrismaPromise<GetRide_trackingAggregateType<T>>

    /**
     * Group by Ride_tracking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ride_trackingGroupByArgs} args - Group by arguments.
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
      T extends ride_trackingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ride_trackingGroupByArgs['orderBy'] }
        : { orderBy?: ride_trackingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ride_trackingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRide_trackingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ride_tracking model
   */
  readonly fields: ride_trackingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ride_tracking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ride_trackingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the ride_tracking model
   */
  interface ride_trackingFieldRefs {
    readonly id: FieldRef<"ride_tracking", 'BigInt'>
    readonly ride_id: FieldRef<"ride_tracking", 'String'>
    readonly recorded_at: FieldRef<"ride_tracking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ride_tracking findUnique
   */
  export type ride_trackingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ride_tracking
     */
    select?: ride_trackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ride_tracking
     */
    omit?: ride_trackingOmit<ExtArgs> | null
    /**
     * Filter, which ride_tracking to fetch.
     */
    where: ride_trackingWhereUniqueInput
  }

  /**
   * ride_tracking findUniqueOrThrow
   */
  export type ride_trackingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ride_tracking
     */
    select?: ride_trackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ride_tracking
     */
    omit?: ride_trackingOmit<ExtArgs> | null
    /**
     * Filter, which ride_tracking to fetch.
     */
    where: ride_trackingWhereUniqueInput
  }

  /**
   * ride_tracking findFirst
   */
  export type ride_trackingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ride_tracking
     */
    select?: ride_trackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ride_tracking
     */
    omit?: ride_trackingOmit<ExtArgs> | null
    /**
     * Filter, which ride_tracking to fetch.
     */
    where?: ride_trackingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ride_trackings to fetch.
     */
    orderBy?: ride_trackingOrderByWithRelationInput | ride_trackingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ride_trackings.
     */
    cursor?: ride_trackingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ride_trackings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ride_trackings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ride_trackings.
     */
    distinct?: Ride_trackingScalarFieldEnum | Ride_trackingScalarFieldEnum[]
  }

  /**
   * ride_tracking findFirstOrThrow
   */
  export type ride_trackingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ride_tracking
     */
    select?: ride_trackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ride_tracking
     */
    omit?: ride_trackingOmit<ExtArgs> | null
    /**
     * Filter, which ride_tracking to fetch.
     */
    where?: ride_trackingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ride_trackings to fetch.
     */
    orderBy?: ride_trackingOrderByWithRelationInput | ride_trackingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ride_trackings.
     */
    cursor?: ride_trackingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ride_trackings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ride_trackings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ride_trackings.
     */
    distinct?: Ride_trackingScalarFieldEnum | Ride_trackingScalarFieldEnum[]
  }

  /**
   * ride_tracking findMany
   */
  export type ride_trackingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ride_tracking
     */
    select?: ride_trackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ride_tracking
     */
    omit?: ride_trackingOmit<ExtArgs> | null
    /**
     * Filter, which ride_trackings to fetch.
     */
    where?: ride_trackingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ride_trackings to fetch.
     */
    orderBy?: ride_trackingOrderByWithRelationInput | ride_trackingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ride_trackings.
     */
    cursor?: ride_trackingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ride_trackings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ride_trackings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ride_trackings.
     */
    distinct?: Ride_trackingScalarFieldEnum | Ride_trackingScalarFieldEnum[]
  }

  /**
   * ride_tracking update
   */
  export type ride_trackingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ride_tracking
     */
    select?: ride_trackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ride_tracking
     */
    omit?: ride_trackingOmit<ExtArgs> | null
    /**
     * The data needed to update a ride_tracking.
     */
    data: XOR<ride_trackingUpdateInput, ride_trackingUncheckedUpdateInput>
    /**
     * Choose, which ride_tracking to update.
     */
    where: ride_trackingWhereUniqueInput
  }

  /**
   * ride_tracking updateMany
   */
  export type ride_trackingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ride_trackings.
     */
    data: XOR<ride_trackingUpdateManyMutationInput, ride_trackingUncheckedUpdateManyInput>
    /**
     * Filter which ride_trackings to update
     */
    where?: ride_trackingWhereInput
    /**
     * Limit how many ride_trackings to update.
     */
    limit?: number
  }

  /**
   * ride_tracking updateManyAndReturn
   */
  export type ride_trackingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ride_tracking
     */
    select?: ride_trackingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ride_tracking
     */
    omit?: ride_trackingOmit<ExtArgs> | null
    /**
     * The data used to update ride_trackings.
     */
    data: XOR<ride_trackingUpdateManyMutationInput, ride_trackingUncheckedUpdateManyInput>
    /**
     * Filter which ride_trackings to update
     */
    where?: ride_trackingWhereInput
    /**
     * Limit how many ride_trackings to update.
     */
    limit?: number
  }

  /**
   * ride_tracking delete
   */
  export type ride_trackingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ride_tracking
     */
    select?: ride_trackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ride_tracking
     */
    omit?: ride_trackingOmit<ExtArgs> | null
    /**
     * Filter which ride_tracking to delete.
     */
    where: ride_trackingWhereUniqueInput
  }

  /**
   * ride_tracking deleteMany
   */
  export type ride_trackingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ride_trackings to delete
     */
    where?: ride_trackingWhereInput
    /**
     * Limit how many ride_trackings to delete.
     */
    limit?: number
  }

  /**
   * ride_tracking without action
   */
  export type ride_trackingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ride_tracking
     */
    select?: ride_trackingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ride_tracking
     */
    omit?: ride_trackingOmit<ExtArgs> | null
  }


  /**
   * Model rides
   */

  export type AggregateRides = {
    _count: RidesCountAggregateOutputType | null
    _avg: RidesAvgAggregateOutputType | null
    _sum: RidesSumAggregateOutputType | null
    _min: RidesMinAggregateOutputType | null
    _max: RidesMaxAggregateOutputType | null
  }

  export type RidesAvgAggregateOutputType = {
    estimated_fare: Decimal | null
    actual_fare: Decimal | null
    surge_multiplier: Decimal | null
    distance_meters: number | null
  }

  export type RidesSumAggregateOutputType = {
    estimated_fare: Decimal | null
    actual_fare: Decimal | null
    surge_multiplier: Decimal | null
    distance_meters: number | null
  }

  export type RidesMinAggregateOutputType = {
    id: string | null
    rider_id: string | null
    driver_id: string | null
    status: string | null
    pickup_address: string | null
    dropoff_address: string | null
    estimated_fare: Decimal | null
    actual_fare: Decimal | null
    surge_multiplier: Decimal | null
    distance_meters: number | null
    requested_at: Date | null
    accepted_at: Date | null
    started_at: Date | null
    ended_at: Date | null
    cancelled_at: Date | null
    cancellation_reason: string | null
    otp: string | null
  }

  export type RidesMaxAggregateOutputType = {
    id: string | null
    rider_id: string | null
    driver_id: string | null
    status: string | null
    pickup_address: string | null
    dropoff_address: string | null
    estimated_fare: Decimal | null
    actual_fare: Decimal | null
    surge_multiplier: Decimal | null
    distance_meters: number | null
    requested_at: Date | null
    accepted_at: Date | null
    started_at: Date | null
    ended_at: Date | null
    cancelled_at: Date | null
    cancellation_reason: string | null
    otp: string | null
  }

  export type RidesCountAggregateOutputType = {
    id: number
    rider_id: number
    driver_id: number
    status: number
    pickup_address: number
    dropoff_address: number
    estimated_fare: number
    actual_fare: number
    surge_multiplier: number
    distance_meters: number
    requested_at: number
    accepted_at: number
    started_at: number
    ended_at: number
    cancelled_at: number
    cancellation_reason: number
    otp: number
    _all: number
  }


  export type RidesAvgAggregateInputType = {
    estimated_fare?: true
    actual_fare?: true
    surge_multiplier?: true
    distance_meters?: true
  }

  export type RidesSumAggregateInputType = {
    estimated_fare?: true
    actual_fare?: true
    surge_multiplier?: true
    distance_meters?: true
  }

  export type RidesMinAggregateInputType = {
    id?: true
    rider_id?: true
    driver_id?: true
    status?: true
    pickup_address?: true
    dropoff_address?: true
    estimated_fare?: true
    actual_fare?: true
    surge_multiplier?: true
    distance_meters?: true
    requested_at?: true
    accepted_at?: true
    started_at?: true
    ended_at?: true
    cancelled_at?: true
    cancellation_reason?: true
    otp?: true
  }

  export type RidesMaxAggregateInputType = {
    id?: true
    rider_id?: true
    driver_id?: true
    status?: true
    pickup_address?: true
    dropoff_address?: true
    estimated_fare?: true
    actual_fare?: true
    surge_multiplier?: true
    distance_meters?: true
    requested_at?: true
    accepted_at?: true
    started_at?: true
    ended_at?: true
    cancelled_at?: true
    cancellation_reason?: true
    otp?: true
  }

  export type RidesCountAggregateInputType = {
    id?: true
    rider_id?: true
    driver_id?: true
    status?: true
    pickup_address?: true
    dropoff_address?: true
    estimated_fare?: true
    actual_fare?: true
    surge_multiplier?: true
    distance_meters?: true
    requested_at?: true
    accepted_at?: true
    started_at?: true
    ended_at?: true
    cancelled_at?: true
    cancellation_reason?: true
    otp?: true
    _all?: true
  }

  export type RidesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rides to aggregate.
     */
    where?: ridesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rides to fetch.
     */
    orderBy?: ridesOrderByWithRelationInput | ridesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ridesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned rides
    **/
    _count?: true | RidesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RidesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RidesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RidesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RidesMaxAggregateInputType
  }

  export type GetRidesAggregateType<T extends RidesAggregateArgs> = {
        [P in keyof T & keyof AggregateRides]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRides[P]>
      : GetScalarType<T[P], AggregateRides[P]>
  }




  export type ridesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ridesWhereInput
    orderBy?: ridesOrderByWithAggregationInput | ridesOrderByWithAggregationInput[]
    by: RidesScalarFieldEnum[] | RidesScalarFieldEnum
    having?: ridesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RidesCountAggregateInputType | true
    _avg?: RidesAvgAggregateInputType
    _sum?: RidesSumAggregateInputType
    _min?: RidesMinAggregateInputType
    _max?: RidesMaxAggregateInputType
  }

  export type RidesGroupByOutputType = {
    id: string
    rider_id: string | null
    driver_id: string | null
    status: string | null
    pickup_address: string | null
    dropoff_address: string | null
    estimated_fare: Decimal | null
    actual_fare: Decimal | null
    surge_multiplier: Decimal | null
    distance_meters: number | null
    requested_at: Date
    accepted_at: Date | null
    started_at: Date | null
    ended_at: Date | null
    cancelled_at: Date | null
    cancellation_reason: string | null
    otp: string | null
    _count: RidesCountAggregateOutputType | null
    _avg: RidesAvgAggregateOutputType | null
    _sum: RidesSumAggregateOutputType | null
    _min: RidesMinAggregateOutputType | null
    _max: RidesMaxAggregateOutputType | null
  }

  type GetRidesGroupByPayload<T extends ridesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RidesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RidesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RidesGroupByOutputType[P]>
            : GetScalarType<T[P], RidesGroupByOutputType[P]>
        }
      >
    >


  export type ridesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rider_id?: boolean
    driver_id?: boolean
    status?: boolean
    pickup_address?: boolean
    dropoff_address?: boolean
    estimated_fare?: boolean
    actual_fare?: boolean
    surge_multiplier?: boolean
    distance_meters?: boolean
    requested_at?: boolean
    accepted_at?: boolean
    started_at?: boolean
    ended_at?: boolean
    cancelled_at?: boolean
    cancellation_reason?: boolean
    otp?: boolean
    users_rides_driver_idTousers?: boolean | rides$users_rides_driver_idTousersArgs<ExtArgs>
    users_rides_rider_idTousers?: boolean | rides$users_rides_rider_idTousersArgs<ExtArgs>
  }, ExtArgs["result"]["rides"]>


  export type ridesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rider_id?: boolean
    driver_id?: boolean
    status?: boolean
    pickup_address?: boolean
    dropoff_address?: boolean
    estimated_fare?: boolean
    actual_fare?: boolean
    surge_multiplier?: boolean
    distance_meters?: boolean
    requested_at?: boolean
    accepted_at?: boolean
    started_at?: boolean
    ended_at?: boolean
    cancelled_at?: boolean
    cancellation_reason?: boolean
    otp?: boolean
    users_rides_driver_idTousers?: boolean | rides$users_rides_driver_idTousersArgs<ExtArgs>
    users_rides_rider_idTousers?: boolean | rides$users_rides_rider_idTousersArgs<ExtArgs>
  }, ExtArgs["result"]["rides"]>

  export type ridesSelectScalar = {
    id?: boolean
    rider_id?: boolean
    driver_id?: boolean
    status?: boolean
    pickup_address?: boolean
    dropoff_address?: boolean
    estimated_fare?: boolean
    actual_fare?: boolean
    surge_multiplier?: boolean
    distance_meters?: boolean
    requested_at?: boolean
    accepted_at?: boolean
    started_at?: boolean
    ended_at?: boolean
    cancelled_at?: boolean
    cancellation_reason?: boolean
    otp?: boolean
  }

  export type ridesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rider_id" | "driver_id" | "status" | "pickup_address" | "dropoff_address" | "estimated_fare" | "actual_fare" | "surge_multiplier" | "distance_meters" | "requested_at" | "accepted_at" | "started_at" | "ended_at" | "cancelled_at" | "cancellation_reason" | "otp", ExtArgs["result"]["rides"]>
  export type ridesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_rides_driver_idTousers?: boolean | rides$users_rides_driver_idTousersArgs<ExtArgs>
    users_rides_rider_idTousers?: boolean | rides$users_rides_rider_idTousersArgs<ExtArgs>
  }
  export type ridesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users_rides_driver_idTousers?: boolean | rides$users_rides_driver_idTousersArgs<ExtArgs>
    users_rides_rider_idTousers?: boolean | rides$users_rides_rider_idTousersArgs<ExtArgs>
  }

  export type $ridesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "rides"
    objects: {
      users_rides_driver_idTousers: Prisma.$usersPayload<ExtArgs> | null
      users_rides_rider_idTousers: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      rider_id: string | null
      driver_id: string | null
      status: string | null
      pickup_address: string | null
      dropoff_address: string | null
      estimated_fare: Prisma.Decimal | null
      actual_fare: Prisma.Decimal | null
      surge_multiplier: Prisma.Decimal | null
      distance_meters: number | null
      requested_at: Date
      accepted_at: Date | null
      started_at: Date | null
      ended_at: Date | null
      cancelled_at: Date | null
      cancellation_reason: string | null
      otp: string | null
    }, ExtArgs["result"]["rides"]>
    composites: {}
  }

  type ridesGetPayload<S extends boolean | null | undefined | ridesDefaultArgs> = $Result.GetResult<Prisma.$ridesPayload, S>

  type ridesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ridesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RidesCountAggregateInputType | true
    }

  export interface ridesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['rides'], meta: { name: 'rides' } }
    /**
     * Find zero or one Rides that matches the filter.
     * @param {ridesFindUniqueArgs} args - Arguments to find a Rides
     * @example
     * // Get one Rides
     * const rides = await prisma.rides.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ridesFindUniqueArgs>(args: SelectSubset<T, ridesFindUniqueArgs<ExtArgs>>): Prisma__ridesClient<$Result.GetResult<Prisma.$ridesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Rides that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ridesFindUniqueOrThrowArgs} args - Arguments to find a Rides
     * @example
     * // Get one Rides
     * const rides = await prisma.rides.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ridesFindUniqueOrThrowArgs>(args: SelectSubset<T, ridesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ridesClient<$Result.GetResult<Prisma.$ridesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rides that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ridesFindFirstArgs} args - Arguments to find a Rides
     * @example
     * // Get one Rides
     * const rides = await prisma.rides.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ridesFindFirstArgs>(args?: SelectSubset<T, ridesFindFirstArgs<ExtArgs>>): Prisma__ridesClient<$Result.GetResult<Prisma.$ridesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Rides that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ridesFindFirstOrThrowArgs} args - Arguments to find a Rides
     * @example
     * // Get one Rides
     * const rides = await prisma.rides.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ridesFindFirstOrThrowArgs>(args?: SelectSubset<T, ridesFindFirstOrThrowArgs<ExtArgs>>): Prisma__ridesClient<$Result.GetResult<Prisma.$ridesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Rides that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ridesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Rides
     * const rides = await prisma.rides.findMany()
     * 
     * // Get first 10 Rides
     * const rides = await prisma.rides.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ridesWithIdOnly = await prisma.rides.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ridesFindManyArgs>(args?: SelectSubset<T, ridesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ridesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Delete a Rides.
     * @param {ridesDeleteArgs} args - Arguments to delete one Rides.
     * @example
     * // Delete one Rides
     * const Rides = await prisma.rides.delete({
     *   where: {
     *     // ... filter to delete one Rides
     *   }
     * })
     * 
     */
    delete<T extends ridesDeleteArgs>(args: SelectSubset<T, ridesDeleteArgs<ExtArgs>>): Prisma__ridesClient<$Result.GetResult<Prisma.$ridesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Rides.
     * @param {ridesUpdateArgs} args - Arguments to update one Rides.
     * @example
     * // Update one Rides
     * const rides = await prisma.rides.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ridesUpdateArgs>(args: SelectSubset<T, ridesUpdateArgs<ExtArgs>>): Prisma__ridesClient<$Result.GetResult<Prisma.$ridesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Rides.
     * @param {ridesDeleteManyArgs} args - Arguments to filter Rides to delete.
     * @example
     * // Delete a few Rides
     * const { count } = await prisma.rides.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ridesDeleteManyArgs>(args?: SelectSubset<T, ridesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rides.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ridesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Rides
     * const rides = await prisma.rides.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ridesUpdateManyArgs>(args: SelectSubset<T, ridesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Rides and returns the data updated in the database.
     * @param {ridesUpdateManyAndReturnArgs} args - Arguments to update many Rides.
     * @example
     * // Update many Rides
     * const rides = await prisma.rides.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Rides and only return the `id`
     * const ridesWithIdOnly = await prisma.rides.updateManyAndReturn({
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
    updateManyAndReturn<T extends ridesUpdateManyAndReturnArgs>(args: SelectSubset<T, ridesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ridesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>


    /**
     * Count the number of Rides.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ridesCountArgs} args - Arguments to filter Rides to count.
     * @example
     * // Count the number of Rides
     * const count = await prisma.rides.count({
     *   where: {
     *     // ... the filter for the Rides we want to count
     *   }
     * })
    **/
    count<T extends ridesCountArgs>(
      args?: Subset<T, ridesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RidesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rides.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RidesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RidesAggregateArgs>(args: Subset<T, RidesAggregateArgs>): Prisma.PrismaPromise<GetRidesAggregateType<T>>

    /**
     * Group by Rides.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ridesGroupByArgs} args - Group by arguments.
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
      T extends ridesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ridesGroupByArgs['orderBy'] }
        : { orderBy?: ridesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ridesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRidesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the rides model
   */
  readonly fields: ridesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for rides.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ridesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users_rides_driver_idTousers<T extends rides$users_rides_driver_idTousersArgs<ExtArgs> = {}>(args?: Subset<T, rides$users_rides_driver_idTousersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users_rides_rider_idTousers<T extends rides$users_rides_rider_idTousersArgs<ExtArgs> = {}>(args?: Subset<T, rides$users_rides_rider_idTousersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the rides model
   */
  interface ridesFieldRefs {
    readonly id: FieldRef<"rides", 'String'>
    readonly rider_id: FieldRef<"rides", 'String'>
    readonly driver_id: FieldRef<"rides", 'String'>
    readonly status: FieldRef<"rides", 'String'>
    readonly pickup_address: FieldRef<"rides", 'String'>
    readonly dropoff_address: FieldRef<"rides", 'String'>
    readonly estimated_fare: FieldRef<"rides", 'Decimal'>
    readonly actual_fare: FieldRef<"rides", 'Decimal'>
    readonly surge_multiplier: FieldRef<"rides", 'Decimal'>
    readonly distance_meters: FieldRef<"rides", 'Int'>
    readonly requested_at: FieldRef<"rides", 'DateTime'>
    readonly accepted_at: FieldRef<"rides", 'DateTime'>
    readonly started_at: FieldRef<"rides", 'DateTime'>
    readonly ended_at: FieldRef<"rides", 'DateTime'>
    readonly cancelled_at: FieldRef<"rides", 'DateTime'>
    readonly cancellation_reason: FieldRef<"rides", 'String'>
    readonly otp: FieldRef<"rides", 'String'>
  }
    

  // Custom InputTypes
  /**
   * rides findUnique
   */
  export type ridesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rides
     */
    select?: ridesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rides
     */
    omit?: ridesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ridesInclude<ExtArgs> | null
    /**
     * Filter, which rides to fetch.
     */
    where: ridesWhereUniqueInput
  }

  /**
   * rides findUniqueOrThrow
   */
  export type ridesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rides
     */
    select?: ridesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rides
     */
    omit?: ridesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ridesInclude<ExtArgs> | null
    /**
     * Filter, which rides to fetch.
     */
    where: ridesWhereUniqueInput
  }

  /**
   * rides findFirst
   */
  export type ridesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rides
     */
    select?: ridesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rides
     */
    omit?: ridesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ridesInclude<ExtArgs> | null
    /**
     * Filter, which rides to fetch.
     */
    where?: ridesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rides to fetch.
     */
    orderBy?: ridesOrderByWithRelationInput | ridesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rides.
     */
    cursor?: ridesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rides.
     */
    distinct?: RidesScalarFieldEnum | RidesScalarFieldEnum[]
  }

  /**
   * rides findFirstOrThrow
   */
  export type ridesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rides
     */
    select?: ridesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rides
     */
    omit?: ridesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ridesInclude<ExtArgs> | null
    /**
     * Filter, which rides to fetch.
     */
    where?: ridesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rides to fetch.
     */
    orderBy?: ridesOrderByWithRelationInput | ridesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for rides.
     */
    cursor?: ridesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rides.
     */
    distinct?: RidesScalarFieldEnum | RidesScalarFieldEnum[]
  }

  /**
   * rides findMany
   */
  export type ridesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rides
     */
    select?: ridesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rides
     */
    omit?: ridesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ridesInclude<ExtArgs> | null
    /**
     * Filter, which rides to fetch.
     */
    where?: ridesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of rides to fetch.
     */
    orderBy?: ridesOrderByWithRelationInput | ridesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing rides.
     */
    cursor?: ridesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` rides from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` rides.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of rides.
     */
    distinct?: RidesScalarFieldEnum | RidesScalarFieldEnum[]
  }

  /**
   * rides update
   */
  export type ridesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rides
     */
    select?: ridesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rides
     */
    omit?: ridesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ridesInclude<ExtArgs> | null
    /**
     * The data needed to update a rides.
     */
    data: XOR<ridesUpdateInput, ridesUncheckedUpdateInput>
    /**
     * Choose, which rides to update.
     */
    where: ridesWhereUniqueInput
  }

  /**
   * rides updateMany
   */
  export type ridesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update rides.
     */
    data: XOR<ridesUpdateManyMutationInput, ridesUncheckedUpdateManyInput>
    /**
     * Filter which rides to update
     */
    where?: ridesWhereInput
    /**
     * Limit how many rides to update.
     */
    limit?: number
  }

  /**
   * rides updateManyAndReturn
   */
  export type ridesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rides
     */
    select?: ridesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the rides
     */
    omit?: ridesOmit<ExtArgs> | null
    /**
     * The data used to update rides.
     */
    data: XOR<ridesUpdateManyMutationInput, ridesUncheckedUpdateManyInput>
    /**
     * Filter which rides to update
     */
    where?: ridesWhereInput
    /**
     * Limit how many rides to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ridesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * rides delete
   */
  export type ridesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rides
     */
    select?: ridesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rides
     */
    omit?: ridesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ridesInclude<ExtArgs> | null
    /**
     * Filter which rides to delete.
     */
    where: ridesWhereUniqueInput
  }

  /**
   * rides deleteMany
   */
  export type ridesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which rides to delete
     */
    where?: ridesWhereInput
    /**
     * Limit how many rides to delete.
     */
    limit?: number
  }

  /**
   * rides.users_rides_driver_idTousers
   */
  export type rides$users_rides_driver_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * rides.users_rides_rider_idTousers
   */
  export type rides$users_rides_rider_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * rides without action
   */
  export type ridesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rides
     */
    select?: ridesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rides
     */
    omit?: ridesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ridesInclude<ExtArgs> | null
  }


  /**
   * Model spatial_ref_sys
   */

  export type AggregateSpatial_ref_sys = {
    _count: Spatial_ref_sysCountAggregateOutputType | null
    _avg: Spatial_ref_sysAvgAggregateOutputType | null
    _sum: Spatial_ref_sysSumAggregateOutputType | null
    _min: Spatial_ref_sysMinAggregateOutputType | null
    _max: Spatial_ref_sysMaxAggregateOutputType | null
  }

  export type Spatial_ref_sysAvgAggregateOutputType = {
    srid: number | null
    auth_srid: number | null
  }

  export type Spatial_ref_sysSumAggregateOutputType = {
    srid: number | null
    auth_srid: number | null
  }

  export type Spatial_ref_sysMinAggregateOutputType = {
    srid: number | null
    auth_name: string | null
    auth_srid: number | null
    srtext: string | null
    proj4text: string | null
  }

  export type Spatial_ref_sysMaxAggregateOutputType = {
    srid: number | null
    auth_name: string | null
    auth_srid: number | null
    srtext: string | null
    proj4text: string | null
  }

  export type Spatial_ref_sysCountAggregateOutputType = {
    srid: number
    auth_name: number
    auth_srid: number
    srtext: number
    proj4text: number
    _all: number
  }


  export type Spatial_ref_sysAvgAggregateInputType = {
    srid?: true
    auth_srid?: true
  }

  export type Spatial_ref_sysSumAggregateInputType = {
    srid?: true
    auth_srid?: true
  }

  export type Spatial_ref_sysMinAggregateInputType = {
    srid?: true
    auth_name?: true
    auth_srid?: true
    srtext?: true
    proj4text?: true
  }

  export type Spatial_ref_sysMaxAggregateInputType = {
    srid?: true
    auth_name?: true
    auth_srid?: true
    srtext?: true
    proj4text?: true
  }

  export type Spatial_ref_sysCountAggregateInputType = {
    srid?: true
    auth_name?: true
    auth_srid?: true
    srtext?: true
    proj4text?: true
    _all?: true
  }

  export type Spatial_ref_sysAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which spatial_ref_sys to aggregate.
     */
    where?: spatial_ref_sysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of spatial_ref_sys to fetch.
     */
    orderBy?: spatial_ref_sysOrderByWithRelationInput | spatial_ref_sysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: spatial_ref_sysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` spatial_ref_sys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` spatial_ref_sys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned spatial_ref_sys
    **/
    _count?: true | Spatial_ref_sysCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Spatial_ref_sysAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Spatial_ref_sysSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Spatial_ref_sysMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Spatial_ref_sysMaxAggregateInputType
  }

  export type GetSpatial_ref_sysAggregateType<T extends Spatial_ref_sysAggregateArgs> = {
        [P in keyof T & keyof AggregateSpatial_ref_sys]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSpatial_ref_sys[P]>
      : GetScalarType<T[P], AggregateSpatial_ref_sys[P]>
  }




  export type spatial_ref_sysGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: spatial_ref_sysWhereInput
    orderBy?: spatial_ref_sysOrderByWithAggregationInput | spatial_ref_sysOrderByWithAggregationInput[]
    by: Spatial_ref_sysScalarFieldEnum[] | Spatial_ref_sysScalarFieldEnum
    having?: spatial_ref_sysScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Spatial_ref_sysCountAggregateInputType | true
    _avg?: Spatial_ref_sysAvgAggregateInputType
    _sum?: Spatial_ref_sysSumAggregateInputType
    _min?: Spatial_ref_sysMinAggregateInputType
    _max?: Spatial_ref_sysMaxAggregateInputType
  }

  export type Spatial_ref_sysGroupByOutputType = {
    srid: number
    auth_name: string | null
    auth_srid: number | null
    srtext: string | null
    proj4text: string | null
    _count: Spatial_ref_sysCountAggregateOutputType | null
    _avg: Spatial_ref_sysAvgAggregateOutputType | null
    _sum: Spatial_ref_sysSumAggregateOutputType | null
    _min: Spatial_ref_sysMinAggregateOutputType | null
    _max: Spatial_ref_sysMaxAggregateOutputType | null
  }

  type GetSpatial_ref_sysGroupByPayload<T extends spatial_ref_sysGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Spatial_ref_sysGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Spatial_ref_sysGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Spatial_ref_sysGroupByOutputType[P]>
            : GetScalarType<T[P], Spatial_ref_sysGroupByOutputType[P]>
        }
      >
    >


  export type spatial_ref_sysSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    srid?: boolean
    auth_name?: boolean
    auth_srid?: boolean
    srtext?: boolean
    proj4text?: boolean
  }, ExtArgs["result"]["spatial_ref_sys"]>

  export type spatial_ref_sysSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    srid?: boolean
    auth_name?: boolean
    auth_srid?: boolean
    srtext?: boolean
    proj4text?: boolean
  }, ExtArgs["result"]["spatial_ref_sys"]>

  export type spatial_ref_sysSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    srid?: boolean
    auth_name?: boolean
    auth_srid?: boolean
    srtext?: boolean
    proj4text?: boolean
  }, ExtArgs["result"]["spatial_ref_sys"]>

  export type spatial_ref_sysSelectScalar = {
    srid?: boolean
    auth_name?: boolean
    auth_srid?: boolean
    srtext?: boolean
    proj4text?: boolean
  }

  export type spatial_ref_sysOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"srid" | "auth_name" | "auth_srid" | "srtext" | "proj4text", ExtArgs["result"]["spatial_ref_sys"]>

  export type $spatial_ref_sysPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "spatial_ref_sys"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      srid: number
      auth_name: string | null
      auth_srid: number | null
      srtext: string | null
      proj4text: string | null
    }, ExtArgs["result"]["spatial_ref_sys"]>
    composites: {}
  }

  type spatial_ref_sysGetPayload<S extends boolean | null | undefined | spatial_ref_sysDefaultArgs> = $Result.GetResult<Prisma.$spatial_ref_sysPayload, S>

  type spatial_ref_sysCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<spatial_ref_sysFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Spatial_ref_sysCountAggregateInputType | true
    }

  export interface spatial_ref_sysDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['spatial_ref_sys'], meta: { name: 'spatial_ref_sys' } }
    /**
     * Find zero or one Spatial_ref_sys that matches the filter.
     * @param {spatial_ref_sysFindUniqueArgs} args - Arguments to find a Spatial_ref_sys
     * @example
     * // Get one Spatial_ref_sys
     * const spatial_ref_sys = await prisma.spatial_ref_sys.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends spatial_ref_sysFindUniqueArgs>(args: SelectSubset<T, spatial_ref_sysFindUniqueArgs<ExtArgs>>): Prisma__spatial_ref_sysClient<$Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Spatial_ref_sys that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {spatial_ref_sysFindUniqueOrThrowArgs} args - Arguments to find a Spatial_ref_sys
     * @example
     * // Get one Spatial_ref_sys
     * const spatial_ref_sys = await prisma.spatial_ref_sys.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends spatial_ref_sysFindUniqueOrThrowArgs>(args: SelectSubset<T, spatial_ref_sysFindUniqueOrThrowArgs<ExtArgs>>): Prisma__spatial_ref_sysClient<$Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Spatial_ref_sys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spatial_ref_sysFindFirstArgs} args - Arguments to find a Spatial_ref_sys
     * @example
     * // Get one Spatial_ref_sys
     * const spatial_ref_sys = await prisma.spatial_ref_sys.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends spatial_ref_sysFindFirstArgs>(args?: SelectSubset<T, spatial_ref_sysFindFirstArgs<ExtArgs>>): Prisma__spatial_ref_sysClient<$Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Spatial_ref_sys that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spatial_ref_sysFindFirstOrThrowArgs} args - Arguments to find a Spatial_ref_sys
     * @example
     * // Get one Spatial_ref_sys
     * const spatial_ref_sys = await prisma.spatial_ref_sys.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends spatial_ref_sysFindFirstOrThrowArgs>(args?: SelectSubset<T, spatial_ref_sysFindFirstOrThrowArgs<ExtArgs>>): Prisma__spatial_ref_sysClient<$Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Spatial_ref_sys that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spatial_ref_sysFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Spatial_ref_sys
     * const spatial_ref_sys = await prisma.spatial_ref_sys.findMany()
     * 
     * // Get first 10 Spatial_ref_sys
     * const spatial_ref_sys = await prisma.spatial_ref_sys.findMany({ take: 10 })
     * 
     * // Only select the `srid`
     * const spatial_ref_sysWithSridOnly = await prisma.spatial_ref_sys.findMany({ select: { srid: true } })
     * 
     */
    findMany<T extends spatial_ref_sysFindManyArgs>(args?: SelectSubset<T, spatial_ref_sysFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Spatial_ref_sys.
     * @param {spatial_ref_sysCreateArgs} args - Arguments to create a Spatial_ref_sys.
     * @example
     * // Create one Spatial_ref_sys
     * const Spatial_ref_sys = await prisma.spatial_ref_sys.create({
     *   data: {
     *     // ... data to create a Spatial_ref_sys
     *   }
     * })
     * 
     */
    create<T extends spatial_ref_sysCreateArgs>(args: SelectSubset<T, spatial_ref_sysCreateArgs<ExtArgs>>): Prisma__spatial_ref_sysClient<$Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Spatial_ref_sys.
     * @param {spatial_ref_sysCreateManyArgs} args - Arguments to create many Spatial_ref_sys.
     * @example
     * // Create many Spatial_ref_sys
     * const spatial_ref_sys = await prisma.spatial_ref_sys.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends spatial_ref_sysCreateManyArgs>(args?: SelectSubset<T, spatial_ref_sysCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Spatial_ref_sys and returns the data saved in the database.
     * @param {spatial_ref_sysCreateManyAndReturnArgs} args - Arguments to create many Spatial_ref_sys.
     * @example
     * // Create many Spatial_ref_sys
     * const spatial_ref_sys = await prisma.spatial_ref_sys.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Spatial_ref_sys and only return the `srid`
     * const spatial_ref_sysWithSridOnly = await prisma.spatial_ref_sys.createManyAndReturn({
     *   select: { srid: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends spatial_ref_sysCreateManyAndReturnArgs>(args?: SelectSubset<T, spatial_ref_sysCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Spatial_ref_sys.
     * @param {spatial_ref_sysDeleteArgs} args - Arguments to delete one Spatial_ref_sys.
     * @example
     * // Delete one Spatial_ref_sys
     * const Spatial_ref_sys = await prisma.spatial_ref_sys.delete({
     *   where: {
     *     // ... filter to delete one Spatial_ref_sys
     *   }
     * })
     * 
     */
    delete<T extends spatial_ref_sysDeleteArgs>(args: SelectSubset<T, spatial_ref_sysDeleteArgs<ExtArgs>>): Prisma__spatial_ref_sysClient<$Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Spatial_ref_sys.
     * @param {spatial_ref_sysUpdateArgs} args - Arguments to update one Spatial_ref_sys.
     * @example
     * // Update one Spatial_ref_sys
     * const spatial_ref_sys = await prisma.spatial_ref_sys.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends spatial_ref_sysUpdateArgs>(args: SelectSubset<T, spatial_ref_sysUpdateArgs<ExtArgs>>): Prisma__spatial_ref_sysClient<$Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Spatial_ref_sys.
     * @param {spatial_ref_sysDeleteManyArgs} args - Arguments to filter Spatial_ref_sys to delete.
     * @example
     * // Delete a few Spatial_ref_sys
     * const { count } = await prisma.spatial_ref_sys.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends spatial_ref_sysDeleteManyArgs>(args?: SelectSubset<T, spatial_ref_sysDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Spatial_ref_sys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spatial_ref_sysUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Spatial_ref_sys
     * const spatial_ref_sys = await prisma.spatial_ref_sys.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends spatial_ref_sysUpdateManyArgs>(args: SelectSubset<T, spatial_ref_sysUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Spatial_ref_sys and returns the data updated in the database.
     * @param {spatial_ref_sysUpdateManyAndReturnArgs} args - Arguments to update many Spatial_ref_sys.
     * @example
     * // Update many Spatial_ref_sys
     * const spatial_ref_sys = await prisma.spatial_ref_sys.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Spatial_ref_sys and only return the `srid`
     * const spatial_ref_sysWithSridOnly = await prisma.spatial_ref_sys.updateManyAndReturn({
     *   select: { srid: true },
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
    updateManyAndReturn<T extends spatial_ref_sysUpdateManyAndReturnArgs>(args: SelectSubset<T, spatial_ref_sysUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Spatial_ref_sys.
     * @param {spatial_ref_sysUpsertArgs} args - Arguments to update or create a Spatial_ref_sys.
     * @example
     * // Update or create a Spatial_ref_sys
     * const spatial_ref_sys = await prisma.spatial_ref_sys.upsert({
     *   create: {
     *     // ... data to create a Spatial_ref_sys
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Spatial_ref_sys we want to update
     *   }
     * })
     */
    upsert<T extends spatial_ref_sysUpsertArgs>(args: SelectSubset<T, spatial_ref_sysUpsertArgs<ExtArgs>>): Prisma__spatial_ref_sysClient<$Result.GetResult<Prisma.$spatial_ref_sysPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Spatial_ref_sys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spatial_ref_sysCountArgs} args - Arguments to filter Spatial_ref_sys to count.
     * @example
     * // Count the number of Spatial_ref_sys
     * const count = await prisma.spatial_ref_sys.count({
     *   where: {
     *     // ... the filter for the Spatial_ref_sys we want to count
     *   }
     * })
    **/
    count<T extends spatial_ref_sysCountArgs>(
      args?: Subset<T, spatial_ref_sysCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Spatial_ref_sysCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Spatial_ref_sys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Spatial_ref_sysAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Spatial_ref_sysAggregateArgs>(args: Subset<T, Spatial_ref_sysAggregateArgs>): Prisma.PrismaPromise<GetSpatial_ref_sysAggregateType<T>>

    /**
     * Group by Spatial_ref_sys.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {spatial_ref_sysGroupByArgs} args - Group by arguments.
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
      T extends spatial_ref_sysGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: spatial_ref_sysGroupByArgs['orderBy'] }
        : { orderBy?: spatial_ref_sysGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, spatial_ref_sysGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSpatial_ref_sysGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the spatial_ref_sys model
   */
  readonly fields: spatial_ref_sysFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for spatial_ref_sys.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__spatial_ref_sysClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the spatial_ref_sys model
   */
  interface spatial_ref_sysFieldRefs {
    readonly srid: FieldRef<"spatial_ref_sys", 'Int'>
    readonly auth_name: FieldRef<"spatial_ref_sys", 'String'>
    readonly auth_srid: FieldRef<"spatial_ref_sys", 'Int'>
    readonly srtext: FieldRef<"spatial_ref_sys", 'String'>
    readonly proj4text: FieldRef<"spatial_ref_sys", 'String'>
  }
    

  // Custom InputTypes
  /**
   * spatial_ref_sys findUnique
   */
  export type spatial_ref_sysFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spatial_ref_sys
     */
    select?: spatial_ref_sysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spatial_ref_sys
     */
    omit?: spatial_ref_sysOmit<ExtArgs> | null
    /**
     * Filter, which spatial_ref_sys to fetch.
     */
    where: spatial_ref_sysWhereUniqueInput
  }

  /**
   * spatial_ref_sys findUniqueOrThrow
   */
  export type spatial_ref_sysFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spatial_ref_sys
     */
    select?: spatial_ref_sysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spatial_ref_sys
     */
    omit?: spatial_ref_sysOmit<ExtArgs> | null
    /**
     * Filter, which spatial_ref_sys to fetch.
     */
    where: spatial_ref_sysWhereUniqueInput
  }

  /**
   * spatial_ref_sys findFirst
   */
  export type spatial_ref_sysFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spatial_ref_sys
     */
    select?: spatial_ref_sysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spatial_ref_sys
     */
    omit?: spatial_ref_sysOmit<ExtArgs> | null
    /**
     * Filter, which spatial_ref_sys to fetch.
     */
    where?: spatial_ref_sysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of spatial_ref_sys to fetch.
     */
    orderBy?: spatial_ref_sysOrderByWithRelationInput | spatial_ref_sysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for spatial_ref_sys.
     */
    cursor?: spatial_ref_sysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` spatial_ref_sys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` spatial_ref_sys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of spatial_ref_sys.
     */
    distinct?: Spatial_ref_sysScalarFieldEnum | Spatial_ref_sysScalarFieldEnum[]
  }

  /**
   * spatial_ref_sys findFirstOrThrow
   */
  export type spatial_ref_sysFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spatial_ref_sys
     */
    select?: spatial_ref_sysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spatial_ref_sys
     */
    omit?: spatial_ref_sysOmit<ExtArgs> | null
    /**
     * Filter, which spatial_ref_sys to fetch.
     */
    where?: spatial_ref_sysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of spatial_ref_sys to fetch.
     */
    orderBy?: spatial_ref_sysOrderByWithRelationInput | spatial_ref_sysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for spatial_ref_sys.
     */
    cursor?: spatial_ref_sysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` spatial_ref_sys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` spatial_ref_sys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of spatial_ref_sys.
     */
    distinct?: Spatial_ref_sysScalarFieldEnum | Spatial_ref_sysScalarFieldEnum[]
  }

  /**
   * spatial_ref_sys findMany
   */
  export type spatial_ref_sysFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spatial_ref_sys
     */
    select?: spatial_ref_sysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spatial_ref_sys
     */
    omit?: spatial_ref_sysOmit<ExtArgs> | null
    /**
     * Filter, which spatial_ref_sys to fetch.
     */
    where?: spatial_ref_sysWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of spatial_ref_sys to fetch.
     */
    orderBy?: spatial_ref_sysOrderByWithRelationInput | spatial_ref_sysOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing spatial_ref_sys.
     */
    cursor?: spatial_ref_sysWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` spatial_ref_sys from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` spatial_ref_sys.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of spatial_ref_sys.
     */
    distinct?: Spatial_ref_sysScalarFieldEnum | Spatial_ref_sysScalarFieldEnum[]
  }

  /**
   * spatial_ref_sys create
   */
  export type spatial_ref_sysCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spatial_ref_sys
     */
    select?: spatial_ref_sysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spatial_ref_sys
     */
    omit?: spatial_ref_sysOmit<ExtArgs> | null
    /**
     * The data needed to create a spatial_ref_sys.
     */
    data: XOR<spatial_ref_sysCreateInput, spatial_ref_sysUncheckedCreateInput>
  }

  /**
   * spatial_ref_sys createMany
   */
  export type spatial_ref_sysCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many spatial_ref_sys.
     */
    data: spatial_ref_sysCreateManyInput | spatial_ref_sysCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * spatial_ref_sys createManyAndReturn
   */
  export type spatial_ref_sysCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spatial_ref_sys
     */
    select?: spatial_ref_sysSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the spatial_ref_sys
     */
    omit?: spatial_ref_sysOmit<ExtArgs> | null
    /**
     * The data used to create many spatial_ref_sys.
     */
    data: spatial_ref_sysCreateManyInput | spatial_ref_sysCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * spatial_ref_sys update
   */
  export type spatial_ref_sysUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spatial_ref_sys
     */
    select?: spatial_ref_sysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spatial_ref_sys
     */
    omit?: spatial_ref_sysOmit<ExtArgs> | null
    /**
     * The data needed to update a spatial_ref_sys.
     */
    data: XOR<spatial_ref_sysUpdateInput, spatial_ref_sysUncheckedUpdateInput>
    /**
     * Choose, which spatial_ref_sys to update.
     */
    where: spatial_ref_sysWhereUniqueInput
  }

  /**
   * spatial_ref_sys updateMany
   */
  export type spatial_ref_sysUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update spatial_ref_sys.
     */
    data: XOR<spatial_ref_sysUpdateManyMutationInput, spatial_ref_sysUncheckedUpdateManyInput>
    /**
     * Filter which spatial_ref_sys to update
     */
    where?: spatial_ref_sysWhereInput
    /**
     * Limit how many spatial_ref_sys to update.
     */
    limit?: number
  }

  /**
   * spatial_ref_sys updateManyAndReturn
   */
  export type spatial_ref_sysUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spatial_ref_sys
     */
    select?: spatial_ref_sysSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the spatial_ref_sys
     */
    omit?: spatial_ref_sysOmit<ExtArgs> | null
    /**
     * The data used to update spatial_ref_sys.
     */
    data: XOR<spatial_ref_sysUpdateManyMutationInput, spatial_ref_sysUncheckedUpdateManyInput>
    /**
     * Filter which spatial_ref_sys to update
     */
    where?: spatial_ref_sysWhereInput
    /**
     * Limit how many spatial_ref_sys to update.
     */
    limit?: number
  }

  /**
   * spatial_ref_sys upsert
   */
  export type spatial_ref_sysUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spatial_ref_sys
     */
    select?: spatial_ref_sysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spatial_ref_sys
     */
    omit?: spatial_ref_sysOmit<ExtArgs> | null
    /**
     * The filter to search for the spatial_ref_sys to update in case it exists.
     */
    where: spatial_ref_sysWhereUniqueInput
    /**
     * In case the spatial_ref_sys found by the `where` argument doesn't exist, create a new spatial_ref_sys with this data.
     */
    create: XOR<spatial_ref_sysCreateInput, spatial_ref_sysUncheckedCreateInput>
    /**
     * In case the spatial_ref_sys was found with the provided `where` argument, update it with this data.
     */
    update: XOR<spatial_ref_sysUpdateInput, spatial_ref_sysUncheckedUpdateInput>
  }

  /**
   * spatial_ref_sys delete
   */
  export type spatial_ref_sysDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spatial_ref_sys
     */
    select?: spatial_ref_sysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spatial_ref_sys
     */
    omit?: spatial_ref_sysOmit<ExtArgs> | null
    /**
     * Filter which spatial_ref_sys to delete.
     */
    where: spatial_ref_sysWhereUniqueInput
  }

  /**
   * spatial_ref_sys deleteMany
   */
  export type spatial_ref_sysDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which spatial_ref_sys to delete
     */
    where?: spatial_ref_sysWhereInput
    /**
     * Limit how many spatial_ref_sys to delete.
     */
    limit?: number
  }

  /**
   * spatial_ref_sys without action
   */
  export type spatial_ref_sysDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the spatial_ref_sys
     */
    select?: spatial_ref_sysSelect<ExtArgs> | null
    /**
     * Omit specific fields from the spatial_ref_sys
     */
    omit?: spatial_ref_sysOmit<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersMinAggregateOutputType = {
    id: string | null
    full_name: string | null
    email: string | null
    phone_number: string | null
    password_hash: string | null
    role: string | null
    created_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: string | null
    full_name: string | null
    email: string | null
    phone_number: string | null
    password_hash: string | null
    role: string | null
    created_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    full_name: number
    email: number
    phone_number: number
    password_hash: number
    role: number
    created_at: number
    _all: number
  }


  export type UsersMinAggregateInputType = {
    id?: true
    full_name?: true
    email?: true
    phone_number?: true
    password_hash?: true
    role?: true
    created_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    full_name?: true
    email?: true
    phone_number?: true
    password_hash?: true
    role?: true
    created_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    full_name?: true
    email?: true
    phone_number?: true
    password_hash?: true
    role?: true
    created_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: string
    full_name: string
    email: string
    phone_number: string
    password_hash: string
    role: string | null
    created_at: Date | null
    _count: UsersCountAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name?: boolean
    email?: boolean
    phone_number?: boolean
    password_hash?: boolean
    role?: boolean
    created_at?: boolean
    drivers?: boolean | users$driversArgs<ExtArgs>
    rides_rides_driver_idTousers?: boolean | users$rides_rides_driver_idTousersArgs<ExtArgs>
    rides_rides_rider_idTousers?: boolean | users$rides_rides_rider_idTousersArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name?: boolean
    email?: boolean
    phone_number?: boolean
    password_hash?: boolean
    role?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    full_name?: boolean
    email?: boolean
    phone_number?: boolean
    password_hash?: boolean
    role?: boolean
    created_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    full_name?: boolean
    email?: boolean
    phone_number?: boolean
    password_hash?: boolean
    role?: boolean
    created_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "full_name" | "email" | "phone_number" | "password_hash" | "role" | "created_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    drivers?: boolean | users$driversArgs<ExtArgs>
    rides_rides_driver_idTousers?: boolean | users$rides_rides_driver_idTousersArgs<ExtArgs>
    rides_rides_rider_idTousers?: boolean | users$rides_rides_rider_idTousersArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      drivers: Prisma.$driversPayload<ExtArgs> | null
      rides_rides_driver_idTousers: Prisma.$ridesPayload<ExtArgs>[]
      rides_rides_rider_idTousers: Prisma.$ridesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      full_name: string
      email: string
      phone_number: string
      password_hash: string
      role: string | null
      created_at: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
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
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
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
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    drivers<T extends users$driversArgs<ExtArgs> = {}>(args?: Subset<T, users$driversArgs<ExtArgs>>): Prisma__driversClient<$Result.GetResult<Prisma.$driversPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    rides_rides_driver_idTousers<T extends users$rides_rides_driver_idTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$rides_rides_driver_idTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ridesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rides_rides_rider_idTousers<T extends users$rides_rides_rider_idTousersArgs<ExtArgs> = {}>(args?: Subset<T, users$rides_rides_rider_idTousersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ridesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'String'>
    readonly full_name: FieldRef<"users", 'String'>
    readonly email: FieldRef<"users", 'String'>
    readonly phone_number: FieldRef<"users", 'String'>
    readonly password_hash: FieldRef<"users", 'String'>
    readonly role: FieldRef<"users", 'String'>
    readonly created_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.drivers
   */
  export type users$driversArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the drivers
     */
    select?: driversSelect<ExtArgs> | null
    /**
     * Omit specific fields from the drivers
     */
    omit?: driversOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: driversInclude<ExtArgs> | null
    where?: driversWhereInput
  }

  /**
   * users.rides_rides_driver_idTousers
   */
  export type users$rides_rides_driver_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rides
     */
    select?: ridesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rides
     */
    omit?: ridesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ridesInclude<ExtArgs> | null
    where?: ridesWhereInput
    orderBy?: ridesOrderByWithRelationInput | ridesOrderByWithRelationInput[]
    cursor?: ridesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RidesScalarFieldEnum | RidesScalarFieldEnum[]
  }

  /**
   * users.rides_rides_rider_idTousers
   */
  export type users$rides_rides_rider_idTousersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the rides
     */
    select?: ridesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the rides
     */
    omit?: ridesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ridesInclude<ExtArgs> | null
    where?: ridesWhereInput
    orderBy?: ridesOrderByWithRelationInput | ridesOrderByWithRelationInput[]
    cursor?: ridesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RidesScalarFieldEnum | RidesScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const DriversScalarFieldEnum: {
    id: 'id',
    vehicle_model: 'vehicle_model',
    vehicle_plate: 'vehicle_plate',
    is_available: 'is_available',
    rating: 'rating',
    is_on_trip: 'is_on_trip'
  };

  export type DriversScalarFieldEnum = (typeof DriversScalarFieldEnum)[keyof typeof DriversScalarFieldEnum]


  export const Ride_trackingScalarFieldEnum: {
    id: 'id',
    ride_id: 'ride_id',
    recorded_at: 'recorded_at'
  };

  export type Ride_trackingScalarFieldEnum = (typeof Ride_trackingScalarFieldEnum)[keyof typeof Ride_trackingScalarFieldEnum]


  export const RidesScalarFieldEnum: {
    id: 'id',
    rider_id: 'rider_id',
    driver_id: 'driver_id',
    status: 'status',
    pickup_address: 'pickup_address',
    dropoff_address: 'dropoff_address',
    estimated_fare: 'estimated_fare',
    actual_fare: 'actual_fare',
    surge_multiplier: 'surge_multiplier',
    distance_meters: 'distance_meters',
    requested_at: 'requested_at',
    accepted_at: 'accepted_at',
    started_at: 'started_at',
    ended_at: 'ended_at',
    cancelled_at: 'cancelled_at',
    cancellation_reason: 'cancellation_reason',
    otp: 'otp'
  };

  export type RidesScalarFieldEnum = (typeof RidesScalarFieldEnum)[keyof typeof RidesScalarFieldEnum]


  export const Spatial_ref_sysScalarFieldEnum: {
    srid: 'srid',
    auth_name: 'auth_name',
    auth_srid: 'auth_srid',
    srtext: 'srtext',
    proj4text: 'proj4text'
  };

  export type Spatial_ref_sysScalarFieldEnum = (typeof Spatial_ref_sysScalarFieldEnum)[keyof typeof Spatial_ref_sysScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    full_name: 'full_name',
    email: 'email',
    phone_number: 'phone_number',
    password_hash: 'password_hash',
    role: 'role',
    created_at: 'created_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type driversWhereInput = {
    AND?: driversWhereInput | driversWhereInput[]
    OR?: driversWhereInput[]
    NOT?: driversWhereInput | driversWhereInput[]
    id?: UuidFilter<"drivers"> | string
    vehicle_model?: StringNullableFilter<"drivers"> | string | null
    vehicle_plate?: StringNullableFilter<"drivers"> | string | null
    is_available?: BoolNullableFilter<"drivers"> | boolean | null
    rating?: DecimalNullableFilter<"drivers"> | Decimal | DecimalJsLike | number | string | null
    is_on_trip?: BoolNullableFilter<"drivers"> | boolean | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }

  export type driversOrderByWithRelationInput = {
    id?: SortOrder
    vehicle_model?: SortOrderInput | SortOrder
    vehicle_plate?: SortOrderInput | SortOrder
    is_available?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    is_on_trip?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
  }

  export type driversWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    vehicle_plate?: string
    AND?: driversWhereInput | driversWhereInput[]
    OR?: driversWhereInput[]
    NOT?: driversWhereInput | driversWhereInput[]
    vehicle_model?: StringNullableFilter<"drivers"> | string | null
    is_available?: BoolNullableFilter<"drivers"> | boolean | null
    rating?: DecimalNullableFilter<"drivers"> | Decimal | DecimalJsLike | number | string | null
    is_on_trip?: BoolNullableFilter<"drivers"> | boolean | null
    users?: XOR<UsersScalarRelationFilter, usersWhereInput>
  }, "id" | "vehicle_plate">

  export type driversOrderByWithAggregationInput = {
    id?: SortOrder
    vehicle_model?: SortOrderInput | SortOrder
    vehicle_plate?: SortOrderInput | SortOrder
    is_available?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    is_on_trip?: SortOrderInput | SortOrder
    _count?: driversCountOrderByAggregateInput
    _avg?: driversAvgOrderByAggregateInput
    _max?: driversMaxOrderByAggregateInput
    _min?: driversMinOrderByAggregateInput
    _sum?: driversSumOrderByAggregateInput
  }

  export type driversScalarWhereWithAggregatesInput = {
    AND?: driversScalarWhereWithAggregatesInput | driversScalarWhereWithAggregatesInput[]
    OR?: driversScalarWhereWithAggregatesInput[]
    NOT?: driversScalarWhereWithAggregatesInput | driversScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"drivers"> | string
    vehicle_model?: StringNullableWithAggregatesFilter<"drivers"> | string | null
    vehicle_plate?: StringNullableWithAggregatesFilter<"drivers"> | string | null
    is_available?: BoolNullableWithAggregatesFilter<"drivers"> | boolean | null
    rating?: DecimalNullableWithAggregatesFilter<"drivers"> | Decimal | DecimalJsLike | number | string | null
    is_on_trip?: BoolNullableWithAggregatesFilter<"drivers"> | boolean | null
  }

  export type ride_trackingWhereInput = {
    AND?: ride_trackingWhereInput | ride_trackingWhereInput[]
    OR?: ride_trackingWhereInput[]
    NOT?: ride_trackingWhereInput | ride_trackingWhereInput[]
    id?: BigIntFilter<"ride_tracking"> | bigint | number
    ride_id?: UuidFilter<"ride_tracking"> | string
    recorded_at?: DateTimeFilter<"ride_tracking"> | Date | string
  }

  export type ride_trackingOrderByWithRelationInput = {
    id?: SortOrder
    ride_id?: SortOrder
    recorded_at?: SortOrder
  }

  export type ride_trackingWhereUniqueInput = Prisma.AtLeast<{
    id_recorded_at?: ride_trackingIdRecorded_atCompoundUniqueInput
    AND?: ride_trackingWhereInput | ride_trackingWhereInput[]
    OR?: ride_trackingWhereInput[]
    NOT?: ride_trackingWhereInput | ride_trackingWhereInput[]
    id?: BigIntFilter<"ride_tracking"> | bigint | number
    ride_id?: UuidFilter<"ride_tracking"> | string
    recorded_at?: DateTimeFilter<"ride_tracking"> | Date | string
  }, "id_recorded_at">

  export type ride_trackingOrderByWithAggregationInput = {
    id?: SortOrder
    ride_id?: SortOrder
    recorded_at?: SortOrder
    _count?: ride_trackingCountOrderByAggregateInput
    _avg?: ride_trackingAvgOrderByAggregateInput
    _max?: ride_trackingMaxOrderByAggregateInput
    _min?: ride_trackingMinOrderByAggregateInput
    _sum?: ride_trackingSumOrderByAggregateInput
  }

  export type ride_trackingScalarWhereWithAggregatesInput = {
    AND?: ride_trackingScalarWhereWithAggregatesInput | ride_trackingScalarWhereWithAggregatesInput[]
    OR?: ride_trackingScalarWhereWithAggregatesInput[]
    NOT?: ride_trackingScalarWhereWithAggregatesInput | ride_trackingScalarWhereWithAggregatesInput[]
    id?: BigIntWithAggregatesFilter<"ride_tracking"> | bigint | number
    ride_id?: UuidWithAggregatesFilter<"ride_tracking"> | string
    recorded_at?: DateTimeWithAggregatesFilter<"ride_tracking"> | Date | string
  }

  export type ridesWhereInput = {
    AND?: ridesWhereInput | ridesWhereInput[]
    OR?: ridesWhereInput[]
    NOT?: ridesWhereInput | ridesWhereInput[]
    id?: UuidFilter<"rides"> | string
    rider_id?: UuidNullableFilter<"rides"> | string | null
    driver_id?: UuidNullableFilter<"rides"> | string | null
    status?: StringNullableFilter<"rides"> | string | null
    pickup_address?: StringNullableFilter<"rides"> | string | null
    dropoff_address?: StringNullableFilter<"rides"> | string | null
    estimated_fare?: DecimalNullableFilter<"rides"> | Decimal | DecimalJsLike | number | string | null
    actual_fare?: DecimalNullableFilter<"rides"> | Decimal | DecimalJsLike | number | string | null
    surge_multiplier?: DecimalNullableFilter<"rides"> | Decimal | DecimalJsLike | number | string | null
    distance_meters?: IntNullableFilter<"rides"> | number | null
    requested_at?: DateTimeFilter<"rides"> | Date | string
    accepted_at?: DateTimeNullableFilter<"rides"> | Date | string | null
    started_at?: DateTimeNullableFilter<"rides"> | Date | string | null
    ended_at?: DateTimeNullableFilter<"rides"> | Date | string | null
    cancelled_at?: DateTimeNullableFilter<"rides"> | Date | string | null
    cancellation_reason?: StringNullableFilter<"rides"> | string | null
    otp?: StringNullableFilter<"rides"> | string | null
    users_rides_driver_idTousers?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    users_rides_rider_idTousers?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type ridesOrderByWithRelationInput = {
    id?: SortOrder
    rider_id?: SortOrderInput | SortOrder
    driver_id?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    pickup_address?: SortOrderInput | SortOrder
    dropoff_address?: SortOrderInput | SortOrder
    estimated_fare?: SortOrderInput | SortOrder
    actual_fare?: SortOrderInput | SortOrder
    surge_multiplier?: SortOrderInput | SortOrder
    distance_meters?: SortOrderInput | SortOrder
    requested_at?: SortOrder
    accepted_at?: SortOrderInput | SortOrder
    started_at?: SortOrderInput | SortOrder
    ended_at?: SortOrderInput | SortOrder
    cancelled_at?: SortOrderInput | SortOrder
    cancellation_reason?: SortOrderInput | SortOrder
    otp?: SortOrderInput | SortOrder
    users_rides_driver_idTousers?: usersOrderByWithRelationInput
    users_rides_rider_idTousers?: usersOrderByWithRelationInput
  }

  export type ridesWhereUniqueInput = Prisma.AtLeast<{
    id_requested_at?: ridesIdRequested_atCompoundUniqueInput
    AND?: ridesWhereInput | ridesWhereInput[]
    OR?: ridesWhereInput[]
    NOT?: ridesWhereInput | ridesWhereInput[]
    id?: UuidFilter<"rides"> | string
    rider_id?: UuidNullableFilter<"rides"> | string | null
    driver_id?: UuidNullableFilter<"rides"> | string | null
    status?: StringNullableFilter<"rides"> | string | null
    pickup_address?: StringNullableFilter<"rides"> | string | null
    dropoff_address?: StringNullableFilter<"rides"> | string | null
    estimated_fare?: DecimalNullableFilter<"rides"> | Decimal | DecimalJsLike | number | string | null
    actual_fare?: DecimalNullableFilter<"rides"> | Decimal | DecimalJsLike | number | string | null
    surge_multiplier?: DecimalNullableFilter<"rides"> | Decimal | DecimalJsLike | number | string | null
    distance_meters?: IntNullableFilter<"rides"> | number | null
    requested_at?: DateTimeFilter<"rides"> | Date | string
    accepted_at?: DateTimeNullableFilter<"rides"> | Date | string | null
    started_at?: DateTimeNullableFilter<"rides"> | Date | string | null
    ended_at?: DateTimeNullableFilter<"rides"> | Date | string | null
    cancelled_at?: DateTimeNullableFilter<"rides"> | Date | string | null
    cancellation_reason?: StringNullableFilter<"rides"> | string | null
    otp?: StringNullableFilter<"rides"> | string | null
    users_rides_driver_idTousers?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    users_rides_rider_idTousers?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id_requested_at">

  export type ridesOrderByWithAggregationInput = {
    id?: SortOrder
    rider_id?: SortOrderInput | SortOrder
    driver_id?: SortOrderInput | SortOrder
    status?: SortOrderInput | SortOrder
    pickup_address?: SortOrderInput | SortOrder
    dropoff_address?: SortOrderInput | SortOrder
    estimated_fare?: SortOrderInput | SortOrder
    actual_fare?: SortOrderInput | SortOrder
    surge_multiplier?: SortOrderInput | SortOrder
    distance_meters?: SortOrderInput | SortOrder
    requested_at?: SortOrder
    accepted_at?: SortOrderInput | SortOrder
    started_at?: SortOrderInput | SortOrder
    ended_at?: SortOrderInput | SortOrder
    cancelled_at?: SortOrderInput | SortOrder
    cancellation_reason?: SortOrderInput | SortOrder
    otp?: SortOrderInput | SortOrder
    _count?: ridesCountOrderByAggregateInput
    _avg?: ridesAvgOrderByAggregateInput
    _max?: ridesMaxOrderByAggregateInput
    _min?: ridesMinOrderByAggregateInput
    _sum?: ridesSumOrderByAggregateInput
  }

  export type ridesScalarWhereWithAggregatesInput = {
    AND?: ridesScalarWhereWithAggregatesInput | ridesScalarWhereWithAggregatesInput[]
    OR?: ridesScalarWhereWithAggregatesInput[]
    NOT?: ridesScalarWhereWithAggregatesInput | ridesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"rides"> | string
    rider_id?: UuidNullableWithAggregatesFilter<"rides"> | string | null
    driver_id?: UuidNullableWithAggregatesFilter<"rides"> | string | null
    status?: StringNullableWithAggregatesFilter<"rides"> | string | null
    pickup_address?: StringNullableWithAggregatesFilter<"rides"> | string | null
    dropoff_address?: StringNullableWithAggregatesFilter<"rides"> | string | null
    estimated_fare?: DecimalNullableWithAggregatesFilter<"rides"> | Decimal | DecimalJsLike | number | string | null
    actual_fare?: DecimalNullableWithAggregatesFilter<"rides"> | Decimal | DecimalJsLike | number | string | null
    surge_multiplier?: DecimalNullableWithAggregatesFilter<"rides"> | Decimal | DecimalJsLike | number | string | null
    distance_meters?: IntNullableWithAggregatesFilter<"rides"> | number | null
    requested_at?: DateTimeWithAggregatesFilter<"rides"> | Date | string
    accepted_at?: DateTimeNullableWithAggregatesFilter<"rides"> | Date | string | null
    started_at?: DateTimeNullableWithAggregatesFilter<"rides"> | Date | string | null
    ended_at?: DateTimeNullableWithAggregatesFilter<"rides"> | Date | string | null
    cancelled_at?: DateTimeNullableWithAggregatesFilter<"rides"> | Date | string | null
    cancellation_reason?: StringNullableWithAggregatesFilter<"rides"> | string | null
    otp?: StringNullableWithAggregatesFilter<"rides"> | string | null
  }

  export type spatial_ref_sysWhereInput = {
    AND?: spatial_ref_sysWhereInput | spatial_ref_sysWhereInput[]
    OR?: spatial_ref_sysWhereInput[]
    NOT?: spatial_ref_sysWhereInput | spatial_ref_sysWhereInput[]
    srid?: IntFilter<"spatial_ref_sys"> | number
    auth_name?: StringNullableFilter<"spatial_ref_sys"> | string | null
    auth_srid?: IntNullableFilter<"spatial_ref_sys"> | number | null
    srtext?: StringNullableFilter<"spatial_ref_sys"> | string | null
    proj4text?: StringNullableFilter<"spatial_ref_sys"> | string | null
  }

  export type spatial_ref_sysOrderByWithRelationInput = {
    srid?: SortOrder
    auth_name?: SortOrderInput | SortOrder
    auth_srid?: SortOrderInput | SortOrder
    srtext?: SortOrderInput | SortOrder
    proj4text?: SortOrderInput | SortOrder
  }

  export type spatial_ref_sysWhereUniqueInput = Prisma.AtLeast<{
    srid?: number
    AND?: spatial_ref_sysWhereInput | spatial_ref_sysWhereInput[]
    OR?: spatial_ref_sysWhereInput[]
    NOT?: spatial_ref_sysWhereInput | spatial_ref_sysWhereInput[]
    auth_name?: StringNullableFilter<"spatial_ref_sys"> | string | null
    auth_srid?: IntNullableFilter<"spatial_ref_sys"> | number | null
    srtext?: StringNullableFilter<"spatial_ref_sys"> | string | null
    proj4text?: StringNullableFilter<"spatial_ref_sys"> | string | null
  }, "srid">

  export type spatial_ref_sysOrderByWithAggregationInput = {
    srid?: SortOrder
    auth_name?: SortOrderInput | SortOrder
    auth_srid?: SortOrderInput | SortOrder
    srtext?: SortOrderInput | SortOrder
    proj4text?: SortOrderInput | SortOrder
    _count?: spatial_ref_sysCountOrderByAggregateInput
    _avg?: spatial_ref_sysAvgOrderByAggregateInput
    _max?: spatial_ref_sysMaxOrderByAggregateInput
    _min?: spatial_ref_sysMinOrderByAggregateInput
    _sum?: spatial_ref_sysSumOrderByAggregateInput
  }

  export type spatial_ref_sysScalarWhereWithAggregatesInput = {
    AND?: spatial_ref_sysScalarWhereWithAggregatesInput | spatial_ref_sysScalarWhereWithAggregatesInput[]
    OR?: spatial_ref_sysScalarWhereWithAggregatesInput[]
    NOT?: spatial_ref_sysScalarWhereWithAggregatesInput | spatial_ref_sysScalarWhereWithAggregatesInput[]
    srid?: IntWithAggregatesFilter<"spatial_ref_sys"> | number
    auth_name?: StringNullableWithAggregatesFilter<"spatial_ref_sys"> | string | null
    auth_srid?: IntNullableWithAggregatesFilter<"spatial_ref_sys"> | number | null
    srtext?: StringNullableWithAggregatesFilter<"spatial_ref_sys"> | string | null
    proj4text?: StringNullableWithAggregatesFilter<"spatial_ref_sys"> | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: UuidFilter<"users"> | string
    full_name?: StringFilter<"users"> | string
    email?: StringFilter<"users"> | string
    phone_number?: StringFilter<"users"> | string
    password_hash?: StringFilter<"users"> | string
    role?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    drivers?: XOR<DriversNullableScalarRelationFilter, driversWhereInput> | null
    rides_rides_driver_idTousers?: RidesListRelationFilter
    rides_rides_rider_idTousers?: RidesListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    password_hash?: SortOrder
    role?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    drivers?: driversOrderByWithRelationInput
    rides_rides_driver_idTousers?: ridesOrderByRelationAggregateInput
    rides_rides_rider_idTousers?: ridesOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phone_number?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    full_name?: StringFilter<"users"> | string
    password_hash?: StringFilter<"users"> | string
    role?: StringNullableFilter<"users"> | string | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    drivers?: XOR<DriversNullableScalarRelationFilter, driversWhereInput> | null
    rides_rides_driver_idTousers?: RidesListRelationFilter
    rides_rides_rider_idTousers?: RidesListRelationFilter
  }, "id" | "email" | "phone_number">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    password_hash?: SortOrder
    role?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"users"> | string
    full_name?: StringWithAggregatesFilter<"users"> | string
    email?: StringWithAggregatesFilter<"users"> | string
    phone_number?: StringWithAggregatesFilter<"users"> | string
    password_hash?: StringWithAggregatesFilter<"users"> | string
    role?: StringNullableWithAggregatesFilter<"users"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type driversCreateInput = {
    vehicle_model?: string | null
    vehicle_plate?: string | null
    is_available?: boolean | null
    rating?: Decimal | DecimalJsLike | number | string | null
    is_on_trip?: boolean | null
    users: usersCreateNestedOneWithoutDriversInput
  }

  export type driversUncheckedCreateInput = {
    id: string
    vehicle_model?: string | null
    vehicle_plate?: string | null
    is_available?: boolean | null
    rating?: Decimal | DecimalJsLike | number | string | null
    is_on_trip?: boolean | null
  }

  export type driversUpdateInput = {
    vehicle_model?: NullableStringFieldUpdateOperationsInput | string | null
    vehicle_plate?: NullableStringFieldUpdateOperationsInput | string | null
    is_available?: NullableBoolFieldUpdateOperationsInput | boolean | null
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    is_on_trip?: NullableBoolFieldUpdateOperationsInput | boolean | null
    users?: usersUpdateOneRequiredWithoutDriversNestedInput
  }

  export type driversUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicle_model?: NullableStringFieldUpdateOperationsInput | string | null
    vehicle_plate?: NullableStringFieldUpdateOperationsInput | string | null
    is_available?: NullableBoolFieldUpdateOperationsInput | boolean | null
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    is_on_trip?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type driversCreateManyInput = {
    id: string
    vehicle_model?: string | null
    vehicle_plate?: string | null
    is_available?: boolean | null
    rating?: Decimal | DecimalJsLike | number | string | null
    is_on_trip?: boolean | null
  }

  export type driversUpdateManyMutationInput = {
    vehicle_model?: NullableStringFieldUpdateOperationsInput | string | null
    vehicle_plate?: NullableStringFieldUpdateOperationsInput | string | null
    is_available?: NullableBoolFieldUpdateOperationsInput | boolean | null
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    is_on_trip?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type driversUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    vehicle_model?: NullableStringFieldUpdateOperationsInput | string | null
    vehicle_plate?: NullableStringFieldUpdateOperationsInput | string | null
    is_available?: NullableBoolFieldUpdateOperationsInput | boolean | null
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    is_on_trip?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ride_trackingUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    ride_id?: StringFieldUpdateOperationsInput | string
    recorded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ride_trackingUncheckedUpdateInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    ride_id?: StringFieldUpdateOperationsInput | string
    recorded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ride_trackingUpdateManyMutationInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    ride_id?: StringFieldUpdateOperationsInput | string
    recorded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ride_trackingUncheckedUpdateManyInput = {
    id?: BigIntFieldUpdateOperationsInput | bigint | number
    ride_id?: StringFieldUpdateOperationsInput | string
    recorded_at?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ridesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    pickup_address?: NullableStringFieldUpdateOperationsInput | string | null
    dropoff_address?: NullableStringFieldUpdateOperationsInput | string | null
    estimated_fare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actual_fare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    surge_multiplier?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    distance_meters?: NullableIntFieldUpdateOperationsInput | number | null
    requested_at?: DateTimeFieldUpdateOperationsInput | Date | string
    accepted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ended_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellation_reason?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    users_rides_driver_idTousers?: usersUpdateOneWithoutRides_rides_driver_idTousersNestedInput
    users_rides_rider_idTousers?: usersUpdateOneWithoutRides_rides_rider_idTousersNestedInput
  }

  export type ridesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rider_id?: NullableStringFieldUpdateOperationsInput | string | null
    driver_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    pickup_address?: NullableStringFieldUpdateOperationsInput | string | null
    dropoff_address?: NullableStringFieldUpdateOperationsInput | string | null
    estimated_fare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actual_fare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    surge_multiplier?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    distance_meters?: NullableIntFieldUpdateOperationsInput | number | null
    requested_at?: DateTimeFieldUpdateOperationsInput | Date | string
    accepted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ended_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellation_reason?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ridesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    pickup_address?: NullableStringFieldUpdateOperationsInput | string | null
    dropoff_address?: NullableStringFieldUpdateOperationsInput | string | null
    estimated_fare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actual_fare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    surge_multiplier?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    distance_meters?: NullableIntFieldUpdateOperationsInput | number | null
    requested_at?: DateTimeFieldUpdateOperationsInput | Date | string
    accepted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ended_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellation_reason?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ridesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    rider_id?: NullableStringFieldUpdateOperationsInput | string | null
    driver_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    pickup_address?: NullableStringFieldUpdateOperationsInput | string | null
    dropoff_address?: NullableStringFieldUpdateOperationsInput | string | null
    estimated_fare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actual_fare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    surge_multiplier?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    distance_meters?: NullableIntFieldUpdateOperationsInput | number | null
    requested_at?: DateTimeFieldUpdateOperationsInput | Date | string
    accepted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ended_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellation_reason?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type spatial_ref_sysCreateInput = {
    srid: number
    auth_name?: string | null
    auth_srid?: number | null
    srtext?: string | null
    proj4text?: string | null
  }

  export type spatial_ref_sysUncheckedCreateInput = {
    srid: number
    auth_name?: string | null
    auth_srid?: number | null
    srtext?: string | null
    proj4text?: string | null
  }

  export type spatial_ref_sysUpdateInput = {
    srid?: IntFieldUpdateOperationsInput | number
    auth_name?: NullableStringFieldUpdateOperationsInput | string | null
    auth_srid?: NullableIntFieldUpdateOperationsInput | number | null
    srtext?: NullableStringFieldUpdateOperationsInput | string | null
    proj4text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type spatial_ref_sysUncheckedUpdateInput = {
    srid?: IntFieldUpdateOperationsInput | number
    auth_name?: NullableStringFieldUpdateOperationsInput | string | null
    auth_srid?: NullableIntFieldUpdateOperationsInput | number | null
    srtext?: NullableStringFieldUpdateOperationsInput | string | null
    proj4text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type spatial_ref_sysCreateManyInput = {
    srid: number
    auth_name?: string | null
    auth_srid?: number | null
    srtext?: string | null
    proj4text?: string | null
  }

  export type spatial_ref_sysUpdateManyMutationInput = {
    srid?: IntFieldUpdateOperationsInput | number
    auth_name?: NullableStringFieldUpdateOperationsInput | string | null
    auth_srid?: NullableIntFieldUpdateOperationsInput | number | null
    srtext?: NullableStringFieldUpdateOperationsInput | string | null
    proj4text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type spatial_ref_sysUncheckedUpdateManyInput = {
    srid?: IntFieldUpdateOperationsInput | number
    auth_name?: NullableStringFieldUpdateOperationsInput | string | null
    auth_srid?: NullableIntFieldUpdateOperationsInput | number | null
    srtext?: NullableStringFieldUpdateOperationsInput | string | null
    proj4text?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type usersCreateInput = {
    id?: string
    full_name: string
    email: string
    phone_number: string
    password_hash: string
    role?: string | null
    created_at?: Date | string | null
    drivers?: driversCreateNestedOneWithoutUsersInput
    rides_rides_driver_idTousers?: ridesCreateNestedManyWithoutUsers_rides_driver_idTousersInput
    rides_rides_rider_idTousers?: ridesCreateNestedManyWithoutUsers_rides_rider_idTousersInput
  }

  export type usersUncheckedCreateInput = {
    id?: string
    full_name: string
    email: string
    phone_number: string
    password_hash: string
    role?: string | null
    created_at?: Date | string | null
    drivers?: driversUncheckedCreateNestedOneWithoutUsersInput
    rides_rides_driver_idTousers?: ridesUncheckedCreateNestedManyWithoutUsers_rides_driver_idTousersInput
    rides_rides_rider_idTousers?: ridesUncheckedCreateNestedManyWithoutUsers_rides_rider_idTousersInput
  }

  export type usersUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    drivers?: driversUpdateOneWithoutUsersNestedInput
    rides_rides_driver_idTousers?: ridesUpdateManyWithoutUsers_rides_driver_idTousersNestedInput
    rides_rides_rider_idTousers?: ridesUpdateManyWithoutUsers_rides_rider_idTousersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    drivers?: driversUncheckedUpdateOneWithoutUsersNestedInput
    rides_rides_driver_idTousers?: ridesUncheckedUpdateManyWithoutUsers_rides_driver_idTousersNestedInput
    rides_rides_rider_idTousers?: ridesUncheckedUpdateManyWithoutUsers_rides_rider_idTousersNestedInput
  }

  export type usersCreateManyInput = {
    id?: string
    full_name: string
    email: string
    phone_number: string
    password_hash: string
    role?: string | null
    created_at?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type UsersScalarRelationFilter = {
    is?: usersWhereInput
    isNot?: usersWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type driversCountOrderByAggregateInput = {
    id?: SortOrder
    vehicle_model?: SortOrder
    vehicle_plate?: SortOrder
    is_available?: SortOrder
    rating?: SortOrder
    is_on_trip?: SortOrder
  }

  export type driversAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type driversMaxOrderByAggregateInput = {
    id?: SortOrder
    vehicle_model?: SortOrder
    vehicle_plate?: SortOrder
    is_available?: SortOrder
    rating?: SortOrder
    is_on_trip?: SortOrder
  }

  export type driversMinOrderByAggregateInput = {
    id?: SortOrder
    vehicle_model?: SortOrder
    vehicle_plate?: SortOrder
    is_available?: SortOrder
    rating?: SortOrder
    is_on_trip?: SortOrder
  }

  export type driversSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ride_trackingIdRecorded_atCompoundUniqueInput = {
    id: bigint | number
    recorded_at: Date | string
  }

  export type ride_trackingCountOrderByAggregateInput = {
    id?: SortOrder
    ride_id?: SortOrder
    recorded_at?: SortOrder
  }

  export type ride_trackingAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ride_trackingMaxOrderByAggregateInput = {
    id?: SortOrder
    ride_id?: SortOrder
    recorded_at?: SortOrder
  }

  export type ride_trackingMinOrderByAggregateInput = {
    id?: SortOrder
    ride_id?: SortOrder
    recorded_at?: SortOrder
  }

  export type ride_trackingSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type ridesIdRequested_atCompoundUniqueInput = {
    id: string
    requested_at: Date | string
  }

  export type ridesCountOrderByAggregateInput = {
    id?: SortOrder
    rider_id?: SortOrder
    driver_id?: SortOrder
    status?: SortOrder
    pickup_address?: SortOrder
    dropoff_address?: SortOrder
    estimated_fare?: SortOrder
    actual_fare?: SortOrder
    surge_multiplier?: SortOrder
    distance_meters?: SortOrder
    requested_at?: SortOrder
    accepted_at?: SortOrder
    started_at?: SortOrder
    ended_at?: SortOrder
    cancelled_at?: SortOrder
    cancellation_reason?: SortOrder
    otp?: SortOrder
  }

  export type ridesAvgOrderByAggregateInput = {
    estimated_fare?: SortOrder
    actual_fare?: SortOrder
    surge_multiplier?: SortOrder
    distance_meters?: SortOrder
  }

  export type ridesMaxOrderByAggregateInput = {
    id?: SortOrder
    rider_id?: SortOrder
    driver_id?: SortOrder
    status?: SortOrder
    pickup_address?: SortOrder
    dropoff_address?: SortOrder
    estimated_fare?: SortOrder
    actual_fare?: SortOrder
    surge_multiplier?: SortOrder
    distance_meters?: SortOrder
    requested_at?: SortOrder
    accepted_at?: SortOrder
    started_at?: SortOrder
    ended_at?: SortOrder
    cancelled_at?: SortOrder
    cancellation_reason?: SortOrder
    otp?: SortOrder
  }

  export type ridesMinOrderByAggregateInput = {
    id?: SortOrder
    rider_id?: SortOrder
    driver_id?: SortOrder
    status?: SortOrder
    pickup_address?: SortOrder
    dropoff_address?: SortOrder
    estimated_fare?: SortOrder
    actual_fare?: SortOrder
    surge_multiplier?: SortOrder
    distance_meters?: SortOrder
    requested_at?: SortOrder
    accepted_at?: SortOrder
    started_at?: SortOrder
    ended_at?: SortOrder
    cancelled_at?: SortOrder
    cancellation_reason?: SortOrder
    otp?: SortOrder
  }

  export type ridesSumOrderByAggregateInput = {
    estimated_fare?: SortOrder
    actual_fare?: SortOrder
    surge_multiplier?: SortOrder
    distance_meters?: SortOrder
  }

  export type UuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type spatial_ref_sysCountOrderByAggregateInput = {
    srid?: SortOrder
    auth_name?: SortOrder
    auth_srid?: SortOrder
    srtext?: SortOrder
    proj4text?: SortOrder
  }

  export type spatial_ref_sysAvgOrderByAggregateInput = {
    srid?: SortOrder
    auth_srid?: SortOrder
  }

  export type spatial_ref_sysMaxOrderByAggregateInput = {
    srid?: SortOrder
    auth_name?: SortOrder
    auth_srid?: SortOrder
    srtext?: SortOrder
    proj4text?: SortOrder
  }

  export type spatial_ref_sysMinOrderByAggregateInput = {
    srid?: SortOrder
    auth_name?: SortOrder
    auth_srid?: SortOrder
    srtext?: SortOrder
    proj4text?: SortOrder
  }

  export type spatial_ref_sysSumOrderByAggregateInput = {
    srid?: SortOrder
    auth_srid?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DriversNullableScalarRelationFilter = {
    is?: driversWhereInput | null
    isNot?: driversWhereInput | null
  }

  export type RidesListRelationFilter = {
    every?: ridesWhereInput
    some?: ridesWhereInput
    none?: ridesWhereInput
  }

  export type ridesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    full_name?: SortOrder
    email?: SortOrder
    phone_number?: SortOrder
    password_hash?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type usersCreateNestedOneWithoutDriversInput = {
    create?: XOR<usersCreateWithoutDriversInput, usersUncheckedCreateWithoutDriversInput>
    connectOrCreate?: usersCreateOrConnectWithoutDriversInput
    connect?: usersWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type usersUpdateOneRequiredWithoutDriversNestedInput = {
    create?: XOR<usersCreateWithoutDriversInput, usersUncheckedCreateWithoutDriversInput>
    connectOrCreate?: usersCreateOrConnectWithoutDriversInput
    upsert?: usersUpsertWithoutDriversInput
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutDriversInput, usersUpdateWithoutDriversInput>, usersUncheckedUpdateWithoutDriversInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type usersUpdateOneWithoutRides_rides_driver_idTousersNestedInput = {
    create?: XOR<usersCreateWithoutRides_rides_driver_idTousersInput, usersUncheckedCreateWithoutRides_rides_driver_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutRides_rides_driver_idTousersInput
    upsert?: usersUpsertWithoutRides_rides_driver_idTousersInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutRides_rides_driver_idTousersInput, usersUpdateWithoutRides_rides_driver_idTousersInput>, usersUncheckedUpdateWithoutRides_rides_driver_idTousersInput>
  }

  export type usersUpdateOneWithoutRides_rides_rider_idTousersNestedInput = {
    create?: XOR<usersCreateWithoutRides_rides_rider_idTousersInput, usersUncheckedCreateWithoutRides_rides_rider_idTousersInput>
    connectOrCreate?: usersCreateOrConnectWithoutRides_rides_rider_idTousersInput
    upsert?: usersUpsertWithoutRides_rides_rider_idTousersInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutRides_rides_rider_idTousersInput, usersUpdateWithoutRides_rides_rider_idTousersInput>, usersUncheckedUpdateWithoutRides_rides_rider_idTousersInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type driversCreateNestedOneWithoutUsersInput = {
    create?: XOR<driversCreateWithoutUsersInput, driversUncheckedCreateWithoutUsersInput>
    connectOrCreate?: driversCreateOrConnectWithoutUsersInput
    connect?: driversWhereUniqueInput
  }

  export type ridesCreateNestedManyWithoutUsers_rides_driver_idTousersInput = {
    connect?: ridesWhereUniqueInput | ridesWhereUniqueInput[]
  }

  export type ridesCreateNestedManyWithoutUsers_rides_rider_idTousersInput = {
    connect?: ridesWhereUniqueInput | ridesWhereUniqueInput[]
  }

  export type driversUncheckedCreateNestedOneWithoutUsersInput = {
    create?: XOR<driversCreateWithoutUsersInput, driversUncheckedCreateWithoutUsersInput>
    connectOrCreate?: driversCreateOrConnectWithoutUsersInput
    connect?: driversWhereUniqueInput
  }

  export type ridesUncheckedCreateNestedManyWithoutUsers_rides_driver_idTousersInput = {
    connect?: ridesWhereUniqueInput | ridesWhereUniqueInput[]
  }

  export type ridesUncheckedCreateNestedManyWithoutUsers_rides_rider_idTousersInput = {
    connect?: ridesWhereUniqueInput | ridesWhereUniqueInput[]
  }

  export type driversUpdateOneWithoutUsersNestedInput = {
    create?: XOR<driversCreateWithoutUsersInput, driversUncheckedCreateWithoutUsersInput>
    connectOrCreate?: driversCreateOrConnectWithoutUsersInput
    upsert?: driversUpsertWithoutUsersInput
    disconnect?: driversWhereInput | boolean
    delete?: driversWhereInput | boolean
    connect?: driversWhereUniqueInput
    update?: XOR<XOR<driversUpdateToOneWithWhereWithoutUsersInput, driversUpdateWithoutUsersInput>, driversUncheckedUpdateWithoutUsersInput>
  }

  export type ridesUpdateManyWithoutUsers_rides_driver_idTousersNestedInput = {
    set?: ridesWhereUniqueInput | ridesWhereUniqueInput[]
    disconnect?: ridesWhereUniqueInput | ridesWhereUniqueInput[]
    delete?: ridesWhereUniqueInput | ridesWhereUniqueInput[]
    connect?: ridesWhereUniqueInput | ridesWhereUniqueInput[]
    update?: ridesUpdateWithWhereUniqueWithoutUsers_rides_driver_idTousersInput | ridesUpdateWithWhereUniqueWithoutUsers_rides_driver_idTousersInput[]
    updateMany?: ridesUpdateManyWithWhereWithoutUsers_rides_driver_idTousersInput | ridesUpdateManyWithWhereWithoutUsers_rides_driver_idTousersInput[]
    deleteMany?: ridesScalarWhereInput | ridesScalarWhereInput[]
  }

  export type ridesUpdateManyWithoutUsers_rides_rider_idTousersNestedInput = {
    set?: ridesWhereUniqueInput | ridesWhereUniqueInput[]
    disconnect?: ridesWhereUniqueInput | ridesWhereUniqueInput[]
    delete?: ridesWhereUniqueInput | ridesWhereUniqueInput[]
    connect?: ridesWhereUniqueInput | ridesWhereUniqueInput[]
    update?: ridesUpdateWithWhereUniqueWithoutUsers_rides_rider_idTousersInput | ridesUpdateWithWhereUniqueWithoutUsers_rides_rider_idTousersInput[]
    updateMany?: ridesUpdateManyWithWhereWithoutUsers_rides_rider_idTousersInput | ridesUpdateManyWithWhereWithoutUsers_rides_rider_idTousersInput[]
    deleteMany?: ridesScalarWhereInput | ridesScalarWhereInput[]
  }

  export type driversUncheckedUpdateOneWithoutUsersNestedInput = {
    create?: XOR<driversCreateWithoutUsersInput, driversUncheckedCreateWithoutUsersInput>
    connectOrCreate?: driversCreateOrConnectWithoutUsersInput
    upsert?: driversUpsertWithoutUsersInput
    disconnect?: driversWhereInput | boolean
    delete?: driversWhereInput | boolean
    connect?: driversWhereUniqueInput
    update?: XOR<XOR<driversUpdateToOneWithWhereWithoutUsersInput, driversUpdateWithoutUsersInput>, driversUncheckedUpdateWithoutUsersInput>
  }

  export type ridesUncheckedUpdateManyWithoutUsers_rides_driver_idTousersNestedInput = {
    set?: ridesWhereUniqueInput | ridesWhereUniqueInput[]
    disconnect?: ridesWhereUniqueInput | ridesWhereUniqueInput[]
    delete?: ridesWhereUniqueInput | ridesWhereUniqueInput[]
    connect?: ridesWhereUniqueInput | ridesWhereUniqueInput[]
    update?: ridesUpdateWithWhereUniqueWithoutUsers_rides_driver_idTousersInput | ridesUpdateWithWhereUniqueWithoutUsers_rides_driver_idTousersInput[]
    updateMany?: ridesUpdateManyWithWhereWithoutUsers_rides_driver_idTousersInput | ridesUpdateManyWithWhereWithoutUsers_rides_driver_idTousersInput[]
    deleteMany?: ridesScalarWhereInput | ridesScalarWhereInput[]
  }

  export type ridesUncheckedUpdateManyWithoutUsers_rides_rider_idTousersNestedInput = {
    set?: ridesWhereUniqueInput | ridesWhereUniqueInput[]
    disconnect?: ridesWhereUniqueInput | ridesWhereUniqueInput[]
    delete?: ridesWhereUniqueInput | ridesWhereUniqueInput[]
    connect?: ridesWhereUniqueInput | ridesWhereUniqueInput[]
    update?: ridesUpdateWithWhereUniqueWithoutUsers_rides_rider_idTousersInput | ridesUpdateWithWhereUniqueWithoutUsers_rides_rider_idTousersInput[]
    updateMany?: ridesUpdateManyWithWhereWithoutUsers_rides_rider_idTousersInput | ridesUpdateManyWithWhereWithoutUsers_rides_rider_idTousersInput[]
    deleteMany?: ridesScalarWhereInput | ridesScalarWhereInput[]
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedUuidNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedUuidNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type usersCreateWithoutDriversInput = {
    id?: string
    full_name: string
    email: string
    phone_number: string
    password_hash: string
    role?: string | null
    created_at?: Date | string | null
    rides_rides_driver_idTousers?: ridesCreateNestedManyWithoutUsers_rides_driver_idTousersInput
    rides_rides_rider_idTousers?: ridesCreateNestedManyWithoutUsers_rides_rider_idTousersInput
  }

  export type usersUncheckedCreateWithoutDriversInput = {
    id?: string
    full_name: string
    email: string
    phone_number: string
    password_hash: string
    role?: string | null
    created_at?: Date | string | null
    rides_rides_driver_idTousers?: ridesUncheckedCreateNestedManyWithoutUsers_rides_driver_idTousersInput
    rides_rides_rider_idTousers?: ridesUncheckedCreateNestedManyWithoutUsers_rides_rider_idTousersInput
  }

  export type usersCreateOrConnectWithoutDriversInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutDriversInput, usersUncheckedCreateWithoutDriversInput>
  }

  export type usersUpsertWithoutDriversInput = {
    update: XOR<usersUpdateWithoutDriversInput, usersUncheckedUpdateWithoutDriversInput>
    create: XOR<usersCreateWithoutDriversInput, usersUncheckedCreateWithoutDriversInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutDriversInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutDriversInput, usersUncheckedUpdateWithoutDriversInput>
  }

  export type usersUpdateWithoutDriversInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rides_rides_driver_idTousers?: ridesUpdateManyWithoutUsers_rides_driver_idTousersNestedInput
    rides_rides_rider_idTousers?: ridesUpdateManyWithoutUsers_rides_rider_idTousersNestedInput
  }

  export type usersUncheckedUpdateWithoutDriversInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    rides_rides_driver_idTousers?: ridesUncheckedUpdateManyWithoutUsers_rides_driver_idTousersNestedInput
    rides_rides_rider_idTousers?: ridesUncheckedUpdateManyWithoutUsers_rides_rider_idTousersNestedInput
  }

  export type usersCreateWithoutRides_rides_driver_idTousersInput = {
    id?: string
    full_name: string
    email: string
    phone_number: string
    password_hash: string
    role?: string | null
    created_at?: Date | string | null
    drivers?: driversCreateNestedOneWithoutUsersInput
    rides_rides_rider_idTousers?: ridesCreateNestedManyWithoutUsers_rides_rider_idTousersInput
  }

  export type usersUncheckedCreateWithoutRides_rides_driver_idTousersInput = {
    id?: string
    full_name: string
    email: string
    phone_number: string
    password_hash: string
    role?: string | null
    created_at?: Date | string | null
    drivers?: driversUncheckedCreateNestedOneWithoutUsersInput
    rides_rides_rider_idTousers?: ridesUncheckedCreateNestedManyWithoutUsers_rides_rider_idTousersInput
  }

  export type usersCreateOrConnectWithoutRides_rides_driver_idTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutRides_rides_driver_idTousersInput, usersUncheckedCreateWithoutRides_rides_driver_idTousersInput>
  }

  export type usersUpsertWithoutRides_rides_driver_idTousersInput = {
    update: XOR<usersUpdateWithoutRides_rides_driver_idTousersInput, usersUncheckedUpdateWithoutRides_rides_driver_idTousersInput>
    create: XOR<usersCreateWithoutRides_rides_driver_idTousersInput, usersUncheckedCreateWithoutRides_rides_driver_idTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutRides_rides_driver_idTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutRides_rides_driver_idTousersInput, usersUncheckedUpdateWithoutRides_rides_driver_idTousersInput>
  }

  export type usersUpdateWithoutRides_rides_driver_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    drivers?: driversUpdateOneWithoutUsersNestedInput
    rides_rides_rider_idTousers?: ridesUpdateManyWithoutUsers_rides_rider_idTousersNestedInput
  }

  export type usersUncheckedUpdateWithoutRides_rides_driver_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    drivers?: driversUncheckedUpdateOneWithoutUsersNestedInput
    rides_rides_rider_idTousers?: ridesUncheckedUpdateManyWithoutUsers_rides_rider_idTousersNestedInput
  }

  export type usersCreateWithoutRides_rides_rider_idTousersInput = {
    id?: string
    full_name: string
    email: string
    phone_number: string
    password_hash: string
    role?: string | null
    created_at?: Date | string | null
    drivers?: driversCreateNestedOneWithoutUsersInput
    rides_rides_driver_idTousers?: ridesCreateNestedManyWithoutUsers_rides_driver_idTousersInput
  }

  export type usersUncheckedCreateWithoutRides_rides_rider_idTousersInput = {
    id?: string
    full_name: string
    email: string
    phone_number: string
    password_hash: string
    role?: string | null
    created_at?: Date | string | null
    drivers?: driversUncheckedCreateNestedOneWithoutUsersInput
    rides_rides_driver_idTousers?: ridesUncheckedCreateNestedManyWithoutUsers_rides_driver_idTousersInput
  }

  export type usersCreateOrConnectWithoutRides_rides_rider_idTousersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutRides_rides_rider_idTousersInput, usersUncheckedCreateWithoutRides_rides_rider_idTousersInput>
  }

  export type usersUpsertWithoutRides_rides_rider_idTousersInput = {
    update: XOR<usersUpdateWithoutRides_rides_rider_idTousersInput, usersUncheckedUpdateWithoutRides_rides_rider_idTousersInput>
    create: XOR<usersCreateWithoutRides_rides_rider_idTousersInput, usersUncheckedCreateWithoutRides_rides_rider_idTousersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutRides_rides_rider_idTousersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutRides_rides_rider_idTousersInput, usersUncheckedUpdateWithoutRides_rides_rider_idTousersInput>
  }

  export type usersUpdateWithoutRides_rides_rider_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    drivers?: driversUpdateOneWithoutUsersNestedInput
    rides_rides_driver_idTousers?: ridesUpdateManyWithoutUsers_rides_driver_idTousersNestedInput
  }

  export type usersUncheckedUpdateWithoutRides_rides_rider_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    full_name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone_number?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    role?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    drivers?: driversUncheckedUpdateOneWithoutUsersNestedInput
    rides_rides_driver_idTousers?: ridesUncheckedUpdateManyWithoutUsers_rides_driver_idTousersNestedInput
  }

  export type driversCreateWithoutUsersInput = {
    vehicle_model?: string | null
    vehicle_plate?: string | null
    is_available?: boolean | null
    rating?: Decimal | DecimalJsLike | number | string | null
    is_on_trip?: boolean | null
  }

  export type driversUncheckedCreateWithoutUsersInput = {
    vehicle_model?: string | null
    vehicle_plate?: string | null
    is_available?: boolean | null
    rating?: Decimal | DecimalJsLike | number | string | null
    is_on_trip?: boolean | null
  }

  export type driversCreateOrConnectWithoutUsersInput = {
    where: driversWhereUniqueInput
    create: XOR<driversCreateWithoutUsersInput, driversUncheckedCreateWithoutUsersInput>
  }

  export type driversUpsertWithoutUsersInput = {
    update: XOR<driversUpdateWithoutUsersInput, driversUncheckedUpdateWithoutUsersInput>
    create: XOR<driversCreateWithoutUsersInput, driversUncheckedCreateWithoutUsersInput>
    where?: driversWhereInput
  }

  export type driversUpdateToOneWithWhereWithoutUsersInput = {
    where?: driversWhereInput
    data: XOR<driversUpdateWithoutUsersInput, driversUncheckedUpdateWithoutUsersInput>
  }

  export type driversUpdateWithoutUsersInput = {
    vehicle_model?: NullableStringFieldUpdateOperationsInput | string | null
    vehicle_plate?: NullableStringFieldUpdateOperationsInput | string | null
    is_available?: NullableBoolFieldUpdateOperationsInput | boolean | null
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    is_on_trip?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type driversUncheckedUpdateWithoutUsersInput = {
    vehicle_model?: NullableStringFieldUpdateOperationsInput | string | null
    vehicle_plate?: NullableStringFieldUpdateOperationsInput | string | null
    is_available?: NullableBoolFieldUpdateOperationsInput | boolean | null
    rating?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    is_on_trip?: NullableBoolFieldUpdateOperationsInput | boolean | null
  }

  export type ridesUpdateWithWhereUniqueWithoutUsers_rides_driver_idTousersInput = {
    where: ridesWhereUniqueInput
    data: XOR<ridesUpdateWithoutUsers_rides_driver_idTousersInput, ridesUncheckedUpdateWithoutUsers_rides_driver_idTousersInput>
  }

  export type ridesUpdateManyWithWhereWithoutUsers_rides_driver_idTousersInput = {
    where: ridesScalarWhereInput
    data: XOR<ridesUpdateManyMutationInput, ridesUncheckedUpdateManyWithoutUsers_rides_driver_idTousersInput>
  }

  export type ridesScalarWhereInput = {
    AND?: ridesScalarWhereInput | ridesScalarWhereInput[]
    OR?: ridesScalarWhereInput[]
    NOT?: ridesScalarWhereInput | ridesScalarWhereInput[]
    id?: UuidFilter<"rides"> | string
    rider_id?: UuidNullableFilter<"rides"> | string | null
    driver_id?: UuidNullableFilter<"rides"> | string | null
    status?: StringNullableFilter<"rides"> | string | null
    pickup_address?: StringNullableFilter<"rides"> | string | null
    dropoff_address?: StringNullableFilter<"rides"> | string | null
    estimated_fare?: DecimalNullableFilter<"rides"> | Decimal | DecimalJsLike | number | string | null
    actual_fare?: DecimalNullableFilter<"rides"> | Decimal | DecimalJsLike | number | string | null
    surge_multiplier?: DecimalNullableFilter<"rides"> | Decimal | DecimalJsLike | number | string | null
    distance_meters?: IntNullableFilter<"rides"> | number | null
    requested_at?: DateTimeFilter<"rides"> | Date | string
    accepted_at?: DateTimeNullableFilter<"rides"> | Date | string | null
    started_at?: DateTimeNullableFilter<"rides"> | Date | string | null
    ended_at?: DateTimeNullableFilter<"rides"> | Date | string | null
    cancelled_at?: DateTimeNullableFilter<"rides"> | Date | string | null
    cancellation_reason?: StringNullableFilter<"rides"> | string | null
    otp?: StringNullableFilter<"rides"> | string | null
  }

  export type ridesUpdateWithWhereUniqueWithoutUsers_rides_rider_idTousersInput = {
    where: ridesWhereUniqueInput
    data: XOR<ridesUpdateWithoutUsers_rides_rider_idTousersInput, ridesUncheckedUpdateWithoutUsers_rides_rider_idTousersInput>
  }

  export type ridesUpdateManyWithWhereWithoutUsers_rides_rider_idTousersInput = {
    where: ridesScalarWhereInput
    data: XOR<ridesUpdateManyMutationInput, ridesUncheckedUpdateManyWithoutUsers_rides_rider_idTousersInput>
  }

  export type ridesUpdateWithoutUsers_rides_driver_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    pickup_address?: NullableStringFieldUpdateOperationsInput | string | null
    dropoff_address?: NullableStringFieldUpdateOperationsInput | string | null
    estimated_fare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actual_fare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    surge_multiplier?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    distance_meters?: NullableIntFieldUpdateOperationsInput | number | null
    requested_at?: DateTimeFieldUpdateOperationsInput | Date | string
    accepted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ended_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellation_reason?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    users_rides_rider_idTousers?: usersUpdateOneWithoutRides_rides_rider_idTousersNestedInput
  }

  export type ridesUncheckedUpdateWithoutUsers_rides_driver_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    rider_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    pickup_address?: NullableStringFieldUpdateOperationsInput | string | null
    dropoff_address?: NullableStringFieldUpdateOperationsInput | string | null
    estimated_fare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actual_fare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    surge_multiplier?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    distance_meters?: NullableIntFieldUpdateOperationsInput | number | null
    requested_at?: DateTimeFieldUpdateOperationsInput | Date | string
    accepted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ended_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellation_reason?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ridesUncheckedUpdateManyWithoutUsers_rides_driver_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    rider_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    pickup_address?: NullableStringFieldUpdateOperationsInput | string | null
    dropoff_address?: NullableStringFieldUpdateOperationsInput | string | null
    estimated_fare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actual_fare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    surge_multiplier?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    distance_meters?: NullableIntFieldUpdateOperationsInput | number | null
    requested_at?: DateTimeFieldUpdateOperationsInput | Date | string
    accepted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ended_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellation_reason?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ridesUpdateWithoutUsers_rides_rider_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: NullableStringFieldUpdateOperationsInput | string | null
    pickup_address?: NullableStringFieldUpdateOperationsInput | string | null
    dropoff_address?: NullableStringFieldUpdateOperationsInput | string | null
    estimated_fare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actual_fare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    surge_multiplier?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    distance_meters?: NullableIntFieldUpdateOperationsInput | number | null
    requested_at?: DateTimeFieldUpdateOperationsInput | Date | string
    accepted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ended_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellation_reason?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
    users_rides_driver_idTousers?: usersUpdateOneWithoutRides_rides_driver_idTousersNestedInput
  }

  export type ridesUncheckedUpdateWithoutUsers_rides_rider_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    driver_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    pickup_address?: NullableStringFieldUpdateOperationsInput | string | null
    dropoff_address?: NullableStringFieldUpdateOperationsInput | string | null
    estimated_fare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actual_fare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    surge_multiplier?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    distance_meters?: NullableIntFieldUpdateOperationsInput | number | null
    requested_at?: DateTimeFieldUpdateOperationsInput | Date | string
    accepted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ended_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellation_reason?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ridesUncheckedUpdateManyWithoutUsers_rides_rider_idTousersInput = {
    id?: StringFieldUpdateOperationsInput | string
    driver_id?: NullableStringFieldUpdateOperationsInput | string | null
    status?: NullableStringFieldUpdateOperationsInput | string | null
    pickup_address?: NullableStringFieldUpdateOperationsInput | string | null
    dropoff_address?: NullableStringFieldUpdateOperationsInput | string | null
    estimated_fare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    actual_fare?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    surge_multiplier?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    distance_meters?: NullableIntFieldUpdateOperationsInput | number | null
    requested_at?: DateTimeFieldUpdateOperationsInput | Date | string
    accepted_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    started_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    ended_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancelled_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cancellation_reason?: NullableStringFieldUpdateOperationsInput | string | null
    otp?: NullableStringFieldUpdateOperationsInput | string | null
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