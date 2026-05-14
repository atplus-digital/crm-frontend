/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const DATACENTERMEMORIAS_FIELD_LABELS = {
	createdAt: "Criado em",
	createdBy: "Criado por",
	createdById: "createdById",
	f_capacidade: "Capacidade",
	f_fabricante: "Fabricante",
	f_fk_memorias: "f_fk_memorias",
	f_fk_servidor: "Servidores",
	f_sn: "SN",
	f_status: "Status",
	f_tipo: "Tipo",
	f_valor_locacao: "Valor Locação",
	id: "ID",
	updatedAt: "Última atualização em",
	updatedBy: "Última atualização por",
	updatedById: "updatedById",
} as const;

export const DATACENTERMEMORIAS_CAPACIDADE_LABELS = {
	2: "2 GB",
	4: "4 GB",
	8: "8 GB",
	16: "16 GB",
	32: "32 GB",
	64: "64 GB",
	128: "128 GB",
} as const;

export const DATACENTERMEMORIAS_STATUS_LABELS = {
	0: "Descartado",
	1: "Disponivel",
	2: "Alocado para Servidor",
	3: "Manutenção",
} as const;

export const DATACENTERMEMORIAS_TIPO_LABELS = {
	3: "DDR 3",
	4: "DDR 4",
	2: "DDR 2",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const datacenter_memoriasCapacidadeSchema = z.enum(
	["2", "4", "8", "16", "32", "64", "128"],
	{
		error: () => ({
			message:
				"capacidade: valores válidos são [2 GB, 4 GB, 8 GB, 16 GB, 32 GB, 64 GB, 128 GB]",
		}),
	},
);

export const datacenter_memoriasStatusSchema = z.enum(["0", "1", "2", "3"], {
	error: () => ({
		message:
			"status: valores válidos são [Descartado, Disponivel, Alocado para Servidor, Manutenção]",
	}),
});

export const datacenter_memoriasTipoSchema = z.enum(["3", "4", "2"], {
	error: () => ({ message: "tipo: valores válidos são [DDR 3, DDR 4, DDR 2]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type DatacenterMemoriasCapacidade = z.infer<
	typeof datacenter_memoriasCapacidadeSchema
>;

export type DatacenterMemoriasStatus = z.infer<
	typeof datacenter_memoriasStatusSchema
>;

export type DatacenterMemoriasTipo = z.infer<
	typeof datacenter_memoriasTipoSchema
>;
