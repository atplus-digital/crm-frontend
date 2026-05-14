/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const SUSPENSAOCONTRATO_FIELD_LABELS = {
	createdAt: "Criado em",
	createdBy: "Criado por",
	createdById: "createdById",
	f_comentarios: "Comentários",
	f_contratos: "Contratos",
	f_cpf: "CPF",
	f_dias_suspensao: "Dias de Suspensão",
	f_email: "E-mail",
	f_final_suspensao: "Final da Suspensão",
	f_fk_pessoas: "f_fk_pessoas",
	f_fk_pessoas_pj: "f_fk_pessoas_pj",
	f_fk_responsavel: "f_fk_responsavel",
	f_id_contrato: "ID Contrato",
	f_inicio_suspensao: "Início da Suspensão",
	f_link_assinatura: "Link para Assinatura",
	f_pessoas: "Pessoas (PF)",
	f_pessoas_pj: "Pessoas (PJ)",
	f_responsavel: "Responsável",
	f_status: "Status",
	f_telefone: "Telefone",
	f_teste: "Ordenar",
	f_titulo: "Título",
	id: "ID",
	updatedAt: "Última atualização em",
	updatedBy: "Última atualização por",
	updatedById: "updatedById",
} as const;

export const SUSPENSAOCONTRATO_STATUS_LABELS = {
	0: "Nova Solicitação",
	1: "Aguardando Assinatura",
	2: "Assinatura Concluída",
	3: "Concluído",
	4: "Cancelado",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const suspensao_contratoStatusSchema = z.enum(
	["0", "1", "2", "3", "4"],
	{
		error: () => ({
			message:
				"status: valores válidos são [Nova Solicitação, Aguardando Assinatura, Assinatura Concluída, Concluído, Cancelado]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type SuspensaoContratoStatus = z.infer<
	typeof suspensao_contratoStatusSchema
>;
