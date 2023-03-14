import HeroSection from '@/components/Sections/HeroSection'
import NavBar from '@/components/NavBar'
import React from 'react'

export default function Home() {
	return (
		<>
			<NavBar />
			<HeroSection />
			<div style={{ height: 15000 }}></div>
		</>
	)
}
