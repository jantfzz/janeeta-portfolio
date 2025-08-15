import { useEffect, useRef } from 'react'

export function useInfiniteCarousel(speed = 40, direction: 'ltr' | 'rtl' = 'ltr') {
	const ref = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		const el = ref.current
		if (!el) return
		let x = 0
		let raf = 0
		const step = () => {
			x += (direction === 'ltr' ? 1 : -1) * (speed / 60)
			el.style.transform = `translate3d(${x}px,0,0)`
			if (Math.abs(x) > el.scrollWidth / 2) x = 0
			raf = requestAnimationFrame(step)
		}
		raf = requestAnimationFrame(step)
		return () => cancelAnimationFrame(raf)
	}, [speed, direction])

	return { ref }
}

