import { useEffect, useState } from "react";
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
		onClear();
	};

	return (
		<div className="space-y-1.5">
			<label htmlFor="pf-search" className="text-sm font-medium">
				Pessoa (PF) <span className="text-destructive">*</span>
			</label>
			<input
				id="pf-search"
				type="text"
				placeholder="Buscar por nome..."
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
								{result?.f_nome} — {result?.f_cpf}
							</button>
						</li>
					))}
				</ul>
			)}
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
