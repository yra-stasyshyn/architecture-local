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
		document.body.style.overflow = progress < 100 ? 'hidden' : ''
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
	const invisibleImagesInOrderToLoadFirst = [1, 2, 3, 4, 5].map((num) => {
		return (
			<img
				key={num}
				src={`./img/al-logo-white-${num}.svg`}
				alt={''}
				height={90}
				width={90}
				style={{ opacity: 0, position: 'absolute' }}
			/>
		)
	})
	const indexOfImageToShow = Math.min(Math.floor((progress / 100) * 5) + 1, 5)
	return (
		<S.Overlay loaded={loaded}>
			<img
				src={`./img/al-logo-white-${indexOfImageToShow}.svg`}
				alt={''}
				height={90}
				width={90}
			/>
			<LoadingBar progress={progress} />
			{invisibleImagesInOrderToLoadFirst}
		</S.Overlay>
	)
}

export default LoadingScreen
