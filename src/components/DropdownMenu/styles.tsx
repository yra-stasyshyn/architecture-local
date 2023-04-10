import styled from 'styled-components'

export const Wrapper = styled.div<{
	isOpen: boolean
	backgroundColor: string
	renderPosition: 'above' | 'below'
}>`
	display: ${(props) => (props.isOpen ? 'flex' : 'none')};
	background-color: ${(props) => props.backgroundColor};
	flex-direction: column;
	gap: 12px;
	padding: 12px;
	margin-top: 30px;
	margin-bottom: 30px;
	left: -70px;
	border: none;
	position: absolute;
	${(props) =>
		props.renderPosition === 'below' ? 'top: 100%;' : 'bottom: 100%;'}
`
