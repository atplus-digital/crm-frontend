import { useEffect, useState } from "react";
import {
	SearchCombobox,
	SearchComboboxContent,
	SearchComboboxEmpty,
	SearchComboboxInput,
	SearchComboboxItem,
	SearchComboboxList,
} from "#/components/search-combobox";
import { searchPessoasJuridicas } from "@/features/cs/troca-titularidade/troca-titularidade-service";
import type { SelectedPJ } from "./transferencia-titularidade-types";

// ============================================================================
// Props
// ============================================================================

interface PjSearchProps {
	onSelect: (pj: SelectedPJ) => void;
	onClear: () => void;
}

// ============================================================================
// PJ Search Component
// ============================================================================

export function PjSearch({ onSelect, onClear }: PjSearchProps) {
	const [search, setSearch] = useState("");
	const [results, setResults] = useState<SelectedPJ[]>([]);
	const [loading, setLoading] = useState(false);
	const [selected, setSelected] = useState<SelectedPJ>(null);

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

	const handleSelect = (pj: SelectedPJ) => {
		setSelected(pj);
		onSelect(pj);
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
			<label htmlFor="pj-search" className="text-sm font-medium">
				Pessoa (PJ)
			</label>
			<SearchCombobox
				id="pj-search"
				items={results}
				value={selected}
				onValueChange={handleSelect}
				onSearchChange={setSearch}
				getItemLabel={(item) => `${item?.f_razao_social} — ${item?.f_cnpj}`}
				placeholder="Buscar por razão social ou CNPJ..."
			>
				<SearchComboboxInput placeholder="Digite razão social ou CNPJ..." />
				<SearchComboboxContent>
					{loading && <SearchComboboxEmpty>Buscando...</SearchComboboxEmpty>}
					{!loading && search.length >= 2 && results.length === 0 && (
						<SearchComboboxEmpty>
							Nenhum resultado encontrado.
						</SearchComboboxEmpty>
					)}
					{!loading && (
						<SearchComboboxList>
							{(item: SelectedPJ) => (
								<SearchComboboxItem key={item?.id} value={item}>
									{item?.f_razao_social} — {item?.f_cnpj}
								</SearchComboboxItem>
							)}
						</SearchComboboxList>
					)}
				</SearchComboboxContent>
			</SearchCombobox>
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
