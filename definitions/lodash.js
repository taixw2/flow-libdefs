/* @flow */

type JsonType = string | number | boolean | {+[key: string]: JsonType};
type CollectionType<V> = Array<V> | {+[key: any]: V};
type IterateeType<V, K: $Subtype<string> = string, R = any> =
  | ((val: V) => R)
  | {+[key: K]: JsonType}
  | [string, JsonType]
  | string;
type PredicateType<
  V,
  K: $Subtype<string> = string,
  R: boolean = *,
> = IterateeType<V, K, R>;

declare module 'lodash/fp' {
  /* Array */
  declare function chunk<V>(
    size: number,
    ...rest: Array<void>
  ): (arr: ?Array<V>) => Array<Array<V>>;
  declare function chunk<V>(size: number, arr: ?Array<V>): Array<Array<V>>;
  declare function compact<V: JsonType | Array<JsonType>>(
    arr: ?Array<?$Supertype<V>>,
  ): Array<V>;
  declare function concat<V>(
    arr: ?Array<V>,
    ...rest: Array<void>
  ): (vals: ?(Array<V> | V)) => Array<V>;
  declare function concat<V>(arr: ?Array<V>, vals: ?(Array<V> | V)): Array<V>;
  declare function findIndex<V>(
    predicate: PredicateType<V>,
    ...rest: Array<void>
  ): (arr: ?Array<V>) => number;
  declare function findIndex<V>(
    predicate: PredicateType<V>,
    arr: ?Array<V>,
  ): number;
  declare function flatten<V>(arr: ?Array<Array<V>>): Array<V>;
  declare function fromPairs<K: $Subtype<string>, V>(
    arr: ?Array<[K, V]>,
  ): {[key: K]: V};
  declare function head<V>(arr: ?Array<V>): V | void;
  declare function join(
    separator: string,
    ...rest: Array<void>
  ): (arr: ?Array<any>) => string;
  declare function join(separator: string, arr: ?Array<any>): string;
  declare function pull<V>(
    val: V,
    ...rest: Array<void>
  ): (arr: ?Array<V>) => Array<V>;
  declare function pull<V>(val: V, arr: ?Array<V>): Array<V>;
  declare function pullAt<V>(
    indexes: Array<number>,
    ...rest: Array<void>
  ): (arr: ?Array<V>) => Array<V>;
  declare function pullAt<V>(indexes: Array<number>, arr: ?Array<V>): Array<V>;
  declare function tail<V>(arr: ?Array<V>): Array<V>;
  declare function last<V>(arr: ?Array<V>): V;

