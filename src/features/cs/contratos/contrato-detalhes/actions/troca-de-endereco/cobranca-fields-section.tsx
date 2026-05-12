import { Controller, useFormContext } from "react-hook-form";
import { Label } from "#/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "#/components/ui/select";
import type { TrocaEnderecoFormValues } from "./troca-endereco-form";

interface FormFieldError {
	readonly message?: string;
}

interface CobrancaFieldsSectionProps {
	readonly taxaOptions: [string, string][];
	readonly errors: Record<string, FormFieldError | undefined>;
}

export function CobrancaFieldsSection({
	taxaOptions,
	errors,
}: CobrancaFieldsSectionProps) {
	const { control } = useFormContext<TrocaEnderecoFormValues>();
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
					<Label htmlFor="f_taxa_instalacao">
						Taxa de Instalação <span className="text-destructive">*</span>
					</Label>
					<Controller
						control={control}
						name="f_taxa_instalacao"
						render={({ field }) => (
							<Select onValueChange={field.onChange} value={field.value}>
								<SelectTrigger>
									<SelectValue placeholder="Selecionar..." />
								</SelectTrigger>
								<SelectContent>
									{taxaOptions.map(([value, labelText]) => (
										<SelectItem key={value} value={value}>
											{labelText}
										</SelectItem>
									))}
								</SelectContent>
							</Select>
						)}
					/>
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
