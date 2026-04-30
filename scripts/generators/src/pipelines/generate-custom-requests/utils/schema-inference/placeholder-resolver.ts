import type { PlaceholderSchemaTree } from "./tree-renderer";
import { addPathToTree } from "./tree-renderer";

export type PlaceholderRoot =
	| "$nForm"
	| "$nPopupRecord"
	| "$nSelectedRecord"
	| "currentRecord"
	| "currentUser";

export function extractPlaceholderPathSegments(
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

export function buildPlaceholderTrees(entries: [string, unknown][]): {
	trees: Map<PlaceholderRoot, PlaceholderSchemaTree>;
	rootRefs: Set<PlaceholderRoot>;
} {
	const trees = new Map<PlaceholderRoot, PlaceholderSchemaTree>();
	const rootRefs = new Set<PlaceholderRoot>();

	for (const [, value] of entries) {
		for (const root of PLACEHOLDER_ROOTS) {
			const path = extractPlaceholderPathSegments(value, root);
			if (path !== null) {
				if (path.length === 0) {
					rootRefs.add(root);
				} else {
					let tree = trees.get(root);
					if (!tree) {
						tree = {};
						trees.set(root, tree);
					}
					addPathToTree(tree, path);
				}
			}
		}
	}

	return { trees, rootRefs };
}

const PLACEHOLDER_ROOTS: readonly PlaceholderRoot[] = [
	"$nForm",
	"$nPopupRecord",
	"$nSelectedRecord",
	"currentRecord",
	"currentUser",
];