  /* Collection */
  declare function every<V>(
    predicate: PredicateType<V>,
    ...rest: Array<void>
  ): (col: ?CollectionType<V>) => boolean;
  declare function every<V>(
    predicate: PredicateType<V>,
    col: ?CollectionType<V>,
  ): boolean;
  declare function filter<V, C: CollectionType<V>>(
    predicate: PredicateType<V>,
    ...rest: Array<void>
  ): (col: ?C) => C;
  declare function filter<V, C: CollectionType<V>>(
    predicate: PredicateType<V>,
    col: ?C,
  ): C;
  declare function find<V>(
    predicate: PredicateType<V>,
    ...rest: Array<void>
  ): (col: ?CollectionType<V>) => V | void;
  declare function find<V>(
    predicate: PredicateType<V>,
    col: ?CollectionType<V>,
  ): V | void;
  declare function flatMap<V, VR, R: Array<VR> | VR>(
    iteratee: (x: V) => R,
    ...rest: Array<void>
  ): (col: ?Array<V>) => Array<VR>;
  declare function flatMap<V, VR, R: Array<VR> | VR>(
    iteratee: (x: V) => R,
    col: ?Array<V>,
  ): Array<VR>;
  declare function includes<V>(
    val: V,
    ...rest: Array<void>
  ): (col: ?CollectionType<V>) => boolean;
  declare function includes<V>(val: V, col: ?CollectionType<V>): boolean;
  declare function map<V, VR>(
    iteratee: (val: V) => VR,
    ...rest: Array<void>
  ): ((col: ?Array<V>) => Array<VR>) &
    ((col: ?{+[key: any]: V}) => {+[key: any]: VR});
  declare function map<V, VR>(fn: (val: V) => VR, col: ?Array<V>): Array<VR>;
  declare function map<V, VR>(
    iteratee: (val: V) => VR,
    col: ?{+[key: any]: V},
  ): {+[key: any]: VR};
  declare function map<K: $Subtype<string | number>>(
    key: K,
    ...rest: Array<void>
  ): (col: ?Array<any>) => Array<any>;
  declare function map<K: $Subtype<string | number>>(
    key: K,
    col: ?Array<any>,
  ): Array<any>;
  declare function reduce<A, V>(
    iteratee: (acc: A, value: V) => A,
    ...rest: Array<void>
  ): (acc: A, ...rest: Array<void>) => (col: ?Array<V>) => A;
  declare function reduce<A, V>(
    iteratee: (acc: A, value: V) => A,
    acc: A,
    ...rest: Array<void>
  ): (col: ?Array<V>) => A;
  declare function reduce<A, V>(
    iteratee: (acc: A, value: V) => A,
    acc: A,
    col: ?Array<V>,
  ): A;
  declare function reject<V, C: CollectionType<V>>(
    predicate: PredicateType<V>,
    ...rest: Array<void>
  ): (col: ?C) => C;
  declare function reject<V, C: CollectionType<V>>(
    predicate: PredicateType<V>,
    col: ?C,
  ): C;
  declare function shuffle<C: CollectionType<any>>(col: ?C): C;
  declare function size(col: ?(CollectionType<any> | string)): number;
  declare function some<V>(
    predicate: PredicateType<V>,
    ...rest: Array<void>
  ): (col: ?Array<V>) => boolean;
  declare function some<V>(
    predicate: PredicateType<V>,
    col: ?Array<V>,
  ): boolean;
  declare function sortBy<V>(
    iteratees: Array<IterateeType<V, any>> | IterateeType<V, any>,
    ...rest: Array<void>
  ): (col: ?Array<V>) => Array<V>;
  declare function sortBy<V>(
    iteratees: Array<IterateeType<V, any>> | IterateeType<V, any>,
    col: ?Array<V>,
  ): Array<V>;

  /* Function */
  declare function debounce<F: Function>(
    wait: number,
    ...rest: Array<void>
  ): (fn: F) => F;
  declare function debounce<F: Function>(wait: number, fn: F): F;
  declare function negate<V>(
    predicate: (val: V) => boolean,
  ): (val: V) => boolean;
  declare function throttle<F: Function>(
    wait: number,
    ...rest: Array<void>
  ): (fn: F) => F;
  declare function throttle<F: Function>(wait: number, fn: F): F;

  /* Lang */
  declare function eq(a: any, ...rest: Array<void>): (b: any) => boolean;
  declare function eq(a: any, b: any): boolean;
  declare function isEqual(a: any, ...rest: Array<void>): (b: any) => boolean;
  declare function isEqual(a: any, b: any): boolean;
  declare function isEmpty(val: any): boolean;
  declare function isNaN(val: any): boolean;
  declare function isNil(val: any): boolean;

  /* Math */
  declare function sum(arr: ?Array<number>): number;

  /* Number */
  declare function random(lower?: number, upper?: number): number;

