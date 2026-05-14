/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const LISTARBACKUPSDRIVE_FIELD_LABELS = {
	data: "data",
	diretorio: "diretorio",
	id: "id",
	nome: "nome",
	tamanho_backup: "tamanho_backup",
	tipo: "tipo",
} as const;

export const LISTARBACKUPSDRIVE_TIPO_LABELS = {
	A: "A",
	B: "B",
	CS: "CS",
	C: "C",
	E: "E",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const listar_backups_driveTipoSchema = z.enum(
	["A", "B", "CS", "C", "E"],
	{
		error: () => ({ message: "tipo: valores válidos são [A, B, CS, C, E]" }),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ListarBackupsDriveTipo = z.infer<
	typeof listar_backups_driveTipoSchema
>;
