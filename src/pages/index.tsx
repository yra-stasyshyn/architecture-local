import HeroSection from '@/components/Sections/HeroSection'
import NavBar from '@/components/NavBar'
import React from 'react'
import * as S from '../components/Sections/styles'
import LoadingScreen from '@/components/LoadingScreen'
import ProjectsSection from '@/components/Sections/ProjectsSection'
import StatementSection from '@/components/Sections/StatementSection'
import PhilosophySection from '@/components/Sections/PhilosophySection'

export default function Home() {
	return (
		<>
			<LoadingScreen />
			<HeroSection />
			<NavBar />
			<S.SectionsContentWrapper>
				<StatementSection />
				<ProjectsSection />
				<PhilosophySection />
			</S.SectionsContentWrapper>
		</>
	)
}
