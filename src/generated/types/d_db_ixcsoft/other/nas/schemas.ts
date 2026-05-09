/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	nasAlterarNomeConcentradorSchema,
	nasAtivoSchema,
	nasColetarIpv6PdSchema,
	nasDelimitadorDominioHuaweiSchema,
	nasDesconexaoDominioHuaweiSchema,
	nasDirecionarAssinaturaSchema,
	nasDirecionarAvisoSchema,
	nasDirecionarBloqueioSchema,
	nasEnviarNotificacaoAppSchema,
	nasMascararCacheSchema,
	nasMascararRedesPrevadasSchema,
	nasNetwacthSchema,
	nasRegraAssinaturaSchema,
	nasRegraAvisoECacheSchema,
	nasRegraAvisoSchema,
	nasRegraBackupSchema,
	nasRegraBloqueioDominioSchema,
	nasRegraBloqueioSchema,
	nasRegraCacheSchema,
	nasRegraManutencaoSchema,
	nasRegraMascaramentoSchema,
	nasRegraRadiusSchema,
	nasRegrasFirewallSchema,
	nasSntpClientSchema,
	nasTarefasAlteracaoVelocidadeSchema,
	nasTarefasReduzirVelocidadeSchema,
	nasTipoAcessoAvisoSchema,
	nasTipoAvisoSchema,
	nasUsaPptpSchema,
} from "./labels";

export const NAS_TABLE_NAME = "nas";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const nasBaseSchema = z.object({
	id: z.number(),
	alterar_nome_concentrador: nasAlterarNomeConcentradorSchema,
	ativa_sv_regra: z.string(),
	ativo: nasAtivoSchema,
	cliente_publicidade: z.number(),
	coletar_ipv6_pd: nasColetarIpv6PdSchema,
	coletar_ipv6_profiles_mk: z.string(),
	community: z.string(),
	delimitador_dominio_huawei: nasDelimitadorDominioHuaweiSchema,
	desconexao_dominio_huawei: nasDesconexaoDominioHuaweiSchema,
	description: z.string(),
	direcionar_assinatura: nasDirecionarAssinaturaSchema,
	direcionar_aviso: nasDirecionarAvisoSchema,
	direcionar_bloqueio: nasDirecionarBloqueioSchema,
	dns_primario: z.string(),
	dns_secundario: z.string(),
	dominio: z.string(),
	dominio_bloqueio: z.string(),
	email_destino: z.string(),
	enviar_notificacao_app: nasEnviarNotificacaoAppSchema,
	hora_backup: z.string(),
	id_cache: z.number(),
	id_mensagem_sms: z.number(),
	id_prov_snmp: z.number(),
	id_pv_grupo_backup: z.number(),
	id_rad_dns: z.number(),
	id_radpop: z.number(),
	id_smtp: z.number(),
	id_smtp_bkp: z.number(),
	id_telegram_token: z.number(),
	interface_wan: z.string(),
	intervalo_aviso: z.string(),
	ip_radius_vpn: z.string(),
	ip_sv_bloqueio: z.string(),
	login: z.string(),
	mascarar_cache: nasMascararCacheSchema,
	mascarar_redes_prevadas: nasMascararRedesPrevadasSchema,
	nasname: z.string(),
	netwacth: nasNetwacthSchema,
	ntp_primario: z.string(),
	numero_destino: z.string(),
	pool_concentrador: z.string(),
	pool_radius: z.number(),
	porta_api: z.string(),
	porta_http: z.number(),
	porta_incoming: z.number(),
	porta_ssh: z.number(),
	porta_sv_assinatura: z.string(),
	porta_sv_aviso: z.string(),
	porta_sv_bloqueio: z.string(),
	porta_sv_manutencao: z.string(),
	porta_telnet: z.string(),
	ports: z.number(),
	prefix_tamanho_ipv6: z.string(),
	radius_server_name: z.string(),
	radius_timeout: z.number(),
	rede_assinatura: z.string(),
	rede_aviso: z.string(),
	rede_bloqueio: z.string(),
	rede_ipv6: z.string(),
	rede_manutencao: z.string(),
	regra_assinatura: nasRegraAssinaturaSchema,
	regra_aviso: nasRegraAvisoSchema,
	regra_aviso_e_cache: nasRegraAvisoECacheSchema,
	regra_backup: nasRegraBackupSchema,
	regra_bloqueio: nasRegraBloqueioSchema,
	regra_bloqueio_dominio: nasRegraBloqueioDominioSchema,
	regra_cache: nasRegraCacheSchema,
	regra_ipv6: z.string(),
	regra_manutencao: nasRegraManutencaoSchema,
	regra_mascaramento: nasRegraMascaramentoSchema,
	regra_radius: nasRegraRadiusSchema,
	regras_firewall: nasRegrasFirewallSchema,
	secret: z.string(),
	senha: z.string(),
	server: z.string(),
	shortname: z.string(),
	smtp_destino: z.string(),
	sntp_client: nasSntpClientSchema,
	src_address_radius: z.string(),
	tarefas_alteracao_velocidade: nasTarefasAlteracaoVelocidadeSchema,
	tarefas_reduzir_velocidade: nasTarefasReduzirVelocidadeSchema,
	telegran_chat_id: z.string(),
	tipo: z.string(),
	tipo_acesso_aviso: nasTipoAcessoAvisoSchema,
	tipo_aviso: nasTipoAvisoSchema,
	token_script_pd: z.string(),
	type: z.string(),
	ultima_atualizacao: z.string(),
	url_redirect: z.string(),
	usa_pptp: nasUsaPptpSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const nasSchema = nasBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const nasCreateSchema = nasSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const nasUpdateSchema = nasCreateSchema.partial();
