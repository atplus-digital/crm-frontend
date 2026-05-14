/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const PATRIMONIO_FIELD_LABELS = {
	createdAt: "Criado em",
	createdBy: "Criado por",
	createdById: "createdById",
	f_armazenamento: "Armazenamento",
	f_estado_uso: "Estado de Uso",
	f_fk_funcionarios: "f_fk_funcionarios",
	f_funcionarios: "Funcionários",
	f_id_tecnico_ixc: "ID Técnico IXC",
	f_modelo: "Modelo",
	f_nome_patrimonio: "Nome do Patrimônio",
	f_numero_serie: "Número de Série",
	f_processador: "Processador",
	f_quantidade: "Quantidade",
	f_ram: "RAM",
	f_so: "Sistema Operacional",
	f_tipo_patrimonio: "Tipo de Patrimônio",
	f_valor_patrimonio: "Valor do Patrimônio",
	id: "ID",
	updatedAt: "Última atualização em",
	updatedBy: "Última atualização por",
	updatedById: "updatedById",
} as const;

export const PATRIMONIO_ESTADOUSO_LABELS = {
	NOVO: "NOVO",
	"USADO, EM ESTADO DE NOVO": "USADO, EM ESTADO DE NOVO",
	"USADO, COM MARCAS DE USO": "USADO, COM MARCAS DE USO",
} as const;

export const PATRIMONIO_TIPOPATRIMONIO_LABELS = {
	1: "Equipamento",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const patrimonioEstadoUsoSchema = z.enum(
	["NOVO", "USADO, EM ESTADO DE NOVO", "USADO, COM MARCAS DE USO"],
	{
		error: () => ({
			message:
				"estado_uso: valores válidos são [NOVO, USADO, EM ESTADO DE NOVO, USADO, COM MARCAS DE USO]",
		}),
	},
);

export const patrimonioTipoPatrimonioSchema = z.enum(["1"], {
	error: () => ({
		message: "tipo_patrimonio: valores válidos são [Equipamento]",
	}),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type PatrimonioEstadoUso = z.infer<typeof patrimonioEstadoUsoSchema>;

export type PatrimonioTipoPatrimonio = z.infer<
	typeof patrimonioTipoPatrimonioSchema
>;
