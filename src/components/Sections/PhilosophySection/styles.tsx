import styled from 'styled-components'
import THEME from '@/styles/theme'

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 40px;
	position: relative;
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
	width: 75%;
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 40px;

	@media (max-width: ${THEME.screenSize.tablet}px) {
		flex-direction: column;
		width: 66.6%;
	}
	@media (max-width: ${THEME.screenSize.mobile}px) {
		flex-direction: column;
		width: 75%;
	}
`

export const TitleWrapper = styled.div`
	width: 75%;
	@media (max-width: ${THEME.screenSize.tablet}px) {
		width: 66.7%;
	}
	@media (max-width: ${THEME.screenSize.mobile}px) {
		width: 75%;
	}
`

export const ImageWrapper = styled.div`
	margin-top: 50px;
	width: 100%;
	display: flex;
	justify-content: center;

	@media (max-width: ${THEME.screenSize.tablet}px) {
		margin-top: 40px;
	}
	@media (max-width: ${THEME.screenSize.mobile}px) {
		margin-top: 20px;
	}

	img {
		height: 150px;
		width: 300px;

		@media (max-width: ${THEME.screenSize.tablet}px) {
			height: 125px;
			width: 250px;
		}
		@media (max-width: ${THEME.screenSize.mobile}px) {
			height: 75px;
			width: 150px;
		}
	}
`
