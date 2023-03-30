import styled from 'styled-components'
import THEME from '@/styles/theme'

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

		@media (min-width: ${THEME.screenSize.mobile}px) {
			font-size: ${(props) => 1.2 * props.fontSize}px;
		}

		@media (min-width: ${THEME.screenSize.tablet}px) {
			font-size: ${(props) => 1.4 * props.fontSize}px;
		}
	}
`
