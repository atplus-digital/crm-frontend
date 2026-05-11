import { useEffect, useState } from "react";
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
		onClear();
	};

	return (
		<div className="space-y-1.5">
			<label htmlFor="pj-search" className="text-sm font-medium">
				Pessoa (PJ)
			</label>
			<input
				id="pj-search"
				type="text"
				placeholder="Buscar por razão social..."
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm"
			/>
			{loading && <p className="text-xs text-muted-foreground">Buscando...</p>}
			{results.length > 0 && (
				<ul className="border max-h-40 overflow-y-auto rounded-md">
					{results.map((result) => (
						<li key={result?.id}>
							<button
								type="button"
								onClick={() => handleSelect(result)}
								className="w-full px-3 py-2 text-left text-sm hover:bg-muted"
							>
								{result?.f_razao_social} — {result?.f_cnpj}
							</button>
						</li>
					))}
				</ul>
			)}
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
