/**
 * Mapeamento de valores de boolean/flags para labels.
 */
export const BOOLEAN_FLAG_LABELS: Record<string, string> = {
	S: "Sim",
	N: "Não",
	Y: "Yes",
	"1": "Ativo",
	"0": "Inativo",
	true: "Sim",
	false: "Não",
	TRUE: "Sim",
	FALSE: "Não",
	yes: "Sim",
	no: "Não",
	YES: "Sim",
	NO: "Não",
	A: "Ativo",
	I: "Inativo",
	ATIVO: "Ativo",
	INATIVO: "Inativo",
	ativo: "Ativo",
	inativo: "Inativo",
};

/**
 * Mapeamento de siglas de estados brasileiros para nomes completos.
 */
export const ESTADOS_BRASIL: Record<string, string> = {
	AC: "Acre",
	AL: "Alagoas",
	AP: "Amapá",
	AM: "Amazonas",
	BA: "Bahia",
	CE: "Ceará",
	DF: "Distrito Federal",
	ES: "Espírito Santo",
	GO: "Goiás",
	MA: "Maranhão",
	MT: "Mato Grosso",
	MS: "Mato Grosso do Sul",
	MG: "Minas Gerais",
	PA: "Pará",
	PB: "Paraíba",
	PR: "Paraná",
	PE: "Pernambuco",
	PI: "Piauí",
	RJ: "Rio de Janeiro",
	RN: "Rio Grande do Norte",
	RS: "Rio Grande do Sul",
	RO: "Rondônia",
	RR: "Roraima",
	SC: "Santa Catarina",
	SP: "São Paulo",
	SE: "Sergipe",
	TO: "Tocantins",
};

/**
 * Heurística para inferir label de um valor enum.
 * Tenta encontrar nomes legíveis baseados em padrões comuns.
 */
export function inferLabel(value: string, fieldName: string): string {
	const normalizedValue = value.trim();

	// Verifica mapeamento de boolean/flags
	if (normalizedValue in BOOLEAN_FLAG_LABELS) {
		return BOOLEAN_FLAG_LABELS[normalizedValue];
	}

	// Verifica se é estado brasileiro (para campos como UF, estado, etc.)
	if (/^(uf|estado|sigla|uf_)/i.test(fieldName)) {
		const estado = ESTADOS_BRASIL[normalizedValue.toUpperCase()];
		if (estado) {
			return estado;
		}
	}

	// Se é código numérico simples (1-2 dígitos), mantém como está
	if (/^\d{1,2}$/.test(normalizedValue)) {
		return `Código ${normalizedValue}`;
	}

	// Tenta capitalizar e formatar (ex: "PENDENTE" -> "Pendente")
	const words = normalizedValue
		.split(/[_\s-]+/)
		.filter((w) => w.length > 0)
		.map((word) => {
			// Se for sigla (2-4 letras maiúsculas), mantém
			if (/^[A-Z]{2,4}$/.test(word)) {
				return word;
			}
			// Senão, capitaliza primeira letra
			return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
		});

	if (words.length > 0) {
		return words.join(" ");
	}

	// Fallback: retorna o próprio valor
	return normalizedValue;
}
