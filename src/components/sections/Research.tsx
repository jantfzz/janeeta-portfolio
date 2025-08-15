import { useState } from 'react'
import { Modal } from '../ui/Modal'

const ITEMS = [
	{ title: 'Young Scientist Competition 2021', place: '3rd Runner-up', topic: 'Bioethanol from banana peels', abstract: 'Innovation in sustainable energy solutions.' },
	{ title: 'Research Essay Competition 2023', place: 'Silver Medalist', topic: 'Biodiesel from chicken fat catalyst', abstract: 'Climate change mitigation focus.' },
	{ title: 'Agricultural Competition 2024', place: '3rd Winner', topic: 'Biodegradation of petroleum soil', abstract: 'Environmental restoration technology.' },
]

export function ResearchSection() {
	const [active, setActive] = useState<number | null>(null)
	return (
		<section className="mx-auto max-w-6xl px-6 py-20">
			<h2 className="font-heading text-3xl md:text-4xl text-[#1a1a2e]">Research & Achievements</h2>
			<div className="mt-8 columns-1 sm:columns-2 lg:columns-3 gap-6 [column-fill:_balance]
				[&>div]:mb-6">
				{ITEMS.map((a, idx) => (
					<div key={a.title} className="break-inside-avoid rounded-2xl border border-zinc-100 bg-white p-6 shadow-soft hover:shadow-xl transition cursor-pointer" onClick={() => setActive(idx)}>
						<div className="text-sm text-[#F59E0B]">{a.place}</div>
						<div className="mt-1 text-lg font-semibold text-[#1a1a2e]">{a.title}</div>
						<div className="mt-2 text-sm text-[#2c3e50]/80">{a.topic}</div>
					</div>
				))}
			</div>
			<Modal open={active !== null} onClose={() => setActive(null)}>
				{active !== null && (
					<div>
						<div className="text-xs text-[#F59E0B]">{ITEMS[active].place}</div>
						<h3 className="mt-1 text-2xl font-semibold text-[#1a1a2e]">{ITEMS[active].title}</h3>
						<p className="mt-2 text-sm text-[#2c3e50]/80">{ITEMS[active].abstract}</p>
					</div>
				)}
			</Modal>
		</section>
	)
}

