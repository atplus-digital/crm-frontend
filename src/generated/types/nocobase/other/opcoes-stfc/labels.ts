/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const OPCOESSTFC_FIELD_LABELS = {
	createdAt: "Criado em",
	createdBy: "Criado por",
	createdById: "createdById",
	f_canais: "Canais",
	f_fk_opcoes_stfc: "f_fk_opcoes_stfc",
	f_franquia: "Franquia de Minutos",
	f_nome_do_plano: "Nome do plano",
	f_portabilidade: "Portabilidade",
	f_terminais: "Terminais",
	id: "ID",
	updatedAt: "Última atualização em",
	updatedBy: "Última atualização por",
	updatedById: "updatedById",
} as const;

export const OPCOESSTFC_PORTABILIDADE_LABELS = {
	SIM: "SIM",
	NAO: "NÃO",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const opcoes_stfcPortabilidadeSchema = z.enum(["SIM", "NAO"], {
	error: () => ({ message: "portabilidade: valores válidos são [SIM, NÃO]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type OpcoesStfcPortabilidade = z.infer<
	typeof opcoes_stfcPortabilidadeSchema
>;
