import React from 'react'

export function useIsBellowHeroSection() {
	const [isBelowHeroSection, setIsBelowHeroSection] = React.useState(false)

	React.useEffect(() => {
		function handleScroll() {
			setIsBelowHeroSection(window.scrollY > window.innerHeight - 100)
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	return isBelowHeroSection
}
