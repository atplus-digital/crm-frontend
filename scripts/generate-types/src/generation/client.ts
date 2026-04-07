import type {
	NocoBaseCollection,
	NocoBaseCollectionResponse,
	NocoBaseCollectionsListResponse,
	NocoBaseCredentials,
	NocoBaseField,
} from "../@types/nocobase";

function sortByName<T extends { name: string }>(items: T[]): T[] {
	return [...items].sort((a, b) => a.name.localeCompare(b.name));
}

function getErrorBodyPreview(rawBody: string): string {
	return rawBody.replaceAll(/\s+/g, " ").trim().slice(0, 200);
}

export class NocoBaseClient {
	public readonly baseUrl: string;

	public constructor(private readonly credentials: NocoBaseCredentials) {
		this.baseUrl = credentials.baseUrl;
	}

	public async fetchCollections(): Promise<NocoBaseCollection[]> {
		const response = await this.fetchJson<NocoBaseCollectionsListResponse>(
			"collections:list?paginate=false",
		);

		return sortByName(response.data);
	}

	public async fetchCollectionFields(
		collectionName: string,
	): Promise<NocoBaseField[]> {
		const params = new URLSearchParams({
			appends: "fields",
			filterByTk: collectionName,
		});

		const response = await this.fetchJson<NocoBaseCollectionResponse>(
			`collections:get?${params}`,
		);

		return sortByName(response.data.fields);
	}

	private async fetchJson<T>(resourcePath: string): Promise<T> {
		const url = `${this.credentials.baseUrl}/${resourcePath}`;
		const controller = new AbortController();
		const timeout = setTimeout(
			() => controller.abort(),
			this.credentials.timeoutMs,
		);

		try {
			const response = await fetch(url, {
				headers: {
					Authorization: `Bearer ${this.credentials.token}`,
				},
				signal: controller.signal,
			});

			if (!response.ok) {
				const body = await response.text().catch(() => "");
				const bodySuffix = body
					? ` - resposta: ${getErrorBodyPreview(body)}`
					: "";

				throw new Error(
					`HTTP ${response.status} ${response.statusText} em ${url}${bodySuffix}`,
				);
			}

			return (await response.json()) as T;
		} catch (error) {
			if (error instanceof DOMException && error.name === "AbortError") {
				throw new Error(
					`Timeout de ${this.credentials.timeoutMs}ms ao acessar ${url}`,
				);
			}

			throw error;
		} finally {
			clearTimeout(timeout);
		}
	}
}
