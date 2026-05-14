/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const SERVIDORSPEEDTEST_FIELD_LABELS = {
	apache: "apache",
	certificado_ca: "certificado_ca",
	certificado_crt: "certificado_crt",
	certificado_csr: "certificado_csr",
	certificado_key: "certificado_key",
	id: "id",
	nome: "nome",
	nome_ssls: "nome_ssls",
	online: "online",
	servidor_caminho: "servidor_caminho",
	servidor_instalacao: "servidor_instalacao",
	servidor_ping: "servidor_ping",
	servidor_porta: "servidor_porta",
	servidor_senha: "servidor_senha",
	servidor_usuario: "servidor_usuario",
	status: "status",
	status_port_443: "status_port_443",
	status_port_80: "status_port_80",
	txt_ssls: "txt_ssls",
} as const;

export const SERVIDORSPEEDTEST_APACHE_LABELS = {
	S: "S",
	N: "N",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const servidor_speed_testApacheSchema = z.enum(["S", "N"], {
	error: () => ({ message: "apache: valores válidos são [S, N]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ServidorSpeedTestApache = z.infer<
	typeof servidor_speed_testApacheSchema
>;
