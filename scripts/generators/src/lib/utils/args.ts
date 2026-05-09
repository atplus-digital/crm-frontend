export function parseGeneratorFlags<TFlag extends string>(
	argv: string[],
	supportedFlags: readonly TFlag[],
): Set<TFlag> {
	const args = new Set(argv);
	const supportedFlagSet = new Set(supportedFlags);

	for (const arg of args) {
		if (!arg.startsWith("--")) {
			continue;
		}

		if (!supportedFlagSet.has(arg as TFlag)) {
			throw new Error(
				`Flag não suportada: ${arg}. Use apenas ${supportedFlags.join(" e/ou ")}.`,
			);
		}
	}

	const selectedFlags = supportedFlags.filter((flag) => args.has(flag));

	if (selectedFlags.length > 0) {
		return new Set(selectedFlags);
	}

	return new Set(supportedFlags);
}
