import React from 'react'
import { animateScroll as scroll } from 'react-scroll'

function scrollToRef(ref: React.RefObject<any>) {
	if (ref.current) {
		const targetOffset = ref.current.offsetTop
		const start = window.scrollY
		const scrollDistance = Math.abs(targetOffset - start)
		const duration = Math.max(1000, scrollDistance)
		scroll.scrollTo(targetOffset, {
			duration: duration,
			smooth: true,
			offset: -230
		})
	}
}

export default scrollToRef
