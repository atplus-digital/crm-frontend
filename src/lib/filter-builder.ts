/**
 * Generic filter builder for NocoBase/IXC API queries.
 * Consolidates duplicate filter builder patterns across services.
 */

/**
 * Creates a filter object for NocoBase/IXC API queries.
 * Automatically wraps multiple conditions in $and, returns single condition as-is.
 *
 * @example
 * // Single condition
 * buildFilter({
 *   conditions: [{ status: { $eq: "active" } }]
 * })
 * // Returns: { status: { $eq: "active" } }
 *
 * @example
 * // Multiple conditions (auto-wrapped in $and)
 * buildFilter({
 *   conditions: [
 *     { status: { $eq: "active" } },
 *     { name: { $includes: "john" } }
 *   ]
 * })
 * // Returns: { $and: [{ status: { $eq: "active" } }, { name: { $includes: "john" } }] }
 *
 * @example
 * // Nested OR condition
 * buildFilter({
 *   conditions: [
 *     {
 *       $or: [
 *         { cpf: { $includes: "123" } },
 *         { cnpj: { $includes: "456" } }
 *       ]
 *     }
 *   ]
 * })
 */
export function buildFilter(
	conditions: Record<string, unknown>[],
): Record<string, unknown> | undefined {
	if (conditions.length === 0) {
		return undefined;
	}

	if (conditions.length === 1) {
		return conditions[0];
	}

	return { $and: conditions };
}

/**
 * Helper to create an equality filter condition.
 */
export function eq<T extends string | number | boolean>(
	field: string,
	value: T,
): Record<string, unknown> {
	return { [field]: { $eq: value } };
}

/**
 * Helper to create an "includes" (partial match) filter condition.
 */
export function includes(
	field: string,
	value: string,
): Record<string, unknown> {
	return { [field]: { $includes: value } };
}

/**
 * Helper to create a greater than or equal filter condition.
 */
export function gte(
	field: string,
	value: number | string,
): Record<string, unknown> {
	return { [field]: { $gte: value } };
}

/**
 * Helper to create a less than or equal filter condition.
 */
export function lte(
	field: string,
	value: number | string,
): Record<string, unknown> {
	return { [field]: { $lte: value } };
}

/**
 * Helper to create an OR condition.
 */
export function or(
	...conditions: Record<string, unknown>[]
): Record<string, unknown> {
	if (conditions.length === 0) {
		return {};
	}
	if (conditions.length === 1) {
		return conditions[0];
	}
	return { $or: conditions };
}

/**
 * Helper to create a nested field filter (e.g., { user: { name: { $includes: "John" } } }).
 */
export function nestedField(
	field: string,
	nestedCondition: Record<string, unknown>,
): Record<string, unknown> {
	return { [field]: nestedCondition };
}
