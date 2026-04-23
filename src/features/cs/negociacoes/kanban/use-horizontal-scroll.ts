import { useEffect, useRef } from "react";

export function useHorizontalScroll() {
	const scrollContainerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const container = scrollContainerRef.current;
		if (!container) return;

		const handleWheel = (e: WheelEvent) => {
			const canScrollLeft = container.scrollLeft > 0;
			const canScrollRight =
				container.scrollLeft < container.scrollWidth - container.clientWidth;

			const isHorizontalScroll = Math.abs(e.deltaX) > Math.abs(e.deltaY);
			if (isHorizontalScroll || canScrollLeft || canScrollRight) {
				e.preventDefault();
				container.scrollLeft += e.deltaY + e.deltaX;
			}
		};

		container.addEventListener("wheel", handleWheel, { passive: false });
		return () => container.removeEventListener("wheel", handleWheel);
	}, []);

	return scrollContainerRef;
}
