import { type ReactNode, useCallback } from "react";
import { Button } from "#/components/ui/button";
import type { MinimumLoadingState } from "#/hooks/use-minimum-loading";
import { useMinimumLoading } from "#/hooks/use-minimum-loading";
import { cn } from "#/lib/utils";
import { getStateClasses, renderStateIcon } from "./async-button-styles";

// ── Variant / size types (mirrors shadcn Button) ──────────────────────

type AsyncButtonVariant =
	| "default"
	| "outline"
	| "secondary"
	| "ghost"
	| "destructive"
	| "link";

type AsyncButtonSize =
	| "default"
	| "xs"
	| "sm"
	| "lg"
	| "icon"
	| "icon-xs"
	| "icon-sm"
	| "icon-lg";

// ── Props ──────────────────────────────────────────────────────────────

export interface AsyncButtonProps<T = unknown> {
	/** The async action to execute on click */
	action: () => Promise<T>;
	/** Button label */
	children?: ReactNode;
	/** Callback when the action succeeds */
	onSuccess?: (result: T) => void;
	/** Callback when the action fails */
	onError?: (error: unknown) => void;
	/** Base button variant when idle */
	variant?: AsyncButtonVariant;
	/** Button size */
	size?: AsyncButtonSize;
	/** Minimum loading duration in ms (default: 400) */
	minLoadingMs?: number;
	/** Success/error settle duration in ms (default: same as minLoadingMs) */
	settleMs?: number;
	/** Additional class names */
	className?: string;
	/** Disabled state */
	disabled?: boolean;
}

// ── Component ──────────────────────────────────────────────────────────

export function AsyncButton<T = unknown>({
	action,
	children,
	onSuccess,
	onError,
	variant,
	size = "default",
	minLoadingMs,
	settleMs,
	className,
	disabled,
}: AsyncButtonProps<T>) {
	const { state, run } = useMinimumLoading(action, minLoadingMs, settleMs);

	const handleClick = useCallback(() => {
		void run()
			.then((result) => {
				onSuccess?.(result as T);
			})
			.catch((error) => {
				onError?.(error);
			});
	}, [onError, onSuccess, run]);

	// ── Derived state ─────────────────────────────────────────────────

	const isLoading = state === "loading";
	const resolvedVariant = resolveVariant(variant, state);
	const isDisabled = disabled || isLoading;

	// ── Render ────────────────────────────────────────────────────────

	return (
		<Button
			variant={resolvedVariant}
			size={size}
			onClick={handleClick}
			disabled={isDisabled}
			aria-busy={isLoading}
			className={cn(getStateClasses(state), className)}
		>
			{renderStateIcon(state)}
			{children}
		</Button>
	);
}

// ── Helpers ────────────────────────────────────────────────────────────

const STATE_VARIANT_MAP: Record<string, AsyncButtonVariant> = {
	loading: "secondary",
	success: "outline",
	error: "outline",
};

function resolveVariant(
	userVariant: AsyncButtonVariant | undefined,
	state: MinimumLoadingState,
): AsyncButtonVariant {
	if (state === "idle") return userVariant ?? "default";
	return STATE_VARIANT_MAP[state] ?? userVariant ?? "default";
}
