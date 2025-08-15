import type { ButtonHTMLAttributes } from 'react'
import { clsx } from 'clsx'

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
	variant?: 'primary' | 'secondary' | 'ghost'
	size?: 'sm' | 'md' | 'lg'
}

export function Button({ className, variant = 'primary', size = 'md', ...props }: Props) {
	const base = 'inline-flex items-center justify-center rounded-full transition focus:outline-none focus:ring-2 focus:ring-offset-2'
	const variants = {
		primary: 'bg-[#FFD700] text-black hover:brightness-95 focus:ring-[#FFD700] focus:ring-offset-white',
		secondary: 'bg-black text-white hover:opacity-90 focus:ring-black focus:ring-offset-white',
		ghost: 'bg-transparent text-black hover:bg-black/5 focus:ring-black focus:ring-offset-white',
	}
	const sizes = {
		sm: 'px-3 py-2 text-sm',
		md: 'px-5 py-3 text-sm',
		lg: 'px-6 py-3 text-base',
	}

	return <button className={clsx(base, variants[variant], sizes[size], className)} {...props} />
}

