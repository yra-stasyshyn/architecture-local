import styled from 'styled-components'
import THEME from '@/styles/theme'

export const Wrapper = styled.div`
	margin-top: 50px;
	margin-bottom: 50px;
	position: relative;
	width: 100%;
	left: 12.5%;
	@media (max-width: ${THEME.screenSize.tablet}px) {
		left: 16.6%;
	}
	@media (max-width: ${THEME.screenSize.mobile}px) {
		left: 12.5%;
	}
`

export const Content = styled.div`
	position: relative;
	width: 62.5%;
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-top: 80px;

	@media (max-width: ${THEME.screenSize.tablet}px) {
		flex-direction: column-reverse;
		width: 66.6%;
	}
	@media (max-width: ${THEME.screenSize.mobile}px) {
		flex-direction: column-reverse;
		width: 75%;
	}
`

export const TitleWrapper = styled.div`
	display: flex;
	align-items: center;
	height: 100svh;
	width: 75%;

	@media (max-width: ${THEME.screenSize.tablet}px) {
		width: 63.3%;
	}
	@media (max-width: ${THEME.screenSize.mobile}px) {
		width: 75%;
	}
`

export const ParagraphWrapper = styled.div`
	width: 60%;
	display: flex;
	justify-content: center;
	padding-left: 80px;
	@media (max-width: ${THEME.screenSize.tablet}px) {
		padding: 0;
		width: 100%;
	}
	@media (max-width: ${THEME.screenSize.mobile}px) {
		width: 100%;
	}
`

export const ImagesWrapper = styled.div`
	position: relative;
	width: 40%;
	display: flex;
	align-items: center;
	justify-content: center;

	@media (max-width: ${THEME.screenSize.tablet}px) {
		padding: 0;
		width: 100%;
		margin-top: 170px;
	}
	@media (max-width: ${THEME.screenSize.mobile}px) {
		width: 100%;
		margin-top: 170px;
	}

	img {
		position: absolute;

		@media (max-width: ${THEME.screenSize.tablet}px) {
			width: 60%;
		}
		@media (max-width: ${THEME.screenSize.mobile}px) {
			width: 60%;
		}
	}
`
