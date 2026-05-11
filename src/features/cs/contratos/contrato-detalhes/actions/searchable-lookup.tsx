"use client";

import { Loader2, Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "#/components/ui/button";
import { Input } from "#/components/ui/input";

// ============================================================================
// Types
// ============================================================================

export interface SearchableLookupProps<T> {
	placeholder: string;
	loading: boolean;
	results: T[];
	selected: T | null;
	getOptionLabel: (option: T) => string;
	getOptionId: (option: T) => number;
	onSearch: (query: string) => void;
	onSelect: (option: T) => void;
	onClear: () => void;
	value: string;
	onValueChange: (value: string) => void;
}

// ============================================================================
// Searchable Lookup Component
// ============================================================================

export function SearchableLookup<T>({
	placeholder,
	loading,
	results,
	selected,
	getOptionLabel,
	getOptionId,
	onSearch,
	onSelect,
	onClear,
	value,
	onValueChange,
}: SearchableLookupProps<T>) {
	const [open, setOpen] = useState(false);
	const containerRef = useRef<HTMLDivElement>(null);

	// Fechar ao clicar fora
	useEffect(() => {
		function handleClickOutside(e: MouseEvent) {
			if (
				containerRef.current &&
				!containerRef.current.contains(e.target as Node)
			) {
				setOpen(false);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	return (
		<div ref={containerRef} className="relative">
			{selected ? (
				<div className="flex items-center gap-2 rounded-md border px-3 py-2 text-sm">
					<span className="flex-1 truncate">{getOptionLabel(selected)}</span>
					<Button
						variant="ghost"
						size="icon-sm"
						onClick={() => {
							onClear();
							onValueChange("");
						}}
					>
						<span className="sr-only">Limpar</span>
						<span aria-hidden="true">&times;</span>
					</Button>
				</div>
			) : (
				<div className="relative">
					<div className="relative">
						<Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
						<Input
							placeholder={placeholder}
							value={value}
							onChange={(e) => {
								onValueChange(e.target.value);
								onSearch(e.target.value);
								setOpen(true);
							}}
							onFocus={() => {
								if (results.length > 0) setOpen(true);
							}}
							className="pl-9"
						/>
					</div>
					{open && results.length > 0 && (
						<div className="absolute z-50 mt-1 max-h-48 w-full overflow-y-auto rounded-md border bg-popover shadow-md">
							{loading ? (
								<div className="flex items-center justify-center py-4">
									<Loader2 className="size-4 animate-spin text-muted-foreground" />
								</div>
							) : (
								results.map((option) => (
									<button
										key={getOptionId(option)}
										type="button"
										className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm hover:bg-accent"
										onClick={() => {
											onSelect(option);
											setOpen(false);
										}}
									>
										<span className="truncate">{getOptionLabel(option)}</span>
									</button>
								))
							)}
						</div>
					)}
				</div>
			)}
		</div>
	);
}
