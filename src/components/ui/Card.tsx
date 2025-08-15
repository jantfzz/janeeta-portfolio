import type { HTMLAttributes } from 'react'
import { clsx } from 'clsx'

export function Card({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
	return (
		<div className={clsx('rounded-2xl border border-zinc-100 bg-white shadow-soft hover:shadow-xl transition-shadow', className)} {...props} />
	)
}

