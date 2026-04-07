export async function mapWithConcurrency<T, TResult>(
	items: T[],
	concurrency: number,
	mapper: (item: T, index: number) => Promise<TResult>,
): Promise<TResult[]> {
	if (items.length === 0) {
		return [];
	}

	const results = new Array<TResult>(items.length);
	let cursor = 0;

	const workers = Array.from(
		{ length: Math.max(1, Math.min(concurrency, items.length)) },
		async () => {
			while (true) {
				const currentIndex = cursor++;
				if (currentIndex >= items.length) {
					return;
				}

				results[currentIndex] = await mapper(items[currentIndex], currentIndex);
			}
		},
	);

	await Promise.all(workers);
	return results;
}
