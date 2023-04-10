import styled from 'styled-components'
import THEME from '@/styles/theme'
export const Wrapper = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	flex-direction: column;
	left: 12.5%;

	@media (max-width: ${THEME.screenSize.tablet}px) {
		gap: 60px;
		flex-direction: column;
		left: 16.6%;
	}
	@media (max-width: ${THEME.screenSize.mobile}px) {
		gap: 20px;
		flex-direction: column;
		left: 12.5%;
	}
`

export const StatementDiv = styled.div`
	width: 62.5%;

	@media (max-width: ${THEME.screenSize.tablet}px) {
		width: 63.3%;
	}
	@media (max-width: ${THEME.screenSize.mobile}px) {
		width: 75%;
	}
`
export const TitleWrapper = styled.div`
	margin-bottom: 40px;
	@media (max-width: ${THEME.screenSize.tablet}px) {
		margin-bottom: 0;
	}
`

export const Content = styled.div`
	display: flex;
	flex-direction: row;
	margin-top: 64px;
	width: 62.5%;
	@media (max-width: ${THEME.screenSize.tablet}px) {
		width: 63.3%;
		gap: 60px;
		flex-direction: column;
		justify-content: center;
	}
	@media (max-width: ${THEME.screenSize.mobile}px) {
		width: 75%;

		flex-direction: column;
		justify-content: center;
	}
`
export const FormContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 10px;
	gap: 20px;
	width: 60%;
	padding-left: 80px;
	@media (max-width: ${THEME.screenSize.tablet}px) {
		padding: 0;
		width: 100%;
	}
`

export const ActionContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	width: 40%;
	@media (max-width: ${THEME.screenSize.tablet}px) {
		padding: 0;
		width: 100%;
	}
`
