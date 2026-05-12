type ParseGeneratorFlagsOptions<TExtraFlag extends string> = {
	additionalAllowedFlags?: readonly TExtraFlag[];
};

type ParseGeneratorFlagsResult<
	TFlag extends string,
	TExtraFlag extends string,
> = {
	selectedGeneratorFlags: Set<TFlag>;
	selectedAdditionalFlags: Set<TExtraFlag>;
};

export function parseGeneratorFlags<
	TFlag extends string,
	TExtraFlag extends string = never,
>(
	argv: string[],
	supportedFlags: readonly TFlag[],
	options: ParseGeneratorFlagsOptions<TExtraFlag> = {},
): ParseGeneratorFlagsResult<TFlag, TExtraFlag> {
	const args = new Set(argv);
	const additionalAllowedFlags = options.additionalAllowedFlags ?? [];
	const allowedFlagSet = new Set<string>([
		...supportedFlags,
		...additionalAllowedFlags,
	]);

	for (const arg of args) {
		if (!arg.startsWith("--")) {
			continue;
		}

		if (!allowedFlagSet.has(arg)) {
			throw new Error(
				`Flag não suportada: ${arg}. Use apenas ${[...supportedFlags, ...additionalAllowedFlags].join(" e/ou ")}.`,
			);
		}
	}

	const selectedFlags = supportedFlags.filter((flag) => args.has(flag));
	const selectedAdditionalFlags = additionalAllowedFlags.filter((flag) =>
		args.has(flag),
	);

	if (selectedFlags.length > 0) {
		return {
			selectedGeneratorFlags: new Set(selectedFlags),
			selectedAdditionalFlags: new Set(selectedAdditionalFlags),
		};
	}

	return {
		selectedGeneratorFlags: new Set(supportedFlags),
		selectedAdditionalFlags: new Set(selectedAdditionalFlags),
	};
}
