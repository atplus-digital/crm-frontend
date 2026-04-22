import { useEffect, useRef } from "react";
import { useNavigate } from "react-router";
import { Badge } from "#/components/ui/badge";
import type { NegociacaoWithRelations } from "#/features/cs/negociacoes/negociacoes-types";
import type { NegociacoesStatus } from "#/generated/nocobase/negociacoes";
import { cn, formatCurrency } from "#/lib/utils";
import { buildRoute } from "#/routes/route-paths";

// Map generated enum values to status keys
const STATUS_ENUM_TO_KEY: Record<NegociacoesStatus, StatusKey | null> = {
	"1": "Novo",
	"2": "Negociando",
	"3": "Assinatura",
	"4": "Auditoria",
	"5": "Concluido",
	"6": "Arquivado",
};

const STATUS_CONFIG = [
	{
		key: "Novo",
		label: "Novo",
		colorClass: "bg-blue-500 dark:bg-blue-600",
		bgClass: "bg-blue-100/70 dark:bg-blue-950/40 dark:text-blue-300",
	},
	{
		key: "Negociando",
		label: "Negociando",
		colorClass: "bg-amber-500 dark:bg-amber-600",
		bgClass: "bg-amber-100/70 dark:bg-amber-950/40 dark:text-amber-300",
	},
	{
		key: "Assinatura",
		label: "Assinatura",
		colorClass: "bg-purple-500 dark:bg-purple-600",
		bgClass: "bg-purple-100/70 dark:bg-purple-950/40 dark:text-purple-300",
	},
	{
		key: "Auditoria",
		label: "Auditoria",
		colorClass: "bg-orange-500 dark:bg-orange-600",
		bgClass: "bg-orange-100/70 dark:bg-orange-950/40 dark:text-orange-300",
	},
	{
		key: "Concluido",
		label: "Concluído",
		colorClass: "bg-green-500 dark:bg-green-600",
		bgClass: "bg-green-100/70 dark:bg-green-950/40 dark:text-green-300",
	},
	{
		key: "Arquivado",
		label: "Arquivado",
		colorClass: "bg-gray-500 dark:bg-gray-600",
		bgClass: "bg-gray-100/70 dark:bg-gray-800/40 dark:text-gray-300",
	},
] as const;

type StatusKey = (typeof STATUS_CONFIG)[number]["key"];

type KanbanCard = NegociacaoWithRelations;

type KanbanData = Record<StatusKey, KanbanCard[]>;

function getCardTitle(card: KanbanCard): string {
	if (card.f_titulo) return card.f_titulo;
	if (card.f_pessoa?.f_nome) return card.f_pessoa.f_nome;
	if (card.f_negociacao_pessoa_juridica?.f_razao_social)
		return card.f_negociacao_pessoa_juridica.f_razao_social;
	return "Sem título";
}

interface KanbanCardProps {
	card: KanbanCard;
}

function KanbanCardComponent({ card }: KanbanCardProps) {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(buildRoute("cs_negociacoes_id", { id: card.id }));
	};

	const handleKeyDown = (e: React.KeyboardEvent) => {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			navigate(buildRoute("cs_negociacoes_id", { id: card.id }));
		}
	};

	return (
		// biome-ignore lint/a11y/useSemanticElements: Card component needs to be a clickable container, not a button element
		<div
			className={cn(
				"cursor-pointer rounded-lg bg-card p-3 shadow-sm transition-shadow",
				"hover:shadow-md",
				"border border-border/50",
			)}
			onClick={handleClick}
			onKeyDown={handleKeyDown}
			role="button"
			tabIndex={0}
		>
			<h4 className="mb-2 text-sm font-medium text-foreground">
				{getCardTitle(card)}
			</h4>
			<div className="space-y-1.5">
				<div className="flex items-center justify-between text-xs">
					<span className="text-muted-foreground">Valor:</span>
					<span className="font-medium">
						{formatCurrency(card.f_valor_mensal)}
					</span>
				</div>
				<div className="flex items-center justify-between text-xs">
					<span className="text-muted-foreground">Vendedor:</span>
					<span className="font-medium">
						{card.f_vendedor?.nickname || "-"}
					</span>
				</div>
				{card.f_substatus && (
					<div className="mt-2">
						<span className="inline-block max-w-full truncate rounded bg-muted px-1.5 py-0.5 text-[10px] text-muted-foreground">
							{card.f_substatus}
						</span>
					</div>
				)}
			</div>
		</div>
	);
}

interface KanbanColumnProps {
	status: (typeof STATUS_CONFIG)[number];
	cards: KanbanCard[];
}

function KanbanColumn({ status, cards }: KanbanColumnProps) {
	return (
		<div className="flex w-70 shrink-0 flex-col rounded-xl border border-border bg-muted/30">
			{/* Column header */}
			<div
				className={cn(
					"flex items-center justify-between rounded-t-xl border-b border-border px-3 py-2.5",
					status.bgClass,
				)}
			>
				<div className="flex items-center gap-2">
					<div className={cn("size-2.5 rounded-full", status.colorClass)} />
					<h3 className="text-sm font-semibold">{status.label}</h3>
				</div>
				<Badge variant="secondary" className="h-5 min-w-6 text-xs">
					{cards.length}
				</Badge>
			</div>

			{/* Cards container */}
			<div className="flex-1 space-y-2 overflow-y-auto p-2">
				{cards.length === 0 ? (
					<div className="flex h-24 items-center justify-center text-xs text-muted-foreground">
						Sem itens
					</div>
				) : (
					cards.map((card) => <KanbanCardComponent key={card.id} card={card} />)
				)}
			</div>
		</div>
	);
}

interface NegociacoesKanbanProps {
	negociacoes?: KanbanCard[];
	isLoading?: boolean;
}

export function NegociacoesKanban({
	negociacoes = [],
	isLoading = false,
}: NegociacoesKanbanProps) {
	const scrollContainerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const container = scrollContainerRef.current;
		if (!container) return;

		const handleWheel = (e: WheelEvent) => {
			const canScrollLeft = container.scrollLeft > 0;
			const canScrollRight =
				container.scrollLeft < container.scrollWidth - container.clientWidth;

			const isHorizontalScroll = Math.abs(e.deltaX) > Math.abs(e.deltaY);
			if (isHorizontalScroll || canScrollLeft || canScrollRight) {
				e.preventDefault();
				container.scrollLeft += e.deltaY + e.deltaX;
			}
		};

		container.addEventListener("wheel", handleWheel, { passive: false });
		return () => container.removeEventListener("wheel", handleWheel);
	}, []);

	const kanbanData: KanbanData = negociacoes.reduce(
		(acc, negociacao) => {
			const statusKey = STATUS_ENUM_TO_KEY[negociacao.f_status];
			if (statusKey && acc[statusKey]) {
				acc[statusKey].push(negociacao);
			}
			return acc;
		},
		{
			Novo: [],
			Negociando: [],
			Assinatura: [],
			Auditoria: [],
			Concluido: [],
			Arquivado: [],
		} as KanbanData,
	);

	if (isLoading) {
		return (
			<div className="flex items-center justify-center py-12">
				<div className="text-sm text-muted-foreground">Carregando...</div>
			</div>
		);
	}

	return (
		<div ref={scrollContainerRef} className="overflow-x-auto pb-2">
			<div className="flex gap-4">
				{STATUS_CONFIG.map((status) => (
					<KanbanColumn
						key={status.key}
						status={status}
						cards={kanbanData[status.key]}
					/>
				))}
			</div>
		</div>
	);
}
