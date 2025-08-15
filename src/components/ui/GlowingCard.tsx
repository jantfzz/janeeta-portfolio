import type { HTMLAttributes } from 'react'
import { clsx } from 'clsx'

export function GlowingCard({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			className={clsx(
				'relative rounded-2xl border border-zinc-100 bg-white p-6 shadow-soft transition',
				'after:pointer-events-none after:absolute after:inset-0 after:rounded-2xl after:opacity-0 after:transition-opacity',
				'hover:shadow-xl hover:after:opacity-100',
				className
			)}
			style={{
				boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
				backgroundImage: 'radial-gradient(120px 80px at var(--mx,50%) var(--my,50%), rgba(255,215,0,0.25), transparent)',
			}}
			onMouseMove={(e) => {
				const el = e.currentTarget as HTMLDivElement
				const rect = el.getBoundingClientRect()
				el.style.setProperty('--mx', `${((e.clientX - rect.left) / rect.width) * 100}%`)
				el.style.setProperty('--my', `${((e.clientY - rect.top) / rect.height) * 100}%`)
			}}
			{...props}
		/>
	)
}

