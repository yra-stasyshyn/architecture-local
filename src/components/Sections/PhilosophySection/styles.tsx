import styled from 'styled-components'
import THEME from '@/styles/theme'

export const Wrapper = styled.div`
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

	gap: 40px;

	@media (max-width: ${THEME.screenSize.tablet}px) {
		flex-direction: column;
		gap: 100px;
		width: 66.6%;
	}
	@media (max-width: ${THEME.screenSize.mobile}px) {
		flex-direction: column;
		width: 75%;
	}
`

export const TitleWrapper = styled.div`
	width: 62.5%;
	@media (max-width: ${THEME.screenSize.tablet}px) {
		width: 63.3%;
	}
	@media (max-width: ${THEME.screenSize.mobile}px) {
		width: 75%;
	}
`

export const ImagesWrapper = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;

	@media (max-width: ${THEME.screenSize.tablet}px) {
		margin-top: 40px;
	}
	@media (max-width: ${THEME.screenSize.mobile}px) {
		margin-top: 20px;
	}

	img {
		position: absolute;
		width: 100%;

		@media (max-width: ${THEME.screenSize.tablet}px) {
			width: 66.6%;
		}
		@media (max-width: ${THEME.screenSize.mobile}px) {
			width: 75%;
		}
	}
`
