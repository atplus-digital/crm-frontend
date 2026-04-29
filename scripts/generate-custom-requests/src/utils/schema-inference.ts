/**
 * Infer Zod schema from payload data shape.
 *
 * Takes the runtime data (options.data from the API) and produces
 * a Zod schema string suitable for code generation.
 */

function inferValueZod(val: unknown): string {
	if (val === null) return "z.null()";

	switch (typeof val) {
		case "string":
			return "z.string()";
		case "number":
			return "z.number()";
		case "boolean":
			return "z.boolean()";
		case "object":
			if (Array.isArray(val)) {
				return "z.array(z.unknown())";
			}
			return inferObjectZod(val as Record<string, unknown>);
		default:
			return "z.unknown()";
	}
}

function inferObjectZod(obj: Record<string, unknown>): string {
	const entries = Object.entries(obj);

	if (entries.length === 0) return "z.object({})";

	const lines = entries.map(([key, value]) => {
		const safeKey = /^[a-zA-Z_][a-zA-Z0-9_]*$/.test(key) ? key : `"${key}"`;
		return `    ${safeKey}: ${inferValueZod(value)},`;
	});

	return `z.object({\n${lines.join("\n")}\n  })`;
}

/**
 * Infer a Zod schema from payload data.
 * Returns a string representation of the Zod schema.
 *
 * @param data - The payload data (options.data from API)
 * @returns Zod schema string (e.g., "z.object({ id: z.string() })")
 */
export function inferPayloadSchema(
	data: Record<string, unknown> | null,
): string {
	if (!data || Object.keys(data).length === 0) {
		return "z.any()";
	}

	return inferObjectZod(data);
}
