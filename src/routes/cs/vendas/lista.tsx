import { Navigate } from "react-router";
import { routePaths } from "#/routes/route-paths";

export function Component() {
	return <Navigate to={routePaths.cs_vendas} replace />;
}
