export type ValidationPolicy<TContext> = (context: TContext) => boolean;

export const alwaysValidatePolicy: ValidationPolicy<unknown> = () => true;

export function evaluateValidationPolicy<TContext>(
	context: TContext,
	policy: ValidationPolicy<TContext>,
): boolean {
	return policy(context);
}
