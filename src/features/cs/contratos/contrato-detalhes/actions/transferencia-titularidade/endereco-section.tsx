import { Loader2, Search } from "lucide-react";
import { useCallback, useMemo, useRef, useState } from "react";
import {
	type Control,
	Controller,
	type UseFormRegister,
	type UseFormSetValue,
	useWatch,
} from "react-hook-form";
import { Button } from "#/components/ui/button";
import { Input } from "#/components/ui/input";
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
	const [isCepLoading, setIsCepLoading] = useState(false);
	const [cepMessage, setCepMessage] = useState<string | null>(null);
	const abortRef = useRef<AbortController | null>(null);

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

	const lookupCep = useCallback(
		async (rawCep: string) => {
			const normalizedCep = rawCep.replace(/\D/g, "");
			if (normalizedCep.length !== 8) {
				setCepMessage("Digite um CEP válido com 8 números.");
				return;
			}

			abortRef.current?.abort();
			const controller = new AbortController();
			abortRef.current = controller;

			setIsCepLoading(true);
			setCepMessage(null);

			try {
				const response = await fetch(
					`https://brasilapi.com.br/api/cep/v1/${normalizedCep}`,
					{
						signal: controller.signal,
					},
				);

				if (!response.ok) {
					setCepMessage("CEP não encontrado.");
					return;
				}

				const data = (await response.json()) as {
					city?: string;
					neighborhood?: string;
					state?: string;
					street?: string;
				};

				setValue("f_cep", normalizedCep, {
					shouldDirty: true,
					shouldValidate: true,
				});
				setValue("f_endereco", data.street ?? "", {
					shouldDirty: true,
					shouldValidate: true,
				});
				setValue("f_bairro", data.neighborhood ?? "", {
					shouldDirty: true,
					shouldValidate: true,
				});
				setValue("f_cidade", data.city ?? "", {
					shouldDirty: true,
					shouldValidate: true,
				});

				const state = data.state?.toUpperCase();
				const availableStates = Object.keys(CRMTROCATITULARIDADE_ESTADO_LABELS);
				if (state && availableStates.includes(state)) {
					setValue("f_estado", state, {
						shouldDirty: true,
						shouldValidate: true,
					});
					setCepMessage("");
					return;
				}

				setCepMessage(
					state
						? `Endereço preenchido, mas UF "${state}" não está disponível nesta lista.`
						: "Endereço preenchido parcialmente; selecione a UF manualmente.",
				);
			} catch (error) {
				if (error instanceof DOMException && error.name === "AbortError") {
					return;
				}
				setCepMessage("Não foi possível consultar o CEP no momento.");
			} finally {
				setIsCepLoading(false);
			}
		},
		[setValue],
	);

	return (
		<>
			<div className="space-y-1.5">
				<label htmlFor="f_cep" className="text-sm font-medium">
					CEP <span className="text-destructive">*</span>
				</label>
				<div className="flex gap-2">
					<Input
						id="f_cep"
						placeholder="Somente números"
						{...cepField}
						onBlur={(event) => {
							cepField.onBlur(event);
							void lookupCep(event.target.value);
						}}
					/>
					<Button
						type="button"
						variant="outline"
						onClick={() => void lookupCep(cepValue ?? "")}
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
