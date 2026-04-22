export type StateUpdater<TState> = TState | ((previous: TState) => TState);

export function resolveStateUpdater<TState>(
	updater: StateUpdater<TState>,
	previous: TState,
) {
	return typeof updater === "function"
		? (updater as (previous: TState) => TState)(previous)
		: updater;
}
