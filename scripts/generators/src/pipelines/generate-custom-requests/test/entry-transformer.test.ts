import { defaultLogger as logger } from "@scripts/generators/src/lib/logging";
import type { SchemaRegistry } from "@scripts/generators/src/pipelines/generate-custom-requests/@types/collection-schema";
import {
	transformAllEntries,
	transformApiEntryToRegistry,
} from "@scripts/generators/src/pipelines/generate-custom-requests/pipeline/stages/transform-and-merge/entry-transformer";
import { collectAnalysisReport } from "@scripts/generators/src/pipelines/generate-custom-requests/pipeline/stages/write-analysis-report/analysis-collector";
import { describe, expect, it, vi } from "vitest";

vi.mock("@scripts/generators/src/lib/logging", () => ({
	defaultLogger: {
		info: vi.fn(),
		warn: vi.fn(),
		error: vi.fn(),
		debug: vi.fn(),
		setLevel: vi.fn(),
		getLevel: vi.fn(() => "info"),
	},
}));

describe("transformApiEntryToRegistry", () => {
	it("deve transformar entrada válida corretamente", () => {
		const entry = {
			key: "test-entry",
			name: "Test Entry",
			options: {
				collectionName: "t_test",
				method: "POST",
				url: "/api/test",
			},
		};

		const result = transformApiEntryToRegistry(entry);

		expect(result.entry).toEqual({
			key: "test-entry",
			name: "Test Entry",
			collection: "t_test",
			collectionSchemaName: null,
			dataSourceKey: "main",
			method: "POST",
			url: "/api/test",
			payloadSchema: "z.any()",
			payloadData: null,
		});
	});

	it("deve mapear dataSourceKey quando informado pela API", () => {
		const entry = {
			key: "test-ds",
			name: "Test DS",
			options: {
				collectionName: "t_test",
				dataSourceKey: "d_db_ixcsoft",
				url: "/api/test",
			},
		};

		const result = transformApiEntryToRegistry(entry);

		expect(result.entry).not.toBeNull();
		expect(result.entry?.dataSourceKey).toBe("d_db_ixcsoft");
	});

	it("deve retornar null e log warning quando sem options", () => {
		const entry = { key: "no-options", name: "No Options" };

		const result = transformApiEntryToRegistry(entry);

		expect(result.entry).toBeNull();
		expect(logger.debug).toHaveBeenCalledWith(
			expect.stringContaining("sem options"),
		);
	});

	it("deve retornar null e log warning quando sem collectionName", () => {
		const entry = {
			key: "no-collection",
			name: "No Collection",
			options: { method: "POST", url: "/test" },
		};

		const result = transformApiEntryToRegistry(entry);

		expect(result.entry).toBeNull();
		expect(logger.debug).toHaveBeenCalledWith(
			expect.stringContaining("sem collectionName"),
		);
	});

	it("deve usar URL vazia quando url é undefined", () => {
		const entry = {
			key: "no-url",
			name: "No URL",
			options: { collectionName: "t_test" },
		};

		const result = transformApiEntryToRegistry(entry);

		expect(result.entry).not.toBeNull();
		expect(result.entry?.url).toBe("");
	});

	it("deve usar POST como method default", () => {
		const entry = {
			key: "no-method",
			name: "No Method",
			options: { collectionName: "t_test", url: "/test" },
		};

		const result = transformApiEntryToRegistry(entry);

		expect(result.entry).not.toBeNull();
		expect(result.entry?.method).toBe("POST");
	});

	it("deve comentar campos inexistentes ao gerar pick de schema", () => {
		const schemaRegistry: SchemaRegistry = new Map([
			[
				"d_db_ixcsoft:cliente_contrato",
				{
					collectionName: "cliente_contrato",
					dataSourceKey: "d_db_ixcsoft",
					schemaImportPath: "#/generated/types/d_db_ixcsoft/cliente-contrato",
					schemaName: "cliente_contratoSchema",
					baseSchemaName: "cliente_contratoBaseSchema",
					availableFields: new Set(["bairro", "f_nc_cliente", "id", "numero"]),
				},
			],
		]);

		const entry = {
			key: "schema-pick-missing-field",
			name: "Schema Pick Missing Field",
			options: {
				collectionName: "cliente_contrato",
				dataSourceKey: "d_db_ixcsoft",
				method: "POST",
				url: "/api/t_negociacoes:create",
				data: {
					f_bairro: "{{currentRecord.bairro}}",
					f_contrato_ixc: "{{currentRecord.id}}",
					f_endereco_numero: "{{currentRecord.numero}}",
					f_nome_razao: "{{currentRecord.f_nc_cliente.razao}}",
					f_tipo_pessoa: "{{currentRecord.f_klf0fxs3rds.tipo_pessoa}}",
				},
			},
		};

		const result = transformApiEntryToRegistry(
			entry,
			undefined,
			schemaRegistry,
		);

		expect(result.entry).not.toBeNull();
		expect(result.entry?.payloadSchema).toContain(
			"currentRecord: cliente_contratoSchema.pick({",
		);
		expect(result.entry?.payloadSchema).toContain("bairro: true,");
		expect(result.entry?.payloadSchema).toContain("id: true,");
		expect(result.entry?.payloadSchema).toContain("f_nc_cliente: true,");
		expect(result.entry?.payloadSchema).toContain("numero: true,");
		expect(result.entry?.payloadSchema).toContain(
			"//    f_klf0fxs3rds: true, ! Não Existe na collection",
		);
	});

	it("deve usar schema da collection para placeholder raiz de $nSelectedRecord", () => {
		const schemaRegistry: SchemaRegistry = new Map([
			[
				"main:t_qualirun_info_adicionais",
				{
					collectionName: "t_qualirun_info_adicionais",
					dataSourceKey: "main",
					schemaImportPath:
						"#/generated/types/nocobase/other/qualirun-info-adicionais/schemas",
					schemaName: "qualirun_info_adicionaisSchema",
					baseSchemaName: "qualirun_info_adicionaisBaseSchema",
					availableFields: new Set(["id", "f_fk_funcionarios"]),
				},
			],
		]);

		const entry = {
			key: "schema-selected-root",
			name: "Schema Selected Root",
			options: {
				collectionName: "t_qualirun_info_adicionais",
				dataSourceKey: "main",
				method: "POST",
				url: "/webhook/test",
				data: {
					info_adicionais: "{{$nSelectedRecord}}",
				},
			},
		};

		const result = transformApiEntryToRegistry(
			entry,
			undefined,
			schemaRegistry,
		);

		expect(result.entry).not.toBeNull();
		expect(result.entry?.payloadSchema).toContain(
			"$nSelectedRecord: z.array(qualirun_info_adicionaisSchema)",
		);
	});

	it("deve priorizar pick quando mistura placeholder raiz e campos específicos", () => {
		const schemaRegistry: SchemaRegistry = new Map([
			[
				"d_db_ixcsoft:cliente_contrato",
				{
					collectionName: "cliente_contrato",
					dataSourceKey: "d_db_ixcsoft",
					schemaImportPath: "#/generated/types/d_db_ixcsoft/cliente-contrato",
					schemaName: "cliente_contratoSchema",
					baseSchemaName: "cliente_contratoBaseSchema",
					availableFields: new Set(["id", "id_contrato"]),
				},
			],
		]);

		const entry = {
			key: "schema-current-record-mixed-root-and-field",
			name: "Schema Current Record Mixed Root And Field",
			options: {
				collectionName: "cliente_contrato",
				dataSourceKey: "d_db_ixcsoft",
				method: "POST",
				url: "/webhook/test",
				data: {
					record: "{{currentRecord}}",
					id_login: "{{currentRecord.id}}",
				},
			},
		};

		const result = transformApiEntryToRegistry(
			entry,
			undefined,
			schemaRegistry,
		);

		expect(result.entry).not.toBeNull();
		expect(result.entry?.payloadSchema).toContain(
			"currentRecord: cliente_contratoSchema.pick({",
		);
		expect(result.entry?.payloadSchema).toContain("id: true,");
		expect(result.entry?.payloadSchema).not.toContain(
			"currentRecord: cliente_contratoSchema,",
		);
	});

	it("deve usar schema users do datasource main para currentUser", () => {
		const schemaRegistry: SchemaRegistry = new Map([
			[
				"main:users",
				{
					collectionName: "users",
					dataSourceKey: "main",
					schemaImportPath: "#/generated/types/nocobase/users/schemas",
					schemaName: "usersSchema",
					baseSchemaName: "usersBaseSchema",
					availableFields: new Set(["f_id_vendedor_ixc", "profile"]),
				},
			],
		]);

		const entry = {
			key: "schema-current-user-main",
			name: "Schema Current User Main",
			options: {
				collectionName: "cliente_contrato",
				dataSourceKey: "d_db_ixcsoft",
				method: "POST",
				url: "/webhook/test",
				data: {
					id_vendedor: "{{currentUser.f_id_vendedor_ixc}}",
					nome: "{{currentUser.profile.nome}}",
				},
			},
		};

		const result = transformApiEntryToRegistry(
			entry,
			undefined,
			schemaRegistry,
		);

		expect(result.entry).not.toBeNull();
		expect(result.entry?.payloadSchema).toContain(
			"currentUser: usersSchema.pick({",
		);
		expect(result.entry?.payloadSchema).toContain("f_id_vendedor_ixc: true,");
		expect(result.entry?.payloadSchema).toContain("profile: true,");
		expect(result.entry?.payloadSchema).toContain("}).optional(),");
	});

	it("deve manter literais default para números constantes no schema enriquecido", () => {
		const schemaRegistry: SchemaRegistry = new Map([
			[
				"main:users",
				{
					collectionName: "users",
					dataSourceKey: "main",
					schemaImportPath: "#/generated/types/nocobase/users/schemas",
					schemaName: "usersSchema",
					baseSchemaName: "usersBaseSchema",
					availableFields: new Set(["nickname"]),
				},
			],
		]);

		const entry = {
			key: "schema-constants-as-literals",
			name: "Schema Constants As Literals",
			options: {
				collectionName: "t_logs",
				dataSourceKey: "main",
				method: "POST",
				url: "/webhook/test",
				data: {
					a: 1,
					status: "ok",
					rec: "{{currentUser.nickname}}",
				},
			},
		};

		const result = transformApiEntryToRegistry(
			entry,
			undefined,
			schemaRegistry,
		);

		expect(result.entry).not.toBeNull();
		expect(result.entry?.payloadSchema).toContain(
			"a: z.literal(1).default(1).readonly(),",
		);
		expect(result.entry?.payloadSchema).toContain(
			'status: z.literal("ok").default("ok").readonly(),',
		);
	});
});

