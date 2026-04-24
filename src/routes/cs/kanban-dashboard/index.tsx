import { requireAuth } from "#/features/auth";
import { KanbanDashboardPage } from "#/pages/cs/kanban-dashboard/kanban-dashboard";

export async function loader({ request }: { request: Request }) {
	requireAuth(new URL(request.url).pathname);
}

export function Component() {
	return <KanbanDashboardPage />;
}
