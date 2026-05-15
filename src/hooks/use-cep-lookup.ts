import { useCallback, useRef, useState } from "react";

// ============================================================================
// Types
// ============================================================================

interface CepResult {
	cep: string;
	street?: string;
	neighborhood?: string;
	city?: string;
	state?: string;
}

export interface UseCepLookupReturn {
	isLoading: boolean;
	message: string | null;
	result: CepResult | null;
	lookupCep: (rawCep: string) => void;
	clearMessage: () => void;
}

// ============================================================================
// Hook
// ============================================================================

export function useCepLookup(): UseCepLookupReturn {
	const [isLoading, setIsLoading] = useState(false);
	const [message, setMessage] = useState<string | null>(null);
	const [result, setResult] = useState<CepResult | null>(null);
	const abortRef = useRef<AbortController | null>(null);

	const clearMessage = useCallback(() => {
		setMessage(null);
	}, []);

	const lookupCep = useCallback((rawCep: string) => {
		const normalizedCep = rawCep.replace(/\D/g, "");
		if (normalizedCep.length !== 8) {
			setMessage("Digite um CEP válido com 8 números.");
			return;
		}

		abortRef.current?.abort();
		const controller = new AbortController();
		abortRef.current = controller;

		setIsLoading(true);
		setMessage(null);

		fetch(`https://brasilapi.com.br/api/cep/v1/${normalizedCep}`, {
			signal: controller.signal,
		})
			.then(async (response) => {
				if (!response.ok) {
					setMessage("CEP não encontrado.");
					return;
				}

				const data = (await response.json()) as {
					city?: string;
					neighborhood?: string;
					state?: string;
					street?: string;
				};

				setResult({
					cep: normalizedCep,
					street: data.street,
					neighborhood: data.neighborhood,
					city: data.city,
					state: data.state?.toUpperCase(),
				});
				setMessage(null);
			})
			.catch((error: unknown) => {
				if (error instanceof DOMException && error.name === "AbortError") {
					return;
				}
				setMessage("Não foi possível consultar o CEP no momento.");
			})
			.finally(() => {
				setIsLoading(false);
			});
	}, []);

	return { isLoading, message, result, lookupCep, clearMessage };
}
