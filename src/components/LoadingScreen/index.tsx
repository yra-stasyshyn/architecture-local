import React, { useState } from 'react'
import * as S from './styles'
import LoadingBar from '@/components/LoadingBar'
import { doOnInterval } from '@/utils/doOnInterval'
import NextImage from 'next/image'

const LoadingScreen = () => {
	const [loaded, setLoaded] = useState(false)
	const [progress, setProgress] = useState(0)
	function updateProgress() {
		if (loaded) return
		const images: NodeListOf<HTMLImageElement> = document.querySelectorAll(
			'img:not([src$=".svg"])'
		)
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

	const indexOfImageToShow = Math.min(Math.floor((progress / 100) * 5) + 1, 5)
	return (
		<S.Overlay loaded={loaded}>
			<NextImage
				src={`./img/al-logo-white-${indexOfImageToShow}.svg`}
				alt={`Loading Logo ${indexOfImageToShow}`}
				height={90}
				width={90}
				priority={true}
			/>
			<LoadingBar progress={progress} />
		</S.Overlay>
	)
}

export default LoadingScreen
