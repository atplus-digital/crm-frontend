import type { ReactNode } from "react";
import { createContext, useContext, useMemo, useState } from "react";
import {
	Combobox,
	ComboboxContent,
	ComboboxEmpty,
	ComboboxInput,
	ComboboxItem,
	ComboboxList,
} from "#/components/ui/combobox";

interface SearchComboboxContextValue<T> {
	selected: T | null;
	getItemLabel: (item: T) => string;
	placeholder: string;
	id?: string;
}

const SearchComboboxContext =
	createContext<SearchComboboxContextValue<unknown> | null>(null);

function useSearchComboboxContext<T>() {
	const context = useContext(SearchComboboxContext);
	if (!context) {
		throw new Error(
			"SearchCombobox components must be used inside <SearchCombobox>.",
		);
	}

	return context as SearchComboboxContextValue<T>;
}

interface SearchComboboxProps<T> {
	id?: string;
	items: T[];
	value?: T | null;
	onValueChange?: (item: T) => void;
	getItemLabel?: (item: T) => string;
	onSearchChange?: (value: string) => void;
	placeholder?: string;
	children: ReactNode;
}

export function SearchCombobox<T>({
	id,
	items,
	value = null,
	onValueChange,
	getItemLabel,
	onSearchChange,
	placeholder = "Selecione...",
	children,
}: SearchComboboxProps<T>) {
	const [query, setQuery] = useState("");

	const itemLabel = useMemo(
		() =>
			getItemLabel ??
			((item: T) => (typeof item === "string" ? item : String(item ?? ""))),
		[getItemLabel],
	);

	const handleInputChange = (nextValue: string) => {
		setQuery(nextValue);
		onSearchChange?.(nextValue);
	};

	const handleValueChange = (nextValue: T | null) => {
		if (!nextValue) return;
		onValueChange?.(nextValue);
		setQuery(itemLabel(nextValue));
	};

	return (
		<SearchComboboxContext.Provider
			value={{
				selected: value,
				getItemLabel: (item) => itemLabel(item as T),
				placeholder,
				id,
			}}
		>
			<Combobox
				items={items}
				filteredItems={items}
				value={value}
				onValueChange={(nextValue) => handleValueChange(nextValue as T | null)}
				inputValue={query}
				onInputValueChange={handleInputChange}
				itemToStringLabel={(item) => itemLabel(item as T)}
				isItemEqualToValue={(item, selectedItem) => item === selectedItem}
			>
				{children}
			</Combobox>
		</SearchComboboxContext.Provider>
	);
}

interface SearchComboboxInputProps {
	id?: string;
	placeholder?: string;
}

export function SearchComboboxInput({
	id,
	placeholder = "Buscar...",
}: SearchComboboxInputProps) {
	const { placeholder: defaultPlaceholder, id: rootId } =
		useSearchComboboxContext<unknown>();

	return (
		<ComboboxInput
			autoFocus
			id={id ?? rootId}
			placeholder={
				placeholder === "Buscar..." ? defaultPlaceholder : placeholder
			}
			showClear
			showTrigger
		/>
	);
}

export function SearchComboboxContent({ children }: { children: ReactNode }) {
	return <ComboboxContent>{children}</ComboboxContent>;
}

export function SearchComboboxEmpty({ children }: { children: ReactNode }) {
	return <ComboboxEmpty>{children}</ComboboxEmpty>;
}

interface SearchComboboxListProps<T> {
	children: (item: T) => ReactNode;
}

export function SearchComboboxList<T>({
	children,
}: SearchComboboxListProps<T>) {
	return (
		<ComboboxList>{children as (item: unknown) => ReactNode}</ComboboxList>
	);
}

interface SearchComboboxItemProps<T> {
	value: T;
	children: ReactNode;
}

export function SearchComboboxItem<T>({
	value,
	children,
}: SearchComboboxItemProps<T>) {
	const { selected } = useSearchComboboxContext<T>();
	const isSelected = selected === value;

	return (
		<ComboboxItem value={value} data-checked={isSelected}>
			{children}
		</ComboboxItem>
	);
}
