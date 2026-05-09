/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	radhotspotAdicionarAcessListSchema,
	radhotspotAutenticacaoPorMacSchema,
	radhotspotAutenticacaoPorSsidSchema,
	radhotspotAutoPreencherFtthSchema,
	radhotspotAutoPreencherIpv6Schema,
	radhotspotAutoPreenherIpSchema,
	radhotspotAutoPreenherMacSchema,
	radhotspotAvisoAtivoSchema,
	radhotspotBloqueioAtivoSchema,
	radhotspotCaixaFtthSchema,
	radhotspotDhcpRouterIpAddressSchema,
	radhotspotEnviarReducaoVelocidadeCoaSchema,
	radhotspotFiltroCaixaAtendimentoOltSchema,
	radhotspotFixarFramedIpv6Schema,
	radhotspotFixarIpSchema,
	radhotspotFixarIpv6Schema,
	radhotspotForcarDesconexaoApiMikrotikSchema,
	radhotspotForcarDesconexaoSshHuaweiSchema,
	radhotspotFramedAutoPreencherIpv6Schema,
	radhotspotFramedRelacionarIpv6AoLoginSchema,
	radhotspotGeraAtributoAvisoBloqueioSchema,
	radhotspotGeraNasPortIdSchema,
	radhotspotGeraParametrosAssinaturaSchema,
	radhotspotGeraRadiusAtrasoSchema,
	radhotspotLogarPrecontratoSchema,
	radhotspotLoginAutenticacaoPadraoSchema,
	radhotspotLoginTipoTransmPadraoSchema,
	radhotspotMensagensAvisoSchema,
	radhotspotObrigaLoginSchema,
	radhotspotPermiteAcessoExternoBancoSchema,
	radhotspotPermiteLogarAvisoAtrasoSchema,
	radhotspotPermiteLogarAvisoBloqueioSchema,
	radhotspotPermitePlanoContratoSchema,
	radhotspotPermitePlanoGratisSchema,
	radhotspotPermitePlanoPrepagoSchema,
	radhotspotPortaFtthSchema,
	radhotspotPreencherAutomaticamenteCaixaSchema,
	radhotspotProjetoFtthSchema,
	radhotspotReduzirAssinaturaSchema,
	radhotspotRelacionarConcentradorAoLoginSchema,
	radhotspotRelacionarIpAoLoginSchema,
	radhotspotRelacionarIpv6AoLoginSchema,
	radhotspotRelacionarMacAoLoginSchema,
	radhotspotSenhaRouterAutomaticaSchema,
	radhotspotSsidRouterPadraoTipoSchema,
	radhotspotTipoAcessoLoginSchema,
	radhotspotTipoPlanoPadraoLoginSchema,
	radhotspotValidaPortaFtthSchema,
} from "./labels";

