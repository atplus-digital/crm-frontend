import type { RouteObject } from "react-router";
import { contratosRoutes } from "./contratos/routes";
import { kanbanDashboardRoutes } from "./kanban-dashboard/routes";
import { negociacoesRoutes } from "./negociacoes/routes";
import { pessoasRoutes } from "./pessoas/routes";
import { suspensaoDeContratoRoutes } from "./suspensao-de-contrato/routes";
import { trocaDeEnderecoRoutes } from "./troca-de-endereco/routes";
import { trocaDeTitularidadeRoutes } from "./troca-de-titularidade/routes";
import { vendasRoutes } from "./vendas/routes";

export const csRoutes = [
	...kanbanDashboardRoutes,
	...pessoasRoutes,
	...negociacoesRoutes,
	...contratosRoutes,
	...trocaDeTitularidadeRoutes,
	...trocaDeEnderecoRoutes,
	...suspensaoDeContratoRoutes,
	...vendasRoutes,
] satisfies RouteObject[];
