import styled, { keyframes, css } from 'styled-components'
import THEME from '@/styles/theme'

const showText = keyframes`
	0% { transform: translate3d(0, 100%, 0); }
	100% { transform: translate3d(0, 0, 0); }
`

export const Wrapper = styled.div<{ isVisible: boolean }>`
	height: calc(100svh - 200px);
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	padding-left: 12.5%;
	padding-right: 12.5%;
	> div {
		opacity: ${(props) => (props.isVisible ? 1 : 0)};
		> div {
			overflow: hidden;
			> h1 {
				animation: ${(props) =>
					props.isVisible
						? css`
								${showText} 0.5s linear forwards
						  `
						: 'none'};
			}
		}
	}

	@media (max-width: ${THEME.screenSize.tablet}px) {
		padding-left: 16.6%;
		padding-right: 16.6%;
	}

	@media (max-width: ${THEME.screenSize.mobile}px) {
		padding-left: 12.5%;
		padding-right: 12.5%;
	}
`
