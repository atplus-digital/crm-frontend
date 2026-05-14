import type { PipelineExecutionContext } from "@generators/lib/pipeline/context";
import type { TaskRunner } from "@generators/lib/types";
import type { CollectionTypesMap, RelationInfo } from "../@types/generation";
import type {
	DataSourceClient,
	DataSourceCollection,
	DataSourceField,
	DataSourceGenerationConfig,
	ManualRelationMapping,
} from "../@types/script";
import { extractRelationInfo, mapFieldType } from "../content/field-mapper";

const I18N_TEMPLATE_KEY_REGEX = /^\s*\{\{\s*t\(\s*["']([^"']+)["']/;

const I18N_PT_LABEL_OVERRIDES: Record<string, string> = {
	Children: "Filhos",
	"Created at": "Criado em",
	"Created by": "Criado por",
	Departments: "Departamentos",
	Email: "E-mail",
	"Extension name": "Nome da extensão",
	"File name": "Nome do arquivo",
	ID: "ID",
	"Main department": "Departamento principal",
	"MIME type": "Tipo MIME",
	"Role UID": "UID da função",
	Nickname: "Apelido",
	Owners: "Proprietários",
	Parent: "Pai",
	"Superior department": "Departamento superior",
	"Parent ID": "ID do pai",
	Password: "Senha",
	Path: "Caminho",
	Phone: "Telefone",
	Preview: "Pré-visualização",
	Roles: "Funções",
	Size: "Tamanho",
	Storage: "Armazenamento",
	"Department name": "Nome do departamento",
	"Role name": "Nome da função",
	Title: "Título",
	"Last updated at": "Última atualização em",
	"Last updated by": "Última atualização por",
	URL: "URL",
	Username: "Usuário",
};

function extractI18nTemplateKey(rawLabel: string): string | null {
	const match = rawLabel.match(I18N_TEMPLATE_KEY_REGEX);
	if (!match) {
		return null;
	}
	return match[1]?.trim() || null;
}

function resolveFieldLabel(field: DataSourceField): string {
	const rawLabel = field.uiSchema?.title?.trim();
	if (!rawLabel) {
		return field.name;
	}

	const i18nTemplateKey = extractI18nTemplateKey(rawLabel);
	if (!i18nTemplateKey) {
		return rawLabel;
	}

	return I18N_PT_LABEL_OVERRIDES[i18nTemplateKey] ?? rawLabel;
}

// ──────────────────────────────────────────────
// Pipeline context types (shared across stages)
// ──────────────────────────────────────────────

export interface GenerateFileWrite {
	outputPath: string;
	changed: boolean;
	skipped?: boolean;
}

export interface GenerateTypesPipelineCtx {
	// Input (set by orchestrator before first stage)
	client: DataSourceClient;
	dataSource: DataSourceGenerationConfig;

	// Stage 1: fetch-schemas
	collections: DataSourceCollection[];
	relations: Record<string, ManualRelationMapping>;
	collectionTypes: CollectionTypesMap;
	unresolvedRelations: Array<{
		collection: string;
		field: string;
		target: string;
	}>;

	// Stage 2: build-types
	mainCollections: CollectionTypesMap;
	splitCollections: Map<string, CollectionTypesMap>;

	// Stage 3: generate-content
	fileContents: Map<string, string>;

	// Stage 4: write-files
	writeResults: GenerateFileWrite[];
}

// ──────────────────────────────────────────────
// Field processing helpers
// ──────────────────────────────────────────────

function extractEnumsFromField(
	field: DataSourceField,
): Array<{ value: string | number; label: string }> | null {
	if (
		field.uiSchema?.enum &&
		Array.isArray(field.uiSchema.enum) &&
		field.uiSchema.enum.length > 0
	) {
		// uiSchema.enum can be either flat values or {value, label} objects
		return field.uiSchema.enum.map((opt) => {
			if (typeof opt === "object" && opt !== null && "value" in opt) {
				return { value: opt.value, label: opt.label ?? String(opt.value) };
			}
			return { value: String(opt), label: String(opt) };
		});
	}
	return null;
}

function extractRelationFromField(
	field: DataSourceField,
	manualRelations: ManualRelationMapping | undefined,
	inferRelationsByName: boolean,
): RelationInfo | null {
	return extractRelationInfo(field, manualRelations, inferRelationsByName);
}

// ──────────────────────────────────────────────
// Stage: fetch-schemas
// ──────────────────────────────────────────────

/**
 * Fetch collections and their field schemas from the API.
 *
 * 1. Resolves the list of collections to process from config.collections
 *    and config.splitCollections (union of both).
 * 2. For each collection, fetches fields via the client.
 * 3. Extracts scalars, relations, and enums from each field.
 * 4. Stores the results in context.pipelineContext.
 */
export async function fetchSchemas(
	context: PipelineExecutionContext<
		DataSourceGenerationConfig,
		GenerateTypesPipelineCtx
	>,
	task: TaskRunner,
): Promise<
	PipelineExecutionContext<DataSourceGenerationConfig, GenerateTypesPipelineCtx>
> {
	const { runtimeConfig: dataSource } = context;
	const pipelineCtx = context.pipelineContext as
		| GenerateTypesPipelineCtx
		| undefined;

	if (!pipelineCtx?.client) {
		throw new Error(
			"fetch-schemas: client não encontrado em pipelineContext. " +
				"O orquestrador deve fornecer uma instância de DataSourceClient.",
		);
	}

	const client: DataSourceClient = pipelineCtx.client;

	// Fetch raw API collection list for relation resolution and optional expansion
	let apiCollections: DataSourceCollection[];
	try {
		apiCollections = await client.fetchCollections(dataSource.dataSource);
	} catch (error) {
		const message = error instanceof Error ? error.message : String(error);
		throw new Error(
			`Falha ao listar collections do datasource '${dataSource.dataSource}': ${message}`,
		);
	}

	// 1. Resolve collection names from config
	const explicitCollections = [
		...(dataSource.collections ?? []),
		...(dataSource.splitCollections ?? []),
	];

	const resolvedCollections = dataSource.includeAllCollections
		? [
				...explicitCollections,
				...apiCollections.map((collection) => collection.name),
			]
		: explicitCollections;

	const normalizedCollections = Array.from(
		new Set(resolvedCollections.map((name) => name.trim()).filter(Boolean)),
	);

	if (normalizedCollections.length === 0) {
		throw new Error(
			`DataSource '${dataSource.name}' não possui collections para processar. ` +
				"Configure collections/splitCollections ou habilite includeAllCollections em datasources.ts.",
		);
	}

	task.output = `📦 Processando ${normalizedCollections.length} collection(s) do datasource '${dataSource.name}'...`;

	const collectionLookup = new Map(apiCollections.map((c) => [c.name, c]));
	const knownCollections = new Set([
		...apiCollections.map((c) => c.name),
		...normalizedCollections,
	]);

	// 2. Process fields from the API response for configured collections
	const excludeFields = new Set(dataSource.excludeFields ?? []);
	const inferRelationsByName = dataSource.inferRelationsByName ?? false;

	const entries: Array<{
		collectionName: string;
		generated: {
			scalars: Map<string, string>;
			relations: Map<string, RelationInfo>;
			enums: Map<string, Array<{ value: string | number; label: string }>>;
			fieldLabels: Map<string, string>;
			schemaAvailable: boolean;
		};
		unresolved: Array<{ field: string; target: string }>;
	}> = [];

	for (const [index, collectionName] of normalizedCollections.entries()) {
		if (index % 25 === 0) {
			task.output = `📦 [${index + 1}/${normalizedCollections.length}] Processando collection '${collectionName}'...`;
		}

		const apiCollection = collectionLookup.get(collectionName);
		const fields = (apiCollection?.fields ?? []) as DataSourceField[];
		const schemaAvailable = !!apiCollection;

		const scalars = new Map<string, string>();
		const relations = new Map<string, RelationInfo>();
		const enums = new Map<
			string,
			Array<{ value: string | number; label: string }>
		>();
		const fieldLabels = new Map<string, string>();
		const collectionUnresolved: Array<{ field: string; target: string }> = [];

		for (const field of fields) {
			if (excludeFields.has(field.name)) continue;
			fieldLabels.set(field.name, resolveFieldLabel(field));

			// Try relation first
			const manualRelations = pipelineCtx.relations?.[collectionName];
			const relationInfo = extractRelationFromField(
				field,
				manualRelations,
				inferRelationsByName,
			);

			if (relationInfo) {
				const isAvailable = knownCollections.has(relationInfo.targetCollection);
				relations.set(field.name, {
					type: relationInfo.type,
					targetCollection: isAvailable ? relationInfo.targetCollection : "",
					originalTarget: relationInfo.targetCollection || undefined,
				});

				if (!isAvailable && relationInfo.targetCollection) {
					collectionUnresolved.push({
						field: field.name,
						target: relationInfo.targetCollection,
					});
				}
				continue;
			}

			// Otherwise it's a scalar
			scalars.set(field.name, mapFieldType(field));

			// Extract enums from uiSchema
			const enumValues = extractEnumsFromField(field);
			if (enumValues) {
				enums.set(field.name, enumValues);
			}
		}

		// Apply manual relation mappings (not already covered)
		const manualMapping = pipelineCtx.relations?.[collectionName];
		if (manualMapping) {
			for (const [fieldName, relationDef] of Object.entries(manualMapping)) {
				if (!relations.has(fieldName)) {
					const isAvailable = knownCollections.has(relationDef.target);
					relations.set(fieldName, {
						type: relationDef.type,
						targetCollection: isAvailable ? relationDef.target : "",
						originalTarget: relationDef.target || undefined,
					});

					if (!isAvailable && relationDef.target) {
						collectionUnresolved.push({
							field: fieldName,
							target: relationDef.target,
						});
					}
				}
			}
		}

		const generated = {
			scalars,
			relations,
			enums,
			fieldLabels,
			schemaAvailable,
		};

		entries.push({
			collectionName,
			generated,
			unresolved: collectionUnresolved,
		});
	}

	// 3. Assemble results
	const collectionTypes: CollectionTypesMap = {};
	const allUnresolved: GenerateTypesPipelineCtx["unresolvedRelations"] = [];

	for (const { collectionName, generated, unresolved } of entries) {
		collectionTypes[collectionName] = generated;
		for (const rel of unresolved) {
			allUnresolved.push({
				collection: collectionName,
				field: rel.field,
				target: rel.target,
			});
		}
	}

	task.output = `✅ ${normalizedCollections.length} collection(s) processadas, ${allUnresolved.length} relação(ões) não resolvida(s).`;

	return {
		...context,
		pipelineContext: {
			...pipelineCtx,
			collections: explicitCollections.map((name) => ({ name })),
			collectionTypes,
			unresolvedRelations: allUnresolved,
		} satisfies GenerateTypesPipelineCtx,
	};
}
