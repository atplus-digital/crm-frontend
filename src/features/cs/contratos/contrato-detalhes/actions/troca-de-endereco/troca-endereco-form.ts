import { z } from "zod";

export const trocaEnderecoSchema = z.object({
	f_cep: z.string().min(1, "CEP é obrigatório"),
	f_bairro: z.string().min(1, "Bairro é obrigatório"),
	f_endereco_cidade: z.string().min(1, "Cidade é obrigatória"),
	f_endereco_estado: z.string().min(1, "UF é obrigatória"),
	f_endereco: z.string().min(1, "Endereço é obrigatório"),
	f_endereco_numero: z.string().min(1, "Número é obrigatório"),
	f_endereco_complemento: z.string().min(1, "Complemento é obrigatório"),
	f_endereco_referencia: z.string().optional(),
	f_obs: z.string().optional(),
	f_telefone_contato: z.string().optional(),
	f_taxa_instalacao: z.string().min(1, "Taxa de instalação é obrigatória"),
});

export type TrocaEnderecoFormValues = z.infer<typeof trocaEnderecoSchema>;
