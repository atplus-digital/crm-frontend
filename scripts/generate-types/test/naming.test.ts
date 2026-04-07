import {
	formatKey,
	toCollectionBaseTypeName,
	toCollectionTypeName,
	toFileName,
	toPascalCase,
	toValidIdentifier,
} from "@scripts/generate-types/src/utils/naming";
import { describe, expect, it } from "vitest";

describe("naming - toPascalCase", () => {
	it("deve converter snake_case para PascalCase", () => {
		expect(toPascalCase("user_profile")).toBe("UserProfile");
	});

	it("deve converter kebab-case para PascalCase", () => {
		expect(toPascalCase("user-profile")).toBe("UserProfile");
	});

	it("deve remover prefixo t_ e converter para PascalCase", () => {
		expect(toPascalCase("t_users")).toBe("Users");
		expect(toPascalCase("t_user_profile")).toBe("UserProfile");
	});

	it("deve lidar com múltiplos separadores", () => {
		expect(toPascalCase("my__special--name")).toBe("MySpecialName");
	});

	it("deve lidar com strings sem separadores", () => {
		expect(toPascalCase("users")).toBe("Users");
	});

	it("deve filtrar caracteres não alfanuméricos", () => {
		expect(toPascalCase("user@profile#123")).toBe("UserProfile123");
	});

	it("deve retornar string vazia quando não há caracteres válidos", () => {
		expect(toPascalCase("@#$%")).toBe("");
	});

	it("deve lidar com números no início de partes", () => {
		expect(toPascalCase("user_123_profile")).toBe("User123Profile");
	});

	it("deve preservar maiúsculas existentes dentro das palavras", () => {
		expect(toPascalCase("userID_value")).toBe("UserIDValue");
	});

	it("deve lidar com string vazia", () => {
		expect(toPascalCase("")).toBe("");
	});
});

describe("naming - toValidIdentifier", () => {
	it("deve preservar identificadores válidos", () => {
		expect(toValidIdentifier("validName")).toBe("validName");
		expect(toValidIdentifier("_underscore")).toBe("_underscore");
		expect(toValidIdentifier("$dollar")).toBe("$dollar");
	});

	it("deve substituir caracteres especiais por underscore", () => {
		expect(toValidIdentifier("user-name")).toBe("user_name");
		expect(toValidIdentifier("user@email")).toBe("user_email");
		expect(toValidIdentifier("user.profile")).toBe("user_profile");
	});

	it("deve adicionar underscore quando começa com número", () => {
		expect(toValidIdentifier("123user")).toBe("_123user");
		expect(toValidIdentifier("99problems")).toBe("_99problems");
	});

	it("deve retornar underscore para string vazia após normalização", () => {
		expect(toValidIdentifier("@#$%")).toBe("__$_");
	});

	it("deve lidar com múltiplos caracteres especiais consecutivos", () => {
		expect(toValidIdentifier("user---name")).toBe("user___name");
	});

	it("deve preservar underscores e cifrões existentes", () => {
		expect(toValidIdentifier("user_$name")).toBe("user_$name");
	});

	it("deve lidar com string vazia", () => {
		expect(toValidIdentifier("")).toBe("_");
	});

	it("deve normalizar espaços", () => {
		expect(toValidIdentifier("user name")).toBe("user_name");
	});
});

describe("naming - formatKey", () => {
	it("deve retornar identificador válido sem aspas", () => {
		expect(formatKey("userName")).toBe("userName");
		expect(formatKey("_private")).toBe("_private");
		expect(formatKey("$special")).toBe("$special");
	});

	it("deve adicionar aspas para identificadores inválidos", () => {
		expect(formatKey("user-name")).toBe('"user-name"');
		expect(formatKey("user name")).toBe('"user name"');
		expect(formatKey("123name")).toBe('"123name"');
	});

	it("deve adicionar aspas para strings vazias", () => {
		expect(formatKey("")).toBe('""');
	});

	it("deve adicionar aspas para palavras reservadas (se aplicável)", () => {
		expect(formatKey("user.name")).toBe('"user.name"');
	});

	it("deve lidar com caracteres especiais", () => {
		expect(formatKey("@special")).toBe('"@special"');
		expect(formatKey("user@email")).toBe('"user@email"');
	});
});

describe("naming - toCollectionTypeName", () => {
	it("deve converter nome de coleção para tipo Pascal válido", () => {
		expect(toCollectionTypeName("users")).toBe("Users");
		expect(toCollectionTypeName("user_profiles")).toBe("UserProfiles");
	});

	it("deve remover prefixo t_ antes de converter", () => {
		expect(toCollectionTypeName("t_users")).toBe("Users");
		expect(toCollectionTypeName("t_user_profile")).toBe("UserProfile");
	});

	it("deve lidar com caracteres especiais", () => {
		expect(toCollectionTypeName("user-profiles")).toBe("UserProfiles");
		expect(toCollectionTypeName("user@profiles")).toBe("UserProfiles");
	});

	it("deve adicionar underscore quando necessário", () => {
		expect(toCollectionTypeName("123users")).toBe("_123users");
	});

	it("deve lidar com string vazia", () => {
		expect(toCollectionTypeName("")).toBe("_");
	});

	it("deve lidar com apenas caracteres não alfanuméricos", () => {
		expect(toCollectionTypeName("@#$")).toBe("_");
	});
});

describe("naming - toCollectionBaseTypeName", () => {
	it("deve adicionar sufixo Base ao tipo de coleção", () => {
		expect(toCollectionBaseTypeName("users")).toBe("UsersBase");
		expect(toCollectionBaseTypeName("user_profiles")).toBe("UserProfilesBase");
	});

	it("deve remover prefixo t_ e adicionar sufixo Base", () => {
		expect(toCollectionBaseTypeName("t_users")).toBe("UsersBase");
	});

	it("deve retornar 'unknown' para string vazia", () => {
		expect(toCollectionBaseTypeName("")).toBe("unknown");
	});

	it("deve retornar 'unknown' para string apenas com espaços", () => {
		expect(toCollectionBaseTypeName("   ")).toBe("unknown");
	});

	it("deve fazer trim antes de processar", () => {
		expect(toCollectionBaseTypeName("  users  ")).toBe("UsersBase");
	});

	it("deve lidar com caracteres especiais", () => {
		expect(toCollectionBaseTypeName("user-profiles")).toBe("UserProfilesBase");
	});
});

describe("naming - toFileName", () => {
	it("deve remover prefixo t_ e gerar kebab-case", () => {
		expect(toFileName("t_negociacoes")).toBe("negociacoes");
	});

	it("deve remover prefixo f_ e gerar kebab-case", () => {
		expect(toFileName("f_funcionarios")).toBe("funcionarios");
	});

	it("deve converter snake_case para kebab-case", () => {
		expect(toFileName("user_roles")).toBe("user-roles");
	});

	it("deve manter nomes simples sem alteração", () => {
		expect(toFileName("users")).toBe("users");
	});

	it("deve lidar com múltiplos separadores", () => {
		expect(toFileName("my__special--name")).toBe("my-special-name");
	});

	it("deve converter para minúsculas", () => {
		expect(toFileName("UserRoles")).toBe("userroles");
	});

	it("deve lidar com string vazia", () => {
		expect(toFileName("")).toBe("");
	});

	it("deve lidar com prefixo t_ seguido de snake_case", () => {
		expect(toFileName("t_telecom_recursos")).toBe("telecom-recursos");
	});

	it("deve lidar com prefixo f_ seguido de snake_case", () => {
		expect(toFileName("f_user_profiles")).toBe("user-profiles");
	});
});
