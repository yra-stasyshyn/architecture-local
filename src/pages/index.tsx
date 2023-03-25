import HeroSection from '@/components/Sections/HeroSection'
import NavBar from '@/components/NavBar'
import React from 'react'
import * as S from '../components/Sections/styles'
import LoadingScreen from '@/components/LoadingScreen'

export default function Home() {
	return (
		<>
			<LoadingScreen />
			<HeroSection />
			<NavBar />
			<S.SectionsContentWrapper></S.SectionsContentWrapper>
		</>
	)
}
