import type { UseFormRegister } from "react-hook-form";
import { Input } from "#/components/ui/input";
import { Label } from "#/components/ui/label";
import type { TrocaEnderecoFormValues } from "./troca-endereco-form";

interface FormFieldError {
	readonly message?: string;
}

interface EnderecoFieldsSectionProps {
	readonly register: UseFormRegister<TrocaEnderecoFormValues>;
	readonly errors: Record<string, FormFieldError | undefined>;
}

export function EnderecoFieldsSection({
	register,
	errors,
}: EnderecoFieldsSectionProps) {
	return (
		<fieldset>
			<div className="mb-4 flex items-center gap-3">
				<div className="h-px flex-1 bg-border" />
				<span className="text-xs font-medium text-muted-foreground">
					PREENCHA ABAIXO O NOVO ENDEREÇO
				</span>
				<div className="h-px flex-1 bg-border" />
			</div>

			<div className="mb-4 space-y-3">
				<div className="grid grid-cols-4 gap-3">
					<div className="space-y-1.5">
						<Label htmlFor="f_cep">
							CEP <span className="text-destructive">*</span>
						</Label>
						<Input
							id="f_cep"
							placeholder="Somente números"
							{...register("f_cep")}
						/>
						{errors.f_cep && (
							<p className="text-xs text-destructive">{errors.f_cep.message}</p>
						)}
					</div>
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
						<Label htmlFor="f_endereco_cidade">
							Cidade <span className="text-destructive">*</span>
						</Label>
						<Input id="f_endereco_cidade" {...register("f_endereco_cidade")} />
						{errors.f_endereco_cidade && (
							<p className="text-xs text-destructive">
								{errors.f_endereco_cidade.message}
							</p>
						)}
					</div>
					<div className="space-y-1.5">
						<Label htmlFor="f_endereco_estado">
							UF <span className="text-destructive">*</span>
						</Label>
						<Input
							id="f_endereco_estado"
							placeholder="Ex: SC"
							maxLength={2}
							className="uppercase"
							{...register("f_endereco_estado")}
						/>
						{errors.f_endereco_estado && (
							<p className="text-xs text-destructive">
								{errors.f_endereco_estado.message}
							</p>
						)}
					</div>
				</div>

				<div className="grid grid-cols-[4fr_1fr] gap-3">
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
					<div className="space-y-1.5">
						<Label htmlFor="f_endereco_numero">
							Número <span className="text-destructive">*</span>
						</Label>
						<Input
							id="f_endereco_numero"
							placeholder="SN para sem número"
							{...register("f_endereco_numero")}
						/>
						{errors.f_endereco_numero && (
							<p className="text-xs text-destructive">
								{errors.f_endereco_numero.message}
							</p>
						)}
					</div>
				</div>

				<div className="grid grid-cols-2 gap-3">
					<div className="space-y-1.5">
						<Label htmlFor="f_endereco_complemento">
							Complemento <span className="text-destructive">*</span>
						</Label>
						<Input
							id="f_endereco_complemento"
							{...register("f_endereco_complemento")}
						/>
						{errors.f_endereco_complemento && (
							<p className="text-xs text-destructive">
								{errors.f_endereco_complemento.message}
							</p>
						)}
					</div>
					<div className="space-y-1.5">
						<Label htmlFor="f_endereco_referencia">Ponto de Referência</Label>
						<Input
							id="f_endereco_referencia"
							{...register("f_endereco_referencia")}
						/>
					</div>
				</div>

				<div className="grid grid-cols-2 gap-3">
					<div className="space-y-1.5">
						<Label htmlFor="f_obs">Observações</Label>
						<Input
							id="f_obs"
							placeholder="Observações para a troca de endereço"
							{...register("f_obs")}
						/>
					</div>
					<div className="space-y-1.5">
						<Label htmlFor="f_telefone_contato">Telefone para Contato</Label>
						<Input
							id="f_telefone_contato"
							{...register("f_telefone_contato")}
						/>
					</div>
				</div>
			</div>
		</fieldset>
	);
}
