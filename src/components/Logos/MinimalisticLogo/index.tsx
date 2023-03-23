import * as S from './styles'
import { Rectangle, Circle } from './styles'
import React from 'react'
import THEME from '@/styles/theme'

export type LogoProps = {
	sizeMultiplier?: number
	color?: string
	highlightColorOnHover?: string
	style?: React.CSSProperties
	onClick?: React.MouseEventHandler
}

const defaultLogoProps = {
	sizeMultiplier: 1,
	color: THEME.colors.secondaryColor
}

const MinimalisticLogo = ({
	sizeMultiplier = defaultLogoProps.sizeMultiplier,
	color = defaultLogoProps.color,
	highlightColorOnHover,
	style,
	onClick
}: LogoProps) => {
	highlightColorOnHover = highlightColorOnHover ? highlightColorOnHover : color
	const spacingBetweenLetters = 8 * sizeMultiplier
	const circlesOffset = 36 * sizeMultiplier
	const [isHovered, setIsHovered] = React.useState(false)
	color = isHovered ? highlightColorOnHover : color
	return (
		<S.Wrapper
			style={style}
			onClick={onClick}
			color={color}
			onMouseOver={() => setIsHovered(true)}
			onMouseOut={() => setIsHovered(false)}
		>
			<Rectangle sizeMultiplier={sizeMultiplier} color={color} />
			<Circle
				sizeMultiplier={sizeMultiplier}
				color={color}
				style={{ marginLeft: spacingBetweenLetters, marginTop: circlesOffset }}
			/>
			<Circle
				sizeMultiplier={sizeMultiplier}
				color={color}
				style={{
					marginRight: spacingBetweenLetters,
					marginLeft: spacingBetweenLetters,
					marginTop: circlesOffset
				}}
			/>
			<Circle
				sizeMultiplier={sizeMultiplier}
				color={color}
				style={{ marginRight: spacingBetweenLetters, marginTop: circlesOffset }}
			/>
			<Rectangle sizeMultiplier={sizeMultiplier} color={color} />
		</S.Wrapper>
	)
}

export default MinimalisticLogo
