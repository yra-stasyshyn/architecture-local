import React from 'react'
import throttle from 'lodash.throttle'

export default function useOnScreen(
	ref: React.RefObject<any>,
	offset = 0,
	throttleMilliseconds = 100
): boolean {
	const [isVisible, setIsVisible] = React.useState(false)

	const onScroll = throttle(() => {
		if (!ref.current) {
			setIsVisible(false)
			return
		}
		const top = ref.current.getBoundingClientRect().top
		setIsVisible(top + offset >= 0 && top - offset <= window.innerHeight)
	}, throttleMilliseconds)

	React.useEffect(() => {
		document.addEventListener('scroll', onScroll, true)
		return () => document.removeEventListener('scroll', onScroll, true)
	})

	return isVisible
}