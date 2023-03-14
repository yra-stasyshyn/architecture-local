import * as S from './styles'
import React, { ReactElement, useState } from 'react'

const SlideShow = ({ children }: { children: ReactElement[] }) => {
	const numberOfImages = children.length
	const [currentImageIndex, setCurrentImageIndex] = React.useState(0)
	const [imageDimensions, setImageDimensions] = React.useState({
		naturalWidth: 0,
		naturalHeight: 0
	})
	const [windowDimensions, setWindowDimensions] = useState({
		windowWidth: 0,
		windowHeight: 0
	})
	function nextImageIndex() {
		if (currentImageIndex >= numberOfImages - 1) {
			setCurrentImageIndex(0)
		} else {
			setCurrentImageIndex(currentImageIndex + 1)
		}
	}

	React.useEffect(() => {
		const img = new Image()
		img.onload = () => {
			setImageDimensions({
				naturalWidth: img.naturalWidth,
				naturalHeight: img.naturalHeight
			})
		}
		img.src = children[currentImageIndex].props.src

		const onInterval = setInterval(() => {
			nextImageIndex()
		}, 3000)
		function setDimensionsOfWindow() {
			setWindowDimensions({
				windowWidth: window.innerWidth,
				windowHeight: window.innerHeight
			})
		}

		const windowDimensionsInterval = setInterval(() => {
			setDimensionsOfWindow()
		}, 100)

		window.addEventListener('resize', setDimensionsOfWindow)
		return () => {
			window.removeEventListener('resize', setDimensionsOfWindow)
			clearInterval(onInterval)
			clearInterval(windowDimensionsInterval)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [children, currentImageIndex])
	const windowProportion =
		windowDimensions.windowWidth / windowDimensions.windowHeight
	const imageProportion =
		imageDimensions.naturalWidth / imageDimensions.naturalHeight
	let style: React.CSSProperties = {}
	if (windowProportion < imageProportion) {
		style = { maxWidth: 'none', height: '100%' }
	} else {
		style = { maxHeight: 'none', width: '100%' }
	}
	return (
		<S.Wrapper>
			{React.Children.map(children, (child: ReactElement, index) => {
				return React.cloneElement(child, {
					style: { ...style, opacity: index === currentImageIndex ? 1 : 0 }
				})
			})}
		</S.Wrapper>
	)
}

export default SlideShow
