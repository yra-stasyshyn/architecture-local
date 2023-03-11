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

const Logo = ({
	sizeMultiplier = defaultLogoProps.sizeMultiplier,
	color = defaultLogoProps.color,
	highlightColorOnHover,
	style,
	onClick
}: LogoProps) => {
	if (!highlightColorOnHover) {
		highlightColorOnHover = color
	}
	const [chosenColor, setChosenColor] = React.useState(color)
	const spacingBetweenLetters = 8 * sizeMultiplier
	const circlesOffset = 36 * sizeMultiplier
	return (
		<S.Wrapper
			style={style}
			onClick={onClick}
			onMouseEnter={() => setChosenColor(highlightColorOnHover || color)}
			onMouseLeave={() => setChosenColor(color)}
		>
			<Rectangle sizeMultiplier={sizeMultiplier} color={chosenColor} />
			<Circle
				sizeMultiplier={sizeMultiplier}
				color={chosenColor}
				style={{ marginLeft: spacingBetweenLetters, marginTop: circlesOffset }}
			/>
			<Circle
				sizeMultiplier={sizeMultiplier}
				color={chosenColor}
				style={{
					marginRight: spacingBetweenLetters,
					marginLeft: spacingBetweenLetters,
					marginTop: circlesOffset
				}}
			/>
			<Circle
				sizeMultiplier={sizeMultiplier}
				color={chosenColor}
				style={{ marginRight: spacingBetweenLetters, marginTop: circlesOffset }}
			/>
			<Rectangle sizeMultiplier={sizeMultiplier} color={chosenColor} />
		</S.Wrapper>
	)
}

export default Logo