  /* Object */
  declare function get<O: {+[key: $Subtype<string>]: any}, K: $Keys<O>>(
    path: K,
    ...rest: Array<void>
  ): (obj: ?O) => any;
  declare function get<O: {+[key: $Subtype<string>]: any}, K: $Keys<O>>(
    path: K,
    obj: ?O,
  ): any;
  declare function getOr<O: {+[key: $Subtype<string>]: any}, K: $Keys<O>>(
    defaultValue: any,
    ...rest: Array<void>
  ): (path: K, ...rest: Array<void>) => (obj: ?O) => any;
  declare function getOr<O: {+[key: $Subtype<string>]: any}, K: $Keys<O>>(
    defaultValue: any,
    path: K,
    ...rest: Array<void>
  ): (obj: ?O) => any;
  declare function getOr<O: {+[key: $Subtype<string>]: any}, K: $Keys<O>>(
    defaultValue: any,
    path: K,
    obj: ?O,
  ): any;
  declare function keys<O: {+[key: $Subtype<string>]: any}, K: $Keys<O>>(
    obj: ?O,
  ): Array<K>;
  declare function omit<V, O: {+[key: $Subtype<string>]: V}, K: $Keys<O>>(
    paths: Array<K>,
    ...rest: Array<void>
  ): (obj: ?O) => {+[key: $Supertype<K>]: $Supertype<V>};
  declare function omit<V, O: {+[key: $Subtype<string>]: V}, K: $Keys<O>>(
    paths: Array<K>,
    obj: ?O,
  ): {+[key: $Supertype<K>]: $Supertype<V>};
  declare function omitBy<V, O: {+[key: $Subtype<string>]: V}, K: $Keys<O>>(
    predicate: PredicateType<V, K>,
    ...rest: Array<void>
  ): (obj: ?O) => {+[key: $Supertype<K>]: $Supertype<V>};
  declare function omitBy<V, O: {+[key: $Subtype<string>]: V}, K: $Keys<O>>(
    predicate: PredicateType<V, K>,
    obj: ?O,
  ): {+[key: $Supertype<K>]: $Supertype<V>};
  declare function pick<V, O: {+[key: $Subtype<string>]: V}, K: $Keys<O>>(
    paths: Array<K>,
    ...rest: Array<void>
  ): (obj: ?O) => {+[key: $Supertype<K>]: $Supertype<V>};
  declare function pick<V, O: {+[key: $Subtype<string>]: V}, K: $Keys<O>>(
    paths: Array<K>,
    obj: ?O,
  ): {+[key: $Supertype<K>]: $Supertype<V>};
  declare function pickBy<V, O: {+[key: $Subtype<string>]: V}, K: $Keys<O>>(
    predicate: PredicateType<V, K>,
    ...rest: Array<void>
  ): (obj: ?O) => {+[key: $Supertype<K>]: $Supertype<V>};
  declare function pickBy<V, O: {+[key: $Subtype<string>]: V}, K: $Keys<O>>(
    predicate: PredicateType<V, K>,
    obj: ?O,
  ): {+[key: $Supertype<K>]: $Supertype<V>};
  declare function update<V, O: {+[key: $Subtype<string>]: V}, K: $Keys<O>>(
    path: K,
    ...rest: Array<void>
  ): (
    updater: (val: V) => any,
    ...rest: Array<void>
  ) => (obj: ?O) => $ObjMap<O, (val: V) => $Supertype<V>>;
  declare function update<V, O: {+[key: $Subtype<string>]: V}, K: $Keys<O>>(
    path: K,
    updater: (val: V) => any,
    ...rest: Array<void>
  ): (obj: ?O) => $ObjMap<O, (val: V) => $Supertype<V>>;
  declare function update<V, O: {+[key: $Subtype<string>]: V}, K: $Keys<O>>(
    path: K,
    updater: (val: V) => any,
    obj: ?O,
  ): $ObjMap<O, (val: V) => $Supertype<V>>;
  declare function values<V>(obj: ?{+[key: any]: V}): Array<V>;
  declare function toPairs<V, O: {+[key: $Subtype<string>]: V}, K: $Keys<O>>(
    obj: ?O,
  ): Array<[K, V]>;
  declare function has<O: {+[key: $Subtype<string>]: any}, K: $Keys<O>>(
    path: K,
    ...rest: Array<void>
  ): (obj: ?O) => boolean;
  declare function has<O: {+[key: $Subtype<string>]: any}, K: $Keys<O>>(
    path: K,
    obj: ?O,
  ): boolean;

