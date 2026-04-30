const SAFE_KEY_REGEX = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;

export function toSafeObjectKey(key: string): string {
	return SAFE_KEY_REGEX.test(key) ? key : `"${key}"`;
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

export type { PlaceholderSchemaTree };
export { addPathToTree, renderTree };
