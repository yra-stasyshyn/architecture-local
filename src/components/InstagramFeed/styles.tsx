import styled from 'styled-components'

export const Wrapper = styled.div`
	width: 100%;
	display: grid;
	gap: 20px;
	grid-template-columns: repeat(4, minmax(0px, 600px));

	a {
		display: flex;
		align-items: center;
		justify-content: center;

		img {
			width: 100%;
			height: 100%;
			max-height: 250px;
			max-width: 250px;
			aspect-ratio: 1;
			object-fit: cover;
		}

		video {
			width: 100%;
			height: 100%;
			max-height: 250px;
			max-width: 250px;
			aspect-ratio: 1;
			object-fit: cover;
		}
	}
`
