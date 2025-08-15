import { InfiniteCarousel } from '../ui/InfiniteCarousel'

export function Skills() {
	return (
		<section className="mx-auto max-w-6xl px-6 py-20">
			<h2 className="font-heading text-3xl md:text-4xl text-[#1a1a2e]">Skills & Technologies</h2>
			<div className="mt-8 space-y-4">
				<InfiniteCarousel items={[ 'Python', 'R', 'C++', 'SQL', 'Power BI', 'SPSS' ]} speed={60} direction="ltr" />
				<InfiniteCarousel items={[ 'GIS', 'Remote Sensing', 'Laboratory Techniques', 'Field Research', 'Data Analysis' ]} speed={50} direction="rtl" />
				<InfiniteCarousel items={[ 'Microscopy', 'Spectroscopy', 'Chromatography', 'Soil Analysis', 'Plant Science', 'Microbiology' ]} speed={55} direction="ltr" />
				<InfiniteCarousel items={[ 'Project Management', 'Team Leadership', 'Research Writing', 'Public Speaking' ]} speed={45} direction="rtl" />
			</div>
		</section>
	)
}

