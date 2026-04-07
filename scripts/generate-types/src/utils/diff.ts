function splitIntoLines(content: string): string[] {
	return content.replaceAll("\r\n", "\n").split("\n");
}

function buildLcsMatrix(a: string[], b: string[]): number[][] {
	const matrix = Array.from({ length: a.length + 1 }, () =>
		new Array<number>(b.length + 1).fill(0),
	);

	for (let i = a.length - 1; i >= 0; i--) {
		for (let j = b.length - 1; j >= 0; j--) {
			if (a[i] === b[j]) {
				matrix[i][j] = matrix[i + 1][j + 1] + 1;
				continue;
			}

			matrix[i][j] = Math.max(matrix[i + 1][j], matrix[i][j + 1]);
		}
	}

	return matrix;
}

export function buildDiffOnly(
	currentContent: string,
	nextContent: string,
): string {
	const currentLines = splitIntoLines(currentContent);
	const nextLines = splitIntoLines(nextContent);
	const lcs = buildLcsMatrix(currentLines, nextLines);

	const diffLines: string[] = [];
	let i = 0;
	let j = 0;

	while (i < currentLines.length && j < nextLines.length) {
		if (currentLines[i] === nextLines[j]) {
			i++;
			j++;
			continue;
		}

		if (lcs[i + 1][j] >= lcs[i][j + 1]) {
			diffLines.push(`-${currentLines[i]}`);
			i++;
			continue;
		}

		diffLines.push(`+${nextLines[j]}`);
		j++;
	}

	while (i < currentLines.length) {
		diffLines.push(`-${currentLines[i]}`);
		i++;
	}

	while (j < nextLines.length) {
		diffLines.push(`+${nextLines[j]}`);
		j++;
	}

	return diffLines.join("\n");
}
