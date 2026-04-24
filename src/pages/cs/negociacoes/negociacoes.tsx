import { Outlet } from "react-router";
import { PageLayout } from "#/components/page-layout/page-layout";

export function NegociacoesPage() {
	const tabs = [
		{ value: "kanban", label: "Kanban (Minhas)" },
		{ value: "lista", label: "Lista (Todas)" },
	];

	return (
		<PageLayout
			title="Renegociações"
			subtitle="Gerencie suas negociações de renegociação"
			tabs={tabs}
			defaultTab="kanban"
		>
			<Outlet />
		</PageLayout>
	);
}
