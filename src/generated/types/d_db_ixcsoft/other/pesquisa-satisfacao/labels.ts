/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const PESQUISASATISFACAO_FIELD_LABELS = {
	cor_cabecalho: "cor_cabecalho",
	descricao: "descricao",
	forma_envio: "forma_envio",
	id: "id",
	link: "link",
	logotipo: "logotipo",
	mensagem_email: "mensagem_email",
	mensagem_omnichannel: "mensagem_omnichannel",
} as const;

export const PESQUISASATISFACAO_FORMAENVIO_LABELS = {
	E: "E",
	W: "W",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const pesquisa_satisfacaoFormaEnvioSchema = z.enum(["E", "W"], {
	error: () => ({ message: "forma_envio: valores válidos são [E, W]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type PesquisaSatisfacaoFormaEnvio = z.infer<
	typeof pesquisa_satisfacaoFormaEnvioSchema
>;
