/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const RELATORIOSCLIENTECONTRATOEMAIL_FIELD_LABELS = {
	dia_rotina: "dia_rotina",
	dia_semana: "dia_semana",
	dia_semana_envio: "dia_semana_envio",
	dias_mes: "dias_mes",
	endereco_email: "endereco_email",
	formato_arquivo: "formato_arquivo",
	hora: "hora",
	hora_rotina: "hora_rotina",
	id: "id",
	id_relatorio: "id_relatorio",
	id_relatorio_areceber: "id_relatorio_areceber",
	id_relatorio_funcionario_equipamento: "id_relatorio_funcionario_equipamento",
	id_relatorio_oss_chamado: "id_relatorio_oss_chamado",
	id_relatorio_patrimonio: "id_relatorio_patrimonio",
	id_relatorio_patrimonio_divergencia: "id_relatorio_patrimonio_divergencia",
	id_relatorio_requisicao_material: "id_relatorio_requisicao_material",
	id_relatorio_requisicao_material_item:
		"id_relatorio_requisicao_material_item",
	id_relatorio_vd_saida: "id_relatorio_vd_saida",
	mes: "mes",
	mes_rotina: "mes_rotina",
	minuto_rotina: "minuto_rotina",
	modelo_email: "modelo_email",
	opc_mes_rotina: "opc_mes_rotina",
	semana_rotina: "semana_rotina",
	status: "status",
	tipo_envio: "tipo_envio",
} as const;

export const RELATORIOSCLIENTECONTRATOEMAIL_FORMATOARQUIVO_LABELS = {
	PDF: "PDF",
	CSV: "CSV",
	AMB: "AMB",
} as const;

export const RELATORIOSCLIENTECONTRATOEMAIL_OPCMESROTINA_LABELS = {
	T: "T",
	P: "P",
} as const;

export const RELATORIOSCLIENTECONTRATOEMAIL_TIPOENVIO_LABELS = {
	T: "T",
	S: "S",
	M: "M",
	MP: "MP",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const relatorios_cliente_contrato_emailFormatoArquivoSchema = z.enum(
	["PDF", "CSV", "AMB"],
	{
		error: () => ({
			message: "formato_arquivo: valores válidos são [PDF, CSV, AMB]",
		}),
	},
);

export const relatorios_cliente_contrato_emailOpcMesRotinaSchema = z.enum(
	["T", "P"],
	{
		error: () => ({ message: "opc_mes_rotina: valores válidos são [T, P]" }),
	},
);

export const relatorios_cliente_contrato_emailTipoEnvioSchema = z.enum(
	["T", "S", "M", "MP"],
	{
		error: () => ({ message: "tipo_envio: valores válidos são [T, S, M, MP]" }),
	},
);

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type RelatoriosClienteContratoEmailFormatoArquivo = z.infer<
	typeof relatorios_cliente_contrato_emailFormatoArquivoSchema
>;

export type RelatoriosClienteContratoEmailOpcMesRotina = z.infer<
	typeof relatorios_cliente_contrato_emailOpcMesRotinaSchema
>;

export type RelatoriosClienteContratoEmailTipoEnvio = z.infer<
	typeof relatorios_cliente_contrato_emailTipoEnvioSchema
>;
