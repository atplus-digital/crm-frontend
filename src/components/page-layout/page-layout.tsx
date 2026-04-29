import { Tabs, TabsList, TabsTrigger } from "#/components/ui/tabs";
import { usePageTab } from "#/hooks/use-page-tab";
import { cn } from "#/lib/utils";
import type { PageLayoutProps } from "./page-layout.types";

/**
 * Standard page layout for app screens.
 *
 * Provides a consistent header (title + optional subtitle + optional action),
 * an optional tab bar (synced to URL via `usePageTab`), and a content area.
 *
 * When `tabs` is provided, use `<Outlet />` as the content and register tab
 * routes as children in the router. `usePageTab` reads the active tab from the
 * URL path segment so tabs stay in sync when navigating.
 *
 * When using `tabsPrefixElement` without `title`, the header is hidden and
 * only tabs with the prefix element are shown (useful for detail pages).
 *
 * @example
 * ```tsx
 * // Page component (parent route)
 * <PageLayout
 *   title="Pessoas"
 *   sideElement={<Button>Nova Pessoa</Button>}
 *   tabs={[
 *     { value: "pf", label: "Pessoas Físicas" },
 *     { value: "pj", label: "Pessoas Jurídicas" },
 *   ]}
 *   defaultTab="pf"
 * >
 *   <Outlet />
 * </PageLayout>
 *
 * // Router (child routes)
 * ```
 */
export function PageLayout({
	title,
	subtitle,
	prefixElement,
	sideElement,
	tabs,
	defaultTab,
	tabsPrefixElement,
	children,
	className,
}: PageLayoutProps) {
	const hasTabs = Boolean(tabs?.length && defaultTab);
	const hasHeader = Boolean(title || prefixElement);
	const tabValues = (tabs ?? []).map((tab) => tab.value);
	const [activeTab, setActiveTab] = usePageTab(defaultTab ?? "", tabValues);

	return (
		<div
			className={cn(
				"flex flex-1 flex-col overflow-auto bg-background",
				className,
			)}
		>
			<main className="flex-1">
				<div className="p-4">
					<div className="space-y-4">
						{hasHeader ? (
							<div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
								<div className="flex items-center gap-4">
									{prefixElement && <div>{prefixElement}</div>}
									<div>
										<h1 className="text-2xl font-semibold tracking-tight">
											{title}
										</h1>
										{subtitle && (
											<p className="text-sm text-muted-foreground">
												{subtitle}
											</p>
										)}
									</div>
								</div>
								{sideElement && <div>{sideElement}</div>}
							</div>
						) : null}

						{hasTabs ? (
							<Tabs
								value={activeTab}
								onValueChange={setActiveTab}
								className="w-full"
							>
								<div className="flex items-center gap-4 overflow-x-auto pb-4">
									{tabsPrefixElement && (
										<div className="shrink-0">{tabsPrefixElement}</div>
									)}
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
					</div>
				</div>
			</main>
		</div>
	);
}
