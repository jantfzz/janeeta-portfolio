import { useMagneticHover } from '../../hooks/useMagneticHover'

export function MagneticButton({ children, href }: { children: React.ReactNode; href: string }) {
	const { ref } = useMagneticHover(18)
	return (
		<a href={href} className="inline-block" ref={ref as any}>
			<span className="rounded-full bg-[#FFD700] text-black px-5 py-3 inline-flex items-center justify-center hover:brightness-95 transition will-change-transform">
				{children}
			</span>
		</a>
	)
}

