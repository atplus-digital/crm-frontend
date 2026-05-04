/**
 * Loader de schemas de collections gerados.
 *
 * Este módulo carrega os schemas Zod das collections geradas pelo generate-types
 * e fornece mapeamentos para uso no generate-custom-requests.
 */

import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join, resolve } from "node:path";
import type {
	CollectionSchemaMapping,
	SchemaLoadResult,
	SchemaRegistry,
} from "../@types/collection-schema";

/**
 * Root directory dos schemas gerados.
 */
const GENERATED_TYPES_ROOT = resolve(process.cwd(), "src/generated/types");

/**
 * Converte nome de arquivo para nome de collection.
 * Ex: cliente-contrato.ts -> cliente_contrato
 *     negociacoes.ts -> t_negociacoes
 */
function fileNameToCollectionName(fileName: string): string {
	// Remove extensão
	const baseName = fileName.replace(/\.ts$/, "");

	// Para arquivos não-split (ex: negociacoes.ts), tenta converter kebab-case para snake_case
	// Para arquivos split (ex: cliente-contrato.ts), simplesmente troca - por _
	return baseName.replace(/-/g, "_");
}

/**
 * Converte snake_case para PascalCase para nome de schema.
 * Ex: cliente_contrato -> ClienteContrato
 *     t_negociacoes -> TNegociacoes
 */
