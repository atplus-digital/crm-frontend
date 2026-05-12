import { useEffect, useState } from "react";
import { SearchCombobox } from "#/components/search-combobox";
import { Label } from "#/components/ui/label";
import { searchPessoasFisicas } from "@/features/cs/troca-titularidade/troca-titularidade-service";
import type { SelectedPF } from "./transferencia-titularidade-types";

// ============================================================================
// Props
// ============================================================================

interface PfSearchProps {
	onSelect: (pf: SelectedPF) => void;
	onClear: () => void;
}

// ============================================================================
// PF Search Component
// ============================================================================

export function PfSearch({ onSelect, onClear }: PfSearchProps) {
	const [search, setSearch] = useState("");
	const [results, setResults] = useState<SelectedPF[]>([]);
	const [loading, setLoading] = useState(false);
	const [selected, setSelected] = useState<SelectedPF>(null);

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

	const handleSelect = (pf: SelectedPF) => {
		setSelected(pf);
		onSelect(pf);
		setSearch("");
	};

	const handleClear = () => {
		setSelected(null);
		setSearch("");
		setResults([]);
		onClear();
	};

	return (
		<div className="space-y-1.5">
			<Label htmlFor="pf-search">
				Pessoa (PF) <span className="text-destructive">*</span>
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
				placeholder="Digite nome ou CPF..."
				loading={loading}
				emptyText={
					search.length < 2
						? "Digite pelo menos 2 caracteres."
						: "Nenhum resultado encontrado."
				}
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
