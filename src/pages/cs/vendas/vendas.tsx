import { Outlet } from "react-router";
import { PageLayout } from "#/components/page-layout/page-layout";

export function VendasPage() {
	const tabs = [
		{ value: "kanban", label: "Kanban" },
		{ value: "lista", label: "Lista" },
	];

	return (
		<PageLayout
			title="Vendas"
			subtitle="Suas Negociações de Vendas"
			tabs={tabs}
			defaultTab="kanban"
		>
			<Outlet />
		</PageLayout>
	);
}
