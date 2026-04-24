import { createContext, type ReactNode, useContext } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "#/components/ui/tabs";
import { usePageTab } from "#/hooks/use-page-tab";
import { cn } from "#/lib/utils";

// ─── Context ─────────────────────────────────────────────────────────────────

const PageTabContentContext = createContext(false);

function usePageTabContentContext() {
	return useContext(PageTabContentContext);
}

// ─── Types ───────────────────────────────────────────────────────────────────

export interface PageTab {
	value: string;
	label: string;
	icon?: ReactNode;
}

export interface PageLayoutProps {
	title: ReactNode;
	subtitle?: ReactNode;
	prefixElement?: ReactNode;
	sideElement?: ReactNode;
	tabs?: PageTab[];
	defaultTab?: string;
	children: ReactNode;
	className?: string;
}

// ─── PageLayout ──────────────────────────────────────────────────────────────

/**
 * Standard page layout for app screens.
 *
 * Provides a consistent header (title + optional subtitle + optional action),
 * an optional tab bar (synced to URL via nuqs), and a content area.
 *
 * When `tabs` is provided, wrap your content in `<PageTabContent value="…">`
 * to show/hide sections per tab.
 *
 * @example
 * ```tsx
 * <PageLayout
 *   title="Pessoas"
 *   sideElement={<Button>Nova Pessoa</Button>}
 *   tabs={[
 *     { value: "pf", label: "Pessoas Físicas" },
 *     { value: "pj", label: "Pessoas Jurídicas" },
 *   ]}
 *   defaultTab="pf"
 * >
 *   <PageTabContent value="pf">…</PageTabContent>
 *   <PageTabContent value="pj">…</PageTabContent>
 * </PageLayout>
 * ```
 */
export function PageLayout({
	title,
	subtitle,
	prefixElement,
	sideElement,
	tabs,
	defaultTab,
	children,
	className,
}: PageLayoutProps) {
	const hasTabs = Boolean(tabs?.length && defaultTab);
	const [activeTab, setActiveTab] = usePageTab(defaultTab ?? "");

	return (
		<div
			className={cn(
				"flex flex-1 flex-col overflow-auto bg-background",
				className,
			)}
		>
			<main className="flex-1">
				<div className="p-4">
					<div className="space-y-6">
						{/* Header */}
						<div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
							<div className="flex items-center gap-4">
								{prefixElement && <div>{prefixElement}</div>}
								<div>
									<h1 className="text-2xl font-semibold tracking-tight">
										{title}
									</h1>
									{subtitle && (
										<p className="text-sm text-muted-foreground">{subtitle}</p>
									)}
								</div>
							</div>
							{sideElement && <div>{sideElement}</div>}
						</div>

						{/* Tab bar + content */}
						<PageTabContentContext.Provider value={hasTabs}>
							{hasTabs ? (
								<Tabs
									value={activeTab}
									onValueChange={setActiveTab}
									className="w-full"
								>
									<div className="overflow-x-auto pb-2">
										<TabsList variant="line" className="flex whitespace-nowrap">
											{(tabs ?? []).map((tab) => (
												<TabsTrigger key={tab.value} value={tab.value}>
													{tab.icon && (
														<span className="flex size-4 items-center">
															{tab.icon}
														</span>
													)}
													{tab.label}
												</TabsTrigger>
											))}
										</TabsList>
									</div>
									{children}
								</Tabs>
							) : (
								children
							)}
						</PageTabContentContext.Provider>
					</div>
				</div>
			</main>
		</div>
	);
}

// ─── PageTabContent ──────────────────────────────────────────────────────────

interface PageTabContentProps {
	value: string;
	children: ReactNode;
	className?: string;
}

/**
 * Wrapper for tab content inside `<PageLayout>`.
 *
 * When the parent `PageLayout` has `tabs` + `defaultTab`, renders a
 * `<TabsContent>` (Radix) that shows/hides based on the active tab.
 *
 * When the parent has no tabs, renders a plain `<div>` so the same
 * children work in both modes.
 */
export function PageTabContent({
	value,
	children,
	className,
}: PageTabContentProps) {
	const hasTabs = usePageTabContentContext();

	if (hasTabs) {
		return (
			<TabsContent value={value} className={cn("mt-6", className)}>
				{children}
			</TabsContent>
		);
	}

	return <div className={cn("mt-6", className)}>{children}</div>;
}
