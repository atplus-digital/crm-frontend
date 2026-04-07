import type { NocoBaseField } from "@scripts/generate-types/src/@types/nocobase";
import {
	extractRelationInfo,
	mapFieldType,
} from "@scripts/generate-types/src/generation/field-mapper";
import { describe, expect, it } from "vitest";

describe("field-mapper", () => {
	describe("mapFieldType", () => {
		describe("campos de sistema de auditoria", () => {
			it("deve mapear createdBy para UsersBase | null", () => {
				const field: NocoBaseField = {
					name: "createdBy",
					type: "belongsTo",
					interface: "createdBy",
					target: "users",
				};

				expect(mapFieldType(field)).toBe("UsersBase | null");
			});

			it("deve mapear updatedBy para UsersBase | null", () => {
				const field: NocoBaseField = {
					name: "updatedBy",
					type: "belongsTo",
					interface: "updatedBy",
					target: "users",
				};

				expect(mapFieldType(field)).toBe("UsersBase | null");
			});

			it("deve mapear createdById para number | null", () => {
				const field: NocoBaseField = {
					name: "createdById",
					type: "bigInt",
					interface: "integer",
				};

				expect(mapFieldType(field)).toBe("number | null");
			});

			it("deve mapear updatedById para number | null", () => {
				const field: NocoBaseField = {
					name: "updatedById",
					type: "bigInt",
					interface: "integer",
				};

				expect(mapFieldType(field)).toBe("number | null");
			});
		});

		describe("campos de hierarquia (self-reference)", () => {
			it("deve mapear parent corretamente", () => {
				const field: NocoBaseField = {
					name: "parent",
					type: "belongsTo",
					interface: "m2o",
					target: "t_telecom_recursos",
				};

				const result = mapFieldType(field);
				expect(result).toBe("TelecomRecursosBase | null");
			});

			it("deve mapear children corretamente", () => {
				const field: NocoBaseField = {
					name: "children",
					type: "hasMany",
					interface: "o2m",
					target: "departments",
				};

				const result = mapFieldType(field);
				expect(result).toBe("DepartmentsBase[]");
			});
		});

		describe("campo de metadata", () => {
			it("deve mapear storage para Record<string, unknown>", () => {
				const field: NocoBaseField = {
					name: "storage",
					type: "json",
					interface: "json",
				};

				expect(mapFieldType(field)).toBe("Record<string, unknown>");
			});
		});

		describe("tipos de string", () => {
			it("deve mapear string para string", () => {
				const field: NocoBaseField = {
					name: "nome",
					type: "string",
					interface: "input",
				};

				expect(mapFieldType(field)).toBe("string");
			});

			it("deve mapear text para string", () => {
				const field: NocoBaseField = {
					name: "descricao",
					type: "text",
					interface: "textarea",
				};

				expect(mapFieldType(field)).toBe("string");
			});

			it("deve mapear email para string", () => {
				const field: NocoBaseField = {
					name: "email",
					type: "string",
					interface: "email",
				};

				expect(mapFieldType(field)).toBe("string");
			});

			it("deve mapear url para string", () => {
				const field: NocoBaseField = {
					name: "website",
					type: "string",
					interface: "url",
				};

				expect(mapFieldType(field)).toBe("string");
			});

			it("deve mapear phone para string", () => {
				const field: NocoBaseField = {
					name: "telefone",
					type: "string",
					interface: "phone",
				};

				expect(mapFieldType(field)).toBe("string");
			});

			it("deve mapear snowflakeId para string", () => {
				const field: NocoBaseField = {
					name: "id",
					type: "snowflakeId",
					interface: "snowflakeId",
				};

				expect(mapFieldType(field)).toBe("string");
			});

			it("deve mapear formula para string", () => {
				const field: NocoBaseField = {
					name: "calculado",
					type: "formula",
					interface: "formula",
				};

				expect(mapFieldType(field)).toBe("string");
			});

			it("deve mapear sequence para string", () => {
				const field: NocoBaseField = {
					name: "numero",
					type: "sequence",
					interface: "sequence",
				};

				expect(mapFieldType(field)).toBe("string");
			});

			it("deve mapear password para string", () => {
				const field: NocoBaseField = {
					name: "senha",
					type: "password",
					interface: "password",
				};

				expect(mapFieldType(field)).toBe("string");
			});

			it("deve mapear nanoid para string", () => {
				const field: NocoBaseField = {
					name: "uid",
					type: "nanoid",
					interface: "nanoid",
				};

				expect(mapFieldType(field)).toBe("string");
			});

			it("deve mapear uid para string", () => {
				const field: NocoBaseField = {
					name: "identificador",
					type: "uid",
					interface: "input",
				};

				expect(mapFieldType(field)).toBe("string");
			});

			it("deve mapear lineString para string", () => {
				const field: NocoBaseField = {
					name: "rota",
					type: "lineString",
					interface: "lineString",
				};

				expect(mapFieldType(field)).toBe("string");
			});

			it("deve mapear point para string", () => {
				const field: NocoBaseField = {
					name: "localizacao",
					type: "point",
					interface: "point",
				};

				expect(mapFieldType(field)).toBe("string");
			});
		});

		describe("tipos de data/hora", () => {
			it("deve mapear date para string", () => {
				const field: NocoBaseField = {
					name: "dataEvento",
					type: "date",
					interface: "datetime",
				};

				expect(mapFieldType(field)).toBe("string");
			});

			it("deve mapear dateOnly para string", () => {
				const field: NocoBaseField = {
					name: "dataNascimento",
					type: "dateOnly",
					interface: "date",
				};

				expect(mapFieldType(field)).toBe("string");
			});
		});

		describe("tipos numéricos", () => {
			it("deve mapear integer para number", () => {
				const field: NocoBaseField = {
					name: "quantidade",
					type: "integer",
					interface: "integer",
				};

				expect(mapFieldType(field)).toBe("number");
			});

			it("deve mapear bigInt para number", () => {
				const field: NocoBaseField = {
					name: "id",
					type: "bigInt",
					interface: "integer",
				};

				expect(mapFieldType(field)).toBe("number");
			});

			it("deve mapear double para number", () => {
				const field: NocoBaseField = {
					name: "preco",
					type: "double",
					interface: "number",
				};

				expect(mapFieldType(field)).toBe("number");
			});

			it("deve mapear sort para number", () => {
				const field: NocoBaseField = {
					name: "ordem",
					type: "sort",
					interface: "sort",
				};

				expect(mapFieldType(field)).toBe("number");
			});
		});

		describe("tipo boolean", () => {
			it("deve mapear boolean para boolean", () => {
				const field: NocoBaseField = {
					name: "ativo",
					type: "boolean",
					interface: "checkbox",
				};

				expect(mapFieldType(field)).toBe("boolean");
			});
		});

		describe("tipos de objeto/JSON", () => {
			it("deve mapear json para Record<string, unknown>", () => {
				const field: NocoBaseField = {
					name: "config",
					type: "json",
					interface: "json",
				};

				expect(mapFieldType(field)).toBe("Record<string, unknown>");
			});

			it("deve mapear jsonb para Record<string, unknown>", () => {
				const field: NocoBaseField = {
					name: "metadata",
					type: "jsonb",
					interface: "json",
				};

				expect(mapFieldType(field)).toBe("Record<string, unknown>");
			});
		});

		describe("tipo array", () => {
			it("deve mapear array para string[]", () => {
				const field: NocoBaseField = {
					name: "tags",
					type: "array",
					interface: "multipleSelect",
				};

				expect(mapFieldType(field)).toBe("string[]");
			});
		});

		describe("interfaces especiais", () => {
			it("deve mapear context para unknown", () => {
				const field: NocoBaseField = {
					name: "contexto",
					type: "string",
					interface: "context",
				};

				expect(mapFieldType(field)).toBe("unknown");
			});

			it("deve mapear interface set para unknown[]", () => {
				const field: NocoBaseField = {
					name: "opcoes",
					type: "string",
					interface: "set",
				};

				expect(mapFieldType(field)).toBe("unknown[]");
			});

			it("deve mapear type set para unknown[] via FIELD_TYPE_MAP", () => {
				const field: NocoBaseField = {
					name: "f_fk_funcionarios",
					type: "set",
					interface: "json",
				};

				expect(mapFieldType(field)).toBe("unknown[]");
			});
		});

		describe("tipos desconhecidos", () => {
			it("deve retornar unknown para tipo não mapeado", () => {
				const field = {
					name: "campo",
					type: "tipoDesconhecido",
					interface: "input",
				} as NocoBaseField;

				expect(mapFieldType(field)).toBe("unknown");
			});
		});
	});

	describe("extractRelationInfo", () => {
		describe("campos de sistema", () => {
			it("deve retornar null para createdBy", () => {
				const field: NocoBaseField = {
					name: "createdBy",
					type: "belongsTo",
					interface: "createdBy",
					target: "users",
				};

				expect(extractRelationInfo(field)).toBeNull();
			});

			it("deve retornar null para updatedBy", () => {
				const field: NocoBaseField = {
					name: "updatedBy",
					type: "belongsTo",
					interface: "updatedBy",
					target: "users",
				};

				expect(extractRelationInfo(field)).toBeNull();
			});

			it("deve retornar null para parent", () => {
				const field: NocoBaseField = {
					name: "parent",
					type: "belongsTo",
					interface: "m2o",
					target: "departments",
				};

				expect(extractRelationInfo(field)).toBeNull();
			});

			it("deve retornar null para children", () => {
				const field: NocoBaseField = {
					name: "children",
					type: "hasMany",
					interface: "o2m",
					target: "departments",
				};

				expect(extractRelationInfo(field)).toBeNull();
			});
		});

		describe("relações many-to-one (m2o)", () => {
			it("deve extrair informações de relação belongsTo", () => {
				const field: NocoBaseField = {
					name: "f_setor",
					type: "belongsTo",
					interface: "m2o",
					target: "t_setores",
				};

				const result = extractRelationInfo(field);
				expect(result).toEqual({
					type: "m2o",
					targetCollection: "t_setores",
				});
			});
		});

		describe("relações one-to-many (o2m)", () => {
			it("deve extrair informações de relação hasMany", () => {
				const field: NocoBaseField = {
					name: "funcionarios",
					type: "hasMany",
					interface: "o2m",
					target: "f_funcionarios",
				};

				const result = extractRelationInfo(field);
				expect(result).toEqual({
					type: "o2m",
					targetCollection: "f_funcionarios",
				});
			});
		});

		describe("relações many-to-many (m2m)", () => {
			it("deve extrair informações de relação belongsToMany", () => {
				const field: NocoBaseField = {
					name: "servicos",
					type: "belongsToMany",
					interface: "m2m",
					target: "t_servicos",
				};

				const result = extractRelationInfo(field);
				expect(result).toEqual({
					type: "m2m",
					targetCollection: "t_servicos",
				});
			});
		});

		describe("campos não relacionais", () => {
			it("deve retornar null para campos string", () => {
				const field: NocoBaseField = {
					name: "nome",
					type: "string",
					interface: "input",
				};

				expect(extractRelationInfo(field)).toBeNull();
			});

			it("deve retornar null para campos numéricos", () => {
				const field: NocoBaseField = {
					name: "idade",
					type: "integer",
					interface: "integer",
				};

				expect(extractRelationInfo(field)).toBeNull();
			});

			it("deve retornar null para campos boolean", () => {
				const field: NocoBaseField = {
					name: "ativo",
					type: "boolean",
					interface: "checkbox",
				};

				expect(extractRelationInfo(field)).toBeNull();
			});
		});
	});
});
