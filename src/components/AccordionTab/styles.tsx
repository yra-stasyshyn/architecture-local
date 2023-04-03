import styled, { css, keyframes } from 'styled-components'
import THEME from '@/styles/theme'

export const AccordionTabContainer = styled.div`
	width: 100%;
`

export const AccordionTabHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 8px 8px 0 8px;
	border-bottom: 1px solid ${THEME.colors.accentColor};
	font-size: ${THEME.fontSize.title3Desktop}px;
	font-weight: ${THEME.fontWeight.semiBold};
	cursor: pointer;

	@media (max-width: ${THEME.screenSize.tablet}px) {
		font-size: ${THEME.fontSize.title3Tablet}px;
	}

	@media (max-width: ${THEME.screenSize.mobile}px) {
		font-size: ${THEME.fontSize.title3Mobile}px;
	}
`

const slideDown = keyframes`
  from {
    max-height: 0;
  }
  to {
    max-height: 1000px;
  }
`

const slideUp = keyframes`
  from {
    max-height: 1000px;
  }
  to {
    max-height: 0;
  }
`

const appearContent = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`

const disappearContent = keyframes`
	from {
		opacity: 1;
	}
	to {
		opacity: 0;
	}
`

export const AccordionTabContent = styled.div<{ isOpen: boolean }>`
	animation: ${(props) =>
		props.isOpen
			? css`
					${slideDown} 1.8s linear forwards,
					${appearContent} 0.8s ease forwards 0.4s
			  `
			: css`
					${slideUp} 1.2s ease-out forwards,
					${disappearContent} 0.8s ease forwards
			  `};
	max-height: 0;
	padding: 20px 10px 20px 10px;
	height: auto;
	opacity: 0;
	font-size: ${THEME.fontSize.textDesktop}px;
	pointer-events: none;

	@media (max-width: ${THEME.screenSize.tablet}px) {
		font-size: ${THEME.fontSize.textTablet}px;
	}

	@media (max-width: ${THEME.screenSize.mobile}px) {
		font-size: ${THEME.fontSize.textMobile}px;
	}
`

export const IconWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 38px;
	height: 38px;
`
