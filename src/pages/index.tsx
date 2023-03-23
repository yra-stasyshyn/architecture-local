import HeroSection from '@/components/Sections/HeroSection'
import NavBar from '@/components/NavBar'
import React from 'react'
import * as S from '../components/Sections/styles'

export default function Home() {
	return (
		<>
			<NavBar />
			<HeroSection />
			<S.SectionsContentWrapper></S.SectionsContentWrapper>
		</>
	)
}
