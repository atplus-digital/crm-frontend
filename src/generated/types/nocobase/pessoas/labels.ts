/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const PESSOAS_ANALISEIXC_LABELS = {
	0: "Com Pendências",
	1: "Sem Pendências",
} as const;

export const PESSOAS_CREDITO_LABELS = {
	1: "Aprovado",
	2: "Aprovado com Atenção",
	9: "Negado",
} as const;

export const PESSOAS_SEXO_LABELS = {
	M: "MASCULINO",
	F: "FEMININO",
	MASCULINO: "MASCULINO",
	FEMININO: "FEMININO",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const pessoasAnaliseIxcSchema = z.enum(["0", "1"], {
	error: () => ({
		message:
			"analise_ixc: valores válidos são [Com Pendências, Sem Pendências]",
	}),
});

export const pessoasCreditoSchema = z.enum(["1", "2", "9"], {
	error: () => ({
		message:
			"credito: valores válidos são [Aprovado, Aprovado com Atenção, Negado]",
	}),
});

export const pessoasSexoSchema = z.enum(["M", "F", "MASCULINO", "FEMININO"], {
	error: () => ({
		message:
			"sexo: valores válidos são [MASCULINO, FEMININO, MASCULINO, FEMININO]",
	}),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type PessoasAnaliseIxc = z.infer<typeof pessoasAnaliseIxcSchema>;

export type PessoasCredito = z.infer<typeof pessoasCreditoSchema>;

export type PessoasSexo = z.infer<typeof pessoasSexoSchema>;
