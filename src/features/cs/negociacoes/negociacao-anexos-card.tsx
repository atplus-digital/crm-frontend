import { Download, Eye } from "lucide-react";
import { Badge } from "#/components/ui/badge";
import { Button } from "#/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "#/components/ui/card";
import { formatDatePtBR, formatFileSize } from "#/lib/utils";
import { getFileIcon, getFileTypeBadge } from "./utils/negociacao-anexos-utils";

interface AttachmentCardProps {
	filename: string;
	title?: string;
	url: string;
	size: number;
	createdAt: string;
	mimetype: string;
	extname?: string;
	onOpen?: (url: string) => void;
	onDownload?: (url: string, filename: string) => void;
	showActions?: boolean;
	className?: string;
}

export function AttachmentCard({
	filename,
	title,
	url,
	size,
	createdAt,
	mimetype,
	extname = "",
	onOpen,
	onDownload,
	showActions = true,
	className,
}: AttachmentCardProps) {
	const badge = getFileTypeBadge(extname);
	const fileTitle = title || filename;

	const defaultOpenHandler = () => {
		window.open(url, "_blank", "noopener,noreferrer");
	};

	const defaultDownloadHandler = () => {
		const link = document.createElement("a");
		link.href = url;
		link.download = filename;
		link.target = "_blank";
		link.rel = "noopener,noreferrer";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	const handleOpen = onOpen || defaultOpenHandler;
	const handleDownload = onDownload || defaultDownloadHandler;

	return (
		<Card className={className}>
			<CardHeader>
				<div className="flex items-start justify-between gap-2">
					{getFileIcon(mimetype, extname)}
					<Badge variant={badge.variant}>{badge.label}</Badge>
				</div>
				<CardTitle className="line-clamp-2 mt-2">{fileTitle}</CardTitle>
				<CardDescription>
					{formatFileSize(size)} • {formatDatePtBR(createdAt)}
				</CardDescription>
			</CardHeader>
			{showActions && (
				<CardContent>
					<div className="flex gap-2">
						<Button
							variant="outline"
							size="sm"
							onClick={() => handleOpen(url)}
							className="flex-1"
						>
							<Eye className="mr-2 size-4" />
							Abrir
						</Button>
						<Button
							variant="default"
							size="sm"
							onClick={() => handleDownload(url, filename)}
							className="flex-1"
						>
							<Download className="mr-2 size-4" />
							Download
						</Button>
					</div>
				</CardContent>
			)}
		</Card>
	);
}
