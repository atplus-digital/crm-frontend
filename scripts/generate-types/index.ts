import "./config";
import { runCli } from "./src/cli/main";

export { config } from "./config";

runCli().catch((error) => {
	console.error("Erro fatal:", error);
	process.exit(1);
});
