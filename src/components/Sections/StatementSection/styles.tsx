import styled from 'styled-components'
import THEME from '@/styles/theme'

export const Wrapper = styled.div`
	margin-top: 100px;
	margin-bottom: 100px;
	height: calc(100svh - 200px);
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	padding-left: 12.5%;

	@media (max-width: ${THEME.screenSize.tablet}px) {
		padding-left: 16.6%;
	}

	@media (max-width: ${THEME.screenSize.mobile}px) {
		padding-left: 12.5%;
	}
`
