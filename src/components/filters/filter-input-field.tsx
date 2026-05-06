import React, { useCallback, useEffect, useRef, useState } from "react";
import { Input } from "#/components/ui/input";
import { cn } from "#/lib/utils";

const DEFAULT_DEBOUNCE_MS = 300;

export interface FilterInputFieldProps {
	id: string;
	label: string;
	placeholder: string;
	value: string;
	onChange: (value: string) => void;
	/** Debounce delay in milliseconds. Set to 0 to disable. Defaults to 300ms. */
	debounceMs?: number;
	className?: string;
}

function FilterInputFieldComponent({
	id,
	label,
	placeholder,
	value,
	onChange,
	debounceMs = DEFAULT_DEBOUNCE_MS,
	className,
}: FilterInputFieldProps) {
	const [localValue, setLocalValue] = useState(value);
	const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
	const onChangeRef = useRef(onChange);
	onChangeRef.current = onChange;

	const delay = debounceMs ?? DEFAULT_DEBOUNCE_MS;

	// Sync local value when parent resets filters externally
	useEffect(() => {
		setLocalValue(value);
	}, [value]);

	// Cleanup timeout on unmount
	useEffect(() => {
		return () => {
			if (timeoutRef.current !== null) {
				clearTimeout(timeoutRef.current);
			}
		};
	}, []);

	const handleChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const next = e.target.value;
			setLocalValue(next);

			if (delay === 0) {
				// No debounce — call onChange immediately
				onChangeRef.current(next);
				return;
			}

			if (timeoutRef.current !== null) {
				clearTimeout(timeoutRef.current);
			}

			timeoutRef.current = setTimeout(() => {
				onChangeRef.current(next);
				timeoutRef.current = null;
			}, delay);
		},
		[delay],
	);

	const flushRef = useRef<() => void>(() => {});
	useEffect(() => {
		flushRef.current = () => {
			if (timeoutRef.current !== null) {
				clearTimeout(timeoutRef.current);
				timeoutRef.current = null;
			}
			onChangeRef.current(localValue);
		};
	}, [localValue]);

	// Attach flush to DOM node for parent access
	const inputRef = useRef<HTMLInputElement>(null);
	// biome-ignore lint/correctness/useExhaustiveDependencies: flushRef.current closes over localValue
	useEffect(() => {
		if (inputRef.current) {
			(
				inputRef.current as HTMLInputElement & { __filterFlush?: () => void }
			).__filterFlush = flushRef.current;
		}
	}, [localValue]);

	return (
		<div className={cn("space-y-2", className)}>
			<label htmlFor={id} className="text-xs font-medium text-muted-foreground">
				{label}
			</label>
			<Input
				ref={inputRef}
				id={id}
				placeholder={placeholder}
				value={localValue}
				onChange={handleChange}
				className="h-8"
			/>
		</div>
	);
}

export const FilterInputField = React.memo(FilterInputFieldComponent);
