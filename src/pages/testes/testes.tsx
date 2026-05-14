import { PageLayout } from "#/components/layouts/page-layout";
import { BADGE_COLORS, Badge } from "#/components/ui/badge";
import { isDev } from "#/env";
import { PopupRequest } from "#/features/custom-requests";

function BadgeShowcase() {
	return (
		<div className="space-y-6">
			<div>
				<h3 className="text-sm font-semibold text-muted-foreground mb-3">
					Solid (padrão)
				</h3>
				<div className="flex flex-wrap gap-2">
					{BADGE_COLORS.map((color) => (
						<Badge key={color} color={color}>
							{color}
						</Badge>
					))}
				</div>
			</div>

			<div>
				<h3 className="text-sm font-semibold text-muted-foreground mb-3">
					Soft
				</h3>
				<div className="flex flex-wrap gap-2">
					{BADGE_COLORS.map((color) => (
						<Badge key={color} variant="soft" color={color}>
							{color}
						</Badge>
					))}
				</div>
			</div>

			<div>
				<h3 className="text-sm font-semibold text-muted-foreground mb-3">
					Variants originais
				</h3>
				<div className="flex flex-wrap gap-2">
					<Badge variant="default">default</Badge>
					<Badge variant="secondary">secondary</Badge>
					<Badge variant="destructive">destructive</Badge>
					<Badge variant="outline">outline</Badge>
					<Badge variant="ghost">ghost</Badge>
					<Badge variant="soft">soft</Badge>
				</div>
			</div>
		</div>
	);
}

export function TestesPage() {
	if (!isDev) {
		return null;
	}

	return (
		<PageLayout title="Testes">
			<div className="space-y-6">
				<BadgeShowcase />

				<div className="flex gap-4">
					<PopupRequest
						identifier="log-test"
						payload={{ $nSelectedRecord: [] }}
					>
						Log Test
					</PopupRequest>
					<PopupRequest
						autoCloseOnSuccess={true}
						identifier="log-test"
						confirm={false}
						payload={{ $nSelectedRecord: [] }}
					>
						Log Test
					</PopupRequest>
				</div>
			</div>
		</PageLayout>
	);
}
