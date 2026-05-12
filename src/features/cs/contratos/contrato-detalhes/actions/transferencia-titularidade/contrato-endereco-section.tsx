import { useMemo } from "react";
import {
	type Control,
	Controller,
	type UseFormRegister,
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

interface EnderecoSectionProps {
	control: Control<TransferenciaTitularidadeFormValues>;
	register: UseFormRegister<TransferenciaTitularidadeFormValues>;
	errors: Record<string, { message?: string }>;
}

// ============================================================================
// Endereco Section
// ============================================================================

export function EnderecoSection({
	control,
	register,
	errors,
}: EnderecoSectionProps) {
	const complementoOptions = useMemo(
		() => Object.entries(CRMTROCATITULARIDADE_COMPLEMENTO_LABELS),
		[],
	);

	const estadoOptions = useMemo(
		() => Object.entries(CRMTROCATITULARIDADE_ESTADO_LABELS),
		[],
	);

	return (
		<>
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
		</>
	);
}
