/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const OPCOESSTFCTEMPLATE_FIELD_LABELS = {
	createdAt: "Criado em",
	createdBy: "Criado por",
	createdById: "createdById",
	f_canais: "Canais",
	f_fk_opcoes_stfc_template: "f_fk_opcoes_stfc_template",
	f_franquia: "Franquia de Minutos",
	f_nome_do_plano: "Nome do Plano",
	f_portabilidade: "Portabilidade",
	f_terminais: "Terminais",
	id: "ID",
	updatedAt: "Última atualização em",
	updatedBy: "Última atualização por",
	updatedById: "updatedById",
} as const;

export const OPCOESSTFCTEMPLATE_PORTABILIDADE_LABELS = {
	0: "NÃO",
	1: "SIM",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const opcoes_stfc_templatePortabilidadeSchema = z.enum(["0", "1"], {
	error: () => ({ message: "portabilidade: valores válidos são [NÃO, SIM]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type OpcoesStfcTemplatePortabilidade = z.infer<
	typeof opcoes_stfc_templatePortabilidadeSchema
>;
