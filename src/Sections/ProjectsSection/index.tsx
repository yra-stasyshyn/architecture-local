import React from 'react'
import * as S from './styles'
import ProjectsGrid from '@/components/ProjectsGrid'
import NextImage from 'next/image'

import img01 from '../../../public/img/01.png'
import img02 from '../../../public/img/02.jpg'
import img04 from '../../../public/img/04.png'
import img05 from '../../../public/img/05.png'
import img08 from '../../../public/img/08.jpg'
import img09 from '../../../public/img/09.png'
import img10 from '../../../public/img/10.png'
import img11 from '../../../public/img/11.png'

const ProjectsSection = React.forwardRef<HTMLDivElement>((props, ref) => {
	const quality = 30
	return (
		<S.Wrapper ref={ref}>
			<ProjectsGrid>
				<NextImage src={img08} alt={'casa local 8'} quality={quality} />
				<NextImage src={img01} alt={'casa local 3'} quality={quality} />
				<NextImage src={img02} alt={'casa local 4'} quality={quality} />
				<NextImage src={img04} alt={'casa local 5'} quality={quality} />
				<NextImage src={img05} alt={'casa local 6'} quality={quality} />
				<NextImage src={img08} alt={'casa local 8'} quality={quality} />
				<NextImage src={img09} alt={'casa local 7'} quality={quality} />
				<NextImage src={img10} alt={'casa local 1'} quality={quality} />
				<NextImage src={img11} alt={'casa local 2'} quality={quality} />
				<NextImage src={img01} alt={'casa local 5'} quality={quality} />
				<NextImage src={img02} alt={'casa local 6'} quality={quality} />
				<NextImage src={img04} alt={'casa local 7'} quality={quality} />
				<NextImage src={img05} alt={'casa local 1'} quality={quality} />
				<NextImage src={img09} alt={'casa local 2'} quality={quality} />
			</ProjectsGrid>
		</S.Wrapper>
	)
})

ProjectsSection.displayName = 'Projects Section'

export default ProjectsSection
