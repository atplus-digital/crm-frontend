/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const REGISTROSDECONTATO_CATEGORIA_LABELS = {
	"pos-venda": "Pós Venda",
	"pre-venda": "Pré Venda",
	cancelamento: "Cancelamento",
} as const;

export const REGISTROSDECONTATO_NOTATECNICO_LABELS = {
	"0": "N/A",
	"1": "1 ★",
	"2": "2 ★★",
	"3": "3 ★★★",
	"4": "4 ★★★★",
	"5": "5 ★★★★★",
} as const;

export const REGISTROSDECONTATO_NOTAVENDAS_LABELS = {
	"0": "N/A",
	"1": "1 ★",
	"2": "2 ★★",
	"3": "3 ★★★",
	"4": "4 ★★★★",
	"5": "5 ★★★★★",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const registros_de_contatoCategoriaSchema = z.enum(
	["pos-venda", "pre-venda", "cancelamento"],
	{
		error: () => ({
			message:
				"categoria: valores válidos são [Pós Venda, Pré Venda, Cancelamento]",
		}),
	},
);

export const registros_de_contatoNotaTecnicoSchema = z.enum(
	["0", "1", "2", "3", "4", "5"],
	{
		error: () => ({
			message:
				"nota_tecnico: valores válidos são [N/A, 1 ★, 2 ★★, 3 ★★★, 4 ★★★★, 5 ★★★★★]",
		}),
	},
);

export const registros_de_contatoNotaVendasSchema = z.enum(
	["0", "1", "2", "3", "4", "5"],
	{
		error: () => ({
			message:
				"nota_vendas: valores válidos são [N/A, 1 ★, 2 ★★, 3 ★★★, 4 ★★★★, 5 ★★★★★]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type RegistrosDeContatoCategoria = z.infer<
	typeof registros_de_contatoCategoriaSchema
>;

export type RegistrosDeContatoNotaTecnico = z.infer<
	typeof registros_de_contatoNotaTecnicoSchema
>;

export type RegistrosDeContatoNotaVendas = z.infer<
	typeof registros_de_contatoNotaVendasSchema
>;
