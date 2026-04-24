// Auth inherited from parent cs_vendas/$id route — do not add requireAuth
// without extracting this tab to a top-level route.
import { VendaItensTabPage } from "#/pages/cs/vendas/venda-detail-tabs/itens";

export function Component() {
	return <VendaItensTabPage />;
}
