import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { CursorTrail } from '../common/CursorTrail'

export function Layout() {
	return (
		<div className="min-h-dvh flex flex-col">
			<CursorTrail />
			<Header />
			<div className="flex-1">
				<Outlet />
			</div>
			<Footer />
		</div>
	)
}

