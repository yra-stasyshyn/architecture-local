import styled from 'styled-components'
import THEME from '@/styles/theme'

export const Wrapper = styled.div`
	margin-top: 200px;
	position: relative;
	width: 100%;
`

export const Content = styled.div`
	position: relative;
	left: 12.5%;
	width: 75%;
	@media (max-width: ${THEME.screenSize.tablet}px) {
		left: 16.6%;
		width: 66.6%;
	}

	@media (max-width: ${THEME.screenSize.mobile}px) {
		left: 12.5%;
		width: 75%;
	}
`
