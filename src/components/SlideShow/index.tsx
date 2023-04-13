import * as S from './styles'
import React, { ReactElement } from 'react'
import { useIsBellowHeroSection } from '@/utils/useIsBellowHeroSection'
import { useOnInterval } from '@/utils/useOnInterval'

const SlideShow = ({
	children
}: {
	children: ReactElement<HTMLImageElement>[]
}) => {
	const numberOfImages = children.length
	const [currentImageIndex, setCurrentImageIndex] = React.useState(0)
	const isBellowHeroSection = useIsBellowHeroSection()
	function nextImageIndex() {
		if (currentImageIndex >= numberOfImages - 1) {
			setCurrentImageIndex(0)
		} else {
			setCurrentImageIndex(currentImageIndex + 1)
		}
	}
	useOnInterval(nextImageIndex, 3000)

	return (
		<S.Wrapper isBellowHeroSection={isBellowHeroSection}>
			{React.Children.map(children, (child, index) => {
				const opacity = index === currentImageIndex ? '1' : '0'
				const imageStyle: React.CSSProperties = { opacity }
				return (
					<S.ImageWrapper>
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
