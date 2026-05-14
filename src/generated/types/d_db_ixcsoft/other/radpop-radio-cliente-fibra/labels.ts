/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const RADPOPRADIOCLIENTEFIBRA_FIELD_LABELS = {
	apartamento: "apartamento",
	bairro: "bairro",
	bloco: "bloco",
	causa_ultima_queda: "causa_ultima_queda",
	cep: "cep",
	cidade: "cidade",
	comandos: "comandos",
	complemento: "complemento",
	data_sinal: "data_sinal",
	distancia_onu: "distancia_onu",
	endereco: "endereco",
	endereco_padrao_cliente: "endereco_padrao_cliente",
	frame: "frame",
	gemport: "gemport",
	id: "id",
	id_activity: "id_activity",
	id_caixa_ftth: "id_caixa_ftth",
	id_condominio: "id_condominio",
	id_contrato: "id_contrato",
	id_hardware: "id_hardware",
	id_login: "id_login",
	id_onu_unms: "id_onu_unms",
	id_perfil: "id_perfil",
	id_projeto: "id_projeto",
	id_radpop_radio_porta: "id_radpop_radio_porta",
	id_ramal: "id_ramal",
	id_transmissor: "id_transmissor",
	ip_gerencia: "ip_gerencia",
	latitude: "latitude",
	login_onu_cliente: "login_onu_cliente",
	longitude: "longitude",
	mac: "mac",
	nome: "nome",
	numero: "numero",
	onu_compartilhada: "onu_compartilhada",
	onu_numero: "onu_numero",
	onu_rede_neutra: "onu_rede_neutra",
	onu_tipo: "onu_tipo",
	perfil_onu_cliente: "perfil_onu_cliente",
	ponid: "ponid",
	ponno: "ponno",
	porta_ftth: "porta_ftth",
	porta_telnet_onu_cliente: "porta_telnet_onu_cliente",
	porta_web_onu_cliente: "porta_web_onu_cliente",
	posicao_inconsistente: "posicao_inconsistente",
	rack: "rack",
	radpop_estrutura: "radpop_estrutura",
	referencia: "referencia",
	script_onu_cliente: "script_onu_cliente",
	senha_onu_cliente: "senha_onu_cliente",
	senha_pppoe_hub: "senha_pppoe_hub",
	senorid: "senorid",
	serial_number: "serial_number",
	service_port: "service_port",
	sinal_rx: "sinal_rx",
	sinal_tx: "sinal_tx",
	slotno: "slotno",
	status_autorizado: "status_autorizado",
	status_potencia: "status_potencia",
	temperatura: "temperatura",
	tipo_autenticacao: "tipo_autenticacao",
	tipo_operacao: "tipo_operacao",
	ultima_atualizacao: "ultima_atualizacao",
	usuario_pppoe_hub: "usuario_pppoe_hub",
	valores_antigos: "valores_antigos",
	versao: "versao",
	vlan: "vlan",
	vlan_dhcp: "vlan_dhcp",
	vlan_iptv: "vlan_iptv",
	vlan_outros: "vlan_outros",
	vlan_pppoe: "vlan_pppoe",
	vlan_tr69: "vlan_tr69",
	vlan_voip: "vlan_voip",
	voltagem: "voltagem",
} as const;

export const RADPOPRADIOCLIENTEFIBRA_ENDERECOPADRAOCLIENTE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RADPOPRADIOCLIENTEFIBRA_ONUCOMPARTILHADA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RADPOPRADIOCLIENTEFIBRA_ONUREDENEUTRA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RADPOPRADIOCLIENTEFIBRA_POSICAOINCONSISTENTE_LABELS = {
	N: "N",
	S: "S",
} as const;

export const RADPOPRADIOCLIENTEFIBRA_RADPOPESTRUTURA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RADPOPRADIOCLIENTEFIBRA_STATUSAUTORIZADO_LABELS = {
	NA: "NA",
	A: "A",
} as const;

export const RADPOPRADIOCLIENTEFIBRA_STATUSPOTENCIA_LABELS = {
	regular: "regular",
	irregular: "irregular",
	indefinido: "indefinido",
} as const;

export const RADPOPRADIOCLIENTEFIBRA_TIPOOPERACAO_LABELS = {
	B: "B",
	R: "R",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const radpop_radio_cliente_fibraEnderecoPadraoClienteSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "endereco_padrao_cliente: valores válidos são [S, N]",
		}),
	},
);

export const radpop_radio_cliente_fibraOnuCompartilhadaSchema = z.enum(
	["S", "N"],
	{
		error: () => ({ message: "onu_compartilhada: valores válidos são [S, N]" }),
	},
);

export const radpop_radio_cliente_fibraOnuRedeNeutraSchema = z.enum(
	["S", "N"],
	{
		error: () => ({ message: "onu_rede_neutra: valores válidos são [S, N]" }),
	},
);

export const radpop_radio_cliente_fibraPosicaoInconsistenteSchema = z.enum(
	["N", "S"],
	{
		error: () => ({
			message: "posicao_inconsistente: valores válidos são [N, S]",
		}),
	},
);

export const radpop_radio_cliente_fibraRadpopEstruturaSchema = z.enum(
	["S", "N"],
	{
		error: () => ({ message: "radpop_estrutura: valores válidos são [S, N]" }),
	},
);

export const radpop_radio_cliente_fibraStatusAutorizadoSchema = z.enum(
	["NA", "A"],
	{
		error: () => ({
			message: "status_autorizado: valores válidos são [NA, A]",
		}),
	},
);

export const radpop_radio_cliente_fibraStatusPotenciaSchema = z.enum(
	["regular", "irregular", "indefinido"],
	{
		error: () => ({
			message:
				"status_potencia: valores válidos são [regular, irregular, indefinido]",
		}),
	},
);

export const radpop_radio_cliente_fibraTipoOperacaoSchema = z.enum(["B", "R"], {
	error: () => ({ message: "tipo_operacao: valores válidos são [B, R]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type RadpopRadioClienteFibraEnderecoPadraoCliente = z.infer<
	typeof radpop_radio_cliente_fibraEnderecoPadraoClienteSchema
>;

export type RadpopRadioClienteFibraOnuCompartilhada = z.infer<
	typeof radpop_radio_cliente_fibraOnuCompartilhadaSchema
>;

export type RadpopRadioClienteFibraOnuRedeNeutra = z.infer<
	typeof radpop_radio_cliente_fibraOnuRedeNeutraSchema
>;

export type RadpopRadioClienteFibraPosicaoInconsistente = z.infer<
	typeof radpop_radio_cliente_fibraPosicaoInconsistenteSchema
>;

export type RadpopRadioClienteFibraRadpopEstrutura = z.infer<
	typeof radpop_radio_cliente_fibraRadpopEstruturaSchema
>;

export type RadpopRadioClienteFibraStatusAutorizado = z.infer<
	typeof radpop_radio_cliente_fibraStatusAutorizadoSchema
>;

export type RadpopRadioClienteFibraStatusPotencia = z.infer<
	typeof radpop_radio_cliente_fibraStatusPotenciaSchema
>;

export type RadpopRadioClienteFibraTipoOperacao = z.infer<
	typeof radpop_radio_cliente_fibraTipoOperacaoSchema
>;
