import "./config";
import { runGenerateTypes } from "./src/generate-types";

export { config } from "./config";

runGenerateTypes().catch((error) => {
	console.error("Erro fatal:", error);
	process.exit(1);
});
