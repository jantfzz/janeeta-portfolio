import { useEffect, useRef } from 'react'

export function Particles({ density = 60, color = 'rgba(255,255,255,0.15)' }: { density?: number; color?: string }) {
	const canvasRef = useRef<HTMLCanvasElement | null>(null)

	useEffect(() => {
		const canvas = canvasRef.current!
		const ctx = canvas.getContext('2d')!
		let raf = 0
		let w = (canvas.width = canvas.offsetWidth)
		let h = (canvas.height = canvas.offsetHeight)
		const onResize = () => {
			w = canvas.width = canvas.offsetWidth
			h = canvas.height = canvas.offsetHeight
		}
		const particles = Array.from({ length: density }, () => ({
			x: Math.random() * w,
			y: Math.random() * h,
			r: 1 + Math.random() * 2,
			dx: (Math.random() - 0.5) * 0.4,
			dy: (Math.random() - 0.5) * 0.4,
		}))
		const tick = () => {
			ctx.clearRect(0, 0, w, h)
			for (const p of particles) {
				p.x += p.dx
				p.y += p.dy
				if (p.x < 0 || p.x > w) p.dx *= -1
				if (p.y < 0 || p.y > h) p.dy *= -1
				ctx.beginPath()
				ctx.fillStyle = color
				ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
				ctx.fill()
			}
			raf = requestAnimationFrame(tick)
		}
		tick()
		window.addEventListener('resize', onResize)
		return () => {
			cancelAnimationFrame(raf)
			window.removeEventListener('resize', onResize)
		}
	}, [density, color])

	return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}

