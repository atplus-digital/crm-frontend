"use client";

import { SlidersHorizontal } from "lucide-react";
import { Label } from "#/components/ui/label";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "#/components/ui/select";
import { Switch } from "#/components/ui/switch";
import type { KanbanSortField } from "./types";
import { KANBAN_SORT_OPTIONS } from "./types";

// ---------------------------------------------------------------------------
// Props
// ---------------------------------------------------------------------------

interface KanbanSortControlsProps {
	sortField: KanbanSortField | undefined;
	currentUser: boolean;
	onSortChange: (value: string) => void;
	onCurrentUserChange: (checked: boolean) => void;
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function KanbanSortControls({
	sortField,
	currentUser,
	onSortChange,
	onCurrentUserChange,
}: KanbanSortControlsProps) {
	return (
		<>
			<div className="flex items-center gap-2">
				<Switch
					id="current-user-toggle"
					checked={currentUser}
					onCheckedChange={onCurrentUserChange}
				/>
				<Label htmlFor="current-user-toggle">Apenas meus itens</Label>
			</div>
			<div className="flex items-center gap-2">
				<SlidersHorizontal className="size-4 text-muted-foreground" />
				<Select
					value={sortField ?? "createdAt_desc"}
					onValueChange={onSortChange}
				>
					<SelectTrigger className="h-8 w-45">
						<SelectValue placeholder="Ordenar por" />
					</SelectTrigger>
					<SelectContent>
						{KANBAN_SORT_OPTIONS.map((option) => (
							<SelectItem key={option.value} value={option.value}>
								{option.label}
							</SelectItem>
						))}
					</SelectContent>
				</Select>
			</div>
		</>
	);
}
