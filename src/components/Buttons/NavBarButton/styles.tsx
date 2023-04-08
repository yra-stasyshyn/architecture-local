import styled from 'styled-components'
import THEME from '@/styles/theme'

export const Wrapper = styled.button<{
	textColor: string
	underline: boolean
}>`
	background-color: transparent;
	color: ${(props) => props.textColor};
	border-top: none;
	border-right: none;
	border-left: none;
	border-bottom: ${(props) =>
		props.underline ? `1px solid ${THEME.colors.accentColor}` : 'none'};
	font-size: ${THEME.fontSize.buttons}px;
	padding: 8px 8px 3px 8px;
	text-align: center;
	align-items: center;
	cursor: pointer;
	display: inline-flex;
	font-family: ${THEME.fonts.primaryFont};
	-webkit-tap-highlight-color: transparent;
	&:hover {
		color: ${THEME.colors.accentColor};
	}
`
