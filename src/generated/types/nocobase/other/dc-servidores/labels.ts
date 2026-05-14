/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const DCSERVIDORES_FIELD_LABELS = {
	createdAt: "Criado em",
	createdBy: "Criado por",
	createdById: "createdById",
	f_discos: "Discos",
	f_fabricante: "Fabricante",
	f_fk_discos: "f_fk_discos",
	f_memoria: "Memoria",
	f_memorias: "Memoria",
	f_modelo: "Modelo",
	f_obs: "OBS",
	f_processador: "Processador",
	f_sn: "SN",
	f_status: "Status",
	id: "ID",
	updatedAt: "Última atualização em",
	updatedBy: "Última atualização por",
	updatedById: "updatedById",
} as const;

export const DCSERVIDORES_FABRICANTE_LABELS = {
	1: "DELL",
	2: "HPE",
	3: "IBM",
	4: "Supermicro",
	5: "Outro",
} as const;

export const DCSERVIDORES_STATUS_LABELS = {
	1: "Disponivel",
	2: "Alocado para Cliente",
	3: "Manutenção",
	4: "Descartado",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const dc_servidoresFabricanteSchema = z.enum(["1", "2", "3", "4", "5"], {
	error: () => ({
		message:
			"fabricante: valores válidos são [DELL, HPE, IBM, Supermicro, Outro]",
	}),
});

export const dc_servidoresStatusSchema = z.enum(["1", "2", "3", "4"], {
	error: () => ({
		message:
			"status: valores válidos são [Disponivel, Alocado para Cliente, Manutenção, Descartado]",
	}),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type DcServidoresFabricante = z.infer<
	typeof dc_servidoresFabricanteSchema
>;

export type DcServidoresStatus = z.infer<typeof dc_servidoresStatusSchema>;
