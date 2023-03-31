import styled from 'styled-components'
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

	p {
		position: absolute;
		opacity: 0;
		font-size: ${(props) => props.fontSize || THEME.fontSize.buttons}px;
	}
	&:hover {
		p {
			opacity: 1;
		}
	}
	img {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		object-fit: cover;
		&:hover {
			opacity: 0.25;
		}
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
