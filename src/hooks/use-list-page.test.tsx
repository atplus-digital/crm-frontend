import { act } from "react";
import { createRoot, type Root } from "react-dom/client";
import { createMemoryRouter, RouterProvider, useLocation } from "react-router";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { useListPage } from "#/hooks/use-list-page";

type TestFilters = {
	status?: string;
	titulo?: string;
};

type HarnessSnapshot = {
	search: string;
	filters: TestFilters;
	handleFilterChange: (filters: TestFilters) => void;
	setFilters: (
		updater: TestFilters | ((previous: TestFilters) => TestFilters),
	) => void;
	handleSort: (field: string) => void;
};

let harnessSnapshot: HarnessSnapshot | null = null;

function HookHarness() {
	const { filters, handleFilterChange, setFilters, handleSort } =
		useListPage<TestFilters>({
			defaultFilters: {},
		});
	const location = useLocation();

	harnessSnapshot = {
		search: location.search,
		filters,
		handleFilterChange,
		setFilters,
		handleSort,
	};

	return null;
}

function getHarnessSnapshot(): HarnessSnapshot {
	if (!harnessSnapshot) {
		throw new Error("Harness snapshot is not available.");
	}

	return harnessSnapshot;
}

function getSearchParams() {
	return new URLSearchParams(getHarnessSnapshot().search);
}

describe("useListPage", () => {
	let container: HTMLDivElement;
	let root: Root;

	beforeEach(() => {
		container = document.createElement("div");
		document.body.appendChild(container);

		const router = createMemoryRouter(
			[
				{
					path: "/",
					element: <HookHarness />,
				},
			],
			{
				initialEntries: ["/"],
			},
		);

		root = createRoot(container);
		act(() => {
			root.render(<RouterProvider router={router} />);
		});
	});

	afterEach(() => {
		act(() => {
			root.unmount();
		});
		container.remove();
		harnessSnapshot = null;
	});

	it("syncs filters to URL when defaultFilters is empty", () => {
		act(() => {
			getHarnessSnapshot().handleFilterChange({
				status: "1",
				titulo: "Cliente teste",
			});
		});

		const params = getSearchParams();

		expect(params.get("filter_status")).toBe("1");
		expect(params.get("filter_titulo")).toBe("Cliente teste");
		expect(params.get("page")).toBe("1");
		expect(getHarnessSnapshot().filters).toEqual({
			status: "1",
			titulo: "Cliente teste",
		});
	});

	it("removes all filter params when clearing filters", () => {
		act(() => {
			getHarnessSnapshot().handleFilterChange({
				status: "1",
				titulo: "Cliente teste",
			});
		});

		act(() => {
			getHarnessSnapshot().handleFilterChange({});
		});

		const params = getSearchParams();

		expect(params.get("filter_status")).toBeNull();
		expect(params.get("filter_titulo")).toBeNull();
		expect(params.get("page")).toBe("1");
		expect(getHarnessSnapshot().filters).toEqual({});
	});

	it("uses URL filters as source for setFilters updater", () => {
		act(() => {
			getHarnessSnapshot().handleFilterChange({
				status: "2",
			});
		});

		act(() => {
			getHarnessSnapshot().setFilters((previous) => ({
				...previous,
				titulo: "Negociacao 42",
			}));
		});

		const params = getSearchParams();

		expect(params.get("filter_status")).toBe("2");
		expect(params.get("filter_titulo")).toBe("Negociacao 42");
		expect(getHarnessSnapshot().filters).toEqual({
			status: "2",
			titulo: "Negociacao 42",
		});
	});

	it("keeps filters when sorting and resets page to first page", () => {
		act(() => {
			getHarnessSnapshot().handleFilterChange({
				status: "3",
			});
		});

		act(() => {
			getHarnessSnapshot().handleSort("createdAt");
		});

		const params = getSearchParams();

		expect(params.get("filter_status")).toBe("3");
		expect(params.get("sort")).toBe("createdAt");
		expect(params.get("page")).toBe("1");
	});

	it("keeps only one sort field and replaces direction", () => {
		act(() => {
			getHarnessSnapshot().handleSort("id");
		});
		expect(getSearchParams().get("sort")).toBe("id");

		act(() => {
			getHarnessSnapshot().handleSort("-id");
		});
		expect(getSearchParams().get("sort")).toBe("-id");

		act(() => {
			getHarnessSnapshot().handleSort("createdAt");
		});
		expect(getSearchParams().get("sort")).toBe("createdAt");
	});
});
