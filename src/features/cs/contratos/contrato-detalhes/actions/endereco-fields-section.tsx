/* eslint-disable @typescript-eslint/no-explicit-any */
import type { UseFormRegister } from "react-hook-form";

interface FormFieldError {
	readonly message?: string;
}

interface EnderecoFieldsSectionProps {
	readonly register: UseFormRegister<any>;
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
						<label htmlFor="f_cep" className="text-sm font-medium">
							CEP <span className="text-destructive">*</span>
						</label>
						<input
							id="f_cep"
							placeholder="Somente números"
							className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
							{...register("f_cep")}
						/>
						{errors.f_cep && (
							<p className="text-xs text-destructive">{errors.f_cep.message}</p>
						)}
					</div>
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
						<label htmlFor="f_endereco_cidade" className="text-sm font-medium">
							Cidade <span className="text-destructive">*</span>
						</label>
						<input
							id="f_endereco_cidade"
							className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
							{...register("f_endereco_cidade")}
						/>
						{errors.f_endereco_cidade && (
							<p className="text-xs text-destructive">
								{errors.f_endereco_cidade.message}
							</p>
						)}
					</div>
					<div className="space-y-1.5">
						<label htmlFor="f_endereco_estado" className="text-sm font-medium">
							UF <span className="text-destructive">*</span>
						</label>
						<input
							id="f_endereco_estado"
							placeholder="Ex: SC"
							maxLength={2}
							className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm uppercase"
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
					<div className="space-y-1.5">
						<label htmlFor="f_endereco_numero" className="text-sm font-medium">
							Número <span className="text-destructive">*</span>
						</label>
						<input
							id="f_endereco_numero"
							placeholder="SN para sem número"
							className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
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
						<label
							htmlFor="f_endereco_complemento"
							className="text-sm font-medium"
						>
							Complemento <span className="text-destructive">*</span>
						</label>
						<input
							id="f_endereco_complemento"
							className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
							{...register("f_endereco_complemento")}
						/>
						{errors.f_endereco_complemento && (
							<p className="text-xs text-destructive">
								{errors.f_endereco_complemento.message}
							</p>
						)}
					</div>
					<div className="space-y-1.5">
						<label
							htmlFor="f_endereco_referencia"
							className="text-sm font-medium"
						>
							Ponto de Referência
						</label>
						<input
							id="f_endereco_referencia"
							className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
							{...register("f_endereco_referencia")}
						/>
					</div>
				</div>

				<div className="grid grid-cols-2 gap-3">
					<div className="space-y-1.5">
						<label htmlFor="f_obs" className="text-sm font-medium">
							Observações
						</label>
						<input
							id="f_obs"
							placeholder="Observações para a troca de endereço"
							className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
							{...register("f_obs")}
						/>
					</div>
					<div className="space-y-1.5">
						<label htmlFor="f_telefone_contato" className="text-sm font-medium">
							Telefone para Contato
						</label>
						<input
							id="f_telefone_contato"
							className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
							{...register("f_telefone_contato")}
						/>
					</div>
				</div>
			</div>
		</fieldset>
	);
}
