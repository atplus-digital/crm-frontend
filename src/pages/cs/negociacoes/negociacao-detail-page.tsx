import {
	ArrowLeft,
	Calendar,
	Database,
	File as FileIcon,
	FilePlus,
	FileText as FileTextIcon,
	FolderOpen,
	Image as ImageIcon,
	MessageCircle,
	Paperclip,
	Smartphone,
} from "lucide-react";
import { Link, useParams } from "react-router";
import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { EmptyTable } from "#/components/table/empty-table";
import { Avatar, AvatarFallback } from "#/components/ui/avatar";
import { Badge } from "#/components/ui/badge";
import { Button } from "#/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "#/components/ui/card";
import { Skeleton } from "#/components/ui/skeleton";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "#/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "#/components/ui/tabs";
import { DetailField } from "#/features/cs/components/negociacao-detail-components";
import {
	useNegociacao,
	useNegociacaoAnexos,
	useNegociacaoComentarios,
	useNegociacaoItens,
} from "#/features/cs/negociacoes/negociacoes-hooks";
import type { AnexosNegociacoes, NegociacoesItens } from "#/generated/nocobase";
import { formatCurrency, formatDatePtBR } from "#/lib/utils";

// ---------------------------------------------------------------------------
// Enum Label Helpers
// ---------------------------------------------------------------------------

const MOTIVO_LABELS: Record<string, string> = {
	I: "Inadimplência",
	M: "Mudança Endereço",
	D: "Downgrade",
	U: "Upgrade",
	N: "Renegociação",
	R: "Reativação",
	T: "Mudança Tecnologia",
	L: "Mudança Titularidade",
	S: "Suspensão",
	P: "Outros",
};

const STATUS_LABELS: Record<string, string> = {
	"1": "Novo",
	"2": "Negociando",
	"3": "Assinatura",
	"4": "Auditoria",
	"5": "Concluído",
	"6": "Arquivado",
};

const STATUS_VARIANTS: Record<string, "default" | "secondary" | "destructive"> =
	{
		"1": "default",
		"2": "secondary",
		"3": "secondary",
		"4": "secondary",
		"5": "default",
		"6": "destructive",
	};

const SUBSTATUS_LABELS: Record<string, string> = {
	"1": "NA",
	"2": "AGUARDANDO Assinatura",
	"3": "AGUARDANDO Auditoria",
	"4": "APROVADO Aguardando IXC",
	"5": "REPROVADO Divergência",
	"6": "REPROVADO Fraude",
	"7": "REPROVADO Crédito",
	"8": "APROVADO Erro IXC",
	"9": "APROVADO Concluído",
	"10": "PERDIDO",
	"11": "APROVADO Aguardando atualização",
	"12": "REPROVADO Financeiro",
	"13": "EM STANDBY",
};

const SUBSTATUS_VARIANTS: Record<
	string,
	"default" | "secondary" | "destructive"
> = {
	"1": "secondary",
	"2": "secondary",
	"3": "secondary",
	"4": "default",
	"5": "destructive",
	"6": "destructive",
	"7": "destructive",
	"8": "default",
	"9": "default",
	"10": "destructive",
	"11": "default",
	"12": "destructive",
	"13": "secondary",
};

const TIPO_PESSOA_LABELS: Record<string, string> = {
	PF: "Pessoa Física",
	PJ: "Pessoa Jurídica",
};

const FIDELIDADE_LABELS: Record<string, string> = {
	"0": "0 Meses",
	"12": "12 Meses",
	"24": "24 Meses",
	"36": "36 Meses",
	"48": "48 Meses",
	"60": "60 Meses",
};

const DATA_VENCIMENTO_LABELS: Record<string, string> = {
	"1": "Dia 01",
	"5": "Dia 05",
	"10": "Dia 10",
	"15": "Dia 15",
	"20": "Dia 20",
	"25": "Dia 25",
};

const PONTOS_ATENCAO_LABELS: Record<string, string> = {
	"0": "0 Pontos",
	"1": "1 Ponto",
	"2": "2 Pontos",
	"3": "3 Pontos",
	"4": "4 Pontos",
	"5": "5 Pontos",
	"6": "6 Pontos",
};

