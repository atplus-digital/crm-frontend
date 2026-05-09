import { executeEntry } from "../../lib/cli/runner";
import { createCustomRequestsTasks } from "./pipeline";

executeEntry(import.meta.url, createCustomRequestsTasks);

export { createCustomRequestsTasks } from "./pipeline";
