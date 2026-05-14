/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const RADHARDWARE_FIELD_LABELS = {
	ativo: "ativo",
	fabricante: "fabricante",
	hardware: "hardware",
	hardware_tipo: "hardware_tipo",
	id: "id",
	imagem: "imagem",
	login: "login",
	obs: "obs",
	porta_ssh: "porta_ssh",
	porta_telnet: "porta_telnet",
	qtd_portas: "qtd_portas",
	script: "script",
	tipo: "tipo",
} as const;

export const RADHARDWARE_ATIVO_LABELS = {
	S: "S",
	N: "N",
} as const;

export const RADHARDWARE_TIPO_LABELS = {
	R: "R",
	F: "F",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const rad_hardwareAtivoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "ativo: valores válidos são [S, N]" }),
});

export const rad_hardwareTipoSchema = z.enum(["R", "F"], {
	error: () => ({ message: "tipo: valores válidos são [R, F]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type RadHardwareAtivo = z.infer<typeof rad_hardwareAtivoSchema>;

export type RadHardwareTipo = z.infer<typeof rad_hardwareTipoSchema>;
