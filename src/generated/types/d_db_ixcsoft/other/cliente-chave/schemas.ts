/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	cliente_chaveAtivoSchema,
	cliente_chaveLocationSchema,
	cliente_chaveReleaseTypeSchema,
	cliente_chaveServicoApacheSchema,
	cliente_chaveServicoAsteriskSchema,
	cliente_chaveServicoElasticSchema,
	cliente_chaveServicoFail2banSchema,
	cliente_chaveServicoFreeradiusSchema,
	cliente_chaveServicoMemcachedSchema,
	cliente_chaveServicoMysqlSchema,
	cliente_chaveServicoNginxSchema,
	cliente_chaveServicoPm2Schema,
	cliente_chaveServicoPm2SslSchema,
	cliente_chaveServicoSshSchema,
	cliente_chaveTipoChaveSchema,
	cliente_chaveVersaoAtualizacaoSchema,
	cliente_chaveVersaoViabSchema,
} from "./labels";

export const CLIENTE_CHAVE_TABLE_NAME = "cliente_chave";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const cliente_chaveBaseSchema = z.object({
	id: z.number(),
	ativo: cliente_chaveAtivoSchema,
	banda_atual: z.number(),
	bkp_arquivo: z.string(),
	bkp_data_arquivo: z.string(),
	bkp_quant_files: z.number(),
	bkp_tamanho_arquivo: z.string(),
	chave: z.string(),
	chave_clientes_ativos: z.number(),
	chave_contratos_importados: z.number(),
	chave_crm_ativos: z.number(),
	chave_leds_ativos: z.number(),
	chave_logins_ativos: z.number(),
	chave_logins_importados: z.number(),
	cli_ativo: z.number(),
	cnpj_cpf: z.string(),
	data_atualizacao: z.string(),
	data_atualizacao_automatica: z.string(),
	data_atualizacao_sistema: z.string(),
	data_compilacao: z.string(),
	data_insert: z.string(),
	descricao: z.string(),
	disco_livre: z.string(),
	disco_total: z.string(),
	disco_usado: z.string(),
	distro: z.string(),
	elastic_host: z.string(),
	elastic_password: z.string(),
	elastic_porta: z.number(),
	elastic_protocol: z.string(),
	elastic_user: z.string(),
	ftp_porta: z.string(),
	ftp_senha: z.string(),
	ftp_servidor: z.string(),
	ftp_usuario: z.string(),
	hs_tipo_login: z.string(),
	id_autenticacao_suporte_opa: z.number(),
	id_cliente: z.number(),
	id_contrato: z.number(),
	id_plano: z.number(),
	id_serial: z.string(),
	ip_local: z.string(),
	ip_sistema: z.string(),
	location: cliente_chaveLocationSchema,
	mega_senha: z.string(),
	mega_usuario: z.string(),
	memoria_buffers: z.string(),
	memoria_cache: z.string(),
	memoria_livre: z.string(),
	memoria_swap_livre: z.string(),
	memoria_swap_total: z.string(),
	memoria_total: z.string(),
	n_logins_simultaneos: z.number(),
	observacao: z.string(),
	percentual_uso_disco_raiz: z.string(),
	porta_ssh_sistema: z.number(),
	porta_web: z.number(),
	qtde_cpu: z.number(),
	rclone_config: z.string(),
	release_type: cliente_chaveReleaseTypeSchema,
	senha_banco_dados: z.string(),
	senha_root: z.string(),
	serial: z.string(),
	serv_arquivos_inseguros: z.string(),
	serv_config_filtro_ssh: z.string(),
	servico_apache: cliente_chaveServicoApacheSchema,
	servico_asterisk: cliente_chaveServicoAsteriskSchema,
	servico_elastic: cliente_chaveServicoElasticSchema,
	servico_fail2ban: cliente_chaveServicoFail2banSchema,
	servico_freeradius: cliente_chaveServicoFreeradiusSchema,
	servico_memcached: cliente_chaveServicoMemcachedSchema,
	servico_mysql: cliente_chaveServicoMysqlSchema,
	servico_nginx: cliente_chaveServicoNginxSchema,
	servico_pm2: cliente_chaveServicoPm2Schema,
	servico_pm2_ssl: cliente_chaveServicoPm2SslSchema,
	servico_ssh: cliente_chaveServicoSshSchema,
	servidor_banco: z.string(),
	sis_antingo: z.string(),
	status_acesso_A: z.number(),
	status_acesso_CA: z.number(),
	status_acesso_CM: z.number(),
	status_acesso_FA: z.number(),
	status_ultimo_bkp: z.string(),
	tb_engine_crm_email: z.string(),
	tb_engine_ixc_logs: z.string(),
	tb_engine_radacct: z.string(),
	tb_index_crm_email: z.number(),
	tb_index_ixc_logs: z.number(),
	tb_index_radacct: z.number(),
	tb_size_crm_email: z.number(),
	tb_size_ixc_logs: z.number(),
	tb_size_radacct: z.number(),
	tipo_chave: cliente_chaveTipoChaveSchema,
	total_contratos: z.number(),
	ultima_atualizacao: z.string(),
	url_sistema: z.string(),
	uso_cpu: z.number(),
	usuario_banco: z.string(),
	versao: z.string(),
	versao_atualizacao: cliente_chaveVersaoAtualizacaoSchema,
	versao_viab: cliente_chaveVersaoViabSchema,
	virt_ip: z.string(),
	virt_login: z.string(),
	virt_porta: z.string(),
	virt_senha: z.string(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const cliente_chaveSchema = cliente_chaveBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const cliente_chaveCreateSchema = cliente_chaveSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const cliente_chaveUpdateSchema = cliente_chaveCreateSchema.partial();
