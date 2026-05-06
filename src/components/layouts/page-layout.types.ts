import type { ReactNode } from "react";

export interface PageTab {
	value: string;
	label: string;
	icon?: ReactNode;
}

export interface PageLayoutProps {
	title?: ReactNode;
	subtitle?: ReactNode;
	prefixElement?: ReactNode;
	sideElement?: ReactNode;
	tabs?: PageTab[];
	defaultTab?: string;
	/** Element to show next to tabs (e.g., BackButton) */
	tabsPrefixElement?: ReactNode;
	children: ReactNode;
	className?: string;
}
