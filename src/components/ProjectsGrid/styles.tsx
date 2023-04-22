import styled from 'styled-components'
import THEME from '@/styles/theme'

export const GridContainer = styled.div<{
	gap: number
}>`
	display: grid;
	grid-gap: ${(props) => props.gap}px;
	grid-template-columns: repeat(4, 1fr);

	@media (max-width: ${THEME.screenSize.tablet}px) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media (max-width: ${THEME.screenSize.mobile}px) {
		grid-template-columns: repeat(2, 1fr);
	}
`

export const ImageContainer = styled.div<{
	fontSize?: number
}>`
	position: relative;
	aspect-ratio: 16/9;
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
			color: ${THEME.colors.primaryColor};
			font-size: ${(props) => props.fontSize || THEME.fontSize.buttons}px;
			pointer-events: none;
		}
	}

	&:hover {
		> div {
			> p {
				opacity: 1;
			}
		}
		> img {
			opacity: 0.25;
		}
	}
	img {
		aspect-ratio: 16/9;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: 50% 100%;
	}
`
