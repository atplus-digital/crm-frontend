// Auth inherited from parent cs_vendas/$id route — do not add requireAuth
// without extracting this tab to a top-level route.
import { VendaDetalhesTabPage } from "#/pages/cs/vendas/venda-detail-tabs/detalhes";

export function Component() {
	return <VendaDetalhesTabPage />;
}
