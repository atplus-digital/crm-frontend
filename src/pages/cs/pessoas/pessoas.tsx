import { Plus } from "lucide-react";
import { Outlet } from "react-router";
import { PageLayout } from "#/components/page-layout/page-layout";
import { Button } from "#/components/ui/button";

export function CSPessoasPage() {
	const tabs = [
		{ value: "pf", label: "Pessoas Físicas" },
		{ value: "pj", label: "Pessoas Jurídicas" },
	];

	return (
		<PageLayout
			title="Pessoas"
			sideElement={
				<Button size="sm">
					<Plus className="mr-2 size-4" />
					Nova Pessoa
				</Button>
			}
			tabs={tabs}
			defaultTab="pf"
		>
			<Outlet />
		</PageLayout>
	);
}
