import styled from 'styled-components'
import THEME from '@/styles/theme'

export const Overlay = styled.div<{ loaded: boolean }>`
	position: fixed;
	top: ${({ loaded }) => (loaded ? '-100vh' : '0')};
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: ${THEME.colors.primaryColor};
	z-index: 9999;
	transition: top 0.75s ease 0.5s;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 20px;
`
