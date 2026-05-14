/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const INFOASO_FIELD_LABELS = {
	createdAt: "Criado em",
	createdBy: "Criado por",
	createdById: "createdById",
	f_apto: "Apto?",
	f_aso: "ASO",
	f_data_exame: "Data do Exame",
	f_data_prox_exame: "Data Próximo Exame",
	f_dias_afastamento: "Dias de Afastamento",
	f_fk_funcionarios: "f_fk_funcionarios",
	f_funcionarios_2: "Funcionários",
	f_informado: "Informado?",
	f_obs: "Observações",
	f_tipo_exame: "Tipo de Exame",
	id: "ID",
	updatedAt: "Última atualização em",
	updatedBy: "Última atualização por",
	updatedById: "updatedById",
} as const;

export const INFOASO_INFORMADO_LABELS = {
	nao: "Não",
	sim: "Sim",
} as const;

export const INFOASO_TIPOEXAME_LABELS = {
	"exame-admissional": "Exame Admissional",
	"exame-periodico": "Exame Periódico",
	"atestado-medico": "Atestado Médico",
	"retorno-trabalho": "Retorno ao Trabalho",
	"mudanca-funcao": "Mudança de Função",
	outros: "Outros",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const info_asoInformadoSchema = z.enum(["nao", "sim"], {
	error: () => ({ message: "informado: valores válidos são [Não, Sim]" }),
});

export const info_asoTipoExameSchema = z.enum(
	[
		"exame-admissional",
		"exame-periodico",
		"atestado-medico",
		"retorno-trabalho",
		"mudanca-funcao",
		"outros",
	],
	{
		error: () => ({
			message:
				"tipo_exame: valores válidos são [Exame Admissional, Exame Periódico, Atestado Médico, Retorno ao Trabalho, Mudança de Função, Outros]",
		}),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type InfoAsoInformado = z.infer<typeof info_asoInformadoSchema>;

export type InfoAsoTipoExame = z.infer<typeof info_asoTipoExameSchema>;
