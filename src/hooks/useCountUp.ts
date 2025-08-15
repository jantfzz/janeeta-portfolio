import { useEffect, useState } from 'react'

export function useCountUp(target: number, durationMs = 1200) {
	const [value, setValue] = useState(0)
	useEffect(() => {
		let raf = 0
		const start = performance.now()
		const tick = (now: number) => {
			const progress = Math.min(1, (now - start) / durationMs)
			setValue(Math.round(target * progress))
			if (progress < 1) raf = requestAnimationFrame(tick)
		}
		requestAnimationFrame(tick)
		return () => cancelAnimationFrame(raf)
	}, [target, durationMs])
	return value
}

