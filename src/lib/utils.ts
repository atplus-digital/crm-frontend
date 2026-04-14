import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

const WEEKDAYS_PT = [
	"Domingo",
	"Segunda-feira",
	"Terça-feira",
	"Quarta-feira",
	"Quinta-feira",
	"Sexta-feira",
	"Sábado",
] as const;

const MONTHS_PT = [
	"janeiro",
	"fevereiro",
	"março",
	"abril",
	"maio",
	"junho",
	"julho",
	"agosto",
	"setembro",
	"outubro",
	"novembro",
	"dezembro",
] as const;

export function formatDateInPortuguese(date: Date): string {
	const weekday = WEEKDAYS_PT[date.getDay()];
	const day = date.getDate();
	const month = MONTHS_PT[date.getMonth()];
	const year = date.getFullYear();

	return `${weekday}, ${day} de ${month} de ${year}`;
}

export function getInitials(name: string): string {
	return name.charAt(0).toUpperCase();
}

/**
 * Format a date string to Portuguese (Brazil) format.
 * Handles invalid dates and dates starting with "0000".
 *
 * @param dateStr - ISO date string or date string from database
 * @returns Formatted date in pt-BR format (DD/MM/YYYY HH:mm) or "—" for invalid dates
 */
export function formatDatePtBR(dateStr: string): string {
	if (!dateStr || dateStr.startsWith("0000")) {
		return "—";
	}
	return new Intl.DateTimeFormat("pt-BR", {
		day: "2-digit",
		month: "2-digit",
		year: "numeric",
		hour: "2-digit",
		minute: "2-digit",
	}).format(new Date(dateStr));
}

/**
 * Format a numeric value to Brazilian Real currency format.
 *
 * @param value - Numeric value to format (can be null, undefined, or 0)
 * @returns Formatted currency string (e.g., "R$ 1.234,56") or "-" for falsy values
 */
export function formatCurrency(value: number | null | undefined): string {
	if (!value) return "-";
	return value.toLocaleString("pt-BR", {
		style: "currency",
		currency: "BRL",
	});
}
