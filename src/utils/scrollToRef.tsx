import React from 'react'
import { animateScroll } from 'react-scroll'

export function scrollToRef(ref: React.RefObject<any>, topOffset = 0) {
	if (ref.current) {
		const targetOffset = ref.current.offsetTop
		const start = window.scrollY
		const scrollDistance = Math.abs(targetOffset - start)
		const duration = Math.max(1000, scrollDistance)
		const scrollPosition = targetOffset + window.innerHeight + topOffset + 64
		animateScroll.scrollTo(scrollPosition, {
			duration: duration,
			smooth: true
		})
	}
}

export function scrollToStart() {
	animateScroll.scrollToTop({
		duration: 2000,
		smooth: true
	})
}

export function scrollOneScreenHeight() {
	const scrollDistance = window.innerHeight + window.scrollY - 64
	animateScroll.scrollTo(scrollDistance, {
		duration: Math.min(1000, scrollDistance),
		smooth: true
	})
}
