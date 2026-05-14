/**
 * Arquivo gerado automaticamente
 * NÃO EDITAR MANUALMENTE - usar: pnpm generate-types
 * biome-ignore-all lint/suspicious/noEmptyInterface: auto-generated
 */

import { z } from "zod";

// ============================================================
// LABELS (single source of truth)
// ============================================================
export const PROVSNMP_FIELD_LABELS = {
	authentication_key: "authentication_key",
	authentication_protocol: "authentication_protocol",
	community: "community",
	descricao: "descricao",
	encryption_key: "encryption_key",
	encryption_protocol: "encryption_protocol",
	id: "id",
	porta: "porta",
	security_level: "security_level",
	version: "version",
} as const;

export const PROVSNMP_AUTHENTICATIONPROTOCOL_LABELS = {
	MD5: "MD5",
	SHA: "SHA",
	SHA224: "SHA224",
	SHA256: "SHA256",
	SHA384: "SHA384",
	SHA512: "SHA512",
} as const;

export const PROVSNMP_ENCRYPTIONPROTOCOL_LABELS = {
	DES: "DES",
	AES: "AES",
	AES192: "AES192",
	AES256: "AES256",
	AES192BLMT: "AES192BLMT",
	AES256BLMT: "AES256BLMT",
	"3DES": "3DES",
} as const;

export const PROVSNMP_SECURITYLEVEL_LABELS = {
	noAuthNoPriv: "noAuthNoPriv",
	authNoPriv: "authNoPriv",
	authPriv: "authPriv",
} as const;

export const PROVSNMP_VERSION_LABELS = {
	v1: "v1",
	v2: "v2",
	v3: "v3",
} as const;

// ============================================================
// ENUM SCHEMAS (validação em runtime)
// ============================================================
export const prov_snmpAuthenticationProtocolSchema = z.enum(
	["MD5", "SHA", "SHA224", "SHA256", "SHA384", "SHA512"],
	{
		error: () => ({
			message:
				"authentication_protocol: valores válidos são [MD5, SHA, SHA224, SHA256, SHA384, SHA512]",
		}),
	},
);

export const prov_snmpEncryptionProtocolSchema = z.enum(
	["DES", "AES", "AES192", "AES256", "AES192BLMT", "AES256BLMT", "3DES"],
	{
		error: () => ({
			message:
				"encryption_protocol: valores válidos são [DES, AES, AES192, AES256, AES192BLMT, AES256BLMT, 3DES]",
		}),
	},
);

export const prov_snmpSecurityLevelSchema = z.enum(
	["noAuthNoPriv", "authNoPriv", "authPriv"],
	{
		error: () => ({
			message:
				"security_level: valores válidos são [noAuthNoPriv, authNoPriv, authPriv]",
		}),
	},
);

export const prov_snmpVersionSchema = z.enum(["v1", "v2", "v3"], {
	error: () => ({ message: "version: valores válidos são [v1, v2, v3]" }),
});

// ============================================================
// ENUM TYPES (inferidos dos schemas)
// ============================================================
export type ProvSnmpAuthenticationProtocol = z.infer<
	typeof prov_snmpAuthenticationProtocolSchema
>;

export type ProvSnmpEncryptionProtocol = z.infer<
	typeof prov_snmpEncryptionProtocolSchema
>;

export type ProvSnmpSecurityLevel = z.infer<
	typeof prov_snmpSecurityLevelSchema
>;

export type ProvSnmpVersion = z.infer<typeof prov_snmpVersionSchema>;
