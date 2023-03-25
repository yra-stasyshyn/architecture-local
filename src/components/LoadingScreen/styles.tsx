import styled from 'styled-components'
import THEME from '@/styles/theme'

export const Overlay = styled.div<{ loaded: boolean }>`
	position: fixed;
	top: ${({ loaded }) => (loaded ? '-100vh' : '0')};
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: ${THEME.colors.secondaryColor};
	z-index: 9999;
	transition: top 0.6s ease 0.5s;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

export const LoadingBar = styled.div<{ loaded: boolean; progress: number }>`
	width: ${({ progress }) => 50 - (progress * 50) / 100}%;
	height: 2px;
	background-color: ${THEME.colors.primaryColor};
	transition: width 0.5s ease-in-out;
	transform: translateY(-50%);
`
