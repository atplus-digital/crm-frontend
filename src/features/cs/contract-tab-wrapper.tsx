import type { ReactNode } from "react";
import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { EmptyTable } from "#/components/table/empty-table";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "#/components/ui/card";
import { ContractTabSkeleton } from "./contract-tab-skeleton";

interface ContractTabWrapperProps {
	/**
	 * Título exibido no CardHeader
	 */
	title: string;
	/**
	 * Descrição opcional exibida abaixo do título
	 */
	description?: string;
	/**
	 * Conteúdo renderizado quando estado é sucesso
	 */
	children: ReactNode;
	/**
	 * Estado de carregamento
	 */
	isLoading: boolean;
	/**
	 * Objeto de erro
	 */
	error: Error | null;
	/**
	 * Mensagem de erro customizada (sobrescreve error.message)
	 */
	errorMessage?: string;
	/**
	 * Estado vazio (quando não há dados)
	 */
	isEmpty: boolean;
	/**
	 * Mensagem customizada para estado vazio
	 */
	emptyMessage?: string;
	/**
	 * Colunas exibidas na tabela vazia
	 */
	emptyColumns?: string[];
	/**
	 * Classes CSS adicionais para o Card
	 */
	className?: string;
}

export function ContractTabWrapper({
	title,
	description,
	children,
	isLoading,
	error,
	errorMessage,
	isEmpty,
	emptyMessage,
	emptyColumns,
	className,
}: ContractTabWrapperProps) {
	if (isLoading) {
		return (
			<Card className={className}>
				<CardHeader>
					<CardTitle>{title}</CardTitle>
					{description && <CardDescription>{description}</CardDescription>}
				</CardHeader>
				<CardContent>
					<ContractTabSkeleton />
				</CardContent>
			</Card>
		);
	}

	if (error) {
		return (
			<InlineErrorAlert>
				{errorMessage ?? `Erro ao carregar: ${error.message}`}
			</InlineErrorAlert>
		);
	}

	if (isEmpty) {
		return (
			<Card className={className}>
				<CardHeader>
					<CardTitle>{title}</CardTitle>
					{description && <CardDescription>{description}</CardDescription>}
				</CardHeader>
				<CardContent>
					{emptyColumns ? (
						<EmptyTable
							columns={emptyColumns}
							message={emptyMessage ?? "Nenhum dado encontrado"}
						/>
					) : (
						<p className="text-sm text-muted-foreground">
							{emptyMessage ?? "Nenhum dado encontrado"}
						</p>
					)}
				</CardContent>
			</Card>
		);
	}

	return (
		<Card className={className}>
			<CardHeader>
				<CardTitle>{title}</CardTitle>
				{description && <CardDescription>{description}</CardDescription>}
			</CardHeader>
			<CardContent>{children}</CardContent>
		</Card>
	);
}
