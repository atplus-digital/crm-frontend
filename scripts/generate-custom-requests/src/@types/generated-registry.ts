/**
 * Representa uma entrada do registry gerada automaticamente
 * a partir da API NocoBase.
 */
export interface GeneratedRegistryEntry {
	key: string;
	name: string;
	collection: string;
	method: string;
	url: string;
	/** Zod schema string inferred from payloadData shape */
	payloadSchema: string;
	/** Dados do payload options.data retornados pela API */
	payloadData: Record<string, unknown> | null;
}
