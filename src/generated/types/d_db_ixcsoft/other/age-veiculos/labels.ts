/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const AGEVEICULOS_CATEGORIAFIPE_LABELS = {
	U: "U",
	M: "M",
	C: "C",
} as const;

export const AGEVEICULOS_DESTAQUE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const AGEVEICULOS_OPCABSEBD_LABELS = {
	S: "S",
	N: "N",
} as const;

export const AGEVEICULOS_OPCAIRBAG_LABELS = {
	S: "S",
	N: "N",
} as const;

export const AGEVEICULOS_OPCALARME_LABELS = {
	S: "S",
	N: "N",
} as const;

export const AGEVEICULOS_OPCARCONDICIONADO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const AGEVEICULOS_OPCARQUENTE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const AGEVEICULOS_OPCBANCOSCOMREGULAGEMDEALTURA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const AGEVEICULOS_OPCBANCOSELETRICOS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const AGEVEICULOS_OPCBANCOSEMCOURO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const AGEVEICULOS_OPCCAMBIOAUTOMATICO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const AGEVEICULOS_OPCCAPOTAMARITIMA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const AGEVEICULOS_OPCCDPLAYERCOMMP3_LABELS = {
	S: "S",
	N: "N",
} as const;

export const AGEVEICULOS_OPCCOMPUTADORDEBORDO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const AGEVEICULOS_OPCCONTROLEDOSOMNOVOLANTE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const AGEVEICULOS_OPCDESEMBACADORTRASEIRO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const AGEVEICULOS_OPCDIRECAOELETRICA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const AGEVEICULOS_OPCDIRECAOHIDRAULICA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const AGEVEICULOS_OPCFAROISDIRECIONAIS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const AGEVEICULOS_OPCGPS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const AGEVEICULOS_OPCLIMPADORTRASEIRO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const AGEVEICULOS_OPCPROTETORDECACAMBA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const AGEVEICULOS_OPCRETROVISORESELETRICOS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const AGEVEICULOS_OPCRODASDELIGALEVE_LABELS = {
	S: "S",
	N: "N",
} as const;

export const AGEVEICULOS_OPCSENSORCREPUSCULAR_LABELS = {
	S: "S",
	N: "N",
} as const;

export const AGEVEICULOS_OPCSENSORDECHUVA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const AGEVEICULOS_OPCSENSORDEESTACIONAMENTO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const AGEVEICULOS_OPCTRACAO4X4_LABELS = {
	S: "S",
	N: "N",
} as const;

export const AGEVEICULOS_OPCTRAVAELETRICA_LABELS = {
	S: "S",
	N: "N",
} as const;

export const AGEVEICULOS_OPCTRIOELETRICO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const AGEVEICULOS_OPCVIDROSELETRICOS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const AGEVEICULOS_OPCVIDROSVERDES_LABELS = {
	S: "S",
	N: "N",
} as const;

export const AGEVEICULOS_OPCXENON_LABELS = {
	S: "S",
	N: "N",
} as const;

export const AGEVEICULOS_PUBLICADO_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const age_veiculosCategoriaFipeSchema = z.enum(["U", "M", "C"], {
	error: () => ({ message: "categoria_fipe: valores válidos são [U, M, C]" }),
});

export const age_veiculosDestaqueSchema = z.enum(["S", "N"], {
	error: () => ({ message: "destaque: valores válidos são [S, N]" }),
});

export const age_veiculosOpcAbsEbdSchema = z.enum(["S", "N"], {
	error: () => ({ message: "opc_abs_ebd: valores válidos são [S, N]" }),
});

export const age_veiculosOpcAirBagSchema = z.enum(["S", "N"], {
	error: () => ({ message: "opc_air_bag: valores válidos são [S, N]" }),
});

export const age_veiculosOpcAlarmeSchema = z.enum(["S", "N"], {
	error: () => ({ message: "opc_alarme: valores válidos são [S, N]" }),
});

export const age_veiculosOpcArCondicionadoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "opc_ar_condicionado: valores válidos são [S, N]" }),
});

export const age_veiculosOpcArQuenteSchema = z.enum(["S", "N"], {
	error: () => ({ message: "opc_ar_quente: valores válidos são [S, N]" }),
});

export const age_veiculosOpcBancosComRegulagemDeAlturaSchema = z.enum(
	["S", "N"],
	{
		error: () => ({
			message: "opc_bancos_com_regulagem_de_altura: valores válidos são [S, N]",
		}),
	},
);

export const age_veiculosOpcBancosEletricosSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "opc_bancos_eletricos: valores válidos são [S, N]",
	}),
});

export const age_veiculosOpcBancosEmCouroSchema = z.enum(["S", "N"], {
	error: () => ({ message: "opc_bancos_em_couro: valores válidos são [S, N]" }),
});

export const age_veiculosOpcCambioAutomaticoSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "opc_cambio_automatico: valores válidos são [S, N]",
	}),
});

export const age_veiculosOpcCapotaMaritimaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "opc_capota_maritima: valores válidos são [S, N]" }),
});

export const age_veiculosOpcCdPlayerComMp3Schema = z.enum(["S", "N"], {
	error: () => ({
		message: "opc_cd_player_com_mp3: valores válidos são [S, N]",
	}),
});

export const age_veiculosOpcComputadorDeBordoSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "opc_computador_de_bordo: valores válidos são [S, N]",
	}),
});

export const age_veiculosOpcControleDoSomNoVolanteSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "opc_controle_do_som_no_volante: valores válidos são [S, N]",
	}),
});

export const age_veiculosOpcDesembacadorTraseiroSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "opc_desembacador_traseiro: valores válidos são [S, N]",
	}),
});

export const age_veiculosOpcDirecaoEletricaSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "opc_direcao_eletrica: valores válidos são [S, N]",
	}),
});

export const age_veiculosOpcDirecaoHidraulicaSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "opc_direcao_hidraulica: valores válidos são [S, N]",
	}),
});

export const age_veiculosOpcFaroisDirecionaisSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "opc_farois_direcionais: valores válidos são [S, N]",
	}),
});

export const age_veiculosOpcGpsSchema = z.enum(["S", "N"], {
	error: () => ({ message: "opc_gps: valores válidos são [S, N]" }),
});

export const age_veiculosOpcLimpadorTraseiroSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "opc_limpador_traseiro: valores válidos são [S, N]",
	}),
});

export const age_veiculosOpcProtetorDeCacambaSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "opc_protetor_de_cacamba: valores válidos são [S, N]",
	}),
});

export const age_veiculosOpcRetrovisoresEletricosSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "opc_retrovisores_eletricos: valores válidos são [S, N]",
	}),
});

export const age_veiculosOpcRodasDeLigaLeveSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "opc_rodas_de_liga_leve: valores válidos são [S, N]",
	}),
});

export const age_veiculosOpcSensorCrepuscularSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "opc_sensor_crepuscular: valores válidos são [S, N]",
	}),
});

export const age_veiculosOpcSensorDeChuvaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "opc_sensor_de_chuva: valores válidos são [S, N]" }),
});

export const age_veiculosOpcSensorDeEstacionamentoSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "opc_sensor_de_estacionamento: valores válidos são [S, N]",
	}),
});

export const age_veiculosOpcTracao4x4Schema = z.enum(["S", "N"], {
	error: () => ({ message: "opc_tracao_4x4: valores válidos são [S, N]" }),
});

export const age_veiculosOpcTravaEletricaSchema = z.enum(["S", "N"], {
	error: () => ({ message: "opc_trava_eletrica: valores válidos são [S, N]" }),
});

export const age_veiculosOpcTrioEletricoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "opc_trio_eletrico: valores válidos são [S, N]" }),
});

export const age_veiculosOpcVidrosEletricosSchema = z.enum(["S", "N"], {
	error: () => ({
		message: "opc_vidros_eletricos: valores válidos são [S, N]",
	}),
});

export const age_veiculosOpcVidrosVerdesSchema = z.enum(["S", "N"], {
	error: () => ({ message: "opc_vidros_verdes: valores válidos são [S, N]" }),
});

export const age_veiculosOpcXenonSchema = z.enum(["S", "N"], {
	error: () => ({ message: "opc_xenon: valores válidos são [S, N]" }),
});

export const age_veiculosPublicadoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "publicado: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type AgeVeiculosCategoriaFipe = z.infer<
	typeof age_veiculosCategoriaFipeSchema
>;

export type AgeVeiculosDestaque = z.infer<typeof age_veiculosDestaqueSchema>;

export type AgeVeiculosOpcAbsEbd = z.infer<typeof age_veiculosOpcAbsEbdSchema>;

