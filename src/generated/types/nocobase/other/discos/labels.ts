/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const DISCOS_FIELD_LABELS = {
	createdAt: "Criado em",
	createdBy: "Criado por",
	createdById: "createdById",
	f_capacidade: "Capacidade",
	f_data_aquisicao: "Data de Aquisição",
	f_fk_discos: "f_fk_discos",
	f_fornecedor: "Fornecedor",
	f_modelo: "Modelo",
	f_preco_compra: "Preço de Compra",
	f_preco_venda_locacao: "Preço de Venda (locação)",
	f_SN: "SN",
	f_tipo: "Tipo",
	id: "ID",
	updatedAt: "Última atualização em",
	updatedBy: "Última atualização por",
	updatedById: "updatedById",
} as const;

export const DISCOS_CAPACIDADE_LABELS = {
	1: "480 GB",
	2: "960 GB",
	3: "240 GB",
	4: "1920 GB",
	5: "3840 GB",
	6: "7868 GB",
	7: "120 GB",
	8: "100 GB",
	9: "500 GB",
	10: "1000 GB",
	11: "2000 GB",
	12: "4000 GB",
} as const;

export const DISCOS_TIPO_LABELS = {
	1: "SSD SATA",
	2: "SSD SAS",
	3: "HDD SAS 10k",
	4: "HDD SAS 15k",
	5: "HDD NLSAS",
	6: "HDD SATA",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const discosCapacidadeSchema = z.enum(
	["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
	{
		error: () => ({
			message:
				"capacidade: valores válidos são [480 GB, 960 GB, 240 GB, 1920 GB, 3840 GB, 7868 GB, 120 GB, 100 GB, 500 GB, 1000 GB, 2000 GB, 4000 GB]",
		}),
	},
);

export const discosTipoSchema = z.enum(["1", "2", "3", "4", "5", "6"], {
	error: () => ({
		message:
			"tipo: valores válidos são [SSD SATA, SSD SAS, HDD SAS 10k, HDD SAS 15k, HDD NLSAS, HDD SATA]",
	}),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type DiscosCapacidade = z.infer<typeof discosCapacidadeSchema>;

export type DiscosTipo = z.infer<typeof discosTipoSchema>;
