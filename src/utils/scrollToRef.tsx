import React from 'react'
import { animateScroll as scroll } from 'react-scroll'

export function scrollToRef(ref: React.RefObject<any>) {
	if (ref.current) {
		const targetOffset = ref.current.offsetTop
		const start = window.scrollY
		const scrollDistance = Math.abs(targetOffset - start)
		const duration = Math.max(1000, scrollDistance)
		const scrollPosition = targetOffset + window.innerHeight - 120
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
