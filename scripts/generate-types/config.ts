import { dataSourceConfigs } from "./datasources.config";
import type { ScriptConfig } from "./src/@types/script";
import { parseConfig } from "./src/utils/config";
import { logger } from "./src/utils/logger";

const scriptConfig: Partial<ScriptConfig> = {
	datasources: dataSourceConfigs,
	lockWorkspaceFolder: true,
	logLevel: "debug",
	maxConcurrency: 3,
	// dryRun é controlado pelo argv + overrideConfig — não defina aqui
	// requestConcurrency foi removido (nunca utilizado pelo cliente HTTP)

	// Configuração global de inferência de enums
	enumInference: {
		cardinalityThreshold: 5,
		sampleSize: 5000,
		minRepetitionRatio: 0.8,
		fieldNameBlacklist: [
			"^cep$",
			"^cep_",
			"_cep$",
			"^contato$",
			"^contato_",
			"_contato$",
			"^email$",
			"^email_",
			"_email$",
			"^telefone$",
			"^telefone_",
			"_telefone$",
			"^celular$",
			"^celular_",
			"_celular$",
			"^data$",
			"^data_",
			"_data$",
			"^date$",
			"^date_",
			"_date$",
			"^hora$",
			"^hora_",
			"_hora$",
			"^id$",
			"^id_",
			"_id$",
			"^hash$",
			"^hash_",
			"_hash$",
			"^uuid$",
			"^uuid_",
			"_uuid$",
			"^endereco$",
			"^endereco_",
			"_endereco$",
			"^logradouro$",
			"^logradouro_",
			"_logradouro$",
			"^bairro$",
			"^bairro_",
			"_bairro$",
		],
		valueBlacklist: [
			"^\\d{3}\\.\\d{3}-\\d{2}$", // CPF
			"^\\d{11}$", // CPF sem pontuação
			"^\\d{2}\\.\\d{3}\\.\\d{3}\\/\\d{4}-\\d{2}$", // CNPJ
			"^\\d{14}$", // CNPJ sem pontuação
			"^\\d{5}-\\d{3}$", // CEP
			"^\\d{8}$", // CEP sem pontuação
			"^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$", // Email
			"^\\(\\d{2}\\)\\s?\\d{4,5}-?\\d{4}$", // Telefone
			"^\\d{10,11}$", // Telefone sem formatação
			"^\\d{4}-\\d{2}-\\d{2}", // Data ISO
			"^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$", // UUID
			"^(?:R\\$\\s?)?\\d{1,3}(?:\\.\\d{3})*(?:,\\d{2})$|^(?:R\\$\\s?)?\\d+(?:\\.\\d{2})$", // Valor monetário (BR/US)
		],
		maxNumericVariation: 200,
		minNumericValue: 50,
		fieldNamePatterns: [
			"_id$",
			"^id_",
			"^tipo_",
			"_tipo$",
			"^status_",
			"_status$",
			"^situacao_",
			"_situacao$",
		],
		patternThreshold: 500,
	},

	// Cache de enums
	cacheEnums: true,
	cacheDir: ".cache/ixc-wiki",
	cacheTtlMs: 86400000, // 24 horas

	validateTypes: true,
} as const;

export const config = parseConfig(scriptConfig);

// Configurar nível de log após parse da configuração
logger.setLevel(config.logLevel);
