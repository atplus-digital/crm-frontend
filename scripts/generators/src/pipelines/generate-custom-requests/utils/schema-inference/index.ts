import { inferObjectZod, inferPrimitiveLiteralZod } from "./value-inferrer";

export function inferPayloadSchema(
	data: Record<string, unknown> | null,
): string {
	if (!data || Object.keys(data).length === 0) {
		return "z.any()";
	}

	return inferObjectZod(data);
}

export { inferPrimitiveLiteralZod };
