import styled from 'styled-components'
import THEME from '@/styles/theme'

export const Button = styled.div`
	background-color: ${THEME.colors.secondaryColor};
	color: ${THEME.colors.primaryColor};
	border: 1px solid ${THEME.colors.accentColor};
	font-size: ${THEME.fontSize.buttons}px;
	padding: 8px;
	cursor: pointer;
	display: flex;
	flex-direction: row;
	gap: 20px;
	justify-content: center;
	align-items: center;
	-webkit-tap-highlight-color: transparent;
	transition: background-color 0.3s ease, color 0.3s ease;
	&:hover {
		color: ${THEME.colors.secondaryColor};
		background-color: ${THEME.colors.accentColor};
	}
	max-width: 200px;
`
