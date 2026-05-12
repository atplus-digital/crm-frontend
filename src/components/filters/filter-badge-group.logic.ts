import { useCallback, useState } from "react";

export interface BadgeOption<T extends string> {
	value: T;
	label: string;
	colorClass?: string;
	bgClass?: string;
}

interface UseBadgeGroupLogicOptions<T extends string> {
	options: readonly BadgeOption<T>[];
	extraOptions?: readonly BadgeOption<T>[];
	value: T[] | undefined;
	onChange: (value: T[] | undefined) => void;
	allActive?: boolean;
	disabled?: boolean;
	showAllButton?: boolean;
}

interface UseBadgeGroupLogicReturn<T extends string> {
	selectedValues: T[];
	expandedExtraKeys: Set<T>;
	hasExtras: boolean;
	allOptionValues: T[];
	collapsedExtraOptions: BadgeOption<T>[];
	handleToggle: (optionValue: T) => void;
	handleToggleExtras: () => void;
	handleExpandedOptionChange: (optionValue: T) => void;
	isBadgeActive: (optionValue: T) => boolean;
	isAllSelected: boolean;
}

export function useBadgeGroupLogic<T extends string>({
	options,
	extraOptions,
	value,
	onChange,
	allActive = false,
	disabled = false,
	showAllButton = true,
}: UseBadgeGroupLogicOptions<T>): UseBadgeGroupLogicReturn<T> {
	const selectedValues = (value ?? []) as T[];

	const [expandedExtraKeys, setExpandedExtraKeys] = useState<Set<T>>(new Set());

	const hasExtras = extraOptions && extraOptions.length > 0;
	const allOptions = hasExtras ? [...options, ...extraOptions] : options;
	const allOptionValues = allOptions.map((option) => option.value);

	const collapsedExtraOptions = hasExtras
		? extraOptions.filter(
				(opt) =>
					!selectedValues.includes(opt.value) &&
					!expandedExtraKeys.has(opt.value),
			)
		: [];

	const handleToggle = useCallback(
		(optionValue: T) => {
			if (disabled) return;

			if (allActive && selectedValues.length === 0) {
				const newValue = allOptionValues.filter((v) => v !== optionValue);
				onChange(newValue.length === 0 ? undefined : newValue);
				return;
			}

			if (selectedValues.includes(optionValue)) {
				const newValue = selectedValues.filter((v) => v !== optionValue);
				if (allActive && newValue.length === 0) {
					onChange(undefined);
					return;
				}
				onChange(showAllButton && newValue.length === 0 ? undefined : newValue);
			} else {
				const newValue = [...selectedValues, optionValue];

				if (allActive && newValue.length === allOptionValues.length) {
					onChange(undefined);
					return;
				}

				onChange(newValue);
			}
		},
		[
			disabled,
			allActive,
			selectedValues,
			allOptionValues,
			onChange,
			showAllButton,
		],
	);

	const handleToggleExtras = useCallback(() => {
		if (disabled || !hasExtras) return;
		if (expandedExtraKeys.size > 0) {
			setExpandedExtraKeys(new Set());
		} else {
			setExpandedExtraKeys(new Set(extraOptions.map((opt) => opt.value)));
		}
	}, [disabled, hasExtras, expandedExtraKeys, extraOptions]);

	const handleExpandedOptionChange = useCallback(
		(optionValue: T) => {
			if (disabled) return;
			handleToggle(optionValue);
			const willBeSelected = !selectedValues.includes(optionValue);
			if (!willBeSelected) {
				setExpandedExtraKeys((prev) => {
					const next = new Set(prev);
					next.delete(optionValue);
					return next;
				});
			}
		},
		[disabled, handleToggle, selectedValues],
	);

	const isBadgeActive = useCallback(
		(optionValue: T): boolean => {
			if (allActive && selectedValues.length === 0) {
				return true;
			}
			return selectedValues.includes(optionValue);
		},
		[allActive, selectedValues],
	);

	const isAllSelected =
		selectedValues.length === 0 || selectedValues.length === allOptions.length;

	return {
		selectedValues,
		expandedExtraKeys,
		hasExtras: !!hasExtras,
		allOptionValues,
		collapsedExtraOptions,
		handleToggle,
		handleToggleExtras,
		handleExpandedOptionChange,
		isBadgeActive,
		isAllSelected,
	};
}
