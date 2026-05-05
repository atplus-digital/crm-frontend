import { EventEmitter } from "node:events";
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
	logger: {
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
		expect(spawnCalls[0]?.args).toContain(
			path.resolve(process.cwd(), "scripts/generators/tsconfig.generated.json"),
		);
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

	it("ignora erro de TypeScript quando o diagnóstico é apenas de outro diretório", async () => {
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

		expect(result).toBe(true);
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
