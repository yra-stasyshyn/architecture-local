import React from 'react'

export function useIsBellowNthSection(nth_section = 1) {
	const [isBelowHeroSection, setIsBelowHeroSection] = React.useState(false)

	React.useEffect(() => {
		function handleScroll() {
			setIsBelowHeroSection(
				window.scrollY > nth_section * window.innerHeight - 100
			)
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [nth_section])

	return isBelowHeroSection
}
