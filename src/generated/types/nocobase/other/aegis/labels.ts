/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const AEGIS_FIELD_LABELS = {
	createdAt: "Criado em",
	createdBy: "Criado por",
	createdById: "createdById",
	f_idlogin: "ID Login",
	f_notas: "Notas",
	f_notas_cliente: "Notas Cliente",
	f_statusdesbloqueioconfiaca: "Status Desbloqueio de Confiança",
	f_statuslogin: "Status Login",
	f_statusmac: "Status MAC",
	id: "ID",
	updatedAt: "Última atualização em",
	updatedBy: "Última atualização por",
	updatedById: "updatedById",
} as const;

export const AEGIS_STATUSDESBLOQUEIOCONFIACA_LABELS = {
	success: "Desbloqueio de Confiança Efetuado por 2 Dias",
	error: "Erro ao Realizar Desbloqueio de Confiança",
} as const;

export const AEGIS_STATUSLOGIN_LABELS = {
	success: "Sucesso ao Desconectar Login",
	error: "Erro ao Desconectar Login",
} as const;

export const AEGIS_STATUSMAC_LABELS = {
	success: "Sucesso ao Limpar MAC",
	error: "Erro ao Limpar MAC",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const aegisStatusdesbloqueioconfiacaSchema = z.enum(
	["success", "error"],
	{
		error: () => ({
			message:
				"statusdesbloqueioconfiaca: valores válidos são [Desbloqueio de Confiança Efetuado por 2 Dias, Erro ao Realizar Desbloqueio de Confiança]",
		}),
	},
);

export const aegisStatusloginSchema = z.enum(["success", "error"], {
	error: () => ({
		message:
			"statuslogin: valores válidos são [Sucesso ao Desconectar Login, Erro ao Desconectar Login]",
	}),
});

export const aegisStatusmacSchema = z.enum(["success", "error"], {
	error: () => ({
		message:
			"statusmac: valores válidos são [Sucesso ao Limpar MAC, Erro ao Limpar MAC]",
	}),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type AegisStatusdesbloqueioconfiaca = z.infer<
	typeof aegisStatusdesbloqueioconfiacaSchema
>;

export type AegisStatuslogin = z.infer<typeof aegisStatusloginSchema>;

export type AegisStatusmac = z.infer<typeof aegisStatusmacSchema>;
