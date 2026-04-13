import { Slot } from "radix-ui";
import * as React from "react";
import {
	Controller,
	type FieldPath,
	type FieldValues,
	FormProvider as RHFProvider,
	type UseFormReturn,
	useFormContext as useRHFContext,
} from "react-hook-form";
import * as scn from "#/components/ui/field";

type FormProps<T extends FieldValues = FieldValues> = Omit<
	React.ComponentProps<"form">,
	"onSubmit"
> & {
	form: UseFormReturn<T>;
	onSubmit: (values: T) => unknown;
};

function Form<T extends FieldValues = FieldValues>({
	form,
	onSubmit,
	...props
}: FormProps<T>) {
	return (
		<RHFProvider {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} {...props} />
		</RHFProvider>
	);
}

const IdContext = React.createContext<string>(null as never);
const ErrorContext = React.createContext<{
	error: string | null;
	hasError: boolean;
	formControlId: string;
	formDescriptionId: string;
	formMessageId: string;
} | null>(null);

function useErrorContext() {
	const ctx = React.useContext(ErrorContext);
	if (!ctx)
		throw new Error("Form field components must be used within <Field>");
	return ctx;
}

function Field<
	T extends FieldValues = FieldValues,
	TName extends FieldPath<T> = FieldPath<T>,
>({
	name,
	control,
	...props
}: {
	name: TName;
	control?: UseFormReturn<T>["control"];
} & React.ComponentProps<typeof scn.Field>) {
	const form = useRHFContext<T>();
	const id = React.useId();
	const { formState } = form;
	const fieldError = (formState.errors as Record<string, unknown>)[
		name as string
	];
	const isTouched = (formState.touchedFields as Record<string, unknown>)[
		name as string
	];
	const hasSubmitAttempt = formState.submitCount > 0;
	const errorMessage = getErrorMessage(fieldError);
	const hasError = (isTouched || hasSubmitAttempt) && !!errorMessage;

	return (
		<IdContext.Provider value={id}>
			<ErrorContext.Provider
				value={{
					error: errorMessage,
					hasError,
					formControlId: `${id}-form-item`,
					formDescriptionId: `${id}-form-item-description`,
					formMessageId: `${id}-form-item-message`,
				}}
			>
				<Controller
					name={name}
					control={control ?? form.control}
					render={() => (
						<scn.Field
							data-slot="form-item"
							data-invalid={hasError ? "true" : undefined}
							{...props}
						/>
					)}
				/>
			</ErrorContext.Provider>
		</IdContext.Provider>
	);
}

function FieldLabel({
	className,
	...props
}: React.ComponentProps<typeof scn.FieldLabel>) {
	const { formControlId, hasError } = useErrorContext();

	return (
		<scn.FieldLabel
			data-slot="form-label"
			data-error={hasError ? "true" : undefined}
			htmlFor={formControlId}
			className={className}
			{...props}
		/>
	);
}

function FieldControl(props: React.ComponentProps<typeof Slot.Root>) {
	const { formControlId, formDescriptionId, formMessageId, hasError } =
		useErrorContext();

	const describedBy = [formDescriptionId, hasError ? formMessageId : null]
		.filter(Boolean)
		.join(" ");

	return (
		<Slot.Root
			data-slot="form-control"
			id={formControlId}
			aria-describedby={describedBy || undefined}
			aria-invalid={hasError || undefined}
			{...props}
		/>
	);
}

function FieldDescription({
	className,
	...props
}: React.ComponentProps<typeof scn.FieldDescription>) {
	const { formDescriptionId } = useErrorContext();

	return (
		<scn.FieldDescription
			data-slot="form-description"
			id={formDescriptionId}
			className={className}
			{...props}
		/>
	);
}

function FieldError({
	className,
	...props
}: React.ComponentProps<typeof scn.FieldError>) {
	const { error, formMessageId } = useErrorContext();
	const body = error ?? props.children;

	if (!body) {
		return null;
	}

	return (
		<scn.FieldError
			data-slot="form-message"
			id={formMessageId}
			className={className}
			{...props}
		>
			{body}
		</scn.FieldError>
	);
}

function getErrorMessage(error: unknown): string | null {
	if (!error) return null;
	if (typeof error === "string") return error;
	if (error instanceof Error) return error.message;
	if (typeof error === "object" && error !== null) {
		if ("message" in error && typeof error.message === "string")
			return error.message;
	}
	return null;
}

export {
	Field,
	FieldControl,
	FieldDescription,
	FieldError,
	FieldLabel,
	Form,
	RHFProvider as FormProvider,
	useRHFContext as useFormContext,
};
