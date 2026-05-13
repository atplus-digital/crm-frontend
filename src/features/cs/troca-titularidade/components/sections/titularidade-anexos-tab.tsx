import { Card, CardContent, CardHeader, CardTitle } from "#/components/ui/card";

export function TitularidadeAnexosTab() {
	return (
		<div className="space-y-6">
			<Card>
				<CardHeader>
					<CardTitle>
						Documentos necessários para Troca de Titularidade
					</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="space-y-4">
						<div>
							<h4 className="font-semibold mb-2">Pessoa Física obrigatório:</h4>
							<ul className="list-disc pl-6 text-sm text-muted-foreground">
								<li>Nenhum documento é necessário.</li>
							</ul>
						</div>
						<div>
							<h4 className="font-semibold mb-2">
								Pessoa Jurídica obrigatório:
							</h4>
							<ul className="list-disc pl-6 text-sm text-muted-foreground">
								<li>Contrato Social;</li>
								<li>
									Procuração (Caso não seja o administrador do contrato a
									assinar);
								</li>
								<li>Cartão de IE caso não seja isento.</li>
							</ul>
						</div>
					</div>
				</CardContent>
			</Card>
			<Card>
				<CardHeader>
					<CardTitle>Anexos</CardTitle>
				</CardHeader>
				<CardContent>
					<p className="text-sm text-muted-foreground">
						Upload de anexos disponível via coleção t_anexos_troca_titularidade.
					</p>
				</CardContent>
			</Card>
		</div>
	);
}
