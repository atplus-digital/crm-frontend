/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import { cliente_contratoBaseSchema } from "../cliente-contrato/schemas";
import { radpop_radioBaseSchema } from "../other/radpop-radio/schemas";
import { su_ticketBaseSchema } from "../su-ticket/schemas";
import {
	radusuariosAtivoSchema,
	radusuariosAutenticacaoMacSchema,
	radusuariosAutenticacaoPorMacSchema,
	radusuariosAutenticacaoSchema,
	radusuariosAutenticacaoWpsSchema,
	radusuariosAutoPreencherIpSchema,
	radusuariosAutoPreencherIpv6Schema,
	radusuariosAutoPreencherMacSchema,
	radusuariosCacheSchema,
	radusuariosClienteTemASenhaSchema,
	radusuariosEnderecoPadraoClienteSchema,
	radusuariosFixarIpSchema,
	radusuariosFixarIpv6Schema,
	radusuariosFramedAutopreencherIpv6Schema,
	radusuariosFramedFixarIpv6Schema,
	radusuariosFramedRelacionaIpv6AoLoginSchema,
	radusuariosFramedRelacionarIpv6AoLoginSchema,
	radusuariosFranquiaAtingidaSchema,
	radusuariosOnlineSchema,
	radusuariosOnuCompartilhadaSchema,
	radusuariosPontaSchema,
	radusuariosRelacionarConcentradorAoLoginSchema,
	radusuariosRelacionarIpAoLoginSchema,
	radusuariosRelacionarIpv6AoLoginSchema,
	radusuariosRelacionarMacAoLoginSchema,
	radusuariosSenhaMd5Schema,
	radusuariosServiceTagVlanSchema,
	radusuariosTipoAcessoSchema,
	radusuariosTipoConexaoMapaSchema,
	radusuariosTipoEquipamentoSchema,
	radusuariosTipoVinculoPlanoSchema,
} from "./labels";

