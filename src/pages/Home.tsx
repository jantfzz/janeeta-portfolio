import { Hero } from '../components/sections/Hero'
import { Skills } from '../components/sections/Skills'
import { Experience } from '../components/sections/Experience'
import { ResearchSection } from '../components/sections/Research'
import { SEOHead } from '../components/common/SEOHead'

export function Home() {
	return (
		<main>
			<SEOHead title="Janeeta Faiza — Portfolio" description="Bio-Agricultural Engineering student. Research enthusiast & project leadership specialist." />
			<Hero />
			<Skills />
			<Experience />
			<ResearchSection />
		</main>
	)
}

