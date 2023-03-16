import SlideShow from '@/components/SlideShow'
import React from 'react'
import * as S from './styles'

const HeroSection = () => {
	return (
		<S.Wrapper>
			<SlideShow>
				<img src={'/img/01.png'} alt={''} />
				<img src={'/img/02.jpg'} alt={''} />
				<img src={'/img/03.png'} alt={''} />
				<img src={'/img/04.png'} alt={''} />
				<img src={'/img/05.png'} alt={''} />
				<img src={'/img/06.png'} alt={''} />
				<img src={'/img/07.png'} alt={''} />
				<img src={'/img/08.jpg'} alt={''} />
				<img src={'/img/09.png'} alt={''} />
				<img src={'/img/10.png'} alt={''} />
				<img src={'/img/11.png'} alt={''} />
				<img src={'/img/12.jpg'} alt={''} />
			</SlideShow>
		</S.Wrapper>
	)
}

export default HeroSection
