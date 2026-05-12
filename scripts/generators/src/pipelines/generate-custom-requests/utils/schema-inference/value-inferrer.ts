import {
	buildPlaceholderTrees,
	extractPlaceholderPathSegments,
	type PlaceholderRoot,
} from "./placeholder-resolver";
import { renderTree, toSafeObjectKey } from "./tree-renderer";

const PLACEHOLDER_LEAF_SCHEMAS: Record<PlaceholderRoot, string> = {
	$nForm: "z.string()",
	$nPopupRecord: "z.unknown()",
	$nSelectedRecord: "z.array(z.unknown())",
	currentRecord: "z.unknown()",
	currentUser: "z.unknown()",
};

const PLACEHOLDER_RENDER_ORDER: readonly PlaceholderRoot[] = [
	"$nForm",
	"$nPopupRecord",
	"$nSelectedRecord",
	"currentRecord",
	"currentUser",
];
const OPTIONAL_PLACEHOLDER_ROOTS = new Set<PlaceholderRoot>(["currentUser"]);

function maybeOptionalPlaceholderSchema(
	root: PlaceholderRoot,
	schema: string,
): string {
	return OPTIONAL_PLACEHOLDER_ROOTS.has(root) ? `${schema}.optional()` : schema;
}

function inferPrimitiveLiteralZod(
	val: string | number | boolean | null,
): string {
	const literal = JSON.stringify(val);
	return `z.literal(${literal}).default(${literal}).readonly()`;
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

function isPlaceholderValue(value: unknown): boolean {
	if (typeof value !== "string") return false;

	for (const root of PLACEHOLDER_RENDER_ORDER) {
		if (extractPlaceholderPathSegments(value, root) !== null) {
			return true;
		}
	}

	return false;
}

function inferObjectZod(obj: Record<string, unknown>): string {
	const entries = Object.entries(obj);
	if (entries.length === 0) return "z.object({})";

	const { trees, rootRefs } = buildPlaceholderTrees(entries);
	const regularLines: string[] = [];

	for (const [key, value] of entries) {
		if (isPlaceholderValue(value)) continue;
		regularLines.push(`    ${toSafeObjectKey(key)}: ${inferValueZod(value)},`);
	}

	const placeholderLines: string[] = [];

	for (const root of PLACEHOLDER_RENDER_ORDER) {
		const tree = trees.get(root);
		const leafSchema = PLACEHOLDER_LEAF_SCHEMAS[root];

		if (tree && Object.keys(tree).length > 0) {
			const shape = renderTree(tree, "      ", leafSchema);
			placeholderLines.push(
				`    ${root}: ${maybeOptionalPlaceholderSchema(root, `z.object({\n${shape}\n    })`)},`,
			);
		} else if (rootRefs.has(root)) {
			placeholderLines.push(
				`    ${root}: ${maybeOptionalPlaceholderSchema(root, leafSchema)},`,
			);
		}
	}

	return `z.object({\n${[...regularLines, ...placeholderLines].join("\n")}\n  })`;
}

export { inferObjectZod, inferPrimitiveLiteralZod };
