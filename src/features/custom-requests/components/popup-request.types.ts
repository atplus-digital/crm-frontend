import type {
	CustomRequestIdentifier,
	CustomRequestPayload,
} from "../hooks/use-custom-requests";

export type DialogMode = "confirm" | "result";

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
	/** Delay in ms before auto closing on success (default: 1500) */
	autoCloseDelay?: number;
}

export interface ErrorVisualizationData {
	message: string;
	status?: number;
	code?: import("../errors").CustomRequestErrorCode;
	details?: string;
	validationIssues?: Array<{
		path: string;
		message: string;
		code: string;
	}>;
}
