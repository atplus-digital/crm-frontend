import { z } from "zod";

/**
 * Zod schema for validating role data from NocoBase auth:check response.
 * The generated RolesBase type has `snippets: unknown[]` and `strategy: Record<string, unknown>`
 * which provides no runtime safety. These schemas narrow those types.
 */
export const permissionRoleSchema = z.object({
	name: z.string(),
	title: z.string(),
	description: z.string().nullable().optional(),
	strategy: z.object({
		actions: z.array(z.string()),
	}),
	snippets: z.array(z.string()),
	allowConfigure: z.boolean().nullable().optional(),
	allowNewMenu: z.boolean().nullable().optional(),
	allowNewMobileMenu: z.boolean().nullable().optional(),
	hidden: z.boolean(),
	default: z.boolean().optional(),
});

export type PermissionRole = z.infer<typeof permissionRoleSchema>;

export const permissionStateSchema = z.object({
	effectiveActions: z.array(z.string()),
	effectiveSnippets: z.array(z.string()),
	roleNames: z.array(z.string()),
	allowConfigure: z.boolean(),
	isInitialized: z.boolean(),
});

export type PermissionState = z.infer<typeof permissionStateSchema>;

// export class PermissionValidationError extends Error {
// 	constructor(
// 		message: string,
// 		public readonly zodError?: z.ZodError,
// 	) {
// 		super(message);
// 		this.name = "PermissionValidationError";
// 	}
// }
