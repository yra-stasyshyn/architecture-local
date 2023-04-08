import React from 'react'
import throttle from 'lodash.throttle'

export default function useOnMiddleOfScreen(
	ref: React.RefObject<any>,
	throttleMilliseconds = 100
): boolean {
	const [isVisible, setIsVisible] = React.useState(false)

	const onScroll = throttle(() => {
		if (!ref.current) {
			setIsVisible(false)
			return
		}
		const rect = ref.current.getBoundingClientRect()
		const windowHeight = window.innerHeight
		const linePosition = windowHeight / 4
		const isLineBelowTop = linePosition >= rect.top
		const isLineAboveBottom = linePosition <= rect.bottom
		setIsVisible(isLineBelowTop && isLineAboveBottom)
	}, throttleMilliseconds)

	React.useEffect(() => {
		document.addEventListener('scroll', onScroll, true)
		return () => document.removeEventListener('scroll', onScroll, true)
	})

	return isVisible
}