describe("transformAllEntries", () => {
	it("deve transformar múltiplas entradas e ordenar por key", () => {
		const entries = [
			{
				key: "b-entry",
				name: "B Entry",
				options: { collectionName: "t_test", url: "/b" },
			},
			{
				key: "a-entry",
				name: "A Entry",
				options: { collectionName: "t_test", url: "/a" },
			},
		];

		const result = transformAllEntries(entries);

		expect(result.transformed).toHaveLength(2);
		expect(result.transformed[0].key).toBe("a-entry");
		expect(result.transformed[1].key).toBe("b-entry");
	});

	it("deve filtrar entradas inválidas", () => {
		const entries = [
			{
				key: "valid",
				name: "Valid",
				options: { collectionName: "t_test", url: "/valid" },
			},
			{ key: "invalid", name: "Invalid" },
		];

		const result = transformAllEntries(entries);

		expect(result.transformed).toHaveLength(1);
		expect(result.transformed[0].key).toBe("valid");
	});
});

describe("collectAnalysisReport", () => {
	it("deve separar entradas sem options e sem dataSourceKey", () => {
		const entries = [
			{ key: "no-options", name: "No Options" },
			{
				key: "no-datasource",
				name: "No DS",
				options: {
					collectionName: "t_test",
					method: "POST",
					url: "https://example.com",
				},
			},
			{
				key: "with-datasource",
				name: "With DS",
				options: {
					collectionName: "t_test",
					method: "POST",
					url: "https://example.com",
					dataSourceKey: "main",
				},
			},
		];

		const result = collectAnalysisReport(entries);

		expect(result.totalAnalyzed).toBe(3);
		expect(result.allEntries).toEqual([
			{
				key: "no-datasource",
				name: "No DS",
				collectionName: "t_test",
				method: "POST",
				url: "https://example.com",
				data: null,
			},
			{
				key: "no-options",
				name: "No Options",
				data: null,
			},
			{
				key: "with-datasource",
				name: "With DS",
				collectionName: "t_test",
				method: "POST",
				url: "https://example.com",
				dataSourceKey: "main",
				data: null,
			},
		]);
		expect(result.withoutOptions).toEqual([
			{
				key: "no-options",
				name: "No Options",
			},
		]);
		expect(result.withoutDataSourceKey).toEqual([
			{
				key: "no-datasource",
				name: "No DS",
				collectionName: "t_test",
				method: "POST",
				url: "https://example.com",
				data: null,
			},
		]);
	});
});
