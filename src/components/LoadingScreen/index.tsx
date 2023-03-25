import React, { useState } from 'react'
import * as S from './styles'
import LoadingBar from '@/components/LoadingBar'
import { doOnInterval } from '@/utils/doOnInterval'

const LoadingScreen = () => {
	const [loaded, setLoaded] = useState(false)
	const [progress, setProgress] = useState(0)
	function updateProgress() {
		if (loaded) return
		const images = document.querySelectorAll('img')
		const numImages = images.length
		let loadedImages = 0
		images.forEach((image) => {
			if (image.complete) {
				loadedImages++
			}
		})
		const imagesLoadingProgress = Math.floor((loadedImages / numImages) * 100)
		if (imagesLoadingProgress >= progress + 10) {
			setProgress(progress + 10)
		}
		if (progress >= 100) {
			setLoaded(true)
		}
	}

	doOnInterval(updateProgress, 100)

	const indexOfImageToShow = Math.min(Math.floor((progress / 100) * 7) + 1, 6)
	return (
		<S.Overlay loaded={loaded}>
			<img
				src={`./img/al-logo-${indexOfImageToShow}.svg`}
				alt={''}
				height={100}
				width={100}
			/>
			<LoadingBar progress={progress} />
		</S.Overlay>
	)
}

export default LoadingScreen
