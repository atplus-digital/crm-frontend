/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	radpop_radio_cliente_fibraEnderecoPadraoClienteSchema,
	radpop_radio_cliente_fibraOnuCompartilhadaSchema,
	radpop_radio_cliente_fibraOnuRedeNeutraSchema,
	radpop_radio_cliente_fibraPosicaoInconsistenteSchema,
	radpop_radio_cliente_fibraRadpopEstruturaSchema,
	radpop_radio_cliente_fibraStatusAutorizadoSchema,
	radpop_radio_cliente_fibraStatusPotenciaSchema,
	radpop_radio_cliente_fibraTipoOperacaoSchema,
} from "./labels";

export const RADPOP_RADIO_CLIENTE_FIBRA_TABLE_NAME =
	"radpop_radio_cliente_fibra";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const radpop_radio_cliente_fibraBaseSchema = z.object({
	id: z.number(),
	apartamento: z.number(),
	bairro: z.string(),
	bloco: z.string(),
	causa_ultima_queda: z.string(),
	cep: z.string(),
	cidade: z.number(),
	comandos: z.string(),
	complemento: z.string(),
	data_sinal: z.string(),
	distancia_onu: z.string(),
	endereco: z.string(),
	endereco_padrao_cliente:
		radpop_radio_cliente_fibraEnderecoPadraoClienteSchema,
	frame: z.number(),
	gemport: z.string(),
	id_activity: z.number(),
	id_caixa_ftth: z.number(),
	id_condominio: z.number(),
	id_contrato: z.number(),
	id_hardware: z.number(),
	id_login: z.number(),
	id_onu_unms: z.string(),
	id_perfil: z.number(),
	id_projeto: z.number(),
	id_radpop_radio_porta: z.number(),
	id_ramal: z.number(),
	id_transmissor: z.number(),
	ip_gerencia: z.string(),
	latitude: z.string(),
	login_onu_cliente: z.string(),
	longitude: z.string(),
	mac: z.string(),
	nome: z.string(),
	numero: z.string(),
	onu_compartilhada: radpop_radio_cliente_fibraOnuCompartilhadaSchema,
	onu_numero: z.number(),
	onu_rede_neutra: radpop_radio_cliente_fibraOnuRedeNeutraSchema,
	onu_tipo: z.string(),
	perfil_onu_cliente: z.number(),
	ponid: z.string(),
	ponno: z.number(),
	porta_ftth: z.number(),
	porta_telnet_onu_cliente: z.string(),
	porta_web_onu_cliente: z.number(),
	posicao_inconsistente: radpop_radio_cliente_fibraPosicaoInconsistenteSchema,
	rack: z.number(),
	radpop_estrutura: radpop_radio_cliente_fibraRadpopEstruturaSchema,
	referencia: z.string(),
	script_onu_cliente: z.string(),
	senha_onu_cliente: z.string(),
	senha_pppoe_hub: z.string(),
	senorid: z.string(),
	serial_number: z.string(),
	service_port: z.string(),
	sinal_rx: z.number(),
	sinal_tx: z.number(),
	slotno: z.number(),
	status_autorizado: radpop_radio_cliente_fibraStatusAutorizadoSchema,
	status_potencia: radpop_radio_cliente_fibraStatusPotenciaSchema,
	temperatura: z.number(),
	tipo_autenticacao: z.string(),
	tipo_operacao: radpop_radio_cliente_fibraTipoOperacaoSchema,
	ultima_atualizacao: z.string(),
	usuario_pppoe_hub: z.string(),
	valores_antigos: z.string(),
	versao: z.string(),
	vlan: z.number(),
	vlan_dhcp: z.string(),
	vlan_iptv: z.string(),
	vlan_outros: z.string(),
	vlan_pppoe: z.string(),
	vlan_tr69: z.string(),
	vlan_voip: z.string(),
	voltagem: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const radpop_radio_cliente_fibraSchema =
	radpop_radio_cliente_fibraBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const radpop_radio_cliente_fibraCreateSchema =
	radpop_radio_cliente_fibraSchema.omit({
		id: true,
	});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const radpop_radio_cliente_fibraUpdateSchema =
	radpop_radio_cliente_fibraCreateSchema.partial();
