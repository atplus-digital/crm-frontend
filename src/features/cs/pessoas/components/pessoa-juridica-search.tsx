import { useEffect, useState } from "react";
import { SearchCombobox } from "#/components/search-combobox";
import { Label } from "#/components/ui/label";
import type { Empresas } from "#/generated/types/nocobase/empresas";
import { searchPessoasJuridicas } from "../pessoas-service";

// ============================================================================
// Types
// ============================================================================

export type PessoaJuridicaResult = Pick<
	Empresas,
	"id" | "f_razao_social" | "f_cnpj"
>;

interface PessoaJuridicaSearchProps {
	onSelect: (company: PessoaJuridicaResult) => void;
	onClear: () => void;
	label?: string;
	placeholder?: string;
	emptyText?: string;
}

// ============================================================================
// Component
// ============================================================================

export function PessoaJuridicaSearch({
	onSelect,
	onClear,
	label = "Pessoa (PJ)",
	placeholder = "Digite razão social ou CNPJ...",
	emptyText,
}: PessoaJuridicaSearchProps) {
	const [search, setSearch] = useState("");
	const [results, setResults] = useState<PessoaJuridicaResult[]>([]);
	const [loading, setLoading] = useState(false);
	const [selected, setSelected] = useState<PessoaJuridicaResult | null>(null);

	useEffect(() => {
		if (search.length < 2) {
			setResults([]);
			return;
		}

		const timer = setTimeout(async () => {
			setLoading(true);
			const data = await searchPessoasJuridicas(search);
			setResults(data);
			setLoading(false);
		}, 300);

		return () => clearTimeout(timer);
	}, [search]);

	const handleSelect = (company: PessoaJuridicaResult) => {
		setSelected(company);
		onSelect(company);
		setSearch("");
	};

	const handleClear = () => {
		setSelected(null);
		setSearch("");
		setResults([]);
		onClear();
	};

	const defaultEmptyText =
		search.length < 2
			? "Digite pelo menos 2 caracteres."
			: "Nenhum resultado encontrado.";

	return (
		<div className="space-y-1.5">
			<Label htmlFor="pj-search">{label}</Label>
			<SearchCombobox
				id="pj-search"
				items={results}
				value={selected}
				onValueChange={handleSelect}
				onSearchChange={setSearch}
				getItemLabel={(item) => `${item?.f_razao_social} — ${item?.f_cnpj}`}
				getItemKey={(item) => {
					if (!item) return "pj-empty-item";
					return item.id;
				}}
				renderItem={(item) => `${item?.f_razao_social} — ${item?.f_cnpj}`}
				isItemEqualToValue={(item, selectedItem) =>
					item?.id === selectedItem?.id
				}
				placeholder={placeholder}
				loading={loading}
				emptyText={emptyText ?? defaultEmptyText}
			/>
			{selected && (
				<div className="mt-1 flex items-center gap-2">
					<span className="text-xs text-muted-foreground">
						Selecionado: {selected.f_razao_social}
					</span>
					<button
						type="button"
						onClick={handleClear}
						className="text-xs text-muted-foreground hover:text-foreground"
					>
						✕
					</button>
				</div>
			)}
		</div>
	);
}
