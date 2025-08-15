import { useEffect, useRef } from 'react'

export function useParallaxEffect(intensity = 20) {
	const ref = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		const el = ref.current
		if (!el) return
		const onMove = (e: MouseEvent) => {
			const { innerWidth, innerHeight } = window
			const x = (e.clientX / innerWidth - 0.5) * 2
			const y = (e.clientY / innerHeight - 0.5) * 2
			el.style.setProperty('--parallaxX', String(x * intensity))
			el.style.setProperty('--parallaxY', String(y * intensity))
		}
		window.addEventListener('mousemove', onMove)
		return () => window.removeEventListener('mousemove', onMove)
	}, [intensity])

	return { ref }
}

