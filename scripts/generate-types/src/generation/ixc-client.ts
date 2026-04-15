import type { NocoBaseCredentials } from "@scripts/generate-types/src/@types/nocobase";

interface IxcRecord {
	[key: string]: unknown;
}

interface IxcListResponse {
	data: IxcRecord[];
	meta: {
		count?: number;
		page?: number;
		pageSize?: number;
		total?: number;
		totalPage?: number;
		filterCount?: number;
		[key: string]: unknown;
	};
}

function sortByName<T extends { name: string }>(items: T[]): T[] {
	return [...items].sort((a, b) => a.name.localeCompare(b.name));
}

function getErrorBodyPreview(rawBody: string): string {
	return rawBody.replaceAll(/\s+/g, " ").trim().slice(0, 200);
}

export class IxcClient {
	public readonly baseUrl: string;

	private static readonly IXC_DATASOURCE_HEADER = {
		"X-Data-Source": "d_db_ixcsoft",
	} as const;

	public constructor(private readonly credentials: NocoBaseCredentials) {
		this.baseUrl = credentials.baseUrl;
	}

	public async fetchCollectionSample(
		collectionName: string,
	): Promise<IxcRecord | null> {
		const response = await this.fetchJson<IxcListResponse>(
			`${collectionName}:list?pageSize=1&page=1`,
		);

		if (!response.data || response.data.length === 0) {
			return null;
		}

		return response.data[0];
	}

	public async fetchIxcCollections(
		_collectionNames: string[],
	): Promise<Array<{ name: string }>> {
		return sortByName(_collectionNames.map((name) => ({ name }))) as Array<{
			name: string;
		}>;
	}

	public async fetchCollectionFields(
		collectionName: string,
	): Promise<Array<{ name: string; type: string; interface?: string }>> {
		const sample = await this.fetchCollectionSample(collectionName);

		if (!sample) {
			return [];
		}

		const fields: Array<{ name: string; type: string; interface?: string }> =
			[];

		for (const [key, value] of Object.entries(sample)) {
			let type = "string";
			let interface_: string | undefined;

			if (typeof value === "number") {
				type = "double";
				interface_ = "number";
			} else if (typeof value === "boolean") {
				type = "boolean";
				interface_ = "checkbox";
			} else if (Array.isArray(value)) {
				type = "array";
				interface_ = "multipleSelect";
			} else if (value === null || value === undefined) {
				type = "string";
				interface_ = "input";
			} else if (typeof value === "object") {
				type = "json";
				interface_ = "json";
			} else {
				const datePattern = /^\d{4}-\d{2}-\d{2}/;
				if (datePattern.test(String(value))) {
					type = "date";
					interface_ = "date";
				} else {
					type = "string";
					interface_ = "input";
				}
			}

			fields.push({ name: key, type, interface: interface_ });
		}

		return sortByName(fields);
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
					...IxcClient.IXC_DATASOURCE_HEADER,
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
