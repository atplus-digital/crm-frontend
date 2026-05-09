/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const WFLPARAMETROOSS_ABREDUPLICADAARECEBER_LABELS = {
	S: "S",
	N: "N",
} as const;

export const WFLPARAMETROOSS_ABREDUPLICADACLIENTE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const WFLPARAMETROOSS_ABREDUPLICADACONTRATO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const WFLPARAMETROOSS_CONSIDERACONTRATOINATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const WFLPARAMETROOSS_CONSIDERACONTRATONEGATIVADO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const WFLPARAMETROOSS_CONSIDERAFINALIZADA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const WFLPARAMETROOSS_PRIORIDADE_LABELS = {
	B: "B",
	N: "N",
	A: "A",
	C: "C",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const wfl_parametro_ossAbreDuplicadaAreceberSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "abre_duplicada_areceber: valores válidos são [S, N]",
	}),
});

export const wfl_parametro_ossAbreDuplicadaClienteSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "abre_duplicada_cliente: valores válidos são [S, N]",
	}),
});

export const wfl_parametro_ossAbreDuplicadaContratoSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "abre_duplicada_contrato: valores válidos são [S, N]",
	}),
});

export const wfl_parametro_ossConsideraContratoInativoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "considera_contrato_inativo: valores válidos são [S, N]",
		}),
	},
);

export const wfl_parametro_ossConsideraContratoNegativadoSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "considera_contrato_negativado: valores válidos são [S, N]",
		}),
	},
);

export const wfl_parametro_ossConsideraFinalizadaSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "considera_finalizada: valores válidos são [S, N]",
	}),
});

export const wfl_parametro_ossPrioridadeSchema = z.enum(["B", "N", "A", "C"], {
	error: () => ({ message: "prioridade: valores válidos são [B, N, A, C]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type WflParametroOssAbreDuplicadaAreceber = z.infer<
	typeof wfl_parametro_ossAbreDuplicadaAreceberSchema
>;

export type WflParametroOssAbreDuplicadaCliente = z.infer<
	typeof wfl_parametro_ossAbreDuplicadaClienteSchema
>;

export type WflParametroOssAbreDuplicadaContrato = z.infer<
	typeof wfl_parametro_ossAbreDuplicadaContratoSchema
>;

export type WflParametroOssConsideraContratoInativo = z.infer<
	typeof wfl_parametro_ossConsideraContratoInativoSchema
>;

export type WflParametroOssConsideraContratoNegativado = z.infer<
	typeof wfl_parametro_ossConsideraContratoNegativadoSchema
>;

export type WflParametroOssConsideraFinalizada = z.infer<
	typeof wfl_parametro_ossConsideraFinalizadaSchema
>;

export type WflParametroOssPrioridade = z.infer<
	typeof wfl_parametro_ossPrioridadeSchema
>;
