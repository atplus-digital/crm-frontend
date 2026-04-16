import { describe, expect, it } from "vitest";
import { generateIndexFileWithReexports } from "./split-index";

describe("split-index", () => {
	it("re-exports stripped names based on base naming config", () => {
		const content = generateIndexFileWithReexports(["t_empresas", "users"], {
			prefix: "",
			suffix: "Base",
		});

		expect(content).toContain(
			'export type { Empresas, EmpresasRelations, EmpresasRelationKey } from "./empresas";',
		);
		expect(content).toContain(
			'export type { Users, UsersRelations, UsersRelationKey } from "./users";',
		);
	});
});