export const RADUSUARIOS_TABLE_NAME = "radusuarios";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const radusuariosBaseSchema = z.object({
	id: z.number(),
	acct_session_id: z.string(),
	agent_circuit_id: z.string(),
	apartamento: z.number(),
	ativo: radusuariosAtivoSchema,
	autenticacao: radusuariosAutenticacaoSchema,
	autenticacao_mac: radusuariosAutenticacaoMacSchema,
	autenticacao_por_mac: radusuariosAutenticacaoPorMacSchema,
	autenticacao_wpa: z.string(),
	autenticacao_wps: radusuariosAutenticacaoWpsSchema,
	auto_preencher_ip: radusuariosAutoPreencherIpSchema,
	auto_preencher_ipv6: radusuariosAutoPreencherIpv6Schema,
	auto_preencher_mac: radusuariosAutoPreencherMacSchema,
	bairro: z.string(),
	bloco: z.string(),
	cache: radusuariosCacheSchema,
	cep: z.string(),
	cidade: z.number(),
	cliente_tem_a_senha: radusuariosClienteTemASenhaSchema,
	complemento: z.string(),
	concentrador: z.string(),
	conexao: z.string(),
	count_desconexao: z.number(),
	download_atual: z.number(),
	endereco: z.string(),
	endereco_padrao_cliente: radusuariosEnderecoPadraoClienteSchema,
	fixar_ip: radusuariosFixarIpSchema,
	fixar_ipv6: radusuariosFixarIpv6Schema,
	framed_autopreencher_ipv6: radusuariosFramedAutopreencherIpv6Schema,
	framed_fixar_ipv6: radusuariosFramedFixarIpv6Schema,
	framed_pd_ipv6: z.string(),
	framed_relaciona_ipv6_ao_login: radusuariosFramedRelacionaIpv6AoLoginSchema,
	framed_relacionar_ipv6_ao_login: radusuariosFramedRelacionarIpv6AoLoginSchema,
	franquia_atingida: radusuariosFranquiaAtingidaSchema,
	franquia_consumo: z.number(),
	franquia_consumo_up: z.number(),
	franquia_maximo: z.number(),
	ftth_porta: z.number(),
	gw_vlan: z.string(),
	id_caixa_ftth: z.number(),
	id_cliente: z.number(),
	id_concentrador: z.number(),
	id_condominio: z.number(),
	id_contrato: z.number(),
	id_df_projeto: z.number(),
	id_filial: z.number(),
	id_grupo: z.number(),
	id_hardware: z.number(),
	id_integracao: z.number(),
	id_porta_transmissor: z.number(),
	id_predio: z.number(),
	id_rad_dns: z.number(),
	id_radgrupos_pools: z.number(),
	id_reserva_rede_neutra: z.number(),
	id_transmissor: z.number(),
	interface: z.number(),
	interface_transmissao: z.number(),
	ip: z.string(),
	ip_aux: z.string(),
	ip_aviso: z.string(),
	latitude: z.string(),
	login: z.string(),
	login_simultaneo: z.number(),
	longitude: z.string(),
	lte_apns: z.string(),
	lte_auth_key: z.string(),
	lte_auth_opc: z.string(),
	lte_id: z.string(),
	mac: z.string(),
	metragem_externa: z.number(),
	metragem_interna: z.number(),
	modelo_tranmissor: z.string(),
	motivo_desconexao: z.string(),
	mtu: z.number(),
	numero: z.string(),
	obs: z.string(),
	online: radusuariosOnlineSchema,
	onu_compartilhada: radusuariosOnuCompartilhadaSchema,
	onu_mac: z.string(),
	pacote_lte: z.string(),
	pd_ipv6: z.string(),
	perfil_autorizar_onu: z.number(),
	ponta: radusuariosPontaSchema,
	pool_radius: z.number(),
	porta_aux: z.number(),
	porta_http: z.string(),
	porta_router2: z.number(),
	referencia: z.string(),
	relacionar_concentrador_ao_login:
		radusuariosRelacionarConcentradorAoLoginSchema,
	relacionar_ip_ao_login: radusuariosRelacionarIpAoLoginSchema,
	relacionar_ipv6_ao_login: radusuariosRelacionarIpv6AoLoginSchema,
	relacionar_mac_ao_login: radusuariosRelacionarMacAoLoginSchema,
	rota: z.string(),
	senha: z.string(),
	senha_md5: radusuariosSenhaMd5Schema,
	senha_rede_sem_fio: z.string(),
	senha_rede_sem_fio_5ghz: z.string(),
	senha_router1: z.string(),
	senha_router2: z.string(),
	senha_wpa2aes: z.string(),
	service_tag_vlan: radusuariosServiceTagVlanSchema,
	sinal_ultimo_atendimento: z.string(),
	splitter: z.number(),
	ssid_router_wifi: z.string(),
	ssid_router_wifi_5ghz: z.string(),
	tempo_conectado: z.number(),
	tempo_conexao: z.number(),
	tipo_acesso: radusuariosTipoAcessoSchema,
	tipo_conexao: z.string(),
	tipo_conexao_mapa: radusuariosTipoConexaoMapaSchema,
	tipo_equipamento: radusuariosTipoEquipamentoSchema,
	tipo_vinculo_plano: radusuariosTipoVinculoPlanoSchema,
	tronco: z.string(),
	ultima_atualizacao: z.string(),
	ultima_conexao_final: z.string(),
	ultima_conexao_inicial: z.string(),
	upload_atual: z.number(),
	usuario_router1: z.string(),
	usuario_wpa2aes: z.string(),
	vlan: z.number(),
	vlan_ip_rede: z.string(),
});

// ============================================================
// RELATION SCHEMA (campos de relação)
// ============================================================
export const radusuariosRelationSchema = z.object({
	f_56j12v0kkzr: z.lazy(() => su_ticketBaseSchema.array()),
	f_contrato: z.lazy(() => cliente_contratoBaseSchema.array()),
	f_transmissores: z.lazy(() => radpop_radioBaseSchema.nullable()),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const radusuariosSchema = radusuariosBaseSchema.extend(
	radusuariosRelationSchema.shape,
);

// ============================================================
// CREATE SCHEMA
// ============================================================
export const radusuariosCreateSchema = radusuariosSchema.omit({
	f_56j12v0kkzr: true,
	f_contrato: true,
	f_transmissores: true,
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const radusuariosUpdateSchema = radusuariosCreateSchema.partial();