export type AgeVeiculosOpcAirBag = z.infer<typeof age_veiculosOpcAirBagSchema>;

export type AgeVeiculosOpcAlarme = z.infer<typeof age_veiculosOpcAlarmeSchema>;

export type AgeVeiculosOpcArCondicionado = z.infer<
	typeof age_veiculosOpcArCondicionadoSchema
>;

export type AgeVeiculosOpcArQuente = z.infer<
	typeof age_veiculosOpcArQuenteSchema
>;

export type AgeVeiculosOpcBancosComRegulagemDeAltura = z.infer<
	typeof age_veiculosOpcBancosComRegulagemDeAlturaSchema
>;

export type AgeVeiculosOpcBancosEletricos = z.infer<
	typeof age_veiculosOpcBancosEletricosSchema
>;

export type AgeVeiculosOpcBancosEmCouro = z.infer<
	typeof age_veiculosOpcBancosEmCouroSchema
>;

export type AgeVeiculosOpcCambioAutomatico = z.infer<
	typeof age_veiculosOpcCambioAutomaticoSchema
>;

export type AgeVeiculosOpcCapotaMaritima = z.infer<
	typeof age_veiculosOpcCapotaMaritimaSchema
>;

export type AgeVeiculosOpcCdPlayerComMp3 = z.infer<
	typeof age_veiculosOpcCdPlayerComMp3Schema
>;

export type AgeVeiculosOpcComputadorDeBordo = z.infer<
	typeof age_veiculosOpcComputadorDeBordoSchema
>;

export type AgeVeiculosOpcControleDoSomNoVolante = z.infer<
	typeof age_veiculosOpcControleDoSomNoVolanteSchema
>;

export type AgeVeiculosOpcDesembacadorTraseiro = z.infer<
	typeof age_veiculosOpcDesembacadorTraseiroSchema
>;

export type AgeVeiculosOpcDirecaoEletrica = z.infer<
	typeof age_veiculosOpcDirecaoEletricaSchema
>;

export type AgeVeiculosOpcDirecaoHidraulica = z.infer<
	typeof age_veiculosOpcDirecaoHidraulicaSchema
>;

export type AgeVeiculosOpcFaroisDirecionais = z.infer<
	typeof age_veiculosOpcFaroisDirecionaisSchema
>;

export type AgeVeiculosOpcGps = z.infer<typeof age_veiculosOpcGpsSchema>;

export type AgeVeiculosOpcLimpadorTraseiro = z.infer<
	typeof age_veiculosOpcLimpadorTraseiroSchema
>;

export type AgeVeiculosOpcProtetorDeCacamba = z.infer<
	typeof age_veiculosOpcProtetorDeCacambaSchema
>;

export type AgeVeiculosOpcRetrovisoresEletricos = z.infer<
	typeof age_veiculosOpcRetrovisoresEletricosSchema
>;

export type AgeVeiculosOpcRodasDeLigaLeve = z.infer<
	typeof age_veiculosOpcRodasDeLigaLeveSchema
>;

export type AgeVeiculosOpcSensorCrepuscular = z.infer<
	typeof age_veiculosOpcSensorCrepuscularSchema
>;

export type AgeVeiculosOpcSensorDeChuva = z.infer<
	typeof age_veiculosOpcSensorDeChuvaSchema
>;

export type AgeVeiculosOpcSensorDeEstacionamento = z.infer<
	typeof age_veiculosOpcSensorDeEstacionamentoSchema
>;

export type AgeVeiculosOpcTracao4x4 = z.infer<
	typeof age_veiculosOpcTracao4x4Schema
>;

export type AgeVeiculosOpcTravaEletrica = z.infer<
	typeof age_veiculosOpcTravaEletricaSchema
>;

export type AgeVeiculosOpcTrioEletrico = z.infer<
	typeof age_veiculosOpcTrioEletricoSchema
>;

export type AgeVeiculosOpcVidrosEletricos = z.infer<
	typeof age_veiculosOpcVidrosEletricosSchema
>;

export type AgeVeiculosOpcVidrosVerdes = z.infer<
	typeof age_veiculosOpcVidrosVerdesSchema
>;

export type AgeVeiculosOpcXenon = z.infer<typeof age_veiculosOpcXenonSchema>;

export type AgeVeiculosPublicado = z.infer<typeof age_veiculosPublicadoSchema>;
