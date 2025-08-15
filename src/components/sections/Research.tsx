export function ResearchSection() {
	return (
		<section className="mx-auto max-w-6xl px-6 py-20">
			<h2 className="font-heading text-3xl md:text-4xl text-[#1a1a2e]">Research & Achievements</h2>
			<div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
				{[
					{ title: 'Young Scientist Competition 2021', place: '3rd Runner-up', topic: 'Bioethanol from banana peels' },
					{ title: 'Research Essay Competition 2023', place: 'Silver Medalist', topic: 'Biodiesel from chicken fat catalyst' },
					{ title: 'Agricultural Competition 2024', place: '3rd Winner', topic: 'Biodegradation of petroleum soil' },
				].map((a) => (
					<div key={a.title} className="rounded-2xl border border-zinc-100 bg-white p-6 shadow-soft">
						<div className="text-sm text-[#F59E0B]">{a.place}</div>
						<div className="mt-1 text-lg font-semibold text-[#1a1a2e]">{a.title}</div>
						<div className="mt-2 text-sm text-[#2c3e50]/80">{a.topic}</div>
					</div>
				))}
			</div>
		</section>
	)
}

