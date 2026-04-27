import { z } from "zod";

export const payloadSchema = z.object({
	id_contrato: z.number(),
	id_cliente: z.number(),
	produto: z.string(),
	quantidade: z.number().optional(),
});
