import styled from 'styled-components'
import THEME from '@/styles/theme'

export const Wrapper = styled.div`
	position: relative;
	width: 100%;
`

export const Content = styled.div`
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
export const SectionTitleDiv = styled.div`
	margin-bottom: 40px;
`
export const StepsGrid = styled.div`
	position: relative;
	display: grid;
	grid-template-columns: repeat(4, minmax(250px, 1fr));

	@media (max-width: ${(4 * 250) / 0.625}px) {
		grid-template-columns: repeat(2, minmax(250px, 1fr));
	}

	@media (max-width: ${(2 * 250) / 0.666}px) {
		grid-template-columns: repeat(1, minmax(250px, 1fr));
	}
`
