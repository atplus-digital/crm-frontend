import {
	File as FileIcon,
	FileText as FileTextIcon,
	Image as ImageIcon,
	Paperclip,
} from "lucide-react";
import { InlineErrorAlert } from "#/components/feedback/inline-error-alert";
import { Badge } from "#/components/ui/badge";
import { Button } from "#/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "#/components/ui/card";
import { Skeleton } from "#/components/ui/skeleton";
import { useNegociacaoAnexos } from "#/features/cs/negociacoes/negociacoes-hooks";
import type { AnexosNegociacoes } from "#/generated/nocobase";
import { formatDatePtBR, formatFileSize } from "#/lib/utils";

function getFileTypeBadge(extname: string): {
	label: string;
	variant: "default" | "secondary" | "destructive" | "outline";
} {
	const ext = extname.toLowerCase();
	if (ext === ".pdf") return { label: "PDF", variant: "destructive" };
	if ([".jpg", ".jpeg", ".png", ".gif", ".webp"].includes(ext))
		return { label: ext.replace(".", "").toUpperCase(), variant: "secondary" };
	if ([".doc", ".docx"].includes(ext))
		return { label: ext.replace(".", "").toUpperCase(), variant: "default" };
	return {
		label: ext.replace(".", "").toUpperCase() || "FILE",
		variant: "outline",
	};
}

function getFileIcon(anexo: AnexosNegociacoes) {
	const mimetype = anexo.mimetype.toLowerCase();
	const extname = anexo.extname.toLowerCase();

	if (mimetype.includes("pdf") || extname === ".pdf") {
		return <FileTextIcon className="size-8 text-red-500" />;
	}
	if (
		mimetype.startsWith("image/") ||
		[".jpg", ".jpeg", ".png", ".gif", ".webp"].includes(extname)
	) {
		return <ImageIcon className="size-8 text-green-500" />;
	}
	if (mimetype.includes("word") || [".doc", ".docx"].includes(extname)) {
		return <FileTextIcon className="size-8 text-blue-500" />;
	}
	return <FileIcon className="size-8 text-gray-500" />;
}

export function NegociacaoAnexosTab({
	negociacaoId,
}: {
	negociacaoId: number;
}) {
	const {
		data: response,
		isLoading,
		error,
	} = useNegociacaoAnexos(negociacaoId);
	const anexos = response?.data ?? [];

	if (error) {
		return (
			<InlineErrorAlert>
				Erro ao carregar anexos: {(error as Error).message}
			</InlineErrorAlert>
		);
	}

	if (isLoading) {
		return (
			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{Array.from({ length: 6 }).map((_, i) => (
					// biome-ignore lint/suspicious/noArrayIndexKey: Only used for skeleton loading state
					<Card key={i}>
						<CardHeader>
							<Skeleton className="size-8 mb-2" />
							<Skeleton className="h-5 w-3/4" />
							<Skeleton className="h-4 w-1/2" />
						</CardHeader>
						<CardContent>
							<div className="flex gap-2">
								<Skeleton className="h-8 w-16" />
								<Skeleton className="h-8 w-16" />
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		);
	}

	if (anexos.length === 0) {
		return (
			<div className="flex flex-col items-center justify-center py-12 text-center">
				<Paperclip className="size-12 text-muted-foreground/50 mb-4" />
				<p className="text-lg font-medium text-muted-foreground">
					Nenhum anexo encontrado
				</p>
			</div>
		);
	}

	const handleOpen = (url: string) => {
		window.open(url, "_blank", "noopener,noreferrer");
	};

	const handleDownload = (url: string, filename: string) => {
		const link = document.createElement("a");
		link.href = url;
		link.download = filename;
		link.target = "_blank";
		link.rel = "noopener,noreferrer";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{anexos.map((anexo: AnexosNegociacoes) => {
				const badge = getFileTypeBadge(anexo.extname);
				return (
					<Card key={anexo.id}>
						<CardHeader>
							<div className="flex items-start justify-between gap-2">
								{getFileIcon(anexo)}
								<Badge variant={badge.variant}>{badge.label}</Badge>
							</div>
							<CardTitle className="line-clamp-2 mt-2">
								{anexo.title || anexo.filename}
							</CardTitle>
							<CardDescription>
								{formatFileSize(anexo.size)} • {formatDatePtBR(anexo.createdAt)}
							</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="flex gap-2">
								<Button
									variant="outline"
									size="sm"
									onClick={() => handleOpen(anexo.url)}
									className="flex-1"
								>
									Abrir
								</Button>
								<Button
									variant="default"
									size="sm"
									onClick={() => handleDownload(anexo.url, anexo.filename)}
									className="flex-1"
								>
									Download
								</Button>
							</div>
						</CardContent>
					</Card>
				);
			})}
		</div>
	);
}
