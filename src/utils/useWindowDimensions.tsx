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
		setWindowDimensions({
			windowWidth: window.innerWidth,
			windowHeight: window.innerHeight
		})
		function handleResize() {
			setWindowDimensions({
				windowWidth: window.innerWidth,
				windowHeight: window.innerHeight
			})
		}
		window.addEventListener('resize', handleResize)
		return () => {
			window.removeEventListener('resize', handleResize)
		}
	}, [])
	return windowDimension
}
