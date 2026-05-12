import type { ComponentProps, Key, ReactNode } from "react";
import { useMemo } from "react";
import {
	Combobox,
	ComboboxContent,
	ComboboxEmpty,
	ComboboxInput,
	ComboboxItem,
	ComboboxList,
} from "#/components/ui/combobox";

interface SearchComboboxProps<T> {
	id?: string;
	items: T[];
	value?: T | null;
	onValueChange?: (item: T) => void;
	getItemLabel?: (item: T) => string;
	getItemKey?: (item: T) => Key;
	renderItem?: (item: T) => ReactNode;
	onSearchChange?: (value: string) => void;
	isItemEqualToValue?: (item: T, selectedItem: T) => boolean;
	placeholder?: string;
	loading?: boolean;
	loadingText?: ReactNode;
	emptyText?: ReactNode;
	inputProps?: Omit<ComponentProps<typeof ComboboxInput>, "id" | "placeholder">;
}

export function SearchCombobox<T>({
	id,
	items,
	value = null,
	onValueChange,
	getItemLabel,
	getItemKey,
	renderItem,
	onSearchChange,
	isItemEqualToValue,
	placeholder = "Selecione...",
	loading = false,
	loadingText = "Buscando...",
	emptyText = "Nada encontrado",
	inputProps,
}: SearchComboboxProps<T>) {
	const itemLabel =
		getItemLabel ??
		((item: T) => (typeof item === "string" ? item : String(item ?? "")));

	const handleInputChange: NonNullable<
		ComponentProps<typeof Combobox>["onInputValueChange"]
	> = (nextValue, eventDetails) => {
		if (
			eventDetails.reason !== "input-change" &&
			eventDetails.reason !== "input-clear" &&
			eventDetails.reason !== "clear-press"
		) {
			return;
		}

		onSearchChange?.(nextValue);
	};

	const handleValueChange = (nextValue: T | null) => {
		if (nextValue === null) return;
		onValueChange?.(nextValue);
	};

	const compareItems =
		isItemEqualToValue ?? ((item: T, selectedItem: T) => item === selectedItem);

	const availableItems = useMemo(() => {
		if (value === null || value === undefined) return items;
		const selectedValue = value as T;
		const hasSelectedItem = items.some((item) =>
			compareItems(item, selectedValue),
		);
		if (hasSelectedItem) return items;
		return [selectedValue, ...items];
	}, [compareItems, items, value]);

	const resolveItemKey = (item: T) => {
		if (getItemKey) return getItemKey(item);
		if (typeof item === "string" || typeof item === "number") return item;
		if (item && typeof item === "object" && "id" in item) {
			const id = (item as { id?: unknown }).id;
			if (typeof id === "string" || typeof id === "number") return id;
		}
		return itemLabel(item);
	};

	return (
		<Combobox
			items={availableItems}
			value={value}
			onValueChange={handleValueChange}
			onInputValueChange={handleInputChange}
			itemToStringLabel={itemLabel}
			itemToStringValue={itemLabel}
			isItemEqualToValue={compareItems}
		>
			<ComboboxInput id={id} placeholder={placeholder} {...inputProps} />
			<ComboboxContent>
				<ComboboxEmpty>{loading ? loadingText : emptyText}</ComboboxEmpty>
				<ComboboxList>
					{(item) => (
						<ComboboxItem key={resolveItemKey(item as T)} value={item}>
							{renderItem ? renderItem(item as T) : itemLabel(item as T)}
						</ComboboxItem>
					)}
				</ComboboxList>
			</ComboboxContent>
		</Combobox>
	);
}
