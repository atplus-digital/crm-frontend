import { Tabs, TabsList, TabsTrigger } from "#/components/ui/tabs";
import { usePageTab } from "#/hooks/use-page-tab";
import { cn } from "#/lib/utils";
import type { PageLayoutProps } from "./page-layout.types";
import { PageTabContentContext } from "./page-tab-content-context";

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
					<div className="space-y-4 ">
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

						<PageTabContentContext.Provider value={hasTabs}>
							{hasTabs ? (
								<Tabs
									value={activeTab}
									onValueChange={setActiveTab}
									className="w-full "
								>
									<div className="overflow-x-auto pb-4">
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

export { PageTabContent } from "./page-tab-content";