function getPontosAtencaoVariant(
	value: string,
): "default" | "secondary" | "destructive" {
	const num = Number(value);
	if (num === 0) return "default";
	if (num <= 2) return "secondary";
	return "destructive";
}

const ENDERECO_COMPLEMENTO_LABELS: Record<string, string> = {
	Casa: "Casa",
	Apartamento: "Apartamento",
	Condominio: "Condomínio",
	Comercial: "Comercial",
};

const CONFISAO_DIVIDA_LABELS: Record<string, string> = {
	Sim: "Sim",
	Nao: "Não",
};

function getStatusBadgeVariant(
	status: string,
): "default" | "secondary" | "destructive" {
	return STATUS_VARIANTS[status] ?? "secondary";
}

function getSubstatusBadgeVariant(
	substatus: string,
): "default" | "secondary" | "destructive" {
	return SUBSTATUS_VARIANTS[substatus] ?? "secondary";
}

function StatusBadge({
	status,
	substatus,
}: {
	status: string;
	substatus?: string;
}) {
	return (
		<div className="flex flex-wrap gap-2">
			<Badge variant={getStatusBadgeVariant(status)}>
				{STATUS_LABELS[status] ?? status}
			</Badge>
			{substatus && (
				<Badge variant={getSubstatusBadgeVariant(substatus)}>
					{SUBSTATUS_LABELS[substatus] ?? substatus}
				</Badge>
			)}
		</div>
	);
}

function PontosAtencaoBadge({ value }: { value: string }) {
	return (
		<Badge variant={getPontosAtencaoVariant(value)}>
			{PONTOS_ATENCAO_LABELS[value] ?? `${value} Pontos`}
		</Badge>
	);
}

function DetailSkeleton() {
	const sectionKeys = ["section-1", "section-2", "section-3"] as const;
	const fieldKeys = [
		"field-1",
		"field-2",
		"field-3",
		"field-4",
		"field-5",
		"field-6",
	] as const;

	return (
		<div className="flex flex-col gap-6">
			{sectionKeys.map((sectionKey) => (
				<div key={sectionKey}>
					<div className="flex flex-col gap-1 mb-2">
						<Skeleton className="h-5 w-48" />
					</div>
					<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
						{fieldKeys.map((fieldKey) => (
							<div
								key={`${sectionKey}-${fieldKey}`}
								className="flex flex-col gap-1"
							>
								<Skeleton className="h-3 w-24" />
								<Skeleton className="h-4 w-32" />
							</div>
						))}
					</div>
				</div>
			))}
		</div>
	);
}

function CommentSkeleton() {
	return (
		<Card className="w-full">
			<CardHeader className="flex flex-row items-start gap-3 space-y-0">
				<Skeleton className="size-10 rounded-full" />
				<div className="flex flex-col gap-1 flex-1">
					<Skeleton className="h-4 w-32" />
					<Skeleton className="h-3 w-24" />
				</div>
			</CardHeader>
			<CardContent className="space-y-2">
				<Skeleton className="h-4 w-full" />
				<Skeleton className="h-4 w-3/4" />
			</CardContent>
		</Card>
	);
}

function formatCommentDate(dateString: string): string {
	const date = new Date(dateString);
	return new Intl.DateTimeFormat("pt-BR", {
		day: "2-digit",
		month: "2-digit",
		year: "numeric",
		hour: "2-digit",
		minute: "2-digit",
	}).format(date);
}

