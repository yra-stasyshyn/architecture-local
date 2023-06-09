import styled from 'styled-components'
import THEME from '@/styles/theme'

export const Wrapper = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 10px;
	left: 12.5%;

	@media (max-width: ${THEME.screenSize.tablet}px) {
		left: 16.6%;
	}
	@media (max-width: ${THEME.screenSize.mobile}px) {
		left: 12.5%;
	}
`

export const Content = styled.div`
	width: 62.5%;
	display: flex;
	flex-direction: row;

	@media (max-width: ${THEME.screenSize.tablet}px) {
		gap: 60px;
		flex-direction: column;
		justify-content: center;
		width: 66.6%;
	}
	@media (max-width: ${THEME.screenSize.mobile}px) {
		flex-direction: column;
		justify-content: center;
		width: 75%;
	}
`

export const AccordionWrapper = styled.div`
	padding-left: 80px;
	position: relative;
	width: 60%;
	@media (max-width: ${THEME.screenSize.tablet}px) {
		padding: 0;
		width: 100%;
	}
	@media (max-width: ${THEME.screenSize.mobile}px) {
		width: 100%;
	}
`

export const TitleWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 40px;
	width: 40%;
	@media (max-width: ${THEME.screenSize.tablet}px) {
		width: 100%;
	}
	@media (max-width: ${THEME.screenSize.mobile}px) {
		width: 100%;
	}
`

export const SectionHeader = styled.div`
	position: relative;
	margin-bottom: 40px;
`
