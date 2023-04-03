import React from 'react'
import * as S from './styles'
import ProjectsGrid from '@/components/ProjectsGrid'
import NextImage from 'next/image'

const ProjectsSection = React.forwardRef<HTMLDivElement>((props, ref) => {
	return (
		<S.Wrapper ref={ref}>
			<ProjectsGrid>
				<NextImage src={'/img/12.jpg'} alt={'casa local 1'} fill={true} />
				<NextImage src={'/img/08.jpg'} alt={'casa local 2'} fill={true} />
				<NextImage src={'/img/06.png'} alt={'casa local 3'} fill={true} />
				<NextImage src={'/img/07.png'} alt={'casa local 4'} fill={true} />
				<NextImage src={'/img/01.png'} alt={'casa local 5'} fill={true} />
				<NextImage src={'/img/02.jpg'} alt={'casa local 6'} fill={true} />
				<NextImage src={'/img/04.png'} alt={'casa local 7'} fill={true} />
				<NextImage src={'/img/12.jpg'} alt={'casa local 1'} fill={true} />
				<NextImage src={'/img/08.jpg'} alt={'casa local 2'} fill={true} />
				<NextImage src={'/img/06.png'} alt={'casa local 3'} fill={true} />
				<NextImage src={'/img/07.png'} alt={'casa local 4'} fill={true} />
				<NextImage src={'/img/01.png'} alt={'casa local 5'} fill={true} />
				<NextImage src={'/img/02.jpg'} alt={'casa local 6'} fill={true} />
				<NextImage src={'/img/04.png'} alt={'casa local 7'} fill={true} />
				<NextImage src={'/img/12.jpg'} alt={'casa local 1'} fill={true} />
				<NextImage src={'/img/08.jpg'} alt={'casa local 2'} fill={true} />
			</ProjectsGrid>
		</S.Wrapper>
	)
})

ProjectsSection.displayName = 'Projects Section'

export default ProjectsSection
