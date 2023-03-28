import React, { ReactElement } from 'react'
import * as S from './styles'

const ProjectsGrid: React.FC<{
	children: ReactElement<HTMLImageElement>[]
}> = ({ children }) => {
	return (
		<S.GridContainer>
			{React.Children.map(children, (child: ReactElement<HTMLImageElement>) => {
				return (
					<S.ImageContainer>
						{child}
						<p>{child.props.alt}</p>
					</S.ImageContainer>
				)
			})}
		</S.GridContainer>
	)
}

export default ProjectsGrid
