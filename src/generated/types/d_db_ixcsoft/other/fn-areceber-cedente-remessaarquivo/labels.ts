/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const FNARECEBERCEDENTEREMESSAARQUIVO_FIELD_LABELS = {
	data: "data",
	emissao: "emissao",
	id: "id",
	id_carteira: "id_carteira",
	numero: "numero",
	tipo_remessa: "tipo_remessa",
	traz_todos_titulos_abertos: "traz_todos_titulos_abertos",
	vencimento: "vencimento",
} as const;

export const FNARECEBERCEDENTEREMESSAARQUIVO_TRAZTODOSTITULOSABERTOS_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const fn_areceber_cedente_remessaarquivoTrazTodosTitulosAbertosSchema =
	z.enum(["S", "N"], {
		error: () => ({
			message: "traz_todos_titulos_abertos: valores válidos são [S, N]",
		}),
	});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type FnAreceberCedenteRemessaArquivoTrazTodosTitulosAbertos = z.infer<
	typeof fn_areceber_cedente_remessaarquivoTrazTodosTitulosAbertosSchema
>;
