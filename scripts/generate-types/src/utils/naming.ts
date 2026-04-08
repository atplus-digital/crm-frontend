import type { BaseInterfaceNamingConfig } from "@scripts/generate-types/src/@types/script";

const VALID_IDENTIFIER = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;

export const DEFAULT_BASE_INTERFACE_NAMING: BaseInterfaceNamingConfig = {
	prefix: "",
	suffix: "Base",
};

export function resolveBaseInterfaceNamingConfig(
	baseInterfaceNaming?: Partial<BaseInterfaceNamingConfig>,
): BaseInterfaceNamingConfig {
	return {
		prefix: baseInterfaceNaming?.prefix ?? DEFAULT_BASE_INTERFACE_NAMING.prefix,
		suffix: baseInterfaceNaming?.suffix ?? DEFAULT_BASE_INTERFACE_NAMING.suffix,
	};
}

export function formatBaseInterfaceName(
	typeName: string,
	baseInterfaceNaming?: Partial<BaseInterfaceNamingConfig>,
): string {
	const naming = resolveBaseInterfaceNamingConfig(baseInterfaceNaming);
	return `${naming.prefix}${typeName}${naming.suffix}`;
}

export function formatBaseInterfacePattern(
	baseInterfaceNaming?: Partial<BaseInterfaceNamingConfig>,
): string {
	return formatBaseInterfaceName("<Collection>", baseInterfaceNaming);
}

/**
 * Converte nome para PascalCase.
 * Remove prefixo "t_" se presente.
 *
 * @param name - Nome a ser convertido
 * @returns Nome em PascalCase
 *
 * @example
 * ```typescript
 * toPascalCase("t_negociacoes")    // "Negociacoes"
 * toPascalCase("user_roles")       // "UserRoles"
 * toPascalCase("departments")      // "Departments"
 * ```
 */
export function toPascalCase(name: string): string {
	const withoutPrefix = name.startsWith("t_") ? name.slice(2) : name;
	return withoutPrefix
		.split(/[^a-zA-Z0-9]+/)
		.filter(Boolean)
		.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
		.join("");
}

/**
 * Converte nome para identificador TypeScript válido.
 * Substitui caracteres inválidos por underscore.
 *
 * @param name - Nome a ser convertido
 * @returns Identificador válido
 *
 * @example
 * ```typescript
 * toValidIdentifier("my-var")      // "my_var"
 * toValidIdentifier("123abc")      // "_123abc"
 * toValidIdentifier("user@email")  // "user_email"
 * ```
 */
export function toValidIdentifier(name: string): string {
	const normalized = name.replace(/[^a-zA-Z0-9_$]/g, "_");
	if (!normalized) {
		return "_";
	}

	return /^\d/.test(normalized) ? `_${normalized}` : normalized;
}

/**
 * Formata chave de objeto TypeScript.
 * Adiciona aspas se não for identificador válido.
 *
 * @param name - Nome da chave
 * @returns Chave formatada (com ou sem aspas)
 *
 * @example
 * ```typescript
 * formatKey("userId")        // "userId"
 * formatKey("user-id")       // "\"user-id\""
 * formatKey("123")           // "\"123\""
 * ```
 */
export function formatKey(name: string): string {
	return VALID_IDENTIFIER.test(name) ? name : `"${name}"`;
}

/**
 * Converte nome de collection para nome de tipo TypeScript.
 * Aplica PascalCase e normalização.
 *
 * @param collectionName - Nome da collection
 * @returns Nome do tipo TypeScript
 *
 * @example
 * ```typescript
 * toCollectionTypeName("users")             // "Users"
 * toCollectionTypeName("t_negociacoes")     // "Negociacoes"
 * toCollectionTypeName("user-roles")        // "UserRoles"
 * ```
 */
export function toCollectionTypeName(collectionName: string): string {
	return toValidIdentifier(toPascalCase(collectionName));
}

/**
 * Converte nome de collection para nome de tipo Base.
 * Aplica prefixo/sufixo configuráveis ao nome do tipo.
 *
 * @param collectionName - Nome da collection
 * @returns Nome do tipo Base (ex: UsersBase)
 *
 * @example
 * ```typescript
 * toCollectionBaseTypeName("users")         // "UsersBase"
 * toCollectionBaseTypeName("t_negociacoes") // "NegociacoesBase"
 * toCollectionBaseTypeName("users", { prefix: "I" }) // "IUsersBase"
 * toCollectionBaseTypeName("")              // "unknown"
 * ```
 */
export function toCollectionBaseTypeName(
	collectionName: string,
	baseInterfaceNaming?: Partial<BaseInterfaceNamingConfig>,
): string {
	const normalizedName = collectionName.trim();
	if (!normalizedName) {
		return "unknown";
	}

	return formatBaseInterfaceName(
		toCollectionTypeName(normalizedName),
		baseInterfaceNaming,
	);
}

/**
 * Converte nome de collection para nome de arquivo kebab-case.
 * Remove prefixo "t_" ou "f_" se presente.
 *
 * @param collectionName - Nome da collection
 * @returns Nome de arquivo em kebab-case
 *
 * @example
 * ```typescript
 * toFileName("t_negociacoes")    // "negociacoes"
 * toFileName("f_funcionarios")   // "funcionarios"
 * toFileName("user_roles")       // "user-roles"
 * toFileName("users")            // "users"
 * ```
 */
export function toFileName(collectionName: string): string {
	const withoutPrefix = collectionName.replace(/^[tf]_/, "");
	return withoutPrefix
		.split(/[^a-zA-Z0-9]+/)
		.filter(Boolean)
		.map((part) => part.toLowerCase())
		.join("-");
}
