import styled from 'styled-components'

export const Wrapper = styled.div<{
	isOpen: boolean
	backgroundColor: string
	renderPosition: 'above' | 'below'
}>`
	display: ${(props) => (props.isOpen ? 'block' : 'none')};
	background-color: ${(props) => props.backgroundColor};
	margin-top: 14px;
	z-index: 1;
	border: none;
	position: absolute;
	left: 0;
	${(props) =>
		props.renderPosition === 'below' ? 'top: 100%;' : 'bottom: 100%;'}
`
