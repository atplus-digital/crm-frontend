/**
 * Merges action arrays from all roles.
 * - Deduplicates actions
 * - For any `:own` suffixed action (e.g. `update:own`), also includes the base action (`update`)
 */
export function mergeActions(actionsFromAllRoles: string[][]): string[] {
	const seen = new Set<string>();
	const result: string[] = [];

	for (const actions of actionsFromAllRoles) {
		if (!actions) continue;
		for (const action of actions) {
			if (seen.has(action)) continue;
			seen.add(action);
			result.push(action);

			// If action has `:own` suffix, also add the base action
			const colonIdx = action.indexOf(":");
			if (colonIdx > -1) {
				const base = action.slice(0, colonIdx);
				if (!seen.has(base)) {
					seen.add(base);
					result.push(base);
				}
			}
		}
	}

	return result;
}

/**
 * Merges snippet arrays from all roles, applying denial logic.
 * - Union all snippets
 * - If `!X` exists, remove `X` from result
 * - If `!X.*` exists, remove `X` and `X.*` from result
 * - Denial wins over grant
 */
export function mergeSnippets(snippetsFromAllRoles: string[][]): string[] {
	// Union all snippets
	const snippets = new Set<string>();
	for (const snippetsArr of snippetsFromAllRoles) {
		if (!snippetsArr) continue;
		for (const s of snippetsArr) {
			snippets.add(s);
		}
	}

	// Collect denials
	const exactDenials = new Set<string>();
	const wildcardDenials = new Set<string>();

	for (const s of snippets) {
		if (s.startsWith("!")) {
			const target = s.slice(1);
			if (target.endsWith(".*")) {
				wildcardDenials.add(target.slice(0, -2));
			} else {
				exactDenials.add(target);
			}
		}
	}

	// Apply denials: denial wins over grant
	const result: string[] = [];
	for (const s of snippets) {
		if (s.startsWith("!")) continue; // don't include denials in result

		if (exactDenials.has(s)) continue; // denied by !X
		if (wildcardDenials.has(s)) continue; // denied by !X.* (X was exact-granted, not wildcard)

		// Check if this wildcard snippet is denied by !X.*
		const isWildcard = s.endsWith(".*");
		if (isWildcard) {
			const base = s.slice(0, -2);
			if (wildcardDenials.has(base)) continue;
		}

		result.push(s);
	}

	return result;
}
