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
	const spacingBetweenLetters = 8 * sizeMultiplier
	const circlesOffset = 36 * sizeMultiplier
	return (
		<S.Wrapper
			style={style}
			onClick={onClick}
			color={color}
			highlightColor={highlightColorOnHover}
		>
			<Rectangle
				sizeMultiplier={sizeMultiplier}
				color={color}
				className={'letters'}
			/>
			<Circle
				sizeMultiplier={sizeMultiplier}
				color={color}
				style={{ marginLeft: spacingBetweenLetters, marginTop: circlesOffset }}
				className={'letters'}
			/>
			<Circle
				sizeMultiplier={sizeMultiplier}
				color={color}
				style={{
					marginRight: spacingBetweenLetters,
					marginLeft: spacingBetweenLetters,
					marginTop: circlesOffset
				}}
				className={'letters'}
			/>
			<Circle
				sizeMultiplier={sizeMultiplier}
				color={color}
				style={{ marginRight: spacingBetweenLetters, marginTop: circlesOffset }}
				className={'letters'}
			/>
			<Rectangle
				sizeMultiplier={sizeMultiplier}
				color={color}
				className={'letters'}
			/>
		</S.Wrapper>
	)
}

export default Logo
