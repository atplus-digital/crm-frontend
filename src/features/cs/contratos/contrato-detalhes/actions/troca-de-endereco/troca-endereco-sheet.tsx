import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2, MapPin } from "lucide-react";
import { useEffect, useMemo } from "react";
import { type SubmitHandler, useForm } from "react-hook-form";
import { SheetDiscardGuard } from "#/components/sheet-discard-guard";
import { Button } from "#/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
} from "#/components/ui/sheet";
import type { ContratoWithCliente } from "#/features/cs/contratos/contratos-types";
import { useCreateTrocaEndereco } from "#/features/cs/troca-de-endereco/troca-endereco-hooks";
import type { TrocaEnderecoTaxaInstalacao } from "#/generated/types/nocobase/troca-endereco";
import { TROCAENDERECO_TAXAINSTALACAO_LABELS } from "#/generated/types/nocobase/troca-endereco";
import { useSheetDiscardGuard } from "#/hooks/use-sheet-discard-guard";
import { CobrancaFieldsSection } from "./cobranca-fields-section";
import { EnderecoFieldsSection } from "./endereco-fields-section";
import {
	type TrocaEnderecoFormValues,
	trocaEnderecoSchema,
} from "./troca-endereco-form";

// Types
interface TrocaEnderecoSheetProps {
	contrato: ContratoWithCliente;
	open: boolean;
	onOpenChange: (open: boolean) => void;
}

// Main Component
export function TrocaEnderecoSheet({
	contrato,
	open,
	onOpenChange,
}: TrocaEnderecoSheetProps) {
	const contratoId = String(contrato.id);
	const clienteNome = contrato.f_nc_cliente?.razao ?? "";

	const form = useForm<TrocaEnderecoFormValues>({
		resolver: zodResolver(trocaEnderecoSchema),
		defaultValues: {
			f_cep: "",
			f_bairro: "",
			f_endereco_cidade: "",
			f_endereco_estado: "",
			f_endereco: "",
			f_endereco_numero: "",
			f_endereco_complemento: "",
			f_endereco_referencia: "",
			f_obs: "",
			f_telefone_contato: "",
			f_taxa_instalacao: "",
		},
	});

	const {
		handleSubmit,
		reset,
		register,
		formState: { errors, isValid, isDirty },
	} = form;

	// Discard guard
	const {
		showDiscardDialog,
		setShowDiscardDialog,
		handleOpenChange,
		handleDiscardConfirm,
		handleDiscardCancel,
	} = useSheetDiscardGuard(onOpenChange, isDirty);

	// Taxa options from generated labels
	const taxaOptions = useMemo(
		() =>
			Object.entries(TROCAENDERECO_TAXAINSTALACAO_LABELS) as [string, string][],
		[],
	);

	// Mutation
	const mutation = useCreateTrocaEndereco();

	const onSubmit: SubmitHandler<TrocaEnderecoFormValues> = (values) => {
		mutation.mutate(
			{
				f_cep: values.f_cep.replace(/\D/g, ""),
				f_bairro: values.f_bairro,
				f_endereco_cidade: values.f_endereco_cidade,
				f_endereco_estado: values.f_endereco_estado.toUpperCase(),
				f_endereco: values.f_endereco,
				f_endereco_numero: values.f_endereco_numero.trim(),
				f_endereco_complemento: values.f_endereco_complemento,
				f_endereco_referencia: values.f_endereco_referencia ?? "",
				f_obs: values.f_obs ?? "",
				f_telefone_contato: values.f_telefone_contato ?? "",
				f_taxa_instalacao:
					values.f_taxa_instalacao as TrocaEnderecoTaxaInstalacao,
				f_id_contrato: contratoId,
				f_cliente: clienteNome,
			},
			{
				onSuccess: () => {
					onOpenChange(false);
					reset();
				},
			},
		);
	};

	// Reset form when sheet closes
	// biome-ignore lint/correctness/useExhaustiveDependencies: reset/mutation are stable
	useEffect(() => {
		if (!open) {
			reset();
			mutation.reset();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [open]);

	return (
		<>
			<Sheet open={open} onOpenChange={handleOpenChange}>
				<SheetContent
					side="right"
					className="flex flex-col data-[side=right]:sm:max-w-2xl"
				>
					<SheetHeader>
						<SheetTitle className="flex items-center gap-2">
							<MapPin className="size-5" />
							Troca de Endereço
						</SheetTitle>
					</SheetHeader>

					<form
						onSubmit={handleSubmit(onSubmit)}
						className="flex flex-1 flex-col overflow-hidden"
					>
						<div className="flex-1 space-y-6 overflow-y-auto px-4 py-4">
							<EnderecoFieldsSection register={register} errors={errors} />
							<CobrancaFieldsSection
								taxaOptions={taxaOptions}
								errors={errors}
							/>

							{mutation.isError && (
								<div className="rounded-md border border-destructive/50 bg-destructive/10 p-3 text-sm text-destructive">
									{mutation.error?.message ?? "Erro ao criar troca de endereço"}
								</div>
							)}
						</div>

						<SheetFooter className="border-t px-4 py-4">
							<Button
								type="button"
								variant="outline"
								onClick={() => handleOpenChange(false)}
								disabled={mutation.isPending}
							>
								Cancelar
							</Button>
							<Button type="submit" disabled={!isValid || mutation.isPending}>
								{mutation.isPending && (
									<Loader2 className="mr-2 size-4 animate-spin" />
								)}
								Salvar
							</Button>
						</SheetFooter>
					</form>
				</SheetContent>
			</Sheet>

			<SheetDiscardGuard
				open={showDiscardDialog}
				onOpenChange={setShowDiscardDialog}
				onConfirm={handleDiscardConfirm}
				onCancel={handleDiscardCancel}
			/>
		</>
	);
}
