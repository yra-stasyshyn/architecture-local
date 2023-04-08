import styled from 'styled-components'
import THEME from '@/styles/theme'

export const Wrapper = styled.div`
	height: 100svh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	position: relative;

	> div {
		position: relative;
		left: 12.5%;
		max-width: 1000px;
		width: 75%;
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
