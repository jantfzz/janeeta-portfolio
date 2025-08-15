import { Link, NavLink } from 'react-router-dom'

export function Header() {
	return (
		<header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-zinc-100">
			<div className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
				<Link to="/" className="font-display text-xl">
					<span className="gold-text">JF</span>
				</Link>
				<nav className="hidden md:flex items-center gap-6 text-sm">
					<NavLink to="/" className={({ isActive }) => (isActive ? 'text-navy font-semibold' : 'text-charcoal/70 hover:text-navy')}>Home</NavLink>
					<NavLink to="/portfolio" className={({ isActive }) => (isActive ? 'text-navy font-semibold' : 'text-charcoal/70 hover:text-navy')}>Portfolio</NavLink>
					<NavLink to="/research" className={({ isActive }) => (isActive ? 'text-navy font-semibold' : 'text-charcoal/70 hover:text-navy')}>Research</NavLink>
					<NavLink to="/contact" className={({ isActive }) => (isActive ? 'text-navy font-semibold' : 'text-charcoal/70 hover:text-navy')}>Contact</NavLink>
				</nav>
			</div>
		</header>
	)
}

