import React from 'react'
import { animateScroll as scroll } from 'react-scroll'

export function scrollToRef(ref: React.RefObject<any>, topOffset = 0) {
	if (ref.current) {
		const targetOffset = ref.current.offsetTop
		const start = window.scrollY
		const scrollDistance = Math.abs(targetOffset - start)
		const duration = Math.max(1000, scrollDistance)
		const scrollPosition = targetOffset + window.innerHeight + topOffset
		scroll.scrollTo(scrollPosition, {
			duration: duration,
			smooth: true
		})
	}
}

export function scrollToStart() {
	scroll.scrollToTop({
		duration: 2000,
		smooth: true
	})
}
