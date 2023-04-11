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
		img {
			object-fit: cover;
		}

		video {
			object-fit: cover;
		}
	}
`
