import { useStore } from "@tanstack/react-store";
import { Plus } from "lucide-react";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { PageLayout } from "#/components/layouts/page-layout";
import { StatusSummaryCards } from "#/components/status-summary-cards";
import { Button } from "#/components/ui/button";
import { authStore } from "#/features/auth";
import { useNegociacoes } from "#/features/cs/negociacoes/negociacoes-hooks";
import { NegociacoesList } from "#/features/cs/negociacoes/negociacoes-list";
import { exportNegociacoesToCsv } from "#/features/cs/negociacoes/negociacoes-service";
import {
	NEGOCIACAO_STATUS_LABELS,
	type NegociacaoFilters,
	type NegociacaoStatus,
	normalizeNegociacaoFilters,
} from "#/features/cs/negociacoes/negociacoes-types";
import { VendasFilters } from "#/features/cs/vendas/vendas-filters/vendas-filters";
import { useVendedores } from "#/features/cs/vendas/vendas-hooks";
import { useListPage } from "#/hooks/use-list-page";
import { getErrorMessage } from "#/lib/api-errors";

/** Status values to show in cards (excludes "6" = Arquivado) */
const CARD_STATUSES: NegociacaoStatus[] = ["1", "2", "3", "4", "5"];

const DEFAULT_FILTERS: NegociacaoFilters = {};

export function VendasPage() {
	const user = useStore(authStore, (state) => state.user);
	const [activeStatus, setActiveStatus] = useState<NegociacaoStatus | null>(
		null,
	);

	const { filters, handleFilterChange, page, pageSize } =
		useListPage<NegociacaoFilters>({
			defaultFilters: DEFAULT_FILTERS,
			defaultPageSize: 100,
			defaultSort: ["-createdAt"],
			syncSortToUrl: false,
		});
	const { data: vendedores } = useVendedores();

	// Cards always show the current user's totals regardless of table filters
	// TODO: pageSize 200 is a known limitation — a server-side aggregation endpoint would be better
	const { data: cardsData } = useNegociacoes({
		page: 1,
		pageSize: 200,
		filters: normalizeNegociacaoFilters({
			vendedorId: user?.id,
		}),
	});
	const cardsItems = cardsData?.data ?? [];

	const apiFilters = useMemo(
		() =>
			normalizeNegociacaoFilters({
				...filters,
				vendedorId: user?.id,
				...(activeStatus ? { status: activeStatus } : {}),
			}),
		[filters, user?.id, activeStatus],
	);

	const { data, error, refetch } = useNegociacoes({
		page,
		pageSize,
		filters: apiFilters,
	});

	const negociacoes = data?.data ?? [];

	const handleExport = () => {
		const csv = exportNegociacoesToCsv(negociacoes);
		const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
		const url = URL.createObjectURL(blob);
		const link = document.createElement("a");
		link.href = url;
		link.download = `vendas-${new Date().toISOString().split("T")[0]}.csv`;
		link.click();
		URL.revokeObjectURL(url);
		toast.success(`CSV exportado: ${negociacoes.length} vendas`);
	};

	const handleStatusClick = (key: string) => {
		setActiveStatus((prev) =>
			prev === key ? null : (key as NegociacaoStatus),
		);
	};

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
		>
			<div className="space-y-4">
				<StatusSummaryCards
					items={cardsItems.filter((n) =>
						CARD_STATUSES.includes(String(n.f_status) as NegociacaoStatus),
					)}
					getKey={(n) => String(n.f_status)}
					getLabel={(key) =>
						NEGOCIACAO_STATUS_LABELS[key as NegociacaoStatus] ?? key
					}
					onClick={handleStatusClick}
					activeKey={activeStatus}
				/>

				<VendasFilters
					filters={filters}
					onFilter={handleFilterChange}
					vendedores={vendedores}
				/>

				{error ? (
					<InlineErrorAlert>
						Erro ao carregar vendas: {getErrorMessage(error)}
					</InlineErrorAlert>
				) : (
					<NegociacoesList
						negociacoes={negociacoes}
						totalCount={data?.meta?.total ?? 0}
						pageSize={data?.meta?.pageSize ?? 15}
						onRefresh={() => refetch()}
						onExport={handleExport}
					/>
				)}
			</div>
		</PageLayout>
	);
}
