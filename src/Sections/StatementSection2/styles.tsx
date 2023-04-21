import styled from 'styled-components'
import THEME from '@/styles/theme'

export const Wrapper = styled.div`
	width: 100%;
	position: relative;

	> div {
		position: relative;
		left: 12.5%;
		width: 62.5%;
		@media (max-width: ${THEME.screenSize.tablet}px) {
			width: 63.3%;
			left: 16.6%;
		}

		@media (max-width: ${THEME.screenSize.mobile}px) {
			width: 75%;
			left: 12.5%;
		}
	}
`
