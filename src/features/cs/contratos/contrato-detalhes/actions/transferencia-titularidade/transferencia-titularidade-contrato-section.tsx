import { useMemo } from "react";
import {
	type Control,
	Controller,
	type UseFormRegister,
	type UseFormSetValue,
} from "react-hook-form";
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
import type { TransferenciaTitularidadeFormValues } from "./transferencia-titularidade-types";

// ============================================================================
// Props
// ============================================================================

interface ContratoSectionProps {
	contratoId: string;
	register: UseFormRegister<TransferenciaTitularidadeFormValues>;
	setValue: UseFormSetValue<TransferenciaTitularidadeFormValues>;
	control: Control<TransferenciaTitularidadeFormValues>;
	errors: Record<string, { message?: string }>;
}

// ============================================================================
// Contrato Section
// ============================================================================

export function ContratoSection({
	contratoId,
	register,
	control,
	errors,
}: ContratoSectionProps) {
	const complementoOptions = useMemo(
		() => Object.entries(CRMTROCATITULARIDADE_COMPLEMENTO_LABELS),
		[],
	);

	const estadoOptions = useMemo(
		() => Object.entries(CRMTROCATITULARIDADE_ESTADO_LABELS),
		[],
	);

	return (
		<fieldset>
			<div className="mb-4 flex items-center gap-3">
				<div className="h-px flex-1 bg-border" />
				<span className="text-xs font-medium text-muted-foreground">
					DADOS DO CONTRATO
				</span>
				<div className="h-px flex-1 bg-border" />
			</div>

			<div className="mb-4 space-y-3">
				{/* Contrato ID */}
				<div className="space-y-1.5">
					<label htmlFor="contrato-id" className="text-sm font-medium">
						Contrato ID
					</label>
					<input
						id="contrato-id"
						value={contratoId}
						disabled
						className="flex h-9 w-full rounded-md border border-input bg-muted/50 px-3 py-1 text-sm shadow-sm"
					/>
				</div>

				{/* CEP */}
				<div className="space-y-1.5">
					<label htmlFor="f_cep" className="text-sm font-medium">
						CEP <span className="text-destructive">*</span>
					</label>
					<input
						id="f_cep"
						placeholder="Exemplo: 88523-000"
						className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
						{...register("f_cep")}
					/>
					{errors.f_cep && (
						<p className="text-xs text-destructive">{errors.f_cep.message}</p>
					)}
				</div>

				{/* Endereço + Número */}
				<div className="grid grid-cols-[1fr_auto] gap-3">
					<div className="space-y-1.5">
						<label htmlFor="f_endereco" className="text-sm font-medium">
							Endereço <span className="text-destructive">*</span>
						</label>
						<input
							id="f_endereco"
							className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
							{...register("f_endereco")}
						/>
						{errors.f_endereco && (
							<p className="text-xs text-destructive">
								{errors.f_endereco.message}
							</p>
						)}
					</div>
					<div className="w-28 space-y-1.5">
						<label htmlFor="f_numero" className="text-sm font-medium">
							Número <span className="text-destructive">*</span>
						</label>
						<input
							id="f_numero"
							className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
							{...register("f_numero")}
						/>
						{errors.f_numero && (
							<p className="text-xs text-destructive">
								{errors.f_numero.message}
							</p>
						)}
					</div>
				</div>

				{/* Bairro + Complemento */}
				<div className="grid grid-cols-2 gap-3">
					<div className="space-y-1.5">
						<label htmlFor="f_bairro" className="text-sm font-medium">
							Bairro <span className="text-destructive">*</span>
						</label>
						<input
							id="f_bairro"
							className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
							{...register("f_bairro")}
						/>
						{errors.f_bairro && (
							<p className="text-xs text-destructive">
								{errors.f_bairro.message}
							</p>
						)}
					</div>
					<div className="space-y-1.5">
						<label htmlFor="f_complemento" className="text-sm font-medium">
							Complemento <span className="text-destructive">*</span>
						</label>
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
						<label htmlFor="f_cidade" className="text-sm font-medium">
							Cidade <span className="text-destructive">*</span>
						</label>
						<input
							id="f_cidade"
							className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
							{...register("f_cidade")}
						/>
						{errors.f_cidade && (
							<p className="text-xs text-destructive">
								{errors.f_cidade.message}
							</p>
						)}
					</div>
					<div className="w-24 space-y-1.5">
						<label htmlFor="f_estado" className="text-sm font-medium">
							Estado <span className="text-destructive">*</span>
						</label>
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
			</div>
		</fieldset>
	);
}
