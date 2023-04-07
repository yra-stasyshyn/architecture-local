import SlideShow from '@/components/SlideShow'
import React from 'react'
import * as S from './styles'
import NextImage from 'next/image'

import img01 from '../../../../public/img/01.png'
import img02 from '../../../../public/img/02.jpg'
import img04 from '../../../../public/img/04.png'
import img05 from '../../../../public/img/05.png'
import img06 from '../../../../public/img/06.png'
import img07 from '../../../../public/img/07.png'
import img08 from '../../../../public/img/08.jpg'
import img09 from '../../../../public/img/09.png'
import img10 from '../../../../public/img/10.png'
import img11 from '../../../../public/img/11.png'
import img12 from '../../../../public/img/12.jpg'

const HeroSection = () => {
	const quality = 40
	return (
		<S.Wrapper>
			<SlideShow>
				<NextImage
					src={img01}
					alt={''}
					width={2678}
					height={1800}
					quality={quality}
				/>
				<NextImage
					src={img02}
					alt={''}
					width={3840}
					height={3840}
					quality={quality}
				/>
				<NextImage
					src={img04}
					alt={''}
					width={2678}
					height={1800}
					quality={quality}
				/>
				<NextImage
					src={img05}
					alt={''}
					width={2678}
					height={1800}
					quality={quality}
				/>
				<NextImage
					src={img06}
					alt={''}
					width={3838}
					height={2158}
					quality={quality}
				/>
				<NextImage
					src={img12}
					alt={''}
					width={3840}
					height={2160}
					quality={quality}
				/>
				<NextImage
					src={img07}
					alt={''}
					width={3839}
					height={2158}
					quality={quality}
				/>
				<NextImage
					src={img08}
					alt={''}
					width={3840}
					height={2160}
					quality={quality}
				/>
				<NextImage
					src={img09}
					alt={''}
					width={3840}
					height={2160}
					quality={quality}
				/>
				<NextImage
					src={img10}
					alt={''}
					width={1607}
					height={1080}
					quality={quality}
				/>
				<NextImage
					src={img11}
					alt={''}
					width={3200}
					height={1800}
					quality={quality}
				/>
			</SlideShow>
		</S.Wrapper>
	)
}

export default HeroSection
