import { Hero } from '../components/sections/Hero'
import { Skills } from '../components/sections/Skills'
import { Experience } from '../components/sections/Experience'
import { ResearchSection } from '../components/sections/Research'

export function Home() {
	return (
		<main>
			<Hero />
			<Skills />
			<Experience />
			<ResearchSection />
		</main>
	)
}

