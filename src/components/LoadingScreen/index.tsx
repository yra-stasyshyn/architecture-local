import React, { useState } from 'react'
import * as S from './styles'
import LoadingBar from '@/components/LoadingBar'
import { useOnInterval } from '@/utils/useOnInterval'
import NextImage from 'next/image'

const LoadingScreen = ({
	toWaitLoad
}: {
	toWaitLoad: React.RefObject<HTMLDivElement>
}) => {
	const [loaded, setLoaded] = useState(false)
	const [progress, setProgress] = useState(0)

	function updateProgress() {
		if (loaded) return
		document.body.style.overflowY = progress < 100 ? 'hidden' : ''
		const images: NodeListOf<HTMLImageElement> | undefined =
			toWaitLoad.current?.querySelectorAll(':scope img')
		if (images) {
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
	}

	useOnInterval(updateProgress, 100)

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