  /* String */
  declare function capitalize(str: ?string): string;
  declare function padCharsStart(
    chars: string,
    ...rest: Array<void>
  ): (length: number, ...rest: Array<void>) => (str: ?string) => string;
  declare function padCharsStart(
    chars: string,
    length: number,
    ...rest: Array<void>
  ): (str: ?string) => string;
  declare function padCharsStart(
    chars: string,
    length: number,
    str: ?string,
  ): string;
  declare function replace(
    pattern: RegExp | string,
    ...rest: Array<void>
  ): (replacement: string, ...rest: Array<void>) => (str: ?string) => string;
  declare function replace(
    pattern: RegExp | string,
    replacement: string,
    ...rest: Array<void>
  ): (str: ?string) => string;
  declare function replace(
    pattern: RegExp | string,
    replacement: string,
    str: ?string,
  ): string;
  declare function split(
    separator: string,
    ...rest: Array<void>
  ): (str: ?string) => Array<string>;
  declare function split(separator: string, str: ?string): Array<string>;
  declare function toString(str: any): string;
  declare function toUpper(str: ?string): string;
  declare function trim(str: ?string): string;
  declare function truncate(
    options: {length?: number, omission?: string, separator?: RegExp | string},
    ...rest: Array<void>
  ): (str: ?string) => string;
  declare function truncate(
    options: {length?: number, omission?: string, separator?: RegExp | string},
    str: ?string,
  ): string;
  declare function startsWith(
    target: string,
    ...rest: Array<void>
  ): (str: ?string) => boolean;
  declare function startsWith(target: string, str: ?string): boolean;

  /* Util */
  declare function compose<A, B>(
    ab: (a: A) => B,
    ...rest: Array<void>
  ): (a: A) => B;
  declare function compose<A, B, C>(
    bc: (b: B) => C,
    ab: (a: A) => B,
    ...rest: Array<void>
  ): (a: A) => C;
  declare function compose<A, B, C, D>(
    cd: (c: C) => D,
    bc: (b: B) => C,
    ab: (a: A) => B,
    ...rest: Array<void>
  ): (a: A) => D;
  declare function compose<A, B, C, D, E>(
    de: (d: D) => E,
    cd: (c: C) => D,
    bc: (b: B) => C,
    ab: (a: A) => B,
    ...rest: Array<void>
  ): (a: A) => E;
  declare function compose<A, B, C, D, E, F>(
    ef: (e: E) => F,
    de: (d: D) => E,
    cd: (c: C) => D,
    bc: (b: B) => C,
    ab: (a: A) => B,
    ...rest: Array<void>
  ): (a: A) => F;
  declare function compose<A, B, C, D, E, F, G>(
    fg: (f: F) => G,
    ef: (e: E) => F,
    de: (d: D) => E,
    cd: (c: C) => D,
    bc: (b: B) => C,
    ab: (a: A) => B,
    ...rest: Array<void>
  ): (a: A) => G;
  declare function cond<A, B>(
    pairs: Array<[(...args: Array<A>) => boolean, (...args: Array<A>) => B]>,
  ): (...args: Array<A>) => B;
  declare function constant<T>(val: T): () => T;
  declare function flow<A, B>(
    ab: (a: A) => B,
    ...rest: Array<void>
  ): (a: A) => B;
  declare function flow<A, B, C>(
    ab: (a: A) => B,
    bc: (b: B) => C,
    ...rest: Array<void>
  ): (a: A) => C;
  declare function flow<A, B, C, D>(
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    ...rest: Array<void>
  ): (a: A) => D;
  declare function flow<A, B, C, D, E>(
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => E,
    ...rest: Array<void>
  ): (a: A) => E;
  declare function flow<A, B, C, D, E, F>(
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => E,
    ef: (e: E) => F,
    ...rest: Array<void>
  ): (a: A) => F;
  declare function flow<A, B, C, D, E, F, G>(
    ab: (a: A) => B,
    bc: (b: B) => C,
    cd: (c: C) => D,
    de: (d: D) => E,
    ef: (e: E) => F,
    fg: (f: F) => G,
    ...rest: Array<void>
  ): (a: A) => G;
  declare function stubTrue(): true;
  declare function overEvery<A>(
    predicates: Array<(...args: Array<A>) => boolean>,
  ): (...args: Array<A>) => boolean;
  declare function overSome<A>(
    predicates: Array<(...args: Array<A>) => boolean>,
  ): (...args: Array<A>) => boolean;
  declare function times<V>(
    iteratee: (idx: number) => V,
    ...rest: Array<void>
  ): (n: number) => Array<V>;
  declare function times<V>(iteratee: (idx: number) => V, n: number): Array<V>;
}
