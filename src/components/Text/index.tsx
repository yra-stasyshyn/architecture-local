import * as S from './styles'
import React, { ReactElement } from 'react'
import THEME from '@/styles/theme'

type TextProps = {
	fontSize?: number
	fontWeight?: number
	color?: string
	width?: number
	children:
		| ReactElement<HTMLParagraphElement>
		| ReactElement<HTMLParagraphElement>[]
		| ReactElement<HTMLHeadingElement>
		| ReactElement<HTMLHeadingElement>[]
}

const Text: React.FC<TextProps> = ({
	fontSize,
	color = THEME.colors.primaryColor,
	fontWeight,
	width = 1000,
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
