/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	relatorios_cliente_contrato_emailFormatoArquivoSchema,
	relatorios_cliente_contrato_emailOpcMesRotinaSchema,
	relatorios_cliente_contrato_emailTipoEnvioSchema,
} from "./labels";

export const RELATORIOS_CLIENTE_CONTRATO_EMAIL_TABLE_NAME =
	"relatorios_cliente_contrato_email";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const relatorios_cliente_contrato_emailBaseSchema = z.object({
	id: z.number(),
	dia_rotina: z.string(),
	dia_semana: z.string(),
	dia_semana_envio: z.number(),
	dias_mes: z.number(),
	endereco_email: z.string(),
	formato_arquivo: relatorios_cliente_contrato_emailFormatoArquivoSchema,
	hora: z.string(),
	hora_rotina: z.string(),
	id_relatorio: z.number(),
	id_relatorio_areceber: z.number(),
	id_relatorio_funcionario_equipamento: z.number(),
	id_relatorio_oss_chamado: z.number(),
	id_relatorio_patrimonio: z.number(),
	id_relatorio_patrimonio_divergencia: z.number(),
	id_relatorio_requisicao_material: z.number(),
	id_relatorio_requisicao_material_item: z.number(),
	id_relatorio_vd_saida: z.number(),
	mes: z.string(),
	mes_rotina: z.string(),
	minuto_rotina: z.string(),
	modelo_email: z.number(),
	opc_mes_rotina: relatorios_cliente_contrato_emailOpcMesRotinaSchema,
	semana_rotina: z.string(),
	status: z.string(),
	tipo_envio: relatorios_cliente_contrato_emailTipoEnvioSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const relatorios_cliente_contrato_emailSchema =
	relatorios_cliente_contrato_emailBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const relatorios_cliente_contrato_emailCreateSchema =
	relatorios_cliente_contrato_emailSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const relatorios_cliente_contrato_emailUpdateSchema =
	relatorios_cliente_contrato_emailCreateSchema.partial();
