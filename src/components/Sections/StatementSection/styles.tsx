import styled from 'styled-components'
import THEME from '@/styles/theme'

export const Wrapper = styled.div`
	height: calc(100svh - 200px);
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	padding-left: 12.5%;
	padding-right: 12.5%;

	@media (max-width: ${THEME.screenSize.tablet}px) {
		padding-left: 16.6%;
		padding-right: 16.6%;
	}

	@media (max-width: ${THEME.screenSize.mobile}px) {
		padding-left: 12.5%;
		padding-right: 12.5%;
	}
`
