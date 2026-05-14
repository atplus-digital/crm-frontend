/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const CHAVEASSINATURADIGITALDOCUMENTOS_FIELD_LABELS = {
	ano: "ano",
	id: "id",
	id_chave_assinatura_digital: "id_chave_assinatura_digital",
	mes: "mes",
	qtd_documentos: "qtd_documentos",
	status_notificacao: "status_notificacao",
} as const;

export const CHAVEASSINATURADIGITALDOCUMENTOS_STATUSNOTIFICACAO_LABELS = {
	P: "P",
	A: "A",
	E: "E",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const chave_assinatura_digital_documentosStatusNotificacaoSchema =
	z.enum(["P", "A", "E"], {
		error: () => ({
			message: "status_notificacao: valores válidos são [P, A, E]",
		}),
	});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ChaveAssinaturaDigitalDocumentosStatusNotificacao = z.infer<
	typeof chave_assinatura_digital_documentosStatusNotificacaoSchema
>;
