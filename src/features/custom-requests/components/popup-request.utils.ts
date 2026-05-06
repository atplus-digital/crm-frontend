import { extractNocoBaseError } from "#/lib/api-errors";
import {
	CustomRequestNetworkError,
	CustomRequestValidationError,
	mapZodErrorToPortuguese,
} from "../errors";
import type { ErrorVisualizationData } from "./popup-request.types";

export function safeStringify(value: unknown): string {
	try {
		return JSON.stringify(value, null, 2);
	} catch {
		return String(value);
	}
}

const SUCCESS_MESSAGE_FALLBACK = "Requisição executada com sucesso.";

function getObjectMessage(data: unknown): string | null {
	if (!data || typeof data !== "object") {
		return null;
	}

	if ("message" in data && typeof data.message === "string") {
		return data.message;
	}

	if ("msg" in data && typeof data.msg === "string") {
		return data.msg;
	}

	return null;
}

export function getSuccessToastMessage(result: unknown): string {
	const fromRoot = getObjectMessage(result);
	if (fromRoot) {
		return fromRoot;
	}

	if (
		result &&
		typeof result === "object" &&
		"data" in result &&
		typeof result.data !== "undefined"
	) {
		const fromNestedData = getObjectMessage(result.data);
		if (fromNestedData) {
			return fromNestedData;
		}
	}

	return SUCCESS_MESSAGE_FALLBACK;
}

export function buildErrorVisualizationData(
	error: unknown,
): ErrorVisualizationData {
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
