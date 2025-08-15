import { useEffect, useRef } from 'react'

export function CursorTrail() {
	const canvasRef = useRef<HTMLCanvasElement | null>(null)

	useEffect(() => {
		const canvas = canvasRef.current!
		const ctx = canvas.getContext('2d')!
		let w = (canvas.width = window.innerWidth)
		let h = (canvas.height = window.innerHeight)
		const onResize = () => {
			w = canvas.width = window.innerWidth
			h = canvas.height = window.innerHeight
		}
		window.addEventListener('resize', onResize)

		const trail: { x: number; y: number; alpha: number }[] = []
		const onMove = (e: MouseEvent) => {
			trail.push({ x: e.clientX, y: e.clientY, alpha: 1 })
			if (trail.length > 40) trail.shift()
		}
		window.addEventListener('mousemove', onMove)

		let raf = 0
		const loop = () => {
			ctx.clearRect(0, 0, w, h)
			for (let i = 0; i < trail.length; i++) {
				const t = trail[i]
				ctx.beginPath()
				ctx.fillStyle = `rgba(255,215,0,${t.alpha * 0.6})`
				ctx.arc(t.x, t.y, 6 * (i / trail.length + 0.3), 0, Math.PI * 2)
				ctx.fill()
				t.alpha *= 0.95
			}
			raf = requestAnimationFrame(loop)
		}
		raf = requestAnimationFrame(loop)
		return () => {
			cancelAnimationFrame(raf)
			window.removeEventListener('resize', onResize)
			window.removeEventListener('mousemove', onMove)
		}
	}, [])

	return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-50" />
}

