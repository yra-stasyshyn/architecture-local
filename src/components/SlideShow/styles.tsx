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

export const ImageWrapper = styled.div<{ windowToImageRatio: number }>`
	display: flex;
	justify-content: center;
	img {
		position: absolute;
		opacity: 0;
		transition: opacity 400ms ease;
		bottom: 0;
		z-index: -10;
		max-width: ${(props) => (props.windowToImageRatio < 1 ? 'none' : '100%')};
		max-height: ${(props) => (props.windowToImageRatio < 1 ? '100%' : 'none')};
		height: ${(props) => (props.windowToImageRatio < 1 ? '100%' : 'auto')};
		width: ${(props) => (props.windowToImageRatio < 1 ? 'auto' : '100%')};
	}
`
