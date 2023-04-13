import styled from 'styled-components'
import THEME from '@/styles/theme'

export const Wrapper = styled.div`
	width: 100%;
	display: grid;
	gap: 3px;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));

	@media (min-width: ${THEME.screenSize.desktop}px) {
		grid-template-columns: repeat(4, minmax(250px, 1fr));
	}

	a {
		display: flex;
		align-items: center;
		justify-content: center;

		&:hover {
			filter: brightness(1.2);
		}

		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: 50% 100%;
		}

		video {
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: 50% 100%;
		}
	}
`