export const RADHOTSPOT_TABLE_NAME = "radhotspot";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const radhotspotBaseSchema = z.object({
	id: z.number(),
	acct_interim_interval: z.number(),
	adicionar_acess_list: radhotspotAdicionarAcessListSchema,
	aguardando_assinatura: z.string(),
	atraso_tempo: z.number(),
	autenticacao_por_mac: radhotspotAutenticacaoPorMacSchema,
	autenticacao_por_ssid: radhotspotAutenticacaoPorSsidSchema,
	auto_preencher_ftth: radhotspotAutoPreencherFtthSchema,
	auto_preencher_ipv6: radhotspotAutoPreencherIpv6Schema,
	auto_preenher_ip: radhotspotAutoPreenherIpSchema,
	auto_preenher_mac: radhotspotAutoPreenherMacSchema,
	aviso_ativo: radhotspotAvisoAtivoSchema,
	bloqueio_ativo: radhotspotBloqueioAtivoSchema,
	bloqueio_automatico_dias: z.number(),
	bloqueio_tempo: z.number(),
	caixa_ftth: radhotspotCaixaFtthSchema,
	dhcp_router_ip_address: radhotspotDhcpRouterIpAddressSchema,
	enviar_reducao_velocidade_coa: radhotspotEnviarReducaoVelocidadeCoaSchema,
	filtro_caixa_atendimento_olt: radhotspotFiltroCaixaAtendimentoOltSchema,
	fixar_framed_ipv6: radhotspotFixarFramedIpv6Schema,
	fixar_ip: radhotspotFixarIpSchema,
	fixar_ipv6: radhotspotFixarIpv6Schema,
	forcar_desconexao_api_mikrotik: radhotspotForcarDesconexaoApiMikrotikSchema,
	forcar_desconexao_ssh_huawei: radhotspotForcarDesconexaoSshHuaweiSchema,
	framed_auto_preencher_ipv6: radhotspotFramedAutoPreencherIpv6Schema,
	framed_relacionar_ipv6_ao_login: radhotspotFramedRelacionarIpv6AoLoginSchema,
	gera_atributo_aviso_bloqueio: radhotspotGeraAtributoAvisoBloqueioSchema,
	gera_nas_port_id: radhotspotGeraNasPortIdSchema,
	gera_parametros_assinatura: radhotspotGeraParametrosAssinaturaSchema,
	gera_radius_atraso: radhotspotGeraRadiusAtrasoSchema,
	habilita_consumo: z.string(),
	id_pool: z.number(),
	id_rad_dns: z.number(),
	ip_aviso: z.string(),
	ip_bloqueio: z.string(),
	ipv6_servidor: z.string(),
	link_atraso: z.string(),
	link_bloqueio: z.string(),
	logar_precontrato: radhotspotLogarPrecontratoSchema,
	login_autenticacao_padrao: radhotspotLoginAutenticacaoPadraoSchema,
	login_tipo_transm_padrao: radhotspotLoginTipoTransmPadraoSchema,
	mensagens_aviso: radhotspotMensagensAvisoSchema,
	nome_pool_assinatura: z.string(),
	nome_pool_aviso: z.string(),
	nome_pool_bloqueio: z.string(),
	obriga_login: radhotspotObrigaLoginSchema,
	permite_acesso_externo_banco: radhotspotPermiteAcessoExternoBancoSchema,
	permite_logar_aviso_atraso: radhotspotPermiteLogarAvisoAtrasoSchema,
	permite_logar_aviso_bloqueio: radhotspotPermiteLogarAvisoBloqueioSchema,
	permite_plano_contrato: radhotspotPermitePlanoContratoSchema,
	permite_plano_gratis: radhotspotPermitePlanoGratisSchema,
	permite_plano_prepago: radhotspotPermitePlanoPrepagoSchema,
	porta_acesso_externo_banco: z.number(),
	porta_assinatura: z.number(),
	porta_aviso: z.string(),
	porta_bloqueio: z.string(),
	porta_ftth: radhotspotPortaFtthSchema,
	porta_manutencao: z.number(),
	porta_router_padrao: z.number(),
	porta_router2_padrao: z.number(),
	porta_ssh: z.number(),
	porta_web_servidor: z.number(),
	preencher_automaticamente_caixa:
		radhotspotPreencherAutomaticamenteCaixaSchema,
	projeto_ftth: radhotspotProjetoFtthSchema,
	reduzir_assinatura: radhotspotReduzirAssinaturaSchema,
	reduzir_assinatura_plano: z.number(),
	reduzir_atraso_plano: z.number(),
	reduzir_dias_atraso: z.number(),
	relacionar_concentrador_ao_login:
		radhotspotRelacionarConcentradorAoLoginSchema,
	relacionar_ip_ao_login: radhotspotRelacionarIpAoLoginSchema,
	relacionar_ipv6_ao_login: radhotspotRelacionarIpv6AoLoginSchema,
	relacionar_mac_ao_login: radhotspotRelacionarMacAoLoginSchema,
	script_planos_velocidade: z.string(),
	senha_roteador_padrao: z.string(),
	senha_router_automatica: radhotspotSenhaRouterAutomaticaSchema,
	ssid_router_padrao: z.string(),
	ssid_router_padrao_tipo: radhotspotSsidRouterPadraoTipoSchema,
	tipo_acesso_login: radhotspotTipoAcessoLoginSchema,
	tipo_plano_padrao_login: radhotspotTipoPlanoPadraoLoginSchema,
	ultima_atualizacao: z.string(),
	url_hotspot_gratis: z.string(),
	usuario_roteador_padrao: z.string(),
	valida_porta_ftth: radhotspotValidaPortaFtthSchema,
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const radhotspotSchema = radhotspotBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const radhotspotCreateSchema = radhotspotSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const radhotspotUpdateSchema = radhotspotCreateSchema.partial();
