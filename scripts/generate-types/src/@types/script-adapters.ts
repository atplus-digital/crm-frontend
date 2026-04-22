export interface BaseInterfaceNamingConfig {
	prefix: string;
	suffix: string;
}

/**
 * Resultado de enum vindo de um adapter externo (Wiki IXC, etc).
 * values é o array de valores possíveis do enum.
 * labels é opcional — quando disponível, substitui a inferência por heurística.
 */
export interface EnumAdapterFieldEnum {
	values: string[];
	labels?: Record<string, string>;
}

/**
 * Definição de relação manual para datasource.
 * Usado para mapear explicitamente campos de relação que não são detectados automaticamente.
 */
export interface ManualRelationMapping {
	[fieldName: string]: {
		/** Collection alvo da relação */
		target: string;
		/** Tipo de relação (belongsTo, hasMany, etc) */
		type: "belongsTo" | "hasMany" | "m2m" | "hasOne";
	};
}

/**
 * Adapter de relações para fontes externas.
 * Permite que datasources busquem informações de relacionamento de APIs/documentação
 * antes do fallback por inferência de convenção de nomes.
 */
export interface RelationsAdapter {
	/** Nome descritivo do adapter (usado em logs). */
	name: string;
	/**
	 * Busca relações de fonte externa para uma collection.
	 * @param collectionName Nome da collection para buscar relações.
	 * @returns Mapa de campo → dados da relação. Retornar {} significa "sem relações para esta collection".
	 * @throws Erro → o fallback por inferência é utilizado automaticamente.
	 */
	fetchRelations(
		collectionName: string,
	): Promise<
		Record<
			string,
			{ target: string; type: "belongsTo" | "hasMany" | "m2m" | "hasOne" }
		>
	>;
}

/**
 * Adapter de enum para fontes externas.
 * Permite que datasources busquem valores de enum completos de APIs/documentation
 * antes do fallback por amostragem.
 *
 * A função recebe o nome da collection e retorna um mapa de campo → EnumAdapterFieldEnum.
 * Em caso de falha ou retorno vazio, o pipeline usa o fallback sample-based normalmente.
 */
export interface EnumAdapter {
	/** Nome descritivo do adapter (usado em logs). */
	name: string;
	/**
	 * Busca enums de fonte externa para uma collection.
	 * @param collectionName Nome da collection para buscar enums.
	 * @returns Mapa de campo → dados do enum. Retornar {} significa "sem enums para esta collection".
	 * @throws Erro → o fallback sample-based é utilizado automaticamente.
	 */
	fetchEnums(
		collectionName: string,
	): Promise<Record<string, EnumAdapterFieldEnum>>;
}

export interface EnumCorrectionRule {
	collection: string;
	field: string;
	values?: string[];
	labels: Record<string, string>;
}

export type EnumCorrectionConfig = EnumCorrectionRule[];