function NegociacaoComentariosTab({ negociacaoId }: { negociacaoId: number }) {
	const {
		data: response,
		isLoading,
		error,
	} = useNegociacaoComentarios(negociacaoId);

	const comentarios = response?.data ?? [];

	if (isLoading) {
		return (
			<div className="flex flex-col gap-4">
				<CommentSkeleton />
				<CommentSkeleton />
				<CommentSkeleton />
			</div>
		);
	}

	if (error) {
		return (
			<InlineErrorAlert>
				Erro ao carregar comentários: {(error as Error).message}
			</InlineErrorAlert>
		);
	}

	if (comentarios.length === 0) {
		return (
			<div className="flex flex-col items-center justify-center py-12 text-center">
				<MessageCircle className="size-12 text-muted-foreground/50 mb-4" />
				<h3 className="text-lg font-medium">Nenhum comentário encontrado</h3>
				<p className="text-muted-foreground text-sm mt-1">
					Seja o primeiro a adicionar um comentário nesta negociação
				</p>
			</div>
		);
	}

	const sortedComentarios = [...comentarios].sort(
		(a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
	);

	return (
		<div className="flex flex-col gap-4">
			{sortedComentarios.map((comentario) => (
				<Card key={comentario.id} className="w-full">
					<CardHeader className="flex flex-row items-start gap-3 space-y-0">
						<Avatar size="default">
							<AvatarFallback>U</AvatarFallback>
						</Avatar>
						<div className="flex flex-col gap-0.5 flex-1">
							<div className="flex items-center gap-2">
								<span className="font-medium text-sm">Usuario do Sistema</span>
								<span className="text-xs text-muted-foreground">
									{formatCommentDate(comentario.createdAt)}
								</span>
							</div>
							{comentario.f_insere_atendimento_ixc === "1" && (
								<span className="inline-flex items-center rounded-md bg-green-500/15 px-2 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
									Enviado ao IXC
								</span>
							)}
						</div>
					</CardHeader>
					<CardContent>
						<p className="text-sm text-card-foreground whitespace-pre-wrap">
							{comentario.f_comentario || "—"}
						</p>
					</CardContent>
				</Card>
			))}
		</div>
	);
}

function MovelTableSkeleton() {
	return (
		<div className="space-y-2">
			<Skeleton className="h-10 w-full" />
			<Skeleton className="h-10 w-full" />
			<Skeleton className="h-10 w-full" />
			<Skeleton className="h-10 w-full" />
		</div>
	);
}

function TipoProdutoBadge({
	tipo,
}: {
	tipo: NegociacoesItens["f_tipo_produto"];
}) {
	const colorMap: Record<NegociacoesItens["f_tipo_produto"], string> = {
		INTERNET: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
		TV: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
		STFC: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
		MVNO: "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
		SVA: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
	};

	return (
		<span
			className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${colorMap[tipo]}`}
		>
			{tipo}
		</span>
	);
}

function RelacaoBadge({ relacao }: { relacao: NegociacoesItens["f_relacao"] }) {
	const colorMap: Record<NegociacoesItens["f_relacao"], string> = {
		COMBO: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
		ADICIONAL:
			"bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-200",
	};

	return (
		<span
			className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${colorMap[relacao]}`}
		>
			{relacao}
		</span>
	);
}

interface NegociacaoItensTabProps {
	negociacaoId: number;
}

