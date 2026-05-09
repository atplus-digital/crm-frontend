export function getWithRestore<T>(getter: () => T, restore: () => void): T {
	try {
		return getter();
	} catch (error) {
		restore();
		throw error;
	}
}

export function assertWithRestore(
	condition: unknown,
	restore: () => void,
	errorMessage: string,
): asserts condition {
	if (condition) {
		return;
	}

	restore();
	throw new Error(errorMessage);
}
