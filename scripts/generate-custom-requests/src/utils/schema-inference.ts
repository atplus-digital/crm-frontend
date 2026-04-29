/**
 * Infer Zod schema from payload data shape.
 *
 * Takes the runtime data (options.data from the API) and produces
 * a Zod schema string suitable for code generation.
 */

function inferPrimitiveLiteralZod(
	val: string | number | boolean | null,
): string {
	return `z.literal(${JSON.stringify(val)})`;
}

function toSafeObjectKey(key: string): string {
	return /^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(key) ? key : `"${key}"`;
}

type PlaceholderRoot =
	| "$nForm"
	| "$nSelectedRecord"
	| "currentRecord"
	| "currentUser";

function extractPlaceholderPathSegments(
	value: unknown,
	root: PlaceholderRoot,
): string[] | null {
	if (typeof value !== "string") return null;
	const escapedRoot = root.replace("$", "\\$");
	const match = value.match(
		new RegExp(`^\\{\\{${escapedRoot}(?:\\.(.+))?\\}\\}$`),
	);
	if (!match) return null;
	if (!match[1]) return [];
	return match[1].split(".").filter(Boolean);
}

interface PlaceholderSchemaTree {
	[key: string]: PlaceholderSchemaTree | true;
}

function addPathToTree(tree: PlaceholderSchemaTree, path: string[]): void {
	let node = tree;

	for (let i = 0; i < path.length; i++) {
		const segment = path[i];
		const isLeaf = i === path.length - 1;
		const current = node[segment];

		if (isLeaf) {
			node[segment] = true;
			continue;
		}

		if (!current || current === true) {
			node[segment] = {};
		}

		node = node[segment] as PlaceholderSchemaTree;
	}
}

function renderTree(
	tree: PlaceholderSchemaTree,
	indent: string,
	leafSchema: string,
): string {
	const entries = Object.entries(tree).sort(([a], [b]) => a.localeCompare(b));
	return entries
		.map(([key, value]) => {
			if (value === true) {
				return `${indent}${toSafeObjectKey(key)}: ${leafSchema},`;
			}
			const nested = renderTree(value, `${indent}  `, leafSchema);
			return `${indent}${toSafeObjectKey(key)}: z.object({\n${nested}\n${indent}}),`;
		})
		.join("\n");
}

function inferValueZod(val: unknown): string {
	if (val === null) return inferPrimitiveLiteralZod(null);

	switch (typeof val) {
		case "string":
			return inferPrimitiveLiteralZod(val);
		case "number":
			return Number.isFinite(val)
				? inferPrimitiveLiteralZod(val)
				: "z.number()";
		case "boolean":
			return inferPrimitiveLiteralZod(val);
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

	const lines: string[] = [];
	const nFormTree: PlaceholderSchemaTree = {};
	const nSelectedRecordTree: PlaceholderSchemaTree = {};
	const currentRecordTree: PlaceholderSchemaTree = {};
	const currentUserTree: PlaceholderSchemaTree = {};
	let hasNFormRootReference = false;
	let hasNSelectedRecordRootReference = false;
	let hasCurrentRecordRootReference = false;
	let hasCurrentUserRootReference = false;

	for (const [key, value] of entries) {
		const nFormPath = extractPlaceholderPathSegments(value, "$nForm");
		if (nFormPath) {
			if (nFormPath.length === 0) {
				hasNFormRootReference = true;
			} else {
				addPathToTree(nFormTree, nFormPath);
			}
			continue;
		}

		const nSelectedRecordPath = extractPlaceholderPathSegments(
			value,
			"$nSelectedRecord",
		);
		if (nSelectedRecordPath) {
			if (nSelectedRecordPath.length === 0) {
				hasNSelectedRecordRootReference = true;
			} else {
				addPathToTree(nSelectedRecordTree, nSelectedRecordPath);
			}
			continue;
		}

		const currentRecordPath = extractPlaceholderPathSegments(
			value,
			"currentRecord",
		);
		if (currentRecordPath) {
			if (currentRecordPath.length === 0) {
				hasCurrentRecordRootReference = true;
			} else {
				addPathToTree(currentRecordTree, currentRecordPath);
			}
			continue;
		}

		const currentUserPath = extractPlaceholderPathSegments(
			value,
			"currentUser",
		);
		if (currentUserPath) {
			if (currentUserPath.length === 0) {
				hasCurrentUserRootReference = true;
			} else {
				addPathToTree(currentUserTree, currentUserPath);
			}
			continue;
		}

		lines.push(`    ${toSafeObjectKey(key)}: ${inferValueZod(value)},`);
	}

	if (Object.keys(nFormTree).length > 0) {
		const nFormShape = renderTree(nFormTree, "      ", "z.string()");
		lines.push(`    $nForm: z.object({\n${nFormShape}\n    }),`);
	} else if (hasNFormRootReference) {
		lines.push("    $nForm: z.unknown(),");
	}

	if (Object.keys(nSelectedRecordTree).length > 0) {
		const nSelectedRecordShape = renderTree(
			nSelectedRecordTree,
			"      ",
			"z.unknown()",
		);
		lines.push(
			`    $nSelectedRecord: z.object({\n${nSelectedRecordShape}\n    }),`,
		);
	} else if (hasNSelectedRecordRootReference) {
		lines.push("    $nSelectedRecord: z.unknown(),");
	}

	if (Object.keys(currentRecordTree).length > 0) {
		const currentRecordShape = renderTree(
			currentRecordTree,
			"      ",
			"z.unknown()",
		);
		lines.push(`    currentRecord: z.object({\n${currentRecordShape}\n    }),`);
	} else if (hasCurrentRecordRootReference) {
		lines.push("    currentRecord: z.unknown(),");
	}

	if (Object.keys(currentUserTree).length > 0) {
		const currentUserShape = renderTree(
			currentUserTree,
			"      ",
			"z.unknown()",
		);
		lines.push(`    currentUser: z.object({\n${currentUserShape}\n    }),`);
	} else if (hasCurrentUserRootReference) {
		lines.push("    currentUser: z.unknown(),");
	}

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
