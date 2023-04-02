import styled from 'styled-components'
import THEME from '@/styles/theme'

export const Wrapper = styled.div`
	height: 200px;
	width: 100%;
	background-color: ${THEME.colors.accentColor};
`

export const WavyCurve = styled.div`
	position: absolute;
	bottom: 200px;
	left: 0;
	width: 100%;
	overflow: hidden;
	line-height: 0;
	color: ${THEME.colors.accentColor};
`
