import {
	Archive as ArchiveIcon,
	AudioWaveform as AudioIcon,
	File as FileIcon,
	FileText as FileTextIcon,
	Image as ImageIcon,
	Video as VideoIcon,
} from "lucide-react";

export function getFileTypeBadge(extname: string): {
	label: string;
	variant: "default" | "secondary" | "destructive" | "outline";
} {
	const ext = extname.toLowerCase();
	if (ext === ".pdf") return { label: "PDF", variant: "destructive" };
	if ([".jpg", ".jpeg", ".png", ".gif", ".webp"].includes(ext))
		return { label: ext.replace(".", "").toUpperCase(), variant: "secondary" };
	if ([".doc", ".docx"].includes(ext))
		return { label: ext.replace(".", "").toUpperCase(), variant: "default" };
	if ([".xls", ".xlsx"].includes(ext))
		return { label: ext.replace(".", "").toUpperCase(), variant: "secondary" };
	if ([".ppt", ".pptx"].includes(ext))
		return { label: ext.replace(".", "").toUpperCase(), variant: "secondary" };
	if ([".zip", ".rar", ".7z"].includes(ext))
		return { label: ext.replace(".", "").toUpperCase(), variant: "secondary" };
	return {
		label: ext.replace(".", "").toUpperCase() || "FILE",
		variant: "outline",
	};
}

export function getFileIcon(mimetype: string, extname: string) {
	const mime = mimetype.toLowerCase();
	const ext = extname.toLowerCase();

	if (mime.includes("pdf") || ext === ".pdf") {
		return <FileTextIcon className="size-8 text-red-500" />;
	}
	if (
		mime.startsWith("image/") ||
		[".jpg", ".jpeg", ".png", ".gif", ".webp"].includes(ext)
	) {
		return <ImageIcon className="size-8 text-green-500" />;
	}
	if (mime.includes("word") || [".doc", ".docx"].includes(ext)) {
		return <FileTextIcon className="size-8 text-blue-500" />;
	}
	if (
		mime.startsWith("audio/") ||
		[".mp3", ".wav", ".ogg", ".flac"].includes(ext)
	) {
		return <AudioIcon className="size-8 text-purple-500" />;
	}
	if (
		mime.startsWith("video/") ||
		[".mp4", ".avi", ".mov", ".mkv"].includes(ext)
	) {
		return <VideoIcon className="size-8 text-orange-500" />;
	}
	if (
		mime.includes("zip") ||
		mime.includes("compressed") ||
		[".zip", ".rar", ".7z"].includes(ext)
	) {
		return <ArchiveIcon className="size-8 text-yellow-500" />;
	}
	if (mime.includes("excel") || [".xls", ".xlsx"].includes(ext)) {
		return <FileTextIcon className="size-8 text-green-600" />;
	}
	if (mime.includes("powerpoint") || [".ppt", ".pptx"].includes(ext)) {
		return <FileTextIcon className="size-8 text-red-600" />;
	}
	return <FileIcon className="size-8 text-gray-500" />;
}
