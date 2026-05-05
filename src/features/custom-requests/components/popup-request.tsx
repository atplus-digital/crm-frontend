import { Loader2Icon } from "lucide-react";
import { useState } from "react";
import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { Badge } from "#/components/ui/badge";
import { Button } from "#/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
} from "#/components/ui/dialog";
import { customRequestsRegistry } from "#/generated/custom-requests/generated-registry";
import { extractNocoBaseError } from "#/lib/api-errors";
import {
	type CustomRequestErrorCode,
	CustomRequestNetworkError,
	CustomRequestValidationError,
	mapZodErrorToPortuguese,
} from "../errors";
import type {
	CustomRequestIdentifier,
	CustomRequestPayload,
} from "../hooks/use-custom-requests";
import { useCustomRequest } from "../hooks/use-custom-requests";

export interface PopupRequestProps<I extends CustomRequestIdentifier> {
	/** Custom request identifier (key, name, or fully qualified name) */
	identifier: I;
	/** Button label */
	children: React.ReactNode;
	/** Initial payload to send with the request */
	payload: CustomRequestPayload<I>;
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
}

type DialogMode = "confirm" | "result";

interface ErrorVisualizationData {
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

function safeStringify(value: unknown): string {
	try {
		return JSON.stringify(value, null, 2);
	} catch {
		return String(value);
	}
}

function buildErrorVisualizationData(error: unknown): ErrorVisualizationData {
	const fallback = "Ocorreu um erro ao executar a requisição.";
	const data: ErrorVisualizationData = {
		message: extractNocoBaseError(error, fallback),
	};

	if (error instanceof CustomRequestNetworkError) {
		data.status = error.status;
		data.code = error.code;
	}

	if (error instanceof CustomRequestValidationError) {
		data.code = error.code;
		data.message = "A requisição contém dados inválidos.";
		data.validationIssues = error.zodError.issues.map((issue) => ({
			path: issue.path.join(".") || "payload",
			message: mapZodErrorToPortuguese(issue),
			code: issue.code,
		}));
		data.details = safeStringify(
			error.zodError.issues.map((issue) => ({
				path: issue.path,
				code: issue.code,
				message: issue.message,
			})),
		);
	}

	if (error instanceof Error && !data.details) {
		data.details = error.message;
	}

	if (!data.details && typeof error === "object" && error !== null) {
		data.details = safeStringify(error);
	}

	return data;
}

export function PopupRequest<I extends CustomRequestIdentifier>({
	identifier,
	children,
	payload,
	onSuccess,
	title,
	confirm = true,
	confirmMessage,
	variant = "default",
	size = "default",
}: PopupRequestProps<I>) {
	const [isOpen, setIsOpen] = useState(false);
	const [dialogMode, setDialogMode] = useState<DialogMode>("confirm");

	const mutation = useCustomRequest(identifier);
	const isLoading = mutation.isPending;

	// Find registry entry by any identifier (key, name, or qualified name)
	const registryEntry = Object.values(customRequestsRegistry).find(
		(entry) =>
			entry.name === identifier ||
			entry.key === identifier ||
			`${entry.dataSourceKey}.${entry.collection}.${entry.name}` ===
				identifier ||
			`${entry.collection}.${entry.name}` === identifier,
	);
	const dialogTitle = title ?? registryEntry?.name ?? identifier;

	const handleOpenChange = (open: boolean) => {
		if (open) {
			setIsOpen(true);
			mutation.reset();
			setDialogMode(confirm ? "confirm" : "result");
			if (!confirm) {
				handleExecute();
			}
		} else {
			setIsOpen(false);
			setDialogMode("confirm");
		}
	};

	const handleExecute = () => {
		setDialogMode("result");
		mutation.mutate(
			{
				payload: (payload ?? {}) as CustomRequestPayload<I>,
			},
			{
				onSuccess: (result) => {
					onSuccess?.(result);
				},
				onError: (e) => {
					console.error("Error executing custom request:", e);
				},
			},
		);
	};

	const renderContent = () => {
		if (isLoading) {
			return (
				<div className="flex items-center justify-center py-8">
					<Loader2Icon className="h-8 w-8 animate-spin text-muted-foreground" />
				</div>
			);
		}

		if (mutation.isError && mutation.error) {
			const errorData = buildErrorVisualizationData(mutation.error);
			const validationIssues = errorData.validationIssues ?? [];
			const hasValidationIssues = validationIssues.length > 0;

			return (
				<InlineErrorAlert className="space-y-3">
					<div className="space-y-1">
						<p className="font-medium">Falha ao executar a requisição</p>
						<p>{errorData.message}</p>
					</div>

					{(errorData.code || errorData.status) && (
						<div className="flex flex-wrap gap-2">
							{errorData.code ? (
								<Badge variant="destructive">Erro: {errorData.code}</Badge>
							) : null}
							{typeof errorData.status === "number" ? (
								<Badge variant="outline">HTTP {errorData.status}</Badge>
							) : null}
						</div>
					)}

					{hasValidationIssues ? (
						<div className="space-y-2">
							<p className="text-xs font-semibold tracking-wide uppercase">
								Campos com erro
							</p>
							<div className="max-h-52 space-y-2 overflow-auto">
								{validationIssues.map((issue) => (
									<div
										key={`${issue.path}-${issue.code}-${issue.message}`}
										className="rounded-md border border-destructive/35 bg-destructive/5 p-2"
									>
										<div className="mb-1 flex items-center gap-2">
											<Badge
												variant="outline"
												className="font-mono text-[11px]"
											>
												{issue.path}
											</Badge>
											<span className="text-[11px] opacity-80">
												{issue.code}
											</span>
										</div>
										<p className="text-xs leading-relaxed">{issue.message}</p>
									</div>
								))}
							</div>
						</div>
					) : null}

					{errorData.details ? (
						<details className="rounded-md border border-destructive/30 bg-destructive/5 p-2">
							<summary className="cursor-pointer text-xs font-medium">
								Ver detalhes técnicos
							</summary>
							<pre className="mt-2 max-h-48 overflow-auto text-xs whitespace-pre-wrap wrap-break-word">
								{errorData.details}
							</pre>
						</details>
					) : null}
				</InlineErrorAlert>
			);
		}

		if (mutation.isSuccess && mutation.data != null) {
			return (
				<div className="space-y-2">
					<p className="text-sm text-muted-foreground">Resposta:</p>
					<pre className="max-h-64 overflow-auto rounded-lg bg-muted p-3 text-xs">
						{JSON.stringify(mutation.data, null, 2)}
					</pre>
				</div>
			);
		}

		if (dialogMode === "result") {
			return (
				<p className="text-sm text-muted-foreground">
					Preparando execução da requisição...
				</p>
			);
		}

		return (
			<p className="text-sm text-muted-foreground">
				{confirmMessage ??
					"Deseja realmente executar esta requisição?\nEsta ação não pode ser desfeita."}
			</p>
		);
	};

	const renderFooter = () => {
		if (dialogMode === "confirm") {
			return (
				<DialogFooter showCloseButton={false}>
					<Button variant="outline" onClick={() => handleOpenChange(false)}>
						Cancelar
					</Button>
					<Button onClick={handleExecute} disabled={isLoading}>
						Confirmar
					</Button>
				</DialogFooter>
			);
		}

		if (mutation.isError) {
			return (
				<DialogFooter showCloseButton={false}>
					<Button variant="outline" onClick={() => handleOpenChange(false)}>
						Cancelar
					</Button>
					<Button onClick={handleExecute} disabled={isLoading}>
						Tentar novamente
					</Button>
				</DialogFooter>
			);
		}

		return (
			<DialogFooter showCloseButton={false}>
				<DialogClose asChild>
					<Button type="button">Fechar</Button>
				</DialogClose>
			</DialogFooter>
		);
	};

	return (
		<>
			<Button
				variant={variant}
				size={size}
				onClick={() => handleOpenChange(true)}
			>
				{children}
			</Button>

			<Dialog open={isOpen} onOpenChange={handleOpenChange}>
				<DialogContent className="sm:max-w-md">
					<DialogHeader>
						<DialogTitle>{dialogTitle}</DialogTitle>
						<DialogDescription>Requisição: {identifier}</DialogDescription>
					</DialogHeader>
					<div className="min-h-16">{renderContent()}</div>
					{renderFooter()}
				</DialogContent>
			</Dialog>
		</>
	);
}
