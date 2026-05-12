import type {
	Control,
	UseFormRegister,
	UseFormSetValue,
} from "react-hook-form";
import { EnderecoSection } from "./endereco-section";
import type { TransferenciaTitularidadeFormValues } from "./transferencia-titularidade-types";

// ============================================================================
// Props
// ============================================================================

interface ContratoSectionProps {
	contratoId: string;
	register: UseFormRegister<TransferenciaTitularidadeFormValues>;
	control: Control<TransferenciaTitularidadeFormValues>;
	setValue: UseFormSetValue<TransferenciaTitularidadeFormValues>;
	errors: Record<string, { message?: string }>;
}

// ============================================================================
// Contrato Section
// ============================================================================

export function ContratoSection({
	contratoId,
	register,
	control,
	setValue,
	errors,
}: ContratoSectionProps) {
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

				<EnderecoSection
					control={control}
					register={register}
					setValue={setValue}
					errors={errors}
				/>
			</div>
		</fieldset>
	);
}
