import { Search } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "#/components/ui/button";

interface CepLookupButtonProps {
	cep: string;
	onAddressFound: (data: {
		bairro: string;
		cidade: string;
		estado: string;
		endereco: string;
	}) => void;
}

export function CepLookupButton({ cep, onAddressFound }: CepLookupButtonProps) {
	const [loading, setLoading] = useState(false);

	const handleLookup = async () => {
		const cleanCep = cep.replace(/\D/g, "");
		if (cleanCep.length !== 8) {
			toast.error("CEP deve ter 8 dígitos");
			return;
		}

		setLoading(true);
		try {
			const res = await fetch(`https://viacep.com.br/ws/${cleanCep}/json/`);
			const data = await res.json();
			if (data.erro) {
				toast.error("CEP não encontrado");
				return;
			}
			onAddressFound({
				bairro: data.bairro ?? "",
				cidade: data.localidade ?? "",
				estado: data.uf ?? "",
				endereco: data.logradouro ?? "",
			});
			toast.success("Endereço encontrado");
		} catch {
			toast.error("Erro ao consultar CEP");
		} finally {
			setLoading(false);
		}
	};

	return (
		<Button
			type="button"
			variant="outline"
			size="icon"
			className="shrink-0"
			disabled={loading}
			onClick={handleLookup}
			aria-label="Buscar CEP"
		>
			<Search className="size-4" />
		</Button>
	);
}
