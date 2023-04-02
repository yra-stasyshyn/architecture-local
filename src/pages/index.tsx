import HeroSection from '@/components/Sections/HeroSection'
import NavBar from '@/components/NavBar'
import React from 'react'
import * as S from '../components/Sections/styles'
import LoadingScreen from '@/components/LoadingScreen'
import ProjectsSection from '@/components/Sections/ProjectsSection'
import StatementSection from '@/components/Sections/StatementSection'
import PhilosophySection from '@/components/Sections/PhilosophySection'
import TeamSection from '@/components/Sections/TeamSection'
import OurJobSection from '@/components/Sections/OurJobSection'
import Footer from '@/components/Footer'

export default function Home() {
	const projectsRef = React.useRef(null)
	const aboutUsRef = React.useRef(null)

	return (
		<>
			<LoadingScreen />
			<HeroSection />
			<NavBar projectsRef={projectsRef} aboutUsRef={aboutUsRef} />
			<S.SectionsContentWrapper>
				<StatementSection />
				<ProjectsSection ref={projectsRef} />
				<PhilosophySection ref={aboutUsRef} />
				<TeamSection />
				<OurJobSection />
				<Footer />
			</S.SectionsContentWrapper>
		</>
	)
}
