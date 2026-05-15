import { z } from "zod";

// ============================================================================
// Shared Types
// ============================================================================

export type TipoPessoa = "PF" | "PJ";

export type SelectedPF = {
	id: number;
	f_nome: string;
	f_cpf: string;
	f_credito?: number | string;
} | null;

// ============================================================================
// Cessionário State (managed outside form)
// ============================================================================

export interface CessionarioState {
	nome: string;
	documento: string;
	responsavel: string;
	telefone: string;
	email: string;
}

export const DEFAULT_CESSIONARIO_STATE: CessionarioState = {
	nome: "",
	documento: "",
	responsavel: "",
	telefone: "",
	email: "",
};

// ============================================================================
// Form Schema
// ============================================================================

export const transferenciaTitularidadeSchema = z.object({
	// Cedente
	f_cedente_responsavel_legal: z
		.string()
		.min(1, "Responsável legal é obrigatório"),
	f_cedente_telefone: z.string().min(1, "Telefone é obrigatório"),
	f_cedente_email: z.string().email("E-mail inválido"),

	// Cessionário
	f_cessionario: z.string().min(1, "Nome é obrigatório"),
	f_cessionario_documento: z.string().min(1, "Documento é obrigatório"),
	f_cessionario_responsavel: z.string().optional(),
	f_cessionario_telefone: z.string().min(1, "Telefone é obrigatório"),
	f_cessionario_email: z.string().email("E-mail inválido"),

	// Endereço
	f_cep: z.string().min(1, "CEP é obrigatório"),
	f_endereco: z.string().min(1, "Endereço é obrigatório"),
	f_numero: z.string().min(1, "Número é obrigatório"),
	f_bairro: z.string().min(1, "Bairro é obrigatório"),
	f_complemento: z.string().min(1, "Complemento é obrigatório"),
	f_cidade: z.string().min(1, "Cidade é obrigatória"),
	f_estado: z.string().min(1, "Estado é obrigatório"),
});

export type TransferenciaTitularidadeFormValues = z.infer<
	typeof transferenciaTitularidadeSchema
>;

// ============================================================================
// Default Values
// ============================================================================

export const DEFAULT_FORM_VALUES: TransferenciaTitularidadeFormValues = {
	f_cedente_responsavel_legal: "",
	f_cedente_telefone: "",
	f_cedente_email: "",
	f_cessionario: "",
	f_cessionario_documento: "",
	f_cessionario_responsavel: "",
	f_cessionario_telefone: "",
	f_cessionario_email: "",
	f_cep: "",
	f_endereco: "",
	f_numero: "",
	f_bairro: "",
	f_complemento: "",
	f_cidade: "",
	f_estado: "",
};
