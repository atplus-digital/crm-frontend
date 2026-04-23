import { type ClassValue, clsx } from "clsx";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale/pt-BR";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

/**
 * Format a phone number to Brazilian format.
 * Handles 10-digit (landline) and 11-digit (mobile) numbers.
 *
 * @param phone - Raw phone number (digits only)
 * @returns Formatted phone number or original if invalid
 *
 * @example
 * formatPhone("11999999999") // Returns: "(11) 99999-9999"
 * formatPhone("1199999999")  // Returns: "(11) 9999-9999"
 * formatPhone("invalid")     // Returns: "invalid"
 */
export function formatPhone(phone: string): string {
	const digits = phone.replace(/\D/g, "");

	if (digits.length === 10) {
		// Landline: (XX) XXXX-XXXX
		return `(${digits.slice(0, 2)}) ${digits.slice(2, 6)}-${digits.slice(6)}`;
	}

	if (digits.length === 11) {
		// Mobile: (XX) XXXXX-XXXX
		return `(${digits.slice(0, 2)}) ${digits.slice(2, 7)}-${digits.slice(7)}`;
	}

	// Return original if invalid length
	return phone;
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
	return format(new Date(dateStr), "dd/MM/yyyy HH:mm", { locale: ptBR });
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

/**
 * Format file size to human readable format.
 *
 * @param size - Size in bytes
 * @returns Formatted size string (e.g., "1.23 KB", "2.45 MB", "3.67 GB")
 */
export function formatFileSize(size: number): string {
	if (size === 0) return "0 B";

	const units = ["B", "KB", "MB", "GB"];
	const i = Math.floor(Math.log(size) / Math.log(1024));

	if (i === 0) return `${size} ${units[i]}`;

	const formattedSize = (size / 1024 ** i).toFixed(2);
	return `${parseFloat(formattedSize)} ${units[i]}`;
}
