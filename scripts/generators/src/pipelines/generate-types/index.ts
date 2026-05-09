import { executeEntry } from "@scripts/generators/src/lib/cli/runner";
import { createGenerateTypesTasks } from "./pipeline";

export default executeEntry(import.meta.url, createGenerateTypesTasks);
