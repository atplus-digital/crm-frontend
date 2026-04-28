import { z } from "zod";

export const payloadSchema = z.object({
	id_pedido: z.number(),
	id_fornecedor: z.number(),
	valor: z.number(),
});
