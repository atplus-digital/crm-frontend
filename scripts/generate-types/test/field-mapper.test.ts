import {
	extractRelationInfo,
	mapFieldType,
} from "@scripts/generate-types/src/generation/field-mapper";
import { describe, expect, it } from "vitest";
import { createMockField } from "./setup";

describe("field-mapper", () => {
	describe("mapFieldType", () => {
		describe("campos de sistema de auditoria", () => {
			it("deve mapear createdById para number | null", () => {
				expect(
					mapFieldType(
						createMockField({
							name: "createdById",
							type: "context",
							interface: null,
						}),
					),
				).toBe("number | null");
			});

			it("deve mapear updatedById para number | null", () => {
				expect(
					mapFieldType(
						createMockField({
							name: "updatedById",
							type: "context",
							interface: null,
						}),
					),
				).toBe("number | null");
			});
		});

		describe("tipos de string", () => {
			const stringCases: Array<{
				name: string;
				type: string;
				iface: string | null;
			}> = [
				{ name: "nome", type: "string", iface: "input" },
				{ name: "descricao", type: "text", iface: "textarea" },
				{ name: "email", type: "string", iface: "email" },
				{ name: "website", type: "string", iface: "url" },
				{ name: "telefone", type: "string", iface: "phone" },
				{ name: "calculado", type: "formula", iface: "formula" },
				{ name: "numero", type: "sequence", iface: "sequence" },
				{ name: "senha", type: "password", iface: "password" },
				{ name: "uid", type: "nanoid", iface: "nanoid" },
				{ name: "identificador", type: "uid", iface: "input" },
				{ name: "rota", type: "lineString", iface: "lineString" },
				{ name: "localizacao", type: "point", iface: "point" },
			];

			for (const { name, type, iface } of stringCases) {
				it(`deve mapear ${type} para string (campo: ${name})`, () => {
					expect(
						mapFieldType(createMockField({ name, type, interface: iface })),
					).toBe("string");
				});
			}

			it("deve mapear snowflakeId para number", () => {
				expect(
					mapFieldType(
						createMockField({
							name: "id",
							type: "snowflakeId",
							interface: "snowflakeId",
						}),
					),
				).toBe("number");
			});
		});

		describe("tipos de data/hora", () => {
			const dateCases = [
				{ name: "dataEvento", type: "date", iface: "datetime" },
				{ name: "dataNascimento", type: "dateOnly", iface: "date" },
			];

			for (const { name, type, iface } of dateCases) {
				it(`deve mapear ${type} para string (campo: ${name})`, () => {
					expect(
						mapFieldType(createMockField({ name, type, interface: iface })),
					).toBe("string");
				});
			}
		});

		describe("tipos numéricos", () => {
			const numericCases = [
				{ name: "quantidade", type: "integer", iface: "integer" },
				{ name: "id", type: "bigInt", iface: "integer" },
				{ name: "preco", type: "double", iface: "number" },
				{ name: "ordem", type: "sort", iface: "sort" },
			];

			for (const { name, type, iface } of numericCases) {
				it(`deve mapear ${type} para number (campo: ${name})`, () => {
					expect(
						mapFieldType(createMockField({ name, type, interface: iface })),
					).toBe("number");
				});
			}
		});

		describe("tipo boolean", () => {
			it("deve mapear boolean para boolean", () => {
				expect(
					mapFieldType(
						createMockField({
							name: "ativo",
							type: "boolean",
							interface: "checkbox",
						}),
					),
				).toBe("boolean");
			});
		});

		describe("tipos de objeto/JSON", () => {
			it("deve mapear json para Record<string, unknown>", () => {
				expect(
					mapFieldType(
						createMockField({
							name: "config",
							type: "json",
							interface: "json",
						}),
					),
				).toBe("Record<string, unknown>");
			});

			it("deve mapear jsonb para Record<string, unknown>", () => {
				expect(
					mapFieldType(
						createMockField({
							name: "metadata",
							type: "jsonb",
							interface: "json",
						}),
					),
				).toBe("Record<string, unknown>");
			});
		});

		describe("tipo array", () => {
			it("deve mapear array para string[]", () => {
				expect(
					mapFieldType(
						createMockField({
							name: "tags",
							type: "array",
							interface: "multipleSelect",
						}),
					),
				).toBe("string[]");
			});
		});

		describe("interfaces especiais", () => {
			it("deve mapear context para unknown", () => {
				expect(
					mapFieldType(
						createMockField({
							name: "contexto",
							type: "string",
							interface: "context",
						}),
					),
				).toBe("unknown");
			});

			it("deve mapear interface set para unknown[]", () => {
				expect(
					mapFieldType(
						createMockField({
							name: "opcoes",
							type: "string",
							interface: "set",
						}),
					),
				).toBe("unknown[]");
			});

			it("deve mapear type set para unknown[] via FIELD_TYPE_MAP", () => {
				expect(
					mapFieldType(
						createMockField({
							name: "f_fk_funcionarios",
							type: "set",
							interface: "json",
						}),
					),
				).toBe("unknown[]");
			});
		});

		describe("tipos desconhecidos", () => {
			it("deve retornar unknown para tipo não mapeado", () => {
				expect(
					mapFieldType(
						createMockField({
							name: "campo",
							type: "tipoDesconhecido",
							interface: "input",
						}),
					),
				).toBe("unknown");
			});
		});
	});

	describe("extractRelationInfo", () => {
		describe("campos escalares de sistema", () => {
			it("deve retornar null para createdById", () => {
				expect(
					extractRelationInfo(
						createMockField({
							name: "createdById",
							type: "context",
							interface: null,
						}),
					),
				).toBeNull();
			});

			it("deve retornar null para updatedById", () => {
				expect(
					extractRelationInfo(
						createMockField({
							name: "updatedById",
							type: "context",
							interface: null,
						}),
					),
				).toBeNull();
			});
		});

		describe("relações de sistema", () => {
			it("deve detectar createdBy como belongsTo users", () => {
				expect(
					extractRelationInfo(
						createMockField({
							name: "createdBy",
							type: "belongsTo",
							interface: "createdBy",
							target: "users",
						}),
					),
				).toEqual({ type: "belongsTo", targetCollection: "users" });
			});

			it("deve detectar updatedBy como belongsTo users", () => {
				expect(
					extractRelationInfo(
						createMockField({
							name: "updatedBy",
							type: "belongsTo",
							interface: "updatedBy",
							target: "users",
						}),
					),
				).toEqual({ type: "belongsTo", targetCollection: "users" });
			});

			it("deve detectar parent como relação one", () => {
				expect(
					extractRelationInfo(
						createMockField({
							name: "parent",
							type: "belongsTo",
							interface: "m2o",
							target: "departments",
						}),
					),
				).toEqual({ type: "m2o", targetCollection: "departments" });
			});

			it("deve detectar children como relação many", () => {
				expect(
					extractRelationInfo(
						createMockField({
							name: "children",
							type: "hasMany",
							interface: null,
							target: "departments",
						}),
					),
				).toEqual({ type: "hasMany", targetCollection: "departments" });
			});

			it("deve detectar storage como belongsTo", () => {
				expect(
					extractRelationInfo(
						createMockField({
							name: "storage",
							type: "belongsTo",
							interface: null,
							target: "storages",
						}),
					),
				).toEqual({ type: "belongsTo", targetCollection: "storages" });
			});
		});

		describe("relações many-to-one (m2o)", () => {
			it("deve extrair informações de relação belongsTo", () => {
				expect(
					extractRelationInfo(
						createMockField({
							name: "f_setor",
							type: "belongsTo",
							interface: "m2o",
							target: "t_setores",
						}),
					),
				).toEqual({ type: "m2o", targetCollection: "t_setores" });
			});
		});

		describe("relações one-to-many (o2m)", () => {
			it("deve extrair informações de relação hasMany", () => {
				expect(
					extractRelationInfo(
						createMockField({
							name: "funcionarios",
							type: "hasMany",
							interface: "o2m",
							target: "f_funcionarios",
						}),
					),
				).toEqual({ type: "o2m", targetCollection: "f_funcionarios" });
			});
		});

		describe("relações many-to-many (m2m)", () => {
			it("deve extrair informações de relação belongsToMany", () => {
				expect(
					extractRelationInfo(
						createMockField({
							name: "servicos",
							type: "belongsToMany",
							interface: "m2m",
							target: "t_servicos",
						}),
					),
				).toEqual({ type: "m2m", targetCollection: "t_servicos" });
			});
		});

		describe("relações com interface null (fallback por field.type)", () => {
			it("deve detectar belongsToMany quando interface é None", () => {
				expect(
					extractRelationInfo(
						createMockField({
							name: "menuUiSchemas",
							type: "belongsToMany",
							interface: null,
							target: "uiSchemas",
						}),
					),
				).toEqual({ type: "m2m", targetCollection: "uiSchemas" });
			});

			it("deve detectar hasMany quando interface é None", () => {
				expect(
					extractRelationInfo(
						createMockField({
							name: "resources",
							type: "hasMany",
							interface: null,
							target: "dataSourcesRolesResources",
						}),
					),
				).toEqual({
					type: "hasMany",
					targetCollection: "dataSourcesRolesResources",
				});
			});

			it("deve detectar belongsTo quando interface é None", () => {
				expect(
					extractRelationInfo(
						createMockField({
							name: "f_categoria",
							type: "belongsTo",
							interface: null,
							target: "t_categorias",
						}),
					),
				).toEqual({ type: "belongsTo", targetCollection: "t_categorias" });
			});
		});

		describe("relações com interface attachment", () => {
			it("deve detectar belongsToMany com interface attachment", () => {
				expect(
					extractRelationInfo(
						createMockField({
							name: "f_anexos",
							type: "belongsToMany",
							interface: "attachment",
							target: "attachments",
						}),
					),
				).toEqual({ type: "m2m", targetCollection: "attachments" });
			});
		});

		describe("campos não relacionais", () => {
			const nonRelationalFields = [
				{ name: "nome", type: "string", interface: "input" },
				{ name: "idade", type: "integer", interface: "integer" },
				{ name: "ativo", type: "boolean", interface: "checkbox" },
			];

			for (const field of nonRelationalFields) {
				it(`deve retornar null para campos ${field.type}`, () => {
					expect(extractRelationInfo(createMockField(field))).toBeNull();
				});
			}
		});
	});
});
