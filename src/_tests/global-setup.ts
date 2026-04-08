import fs from "node:fs";
import path from "node:path";

export default function setup() {
	// Verifica se .env.local existe e copia de .env.example se não existir
	const envLocalPath = path.resolve(process.cwd(), ".env.local");

	if (!fs.existsSync(envLocalPath)) {
		const envExamplePath = path.resolve(process.cwd(), ".env.example");

		if (fs.existsSync(envExamplePath)) {
			fs.copyFileSync(envExamplePath, envLocalPath);
			console.log("✅ Arquivo .env.local criado a partir do .env.example");
		} else {
			console.warn(
				"⚠️  Arquivo .env.example não encontrado, não foi possível criar .env.local",
			);
		}
	}

	const schemaKeys = extractSchemaKeys();
	const mockKeys = extractMockKeys();

	if (schemaKeys.length === 0) {
		throw new Error(
			"❌ Global setup: nenhuma chave encontrada no esquema de env (src/env.ts). Verifique se o arquivo existe e usa createEnv.",
		);
	}

	const missing = schemaKeys.filter((k) => !mockKeys.includes(k));
	if (missing.length > 0) {
		throw new Error(
			`❌ Global setup: falta(m) a(s) chave(s) no mock de env (mock-env.ts): ${missing.join(", ")}`,
		);
	}

	const extra = mockKeys.filter((k) => !schemaKeys.includes(k));
	if (extra.length > 0) {
		console.warn(
			`\x1b[33m\x1b[1mGlobal setup: o mock contém chaves extras não presentes no esquema: ${extra.join(", ")}\x1b[0m`,
		);
	}

	console.log(
		`✅ Global setup: ${mockKeys.length}/${schemaKeys.length} variáveis de ambiente mockadas corretamente.`,
	);
}

function extractSchemaKeys(): string[] {
	const srcEnvPath = path.resolve(__dirname, "../env.ts");
	const src = fs.readFileSync(srcEnvPath, "utf8");

	const keys: string[] = [];

	// Procura blocos `server:` ou `client:` dentro do `createEnv`
	const blockRegex = /^\s*(?:server|client):\s*\{([\s\S]*?)\n\s*\},?/gm;
	let blockMatch: RegExpExecArray | null = blockRegex.exec(src);

	while (blockMatch !== null) {
		const body = blockMatch[1] ?? "";
		const keyRegex = /^\s*([A-Z0-9_]+)\s*:/gm;
		let keyMatch: RegExpExecArray | null = keyRegex.exec(body);
		while (keyMatch !== null) {
			const key = keyMatch[1];
			if (key && !keys.includes(key)) {
				keys.push(key);
			}
			keyMatch = keyRegex.exec(body);
		}
		blockMatch = blockRegex.exec(src);
	}

	return keys;
}

function extractMockKeys(): string[] {
	const setupPath = path.resolve(__dirname, "./mock-env.ts");
	const src = fs.readFileSync(setupPath, "utf8");

	const keys: string[] = [];

	// Procura o objeto dentro de `vi.mock("#/env", () => ({ ... }))`
	const factoryRegex =
		/vi\.mock\([^)]*,\s*\(\)\s*=>\s*\(\{([\s\S]*?)\n\s*\}\)\s*\)/m;
	const factoryMatch = factoryRegex.exec(src);

	if (factoryMatch?.[1]) {
		const body = factoryMatch[1];

		// Encontra o objeto dentro de `env: { ... }`
		const envRegex = /env:\s*\{([\s\S]*?)\n\s*\}/m;
		const envMatch = envRegex.exec(body);

		if (envMatch?.[1]) {
			const keyRegex = /^\s*([A-Z0-9_]+)\s*:/gm;
			let keyMatch: RegExpExecArray | null = keyRegex.exec(envMatch[1]);
			while (keyMatch !== null) {
				const key = keyMatch[1];
				if (key && !keys.includes(key)) {
					keys.push(key);
				}
				keyMatch = keyRegex.exec(envMatch[1]);
			}
		}
	}

	return keys;
}
