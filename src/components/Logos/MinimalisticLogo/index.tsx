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

const MinimalisticLogo = ({
	sizeMultiplier = 1,
	color = THEME.colors.primaryColor,
	highlightColorOnHover,
	style,
	onClick
}: LogoProps) => {
	highlightColorOnHover = highlightColorOnHover ? highlightColorOnHover : color
	const spacingBetweenLetters = 8 * sizeMultiplier
	const circlesOffset = 36 * sizeMultiplier
	const [isHovered, setIsHovered] = React.useState(false)
	const logoColor = isHovered ? highlightColorOnHover : color
	return (
		<S.Wrapper
			style={{
				...style,
				cursor: onClick ? 'pointer' : 'default'
			}}
			onClick={onClick}
			onMouseOver={() => setIsHovered(true)}
			onMouseOut={() => setIsHovered(false)}
		>
			<Rectangle sizeMultiplier={sizeMultiplier} color={logoColor} />
			<Circle
				sizeMultiplier={sizeMultiplier}
				color={logoColor}
				style={{ marginLeft: spacingBetweenLetters, marginTop: circlesOffset }}
			/>
			<Circle
				sizeMultiplier={sizeMultiplier}
				color={logoColor}
				style={{
					marginRight: spacingBetweenLetters,
					marginLeft: spacingBetweenLetters,
					marginTop: circlesOffset
				}}
			/>
			<Circle
				sizeMultiplier={sizeMultiplier}
				color={logoColor}
				style={{ marginRight: spacingBetweenLetters, marginTop: circlesOffset }}
			/>
			<Rectangle sizeMultiplier={sizeMultiplier} color={logoColor} />
		</S.Wrapper>
	)
}

export default MinimalisticLogo
