import React from 'react'

function scrollToRef(ref: React.RefObject<any>) {
	const element = ref.current // target element
	const targetOffset = element.offsetTop + window.innerHeight - 230
	const start = window.scrollY
	const scrollDistance = Math.abs(targetOffset - start) // calculate scroll distance
	const maxScrollDistance = 1000 // specify the maximum scroll distance (you can adjust this value)
	const duration = Math.max(2000, (scrollDistance / maxScrollDistance) * 1000) // duration based on scroll distance

	const startTime =
		'now' in window.performance ? performance.now() : new Date().getTime()

	const easeInOutQuad = (t: number) =>
		t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t

	const scroll = () => {
		const currentTime =
			'now' in window.performance ? performance.now() : new Date().getTime()
		const time = Math.min(1, (currentTime - startTime) / duration)
		const easedTime = easeInOutQuad(time)
		window.scrollTo(0, start + (targetOffset - start) * easedTime)
		if (time < 1) {
			requestAnimationFrame(scroll)
		}
	}
	if (scrollDistance > 5) {
		scroll()
	}
}

export default scrollToRef
