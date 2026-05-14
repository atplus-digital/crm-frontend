/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const ACESSOS_FIELD_LABELS = {
	createdAt: "Criado em",
	createdBy: "Criado por",
	createdById: "createdById",
	f_equipamento: "Equipamento",
	f_fk_servicos_x_acessos: "f_fk_servicos_x_acessos",
	f_fk_site: "f_fk_site",
	f_insumos: "Insumos",
	f_interface: "Interface",
	f_site: "Site",
	f_tipo: "Tipo",
	f_x7w60fv71f9: "f_x7w60fv71f9",
	f_xzuv9d6zkhr: "Serviço",
	id: "ID",
	updatedAt: "Última atualização em",
	updatedBy: "Última atualização por",
	updatedById: "updatedById",
} as const;

export const ACESSOS_TIPO_LABELS = {
	1: "Ponta A",
	2: "Ponta B",
	3: "Entrega",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const acessosTipoSchema = z.enum(["1", "2", "3"], {
	error: () => ({
		message: "tipo: valores válidos são [Ponta A, Ponta B, Entrega]",
	}),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type AcessosTipo = z.infer<typeof acessosTipoSchema>;
