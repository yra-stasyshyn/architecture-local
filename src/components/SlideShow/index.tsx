import * as S from './styles'
import React, { ReactElement } from 'react'
import { useWindowDimensions } from '@/utils/useWindowDimensions'

const SlideShow = ({
	children
}: {
	children: ReactElement<HTMLImageElement>[]
}) => {
	const numberOfImages = children.length
	const [currentImageIndex, setCurrentImageIndex] = React.useState(0)
	const [imageDimensions, setImageDimensions] = React.useState({
		naturalWidth: 0,
		naturalHeight: 0
	})
	const windowDimensions = useWindowDimensions()
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
		return () => {
			clearInterval(onInterval)
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
			{React.Children.map(children, (child, index) => {
				const opacity = index === currentImageIndex ? '1' : '0'
				const imageStyle: React.CSSProperties = {
					...style,
					opacity
				}
				// eslint-disable-next-line @typescript-eslint/ban-ts-comment
				// @ts-ignore
				return React.cloneElement(child, { style: imageStyle })
			})}
		</S.Wrapper>
	)
}

export default SlideShow
