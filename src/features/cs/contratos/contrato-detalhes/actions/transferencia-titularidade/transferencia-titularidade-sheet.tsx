import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRightLeft, Loader2 } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { SheetDiscardGuard } from "#/components/sheet-discard-guard";
import { Button } from "#/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetFooter,
	SheetHeader,
	SheetTitle,
} from "#/components/ui/sheet";
import { useCreateTrocaTitularidade } from "#/features/cs/troca-titularidade/troca-titularidade-hooks";
import type { CreateTrocaTitularidadeInput } from "#/features/cs/troca-titularidade/troca-titularidade-service";
import { useSheetDiscardGuard } from "#/hooks/use-sheet-discard-guard";
import { CedenteSection } from "./transferencia-titularidade-cedente-section";
import { CessionarioSection } from "./transferencia-titularidade-cessionario-section";
import { ContratoSection } from "./transferencia-titularidade-contrato-section";
import {
	type CessionarioState,
	DEFAULT_CESSIONARIO_STATE,
	DEFAULT_FORM_VALUES,
	type SelectedPF,
	type TipoPessoa,
	type TransferenciaTitularidadeFormValues,
	transferenciaTitularidadeSchema,
} from "./transferencia-titularidade-types";

interface Props {
	contrato: {
		id: number | string;
		f_nc_cliente?: { razao?: string; cnpj_cpf?: string } | null;
	};
	open: boolean;
	onOpenChange: (open: boolean) => void;
}

export function TransferenciaTitularidadeSheet({
	contrato,
	open,
	onOpenChange,
}: Props) {
	const cedente = contrato.f_nc_cliente;

	const cedenteNome = cedente?.razao ?? "";
	const cedenteDoc = cedente?.cnpj_cpf ?? "";
	const contratoId = String(contrato.id);

	const form = useForm<TransferenciaTitularidadeFormValues>({
		resolver: zodResolver(transferenciaTitularidadeSchema),
		defaultValues: DEFAULT_FORM_VALUES,
	});

	const {
		handleSubmit,
		reset,
		control,
		register,
		setValue,
		formState: { errors, isDirty },
	} = form;

	// Discard guard
	const {
		showDiscardDialog,
		setShowDiscardDialog,
		handleOpenChange,
		handleDiscardConfirm,
		handleDiscardCancel,
	} = useSheetDiscardGuard(onOpenChange, isDirty);

	const [tipoPessoa, setTipoPessoa] = useState<TipoPessoa>("PF");

	const [cessionario, setCessionario] = useState<CessionarioState>(
		DEFAULT_CESSIONARIO_STATE,
	);
	const [selectedPF, setSelectedPF] = useState<SelectedPF>(null);

	const mutation = useCreateTrocaTitularidade();

	const submitDisabled = useMemo(() => {
		if (tipoPessoa === "PF" && selectedPF?.f_credito === "9") return true;
		return false;
	}, [tipoPessoa, selectedPF?.f_credito]);

	const onSubmit: SubmitHandler<TransferenciaTitularidadeFormValues> = (
		values,
	) => {
		const payload: CreateTrocaTitularidadeInput = {
			f_cedente: cedenteNome,
			f_cedente_documento: cedenteDoc,
			f_cedente_responsavel_legal: values.f_cedente_responsavel_legal,
			f_cedente_telefone: values.f_cedente_telefone,
			f_cedente_email: values.f_cedente_email,
			f_tipo_pessoa: tipoPessoa,
			f_pessoa_pf: tipoPessoa === "PF" ? (selectedPF?.id ?? null) : null,
			f_pessoa_pj: null,
			f_cessionario: values.f_cessionario,
			f_cessionario_documento: values.f_cessionario_documento,
			f_cessionario_responsavel: values.f_cessionario_responsavel ?? "",
			f_cessionario_telefone: values.f_cessionario_telefone,
			f_cessionario_email: values.f_cessionario_email,
			f_id_contrato: contratoId,
			f_cep: values.f_cep,
			f_endereco: values.f_endereco,
			f_numero: values.f_numero.trim(),
			f_bairro: values.f_bairro,
			f_complemento: values.f_complemento as NonNullable<
				CreateTrocaTitularidadeInput["f_complemento"]
			>,
			f_cidade: values.f_cidade,
			f_estado: values.f_estado as NonNullable<
				CreateTrocaTitularidadeInput["f_estado"]
			>,
		};

		mutation.mutate(payload, {
			onSuccess: () => onOpenChange(false),
		});
	};

	// Reset form when sheet closes
	// biome-ignore lint/correctness/useExhaustiveDependencies: reset/mutation are stable but including them causes infinite loop
	useEffect(() => {
		if (!open) {
			setTipoPessoa("PF");
			setCessionario(DEFAULT_CESSIONARIO_STATE);
			setSelectedPF(null);
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
							<ArrowRightLeft className="size-5" />
							Transferência de Titularidade
						</SheetTitle>
					</SheetHeader>

					<form
						onSubmit={handleSubmit(onSubmit)}
						className="flex flex-1 flex-col overflow-hidden "
					>
						<div className="flex-1 space-y-6 overflow-y-auto px-4 pt-4 pb-12">
							<CedenteSection
								cedenteNome={cedenteNome}
								cedenteDoc={cedenteDoc}
								register={register}
								errors={errors}
							/>

							<CessionarioSection
								tipoPessoa={tipoPessoa}
								onTipoPessoaChange={setTipoPessoa}
								cessionario={cessionario}
								onCessionarioChange={setCessionario}
								selectedPF={selectedPF}
								onSelectedPFChange={setSelectedPF}
								onClearPJSearch={() => {}}
								setValue={setValue}
								errors={errors}
							/>

							<ContratoSection
								contratoId={contratoId}
								register={register}
								control={control}
								setValue={setValue}
								errors={errors}
							/>

							{mutation.isError && (
								<div className="rounded-md border border-destructive/50 bg-destructive/10 p-3 text-sm text-destructive">
									{mutation.error?.message ?? "Erro ao criar transferência"}
								</div>
							)}
						</div>

						<SheetFooter className="border-t flex-row px-4 py-4">
							<Button
								type="button"
								className="flex-1"
								variant="outline"
								onClick={() => handleOpenChange(false)}
								disabled={mutation.isPending}
							>
								Cancelar
							</Button>
							<Button
								type="submit"
								className="flex-1"
								disabled={
									submitDisabled ||
									mutation.isPending ||
									!form.formState.isDirty
								}
							>
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
