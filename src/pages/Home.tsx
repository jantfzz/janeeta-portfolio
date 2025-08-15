import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export function Home() {
	return (
		<main>
			<section className="relative min-h-dvh overflow-hidden gradient-animated text-white">
				<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.06),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(255,255,255,0.06),transparent_35%)]" />
				<div className="relative mx-auto max-w-6xl px-6 py-24">
					<motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-sm tracking-widest uppercase text-zinc-200">Bandung, Indonesia</motion.p>
					<motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ staggerChildren: 0.05 }} className="mt-4 text-5xl md:text-6xl lg:text-7xl font-display font-extrabold leading-tight">
						<span className="gold-text">Janeeta</span> Faiza
					</motion.h1>
					<motion.p initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="mt-4 max-w-2xl text-lg md:text-xl text-zinc-100">Bio-Agricultural Engineering Student — Research Enthusiast & Project Leadership Specialist.</motion.p>
					<div className="mt-8 flex gap-4">
						<Link to="/portfolio" className="rounded-full bg-white/10 px-5 py-3 text-white hover:bg-white/20 transition">View Work</Link>
						<Link to="/contact" className="rounded-full bg-[#FFD700] text-black px-5 py-3 hover:brightness-95 transition">Contact</Link>
					</div>
					<div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
						{[
							{ label: 'Research Contributions', value: '25+' },
							{ label: 'Competition Awards', value: '3' },
							{ label: 'Students Mentored', value: '100+' },
							{ label: 'Revenue Growth', value: '60%' },
						].map((stat) => (
							<div key={stat.label} className="glass rounded-xl p-4 text-center text-charcoal">
								<div className="text-3xl font-bold">{stat.value}</div>
								<div className="text-sm opacity-70">{stat.label}</div>
							</div>
						))}
					</div>
				</div>
				<div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs text-white/70">Scroll</div>
			</section>

			<section className="mx-auto max-w-6xl px-6 py-20">
				<h2 className="font-heading text-3xl md:text-4xl text-[#1a1a2e]">About</h2>
				<p className="mt-4 max-w-3xl text-[#2c3e50]/80">Passionate Bio-Agricultural Engineering student with proven expertise in research, project management, and team leadership. Experienced in laboratory research and innovative agricultural solutions.</p>
			</section>
		</main>
	)
}

