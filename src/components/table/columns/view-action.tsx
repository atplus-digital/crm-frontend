import { ChevronRight } from "lucide-react";
import { useNavigate, useNavigation } from "react-router";
import { Button } from "#/components/ui/button";
import {
	type AppRouteKey,
	buildRoute,
	type RouteParams,
} from "#/routes/route-paths";

type IdOnlyRouteKey = {
	[K in AppRouteKey]: keyof RouteParams<K> extends "id"
		? "id" extends keyof RouteParams<K>
			? K
			: never
		: never;
}[AppRouteKey];

type ViewActionButtonProps = {
	routeKey: IdOnlyRouteKey;
	params: RouteParams<IdOnlyRouteKey>;
	title?: string;
};

export function ViewActionButton({
	routeKey,
	params,
	title = "Ver",
}: ViewActionButtonProps) {
	const navigate = useNavigate();
	const navigation = useNavigation();
	const to = buildRoute(routeKey, params);
	const isNavigating = navigation.state !== "idle";

	return (
		<Button
			type="button"
			variant="ghost"
			size="sm"
			onClick={(e) => {
				e.stopPropagation();
				void navigate(to);
			}}
			disabled={isNavigating}
		>
			<ChevronRight className="size-4" />
			<span>{title}</span>
		</Button>
	);
}
