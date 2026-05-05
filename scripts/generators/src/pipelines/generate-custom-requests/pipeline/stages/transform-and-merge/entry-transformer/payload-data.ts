import type { Logger } from "@scripts/generators/src/lib/logger";

export function normalizePayloadData(
	raw: unknown,
	logger: Logger,
): Record<string, unknown> | null {
	if (raw == null) return null;
	if (typeof raw === "object") return raw as Record<string, unknown>;
	if (typeof raw === "string") {
		try {
			const parsed = JSON.parse(raw);
			if (typeof parsed === "object" && parsed !== null) {
				return parsed as Record<string, unknown>;
			}
		} catch {
			logger.warn(`options.data é string não-parseável: ${raw.slice(0, 100)}`);
		}
	}
	return null;
}
