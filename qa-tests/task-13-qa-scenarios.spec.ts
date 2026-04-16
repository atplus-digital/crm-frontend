import { test } from "@playwright/test";
import { mkdirSync } from "fs";
import * as path from "path";
import { dirname } from "path";

const evidenceDir = ".sisyphus/evidence";

function ensureDir(filePath: string) {
	const dir = dirname(filePath);
	mkdirSync(dir, { recursive: true });
}

async function clickTabAndScreenshot(
	page: any,
	tabName: string,
	filename: string,
) {
	const tabNames: Record<string, string[]> = {
		Móvel: ["Móvel", "Movel"],
		Negociações: ["Negociações", "Negociacoes", "Negociaç"],
		Atendimentos: ["Atendimentos", "Atendimento"],
		Registros: ["Registros", "Registro", "Registro de Atendimento"],
	};

	const searchTerms = tabNames[tabName] || [tabName];

	for (const term of searchTerms) {
		const tab = page
			.locator('[role="tab"], button, a, div[role="tablist"] > *')
			.filter({ hasText: new RegExp(term, "i") })
			.first();

		const isVisible = await tab.isVisible().catch(() => false);
		if (isVisible) {
			await tab.click();
			await page.waitForTimeout(1500);
			const screenshotPath = path.join(evidenceDir, filename);
			await page.screenshot({ path: screenshotPath, fullPage: true });
			console.log(`Screenshot saved: ${screenshotPath}`);
			return true;
		}
	}

	console.log(`Tab '${tabName}' not found`);
	return false;
}

test.describe("Contract Details Page QA", () => {
	test.beforeEach(async ({ page }) => {
		await page.setViewportSize({ width: 1280, height: 720 });
	});

	test("Page load - Contract list", async ({ page }) => {
		const screenshotPath = path.join(evidenceDir, "task-13-page-load.png");
		ensureDir(screenshotPath);

		await page.goto("http://localhost:5173/cs/contratos");
		await page.waitForLoadState("networkidle");
		await page.waitForTimeout(2000);

		await page.screenshot({ path: screenshotPath, fullPage: true });
		console.log(`Screenshot saved: ${screenshotPath}`);
	});

	test("Navigate to contract details and test all tabs", async ({ page }) => {
		ensureDir(path.join(evidenceDir, "placeholder"));

		await page.goto("http://localhost:5173/cs/contratos/23826");
		await page.waitForLoadState("networkidle");
		await page.waitForTimeout(2000);

		// Tab: Detalhes (default)
		const detalhesPath = path.join(evidenceDir, "task-13-detalhes-tab.png");
		await page.screenshot({ path: detalhesPath, fullPage: true });
		console.log(`Screenshot saved: ${detalhesPath}`);

		// Tab: Móvel
		await clickTabAndScreenshot(page, "Móvel", "task-13-movel-tab.png");

		// Tab: Negociações
		await clickTabAndScreenshot(
			page,
			"Negociações",
			"task-13-negociacoes-tab.png",
		);

		// Tab: Atendimentos
		await clickTabAndScreenshot(
			page,
			"Atendimentos",
			"task-13-atendimentos-tab.png",
		);

		// Tab: Registros
		await clickTabAndScreenshot(page, "Registros", "task-13-registros-tab.png");
	});

	test("Mobile responsive - tabs view", async ({ page }) => {
		await page.setViewportSize({ width: 375, height: 667 });

		await page.goto("http://localhost:5173/cs/contratos/23826");
		await page.waitForLoadState("networkidle");
		await page.waitForTimeout(2000);

		const mobilePath = path.join(evidenceDir, "task-13-mobile-tabs.png");
		await page.screenshot({ path: mobilePath, fullPage: true });
		console.log(`Screenshot saved: ${mobilePath}`);
	});

	test("Tablet responsive view", async ({ page }) => {
		await page.setViewportSize({ width: 768, height: 1024 });

		await page.goto("http://localhost:5173/cs/contratos/23826");
		await page.waitForLoadState("networkidle");
		await page.waitForTimeout(2000);

		const tabletPath = path.join(evidenceDir, "task-13-tablet-view.png");
		await page.screenshot({ path: tabletPath, fullPage: true });
		console.log(`Screenshot saved: ${tabletPath}`);
	});

	test("Desktop responsive view", async ({ page }) => {
		await page.setViewportSize({ width: 1024, height: 768 });

		await page.goto("http://localhost:5173/cs/contratos/23826");
		await page.waitForLoadState("networkidle");
		await page.waitForTimeout(2000);

		const desktopPath = path.join(evidenceDir, "task-13-desktop-1024.png");
		await page.screenshot({ path: desktopPath, fullPage: true });
		console.log(`Screenshot saved: ${desktopPath}`);
	});
});
