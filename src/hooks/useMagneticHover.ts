import { useEffect, useRef } from 'react'

export function useMagneticHover(strength = 20) {
	const ref = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		const el = ref.current
		if (!el) return
		const onMove = (e: MouseEvent) => {
			const rect = el.getBoundingClientRect()
			const cx = rect.left + rect.width / 2
			const cy = rect.top + rect.height / 2
			const dx = (e.clientX - cx) / rect.width
			const dy = (e.clientY - cy) / rect.height
			el.style.transform = `translate3d(${dx * strength}px, ${dy * strength}px, 0)`
		}
		const onLeave = () => {
			el.style.transform = 'translate3d(0,0,0)'
		}
		el.addEventListener('mousemove', onMove)
		el.addEventListener('mouseleave', onLeave)
		return () => {
			el.removeEventListener('mousemove', onMove)
			el.removeEventListener('mouseleave', onLeave)
		}
	}, [strength])

	return { ref }
}

