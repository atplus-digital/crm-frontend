import {
	DEFAULT_BASE_INTERFACE_NAMING,
	formatBaseInterfaceName,
	formatBaseInterfacePattern,
	formatKey,
	resolveBaseInterfaceNamingConfig,
	toCollectionBaseTypeName,
	toCollectionTypeName,
	toFileName,
	toPascalCase,
	toValidIdentifier,
	UNNAMED_COLLECTION_TYPE_NAME,
} from "@scripts/generate-types/src/utils/naming";
import { describe, expect, it } from "vitest";

describe("naming utilities", () => {
	describe("toPascalCase", () => {
		it("returns empty string for empty input", () => {
			expect(toPascalCase("")).toBe("");
		});

		it("removes t_ prefix", () => {
			expect(toPascalCase("t_negociacoes")).toBe("Negociacoes");
			expect(toPascalCase("t_users")).toBe("Users");
		});

		it("converts underscores to PascalCase", () => {
			expect(toPascalCase("user_roles")).toBe("UserRoles");
			expect(toPascalCase("my_collection_name")).toBe("MyCollectionName");
		});

		it("converts hyphens to PascalCase", () => {
			expect(toPascalCase("user-roles")).toBe("UserRoles");
			expect(toPascalCase("my-collection-name")).toBe("MyCollectionName");
		});

		it("handles mixed underscores and hyphens", () => {
			expect(toPascalCase("user_roles-test")).toBe("UserRolesTest");
			expect(toPascalCase("my-collection_name-test")).toBe(
				"MyCollectionNameTest",
			);
		});

		it("preserves numbers", () => {
			expect(toPascalCase("user_v2")).toBe("UserV2");
			expect(toPascalCase("v1_api")).toBe("V1Api");
		});

		it("handles single word", () => {
			expect(toPascalCase("users")).toBe("Users");
			expect(toPascalCase("departments")).toBe("Departments");
		});

		it("handles already PascalCase input", () => {
			expect(toPascalCase("Users")).toBe("Users");
			expect(toPascalCase("UserRoles")).toBe("UserRoles");
		});

		it("handles input with t_ prefix and PascalCase already", () => {
			expect(toPascalCase("t_Users")).toBe("Users");
			expect(toPascalCase("t_UserRoles")).toBe("UserRoles");
		});
	});

	describe("toValidIdentifier", () => {
		it("returns underscore for empty input", () => {
			expect(toValidIdentifier("")).toBe("_");
		});

		it("prefixes with underscore when starting with number", () => {
			expect(toValidIdentifier("123abc")).toBe("_123abc");
			expect(toValidIdentifier("1user")).toBe("_1user");
		});

		it("replaces special characters with underscore", () => {
			expect(toValidIdentifier("my-var")).toBe("my_var");
			expect(toValidIdentifier("user@email")).toBe("user_email");
			expect(toValidIdentifier("test.name")).toBe("test_name");
			expect(toValidIdentifier("a/b/c")).toBe("a_b_c");
		});

		it("preserves valid identifiers", () => {
			expect(toValidIdentifier("userId")).toBe("userId");
			expect(toValidIdentifier("my_var")).toBe("my_var");
			expect(toValidIdentifier("_private")).toBe("_private");
			expect(toValidIdentifier("$special")).toBe("$special");
		});

		it("preserves underscores", () => {
			expect(toValidIdentifier("user_name")).toBe("user_name");
			expect(toValidIdentifier("my_long_name")).toBe("my_long_name");
		});

		it("handles multiple special characters", () => {
			expect(toValidIdentifier("user@name.com")).toBe("user_name_com");
			expect(toValidIdentifier("my-var.test")).toBe("my_var_test");
		});
	});

	describe("formatKey", () => {
		it("returns identifier without quotes for valid identifiers", () => {
			expect(formatKey("userId")).toBe("userId");
			expect(formatKey("my_var")).toBe("my_var");
			expect(formatKey("_private")).toBe("_private");
		});

		it("returns quoted string for identifiers starting with number", () => {
			expect(formatKey("123")).toBe('"123"');
			expect(formatKey("123abc")).toBe('"123abc"');
		});

		it("returns quoted string for identifiers with hyphens", () => {
			expect(formatKey("user-id")).toBe('"user-id"');
			expect(formatKey("my-key-name")).toBe('"my-key-name"');
		});

		it("returns quoted string for identifiers with special characters", () => {
			expect(formatKey("user@email")).toBe('"user@email"');
			expect(formatKey("a/b")).toBe('"a/b"');
			expect(formatKey("test.name")).toBe('"test.name"');
		});

		it("handles edge cases", () => {
			expect(formatKey("")).toBe('""');
			expect(formatKey("$valid")).toBe("$valid");
		});
	});

	describe("toCollectionTypeName", () => {
		it("converts normal collection names", () => {
			expect(toCollectionTypeName("users")).toBe("Users");
			expect(toCollectionTypeName("departments")).toBe("Departments");
		});

		it("removes t_ prefix", () => {
			expect(toCollectionTypeName("t_negociacoes")).toBe("Negociacoes");
			expect(toCollectionTypeName("t_users")).toBe("Users");
		});

		it("handles hyphenated names", () => {
			expect(toCollectionTypeName("user-roles")).toBe("UserRoles");
			expect(toCollectionTypeName("t_user-roles")).toBe("UserRoles");
		});

		it("handles names with underscores", () => {
			expect(toCollectionTypeName("user_roles")).toBe("UserRoles");
			expect(toCollectionTypeName("t_user_roles")).toBe("UserRoles");
		});

		it("handles empty string", () => {
			expect(toCollectionTypeName("")).toBe("_");
		});

		it("ensures valid identifier", () => {
			expect(toCollectionTypeName("123users")).toBe("_123users");
			expect(toCollectionTypeName("user-name")).toBe("UserName");
		});
	});

	describe("toCollectionBaseTypeName", () => {
		it("converts normal collection names with default suffix", () => {
			expect(toCollectionBaseTypeName("users")).toBe("UsersBase");
			expect(toCollectionBaseTypeName("departments")).toBe("DepartmentsBase");
		});

		it("removes t_ prefix", () => {
			expect(toCollectionBaseTypeName("t_negociacoes")).toBe("NegociacoesBase");
		});

		it("returns UNNAMED_COLLECTION_TYPE_NAME for empty string", () => {
			expect(toCollectionBaseTypeName("")).toBe(UNNAMED_COLLECTION_TYPE_NAME);
		});

		it("returns UNNAMED_COLLECTION_TYPE_NAME for whitespace only", () => {
			expect(toCollectionBaseTypeName("   ")).toBe(
				UNNAMED_COLLECTION_TYPE_NAME,
			);
			expect(toCollectionBaseTypeName("\t\n")).toBe(
				UNNAMED_COLLECTION_TYPE_NAME,
			);
		});

		it("applies custom prefix", () => {
			expect(toCollectionBaseTypeName("users", { prefix: "I" })).toBe(
				"IUsersBase",
			);
			expect(toCollectionBaseTypeName("departments", { prefix: "T" })).toBe(
				"TDepartmentsBase",
			);
		});

		it("applies custom suffix", () => {
			expect(toCollectionBaseTypeName("users", { suffix: "Entity" })).toBe(
				"UsersEntity",
			);
			expect(toCollectionBaseTypeName("departments", { suffix: "Dto" })).toBe(
				"DepartmentsDto",
			);
		});

		it("applies custom prefix and suffix", () => {
			expect(
				toCollectionBaseTypeName("users", { prefix: "I", suffix: "Entity" }),
			).toBe("IUsersEntity");
		});

		it("applies no prefix and no suffix", () => {
			expect(
				toCollectionBaseTypeName("users", { prefix: "", suffix: "" }),
			).toBe("Users");
		});

		it("handles hyphenated names", () => {
			expect(toCollectionBaseTypeName("user-roles")).toBe("UserRolesBase");
		});

		it("uses formatBaseInterfaceName internally", () => {
			const config = { prefix: "Interface", suffix: "Model" };
			expect(toCollectionBaseTypeName("test", config)).toBe(
				"InterfaceTestModel",
			);
		});
	});

	describe("toFileName", () => {
		it("removes t_ prefix", () => {
			expect(toFileName("t_negociacoes")).toBe("negociacoes");
			expect(toFileName("t_users")).toBe("users");
		});

		it("removes f_ prefix", () => {
			expect(toFileName("f_funcionarios")).toBe("funcionarios");
			expect(toFileName("f_features")).toBe("features");
		});

		it("converts underscores to kebab-case", () => {
			expect(toFileName("user_roles")).toBe("user-roles");
			expect(toFileName("my_collection_name")).toBe("my-collection-name");
		});

		it("preserves kebab-case", () => {
			expect(toFileName("user-roles")).toBe("user-roles");
			expect(toFileName("my-collection-name")).toBe("my-collection-name");
		});

		it("handles mixed underscores and hyphens", () => {
			expect(toFileName("user_roles-test")).toBe("user-roles-test");
			expect(toFileName("my_collection-name_test")).toBe(
				"my-collection-name-test",
			);
		});

		it("handles normal names without prefix", () => {
			expect(toFileName("users")).toBe("users");
			expect(toFileName("departments")).toBe("departments");
		});

		it("preserves numbers", () => {
			expect(toFileName("user_v2")).toBe("user-v2");
			expect(toFileName("v1api")).toBe("v1api");
		});

		it("handles empty string", () => {
			expect(toFileName("")).toBe("");
		});

		it("handles consecutive delimiters", () => {
			expect(toFileName("user__roles")).toBe("user-roles");
			expect(toFileName("user--roles")).toBe("user-roles");
		});
	});

	describe("formatBaseInterfaceName", () => {
		it("applies default prefix and suffix", () => {
			expect(formatBaseInterfaceName("Users")).toBe("UsersBase");
			expect(formatBaseInterfaceName("UserRoles")).toBe("UserRolesBase");
		});

		it("applies empty prefix and empty suffix", () => {
			expect(formatBaseInterfaceName("Users", { prefix: "", suffix: "" })).toBe(
				"Users",
			);
		});

		it("applies I prefix and no suffix", () => {
			expect(
				formatBaseInterfaceName("Users", { prefix: "I", suffix: "" }),
			).toBe("IUsers");
		});

		it("applies no prefix and Base suffix", () => {
			expect(
				formatBaseInterfaceName("Users", { prefix: "", suffix: "Base" }),
			).toBe("UsersBase");
		});

		it("applies custom prefix and suffix", () => {
			expect(
				formatBaseInterfaceName("Users", { prefix: "I", suffix: "Interface" }),
			).toBe("IUsersInterface");
			expect(
				formatBaseInterfaceName("Users", { prefix: "T", suffix: "Dto" }),
			).toBe("TUsersDto");
		});
	});

	describe("formatBaseInterfacePattern", () => {
		it("returns pattern with default suffix", () => {
			expect(formatBaseInterfacePattern()).toBe("<Collection>Base");
		});

		it("calls formatBaseInterfaceName with <Collection>", () => {
			expect(formatBaseInterfacePattern({ prefix: "I", suffix: "" })).toBe(
				"I<Collection>",
			);
			expect(
				formatBaseInterfacePattern({ prefix: "", suffix: "Interface" }),
			).toBe("<Collection>Interface");
			expect(formatBaseInterfacePattern({ prefix: "T", suffix: "Dto" })).toBe(
				"T<Collection>Dto",
			);
		});

		it("uses default config when not provided", () => {
			expect(formatBaseInterfacePattern()).toBe(
				formatBaseInterfaceName("<Collection>"),
			);
		});
	});

	describe("resolveBaseInterfaceNamingConfig", () => {
		it("returns defaults when undefined", () => {
			const result = resolveBaseInterfaceNamingConfig(undefined);
			expect(result).toEqual(DEFAULT_BASE_INTERFACE_NAMING);
			expect(result.prefix).toBe("");
			expect(result.suffix).toBe("Base");
		});

		it("returns defaults when empty object", () => {
			const result = resolveBaseInterfaceNamingConfig({});
			expect(result).toEqual(DEFAULT_BASE_INTERFACE_NAMING);
		});

		it("overrides prefix only", () => {
			const result = resolveBaseInterfaceNamingConfig({ prefix: "I" });
			expect(result.prefix).toBe("I");
			expect(result.suffix).toBe("Base");
		});

		it("overrides suffix only", () => {
			const result = resolveBaseInterfaceNamingConfig({ suffix: "Entity" });
			expect(result.prefix).toBe("");
			expect(result.suffix).toBe("Entity");
		});

		it("overrides both prefix and suffix", () => {
			const result = resolveBaseInterfaceNamingConfig({
				prefix: "I",
				suffix: "Interface",
			});
			expect(result.prefix).toBe("I");
			expect(result.suffix).toBe("Interface");
		});

		it("preserves empty values explicitly", () => {
			const result = resolveBaseInterfaceNamingConfig({
				prefix: "",
				suffix: "",
			});
			expect(result.prefix).toBe("");
			expect(result.suffix).toBe("");
		});
	});
});
