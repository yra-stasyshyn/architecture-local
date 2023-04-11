import styled from 'styled-components'
import THEME from '@/styles/theme'

export const Wrapper = styled.div`
	width: 100%;
	margin-top: 100px;
	display: flex;
	flex-direction: column;
	gap: 150px;
	background-color: ${THEME.colors.secondaryColor};
`

export const InstaFeedDiv = styled.div`
	position: relative;
	left: 12.5%;
	width: 62.5%;

	@media (max-width: ${THEME.screenSize.tablet}px) {
		left: 16.6%;
		width: 66.6%;
	}

	@media (max-width: ${THEME.screenSize.mobile}px) {
		left: 12.5%;
		width: 75%;
	}
`
