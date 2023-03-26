import styled from 'styled-components'
import THEME from '@/styles/theme'

export const SectionsContentWrapper = styled.div`
	height: 10000px;
	background-color: ${THEME.colors.secondaryColor};
	position: relative;
	top: min(100vh, 100svh);
	width: 100%;
	z-index: 1;
`