function NegociacaoItensTab({ negociacaoId }: NegociacaoItensTabProps) {
	const { data: response, isLoading, error } = useNegociacaoItens(negociacaoId);
	const itens = response?.data ?? [];

	if (error) {
		return (
			<InlineErrorAlert>
				Erro ao carregar itens: {(error as Error).message}
			</InlineErrorAlert>
		);
	}

	if (isLoading) {
		return <MovelTableSkeleton />;
	}

	if (itens.length === 0) {
		return (
			<EmptyTable
				columns={[
					"Produto",
					"Tipo",
					"Mensalidade c/ Desconto",
					"Mensalidade s/ Desconto",
					"Relação",
					"Observações",
				]}
				message="Nenhum item encontrado"
			/>
		);
	}

	return (
		<Card>
			<CardHeader>
				<CardTitle>Itens da Negociação</CardTitle>
			</CardHeader>
			<CardContent>
				<div className="overflow-x-auto">
					<Table>
						<TableHeader>
							<TableRow>
								<TableHead>Produto</TableHead>
								<TableHead>Tipo</TableHead>
								<TableHead className="text-right">
									Mensalidade c/ Desconto
								</TableHead>
								<TableHead className="text-right">
									Mensalidade s/ Desconto
								</TableHead>
								<TableHead>Relação</TableHead>
								<TableHead>Observações</TableHead>
							</TableRow>
						</TableHeader>
						<TableBody>
							{itens.map((item) => (
								<TableRow key={item.id}>
									<TableCell className="font-medium">
										{item.f_nome_produto}
									</TableCell>
									<TableCell>
										<TipoProdutoBadge tipo={item.f_tipo_produto} />
									</TableCell>
									<TableCell className="text-right">
										{formatCurrency(item.f_mensalidade_com_desconto)}
									</TableCell>
									<TableCell className="text-right">
										{formatCurrency(item.f_mensalidade_sem_desconto)}
									</TableCell>
									<TableCell>
										<RelacaoBadge relacao={item.f_relacao} />
									</TableCell>
									<TableCell className="max-w-xs truncate">
										{item.f_observacoes || "—"}
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</div>
			</CardContent>
		</Card>
	);
}

// ---------------------------------------------------------------------------
// Anexos Tab Component
// ---------------------------------------------------------------------------

function formatFileSize(bytes: number): string {
	if (bytes < 1024) return `${bytes} B`;
	if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
	return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function getFileTypeBadge(extname: string): {
	label: string;
	variant: "default" | "secondary" | "destructive" | "outline";
} {
	const ext = extname.toLowerCase();
	if (ext === ".pdf") return { label: "PDF", variant: "destructive" };
	if ([".jpg", ".jpeg", ".png", ".gif", ".webp"].includes(ext))
		return { label: ext.replace(".", "").toUpperCase(), variant: "secondary" };
	if ([".doc", ".docx"].includes(ext))
		return { label: ext.replace(".", "").toUpperCase(), variant: "default" };
	return {
		label: ext.replace(".", "").toUpperCase() || "FILE",
		variant: "outline",
	};
}

function getFileIcon(anexo: AnexosNegociacoes) {
	const mimetype = anexo.mimetype.toLowerCase();
	const extname = anexo.extname.toLowerCase();

	if (mimetype.includes("pdf") || extname === ".pdf") {
		return <FileTextIcon className="size-8 text-red-500" />;
	}
	if (
		mimetype.startsWith("image/") ||
		[".jpg", ".jpeg", ".png", ".gif", ".webp"].includes(extname)
	) {
		return <ImageIcon className="size-8 text-green-500" />;
	}
	if (mimetype.includes("word") || [".doc", ".docx"].includes(extname)) {
		return <FileTextIcon className="size-8 text-blue-500" />;
	}
	return <FileIcon className="size-8 text-gray-500" />;
}

interface NegociacaoAnexosTabProps {
	negociacaoId: number;
}

function NegociacaoAnexosTab({ negociacaoId }: NegociacaoAnexosTabProps) {
	const {
		data: response,
		isLoading,
		error,
	} = useNegociacaoAnexos(negociacaoId);
	const anexos = response?.data ?? [];

	if (error) {
		return (
			<InlineErrorAlert>
				Erro ao carregar anexos: {(error as Error).message}
			</InlineErrorAlert>
		);
	}

	if (isLoading) {
		return (
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{Array.from({ length: 6 }).map((_, i) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: Only used for skeleton loading state
					<Card key={i}>
						<CardHeader>
							<Skeleton className="size-8 mb-2" />
							<Skeleton className="h-5 w-3/4" />
							<Skeleton className="h-4 w-1/2" />
						</CardHeader>
						<CardContent>
							<div className="flex gap-2">
								<Skeleton className="h-8 w-16" />
								<Skeleton className="h-8 w-16" />
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		);
	}

	if (anexos.length === 0) {
		return (
			<div className="flex flex-col items-center justify-center py-12 text-center">
				<Paperclip className="size-12 text-muted-foreground/50 mb-4" />
				<p className="text-lg font-medium text-muted-foreground">
					Nenhum anexo encontrado
				</p>
			</div>
		);
	}

	const handleOpen = (url: string) => {
		window.open(url, "_blank", "noopener,noreferrer");
	};

	const handleDownload = (url: string, filename: string) => {
		const link = document.createElement("a");
		link.href = url;
		link.download = filename;
		link.target = "_blank";
		link.rel = "noopener,noreferrer";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{anexos.map((anexo: AnexosNegociacoes) => {
				const badge = getFileTypeBadge(anexo.extname);
				return (
					<Card key={anexo.id}>
						<CardHeader>
							<div className="flex items-start justify-between gap-2">
								{getFileIcon(anexo)}
								<Badge variant={badge.variant}>{badge.label}</Badge>
							</div>
							<CardTitle className="line-clamp-2 mt-2">
								{anexo.title || anexo.filename}
							</CardTitle>
							<CardDescription>
								{formatFileSize(anexo.size)} • {formatDatePtBR(anexo.createdAt)}
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="flex gap-2">
								<Button
									variant="outline"
									size="sm"
									onClick={() => handleOpen(anexo.url)}
									className="flex-1"
								>
									Abrir
								</Button>
								<Button
									variant="default"
									size="sm"
									onClick={() => handleDownload(anexo.url, anexo.filename)}
									className="flex-1"
								>
									Download
								</Button>
							</div>
						</CardContent>
					</Card>
				);
			})}
		</div>
	);
}

export function NegociacaoDetailPage() {
	const { id } = useParams<{ id: string }>();
	const negociacaoId = Number(id);
	const { data: negociacao, isLoading, error } = useNegociacao(negociacaoId);

	if (error) {
		return (
			<div className="flex-1 overflow-auto bg-background">
				<div className="mx-auto max-w-400 p-4">
					<InlineErrorAlert>
						Erro ao carregar negociação: {(error as Error).message}
					</InlineErrorAlert>
				</div>
			</div>
		);
	}

	return (
		<div className="flex-1 overflow-auto bg-background">
			<div className="mx-auto max-w-400 p-4">
				{/* Header */}
				<div className="flex items-center gap-4 mb-6">
					<Button variant="ghost" size="icon" asChild>
						<Link to="/cs/negociacoes">
							<ArrowLeft className="size-4" />
						</Link>
					</Button>
					<div>
						{isLoading ? (
							<>
								<Skeleton className="h-7 w-48 mb-1" />
								<Skeleton className="h-4 w-64" />
							</>
						) : (
							<>
								<h1 className="text-2xl font-bold tracking-tight">
									Renegociação #{negociacao?.id ?? id}
								</h1>
								{negociacao?.f_titulo && (
									<p className="text-muted-foreground">{negociacao.f_titulo}</p>
								)}
							</>
						)}
					</div>
				</div>

				{/* Tabs */}
				<Tabs defaultValue="detalhes">
					<div className="overflow-x-auto pb-2">
						<TabsList variant="line" className="flex whitespace-nowrap">
							<TabsTrigger value="detalhes">
								<Database className="size-4" />
								Detalhes
							</TabsTrigger>
							<TabsTrigger value="itens">
								<FolderOpen className="size-4" />
								Itens
							</TabsTrigger>
							<TabsTrigger value="anexos">
								<FilePlus className="size-4" />
								Anexos
							</TabsTrigger>
							<TabsTrigger value="comentarios">
								<Smartphone className="size-4" />
								Comentários
							</TabsTrigger>
						</TabsList>
					</div>

					{/* Tab Contents */}
					<TabsContent value="detalhes" className="mt-6">
						{isLoading ? (
							<DetailSkeleton />
						) : negociacao ? (
							<div className="flex flex-col gap-6">
								{/* Card 1: Identificação */}
								<Card>
									<CardHeader>
										<CardTitle>Identificação</CardTitle>
									</CardHeader>
									<CardContent>
										<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
											<DetailField label="Título">
												{negociacao.f_titulo ?? "—"}
											</DetailField>
											<DetailField label="Contrato IXC">
												{negociacao.f_contrato_ixc ?? "—"}
											</DetailField>
											<DetailField label="Motivo">
												{negociacao.f_motivo
													? (MOTIVO_LABELS[negociacao.f_motivo] ??
														negociacao.f_motivo)
													: "—"}
											</DetailField>
											<DetailField label="Status">
												<StatusBadge
													status={negociacao.f_status}
													substatus={negociacao.f_substatus}
												/>
											</DetailField>
											<DetailField label="Ordenação">
												{negociacao.f_ordenacao ?? "—"}
											</DetailField>
										</div>
									</CardContent>
								</Card>

								{/* Card 2: Dados do Cliente */}
								<Card>
									<CardHeader>
										<CardTitle>Dados do Cliente</CardTitle>
									</CardHeader>
									<CardContent>
										<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
											<DetailField label="Tipo de Pessoa">
												{negociacao.f_tipo_pessoa
													? TIPO_PESSOA_LABELS[negociacao.f_tipo_pessoa]
													: "—"}
											</DetailField>
											<DetailField label="Nome/Razão Social">
												{negociacao.f_nome_razao ?? "—"}
											</DetailField>
											<DetailField label="Nome Fantasia">
												{negociacao.f_nome_fantasia ?? "—"}
											</DetailField>
											<DetailField label="CPF/CNPJ">
												{negociacao.f_cpf_cnpj ?? "—"}
											</DetailField>
											<DetailField label="RG/IE">
												{negociacao.f_rg_ie ?? "—"}
											</DetailField>
											<DetailField label="Pessoa Física">
												{negociacao.f_pessoa?.f_nome ?? "—"}
											</DetailField>
											<DetailField label="Pessoa Jurídica">
												{negociacao.f_negociacao_pessoa_juridica
													?.f_nome_fantasia ?? "—"}
											</DetailField>
										</div>
									</CardContent>
								</Card>

								{/* Card 3: Contato */}
								<Card>
									<CardHeader>
										<CardTitle>Contato</CardTitle>
									</CardHeader>
									<CardContent>
										<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
											<DetailField label="Telefone 1">
												{negociacao.f_telefone ?? "—"}
											</DetailField>
											<DetailField label="Telefone 2">
												{negociacao.f_telefone_2 ?? "—"}
											</DetailField>
											<DetailField label="E-mail Cobrança">
												{negociacao.f_email_cobranca ?? "—"}
											</DetailField>
										</div>
									</CardContent>
								</Card>

								{/* Card 4: Endereço de Instalação */}
								<Card>
									<CardHeader>
										<CardTitle>Endereço de Instalação</CardTitle>
									</CardHeader>
									<CardContent>
										<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
											<DetailField label="CEP">
												{negociacao.f_cep ?? "—"}
											</DetailField>
											<DetailField label="Endereço">
												{negociacao.f_endereco ?? "—"}
											</DetailField>
											<DetailField label="Número">
												{negociacao.f_endereco_numero ?? "—"}
											</DetailField>
											<DetailField label="Complemento">
												{negociacao.f_endereco_complemento
													? (ENDERECO_COMPLEMENTO_LABELS[
															negociacao.f_endereco_complemento
														] ?? negociacao.f_endereco_complemento)
													: "—"}
											</DetailField>
											<DetailField label="Bairro">
												{negociacao.f_bairro ?? "—"}
											</DetailField>
											<DetailField label="Cidade">
												{negociacao.f_endereco_cidade ?? "—"}
											</DetailField>
											<DetailField label="Estado">
												{negociacao.f_endereco_estado ?? "—"}
											</DetailField>
											<DetailField label="Referência">
												{negociacao.f_endereco_referencia ?? "—"}
											</DetailField>
											<DetailField label="Edifício">
												{negociacao.f_nome_edificio ?? "—"}
											</DetailField>
											<DetailField label="Apartamento">
												{negociacao.f_apartamento ?? "—"}
											</DetailField>
											<DetailField label="Bloco/Quadra">
												{negociacao.f_bloco_quadra ?? "—"}
											</DetailField>
										</div>
									</CardContent>
								</Card>

								{/* Card 5: Endereço de Cobrança */}
								<Card>
									<CardHeader>
										<CardTitle>Endereço de Cobrança</CardTitle>
									</CardHeader>
									<CardContent>
										<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
											<DetailField label="Endereço Diferente">
												{negociacao.f_endereco_cobranca === "1" ? (
													<Badge variant="secondary">Sim</Badge>
												) : (
													<Badge variant="outline">Não</Badge>
												)}
											</DetailField>
											<DetailField label="Endereço">
												{negociacao.f_endereco_de_cobranca ?? "—"}
											</DetailField>
											<DetailField label="CEP">
												{negociacao.f_cep_cobranca ?? "—"}
											</DetailField>
											<DetailField label="Número">
												{negociacao.f_numero_cobranca ?? "—"}
											</DetailField>
											<DetailField label="Complemento">
												{negociacao.f_complemento_cobranca ?? "—"}
											</DetailField>
											<DetailField label="Bairro">
												{negociacao.f_bairro_cobranca ?? "—"}
											</DetailField>
											<DetailField label="Cidade">
												{negociacao.f_cidade_cobranca ?? "—"}
											</DetailField>
											<DetailField label="Estado">
												{negociacao.f_estado_cobranca ?? "—"}
											</DetailField>
										</div>
									</CardContent>
								</Card>

								{/* Card 6: Valores Financeiros */}
								<Card>
									<CardHeader>
										<CardTitle>Valores Financeiros</CardTitle>
									</CardHeader>
									<CardContent>
										<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
											<DetailField label="Valor Mensal">
												{formatCurrency(negociacao.f_valor_mensal)}
											</DetailField>
											<DetailField label="Valor Mensal Antigo">
												{formatCurrency(negociacao.f_valor_mensal_antigo)}
											</DetailField>
											<DetailField label="Valor Mensal s/ Desconto">
												{formatCurrency(negociacao.f_valor_mensal_sem_desconto)}
											</DetailField>
											<DetailField label="Valor Instalação">
												{formatCurrency(negociacao.f_valor_instalacao)}
											</DetailField>
											<DetailField label="Valor Devedor">
												{formatCurrency(negociacao.f_valor_devedor)}
											</DetailField>
											<DetailField label="Multa/Juros">
												{formatCurrency(negociacao.f_multa_juros)}
											</DetailField>
											<DetailField label="Entrada/Saldo Devedor">
												{formatCurrency(negociacao.f_entrada_saldo_devedor)}
											</DetailField>
											<DetailField label="Valor Devedor Total (auto)">
												<span className="text-muted-foreground italic">
													{negociacao.f_valor_devedor_total ?? "—"}
												</span>
											</DetailField>
											<DetailField label="Valor da Parcela (auto)">
												<span className="text-muted-foreground italic">
													{negociacao.f_valor_da_parcela ?? "—"}
												</span>
											</DetailField>
											<DetailField label="Parcelas Mensais">
												{negociacao.f_parcelas_mensais ?? "—"}
											</DetailField>
											<DetailField label="Valor Benefícios">
												{formatCurrency(negociacao.f_valor_beneficios)}
											</DetailField>
											<DetailField label="Incremento (auto)">
												<span className="text-muted-foreground italic">
													{negociacao.f_Incremento ?? "—"}
												</span>
											</DetailField>
											<DetailField label="Multa Mês Faltante">
												{formatCurrency(negociacao.f_valor_multa_mes_faltante)}
											</DetailField>
										</div>
									</CardContent>
								</Card>

								{/* Card 7: Pacote e Serviços */}
								<Card>
									<CardHeader>
										<CardTitle>Pacote e Serviços</CardTitle>
									</CardHeader>
									<CardContent>
										<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
											<DetailField label="Pacote">
												{negociacao.f_pacote?.f_nome_pacote ?? "—"}
											</DetailField>
											<DetailField label="SCM (Mbps)">
												{negociacao.f_scm ?? "—"}
											</DetailField>
											<DetailField label="SMP (Mbps)">
												{negociacao.f_smp ?? "—"}
											</DetailField>
											<DetailField label="STFC">
												{negociacao.f_stfc ?? "—"}
											</DetailField>
											<DetailField label="SVA">
												{negociacao.f_sva ?? "—"}
											</DetailField>
											<DetailField label="Fidelidade">
												{negociacao.f_fidelidade
													? FIDELIDADE_LABELS[negociacao.f_fidelidade]
													: "—"}
											</DetailField>
											<DetailField label="Vencimento">
												{negociacao.f_data_vencimento
													? DATA_VENCIMENTO_LABELS[negociacao.f_data_vencimento]
													: "—"}
											</DetailField>
											<DetailField label="Período Final">
												{negociacao.f_periodo_final ?? "—"}
											</DetailField>
										</div>
									</CardContent>
								</Card>

								{/* Card 8: Cupom e Vendedor */}
								<Card>
									<CardHeader>
										<CardTitle>Cupom e Vendedor</CardTitle>
									</CardHeader>
									<CardContent>
										<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
											<DetailField label="Cupom de Desconto">
												{negociacao.f_cupom_desconto?.f_nome ?? "—"}
											</DetailField>
											<DetailField label="Vendedor">
												{negociacao.f_vendedor?.nickname ?? "—"}
											</DetailField>
										</div>
									</CardContent>
								</Card>

								{/* Card 9: Pontos de Atenção */}
								<Card>
									<CardHeader>
										<CardTitle>Pontos de Atenção</CardTitle>
									</CardHeader>
									<CardContent>
										<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
											<DetailField label="Pontos de Atenção">
												<PontosAtencaoBadge
													value={negociacao.f_pontos_atencao}
												/>
											</DetailField>
											<DetailField label="Confissão de Dívida">
												{negociacao.f_confissao_divida
													? CONFISAO_DIVIDA_LABELS[
															negociacao.f_confissao_divida
														]
													: "—"}
											</DetailField>
											<DetailField label="Motivos">
												{negociacao.f_motivo_pontos &&
												Array.isArray(negociacao.f_motivo_pontos) ? (
													<div className="flex flex-wrap gap-1">
														{negociacao.f_motivo_pontos.map((motivo) => (
															<Badge key={motivo} variant="outline">
																{motivo}
															</Badge>
														))}
													</div>
												) : (
													"—"
												)}
											</DetailField>
										</div>
									</CardContent>
								</Card>

								{/* Card 10: Assinatura Digital */}
								<Card>
									<CardHeader>
										<CardTitle>Assinatura Digital</CardTitle>
									</CardHeader>
									<CardContent>
										<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
											<DetailField label="ZapSign">
												{negociacao.f_zapsign ? (
													<Badge variant="default">Ativo</Badge>
												) : (
													<Badge variant="outline">Inativo</Badge>
												)}
											</DetailField>
											<DetailField label="Assinatura Gov">
												{negociacao.f_assinatura_gov ? (
													<Badge variant="default">Ativo</Badge>
												) : (
													<Badge variant="outline">Inativo</Badge>
												)}
											</DetailField>
											<DetailField label="Link de Assinatura">
												{negociacao.f_link_assinatura ? (
													<a
														href={negociacao.f_link_assinatura}
														target="_blank"
														rel="noopener noreferrer"
														className="text-primary hover:underline text-sm"
													>
														Abrir link
													</a>
												) : (
													"—"
												)}
											</DetailField>
											<DetailField label="Responsável">
												{negociacao.f_responsavel_assinatura ?? "—"}
											</DetailField>
											<DetailField label="CPF Responsável">
												{negociacao.f_cpf_responsavel_assinatura ?? "—"}
											</DetailField>
										</div>
									</CardContent>
								</Card>

								{/* Card 11: Sistema */}
								<Card>
									<CardHeader>
										<CardTitle className="flex items-center gap-2">
											<Calendar className="size-4" />
											Sistema
										</CardTitle>
									</CardHeader>
									<CardContent>
										<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
											<DetailField label="Criado em">
												{formatDatePtBR(negociacao.createdAt)}
											</DetailField>
											<DetailField label="Atualizado em">
												{formatDatePtBR(negociacao.updatedAt)}
											</DetailField>
											<DetailField label="Criado por">
												{negociacao.createdBy?.nickname ?? "—"}
											</DetailField>
											<DetailField label="Atualizado por">
												{negociacao.updatedBy?.nickname ?? "—"}
											</DetailField>
										</div>
									</CardContent>
								</Card>
							</div>
						) : (
							<InlineErrorAlert>Negociação não encontrada</InlineErrorAlert>
						)}
					</TabsContent>

					<TabsContent value="itens" className="mt-6">
						<NegociacaoItensTab negociacaoId={negociacaoId} />
					</TabsContent>

					<TabsContent value="anexos" className="mt-6">
						<NegociacaoAnexosTab negociacaoId={negociacaoId} />
					</TabsContent>

					<TabsContent value="comentarios" className="mt-6">
						<NegociacaoComentariosTab negociacaoId={negociacaoId} />
					</TabsContent>
				</Tabs>
			</div>
		</div>
	);
}
