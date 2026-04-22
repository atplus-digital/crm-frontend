import type { ReactNode } from "react";
import { cn } from "#/lib/utils";

type DetailAlign = "left" | "right";

interface DetailCellOptions {
	align?: DetailAlign;
	fallback?: string;
}

const FALLBACK_VALUE = "—";

const DETAIL_TEXT_WIDTH_CLASS = {
	id: "max-w-24",
	short: "max-w-40",
	long: "max-w-xs",
} as const;

function normalizeDetailValue(
	value: unknown,
	fallback: string,
): string | number {
	if (value === null || value === undefined) {
		return fallback;
	}

	if (typeof value === "string") {
		const trimmed = value.trim();
		return trimmed.length > 0 ? trimmed : fallback;
	}

	if (typeof value === "number") {
		return Number.isFinite(value) ? value : fallback;
	}

	if (typeof value === "bigint") {
		return value.toString();
	}

	if (typeof value === "boolean") {
		return value ? "true" : "false";
	}

	return fallback;
}

function renderDetailTextCell(
	value: unknown,
	options: DetailCellOptions & {
		widthClass: string;
		fontWeight?: "normal" | "medium";
	},
) {
	const display = normalizeDetailValue(
		value,
		options.fallback ?? FALLBACK_VALUE,
	);

	return (
		<span
			className={cn(
				"block truncate",
				options.widthClass,
				options.align === "right" ? "text-right" : "text-left",
				options.fontWeight === "medium" ? "font-medium" : null,
			)}
		>
			{display}
		</span>
	);
}

export function detailHeader(label: string, align: DetailAlign = "left") {
	return (
		<div className={align === "right" ? "text-right" : undefined}>{label}</div>
	);
}

export function detailIdCell(value: unknown, options: DetailCellOptions = {}) {
	return renderDetailTextCell(value, {
		...options,
		fontWeight: "medium",
		widthClass: DETAIL_TEXT_WIDTH_CLASS.id,
	});
}

export function detailShortTextCell(
	value: unknown,
	options: DetailCellOptions = {},
) {
	return renderDetailTextCell(value, {
		...options,
		widthClass: DETAIL_TEXT_WIDTH_CLASS.short,
	});
}

export function detailLongTextCell(
	value: unknown,
	options: DetailCellOptions = {},
) {
	return renderDetailTextCell(value, {
		...options,
		widthClass: DETAIL_TEXT_WIDTH_CLASS.long,
	});
}

export function detailDateCell(
	value: unknown,
	formatDate: (value: string) => string,
	options: DetailCellOptions = {},
) {
	if (value === null || value === undefined || value === "") {
		return detailShortTextCell(undefined, options);
	}

	if (typeof value === "string") {
		return detailShortTextCell(formatDate(value), options);
	}

	if (typeof value === "number" || value instanceof Date) {
		return detailShortTextCell(formatDate(String(value)), options);
	}

	return detailShortTextCell(undefined, options);
}

export function detailMoneyCell(
	value: unknown,
	formatMoney: (value: number) => string,
	options: DetailCellOptions = {},
) {
	const parsed = typeof value === "number" ? value : Number(value);

	if (!Number.isFinite(parsed)) {
		return detailShortTextCell(undefined, {
			...options,
			align: options.align ?? "right",
		});
	}

	return detailShortTextCell(formatMoney(parsed), {
		...options,
		align: options.align ?? "right",
	});
}

export function detailActionCell(content: ReactNode) {
	return <div className="flex items-center">{content}</div>;
}
