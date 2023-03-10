import { useEffect, useState } from 'react'

export default function useScrollPosition() {
	const [scrollPosition, setScrollPosition] = useState(0)

	useEffect(() => {
		// function to run on scroll
		const updateScrollPosition = () => {
			const currentScrollPosition = window.scrollY
			if (scrollPosition != currentScrollPosition) {
				setScrollPosition(currentScrollPosition)
			}
		}
		window.addEventListener('scroll', updateScrollPosition) // add event listener
		return () => {
			window.removeEventListener('scroll', updateScrollPosition) // clean up
		}
	}, [scrollPosition]) // run when scroll is activated

	return scrollPosition
}
