import styled from 'styled-components'

export const Wrapper = styled.div<{ isBellowHeroSection: boolean }>`
	position: relative;
	opacity: ${(props) => (props.isBellowHeroSection ? '0' : '1')};
	height: 100%;
	overflow: hidden;
	z-index: -10;

	> div:first-child {
		> img {
			opacity: 1;
		}
	}
`

export const ImageWrapper = styled.div`
	display: flex;
	justify-content: center;
	img {
		position: absolute;
		opacity: 0;
		transition: opacity 400ms ease;
		bottom: 0;
		z-index: -10;
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: 50% 100%;
	}
`
