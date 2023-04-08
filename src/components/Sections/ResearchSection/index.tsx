import React from 'react'
import * as S from './styles'
import ProjectsGrid from '@/components/ProjectsGrid'
import NextImage from 'next/image'

import img06 from '../../../../public/img/06.png'
const ResearchSection = React.forwardRef<HTMLDivElement>((props, ref) => {
	const quality = 30
	return (
		<S.Wrapper ref={ref}>
			<ProjectsGrid>
				<NextImage src={img06} alt={'pesquisa 1'} quality={quality} />
			</ProjectsGrid>
		</S.Wrapper>
	)
})

ResearchSection.displayName = 'Projects Section'

export default ResearchSection
