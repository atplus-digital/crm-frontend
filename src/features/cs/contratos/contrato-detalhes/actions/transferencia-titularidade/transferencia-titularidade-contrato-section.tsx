import type {
	Control,
	UseFormRegister,
	UseFormSetValue,
} from "react-hook-form";
import { Input } from "#/components/ui/input";
import { Label } from "#/components/ui/label";
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
					<Label htmlFor="contrato-id">Contrato ID</Label>
					<Input id="contrato-id" value={contratoId} disabled />
				</div>

				{/* Endereço + Número */}
				<div className="grid grid-cols-[1fr_auto] gap-3">
					<div className="space-y-1.5">
						<Label htmlFor="f_endereco">
							Endereço <span className="text-destructive">*</span>
						</Label>
						<Input id="f_endereco" {...register("f_endereco")} />
						{errors.f_endereco && (
							<p className="text-xs text-destructive">
								{errors.f_endereco.message}
							</p>
						)}
					</div>
					<div className="w-28 space-y-1.5">
						<Label htmlFor="f_numero">
							Número <span className="text-destructive">*</span>
						</Label>
						<Input id="f_numero" {...register("f_numero")} />
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
