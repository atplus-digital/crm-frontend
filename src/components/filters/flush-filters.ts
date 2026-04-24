/**
 * Flushes all pending debounced filter input changes within a container.
 *
 * Call this before applying filters to ensure the parent has the latest
 * values from all debounced FilterInputField components.
 */
export function flushFilters(container: HTMLElement | null) {
	if (!container) return;
	const inputs = container.querySelectorAll<HTMLInputElement>(
		"input[__filterFlush]",
	);
	for (const input of inputs) {
		const flush = (input as HTMLInputElement & { __filterFlush?: () => void })
			.__filterFlush;
		if (typeof flush === "function") {
			flush();
		}
	}
}
