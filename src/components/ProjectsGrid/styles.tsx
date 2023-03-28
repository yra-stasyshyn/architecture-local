import styled from 'styled-components'
import THEME from '@/styles/theme'

export const GridContainer = styled.div`
	display: grid;
	grid-gap: 2px;
	grid-template-rows: repeat(1, 1fr);
	grid-template-columns: repeat(3, 1fr);

	@media (max-width: 700px) {
		grid-template-columns: repeat(2, 1fr);
	}

	@media (max-width: 480px) {
		grid-template-columns: repeat(1, 1fr);
	}
`

export const ImageContainer = styled.div`
	position: relative;
	width: 400px;
	height: 400px;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;

	p {
		position: absolute;
		opacity: 0;
		font-size: ${THEME.fontSize.small}px;
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
	@media (max-width: 1350px) {
		width: 350px;
		height: 350px;
	}
	@media (max-width: 1180px) {
		width: 300px;
		height: 300px;
	}

	@media (max-width: 1000px) {
		width: 250px;
		height: 250px;
	}

	@media (max-width: 850px) {
		width: 200px;
		height: 200px;
	}

	@media (max-width: 480px) {
		width: 280px;
		height: 280px;
	}
`
