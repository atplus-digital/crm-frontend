import { Calendar, Search, User, X } from "lucide-react";
import { useId, useState } from "react";
import { Button } from "#/components/ui/button";
import { Input } from "#/components/ui/input";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "#/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "#/components/ui/tabs";
import { useNegociacoes } from "#/modules/cs/negociacoes-hooks";
import type { NegociacaoFilters } from "#/modules/cs/negociacoes-types";
import { NegociacoesKanban } from "./negociacoes-kanban";
import { NegociacoesList } from "./negociacoes-list";

const STATUS_OPTIONS = [
	{ value: "Novo", label: "Novo" },
	{ value: "Negociando", label: "Negociando" },
	{ value: "Assinatura", label: "Assinatura" },
	{ value: "Auditoria", label: "Auditoria" },
	{ value: "Concluído", label: "Concluído" },
	{ value: "Arquivado", label: "Arquivado" },
];

const SUBSTATUS_OPTIONS = [
	{ value: "Aguardando contato", label: "Aguardando contato" },
	{ value: "Em análise", label: "Em análise" },
	{ value: "Proposta enviada", label: "Proposta enviada" },
	{ value: "Aguardando assinatura", label: "Aguardando assinatura" },
	{ value: "Verificação cadastral", label: "Verificação cadastral" },
	{ value: "Contrato assinado", label: "Contrato assinado" },
];

