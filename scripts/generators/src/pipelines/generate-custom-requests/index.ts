import "./config";
import { executeEntry } from "@scripts/generators/src/lib/cli/execute-entry";
import { createGenerateCustomRequestsGenerator } from "./generator/create-generator";

export { config } from "./config";
export { createGenerateCustomRequestsGenerator } from "./generator/create-generator";

executeEntry(import.meta.url, createGenerateCustomRequestsGenerator);
