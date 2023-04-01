import styled from 'styled-components'
import THEME from '@/styles/theme'

export const SectionsContentWrapper = styled.div`
	margin: 0;
	background-color: ${THEME.colors.secondaryColor};
	position: absolute;
	top: min(100vh, 100svh);
	width: 100%;
	z-index: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	overflow: hidden;

	@media (max-width: ${THEME.screenSize.tablet}px) {
		gap: 100px;
	}
	@media (max-width: ${THEME.screenSize.mobile}px) {
		gap: 200px;
	}
`
