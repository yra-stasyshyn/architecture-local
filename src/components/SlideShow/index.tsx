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

	const windowDimensions = useWindowDimensions()
	function nextImageIndex() {
		if (currentImageIndex >= numberOfImages - 1) {
			setCurrentImageIndex(0)
		} else {
			setCurrentImageIndex(currentImageIndex + 1)
		}
	}

	React.useEffect(() => {
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

	return (
		<S.Wrapper>
			{React.Children.map(children, (child, index) => {
				const opacity = index === currentImageIndex ? '1' : '0'
				const imageStyle: React.CSSProperties = { opacity }
				const windowToImageRatio =
					windowProportion / (child.props.width / child.props.height)
				return (
					<S.ImageWrapper windowToImageRatio={windowToImageRatio}>
						{/*// eslint-disable-next-line @typescript-eslint/ban-ts-comment*/}
						{/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
						{/*// @ts-ignore*/}
						{React.cloneElement(child, { style: imageStyle })}
					</S.ImageWrapper>
				)
			})}
		</S.Wrapper>
	)
}

export default SlideShow
