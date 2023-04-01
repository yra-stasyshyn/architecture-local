import styled from 'styled-components'
import THEME from '@/styles/theme'

export const Wrapper = styled.div`
	height: auto;
	min-height: 100svh;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 10px;
`

export const Content = styled.div`
	position: relative;
	left: 12.5%;
	width: 62.5%;
	display: flex;
	flex-direction: row;
	gap: 40px;

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

export const AccordionWrapper = styled.div`
	position: relative;
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
	margin-bottom: 60px;
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
	left: 12.5%;
	@media (max-width: ${THEME.screenSize.tablet}px) {
		left: 16.6%;
	}
	@media (max-width: ${THEME.screenSize.mobile}px) {
		left: 12.5%;
`

export const ButtonWrapper = styled.div`
	position: relative;
	left: 12.5%;
	@media (max-width: ${THEME.screenSize.tablet}px) {
		left: 16.6%;
	}
	@media (max-width: ${THEME.screenSize.mobile}px) {
		left: 12.5%;
`
