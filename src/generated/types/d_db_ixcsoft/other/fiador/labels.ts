/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const FIADOR_FIELD_LABELS = {
	bairro: "bairro",
	cidade: "cidade",
	conjuge: "conjuge",
	conjuge_cpf: "conjuge_cpf",
	conjuge_orgao_emissor: "conjuge_orgao_emissor",
	conjuge_rg: "conjuge_rg",
	cpf: "cpf",
	endereco: "endereco",
	endereco_numero: "endereco_numero",
	estado_civil: "estado_civil",
	id: "id",
	nome: "nome",
	orgao_emissor: "orgao_emissor",
	rg: "rg",
	telefone: "telefone",
} as const;

export const FIADOR_ESTADOCIVIL_LABELS = {
	C: "C",
	S: "S",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const fiadorEstadoCivilSchema = z.enum(["C", "S"], {
	error: () => ({ message: "estado_civil: valores válidos são [C, S]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type FiadorEstadoCivil = z.infer<typeof fiadorEstadoCivilSchema>;
