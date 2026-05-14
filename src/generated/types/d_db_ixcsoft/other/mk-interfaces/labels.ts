/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const MKINTERFACES_FIELD_LABELS = {
	comment: "comment",
	disabled: "disabled",
	dynamic: "dynamic",
	id: "id",
	id_concentrador: "id_concentrador",
	id_interface: "id_interface",
	interface_radius: "interface_radius",
	mac: "mac",
	mtu: "mtu",
	name: "name",
	running: "running",
	sincronizado: "sincronizado",
	slave: "slave",
	type: "type",
} as const;

export const MKINTERFACES_INTERFACERADIUS_LABELS = {
	S: "S",
	N: "N",
} as const;

export const MKINTERFACES_SINCRONIZADO_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const mk_interfacesInterfaceRadiusSchema = z.enum(["S", "N"], {
	error: () => ({ message: "interface_radius: valores válidos são [S, N]" }),
});

export const mk_interfacesSincronizadoSchema = z.enum(["S", "N"], {
	error: () => ({ message: "sincronizado: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type MkInterfacesInterfaceRadius = z.infer<
	typeof mk_interfacesInterfaceRadiusSchema
>;

export type MkInterfacesSincronizado = z.infer<
	typeof mk_interfacesSincronizadoSchema
>;
