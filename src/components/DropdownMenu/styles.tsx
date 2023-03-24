import styled from 'styled-components'

export const Wrapper = styled.div<{
	isOpen: boolean
	backgroundColor: string
	renderPosition: 'above' | 'below'
}>`
	display: ${(props) => (props.isOpen ? 'block' : 'none')};
	background-color: ${(props) => props.backgroundColor};
	margin-top: 30px;
	left: -50px;
	border: none;
	position: absolute;
	${(props) =>
		props.renderPosition === 'below' ? 'top: 100%;' : 'bottom: 100%;'}
`
