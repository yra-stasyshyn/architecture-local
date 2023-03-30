import React, { ReactElement } from 'react'
import * as S from './styles'
import { useWindowDimensions } from '@/utils/useWindowDimensions'
import THEME from '@/styles/theme'

type ProjectsGridProps = {
	fontSize?: number
	gridGap?: number
	column3BreakPoint?: number
	column2BreakPoint?: number
	children: ReactElement<HTMLImageElement>[]
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({
	fontSize = THEME.fontSize.small,
	gridGap = 3,
	column3BreakPoint = 700,
	column2BreakPoint = 480,
	children
}) => {
	const windowDimensions = useWindowDimensions()

	return (
		<S.GridContainer
			colum2breakPoint={column2BreakPoint}
			colum3breakPoint={column3BreakPoint}
			gap={gridGap}
		>
			{React.Children.map(children, (child: ReactElement<HTMLImageElement>) => {
				return (
					<S.ImageContainer
						windowWidth={windowDimensions.windowWidth}
						colum2breakPoint={column2BreakPoint}
						colum3breakPoint={column3BreakPoint}
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
