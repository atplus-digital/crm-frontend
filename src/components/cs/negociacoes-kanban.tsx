import { useState } from "react";
import { Badge } from "#/components/ui/badge";
import { cn } from "#/lib/utils";

const STATUS_CONFIG = [
	{
		key: "Novo",
		label: "Novo",
		colorClass: "bg-blue-500",
		bgClass: "bg-blue-50",
	},
	{
		key: "Negociando",
		label: "Negociando",
		colorClass: "bg-amber-500",
		bgClass: "bg-amber-50",
	},
	{
		key: "Assinatura",
		label: "Assinatura",
		colorClass: "bg-purple-500",
		bgClass: "bg-purple-50",
	},
	{
		key: "Auditoria",
		label: "Auditoria",
		colorClass: "bg-orange-500",
		bgClass: "bg-orange-50",
	},
	{
		key: "Concluído",
		label: "Concluído",
		colorClass: "bg-green-500",
		bgClass: "bg-green-50",
	},
	{
		key: "Arquivado",
		label: "Arquivado",
		colorClass: "bg-gray-500",
		bgClass: "bg-gray-50",
	},
] as const;

type StatusKey = (typeof STATUS_CONFIG)[number]["key"];

// Mock data types
interface KanbanCard {
	id: number;
	f_titulo?: string;
	f_valor_mensal?: number;
	f_substatus?: string;
	f_vendedor?: {
		nickname: string;
	};
	f_pessoa?: {
		f_nome: string;
	};
	f_negociacao_pessoa_juridica?: {
		f_razao_social: string;
	};
}

type KanbanData = Record<StatusKey, KanbanCard[]>;

// Placeholder data organized by status
const mockKanbanData: KanbanData = {
	Novo: [
		{
			id: 1,
			f_titulo: "Negociação João Silva",
			f_valor_mensal: 2500.0,
			f_substatus: "Aguardando contato",
			f_vendedor: { nickname: "vendedor1" },
			f_pessoa: { f_nome: "João Silva" },
		},
		{
			id: 2,
			f_titulo: "Negociação Ana Costa",
			f_valor_mensal: 1800.0,
			f_substatus: "Novo lead",
			f_vendedor: { nickname: "vendedor2" },
			f_pessoa: { f_nome: "Ana Costa" },
		},
	],
	Negociando: [
		{
			id: 3,
			f_titulo: "Negociação Empresa ABC",
			f_valor_mensal: 15000.5,
			f_substatus: "Em análise de documentação",
			f_vendedor: { nickname: "vendedor2" },
			f_negociacao_pessoa_juridica: { f_razao_social: "ABC Ltda" },
		},
		{
			id: 4,
			f_valor_mensal: 3200.0,
			f_substatus: "Proposta enviada",
			f_vendedor: { nickname: "vendedor1" },
			f_pessoa: { f_nome: "Carlos Ferreira" },
		},
		{
			id: 5,
			f_valor_mensal: 4500.0,
			f_substatus: "Negociando valores",
			f_vendedor: { nickname: "vendedor3" },
			f_pessoa: { f_nome: "Mariana Silva" },
		},
	],
	Assinatura: [
		{
			id: 6,
			f_titulo: "Negociação Maria Santos",
			f_valor_mensal: 3200.0,
			f_substatus: "Aguardando assinatura digital",
			f_vendedor: { nickname: "vendedor1" },
			f_pessoa: { f_nome: "Maria Santos" },
		},
	],
	Auditoria: [
		{
			id: 7,
			f_titulo: "Negociação XYZ Corp",
			f_valor_mensal: 50000.0,
			f_substatus: "Verificação cadastral em andamento",
			f_vendedor: { nickname: "vendedor3" },
			f_negociacao_pessoa_juridica: { f_razao_social: "XYZ Corporation" },
		},
	],
	Concluído: [
		{
			id: 8,
			f_titulo: "Negociação Pedro Costa",
			f_valor_mensal: 1800.75,
			f_substatus: "Contrato assinado",
			f_vendedor: { nickname: "vendedor1" },
			f_pessoa: { f_nome: "Pedro Costa" },
		},
	],
	Arquivado: [],
};

function formatCurrency(value: number | undefined): string {
	if (value === undefined) return "-";
	return value.toLocaleString("pt-BR", {
		style: "currency",
		currency: "BRL",
	});
}

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
	return (
		<div
			className={cn(
				"cursor-pointer rounded-lg bg-white p-3 shadow-sm transition-shadow",
				"hover:shadow-md",
				"border border-border/50",
			)}
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
		<div className="flex w-[280px] shrink-0 flex-col rounded-xl border border-border bg-muted/30">
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
				<Badge variant="secondary" className="h-5 min-w-[24px] text-xs">
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

export function NegociacoesKanban() {
	const [kanbanData] = useState<KanbanData>(mockKanbanData);

	return (
		<div className="overflow-x-auto pb-2">
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
