import { TabsContent } from "#/components/ui/tabs";
import type { PageTabContentProps } from "./page-layout.types";
import { usePageTabContentContext } from "./page-tab-content-context";

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
			<TabsContent value={value} className={className}>
				{children}
			</TabsContent>
		);
	}

	return <div className={className}>{children}</div>;
}
