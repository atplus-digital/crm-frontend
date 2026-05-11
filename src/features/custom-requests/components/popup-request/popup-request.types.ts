import type { UseMutationResult } from "@tanstack/react-query";
import type { CustomRequestErrorCode } from "#/features/custom-requests/errors";
import type {
	CustomRequestIdentifier,
	CustomRequestPayload,
} from "#/features/custom-requests/hooks/use-custom-requests";

export type DialogMode = "confirm" | "result";

export type PopupMutationState = Pick<
	UseMutationResult<
		unknown,
		unknown,
		{ payload: unknown; signal?: AbortSignal }
	>,
	"isError" | "isSuccess" | "isPending" | "error" | "data"
>;

/**
 * Redirect target after successful request.
 * - `string`: Static URL to redirect to
 * - `function`: Receives the response payload and returns the URL
 */
export type RedirectTo<T = unknown> = string | ((payload: T) => string);

export interface PopupRequestProps<I extends CustomRequestIdentifier> {
	/** Custom request identifier (key, name, or fully qualified name) */
	identifier: I;
	/** Button label */
	children: React.ReactNode;
	/** Initial payload to send with the request */
	payload?: CustomRequestPayload<I>;
	/** Callback when request succeeds */
	onSuccess?: (data: unknown) => void;
	/** Dialog title override */
	title?: string;
	/** Whether to show confirmation step before executing (default: true) */
	confirm?: boolean;
	/** Custom confirmation message */
	confirmMessage?: string;
	/** Button variant */
	variant?:
		| "default"
		| "outline"
		| "secondary"
		| "ghost"
		| "destructive"
		| "link";
	/** Button size */
	size?:
		| "default"
		| "xs"
		| "sm"
		| "lg"
		| "icon"
		| "icon-xs"
		| "icon-sm"
		| "icon-lg";
	/** Auto close dialog on success (default: false) */
	autoCloseOnSuccess?: boolean;
	/** Redirect to URL after success (string or function receiving payload) */
	redirectTo?: RedirectTo;
}

export interface ErrorVisualizationData {
	message: string;
	status?: number;
	code?: CustomRequestErrorCode;
	details?: string;
	validationIssues?: Array<{
		path: string;
		message: string;
		code: string;
	}>;
}
