import { useMutation } from "@tanstack/react-query";
import type { CustomRequestRegistryKey } from "#/generated/custom-requests/generated-registry";
import { sendRequest } from "../utils/service";

export function useCustomRequest() {
	return useMutation({
		mutationFn: ({
			key,
			payload,
			signal,
		}: {
			key: CustomRequestRegistryKey;
			payload: unknown;
			signal?: AbortSignal;
		}) => sendRequest(key, { payload, signal }),
	});
}
