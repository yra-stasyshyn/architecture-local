import styled from 'styled-components'

export const GridContainer = styled.div<{
	gap: number
	colum3breakPoint: number
	colum2breakPoint: number
}>`
	display: grid;
	grid-gap: ${(props) => props.gap}px;
	grid-template-rows: repeat(1, 1fr);
	grid-template-columns: repeat(4, 1fr);

	@media (max-width: ${(props) => props.colum3breakPoint}px) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media (max-width: ${(props) => props.colum2breakPoint}px) {
		grid-template-columns: repeat(2, 1fr);
	}
`

export const ImageContainer = styled.div<{
	windowWidth: number
	gap: number
	fontSize: number
	colum3breakPoint: number
	colum2breakPoint: number
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
		font-size: ${(props) => props.fontSize}px;
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
	@media (max-width: ${(props) => props.colum3breakPoint}px) {
		width: ${(props) => (props.windowWidth - 2 * 6 - 2 * props.gap) / 3}px;
		height: ${(props) =>
			((props.windowWidth - 2 * 6 - 2 * props.gap) / 3) * (3 / 4)}px;
	}
	@media (max-width: ${(props) => props.colum2breakPoint}px) {
		width: ${(props) => (props.windowWidth - 6 - 2 * props.gap) / 2}px;
		height: ${(props) =>
			((props.windowWidth - 6 - 2 * props.gap) / 2) * (3 / 4)}px;
	}
`
