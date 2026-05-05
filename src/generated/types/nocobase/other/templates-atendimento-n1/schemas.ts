/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { usersBaseSchema } from "../../users/schemas";
import {
	templates_atendimento_n1AcessaPelaRedeDaAtplusSchema,
	templates_atendimento_n1AlteracoesSchema,
	templates_atendimento_n1AplicativoEspecificoSchema,
	templates_atendimento_n1AplicativoSchema,
	templates_atendimento_n1ApnPreenchidaSchema,
	templates_atendimento_n1FabricanteSchema,
	templates_atendimento_n1LosSchema,
	templates_atendimento_n1QualApnConfiguradaSchema,
	templates_atendimento_n1QuantidadeDeDispositivosSchema,
	templates_atendimento_n1StatusDoCircuitoSchema,
	templates_atendimento_n1TelefoniaTipoDeProblemaSchema,
	templates_atendimento_n1TipoDeAtendimentoSchema,
	templates_atendimento_n1TipoDeConexaoDoDispositivoSchema,
	templates_atendimento_n1TipoDeProblemaMvnoSchema,
	templates_atendimento_n1TorreRedeSchema,
} from "./labels";

export const T_TEMPLATES_ATENDIMENTO_N1_TABLE_NAME =
	"t_templates_atendimento_n1";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const templates_atendimento_n1BaseSchema = z.object({
	id: z.number(),
	f_fk_templates_atendimentos: z.number(),
	f_acessa_pela_rede_da_atplus:
		templates_atendimento_n1AcessaPelaRedeDaAtplusSchema,
	f_alteracoes: templates_atendimento_n1AlteracoesSchema,
	f_aplicativo: templates_atendimento_n1AplicativoSchema,
	f_aplicativo_especifico: templates_atendimento_n1AplicativoEspecificoSchema,
	f_apn_preenchida: templates_atendimento_n1ApnPreenchidaSchema,
	f_descricao_do_cliente: z.string(),
	"f_e-mail": z.string(),
	f_endereco_do_site: z.string(),
	f_fabricante: templates_atendimento_n1FabricanteSchema,
	f_ip_fixo: z.string(),
	f_ip_interno_para_liberacao: z.string(),
	f_login_pppoe: z.string(),
	f_los: templates_atendimento_n1LosSchema,
	f_melhor_horario_retorno: z.string(),
	f_nome: z.string(),
	f_nome_do_solicitante: z.string(),
	f_nome_rede_wifi: z.string(),
	f_numero_de_A: z.string(),
	f_numero_de_B: z.string(),
	f_numero_para_contato: z.string(),
	f_portas_a_serem_liberadas: z.string(),
	f_protocolo_do_atendimento: z.string(),
	f_qual_aplicativo: z.string(),
	f_qual_apn_configurada: templates_atendimento_n1QualApnConfiguradaSchema,
	f_qual_fabricante: z.string(),
	f_quantidade_de_dispositivos:
		templates_atendimento_n1QuantidadeDeDispositivosSchema,
	f_senha_da_rede_wifi: z.string(),
	f_status_do_circuito: templates_atendimento_n1StatusDoCircuitoSchema,
	f_telefonia_tipo_de_problema:
		templates_atendimento_n1TelefoniaTipoDeProblemaSchema,
	f_tipo_de_atendimento: templates_atendimento_n1TipoDeAtendimentoSchema,
	f_tipo_de_conexao_do_dispositivo:
		templates_atendimento_n1TipoDeConexaoDoDispositivoSchema,
	f_tipo_de_problema_mvno: templates_atendimento_n1TipoDeProblemaMvnoSchema,
	f_torre_rede: templates_atendimento_n1TorreRedeSchema,
	updatedAt: z.string(),
	createdAt: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const templates_atendimento_n1RelationSchema = z.object({
	createdBy: z.lazy(() => usersBaseSchema.nullable()),
	updatedBy: z.lazy(() => usersBaseSchema.nullable()),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const templates_atendimento_n1Schema =
	templates_atendimento_n1BaseSchema.extend(
		templates_atendimento_n1RelationSchema.shape,
	);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const templates_atendimento_n1CreateSchema =
	templates_atendimento_n1Schema.omit({
		createdAt: true,
		createdBy: true,
		id: true,
		updatedAt: true,
		updatedBy: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const templates_atendimento_n1UpdateSchema =
	templates_atendimento_n1CreateSchema.partial();
