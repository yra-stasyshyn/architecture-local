import styled from 'styled-components'

export const Wrapper = styled.div<{
	highlightColor?: string
	color: string
}>`
	border: none;
	display: flex;
	flex-direction: row;
	align-items: center;
	&:hover {
		& .child {
			background-color: ${(props) =>
				props.highlightColor ? props.highlightColor : props.color};
		}
	}
`

export const Rectangle = styled.div<{
	color: string
	sizeMultiplier: number
}>`
	background-color: ${(props) => props.color};
	border: none;
	height: ${(props) => 100 * props.sizeMultiplier}px;
	width: ${(props) => 26 * props.sizeMultiplier}px;
`

export const Circle = styled.div<{
	color: string
	sizeMultiplier: number
}>`
	background-color: ${(props) => props.color};
	border: none;
	height: ${(props) => 64 * props.sizeMultiplier}px;
	width: ${(props) => 64 * props.sizeMultiplier}px;
	border-radius: 50%;
`
