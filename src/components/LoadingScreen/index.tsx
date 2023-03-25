import React, { useState, useEffect } from 'react'
import * as S from './styles'
import InstitutionalLogo from '@/components/Logos/InstitutionalLogo'
import THEME from '@/styles/theme'
const LoadingScreen: React.FC = () => {
	const [loaded, setLoaded] = useState(false)
	const [progress, setProgress] = useState(0)

	useEffect(() => {
		const images = document.querySelectorAll('img')
		const numImages = images.length
		let loadedImages = 0

		const updateProgress = () => {
			loadedImages++
			const newProgress = Math.floor((loadedImages / numImages) * 100)
			setProgress(newProgress)
			if (newProgress >= 100) {
				setLoaded(true)
			}
		}

		images.forEach((image) => {
			if (image.complete) {
				updateProgress()
			} else {
				image.addEventListener('load', updateProgress)
			}
		})

		return () => {
			images.forEach((image) => {
				image.removeEventListener('load', updateProgress)
			})
		}
	}, [])

	return (
		<S.Overlay loaded={loaded}>
			<InstitutionalLogo color={THEME.colors.primaryColor} />
			<S.LoadingBar loaded={loaded} progress={progress} />
		</S.Overlay>
	)
}

export default LoadingScreen
