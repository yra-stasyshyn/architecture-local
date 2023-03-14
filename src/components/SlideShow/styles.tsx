import styled from 'styled-components'

export const Wrapper = styled.div`
	position: relative;
	height: 100vh;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
	img {
		position: absolute;
		opacity: 0;
		transition: all 400ms ease;
	}

	img:first-child {
		opacity: 1;
	}
`
