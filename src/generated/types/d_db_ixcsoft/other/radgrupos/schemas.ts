/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	radgruposAlteracaoVelocidadeSchema,
	radgruposAtivaParametroV6JuniperSchema,
	radgruposAtivoNormalSchema,
	radgruposCiscoAtivoSchema,
	radgruposCiscoDinamicQosSchema,
	radgruposCiscoStaticQosSchema,
	radgruposDiciTipoConexaoMapaSchema,
	radgruposGeraParamAccelSchema,
	radgruposJuniperStaticPolicySchema,
	radgruposPrioridadeSchema,
	radgruposQosAtivoSchema,
	radgruposRedAtivoSchema,
	radgruposRedPrioridadeSchema,
	radgruposSiciDedicadoSchema,
	radgruposTipoFranquiaSchema,
	radgruposTipoIntegracaoNeutraSchema,
	radgruposTipoSchema,
	radgruposTurAtivoSchema,
	radgruposTurPrioridadeSchema,
	radgruposTypeBandControlSchema,
	radgruposUsaActiveSchema,
	radgruposUsaPerfilHuaweiDinamicoSchema,
	radgruposUsaPerfilHuaweiSchema,
	radgruposUsaPerfilNokiaDinamicoSchema,
	radgruposUsaPerfilNokiaSchema,
	radgruposUsarPerfilNokiaESchema,
} from "./labels";

export const RADGRUPOS_TABLE_NAME = "radgrupos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const radgruposBaseSchema = z.object({
	id: z.number(),
	address_list: z.string(),
	address_list_ipv6: z.string(),
	alteracao_velocidade: radgruposAlteracaoVelocidadeSchema,
	ativa_parametro_v6_juniper: radgruposAtivaParametroV6JuniperSchema,
	ativo_normal: radgruposAtivoNormalSchema,
	cisco_ativo: radgruposCiscoAtivoSchema,
	cisco_dinamic_qos: radgruposCiscoDinamicQosSchema,
	cisco_police_in: z.string(),
	cisco_police_out: z.string(),
	cisco_static_qos: radgruposCiscoStaticQosSchema,
	cor_mapa: z.string(),
	dici_download: z.string(),
	dici_tipo_conexao_mapa: radgruposDiciTipoConexaoMapaSchema,
	download: z.string(),
	download_busrt: z.string(),
	download_busrt_th: z.string(),
	download_busrt_time: z.string(),
	egress_cisco_policy_ipv6: z.string(),
	egress_juniper_policy_ipv4: z.string(),
	egress_juniper_policy_ipv6: z.string(),
	egress_juniper_policy_l2: z.string(),
	franquia_mensal: z.number(),
	garantia_download: z.string(),
	garantia_upload: z.string(),
	gera_param_accel: radgruposGeraParamAccelSchema,
	grupo: z.string(),
	horas_normal: z.string(),
	horas_reduzido: z.string(),
	horas_turbinado: z.string(),
	id_plano_atraso: z.number(),
	id_plano_franquia: z.number(),
	id_plano_reduzir: z.number(),
	id_plano_turbinar: z.number(),
	id_pool: z.number(),
	id_produto: z.number(),
	id_rad_dns: z.number(),
	id_radgrupo_planos: z.number(),
	id_sub_projeto: z.number(),
	ingress_cisco_policy_ipv6: z.string(),
	ingress_juniper_policy_ipv4: z.string(),
	ingress_juniper_policy_ipv6: z.string(),
	ingress_juniper_policy_l2: z.string(),
	juniper_static_policy: radgruposJuniperStaticPolicySchema,
	nome_perfil_router: z.string(),
	nome_perfil_router_huawei: z.string(),
	nome_perfil_router_nokia: z.string(),
	olt_hw_download: z.string(),
	olt_hw_upload: z.string(),
	operador_neutro: z.number(),
	pacote_integracao: z.string(),
	perfil_fiberhome: z.string(),
	perfil_juniper_ipv6: z.string(),
	plano_velocidade_neutro: z.string(),
	prioridade: radgruposPrioridadeSchema,
	qos_ativo: radgruposQosAtivoSchema,
	rate_limit: z.string(),
	red_ativo: radgruposRedAtivoSchema,
	red_download: z.string(),
	red_download_busrt: z.string(),
	red_download_busrt_th: z.string(),
	red_download_busrt_time: z.string(),
	red_garantia_download: z.string(),
	red_garantia_upload: z.string(),
	red_prioridade: radgruposRedPrioridadeSchema,
	red_upload: z.string(),
	red_upload_busrt: z.string(),
	red_upload_busrt_th: z.string(),
	red_upload_busrt_time: z.string(),
	reduzir_dias_atraso: z.number(),
	service_type: z.string(),
	sici_dedicado: radgruposSiciDedicadoSchema,
	sici_faixa_veloc: z.number(),
	sici_tecnologia: z.string(),
	tempo_aviso: z.string(),
	tipo: radgruposTipoSchema,
	tipo_franquia: radgruposTipoFranquiaSchema,
	tipo_integracao_neutra: radgruposTipoIntegracaoNeutraSchema,
	tur_ativo: radgruposTurAtivoSchema,
	tur_download: z.string(),
	tur_download_busrt: z.string(),
	tur_download_busrt_th: z.string(),
	tur_download_busrt_time: z.string(),
	tur_garantia_download: z.string(),
	tur_garantia_upload: z.string(),
	tur_prioridade: radgruposTurPrioridadeSchema,
	tur_upload: z.string(),
	tur_upload_busrt: z.string(),
	tur_upload_busrt_th: z.string(),
	tur_upload_busrt_time: z.string(),
	type_band_control: radgruposTypeBandControlSchema,
	ultima_atualizacao: z.string(),
	upload: z.string(),
	upload_busrt: z.string(),
	upload_busrt_th: z.string(),
	upload_busrt_time: z.string(),
	url_aviso: z.string(),
	usa_active: radgruposUsaActiveSchema,
	usa_perfil_huawei: radgruposUsaPerfilHuaweiSchema,
	usa_perfil_huawei_dinamico: radgruposUsaPerfilHuaweiDinamicoSchema,
	usa_perfil_nokia: radgruposUsaPerfilNokiaSchema,
	usa_perfil_nokia_dinamico: radgruposUsaPerfilNokiaDinamicoSchema,
	usar_perfil_nokia_e: radgruposUsarPerfilNokiaESchema,
	valor_produto: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const radgruposSchema = radgruposBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const radgruposCreateSchema = radgruposSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const radgruposUpdateSchema = radgruposCreateSchema.partial();
