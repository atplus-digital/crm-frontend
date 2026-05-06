export function extractNocoBaseError(
	err: unknown,
	fallback = "Ocorreu um erro inesperado. Tente novamente.",
): string {
	const errData = (
		err as { response?: { data?: { errors?: Array<{ message?: string }> } } }
	)?.response?.data;
	return errData?.errors?.[0]?.message ?? fallback;
}

export function getErrorMessage(
	error: unknown,
	fallback = "Ocorreu um erro inesperado.",
): string {
	if (error instanceof Error) return error.message;
	if (typeof error === "string") return error;
	if (
		error &&
		typeof error === "object" &&
		"message" in error &&
		typeof (error as Record<string, unknown>).message === "string"
	) {
		return (error as Record<string, unknown>).message as string;
	}
	return fallback;
}
