import styled from 'styled-components'

export const Wrapper = styled.div<{
	fontSize: number
	color: string
	width: number
	fontWeight: number
}>`
	display: flex;
	align-items: center;
	justify-content: center;
	max-width: ${(props) => props.width}px;

	p {
		color: ${(props) => props.color};
		font-size: ${(props) => props.fontSize}px;
		font-weight: ${(props) => props.fontWeight};
	}
`
