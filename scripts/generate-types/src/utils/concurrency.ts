/**
 * Mapeia items em paralelo respeitando um limite de concorrência.
 * Preserva a ordem dos resultados em relação ao input.
 *
 * Cada worker consome o próximo índice de um cursor compartilhado.
 * Em JavaScript single-thread o `cursor++` é atômico entre `await`s,
 * então cada worker recebe um índice distinto sem necessidade de locks.
 */
export async function mapWithConcurrency<TItem, TResult>(
	items: readonly TItem[],
	concurrency: number,
	mapper: (item: TItem, index: number) => Promise<TResult>,
): Promise<TResult[]> {
	if (items.length === 0) {
		return [];
	}

	const results = new Array<TResult>(items.length);
	const workerCount = Math.max(1, Math.min(concurrency, items.length));
	let cursor = 0;

	async function runWorker(): Promise<void> {
		while (true) {
			const currentIndex = cursor++;
			if (currentIndex >= items.length) {
				return;
			}

			results[currentIndex] = await mapper(items[currentIndex], currentIndex);
		}
	}

	const workers = Array.from({ length: workerCount }, runWorker);
	await Promise.all(workers);

	return results;
}
