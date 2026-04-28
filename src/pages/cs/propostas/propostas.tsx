import { Plus } from "lucide-react";
import { Outlet } from "react-router";
import { PageLayout } from "#/components/page-layout/page-layout";
import { Button } from "#/components/ui/button";

export function PropostasPage() {
	const tabs = [{ value: "lista", label: "Lista" }];

	return (
		<PageLayout
			title="Propostas"
			subtitle="Gerencie suas propostas"
			sideElement={
				<Button size="sm">
					<Plus className="mr-2 size-4" />
					Nova Proposta
				</Button>
			}
			tabs={tabs}
			defaultTab="lista"
		>
			<Outlet />
		</PageLayout>
	);
}
