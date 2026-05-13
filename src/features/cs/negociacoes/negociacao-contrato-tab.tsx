import { Database, FileText, Printer } from "lucide-react";
import { DetailField } from "#/components/detail-field";
import { Button } from "#/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "#/components/ui/card";
import type { NegociacaoWithRelations } from "#/features/cs/negociacoes/negociacoes-types";

interface NegociacaoContratoTabProps {
	negociacao: NegociacaoWithRelations;
}

export function NegociacaoContratoTab({
	negociacao,
}: NegociacaoContratoTabProps) {
	const linkAssinatura = (negociacao as any).f_link_assinatura as
		| string
		| undefined;

	return (
		<div className="space-y-6">
			<Card>
				<CardHeader>
					<CardTitle className="flex items-center gap-2">
						<FileText className="size-4" />
						Ações do Contrato
					</CardTitle>
				</CardHeader>
				<CardContent className="flex flex-wrap gap-2">
					<Button variant="outline" size="sm">
						<Printer className="size-4 mr-2" />
						Imprimir
					</Button>
					<Button variant="outline" size="sm">
						<Database className="size-4 mr-2" />
						Enviar para Assinatura
					</Button>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle>Dados do Contrato</CardTitle>
				</CardHeader>
				<CardContent className="grid grid-cols-2 gap-4">
					<DetailField label="Responsável pela assinatura">
						{(negociacao as any).f_responsavel_assinatura || "—"}
					</DetailField>
					<DetailField label="CPF Responsável">
						{(negociacao as any).f_cpf_responsavel_assinatura || "—"}
					</DetailField>
					{linkAssinatura && (
						<DetailField label="Link Assinatura">
							<a
								href={linkAssinatura}
								target="_blank"
								rel="noopener noreferrer"
								className="text-primary underline"
							>
								{linkAssinatura}
							</a>
						</DetailField>
					)}
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle>OE — QualiRun</CardTitle>
				</CardHeader>
				<CardContent>
					<p className="text-sm text-muted-foreground">
						Dados de QualiRun disponíveis via associação t_oe_qualirun.
					</p>
				</CardContent>
			</Card>
		</div>
	);
}
