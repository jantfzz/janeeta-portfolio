import { useEffect, useState } from 'react'

export function useTypewriter(text: string, speedMs = 50, loop = false) {
	const [display, setDisplay] = useState('')
	useEffect(() => {
		let i = 0
		let raf = 0
		const step = () => {
			setDisplay(text.slice(0, i))
			i += 1
			if (i <= text.length) {
				raf = window.setTimeout(step, speedMs) as unknown as number
			} else if (loop) {
				i = 0
				raf = window.setTimeout(step, 1200) as unknown as number
			}
		}
		step()
		return () => window.clearTimeout(raf)
	}, [text, speedMs, loop])
	return display
}

