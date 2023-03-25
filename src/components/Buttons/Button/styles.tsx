import styled from 'styled-components'
import THEME from '@/styles/theme'

export const Wrapper = styled.button<{
	bgColor: string
	colorOnHover: string
	textColor: string
	fontSize: number
}>`
	background-color: ${(props) => props.bgColor};
	color: ${(props) => props.textColor};
	border: none;
	font-size: ${(props) => props.fontSize}px;
	padding: ${(props) => 1.2 * props.fontSize}px;
	text-align: center;
	align-items: center;
	cursor: pointer;
	display: inline-flex;
	font-family: ${THEME.fonts.primaryFont};
	-webkit-tap-highlight-color: transparent;
	&:hover {
		color: ${(props) => props.colorOnHover};
	}
`
