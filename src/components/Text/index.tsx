import * as S from './styles'
import React, { ReactElement } from 'react'
import THEME from '@/styles/theme'

type TextProps = {
	fontSize?: number
	fontWeight?: number
	color?: string
	width?: number
	children: ReactElement<HTMLParagraphElement>
}

const Text: React.FC<TextProps> = ({
	fontSize = THEME.fontSize.small,
	color = THEME.colors.primaryColor,
	fontWeight = THEME.fontWeight.semiBold,
	width = 600,
	children
}) => (
	<S.Wrapper
		fontSize={fontSize}
		color={color}
		width={width}
		fontWeight={fontWeight}
	>
		{children}
	</S.Wrapper>
)

export default Text
