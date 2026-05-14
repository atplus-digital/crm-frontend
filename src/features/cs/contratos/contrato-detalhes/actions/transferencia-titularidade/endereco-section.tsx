import { Loader2, Search } from "lucide-react";
import { useEffect, useMemo } from "react";
import {
	type Control,
	Controller,
	type UseFormRegister,
	type UseFormSetValue,
	useWatch,
} from "react-hook-form";
import { Button } from "#/components/ui/button";
import { Input } from "#/components/ui/input";
import { Label } from "#/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "#/components/ui/select";
import {
	CRMTROCATITULARIDADE_COMPLEMENTO_LABELS,
	CRMTROCATITULARIDADE_ESTADO_LABELS,
} from "#/generated/types/nocobase/crm-troca-titularidade";
import { useCepLookup } from "#/hooks/use-cep-lookup";
import type { TransferenciaTitularidadeFormValues } from "./transferencia-titularidade-types";

// ============================================================================
// Props
// ============================================================================

interface EnderecoSectionProps {
	control: Control<TransferenciaTitularidadeFormValues>;
	register: UseFormRegister<TransferenciaTitularidadeFormValues>;
	setValue: UseFormSetValue<TransferenciaTitularidadeFormValues>;
	errors: Record<string, { message?: string }>;
}

// ============================================================================
// Endereco Section
// ============================================================================

export function EnderecoSection({
	control,
	register,
	setValue,
	errors,
}: EnderecoSectionProps) {
	const {
		isLoading: isCepLoading,
		message: cepMessage,
		result: cepResult,
		lookupCep,
	} = useCepLookup();

	const complementoOptions = useMemo(
		() => Object.entries(CRMTROCATITULARIDADE_COMPLEMENTO_LABELS),
		[],
	);

	const estadoOptions = useMemo(
		() => Object.entries(CRMTROCATITULARIDADE_ESTADO_LABELS),
		[],
	);

	const cepValue = useWatch({ control, name: "f_cep" });

	const cepField = register("f_cep");

	// Sync CEP lookup result with form fields
	useEffect(() => {
		if (!cepResult) return;

		const status: Record<string, boolean> = {
			shouldDirty: true,
			shouldValidate: true,
		};
		setValue("f_cep", cepResult.cep, status);
		setValue("f_endereco", cepResult.street ?? "", status);
		setValue("f_bairro", cepResult.neighborhood ?? "", status);
		setValue("f_cidade", cepResult.city ?? "", status);

		const availableStates = Object.keys(CRMTROCATITULARIDADE_ESTADO_LABELS);
		if (cepResult.state && availableStates.includes(cepResult.state)) {
			setValue("f_estado", cepResult.state, status);
		}
	}, [cepResult, setValue]);

	return (
		<>
			<div className="space-y-1.5">
				<Label htmlFor="f_cep">
					CEP <span className="text-destructive">*</span>
				</Label>
				<div className="flex gap-2">
					<Input
						id="f_cep"
						placeholder="Somente números"
						{...cepField}
						onBlur={(event) => {
							cepField.onBlur(event);
							lookupCep(event.target.value);
						}}
					/>
					<Button
						type="button"
						variant="outline"
						onClick={() => lookupCep(cepValue ?? "")}
						disabled={isCepLoading}
						className="min-w-24"
					>
						{isCepLoading ? (
							<Loader2 className="size-4 animate-spin" />
						) : (
							<Search className="size-4" />
						)}
						Buscar
					</Button>
				</div>
				{errors.f_cep && (
					<p className="text-xs text-destructive">{errors.f_cep.message}</p>
				)}
				{cepMessage && (
					<p className="text-xs text-muted-foreground">{cepMessage}</p>
				)}
			</div>

			{/* Bairro + Complemento */}
			<div className="grid grid-cols-2 gap-3">
				<div className="space-y-1.5">
					<Label htmlFor="f_bairro">
						Bairro <span className="text-destructive">*</span>
					</Label>
					<Input id="f_bairro" {...register("f_bairro")} />
					{errors.f_bairro && (
						<p className="text-xs text-destructive">
							{errors.f_bairro.message}
						</p>
					)}
				</div>
				<div className="space-y-1.5">
					<Label htmlFor="f_complemento">
						Complemento <span className="text-destructive">*</span>
					</Label>
					<Controller
						control={control}
						name="f_complemento"
						render={({ field }) => (
							<Select onValueChange={field.onChange} value={field.value}>
								<SelectTrigger className="w-full">
									<SelectValue placeholder="Selecionar..." />
								</SelectTrigger>
								<SelectContent>
									{complementoOptions.map(([value, label]) => (
										<SelectItem key={value} value={value}>
											{label}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						)}
					/>
					{errors.f_complemento && (
						<p className="text-xs text-destructive">
							{errors.f_complemento.message}
						</p>
					)}
				</div>
			</div>

			{/* Cidade + Estado */}
			<div className="grid grid-cols-[1fr_auto] gap-3">
				<div className="space-y-1.5">
					<Label htmlFor="f_cidade">
						Cidade <span className="text-destructive">*</span>
					</Label>
					<Input id="f_cidade" {...register("f_cidade")} />
					{errors.f_cidade && (
						<p className="text-xs text-destructive">
							{errors.f_cidade.message}
						</p>
					)}
				</div>
				<div className="w-24 space-y-1.5">
					<Label htmlFor="f_estado">
						Estado <span className="text-destructive">*</span>
					</Label>
					<Controller
						control={control}
						name="f_estado"
						render={({ field }) => (
							<Select onValueChange={field.onChange} value={field.value}>
								<SelectTrigger className="w-full">
									<SelectValue placeholder="UF" />
								</SelectTrigger>
								<SelectContent>
									{estadoOptions.map(([value, label]) => (
										<SelectItem key={value} value={value}>
											{label}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						)}
					/>
					{errors.f_estado && (
						<p className="text-xs text-destructive">
							{errors.f_estado.message}
						</p>
					)}
				</div>
			</div>
		</>
	);
}
