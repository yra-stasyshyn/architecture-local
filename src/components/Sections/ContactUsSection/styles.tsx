import styled from 'styled-components'
import THEME from '@/styles/theme'
export const Wrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 10px;
`
export const Content = styled.div`
	position: relative;
	left: 12.5%;
	width: 75%;
	display: flex;
	flex-direction: row;
	justify-content: flex-start;
	gap: 80px;

	@media (max-width: ${THEME.screenSize.tablet}px) {
		flex-direction: column;
		justify-content: center;
		width: 63.3%;
		left: 16.6%;
	}
	@media (max-width: ${THEME.screenSize.mobile}px) {
		flex-direction: column;
		justify-content: center;
		left: 12.5%;
		width: 75%;
	}
`

export const TitleWrapper = styled.div`
	position: relative;
	margin-bottom: 40px;
	left: 12.5%;
	width: 75%;
	@media (max-width: ${THEME.screenSize.tablet}px) {
		left: 16.6%;
		width: 63.3%;
	}
	@media (max-width: ${THEME.screenSize.mobile}px) {
		left: 12.5%;
		width: 75%;
`
export const FormContainer = styled.div`
	width: 65%;

	@media (max-width: ${THEME.screenSize.tablet}px) {
		width: 100%;
	}
`

export const ContactContainer = styled.div`
	width: 25%;
	@media (max-width: ${THEME.screenSize.tablet}px) {
		width: 100%;
	}
`