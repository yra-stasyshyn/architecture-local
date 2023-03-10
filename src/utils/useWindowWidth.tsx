import { useEffect, useState } from 'react'

export function useWindowWidth() {
	const [windowWidth, setWindowWidth] = useState(0)
	useEffect(() => {
		function handleResize() {
			setWindowWidth(window.innerWidth)
		}

		const interval = setInterval(() => {
			setWindowWidth(window.innerWidth)
		}, 100)

		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
			clearInterval(interval)
		}
	}, [])
	return windowWidth
}
