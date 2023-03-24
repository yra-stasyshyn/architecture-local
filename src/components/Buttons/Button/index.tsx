import * as S from './styles'
import THEME from '@/styles/theme'
import React from 'react'

export type ButtonProps = {
	bgColor?: string
	textColor?: string
	fontSize?: number
	colorOnHover?: string
	onClick?: React.MouseEventHandler
	children?: React.ReactNode | React.ReactNode[]
	style?: React.CSSProperties
}

const Button = ({
	bgColor = 'transparent',
	textColor = THEME.colors.primaryColor,
	fontSize = THEME.fontSize.small,
	colorOnHover = THEME.colors.accentColor,
	onClick,
	children,
	style
}: ButtonProps) => (
	<S.Wrapper
		bgColor={bgColor}
		colorOnHover={colorOnHover}
		textColor={textColor}
		fontSize={fontSize}
		onClick={onClick}
		style={style}
	>
		{children}
	</S.Wrapper>
)

export default Button
