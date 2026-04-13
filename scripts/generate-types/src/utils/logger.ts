import { config } from "@scripts/generate-types/config";

export function logInfo(message: string) {
	console.log(message);
}

export function logVerbose(message: string) {
	if (!config.verbose) {
		return;
	}

	console.log(message);
}
