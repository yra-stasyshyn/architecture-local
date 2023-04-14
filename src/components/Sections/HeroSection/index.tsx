import SlideShow from '@/components/SlideShow'
import React from 'react'
import * as S from './styles'
import axios from 'axios'

type SlideImage = {
	url: string
	alt: string
}

const HeroSection = React.forwardRef<HTMLDivElement>((props, ref) => {
	const [slideImages, setSlideImages] = React.useState<SlideImage[]>([])

	const getSlideImages = () => {
		axios.get('/api/get-slide-images').then(function (response) {
			setSlideImages(response.data)
		})
	}

	React.useEffect(() => {
		getSlideImages()
	}, [])

	return (
		<S.Wrapper ref={ref}>
			<SlideShow>
				{slideImages.map((slideImage, index) => {
					return <img key={index} src={slideImage.url} alt={slideImage.url} />
				})}
			</SlideShow>
		</S.Wrapper>
	)
})

HeroSection.displayName = 'Hero Section'

export default HeroSection
