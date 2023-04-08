import React from 'react'

type BeforeRefreshCallback = () => void

const useBeforeRefresh = (callback: BeforeRefreshCallback) => {
	React.useEffect(() => {
		const handleBeforeUnload = (event: BeforeUnloadEvent) => {
			callback() // Call the provided callback function

			// Some browsers require a return value to be set
			event.preventDefault()
			event.returnValue = ''
		}

		window.addEventListener('beforeunload', handleBeforeUnload)

		return () => {
			window.removeEventListener('beforeunload', handleBeforeUnload)
		}
	}, [callback])
}

export default useBeforeRefresh
