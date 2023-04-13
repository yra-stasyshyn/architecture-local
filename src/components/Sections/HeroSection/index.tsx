import SlideShow from '@/components/SlideShow'
import React from 'react'
import * as S from './styles'
import NextImage from 'next/image'

import img01 from '../../../../public/img/01.png'
import img02 from '../../../../public/img/02.jpg'
import img04 from '../../../../public/img/04.png'
import img05 from '../../../../public/img/05.png'
import img08 from '../../../../public/img/08.jpg'
import img09 from '../../../../public/img/09.png'
import img10 from '../../../../public/img/10.png'
import img11 from '../../../../public/img/11.png'
import img12 from '../../../../public/img/12.jpg'

const HeroSection = React.forwardRef<HTMLDivElement>((props, ref) => {
	const quality = 40
	return (
		<S.Wrapper ref={ref}>
			<SlideShow>
				<NextImage src={img01} alt={''} quality={quality} />
				<NextImage src={img02} alt={''} quality={quality} />
				<NextImage src={img04} alt={''} quality={quality} />
				<NextImage src={img05} alt={''} quality={quality} />
				<NextImage src={img12} alt={''} quality={quality} />
				<NextImage src={img08} alt={''} quality={quality} />
				<NextImage src={img09} alt={''} quality={quality} />
				<NextImage src={img10} alt={''} quality={quality} />
				<NextImage src={img11} alt={''} quality={quality} />
			</SlideShow>
		</S.Wrapper>
	)
})

HeroSection.displayName = 'Hero Section'

export default HeroSection
