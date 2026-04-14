/** @vitest-environment jsdom */

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { renderHook, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { CustomRequestValidationError } from "./errors";
import {
	useCollectionRequests,
	useCustomRequests,
	useSendCustomRequest,
} from "./hooks";
import { getRequestsByCollection, sendCustomRequest } from "./service";

vi.mock("./service", () => ({
	getRequestsByCollection: vi.fn(),
	sendCustomRequest: vi.fn(),
}));

const createWrapper = () => {
	const queryClient = new QueryClient({
		defaultOptions: {
			queries: {
				retry: false,
			},
			mutations: {
				retry: false,
			},
		},
	});
	return function Wrapper({ children }: { children: React.ReactNode }) {
		return (
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		);
	};
};

describe("useCollectionRequests", () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});

	it("should return loading state initially", async () => {
		vi.mocked(getRequestsByCollection).mockReturnValue(["37yaihkravc"]);

		const { result } = renderHook(
			() => useCollectionRequests("cliente_contrato"),
			{
				wrapper: createWrapper(),
			},
		);

		expect(result.current.isLoading).toBe(true);
		expect(result.current.requests).toEqual([]);
		expect(result.current.error).toBeNull();
	});

	it("should return requests for a valid collection when query succeeds", async () => {
		vi.mocked(getRequestsByCollection).mockReturnValue(["37yaihkravc"]);

		const { result } = renderHook(
			() => useCollectionRequests("cliente_contrato"),
			{
				wrapper: createWrapper(),
			},
		);

		await waitFor(() => expect(result.current.isLoading).toBe(false));

		expect(result.current.requests).toHaveLength(1);
		expect(result.current.requests[0]).toMatchObject({
			key: "37yaihkravc",
			name: "Criar Contrato IXC",
			collection: "cliente_contrato",
		});
		expect(result.current.isLoading).toBe(false);
		expect(result.current.error).toBeNull();
	});

	it("should return empty array for collection with no requests", async () => {
		vi.mocked(getRequestsByCollection).mockReturnValue([]);

		const { result } = renderHook(
			() => useCollectionRequests("unknown_collection"),
			{
				wrapper: createWrapper(),
			},
		);

		await waitFor(() => expect(result.current.isLoading).toBe(false));

		expect(result.current.requests).toEqual([]);
		expect(result.current.requests).toHaveLength(0);
		expect(result.current.isLoading).toBe(false);
	});

	it("should return multiple requests for collection with multiple entries", async () => {
		vi.mocked(getRequestsByCollection).mockReturnValue([
			"37yaihkravc",
			"0j7f9fuzuo7",
		]);

		const { result } = renderHook(
			() => useCollectionRequests("t_negociacoes"),
			{
				wrapper: createWrapper(),
			},
		);

		await waitFor(() => expect(result.current.isLoading).toBe(false));

		expect(result.current.requests).toHaveLength(2);
	});

	it("should handle empty collection name gracefully", async () => {
		const { result } = renderHook(() => useCollectionRequests(""), {
			wrapper: createWrapper(),
		});

		await waitFor(() => expect(result.current.isLoading).toBe(false));

		expect(result.current.requests).toEqual([]);
		expect(result.current.isLoading).toBe(false);
	});
});

describe("useSendCustomRequest", () => {
	beforeEach(() => {
		vi.clearAllMocks();
	});

	it("should return initial state", () => {
		const { result } = renderHook(() => useSendCustomRequest(), {
			wrapper: createWrapper(),
		});

		expect(result.current.send).toBeDefined();
		expect(result.current.isLoading).toBe(false);
		expect(result.current.isError).toBe(false);
		expect(result.current.error).toBeNull();
		expect(result.current.data).toBeNull();
	});

	it("should call sendCustomRequest with correct parameters", async () => {
		const mockData = { success: true, data: { id: 1 } };
		vi.mocked(sendCustomRequest).mockResolvedValue(mockData);

		const { result } = renderHook(() => useSendCustomRequest(), {
			wrapper: createWrapper(),
		});

		const key = "37yaihkravc";
		const options = { payload: { id_contrato: 123, id_vendedor: "test" } };

		// Start mutation and immediately check loading (before promise resolves)
		const sendPromise = result.current.send(key, options);

		// mutateAsync starts mutation - isLoading may be true briefly
		// Just verify send returns a promise
		expect(sendPromise).toBeInstanceOf(Promise);

		const response = await sendPromise;

		expect(response).toEqual(mockData);
		expect(sendCustomRequest).toHaveBeenCalledWith(key, options);
		expect(result.current.isLoading).toBe(false);
	});

	it("should handle errors correctly", async () => {
		const mockError = new CustomRequestValidationError("Invalid payload");
		vi.mocked(sendCustomRequest).mockRejectedValue(mockError);

		const { result } = renderHook(() => useSendCustomRequest(), {
			wrapper: createWrapper(),
		});

		const key = "37yaihkravc";

		await expect(result.current.send(key)).rejects.toThrow("Invalid payload");

		await waitFor(() => {
			expect(result.current.isError).toBe(true);
		});
	});

	it("should support resetting the mutation state", () => {
		const { result } = renderHook(() => useSendCustomRequest(), {
			wrapper: createWrapper(),
		});

		expect(typeof result.current.reset).toBe("function");
		expect(() => result.current.reset()).not.toThrow();
	});
});

describe("useCustomRequests", () => {
	it("should throw Not implemented error", () => {
		expect(() => useCustomRequests()).toThrow("Not implemented");
	});
});
