export function extractNocoBaseError(
	err: unknown,
	fallback = "Ocorreu um erro inesperado. Tente novamente.",
): string {
	const errData = (
		err as { response?: { data?: { errors?: Array<{ message?: string }> } } }
	)?.response?.data;
	return errData?.errors?.[0]?.message ?? fallback;
}
