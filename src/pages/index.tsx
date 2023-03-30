import HeroSection from '@/components/Sections/HeroSection'
import NavBar from '@/components/NavBar'
import React from 'react'
import * as S from '../components/Sections/styles'
import LoadingScreen from '@/components/LoadingScreen'
import Footer from '@/components/Footer'
import ProjectsSection from '@/components/Sections/ProjectsSection'
import StatementSection from '@/components/Sections/StatementSection'

export default function Home() {
	return (
		<>
			<LoadingScreen />
			<HeroSection />
			<NavBar />
			<S.SectionsContentWrapper>
				<StatementSection />
				<ProjectsSection />
				<Footer />
			</S.SectionsContentWrapper>
		</>
	)
}
