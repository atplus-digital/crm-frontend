import { EventEmitter } from "node:events";
import * as fs from "node:fs";
import * as path from "node:path";
import { beforeEach, describe, expect, it, vi } from "vitest";

interface SpawnResult {
	exitCode: number;
	stdout?: string;
	stderr?: string;
}

const spawnCalls: Array<{ cmd: string; args: string[] }> = [];
let nextSpawnResult: SpawnResult = { exitCode: 0 };

const spawnMock = vi.fn((cmd: string, args: string[]) => {
	spawnCalls.push({ cmd, args });

	const processEmitter = new EventEmitter() as EventEmitter & {
		stdout: EventEmitter;
		stderr: EventEmitter;
	};
	processEmitter.stdout = new EventEmitter();
	processEmitter.stderr = new EventEmitter();

	queueMicrotask(() => {
		if (nextSpawnResult.stdout) {
			processEmitter.stdout.emit("data", Buffer.from(nextSpawnResult.stdout));
		}
		if (nextSpawnResult.stderr) {
			processEmitter.stderr.emit("data", Buffer.from(nextSpawnResult.stderr));
		}
		processEmitter.emit("close", nextSpawnResult.exitCode);
	});

	return processEmitter;
});

vi.mock("node:child_process", () => ({
	spawn: spawnMock,
	default: {
		spawn: spawnMock,
	},
}));

vi.mock("@scripts/generators/src/lib/logging", () => ({
	defaultLogger: {
		debug: vi.fn(),
		info: vi.fn(),
		warn: vi.fn(),
		error: vi.fn(),
		setLevel: vi.fn(),
		getLevel: vi.fn(() => "info"),
	},
}));

describe("tsc-validator", () => {
	beforeEach(async () => {
		spawnCalls.length = 0;
		nextSpawnResult = { exitCode: 0 };

		const { resetTypeScriptValidationCache } = await import(
			"@scripts/generators/src/lib/validation/tsc-validator"
		);
		resetTypeScriptValidationCache();
	});

	it("usa scripts/generators/tsconfig.generated.json como projeto", async () => {
		const { validateTypeScriptDirectory } = await import(
			"@scripts/generators/src/lib/validation/tsc-validator"
		);

		const result = await validateTypeScriptDirectory("scripts");

		expect(result).toBe(true);
		expect(spawnCalls).toHaveLength(1);
		expect(spawnCalls[0]?.args).toContain("--project");

		const projectArgIndex = spawnCalls[0]?.args.indexOf("--project") ?? -1;
		expect(projectArgIndex).toBeGreaterThanOrEqual(0);

		const scopedTsconfigPath = spawnCalls[0]?.args[projectArgIndex + 1];
		expect(scopedTsconfigPath).toBeDefined();
		expect(scopedTsconfigPath).toContain(
			path.normalize("scripts/generators/.cache/tsc-validator"),
		);
		expect(fs.existsSync(scopedTsconfigPath ?? "")).toBe(true);
	});

	it("retorna false quando o tsc falha mesmo sem erro vinculado ao diretório", async () => {
		const { validateTypeScriptDirectory } = await import(
			"@scripts/generators/src/lib/validation/tsc-validator"
		);

		nextSpawnResult = {
			exitCode: 2,
			stderr: "error TS5083: Cannot read file",
		};

		const result = await validateTypeScriptDirectory("scripts");

		expect(result).toBe(false);
	});

	it("retorna false quando o TypeScript falha em qualquer diagnóstico", async () => {
		const { validateTypeScriptDirectory } = await import(
			"@scripts/generators/src/lib/validation/tsc-validator"
		);

		nextSpawnResult = {
			exitCode: 2,
			stderr:
				"src/generated/types/d_db_ixcsoft/fn-areceber/schemas.ts(11,2): error TS6133: 'x' is declared but its value is never read.",
		};

		const result = await validateTypeScriptDirectory(
			"src/generated/custom-requests",
		);

		expect(result).toBe(false);
	});

	it("reseta o cache entre execuções quando solicitado", async () => {
		const { resetTypeScriptValidationCache, validateTypeScriptDirectory } =
			await import("@scripts/generators/src/lib/validation/tsc-validator");

		await validateTypeScriptDirectory("scripts");
		await validateTypeScriptDirectory("scripts");
		expect(spawnCalls).toHaveLength(1);

		resetTypeScriptValidationCache();
		await validateTypeScriptDirectory("scripts");
		expect(spawnCalls).toHaveLength(2);
	});
});
