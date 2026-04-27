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
	/** Marker string — writer will output actual z.any() code */
	payloadSchema: "z.any()";
}
