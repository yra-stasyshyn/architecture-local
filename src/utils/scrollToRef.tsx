import React from 'react'

function scrollToRef(ref: React.RefObject<any>) {
	window.scrollTo({
		top: ref.current.offsetTop + window.innerHeight - 230,
		behavior: 'smooth'
	})
}

export default scrollToRef
