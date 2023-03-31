import styled from 'styled-components'
import THEME from '@/styles/theme'

export const Wrapper = styled.div<{
	fontSize?: number
	color: string
	width: number
	fontWeight?: number
}>`
	max-width: ${(props) => props.width}px;
	font-weight: ${(props) => props.fontWeight || THEME.fontWeight.regular};
	color: ${(props) => props.color};

	p {
		font-size: ${(props) => props.fontSize || THEME.fontSize.text}px;
	}

	h1 {
		font-size: ${(props) => props.fontSize || THEME.fontSize.title1}px;
		font-weight: ${(props) => props.fontWeight || THEME.fontWeight.semiBold};
	}

	h2 {
		font-size: ${(props) => props.fontSize || THEME.fontSize.title2}px;
		font-weight: ${(props) => props.fontWeight || THEME.fontWeight.semiBold};
	}
`
