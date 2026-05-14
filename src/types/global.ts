export type Primitive =
	| string
	| number
	| boolean
	| bigint
	| symbol
	| null
	| undefined
	| Date;

export type NestedKeyOf<T> = {
	[K in keyof T & string]: T[K] extends Primitive | Array<unknown>
		? K
		: K | `${K}.${NestedKeyOf<NonNullable<T[K]>>}`;
}[keyof T & string];
