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
