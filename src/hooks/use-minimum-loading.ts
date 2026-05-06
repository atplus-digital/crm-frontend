import { useCallback, useEffect, useRef, useState } from "react";

type MaybePromise<T> = T | Promise<T>;
type TimeoutHandle = ReturnType<typeof setTimeout>;

export type MinimumLoadingState = "idle" | "loading" | "success" | "error";

export function useMinimumLoading<TArgs extends unknown[], TResult>(
	task: (...args: TArgs) => MaybePromise<TResult>,
	minDurationMs = 400,
	settleDurationMs = minDurationMs * 2,
) {
	const [state, setState] = useState<MinimumLoadingState>("idle");
	const pendingCountRef = useRef(0);
	const isMountedRef = useRef(true);
	const runSequenceRef = useRef(0);
	const idleTimerRef = useRef<TimeoutHandle | null>(null);

	useEffect(() => {
		isMountedRef.current = true;
		return () => {
			isMountedRef.current = false;
			if (idleTimerRef.current) {
				clearTimeout(idleTimerRef.current);
			}
		};
	}, []);

	const run = useCallback(
		async (...args: TArgs) => {
			const sequence = runSequenceRef.current + 1;
			runSequenceRef.current = sequence;

			if (idleTimerRef.current) {
				clearTimeout(idleTimerRef.current);
				idleTimerRef.current = null;
			}

			pendingCountRef.current += 1;
			if (isMountedRef.current) {
				setState("loading");
			}

			const minDuration = Math.max(0, minDurationMs);
			const settleDuration = Math.max(0, settleDurationMs);
			const startedAt = Date.now();
			let finalState: Exclude<MinimumLoadingState, "idle" | "loading"> =
				"success";

			try {
				return await task(...args);
			} catch (error) {
				finalState = "error";
				throw error;
			} finally {
				const elapsed = Date.now() - startedAt;
				const remaining = minDuration - elapsed;

				if (remaining > 0) {
					await new Promise<void>((resolve) => {
						setTimeout(resolve, remaining);
					});
				}

				pendingCountRef.current = Math.max(0, pendingCountRef.current - 1);

				const shouldSettleState =
					isMountedRef.current &&
					pendingCountRef.current === 0 &&
					runSequenceRef.current === sequence;

				if (shouldSettleState) {
					setState(finalState);

					idleTimerRef.current = setTimeout(() => {
						if (
							isMountedRef.current &&
							pendingCountRef.current === 0 &&
							runSequenceRef.current === sequence
						) {
							setState("idle");
						}
					}, settleDuration);
				}
			}
		},
		[minDurationMs, settleDurationMs, task],
	);

	return {
		isLoading: state === "loading",
		state,
		run,
	};
}
