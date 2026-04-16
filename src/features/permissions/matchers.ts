function isWildcard(value: string): boolean {
	return value.endsWith(".*");
}

function wildcardBase(value: string): string {
	return value.slice(0, -2);
}

function snippetGrantMatchesRequired(grant: string, required: string): boolean {
	if (grant === required) return true;
	if (grant.startsWith(`${required}.`)) return true;

	if (isWildcard(grant)) {
		const grantBase = wildcardBase(grant);
		return required === grantBase || required.startsWith(`${grantBase}.`);
	}

	if (isWildcard(required)) {
		const requiredBase = wildcardBase(required);
		return grant === requiredBase || grant.startsWith(`${requiredBase}.`);
	}

	return false;
}

export function hasGrantedSnippet(
	effectiveSnippets: string[],
	requiredSnippet: string,
): boolean {
	if (!requiredSnippet || requiredSnippet.startsWith("!")) return false;

	for (const grant of effectiveSnippets) {
		if (!grant || grant.startsWith("!")) continue;
		if (snippetGrantMatchesRequired(grant, requiredSnippet)) return true;
	}

	return false;
}

export function hasGrantedAction(
	effectiveActions: string[],
	requiredAction: string,
): boolean {
	if (!requiredAction || requiredAction.startsWith("!")) return false;

	if (effectiveActions.includes(requiredAction)) return true;

	const requiredBase = requiredAction.split(":")[0];
	if (effectiveActions.includes(requiredBase)) return true;

	if (!requiredAction.includes(":")) {
		const ownPrefix = `${requiredAction}:`;
		if (effectiveActions.some((action) => action.startsWith(ownPrefix))) {
			return true;
		}
	}

	return false;
}
