import { z } from "zod";

export const payloadSchema = z.object({
	cnpj: z.string(),
	razao_social: z.string().optional(),
});
