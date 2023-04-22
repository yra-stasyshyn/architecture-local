import React, { ReactElement } from 'react'
import * as S from './styles'

type ProjectsGridProps = {
	fontSize?: number
	gridGap?: number
	children: ReactElement<HTMLImageElement>[] | ReactElement<HTMLImageElement>
}

const ProjectsGrid: React.FC<ProjectsGridProps> = ({
	fontSize,
	gridGap = 3,
	children
}) => {
	return (
		<S.GridContainer gap={gridGap}>
			{React.Children.map(children, (child: ReactElement<HTMLImageElement>) => {
				return (
					<S.ImageContainer fontSize={fontSize}>
						{child}
						<div>
							<p>{child.props.alt}</p>
						</div>
					</S.ImageContainer>
				)
			})}
		</S.GridContainer>
	)
}

export default ProjectsGrid
