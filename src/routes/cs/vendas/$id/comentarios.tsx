// Auth inherited from parent cs_vendas/$id route — do not add requireAuth
// without extracting this tab to a top-level route.
import { VendaComentariosTabPage } from "#/pages/cs/vendas/venda-detail-tabs/comentarios";

export function Component() {
	return <VendaComentariosTabPage />;
}
