/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	relatorio_funcionario_equipamentoAtivoSchema,
	relatorio_funcionario_equipamentoExibirColaboradorInmapSchema,
	relatorio_funcionario_equipamentoTipoDataAdmissaoSchema,
	relatorio_funcionario_equipamentoTipoDataDescarteSchema,
	relatorio_funcionario_equipamentoTipoDataDevolveSchema,
	relatorio_funcionario_equipamentoTipoDataEmprestaSchema,
	relatorio_funcionario_equipamentoTipoDataNascimentoSchema,
} from "./labels";

export const RELATORIO_FUNCIONARIO_EQUIPAMENTO_TABLE_NAME =
	"relatorio_funcionario_equipamento";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const relatorio_funcionario_equipamentoBaseSchema = z.object({
	id: z.number(),
	apartamento: z.string(),
	ativo: relatorio_funcionario_equipamentoAtivoSchema,
	bairro: z.string(),
	bloco: z.string(),
	cep: z.string(),
	cnh_numero: z.string(),
	complemento: z.string(),
	cpf_cnpj: z.string(),
	creation_date: z.string(),
	creation_user: z.string(),
	ctps_numero: z.string(),
	data_admissao_final: z.string(),
	data_admissao_inicial: z.string(),
	data_admissao_periodo: z.string(),
	data_descarte_final: z.string(),
	data_descarte_inicial: z.string(),
	data_descarte_periodo: z.string(),
	data_devolve_final: z.string(),
	data_devolve_inicial: z.string(),
	data_devolve_periodo: z.string(),
	data_empresta_final: z.string(),
	data_empresta_inicial: z.string(),
	data_empresta_periodo: z.string(),
	data_nascimento_final: z.string(),
	data_nascimento_inicial: z.string(),
	data_nascimento_periodo: z.string(),
	data_ultima_impres: z.string(),
	endereco: z.string(),
	exibir_colaborador_inmap:
		relatorio_funcionario_equipamentoExibirColaboradorInmapSchema,
	filial_id: z.number(),
	id_almox: z.number(),
	id_cidade: z.number(),
	id_condominio: z.number(),
	id_conta: z.number(),
	id_conta_decimo: z.number(),
	id_funcao: z.number(),
	id_patrimonio: z.number(),
	id_produto: z.number(),
	id_tecnico: z.number(),
	ie_identidade: z.string(),
	impresso_por: z.number(),
	nome: z.string(),
	numero: z.string(),
	ramal: z.number(),
	referencia: z.string(),
	relatorio: z.string(),
	setor: z.number(),
	tipo_data_admissao: relatorio_funcionario_equipamentoTipoDataAdmissaoSchema,
	tipo_data_descarte: relatorio_funcionario_equipamentoTipoDataDescarteSchema,
	tipo_data_devolve: relatorio_funcionario_equipamentoTipoDataDevolveSchema,
	tipo_data_empresta: relatorio_funcionario_equipamentoTipoDataEmprestaSchema,
	tipo_data_nascimento:
		relatorio_funcionario_equipamentoTipoDataNascimentoSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const relatorio_funcionario_equipamentoSchema =
	relatorio_funcionario_equipamentoBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const relatorio_funcionario_equipamentoCreateSchema =
	relatorio_funcionario_equipamentoSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const relatorio_funcionario_equipamentoUpdateSchema =
	relatorio_funcionario_equipamentoCreateSchema.partial();
