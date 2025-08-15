import { useCountUp } from '../../hooks/useCountUp'

export function AnimatedCounter({ to, suffix = '' }: { to: number; suffix?: string }) {
	const value = useCountUp(to)
	return <span>{value}{suffix}</span>
}