function snakeToPascalCase(str: string): string {
	return str
		.split("_")
		.map((part) => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
		.join("");
}

/**
 * Converte snake_case para camelCase para nome de schema.
 * Ex: cliente_contrato -> clienteContrato
 *     t_negociacoes -> tNegociacoes
 */
function snakeToCamelCase(str: string): string {
	const pascal = snakeToPascalCase(str);
	return pascal.charAt(0).toLowerCase() + pascal.slice(1);
}

/**
 * Escaneia um diretório de datasource e retorna todos os arquivos .ts.
 */
function scanSchemaFiles(dirPath: string): string[] {
	if (!existsSync(dirPath)) {
		return [];
	}

	const files: string[] = [];
	const entries = readdirSync(dirPath, { withFileTypes: true });

	for (const entry of entries) {
		const fullPath = join(dirPath, entry.name);
		if (
			entry.isFile() &&
			entry.name.endsWith(".ts") &&
			entry.name !== "index.ts"
		) {
			files.push(fullPath);
		} else if (entry.isDirectory()) {
			// Escaneia subdiretórios também (ex: other/)
			const subFiles = scanSchemaFiles(fullPath);
			files.push(...subFiles);
		}
	}

	return files;
}

/**
 * Extrai o nome do schema principal de um arquivo de schema.
 * Suporta tanto PascalCase (NocoBase) quanto snake_case (IXC).
 */
function extractSchemaNames(
	collectionName: string,
	fileContent: string,
): { schemaName: string; baseSchemaName: string } | null {
	// Padrão PascalCase (NocoBase): ClienteContratoSchema
	const pascalName = snakeToPascalCase(collectionName);

	// Padrão snake_case (IXC): cliente_contratoSchema
	const snakeName = collectionName;

	// Procura pelo schema principal - tenta ambos os padrões
	let schemaName: string | null = null;

	// Primeiro tenta PascalCase
	const pascalSchemaMatch = fileContent.match(
		new RegExp(`export\\s+const\\s+(${pascalName}Schema)\\s*=`),
	);
	if (pascalSchemaMatch) {
		schemaName = pascalSchemaMatch[1];
	}

	// Se não encontrou, tenta snake_case
	if (!schemaName) {
		const snakeSchemaMatch = fileContent.match(
			new RegExp(`export\\s+const\\s+(${snakeName}Schema)\\s*=`),
		);
		if (snakeSchemaMatch) {
			schemaName = snakeSchemaMatch[1];
		}
	}

	// Procura pelo schema base - tenta ambos os padrões
	let baseSchemaName: string | null = null;
	const camelName = snakeToCamelCase(collectionName);

	// Tenta PascalCase: ClienteContratoBaseSchema
	const pascalBaseMatch = fileContent.match(
		new RegExp(`export\\s+const\\s+(${pascalName}BaseSchema)\\s*=`),
	);
	if (pascalBaseMatch) {
		baseSchemaName = pascalBaseMatch[1];
	}

	// Tenta snake_case: cliente_contratoBaseSchema
	if (!baseSchemaName) {
		const snakeBaseMatch = fileContent.match(
			new RegExp(`export\\s+const\\s+(${snakeName}BaseSchema)\\s*=`),
		);
		if (snakeBaseMatch) {
			baseSchemaName = snakeBaseMatch[1];
		}
	}

	// Tenta camelCase: clienteContratoBaseSchema
	if (!baseSchemaName) {
		const camelBaseMatch = fileContent.match(
			new RegExp(`export\\s+const\\s+(${camelName}BaseSchema)\\s*=`),
		);
		if (camelBaseMatch) {
			baseSchemaName = camelBaseMatch[1];
		}
	}

	if (!schemaName) {
		return null;
	}

	return {
		schemaName,
		baseSchemaName: baseSchemaName ?? `${camelName}BaseSchema`,
	};
}

function extractSchemaFieldNames(fileContent: string): Set<string> {
	const fields = new Set<string>();
	const schemaObjectPattern =
		/export\s+const\s+([A-Za-z0-9_]+)\s*=\s*z\.object\(\{([\s\S]*?)\}\s*\);/g;

	while (true) {
		const schemaMatch = schemaObjectPattern.exec(fileContent);
		if (!schemaMatch) {
			break;
		}

		const schemaVarName = schemaMatch[1];
		if (
			!schemaVarName.endsWith("BaseSchema") &&
			!schemaVarName.endsWith("RelationSchema")
		) {
			continue;
		}

		const schemaBody = schemaMatch[2];
		const fieldPattern =
			/^\s*(?:(["'])([^"']+)\1|([A-Za-z_$][A-Za-z0-9_$]*))\s*:/gm;

		while (true) {
			const fieldMatch = fieldPattern.exec(schemaBody);
			if (!fieldMatch) {
				break;
			}

			const fieldName = fieldMatch[2] ?? fieldMatch[3];
			if (fieldName) {
				fields.add(fieldName);
			}
		}
	}

	return fields;
}

/**
 * Escaneia todos os schemas gerados e cria mapeamentos.
 */
function scanAllSchemas(logger?: {
	debug: (msg: string) => void;
}): CollectionSchemaMapping[] {
	const mappings: CollectionSchemaMapping[] = [];

	if (!existsSync(GENERATED_TYPES_ROOT)) {
		logger?.debug(
			`Diretório de schemas não encontrado: ${GENERATED_TYPES_ROOT}`,
		);
		return mappings;
	}

	const dataSourceDirs = readdirSync(GENERATED_TYPES_ROOT, {
		withFileTypes: true,
	});

	for (const dataSourceDir of dataSourceDirs) {
		if (!dataSourceDir.isDirectory()) continue;

		const dataSourceKey = dataSourceDir.name;
		const datasourcePath = join(GENERATED_TYPES_ROOT, dataSourceDir.name);

		logger?.debug(`Escaneando datasource: ${dataSourceKey}`);

		const schemaFiles = scanSchemaFiles(datasourcePath);

		for (const filePath of schemaFiles) {
			const fileName = filePath.split("/").pop() ?? "";
			const collectionName = fileNameToCollectionName(fileName);
			const fileContent = readFileSync(filePath, "utf-8");

			const schemaInfo = extractSchemaNames(collectionName, fileContent);
			if (!schemaInfo) {
				logger?.debug(`Schema não encontrado em: ${filePath}`);
				continue;
			}

			const availableFields = extractSchemaFieldNames(fileContent);

			// Calcula path relativo a partir de src/generated/types
			const relativePath = filePath.replace(`${GENERATED_TYPES_ROOT}/`, "");
			const importPath = `#/generated/types/${relativePath.replace(/\.ts$/, "")}`;

			mappings.push({
				collectionName,
				dataSourceKey,
				schemaImportPath: importPath,
				schemaName: schemaInfo.schemaName,
				baseSchemaName: schemaInfo.baseSchemaName,
				availableFields,
			});

			logger?.debug(
				`  ${collectionName} -> ${schemaInfo.schemaName} (${importPath})`,
			);
		}
	}

	return mappings;
}

/**
 * Cria um registry indexado por collection name.
 */
export function createRegistry(
	mappings: CollectionSchemaMapping[],
): SchemaRegistry {
	const registry = new Map<string, CollectionSchemaMapping>();

	for (const mapping of mappings) {
		const key = `${mapping.dataSourceKey}:${mapping.collectionName}`;
		registry.set(key, mapping);

		// Também adiciona só pelo collection name (para casos onde o datasource é o mesmo)
		if (!registry.has(mapping.collectionName)) {
			registry.set(mapping.collectionName, mapping);
		}
	}

	return registry;
}

/**
 * Carrega todos os schemas disponíveis.
 */
export function loadCollectionSchemas(logger?: {
	debug: (msg: string) => void;
}): SchemaLoadResult {
	const mappings = scanAllSchemas(logger);
	const registry = createRegistry(mappings);

	return {
		mappings,
		registry, // Inclui o registry no resultado
		notFound: [], // Será preenchido após analisar as requests
	};
}

/**
 * Busca um schema por collection name e dataSource.
 */
export function findSchema(
	registry: SchemaRegistry,
	collectionName: string,
	dataSourceKey?: string,
): CollectionSchemaMapping | null {
	// Tenta primeiro com dataSourceKey completo
	if (dataSourceKey) {
		const key = `${dataSourceKey}:${collectionName}`;
		if (registry.has(key)) {
			return registry.get(key) ?? null;
		}
	}

	// Fallback para só collection name
	return registry.get(collectionName) ?? null;
}

/**
 * Analisa os campos usados em um payload e retorna os campos de placeholders.
 * Ex: { "currentRecord.id": true, "currentRecord.f_nome": true }
 *
 * Compatible with Record<string, Set<string>> for use in schema inference.
 */
export interface PlaceholderFields {
	$nForm: Set<string>;
	$nPopupRecord: Set<string>;
	$nSelectedRecord: Set<string>;
	currentRecord: Set<string>;
	currentUser: Set<string>;
	[key: string]: Set<string>;
}

/**
 * Extrai os campos usados de um payloadData.
 */
export function extractPlaceholderFields(
	payloadData: Record<string, unknown> | null,
): PlaceholderFields {
	const fields: PlaceholderFields = {
		$nForm: new Set(),
		$nPopupRecord: new Set(),
		$nSelectedRecord: new Set(),
		currentRecord: new Set(),
		currentUser: new Set(),
	};

	if (!payloadData) return fields;

	// Pattern para extrair campos de placeholders
	// Ex: "{{currentRecord.id}}" -> { placeholder: "currentRecord", field: "id" }
	const placeholderPattern =
		/\{\{(\$nForm|\$nPopupRecord|\$nSelectedRecord|currentRecord|currentUser)(\.([^}]+))?\}\}/g;

	for (const [_key, value] of Object.entries(payloadData)) {
		if (typeof value !== "string") continue;

		while (true) {
			const match = placeholderPattern.exec(value);
			if (!match) {
				break;
			}

			const placeholder = match[1] as keyof PlaceholderFields;
			const field = match[3]; // Campo após o ponto, se existir

			if (!fields[placeholder]) {
				fields[placeholder] = new Set();
			}

			// Se não tem campo específico, marca como "todos" (usando "*")
			const placeholderFields = fields[placeholder];
			if (placeholderFields) {
				placeholderFields.add(field ?? "*");
			}
		}
	}

	return fields;
}

/**
 * Gera código Zod schema usando .pick() com os campos utilizados.
 * Lida com campos aninhados (ex: f_nc_cliente.id) corretamente.
 *
 * Ex: currentRecord com campos { id, f_nc_cliente.id } ->
 *     currentRecord: NegociacoesSchema.pick({
 *       id: true,
 *       f_nc_cliente: true,  // inclui a relação inteira
 *     })
 */
export function generateSchemaPickCode(
	schemaInfo: CollectionSchemaMapping,
	fields: Set<string>,
): string {
	if (fields.has("*")) {
		// Todos os campos são usados, não precisa de pick
		return schemaInfo.schemaName;
	}

	// Agrupa campos por prefixo para lidar com campos aninhados
	// Ex: { "f_nc_cliente.id", "f_nc_cliente.email" } -> { f_nc_cliente: ["id", "email"] }
	const topLevelFields = new Set<string>();
	const nestedFields = new Map<string, string[]>();

	for (const field of fields) {
		if (field.includes(".")) {
			// Campo aninhado (ex: f_nc_cliente.id)
			const [prefix, ...rest] = field.split(".");
			if (!nestedFields.has(prefix)) {
				nestedFields.set(prefix, []);
			}
			// Se há campos aninhados de um prefixo, incluir o prefixo inteiro
			const prefixedFields = nestedFields.get(prefix);
			if (prefixedFields) {
				prefixedFields.push(rest.join("."));
			}
			topLevelFields.add(prefix);
		} else {
			topLevelFields.add(field);
		}
	}

	// Se há campos aninhados, incluir o prefixo inteiro em vez de fazer pick aninhado
	// Isso evita problemas com Zod que não suporta .pick() com paths aninhados
	const allFields = Array.from(topLevelFields)
		.sort()
		.map((fieldName) => {
			const objectKey = /^[A-Za-z_$][A-Za-z0-9_$]*$/.test(fieldName)
				? fieldName
				: JSON.stringify(fieldName);
			const existsInCollection =
				!schemaInfo.availableFields ||
				schemaInfo.availableFields.has(fieldName);

			if (!existsInCollection) {
				return `//    ${objectKey}: true, ! Não Existe na collection`;
			}

			return `    ${objectKey}: true,`;
		})
		.join("\n");

	return `${schemaInfo.schemaName}.pick({\n${allFields}\n  })`;
}

/**
 * Exporta tipos para uso em outros módulos.
 */
export type {
	CollectionSchemaMapping,
	SchemaLoadResult,
	SchemaRegistry,
} from "../@types/collection-schema";
