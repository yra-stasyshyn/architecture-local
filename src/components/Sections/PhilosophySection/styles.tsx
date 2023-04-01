import styled from 'styled-components'
import THEME from '@/styles/theme'

export const Wrapper = styled.div`
	height: 100svh;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
`

export const Content = styled.div`
	position: relative;
	left: 12.5%;
	width: 62.5%;
	display: flex;
	flex-direction: row;
	gap: 50px;

	@media (max-width: ${THEME.screenSize.tablet}px) {
		flex-direction: column;
		width: 50%;
		left: 16.6%;
	}
	@media (max-width: ${THEME.screenSize.mobile}px) {
		flex-direction: column;
		left: 12.5%;
		width: 75%;
	}
`

export const ParagraphWrapper = styled.div`
	width: 60%;
	@media (max-width: ${THEME.screenSize.tablet}px) {
		width: 100%;
	}
	@media (max-width: ${THEME.screenSize.mobile}px) {
		width: 100%;
	}
`

export const TitleWrapper = styled.div`
	width: 40%;
	@media (max-width: ${THEME.screenSize.tablet}px) {
		width: 100%;
	}
	@media (max-width: ${THEME.screenSize.mobile}px) {
		width: 100%;
	}
`

export const ImageWrapper = styled.div`
	margin-top: 50px;
	width: 100%;
	display: flex;
	justify-content: center;
`
