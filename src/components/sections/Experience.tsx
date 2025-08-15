import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import gsap from 'gsap'

type ExperienceItem = {
	role: string
	org: string
	period: string
	metrics: string[]
}

const ITEMS: ExperienceItem[] = [
	{ role: 'Agricultural Microbiology Lab Assistant', org: 'ITB', period: 'Feb 2025 – Jun 2025', metrics: ['12 experiments', '5+ papers', 'Data analysis'] },
	{ role: 'Plant & Livestock Sciences Lab Assistant', org: 'ITB', period: 'Aug 2024 – Dec 2024', metrics: ['10 experiments', 'Safety 100%', 'Protocol dev'] },
	{ role: 'Pancasila Assistant Lecturer', org: 'ITB', period: 'Jun 2024 – Dec 2024', metrics: ['100+ mentored', 'TAPAK LIMAN', '20+ impacted'] },
	{ role: 'Treasurer & Head of Fundraising', org: 'KPA-ITB', period: 'Jul 2024 – Aug 2025', metrics: ['+60% revenue', '10+ managed', '15% under budget'] },
]

export function Experience() {
	const scope = useRef<HTMLDivElement | null>(null)
	useEffect(() => {
		if (!scope.current) return
		const els = scope.current.querySelectorAll('[data-exp-card]')
		gsap.from(els, { opacity: 0, y: 24, duration: 0.6, stagger: 0.12, ease: 'power2.out' })
		return () => { gsap.killTweensOf(els) }
	}, [])
	return (
		<section className="mx-auto max-w-6xl px-6 py-20" ref={scope}>
			<h2 className="font-heading text-3xl md:text-4xl text-[#1a1a2e]">Experience</h2>
			<div className="mt-8 grid gap-6 sm:grid-cols-2">
				{ITEMS.map((item) => (
					<TiltCard key={item.role}>
						<motion.div data-exp-card initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-soft">
							<div className="text-sm text-[#4a90e2]">{item.org} • {item.period}</div>
							<div className="mt-1 text-lg font-semibold text-[#1a1a2e]">{item.role}</div>
							<ul className="mt-3 text-sm text-[#2c3e50]/80 list-disc pl-5 space-y-1">
								{item.metrics.map(m => <li key={m}>{m}</li>)}
							</ul>
						</motion.div>
					</TiltCard>
				))}
			</div>
		</section>
	)
}

function TiltCard({ children }: { children: React.ReactNode }) {
	const ref = useRef<HTMLDivElement | null>(null)
	return (
		<div
			ref={ref}
			className="[perspective:1000px]"
			onMouseMove={(e) => {
				const el = ref.current!
				const rect = el.getBoundingClientRect()
				const dx = (e.clientX - rect.left) / rect.width - 0.5
				const dy = (e.clientY - rect.top) / rect.height - 0.5
				el.style.setProperty('--rx', String(-dy * 8))
				el.style.setProperty('--ry', String(dx * 12))
			}}
			onMouseLeave={() => {
				const el = ref.current!
				el.style.setProperty('--rx', '0')
				el.style.setProperty('--ry', '0')
			}}
		>
			<div className="transition-transform will-change-transform" style={{ transform: 'rotateX(calc(var(--rx)*1deg)) rotateY(calc(var(--ry)*1deg)) translateZ(0)' }}>
				{children}
			</div>
		</div>
	)
}