function KanbanFilters() {
	const [selectedStatuses, setSelectedStatuses] = useState<string[]>([]);
	const [substatus, setSubstatus] = useState<string>("all");

	const toggleStatus = (status: string) => {
		setSelectedStatuses((prev) =>
			prev.includes(status)
				? prev.filter((s) => s !== status)
				: [...prev, status],
		);
	};

	const clearFilters = () => {
		setSelectedStatuses([]);
		setSubstatus("all");
	};

	const hasFilters = selectedStatuses.length > 0 || substatus !== "all";
	const substatusId = useId();

	return (
		<div className="space-y-4">
			<div className="flex flex-col gap-4 sm:flex-row sm:items-start">
				<div className="flex-1 space-y-2">
					<div className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
						<Calendar className="size-3.5" aria-hidden="true" />
						<span>Criado depois de</span>
					</div>
					<Input type="date" className="h-8 w-full sm:w-40" />
				</div>

				<div className="flex-1 space-y-2">
					<span className="text-xs font-medium text-muted-foreground">
						Status
					</span>
					<div className="flex flex-wrap gap-1.5">
						{STATUS_OPTIONS.map((status) => (
							<Button
								key={status.value}
								variant={
									selectedStatuses.includes(status.value)
										? "default"
										: "outline"
								}
								size="xs"
								onClick={() => toggleStatus(status.value)}
								className="text-xs"
							>
								{status.label}
							</Button>
						))}
					</div>
				</div>

				<div className="space-y-2 sm:w-48">
					<label
						htmlFor={substatusId}
						className="text-xs font-medium text-muted-foreground"
					>
						Substatus
					</label>
					<Select value={substatus} onValueChange={setSubstatus}>
						<SelectTrigger id={substatusId} className="h-8">
							<SelectValue placeholder="Selecione o substatus" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="all">Todos</SelectItem>
							{SUBSTATUS_OPTIONS.map((opt) => (
								<SelectItem key={opt.value} value={opt.value}>
									{opt.label}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>
			</div>

			<div className="flex items-center gap-2">
				<Button size="sm" className="gap-1.5">
					<Search className="size-4" aria-hidden="true" />
					Filtrar
				</Button>
				<Button
					variant="ghost"
					size="sm"
					onClick={clearFilters}
					disabled={!hasFilters}
					className="gap-1.5"
				>
					<X className="size-4" aria-hidden="true" />
					Limpar
				</Button>
			</div>
		</div>
	);
}

function ListaFilters() {
	const [vendedor, setVendedor] = useState<string>("all");
	const [status, setStatus] = useState<string>("all");
	const [substatus, setSubstatus] = useState<string>("all");
	const [titulo, setTitulo] = useState<string>("");
	const [cpf, setCpf] = useState<string>("");
	const [cnpj, setCnpj] = useState<string>("");
	const [pacote, setPacote] = useState<string>("all");

	const hasFilters =
		vendedor !== "all" ||
		status !== "all" ||
		substatus !== "all" ||
		titulo ||
		cpf ||
		cnpj ||
		pacote !== "all";

	const clearFilters = () => {
		setVendedor("all");
		setStatus("all");
		setSubstatus("all");
		setTitulo("");
		setCpf("");
		setCnpj("");
		setPacote("all");
	};

	const vendedorId = useId();
	const statusId = useId();
	const substatusId = useId();
	const pacoteId = useId();
	const tituloId = useId();
	const cpfId = useId();
	const cnpjId = useId();
	const criadoEmId = useId();

	return (
		<div className="space-y-4">
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
				<div className="space-y-2">
					<label
						htmlFor={vendedorId}
						className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground"
					>
						<User className="size-3.5" aria-hidden="true" />
						<span>Vendedor</span>
					</label>
					<Select value={vendedor} onValueChange={setVendedor}>
						<SelectTrigger id={vendedorId} className="h-8">
							<SelectValue placeholder="Selecione o vendedor" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="all">Todos</SelectItem>
							<SelectItem value="vendedor1">Vendedor 1</SelectItem>
							<SelectItem value="vendedor2">Vendedor 2</SelectItem>
							<SelectItem value="vendedor3">Vendedor 3</SelectItem>
						</SelectContent>
					</Select>
				</div>

				<div className="space-y-2">
					<label
						htmlFor={statusId}
						className="text-xs font-medium text-muted-foreground"
					>
						Status
					</label>
					<Select value={status} onValueChange={setStatus}>
						<SelectTrigger id={statusId} className="h-8">
							<SelectValue placeholder="Selecione o status" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="all">Todos</SelectItem>
							{STATUS_OPTIONS.map((opt) => (
								<SelectItem key={opt.value} value={opt.value}>
									{opt.label}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>

				<div className="space-y-2">
					<label
						htmlFor={substatusId}
						className="text-xs font-medium text-muted-foreground"
					>
						Substatus
					</label>
					<Select value={substatus} onValueChange={setSubstatus}>
						<SelectTrigger id={substatusId} className="h-8">
							<SelectValue placeholder="Selecione o substatus" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="all">Todos</SelectItem>
							{SUBSTATUS_OPTIONS.map((opt) => (
								<SelectItem key={opt.value} value={opt.value}>
									{opt.label}
								</SelectItem>
							))}
						</SelectContent>
					</Select>
				</div>

				<div className="space-y-2">
					<label
						htmlFor={pacoteId}
						className="text-xs font-medium text-muted-foreground"
					>
						Pacote
					</label>
					<Select value={pacote} onValueChange={setPacote}>
						<SelectTrigger id={pacoteId} className="h-8">
							<SelectValue placeholder="Selecione o pacote" />
						</SelectTrigger>
						<SelectContent>
							<SelectItem value="all">Todos</SelectItem>
							<SelectItem value="basico">Básico</SelectItem>
							<SelectItem value="premium">Premium</SelectItem>
							<SelectItem value="enterprise">Enterprise</SelectItem>
						</SelectContent>
					</Select>
				</div>

				<div className="space-y-2">
					<label
						htmlFor={tituloId}
						className="text-xs font-medium text-muted-foreground"
					>
						Título
					</label>
					<Input
						id={tituloId}
						placeholder="Buscar por título"
						value={titulo}
						onChange={(e) => setTitulo(e.target.value)}
						className="h-8"
					/>
				</div>

				<div className="space-y-2">
					<label
						htmlFor={cpfId}
						className="text-xs font-medium text-muted-foreground"
					>
						CPF
					</label>
					<Input
						id={cpfId}
						placeholder="000.000.000-00"
						value={cpf}
						onChange={(e) => setCpf(e.target.value)}
						className="h-8"
					/>
				</div>

				<div className="space-y-2">
					<label
						htmlFor={cnpjId}
						className="text-xs font-medium text-muted-foreground"
					>
						CNPJ
					</label>
					<Input
						id={cnpjId}
						placeholder="00.000.000/0000-00"
						value={cnpj}
						onChange={(e) => setCnpj(e.target.value)}
						className="h-8"
					/>
				</div>

				<div className="space-y-2">
					<label
						htmlFor={criadoEmId}
						className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground"
					>
						<Calendar className="size-3.5" aria-hidden="true" />
						<span>Criado em</span>
					</label>
					<Input id={criadoEmId} type="date" className="h-8" />
				</div>
			</div>

			<div className="flex items-center gap-2">
				<Button size="sm" className="gap-1.5">
					<Search className="size-4" aria-hidden="true" />
					Filtrar
				</Button>
				<Button
					variant="ghost"
					size="sm"
					onClick={clearFilters}
					disabled={!hasFilters}
					className="gap-1.5"
				>
					<X className="size-4" aria-hidden="true" />
					Limpar
				</Button>
			</div>
		</div>
	);
}

export function NegociacoesPage() {
	const [activeTab, setActiveTab] = useState<string>("kanban");
	const [page, setPage] = useState(1);
	const [pageSize, setPageSize] = useState(20);
	const [filters, setFilters] = useState<NegociacaoFilters>({});

	const { data, isLoading, error } = useNegociacoes({
		page,
		pageSize,
		filters,
		appends: ["f_pessoa", "f_pessoa_juridica", "f_vendedor"],
	});

	const negociacoes = data?.data || [];
	const total = data?.meta?.total || 0;

	return (
		<div className="flex flex-1 flex-col overflow-auto">
			<main className="flex-1">
				<div className="p-4 md:p-6 lg:p-8">
					<div className="space-y-6">
						<div>
							<h1 className="text-2xl font-semibold tracking-tight">
								Renegociações
							</h1>
							<p className="text-sm text-muted-foreground">
								Gerencie suas negociações de renegociação{" "}
								{total > 0 && `(${total} itens)`}
							</p>
						</div>

						<Tabs value={activeTab} onValueChange={setActiveTab}>
							<TabsList className="mb-4">
								<TabsTrigger value="kanban">Kanban (Minhas)</TabsTrigger>
								<TabsTrigger value="lista">Lista (Todas)</TabsTrigger>
							</TabsList>

							<div className="rounded-lg border bg-card p-4">
								<TabsContent value="kanban" className="mt-0">
									<div className="space-y-4">
										<KanbanFilters />
										{error && (
											<div className="rounded-md bg-destructive/10 p-4 text-destructive">
												Erro ao carregar negociações:{" "}
												{error instanceof Error
													? error.message
													: "Erro desconhecido"}
											</div>
										)}
										<NegociacoesKanban
											negociacoes={negociacoes}
											isLoading={isLoading}
										/>
									</div>
								</TabsContent>

								<TabsContent value="lista" className="mt-0">
									<div className="space-y-4">
										<ListaFilters />
										{error && (
											<div className="rounded-md bg-destructive/10 p-4 text-destructive">
												Erro ao carregar negociações:{" "}
												{error instanceof Error
													? error.message
													: "Erro desconhecido"}
											</div>
										)}
										<NegociacoesList
											negociacoes={negociacoes}
											isLoading={isLoading}
											total={total}
										/>
									</div>
								</TabsContent>
							</div>
						</Tabs>
					</div>
				</div>
			</main>
		</div>
	);
}
