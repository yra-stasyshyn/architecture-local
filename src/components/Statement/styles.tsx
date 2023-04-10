import styled, { keyframes, css } from 'styled-components'

const showText = keyframes`
	0% { transform: translate3d(0, 100%, 0); }
	100% { transform: translate3d(0, 0, 0); }
`

export const Wrapper = styled.div<{ isVisible: boolean }>`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
	height: calc(100svh - 64px);
	margin-top: 68px;
	> h1 {
		opacity: ${(props) => (props.isVisible ? '1' : '0')};
		transition: opacity 1s ease-in;
		animation: ${(props) =>
			props.isVisible
				? css`
						${showText} 0.6s ease-out forwards
				  `
				: 'none'};
	}
`

export const ChevronDiv = styled.div<{ isEntireBoxVisible: boolean }>`
	position: absolute;
	width: 50px;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	bottom: 0;
	left: calc(50% - 25px);
	opacity: ${(props) => (props.isEntireBoxVisible ? '1' : '0')};
	transition: opacity 0.5s ease;
	> svg {
		opacity: 0.5;
		transition: height 0.5s ease;
		&:hover {
			height: 40px;
			width: 40px;
		}
	}
`
