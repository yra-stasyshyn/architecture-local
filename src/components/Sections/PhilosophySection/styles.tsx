import styled from 'styled-components'
import THEME from '@/styles/theme'

export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	position: relative;
	width: 75%;
	@media (max-width: ${THEME.screenSize.tablet}px) {
		width: 66.6%;
	}
	@media (max-width: ${THEME.screenSize.mobile}px) {
		width: 75%;
	}
`

export const Content = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	flex-direction: row;
	align-items: center;
	gap: 40px;

	@media (max-width: ${THEME.screenSize.tablet}px) {
		flex-direction: column;
	}
	@media (max-width: ${THEME.screenSize.mobile}px) {
		flex-direction: column;
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
	width: 50%;
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
