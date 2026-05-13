import { ArrowDown, Printer, Signature, Trash2, Users } from "lucide-react";
import { useState } from "react";
import { StatusBadge } from "#/components/badges/status-badge";
import {
	AlertDialog,
	AlertDialogAction,
	AlertDialogCancel,
	AlertDialogContent,
	AlertDialogDescription,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogTitle,
} from "#/components/ui/alert-dialog";
import { Button } from "#/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "#/components/ui/card";
import type { CrmTrocaTitularidadeWithRelations } from "#/features/cs/troca-titularidade/troca-titularidade-hooks";
import {
	CRMTROCATITULARIDADE_STATUS_LABELS,
	CRMTROCATITULARIDADE_SUBSTATUS_LABELS,
} from "#/generated/types/nocobase/crm-troca-titularidade";

interface TitularidadeAcoesSidebarProps {
	trocaTitularidade: CrmTrocaTitularidadeWithRelations;
	onArquivar: () => void;
	onExcluir: () => void;
}

export function TitularidadeAcoesSidebar({
	trocaTitularidade,
	onArquivar,
	onExcluir,
}: TitularidadeAcoesSidebarProps) {
	const [dialog, setDialog] = useState<"arquivar" | "excluir" | null>(null);
	const n = trocaTitularidade as any;

	return (
		<div className="space-y-4">
			<Card>
				<CardHeader>
					<CardTitle className="text-sm">Ações</CardTitle>
				</CardHeader>
				<CardContent className="space-y-2">
					<Button variant="outline" size="sm" className="w-full justify-start">
						<Printer className="size-4 mr-2" /> Imprimir Contrato
					</Button>
					<Button variant="outline" size="sm" className="w-full justify-start">
						<Signature className="size-4 mr-2" /> Enviar QualiRun
					</Button>
					<Button variant="outline" size="sm" className="w-full justify-start">
						<Signature className="size-4 mr-2" /> Enviar ZapSign
					</Button>
					<Button
						variant="outline"
						size="sm"
						className="w-full justify-start"
						disabled
					>
						<Users className="size-4 mr-2" /> Assumir
					</Button>
					<Button
						variant="outline"
						size="sm"
						className="w-full justify-start"
						onClick={() => setDialog("arquivar")}
					>
						<ArrowDown className="size-4 mr-2" /> Arquivar
					</Button>
					<Button
						variant="outline"
						size="sm"
						className="w-full justify-start"
						disabled
					>
						<Users className="size-4 mr-2" /> Envia para Auditoria
					</Button>
					<Button
						variant="destructive"
						size="sm"
						className="w-full justify-start"
						onClick={() => setDialog("excluir")}
					>
						<Trash2 className="size-4 mr-2" /> Excluir
					</Button>
				</CardContent>
			</Card>

			<Card>
				<CardHeader>
					<CardTitle className="text-sm">Informações</CardTitle>
				</CardHeader>
				<CardContent className="space-y-3">
					<div>
						<span className="text-xs text-muted-foreground">Status</span>
						<StatusBadge
							value={trocaTitularidade.f_status}
							labels={
								CRMTROCATITULARIDADE_STATUS_LABELS as Record<string, string>
							}
							variant="inline"
						/>
					</div>
					<div>
						<span className="text-xs text-muted-foreground">Substatus</span>
						<StatusBadge
							value={trocaTitularidade.f_substatus}
							labels={
								CRMTROCATITULARIDADE_SUBSTATUS_LABELS as Record<string, string>
							}
							variant="inline"
						/>
					</div>
					<div>
						<span className="text-xs text-muted-foreground">Vendedor</span>
						<p className="text-sm">{n.f_vendedor?.nickname ?? "—"}</p>
					</div>
					{n.f_link_assinatura_cedente && (
						<div>
							<span className="text-xs text-muted-foreground">
								Link Ass. Cedente
							</span>
							<a
								href={n.f_link_assinatura_cedente}
								target="_blank"
								rel="noopener noreferrer"
								className="block text-sm text-primary underline truncate"
							>
								Abrir
							</a>
						</div>
					)}
					{n.f_link_assinatura_cessionario && (
						<div>
							<span className="text-xs text-muted-foreground">
								Link Ass. Cessionário
							</span>
							<a
								href={n.f_link_assinatura_cessionario}
								target="_blank"
								rel="noopener noreferrer"
								className="block text-sm text-primary underline truncate"
							>
								Abrir
							</a>
						</div>
					)}
				</CardContent>
			</Card>

			<AlertDialog
				open={dialog === "arquivar"}
				onOpenChange={(o) => !o && setDialog(null)}
			>
				<AlertDialogContent>
					<AlertDialogHeader>
						<AlertDialogTitle>Arquivar</AlertDialogTitle>
						<AlertDialogDescription>
							Tem certeza que deseja arquivar a troca de titularidade?
						</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogCancel>Cancelar</AlertDialogCancel>
						<AlertDialogAction
							onClick={() => {
								onArquivar();
								setDialog(null);
							}}
						>
							Confirmar
						</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>

			<AlertDialog
				open={dialog === "excluir"}
				onOpenChange={(o) => !o && setDialog(null)}
			>
				<AlertDialogContent>
					<AlertDialogHeader>
						<AlertDialogTitle>Delete record</AlertDialogTitle>
						<AlertDialogDescription>
							Are you sure you want to delete it?
						</AlertDialogDescription>
					</AlertDialogHeader>
					<AlertDialogFooter>
						<AlertDialogCancel>Cancelar</AlertDialogCancel>
						<AlertDialogAction
							onClick={() => {
								onExcluir();
								setDialog(null);
							}}
						>
							Delete
						</AlertDialogAction>
					</AlertDialogFooter>
				</AlertDialogContent>
			</AlertDialog>
		</div>
	);
}
