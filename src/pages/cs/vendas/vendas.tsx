import { Plus } from "lucide-react";
import { Outlet } from "react-router";
import { PageLayout } from "#/components/layouts/page-layout";
import { Button } from "#/components/ui/button";

export function VendasPage() {
	const tabs = [{ value: "lista", label: "Lista" }];

	return (
		<PageLayout
			title="Vendas"
			subtitle="Gerencie suas negociações de vendas"
			sideElement={
				<Button size="sm">
					<Plus className="mr-2 size-4" />
					Nova Venda
				</Button>
			}
			tabs={tabs}
			defaultTab="lista"
		>
			<Outlet />
		</PageLayout>
	);
}
