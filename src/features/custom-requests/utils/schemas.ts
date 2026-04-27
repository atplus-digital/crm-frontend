import { z } from "zod";

export const templateVariablesSchema = z.object({
	currentRecord: z.record(z.string(), z.unknown()),
	currentUser: z.object({
		id: z.number(),
		email: z.string(),
		username: z.string(),
	}),
	currentTime: z.string(),
});

export type TemplateVariables = z.infer<typeof templateVariablesSchema>;
