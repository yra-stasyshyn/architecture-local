import * as S from './styles'
import React, { ReactElement } from 'react'
import THEME from '@/styles/theme'

type TextProps = {
	fontSize?: number
	fontSizeMobile?: number
	fontSizeTablet?: number
	fontWeight?: number
	color?: string
	width?: number
	style?: React.CSSProperties
	children:
		| ReactElement<HTMLParagraphElement>
		| ReactElement<HTMLParagraphElement>[]
		| ReactElement<HTMLHeadingElement>
		| ReactElement<HTMLHeadingElement>[]
}

const Text: React.FC<TextProps> = ({
	fontSize,
	fontSizeMobile,
	fontSizeTablet,
	color = THEME.colors.primaryColor,
	fontWeight,
	width,
	style,
	children
}) => (
	<S.Wrapper
		fontSize={fontSize}
		fontSizeMobile={fontSizeMobile}
		fontSizeTablet={fontSizeTablet}
		color={color}
		width={width}
		fontWeight={fontWeight}
		style={style}
	>
		{children}
	</S.Wrapper>
)

export default Text
