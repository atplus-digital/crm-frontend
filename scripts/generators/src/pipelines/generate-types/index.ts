import "./config";
import { executeEntry } from "@scripts/generators/src/lib/cli/execute-entry";
import { createGenerateTypesGenerator } from "./generator/create-generator";

export { config } from "./config";
export { createGenerateTypesGenerator } from "./generator/create-generator";

executeEntry(import.meta.url, createGenerateTypesGenerator);
