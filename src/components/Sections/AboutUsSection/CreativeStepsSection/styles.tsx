import styled from 'styled-components'
import THEME from '@/styles/theme'

export const Wrapper = styled.div`
	width: 100%;
`
export const SectionTitleDiv = styled.div`
	position: relative;
	margin-bottom: 40px;
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
export const StepsGrid = styled.div`
	position: relative;
	left: 12.5%;
	width: 62.5%;
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(215px, 1fr));

	@media (max-width: ${THEME.screenSize.tablet}px) {
		left: 16.6%;
		width: 66.6%;
	}

	@media (max-width: ${THEME.screenSize.mobile}px) {
		left: 12.5%;
		width: 75%;
	}
`
