import { buildDiffOnly } from "@scripts/generate-types/src/utils/diff";
import { describe, expect, it } from "vitest";

describe("diff - buildDiffOnly", () => {
	it("deve retornar string vazia quando não há mudanças", () => {
		const content = "line1\nline2\nline3";
		const result = buildDiffOnly(content, content);
		expect(result).toBe("");
	});

	it("deve detectar apenas adições", () => {
		const current = "line1\nline2";
		const next = "line1\nline2\nline3\nline4";
		const result = buildDiffOnly(current, next);
		expect(result).toBe("+line3\n+line4");
	});

	it("deve detectar apenas remoções", () => {
		const current = "line1\nline2\nline3\nline4";
		const next = "line1\nline2";
		const result = buildDiffOnly(current, next);
		expect(result).toBe("-line3\n-line4");
	});

	it("deve detectar mudanças intercaladas (adições e remoções)", () => {
		const current = "line1\nline2\nline3";
		const next = "line1\nnewLine\nline3";
		const result = buildDiffOnly(current, next);
		expect(result).toBe("-line2\n+newLine");
	});

	it("deve lidar com múltiplas mudanças intercaladas", () => {
		const current = "a\nb\nc\nd";
		const next = "a\nx\nc\ny";
		const result = buildDiffOnly(current, next);
		expect(result).toBe("-b\n+x\n-d\n+y");
	});

	it("deve lidar com arquivos completamente diferentes", () => {
		const current = "old1\nold2";
		const next = "new1\nnew2";
		const result = buildDiffOnly(current, next);
		expect(result).toBe("-old1\n-old2\n+new1\n+new2");
	});

	it("deve normalizar line endings CRLF para LF", () => {
		const current = "line1\r\nline2\r\nline3";
		const next = "line1\nline2\nline4";
		const result = buildDiffOnly(current, next);
		expect(result).toBe("-line3\n+line4");
	});

	it("deve lidar com strings vazias", () => {
		const result1 = buildDiffOnly("", "line1\nline2");
		// String vazia resulta em um array com uma string vazia após split
		expect(result1).toBe("-\n+line1\n+line2");

		const result2 = buildDiffOnly("line1\nline2", "");
		expect(result2).toBe("-line1\n-line2\n+");

		const result3 = buildDiffOnly("", "");
		expect(result3).toBe("");
	});

	it("deve lidar com linhas duplicadas", () => {
		const current = "line1\nline1\nline2";
		const next = "line1\nline2\nline2";
		const result = buildDiffOnly(current, next);
		// O resultado depende do algoritmo LCS, mas deve detectar mudanças
		expect(result).toContain("-line1");
		expect(result).toContain("+line2");
	});

	it("deve preservar linhas em branco nas diferenças", () => {
		const current = "line1\n\nline3";
		const next = "line1\nline2\n\nline3";
		const result = buildDiffOnly(current, next);
		expect(result).toBe("+line2");
	});
});
