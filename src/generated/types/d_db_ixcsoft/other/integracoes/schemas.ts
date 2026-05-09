/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	integracoesAmbienteSchema,
	integracoesAtivarLoginTvSchema,
	integracoesCobrarSomenteRamaisAtivosSchema,
	integracoesComportamentoBloqueioParcialVoipSchema,
	integracoesComportamentoBloqueioTotalVoipSchema,
	integracoesComunicarApiSchema,
	integracoesDeletarArquivosCdrSchema,
	integracoesFormaImportacaoSchema,
	integracoesGerarAdicionalExcedentePorLigacaoSchema,
	integracoesHabilitarMemoriaPlataformaSchema,
	integracoesPeriodoImportacaoCdrSchema,
	integracoesStatusSchema,
	integracoesUtilizaPeriodoImportacaoSchema,
	integracoesVersaoApiPlayhubSchema,
} from "./labels";

export const INTEGRACOES_TABLE_NAME = "integracoes";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const integracoesBaseSchema = z.object({
	id: z.number(),
	ambiente: integracoesAmbienteSchema,
	api_key: z.string(),
	api_secret: z.string(),
	arquivo_acesso_watch: z.string(),
	ativar_login_tv: integracoesAtivarLoginTvSchema,
	cobrar_somente_ramais_ativos: integracoesCobrarSomenteRamaisAtivosSchema,
	comportamento_bloqueio_parcial_voip:
		integracoesComportamentoBloqueioParcialVoipSchema,
	comportamento_bloqueio_total_voip:
		integracoesComportamentoBloqueioTotalVoipSchema,
	comunicar_api: integracoesComunicarApiSchema,
	data_corte: z.number(),
	data_proxima_atualizacao: z.string(),
	data_sincronizacao: z.string(),
	deletar_arquivos_cdr: integracoesDeletarArquivosCdrSchema,
	descricao: z.string(),
	diretorio_origem_cdr_summit: z.string(),
	distri_id: z.string(),
	distri_passaword: z.string(),
	forma_importacao: integracoesFormaImportacaoSchema,
	forma_importacao_zeus: z.number(),
	gateway: z.string(),
	gerar_adicional_excedente_por_ligacao:
		integracoesGerarAdicionalExcedentePorLigacaoSchema,
	habilitar_memoria_plataforma: integracoesHabilitarMemoriaPlataformaSchema,
	head_control: z.string(),
	id_filial: z.number(),
	id_lineup_tv: z.string(),
	id_perfil: z.number(),
	id_plano: z.number(),
	id_revenda: z.number(),
	id_vendedor: z.number(),
	identificador_provedor: z.string(),
	ip_acesso: z.string(),
	ip_api_summit: z.string(),
	ip_integracao_TV: z.string(),
	ip_mw_tv: z.string(),
	login_mw_tv: z.string(),
	login_TV: z.string(),
	moeda: z.number(),
	nome_banco: z.string(),
	nome_view_sippulse: z.string(),
	operator_tv: z.string(),
	pacote_inadimplencia_tv: z.number(),
	param_json: z.string(),
	periodo_importacao_cdr: integracoesPeriodoImportacaoCdrSchema,
	plataforma: z.string(),
	porta_acesso: z.number(),
	porta_api_summit: z.string(),
	porta_banco: z.number(),
	qtd_numeros_did: z.number(),
	refresh_token: z.string(),
	rota_ws_ligacoes_vsc: z.string(),
	secret_mw_tv: z.string(),
	senha_acesso: z.string(),
	senha_banco: z.string(),
	senha_TV: z.string(),
	servidor_banco: z.string(),
	session_id: z.string(),
	status: integracoesStatusSchema,
	tipo: z.string(),
	token_acesso: z.string(),
	token_acesso_watch: z.string(),
	url_acesso: z.string(),
	usuario_acesso: z.string(),
	usuario_banco: z.string(),
	utiliza_periodo_importacao: integracoesUtilizaPeriodoImportacaoSchema,
	versao_api_playhub: integracoesVersaoApiPlayhubSchema,
	versao_importacao_cdr_summit: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const integracoesSchema = integracoesBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const integracoesCreateSchema = integracoesSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const integracoesUpdateSchema = integracoesCreateSchema.partial();
