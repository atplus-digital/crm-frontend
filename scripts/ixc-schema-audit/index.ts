/**
 * IXC Schema Audit
 * Compares IXC schemas (Wiki API + relations map) with NocoBase generated types
 */

import { CONFIG } from "./config";

console.log(`IXC Schema Audit - Config loaded`);
console.log(`Output dir: ${CONFIG.OUTPUT_DIR}`);
console.log(`Cache dir: ${CONFIG.CACHE_DIR}`);
