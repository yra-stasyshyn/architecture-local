import HeroSection from '@/components/Sections/HeroSection'
import NavBar from '@/components/NavBar'
import React from 'react'
import * as S from '../components/Sections/styles'
import LoadingScreen from '@/components/LoadingScreen'
import ProjectsSection from '@/components/Sections/ProjectsSection'
import StatementSection from '@/components/Sections/StatementSection'
import Footer from '@/components/Footer'
import ContactUsSection from 'src/components/Sections/ContactUsSection'
import ResearchSection from '@/components/Sections/ResearchSection'
import AboutUsSection from '@/components/Sections/AboutUsSection'
import useBeforeRefresh from '@/utils/useBeforeRefresh'
import { scrollToStart } from '@/utils/scrollToRef'

export default function Home() {
	useBeforeRefresh(scrollToStart)
	const projectsRef = React.useRef(null)
	const aboutUsRef = React.useRef(null)
	const contactUsRef = React.useRef(null)
	const researchRef = React.useRef(null)
	const heroSectionRef = React.useRef(null)
	return (
		<>
			<LoadingScreen toWaitLoad={heroSectionRef} />
			<HeroSection ref={heroSectionRef} />
			<NavBar
				projectsRef={projectsRef}
				aboutUsRef={aboutUsRef}
				contactUsRef={contactUsRef}
				researchRef={researchRef}
			/>
			<S.SectionsContentWrapper>
				<StatementSection />
				<ProjectsSection ref={projectsRef} />
				<ResearchSection ref={researchRef} />
				<AboutUsSection ref={aboutUsRef} />
				<ContactUsSection ref={contactUsRef} />
				<Footer />
			</S.SectionsContentWrapper>
		</>
	)
}
