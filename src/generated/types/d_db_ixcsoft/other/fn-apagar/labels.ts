/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const FNAPAGAR_CENTROCUSTOREGRACRITERIO_LABELS = {
	CE: "CE",
	CR: "CR",
} as const;

export const FNAPAGAR_COMUNICADO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNAPAGAR_EHDESPESAVEICULO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNAPAGAR_ESTORNADO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const FNAPAGAR_LIBERADO_LABELS = {
	N: "N",
	S: "S",
} as const;

export const FNAPAGAR_STATUS_LABELS = {
	A: "A",
	F: "F",
	P: "P",
	C: "C",
} as const;

export const FNAPAGAR_STATUSAUDITORIA_LABELS = {
	A: "A",
	R: "R",
	V: "V",
	C: "C",
	N: "N",
} as const;

export const FNAPAGAR_TIPOPIX_LABELS = {
	CPF_CNPJ: "CPF_CNPJ",
	CELULAR: "CELULAR",
	EMAIL: "EMAIL",
	ALEATORIA: "ALEATORIA",
	COPIA_E_COLA: "COPIA_E_COLA",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const fn_apagarCentroCustoRegraCriterioSchema = z.enum(["CE", "CR"], {
	error: () => ({
		message: "centro_custo_regra_criterio: valores válidos são [CE, CR]",
	}),
});

export const fn_apagarComunicadoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "comunicado: valores válidos são [S, N]" }),
});

export const fn_apagarEhDespesaVeiculoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "eh_despesa_veiculo: valores válidos são [S, N]" }),
});

export const fn_apagarEstornadoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "estornado: valores válidos são [S, N]" }),
});

export const fn_apagarLiberadoSchema = z.enum(["N", "S"], {
	error: () => ({ message: "liberado: valores válidos são [N, S]" }),
});

export const fn_apagarStatusSchema = z.enum(["A", "F", "P", "C"], {
	error: () => ({ message: "status: valores válidos são [A, F, P, C]" }),
});

export const fn_apagarStatusAuditoriaSchema = z.enum(
	["A", "R", "V", "C", "N"],
	{
		error: () => ({
			message: "status_auditoria: valores válidos são [A, R, V, C, N]",
		}),
	},
);

export const fn_apagarTipoPixSchema = z.enum(
	["CPF_CNPJ", "CELULAR", "EMAIL", "ALEATORIA", "COPIA_E_COLA"],
	{
		error: () => ({
			message:
				"tipo_pix: valores válidos são [CPF_CNPJ, CELULAR, EMAIL, ALEATORIA, COPIA_E_COLA]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type FnApagarCentroCustoRegraCriterio = z.infer<
	typeof fn_apagarCentroCustoRegraCriterioSchema
>;

export type FnApagarComunicado = z.infer<typeof fn_apagarComunicadoSchema>;

export type FnApagarEhDespesaVeiculo = z.infer<
	typeof fn_apagarEhDespesaVeiculoSchema
>;

export type FnApagarEstornado = z.infer<typeof fn_apagarEstornadoSchema>;

export type FnApagarLiberado = z.infer<typeof fn_apagarLiberadoSchema>;

export type FnApagarStatus = z.infer<typeof fn_apagarStatusSchema>;

export type FnApagarStatusAuditoria = z.infer<
	typeof fn_apagarStatusAuditoriaSchema
>;

export type FnApagarTipoPix = z.infer<typeof fn_apagarTipoPixSchema>;
