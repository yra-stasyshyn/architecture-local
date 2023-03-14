import { useEffect } from 'react'

export function doOnInterval(handler: () => void, interval: number) {
	// eslint-disable-next-line react-hooks/rules-of-hooks
	useEffect(() => {
		const onInterval = setInterval(() => {
			handler()
		}, interval)
		return () => {
			clearInterval(onInterval)
		}
	}, [handler, interval])
}
