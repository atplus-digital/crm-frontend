/* eslint-disable @typescript-eslint/no-explicit-any */
import type { UseFormRegister } from "react-hook-form";

interface FormFieldError {
	readonly message?: string;
}

interface CobrancaFieldsSectionProps {
	readonly taxaOptions: [string, string][];
	readonly register: UseFormRegister<any>;
	readonly errors: Record<string, FormFieldError | undefined>;
}

export function CobrancaFieldsSection({
	taxaOptions,
	register,
	errors,
}: CobrancaFieldsSectionProps) {
	return (
		<fieldset>
			<div className="mb-4 flex items-center gap-3">
				<div className="h-px flex-1 bg-border" />
				<span className="text-xs font-medium text-muted-foreground">
					COBRANÇA
				</span>
				<div className="h-px flex-1 bg-border" />
			</div>

			<div className="mb-4 space-y-3">
				<div className="space-y-1.5">
					<label htmlFor="f_taxa_instalacao" className="text-sm font-medium">
						Taxa de Instalação <span className="text-destructive">*</span>
					</label>
					<select
						id="f_taxa_instalacao"
						className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
						{...register("f_taxa_instalacao")}
					>
						<option value="">Selecionar...</option>
						{taxaOptions.map(([value, label]) => (
							<option key={value} value={value}>
								{label}
							</option>
						))}
					</select>
					{errors.f_taxa_instalacao && (
						<p className="text-xs text-destructive">
							{errors.f_taxa_instalacao.message}
						</p>
					)}
				</div>
			</div>
		</fieldset>
	);
}
