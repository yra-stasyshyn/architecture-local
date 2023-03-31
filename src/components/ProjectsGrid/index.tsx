import React, { ReactElement } from 'react'
import * as S from './styles'
import { useWindowDimensions } from '@/utils/useWindowDimensions'

type ProjectsGridProps = {
	fontSize?: number
	gridGap?: number
	column3BreakPoint?: number
	column2BreakPoint?: number
	children: ReactElement<HTMLImageElement>[]
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({
	fontSize,
	gridGap = 3,
	children
}) => {
	const windowDimensions = useWindowDimensions()

	return (
		<S.GridContainer gap={gridGap}>
			{React.Children.map(children, (child: ReactElement<HTMLImageElement>) => {
				return (
					<S.ImageContainer
						windowWidth={windowDimensions.windowWidth}
						fontSize={fontSize}
						gap={gridGap}
					>
						{child}
						<p>{child.props.alt}</p>
					</S.ImageContainer>
				)
			})}
		</S.GridContainer>
	)
}

export default ProjectsGrid
