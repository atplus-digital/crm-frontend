import * as fs from "node:fs";
import * as path from "node:path";

const fileExists = (filePath: string): boolean => fs.existsSync(filePath);

export function isFileBeingEdited(filePath: string): boolean {
	const dir = path.dirname(filePath);
	const base = path.basename(filePath);

	const vimSwapPatterns = [`.${base}.swp`, `.${base}.swo`, `.${base}.swn`];
	for (const swapName of vimSwapPatterns) {
		if (fileExists(path.join(dir, swapName))) {
			return true;
		}
	}

	if (fileExists(`${filePath}~`)) {
		return true;
	}

	const vscodeLockPattern = `${base}.vscode-socket`;
	if (fileExists(path.join(dir, vscodeLockPattern))) {
		return true;
	}

	return false;
}
