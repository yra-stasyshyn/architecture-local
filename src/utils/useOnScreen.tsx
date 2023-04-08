import React from 'react'
import throttle from 'lodash.throttle'

export default function useOnScreen(
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
		const isTopVisible = rect.top >= 0 && rect.top <= window.innerHeight
		const isBottomVisible =
			rect.bottom >= 0 && rect.bottom <= window.innerHeight
		const isMiddleVisible = rect.top < 0 && rect.bottom > window.innerHeight
		setIsVisible(isTopVisible || isBottomVisible || isMiddleVisible)
	}, throttleMilliseconds)

	React.useEffect(() => {
		document.addEventListener('scroll', onScroll, true)
		return () => document.removeEventListener('scroll', onScroll, true)
	})

	return isVisible
}
