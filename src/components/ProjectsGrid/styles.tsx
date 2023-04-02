import styled, { keyframes } from 'styled-components'
import THEME from '@/styles/theme'

export const GridContainer = styled.div<{
	gap: number
}>`
	display: grid;
	grid-gap: ${(props) => props.gap}px;
	grid-template-rows: repeat(1, 1fr);
	grid-template-columns: repeat(4, 1fr);

	@media (max-width: ${THEME.screenSize.tablet}px) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media (max-width: ${THEME.screenSize.mobile}px) {
		grid-template-columns: repeat(2, 1fr);
	}
`

const showText = keyframes`
	0% { transform: translate3d(0, 100%, 0); }
	100% { transform: translate3d(0, 0, 0); }
`

export const ImageContainer = styled.div<{
	windowWidth: number
	gap: number
	fontSize?: number
}>`
	position: relative;
	width: ${(props) => (props.windowWidth - 3 * 6 - 2 * props.gap) / 4}px;
	height: ${(props) =>
		((props.windowWidth - 3 * 6 - 2 * props.gap) / 4) * (3 / 4)}px;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;

	> div {
		position: absolute;
		overflow: hidden;
		> p {
			opacity: 0;
			transition: opacity 0.6s ease;
			font-size: ${(props) => props.fontSize || THEME.fontSize.buttons}px;
			pointer-events: none;
		}
	}

	&:hover {
		> div {
			> p {
				animation: ${showText} 0.3s ease-out forwards;
				opacity: 1;
			}
		}
		> img {
			opacity: 0.25;
		}
	}
	img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: opacity 0.2s ease;
	}
	@media (max-width: ${THEME.screenSize.tablet}px) {
		width: ${(props) => (props.windowWidth - 2 * 6 - 2 * props.gap) / 3}px;
		height: ${(props) =>
			((props.windowWidth - 2 * 6 - 2 * props.gap) / 3) * (3 / 4)}px;
	}
	@media (max-width: ${THEME.screenSize.mobile}px) {
		width: ${(props) => (props.windowWidth - 6 - 2 * props.gap) / 2}px;
		height: ${(props) =>
			((props.windowWidth - 6 - 2 * props.gap) / 2) * (3 / 4)}px;
	}
`
