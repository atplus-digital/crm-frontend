// Auth inherited from parent cs_vendas/$id route — do not add requireAuth
// without extracting this tab to a top-level route.
import { VendaAnexosTabPage } from "#/pages/cs/vendas/venda-detail-tabs/anexos";

export function Component() {
	return <VendaAnexosTabPage />;
}
