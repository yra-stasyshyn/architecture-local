import styled from 'styled-components'
import THEME from '@/styles/theme'

export const Wrapper = styled.div<{
	fontSize?: number
	fontSizeMobile?: number
	fontSizeTablet?: number
	color: string
	width?: number
	fontWeight?: number
}>`
	${(props) => (props.width ? `max-width: ${props.width}px` : '')};
	font-weight: ${(props) => props.fontWeight || THEME.fontWeight.regular};
	color: ${(props) => props.color};

	p {
		font-size: ${(props) => props.fontSize || THEME.fontSize.textDesktop}px;

		@media (max-width: ${THEME.screenSize.tablet}px) {
			font-size: ${(props) =>
				props.fontSizeTablet || THEME.fontSize.textTablet}px;
		}

		@media (max-width: ${THEME.screenSize.mobile}px) {
			font-size: ${(props) =>
				props.fontSizeMobile || THEME.fontSize.textMobile}px;
		}
	}

	h1 {
		font-size: ${(props) => props.fontSize || THEME.fontSize.title1Desktop}px;
		font-weight: ${(props) => props.fontWeight || THEME.fontWeight.semiBold};

		@media (max-width: ${THEME.screenSize.tablet}px) {
			font-size: ${(props) =>
				props.fontSizeTablet || THEME.fontSize.title1Tablet}px;
		}

		@media (max-width: ${THEME.screenSize.mobile}px) {
			font-size: ${(props) =>
				props.fontSizeMobile || THEME.fontSize.title1Mobile}px;
		}
	}

	h2 {
		font-size: ${(props) => props.fontSize || THEME.fontSize.title2Desktop}px;
		font-weight: ${(props) => props.fontWeight || THEME.fontWeight.semiBold};

		@media (max-width: ${THEME.screenSize.tablet}px) {
			font-size: ${(props) =>
				props.fontSizeTablet || THEME.fontSize.title2Tablet}px;
		}

		@media (max-width: ${THEME.screenSize.mobile}px) {
			font-size: ${(props) =>
				props.fontSizeMobile || THEME.fontSize.title2Mobile}px;
		}
	}
`
