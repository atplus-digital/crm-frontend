import type { ReactNode } from "react";
import { useCan, useHasSnippet } from "../hooks";

interface CanProps {
	action?: string;
	snippet?: string;
	fallback?: ReactNode;
	children: ReactNode;
}

interface CanActionProps {
	action: string;
	fallback?: ReactNode;
	children: ReactNode;
}

interface CanBothProps {
	action: string;
	snippet: string;
	fallback?: ReactNode;
	children: ReactNode;
}

interface CanSnippetProps {
	snippet: string;
	fallback?: ReactNode;
	children: ReactNode;
}

function CanAction({ action, fallback, children }: CanActionProps) {
	const hasPermission = useCan(action);
	if (!hasPermission) return fallback;
	return children;
}

function CanSnippet({ snippet, fallback, children }: CanSnippetProps) {
	const hasPermission = useHasSnippet(snippet);
	if (!hasPermission) return fallback;
	return children;
}

function CanBoth({ action, snippet, fallback, children }: CanBothProps) {
	const hasAction = useCan(action);
	const hasSnippet = useHasSnippet(snippet);
	if (!hasAction || !hasSnippet) return fallback;
	return children;
}

export function Can({
	action,
	snippet,
	fallback = null,
	children,
}: CanProps): ReactNode {
	if (action !== undefined && snippet !== undefined) {
		return (
			<CanBoth action={action} snippet={snippet} fallback={fallback}>
				{children}
			</CanBoth>
		);
	}

	if (action !== undefined) {
		return (
			<CanAction action={action} fallback={fallback}>
				{children}
			</CanAction>
		);
	}

	if (snippet !== undefined) {
		return (
			<CanSnippet snippet={snippet} fallback={fallback}>
				{children}
			</CanSnippet>
		);
	}

	return children;
}
