import { useEffect, useState } from 'react'

export function useWindowDimensions(): {
	windowWidth: number
	windowHeight: number
} {
	const [windowDimension, setWindowDimensions] = useState({
		windowWidth: 0,
		windowHeight: 0
	})
	useEffect(() => {
		function handleResize() {
			setWindowDimensions({
				windowWidth: window.innerWidth,
				windowHeight: window.innerHeight
			})
		}

		const windowDimensionsInterval = setInterval(() => {
			setWindowDimensions({
				windowWidth: window.innerWidth,
				windowHeight: window.innerHeight
			})
		}, 100)

		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
			clearInterval(windowDimensionsInterval)
		}
	}, [])
	return windowDimension
}
