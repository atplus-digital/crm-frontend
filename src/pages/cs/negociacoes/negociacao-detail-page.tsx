import {
	Calendar,
	Database,
	FilePlus,
	FolderOpen,
	Smartphone,
} from "lucide-react";
import { useParams } from "react-router";
import { BackButton } from "#/components/detail/back-button";
import { DetailField } from "#/components/detail/detail-field";
import { DetailSkeleton } from "#/components/detail/detail-skeleton";
import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { Badge } from "#/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "#/components/ui/card";
import { Skeleton } from "#/components/ui/skeleton";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "#/components/ui/tabs";
import { NegociacaoAnexosTab } from "#/features/cs/components/negociacao-anexos-tab";
import {
	PontosAtencaoBadge,
	StatusBadge,
} from "#/features/cs/components/negociacao-badges";
import { NegociacaoComentariosTab } from "#/features/cs/components/negociacao-comentarios-tab";
import { NegociacaoItensTab } from "#/features/cs/components/negociacao-itens-tab";
import { useNegociacao } from "#/features/cs/negociacoes/negociacoes-hooks";
import {
	CONFISAO_DIVIDA_LABELS,
	DATA_VENCIMENTO_LABELS,
	ENDERECO_COMPLEMENTO_LABELS,
	FIDELIDADE_LABELS,
	MOTIVO_LABELS,
	TIPO_PESSOA_LABELS,
} from "#/features/cs/negociacoes/negociacoes-types";
import { formatCurrency, formatDatePtBR } from "#/lib/utils";

// ---------------------------------------------------------------------------
// Enum Label Helpers
// ---------------------------------------------------------------------------

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
					<BackButton fallbackTo="/cs/negociacoes" />
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
												{formatCurrency(Number(negociacao.f_valor_instalacao))}
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
