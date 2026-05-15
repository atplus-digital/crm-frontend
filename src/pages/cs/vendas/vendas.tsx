import { useSelector } from "@tanstack/react-store";
import { Plus } from "lucide-react";
import { useMemo, useState } from "react";
import { toast } from "sonner";
import { BasicTableCard } from "#/components/basic-table-card";
import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { PageLayout } from "#/components/layouts/page-layout";

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
import type { NegociacoesMotivo } from "#/generated/types/nocobase/negociacoes";
import { useListPage } from "#/hooks/use-list-page";
import { getErrorMessage } from "#/lib/api-errors";
import { cn } from "#/lib/utils";

/** Status values to show in cards (excludes "6" = Arquivado) */
const CARD_STATUSES: NegociacaoStatus[] = ["1", "2", "3", "4", "5"];

/** Map status key → badge color class */
const STATUS_DOT_COLORS: Record<NegociacaoStatus, string> = {
	"1": "bg-blue-500",
	"2": "bg-amber-500",
	"3": "bg-purple-500",
	"4": "bg-orange-500",
	"5": "bg-green-500",
	"6": "bg-gray-500",
};

/** Map status key → active card ring/border color */
const STATUS_RING_COLORS: Record<NegociacaoStatus, string> = {
	"1": "border-blue-500 ring-1 ring-blue-500/30 bg-blue-500/5",
	"2": "border-amber-500 ring-1 ring-amber-500/30 bg-amber-500/5",
	"3": "border-purple-500 ring-1 ring-purple-500/30 bg-purple-500/5",
	"4": "border-orange-500 ring-1 ring-orange-500/30 bg-orange-500/5",
	"5": "border-green-500 ring-1 ring-green-500/30 bg-green-500/5",
	"6": "border-gray-500 ring-1 ring-gray-500/30 bg-gray-500/5",
};

const DEFAULT_FILTERS: NegociacaoFilters = {};
const VENDAS_MOTIVOS: NegociacoesMotivo[] = ["I", "S"];

export function VendasPage() {
	const user = useSelector(authStore, (state) => state.user);
	const [activeStatus, setActiveStatus] = useState<NegociacaoStatus | null>(
		null,
	);

	const { filters, handleFilterChange, page, pageSize, setPage, setPageSize } =
		useListPage<NegociacaoFilters>({
			defaultFilters: DEFAULT_FILTERS,
			defaultPageSize: 10,
			defaultSort: ["-createdAt"],
			syncSortToUrl: false,
		});

	const { data: vendedores } = useVendedores();

	// Cards always show the current user's totals regardless of table filters
	const { data: cardsData } = useNegociacoes({
		paginate: false,
		filters: normalizeNegociacaoFilters({
			motivo: VENDAS_MOTIVOS,
			vendedorId: user?.id,
		}),
		fields: ["f_status"],
		appends: [],
	});

	const cardsItems = cardsData?.data ?? [];

	// Count per status for the cards
	const statusCounts = useMemo(() => {
		const counts: Record<NegociacaoStatus, number> = {
			"1": 0,
			"2": 0,
			"3": 0,
			"4": 0,
			"5": 0,
			"6": 0,
		};
		for (const item of cardsItems) {
			const status = String(item.f_status) as NegociacaoStatus;
			if (status in counts) {
				counts[status]++;
			}
		}
		return counts;
	}, [cardsItems]);

	const apiFilters = useMemo(
		() =>
			normalizeNegociacaoFilters({
				...filters,
				motivo: VENDAS_MOTIVOS,
				// vendedorId: user?.id,
				...(activeStatus ? { status: activeStatus } : {}),
			}),
		[filters, activeStatus],
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

	const handleStatusClick = (status: NegociacaoStatus) => {
		setActiveStatus((prev) => (prev === status ? null : status));
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
				{/* Suas Vendas por Status — 5 fixed cards, always visible */}
				<div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
					{CARD_STATUSES.map((status) => {
						const isActive = activeStatus === status;
						return (
							<BasicTableCard
								key={status}
								label={NEGOCIACAO_STATUS_LABELS[status]}
								value={statusCounts[status]}
								className={cn(
									"cursor-pointer transition-colors",
									isActive && STATUS_RING_COLORS[status],
								)}
								onClick={() => handleStatusClick(status)}
							>
								<div className="flex items-center gap-2">
									<p className="text-lg font-semibold">
										{statusCounts[status]}
									</p>
									<span
										className={cn(
											"inline-block size-2 rounded-full",
											STATUS_DOT_COLORS[status],
										)}
									/>
								</div>
							</BasicTableCard>
						);
					})}
				</div>

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
						page={page}
						totalCount={data?.meta?.total ?? 0}
						totalPages={data?.meta?.totalPage ?? 1}
						pageSize={pageSize}
						onRefresh={() => refetch()}
						onExport={handleExport}
						onPageChange={setPage}
						onPageSizeChange={setPageSize}
					/>
				)}
			</div>
		</PageLayout>
	);
}
