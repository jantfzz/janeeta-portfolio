import { motion } from 'framer-motion'
import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { Link } from 'react-router-dom'
import { Particles } from '../common/Particles'
import { MagneticButton } from '../ui/MagneticButton'
import { useParallaxEffect } from '../../hooks/useParallaxEffect'
import { useTypewriter } from '../../hooks/useTypewriter'
import { AnimatedCounter } from '../ui/AnimatedCounter'

export function Hero() {
	const { ref } = useParallaxEffect(12)
	const title = useTypewriter('Bio-Agricultural Engineering Student', 30)
	const containerRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		if (!containerRef.current) return
		const tl = gsap.timeline({ defaults: { ease: 'power2.out' } })
		tl.from(containerRef.current.querySelectorAll('[data-hero-stagger]'), {
			y: 20,
			opacity: 0,
			stagger: 0.1,
			duration: 0.6,
		})
		return () => { tl.kill() }
	}, [])
	return (
		<section className="relative min-h-dvh overflow-hidden gradient-animated text-white" ref={ref}>
			<div className="pointer-events-none absolute inset-0" style={{ transform: 'translate3d(calc(var(--parallaxX,0px)*1px), calc(var(--parallaxY,0px)*1px), 0)' }}>
				<div className="absolute -left-20 top-24 size-[380px] rounded-full bg-white/5 blur-3xl" />
				<div className="absolute -right-16 bottom-16 size-[320px] rounded-full bg-[#FFD700]/20 blur-3xl" />
			</div>
			<Particles />
			<div className="relative mx-auto max-w-6xl px-6 py-24" ref={containerRef}>
				<motion.p data-hero-stagger initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-sm tracking-widest uppercase text-zinc-200">Bandung, Indonesia</motion.p>
				<motion.h1 data-hero-stagger initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }} className="mt-4 text-5xl md:text-6xl lg:text-7xl font-display font-extrabold leading-tight">
					<span className="gold-text">Janeeta</span> Faiza
				</motion.h1>
				<motion.p data-hero-stagger initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-4 max-w-2xl text-lg md:text-xl text-zinc-100">
					{title}
				</motion.p>
				<div className="mt-8 flex flex-wrap gap-4" data-hero-stagger>
					<Link to="/portfolio" className="rounded-full bg-white/10 px-5 py-3 text-white hover:bg-white/20 transition">View Work</Link>
					<MagneticButton href="/contact">Contact</MagneticButton>
				</div>
				<div className="mt-12 grid grid-cols-2 md:grid-cols-5 gap-6 text-black">
					<div className="glass rounded-xl p-4 text-center">
						<div className="text-3xl font-bold"><AnimatedCounter to={25} />+</div>
						<div className="text-sm opacity-70">Research Contributions</div>
					</div>
					<div className="glass rounded-xl p-4 text-center">
						<div className="text-3xl font-bold"><AnimatedCounter to={3} /></div>
						<div className="text-sm opacity-70">Competition Awards</div>
					</div>
					<div className="glass rounded-xl p-4 text-center">
						<div className="text-3xl font-bold"><AnimatedCounter to={100} />+</div>
						<div className="text-sm opacity-70">Students Mentored</div>
					</div>
					<div className="glass rounded-xl p-4 text-center">
						<div className="text-3xl font-bold"><AnimatedCounter to={15} />+</div>
						<div className="text-sm opacity-70">Successful Partnerships</div>
					</div>
					<div className="glass rounded-xl p-4 text-center">
						<div className="text-3xl font-bold"><AnimatedCounter to={60} suffix="%" /></div>
						<div className="text-sm opacity-70">Revenue Growth</div>
					</div>
				</div>
			</div>
			<div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-white/70">Scroll</div>
		</section>
	)
}

