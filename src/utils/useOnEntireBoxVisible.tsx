import React from 'react'
import throttle from 'lodash.throttle'

export default function useOnEntireBoxVisible(
	ref: React.RefObject<any>
): boolean {
	const [isVisible, setIsVisible] = React.useState(false)

	const onScroll = throttle(() => {
		if (!ref.current) {
			setIsVisible(false)
			return
		}
		const { top, bottom } = ref.current.getBoundingClientRect()
		const isVisibleTop = top >= 0 && top <= window.innerHeight + 200
		const isVisibleBottom = bottom >= 0 && bottom <= window.innerHeight + 200
		setIsVisible(isVisibleTop && isVisibleBottom)
	}, 100)

	React.useEffect(() => {
		document.addEventListener('scroll', onScroll, true)
		return () => document.removeEventListener('scroll', onScroll, true)
	})

	return isVisible
}
