import { z } from "zod";

/**
 * Zod schema for validating role data from NocoBase auth:check response.
 * The generated RolesBase type has `snippets: unknown[]` and `strategy: Record<string, unknown>`
 * which provides no runtime safety. These schemas narrow those types.
 *
 * Fields are intentionally lenient to tolerate variations in the NocoBase API response:
 * - `strategy` may come as an array of objects, an empty object, or null
 * - `hidden` may be absent (defaults to false)
 * - `snippets` may be absent (defaults to [])
 * - Extra fields from the API are silently stripped
 */
export const permissionRoleSchema = z.object({
	name: z.string(),
	title: z.string().optional().default(""),
	description: z.string().nullable().optional(),
	strategy: z
		.union([
			z.array(
				z.object({
					actions: z.array(z.string()).optional().default([]),
				}),
			),
			z.record(z.string(), z.unknown()),
			z.null(),
		])
		.optional()
		.default([])
		.transform((val) => {
			if (Array.isArray(val)) return val;
			return [];
		}),
	snippets: z.array(z.string()).optional().default([]),
	allowConfigure: z.boolean().nullable().optional().default(false),
	allowNewMenu: z.boolean().nullable().optional().default(false),
	allowNewMobileMenu: z.boolean().nullable().optional().default(false),
	hidden: z.boolean().optional().default(false),
	default: z.boolean().optional().default(false),
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
