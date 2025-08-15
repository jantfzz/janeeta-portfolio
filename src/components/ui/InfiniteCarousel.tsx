import { useInfiniteCarousel } from '../../hooks/useInfiniteCarousel'

export function InfiniteCarousel({ items, speed, direction }: { items: string[]; speed: number; direction: 'ltr' | 'rtl' }) {
	const { ref } = useInfiniteCarousel(speed, direction)
	return (
		<div className="overflow-hidden py-3">
			<div className="flex gap-8 will-change-transform" ref={ref}>
				{[...items, ...items, ...items].map((label, i) => (
					<div key={i} className="px-4 py-2 rounded-full border border-zinc-200 bg-white/70 backdrop-blur text-sm hover:scale-110 hover:shadow transition">
						{label}
					</div>
				))}
			</div>
		</div>
	)
}

