/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";
import {
	age_veiculosCategoriaFipeSchema,
	age_veiculosDestaqueSchema,
	age_veiculosOpcAbsEbdSchema,
	age_veiculosOpcAirBagSchema,
	age_veiculosOpcAlarmeSchema,
	age_veiculosOpcArCondicionadoSchema,
	age_veiculosOpcArQuenteSchema,
	age_veiculosOpcBancosComRegulagemDeAlturaSchema,
	age_veiculosOpcBancosEletricosSchema,
	age_veiculosOpcBancosEmCouroSchema,
	age_veiculosOpcCambioAutomaticoSchema,
	age_veiculosOpcCapotaMaritimaSchema,
	age_veiculosOpcCdPlayerComMp3Schema,
	age_veiculosOpcComputadorDeBordoSchema,
	age_veiculosOpcControleDoSomNoVolanteSchema,
	age_veiculosOpcDesembacadorTraseiroSchema,
	age_veiculosOpcDirecaoEletricaSchema,
	age_veiculosOpcDirecaoHidraulicaSchema,
	age_veiculosOpcFaroisDirecionaisSchema,
	age_veiculosOpcGpsSchema,
	age_veiculosOpcLimpadorTraseiroSchema,
	age_veiculosOpcProtetorDeCacambaSchema,
	age_veiculosOpcRetrovisoresEletricosSchema,
	age_veiculosOpcRodasDeLigaLeveSchema,
	age_veiculosOpcSensorCrepuscularSchema,
	age_veiculosOpcSensorDeChuvaSchema,
	age_veiculosOpcSensorDeEstacionamentoSchema,
	age_veiculosOpcTracao4x4Schema,
	age_veiculosOpcTravaEletricaSchema,
	age_veiculosOpcTrioEletricoSchema,
	age_veiculosOpcVidrosEletricosSchema,
	age_veiculosOpcVidrosVerdesSchema,
	age_veiculosOpcXenonSchema,
	age_veiculosPublicadoSchema,
} from "./labels";

export const AGE_VEICULOS_TABLE_NAME = "age_veiculos";

// ============================================================
// BASE SCHEMA (campos escalares)
// ============================================================
export const age_veiculosBaseSchema = z.object({
	id: z.number(),
	ano_fabricacao: z.number(),
	ano_modelo: z.number(),
	categoria_fipe: age_veiculosCategoriaFipeSchema,
	cavalaria: z.number(),
	chassi: z.string(),
	cilindradas: z.number(),
	combustivel: z.string(),
	comprador: z.number(),
	cor: z.string(),
	data_compra: z.string(),
	data_venda: z.string(),
	destaque: age_veiculosDestaqueSchema,
	id_marca: z.number(),
	id_modelo: z.number(),
	id_produto: z.number(),
	motorizacao: z.string(),
	opc_abs_ebd: age_veiculosOpcAbsEbdSchema,
	opc_air_bag: age_veiculosOpcAirBagSchema,
	opc_alarme: age_veiculosOpcAlarmeSchema,
	opc_ar_condicionado: age_veiculosOpcArCondicionadoSchema,
	opc_ar_quente: age_veiculosOpcArQuenteSchema,
	opc_bancos_com_regulagem_de_altura:
		age_veiculosOpcBancosComRegulagemDeAlturaSchema,
	opc_bancos_eletricos: age_veiculosOpcBancosEletricosSchema,
	opc_bancos_em_couro: age_veiculosOpcBancosEmCouroSchema,
	opc_cambio_automatico: age_veiculosOpcCambioAutomaticoSchema,
	opc_capota_maritima: age_veiculosOpcCapotaMaritimaSchema,
	opc_cd_player_com_mp3: age_veiculosOpcCdPlayerComMp3Schema,
	opc_computador_de_bordo: age_veiculosOpcComputadorDeBordoSchema,
	opc_controle_do_som_no_volante: age_veiculosOpcControleDoSomNoVolanteSchema,
	opc_desembacador_traseiro: age_veiculosOpcDesembacadorTraseiroSchema,
	opc_direcao_eletrica: age_veiculosOpcDirecaoEletricaSchema,
	opc_direcao_hidraulica: age_veiculosOpcDirecaoHidraulicaSchema,
	opc_farois_direcionais: age_veiculosOpcFaroisDirecionaisSchema,
	opc_gps: age_veiculosOpcGpsSchema,
	opc_limpador_traseiro: age_veiculosOpcLimpadorTraseiroSchema,
	opc_protetor_de_cacamba: age_veiculosOpcProtetorDeCacambaSchema,
	opc_retrovisores_eletricos: age_veiculosOpcRetrovisoresEletricosSchema,
	opc_rodas_de_liga_leve: age_veiculosOpcRodasDeLigaLeveSchema,
	opc_sensor_crepuscular: age_veiculosOpcSensorCrepuscularSchema,
	opc_sensor_de_chuva: age_veiculosOpcSensorDeChuvaSchema,
	opc_sensor_de_estacionamento: age_veiculosOpcSensorDeEstacionamentoSchema,
	opc_tracao_4x4: age_veiculosOpcTracao4x4Schema,
	opc_trava_eletrica: age_veiculosOpcTravaEletricaSchema,
	opc_trio_eletrico: age_veiculosOpcTrioEletricoSchema,
	opc_vidros_eletricos: age_veiculosOpcVidrosEletricosSchema,
	opc_vidros_verdes: age_veiculosOpcVidrosVerdesSchema,
	opc_xenon: age_veiculosOpcXenonSchema,
	placa: z.string(),
	portas: z.number(),
	publicado: age_veiculosPublicadoSchema,
	relevancia: z.number(),
	relevencia: z.number(),
	renavam: z.string(),
	valor_compra: z.number(),
	valor_venda: z.number(),
});

// ============================================================
// SCHEMA PRINCIPAL (validação completa)
// ============================================================
export const age_veiculosSchema = age_veiculosBaseSchema;

// ============================================================
// CREATE SCHEMA
// ============================================================
export const age_veiculosCreateSchema = age_veiculosSchema.omit({
	id: true,
});

// ============================================================
// UPDATE SCHEMA
// ============================================================
export const age_veiculosUpdateSchema = age_veiculosCreateSchema.partial();
