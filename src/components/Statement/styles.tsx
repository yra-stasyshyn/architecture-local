import styled, { keyframes, css } from 'styled-components'

const showText = keyframes`
	0% { transform: translate3d(0, 100%, 0); }
	100% { transform: translate3d(0, 0, 0); }
`

export const Wrapper = styled.div<{ isVisible: boolean }>`
	> div {
		display: flex;
		justify-content: center;
		> h1 {
			opacity: ${(props) => (props.isVisible ? 1 : 0)};
			transition: opacity 1s ease-in;
			animation: ${(props) =>
				props.isVisible
					? css`
							${showText} 0.6s ease-out forwards
					  `
					: 'none'};
		}
	}
`
