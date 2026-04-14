import { z } from "zod";

/**
 * Schema for "Criar Contrato IXC" request (ID: 37yaihkravc)
 * Used to create contracts in IXCSoft integration.
 */
export const criarContratoIxcSchema = z.object({
	/**
	 * Contract ID in the external system
	 * Must be a positive integer
	 */
	id_contrato: z
		.number()
		.int()
		.positive("id_contrato deve ser um número positivo"),

	/**
	 * Optional vendor/seller ID for commission tracking
	 * Used to attribute the sale to a specific vendor
	 */
	id_vendedor: z.string().optional(),

	/**
	 * Optional observations/notes about the contract
	 * Can include special conditions, customer notes, etc.
	 */
	observacoes: z.string().optional(),
});

/**
 * Schema for "Qualirun Informações Adicionais" request (ID: 0j7f9fuzuo7)
 * Used to submit additional information to Qualirun service.
 */
export const qualirunInfoSchema = z.object({
	/**
	 * Negotiation ID associated with the additional information
	 * Must be a positive integer identifying the negotiation
	 */
	id_negociacao: z
		.number()
		.int()
		.positive("id_negociacao deve ser um número positivo"),

	/**
	 * Additional information text to be submitted
	 * Required field with at least 1 character
	 */
	info_adicional: z.string().min(1, "info_adicional é obrigatória"),
});

/**
 * Schema for "n8n Fluxo de Compras" request (ID: h32vk2yid08)
 * Used to trigger purchase flow automation in n8n.
 */
export const n8nComprasSchema = z.object({
	/**
	 * Negotiation ID to trigger the purchase flow for
	 * Must be a positive integer identifying the negotiation
	 */
	id_negociacao: z
		.number()
		.int()
		.positive("id_negociacao deve ser um número positivo"),

	/**
	 * Flag to enable/disable the purchase flow
	 * true = activate flow, false = deactivate
	 */
	fluxo_compras: z.boolean(),
});

/**
 * Mapped type that associates each custom request key with its payload schema type.
 * Use this for type-safe payload construction based on request ID.
 *
 * @example
 * type ContratoPayload = CustomRequestPayloads["37yaihkravc"];
 * // { id_contrato: number; id_vendedor?: string; observacoes?: string }
 */
export type CustomRequestPayloads = {
	/** "Criar Contrato IXC" - Contract creation for IXCSoft */
	"37yaihkravc": z.infer<typeof criarContratoIxcSchema>;
	/** "Qualirun Informações Adicionais" - Additional info for Qualirun */
	"0j7f9fuzuo7": z.infer<typeof qualirunInfoSchema>;
	/** "n8n Fluxo de Compras" - Purchase flow toggle for n8n */
	h32vk2yid08: z.infer<typeof n8nComprasSchema>;
};

/**
 * Union type of all possible custom request payloads.
 * Useful for generic handlers that accept any custom request payload.
 *
 * @example
 * function sendRequest(payload: CustomRequestPayload) { ... }
 */
export type CustomRequestPayload =
	| z.infer<typeof criarContratoIxcSchema>
	| z.infer<typeof qualirunInfoSchema>
	| z.infer<typeof n8nComprasSchema>;
