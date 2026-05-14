/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const HSCONTATOS_FIELD_LABELS = {
	cargo: "cargo",
	celular: "celular",
	cidade: "cidade",
	email: "email",
	estado: "estado",
	fax: "fax",
	id: "id",
	id_categoria: "id_categoria",
	inforcoes_adcionais: "inforcoes_adcionais",
	nivel_acesso: "nivel_acesso",
	nome: "nome",
	ordernar: "ordernar",
	publicado: "publicado",
	rua: "rua",
	telefone: "telefone",
	url_site: "url_site",
} as const;

export const HSCONTATOS_PUBLICADO_LABELS = {
	N: "N",
	S: "S",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const hs_contatosPublicadoSchema = z.enum(["N", "S"], {
	error: () => ({ message: "publicado: valores válidos são [N, S]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type HsContatosPublicado = z.infer<typeof hs_contatosPublicadoSchema>;
