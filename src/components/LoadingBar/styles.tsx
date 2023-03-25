import styled from 'styled-components'

export const Wrapper = styled.progress<{
	width: number
	backColor: string
	color: string
}>`
	border-radius: 0;
	width: ${(props) => props.width}px;
	height: 2px;
	margin: 0;
	padding: 0;

	&::-moz-progress-bar {
		background: ${(props) => props.backColor};
	}

	&::-webkit-progress-value {
		background: ${(props) => props.color};
		transition: width 0.2s ease;
	}

	&::-webkit-progress-bar {
		background: ${(props) => props.backColor};
	}
`
