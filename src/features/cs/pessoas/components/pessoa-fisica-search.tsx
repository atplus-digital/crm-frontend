import { useEffect, useState } from "react";
import { SearchCombobox } from "#/components/search-combobox";
import { Label } from "#/components/ui/label";
import type { Pessoas } from "#/generated/types/nocobase/pessoas";
import { searchPessoasFisicas } from "../pessoas-service";

// ============================================================================
// Types
// ============================================================================

export type PessoaFisicaResult = Pick<
	Pessoas,
	"id" | "f_nome" | "f_cpf" | "f_credito"
>;

interface PessoaFisicaSearchProps {
	onSelect: (person: PessoaFisicaResult) => void;
	onClear: () => void;
	label?: string;
	placeholder?: string;
	emptyText?: string;
}

// ============================================================================
// Component
// ============================================================================

export function PessoaFisicaSearch({
	onSelect,
	onClear,
	label = "Pessoa (PF)",
	placeholder = "Digite nome ou CPF...",
	emptyText,
}: PessoaFisicaSearchProps) {
	const [search, setSearch] = useState("");
	const [results, setResults] = useState<PessoaFisicaResult[]>([]);
	const [loading, setLoading] = useState(false);
	const [selected, setSelected] = useState<PessoaFisicaResult | null>(null);

	useEffect(() => {
		if (search.length < 2) {
			setResults([]);
			return;
		}

		const timer = setTimeout(async () => {
			setLoading(true);
			const data = await searchPessoasFisicas(search);
			setResults(data);
			setLoading(false);
		}, 300);

		return () => clearTimeout(timer);
	}, [search]);

	const handleSelect = (person: PessoaFisicaResult) => {
		setSelected(person);
		onSelect(person);
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
			<Label htmlFor="pf-search">
				{label} <span className="text-destructive">*</span>
			</Label>
			<SearchCombobox
				id="pf-search"
				items={results}
				value={selected}
				onValueChange={handleSelect}
				onSearchChange={setSearch}
				getItemLabel={(item) => `${item?.f_nome} — ${item?.f_cpf}`}
				getItemKey={(item) => {
					if (!item) return "pf-empty-item";
					return item.id;
				}}
				renderItem={(item) => `${item?.f_nome} — ${item?.f_cpf}`}
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
						Selecionado: {selected.f_nome}
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
