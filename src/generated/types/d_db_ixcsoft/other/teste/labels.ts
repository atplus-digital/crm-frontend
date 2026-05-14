/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const TESTE_FIELD_LABELS = {
	dfghdfghdfghdfghdfghdfg: "dfghdfghdfghdfghdfghdfg",
	id: "id",
	id_table: "id_table",
	teste: "teste",
	teste_arquivo: "teste_arquivo",
	teste_enum: "teste_enum",
	teste_enum2: "teste_enum2",
	teste5: "teste5",
	testeee: "testeee",
	testeTabela: "testeTabela",
	testetesteTabela: "testetesteTabela",
	testetimestamp: "testetimestamp",
	ultima_atualizacao: "ultima_atualizacao",
} as const;

export const TESTE_TESTEENUM_LABELS = {
	S: "S",
	N: "N",
} as const;

export const TESTE_TESTEENUM2_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const testeTesteEnumSchema = z.enum(["S", "N"], {
	error: () => ({ message: "teste_enum: valores válidos são [S, N]" }),
});

export const testeTesteEnum2Schema = z.enum(["S", "N"], {
	error: () => ({ message: "teste_enum2: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type TesteTesteEnum = z.infer<typeof testeTesteEnumSchema>;

export type TesteTesteEnum2 = z.infer<typeof testeTesteEnum2Schema>;
