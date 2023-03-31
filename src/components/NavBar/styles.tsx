import styled from 'styled-components'
import THEME from '@/styles/theme'

export const Wrapper = styled.div<{
	backgroundColor: string
	shadowHeight: number
	shadowActive: boolean
}>`
	background-color: ${(props) => props.backgroundColor};
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 64px;
	margin: 0;
	padding: 0;
	position: absolute;
	z-index: 2;
	top: calc(min(100vh, 100svh) - 64px);
	bottom: 0;
	transition: background-color 300ms ease-in-out;
	border-bottom: 3px solid ${THEME.colors.secondaryColor};
	&::after {
		display: block;
		position: absolute;
		content: '';
		bottom: 0;
		left: 0;
		right: 0;
		height: ${(props) => props.shadowHeight}px;
		width: 100%;
		z-index: -1;
		background: linear-gradient(
			to top,
			rgba(0, 0, 0, 0.8) 0%,
			rgba(0, 0, 0, 0.4) 50%,
			rgba(0, 0, 0, 0.2) 75%,
			rgba(0, 0, 0, 0) 100%
		);
		pointer-events: none;
		opacity: ${(props) => (props.shadowActive ? '1' : '0')};
	}
`
export const ContentWrapper = styled.div`
	border: none;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	padding-left: 24px;
	padding-right: 24px;
	margin: 0;
	padding-bottom: 0;
`

export const ButtonsBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`
