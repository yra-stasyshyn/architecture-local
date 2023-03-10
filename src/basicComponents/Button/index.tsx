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

const defaultButtonProps = {
	bgColor: THEME.colors.secondaryColor,
	textColor: THEME.colors.primaryColor,
	colorOnHover: THEME.colors.accentColor,
	fontSize: THEME.fontSize.small
}

const Button = ({
	bgColor = defaultButtonProps.bgColor,
	textColor = defaultButtonProps.textColor,
	fontSize = defaultButtonProps.fontSize,
	colorOnHover = defaultButtonProps.colorOnHover,
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
