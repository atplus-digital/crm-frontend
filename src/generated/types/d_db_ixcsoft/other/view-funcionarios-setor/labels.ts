/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const VIEWFUNCIONARIOSSETOR_FIELD_LABELS = {
	ativo: "ativo",
	ativo_funcionario_setor: "ativo_funcionario_setor",
	funcionario: "funcionario",
	id: "id",
	id_funcionario: "id_funcionario",
	setor: "setor",
	usuario: "usuario",
} as const;

export const VIEWFUNCIONARIOSSETOR_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const VIEWFUNCIONARIOSSETOR_ATIVOFUNCIONARIOSETOR_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const view_funcionarios_setorAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

export const view_funcionarios_setorAtivoFuncionarioSetorSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "ativo_funcionario_setor: valores válidos são [S, N]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ViewFuncionariosSetorAtivo = z.infer<
	typeof view_funcionarios_setorAtivoSchema
>;

export type ViewFuncionariosSetorAtivoFuncionarioSetor = z.infer<
	typeof view_funcionarios_setorAtivoFuncionarioSetorSchema
>;
