import styled from 'styled-components'
import THEME from '@/styles/theme'

export const Wrapper = styled.div`
	position: relative;
	color: ${THEME.colors.secondaryColor};
	margin-top: 200px;
	border: none;
	height: 250px;
	width: 100%;
	background-color: ${THEME.colors.primaryColor};
	@media (max-width: ${THEME.screenSize.tablet}px) {
		height: auto;
	}
`

export const SignatureWrapper = styled.div`
	font-size: ${THEME.fontSize.smallText}px;
	border: none;
	border-top: 1px solid ${THEME.colors.darkGrey};
	height: 64px;
	padding: 8px;
	width: 100%;
	position: absolute;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	text-align: center;
	bottom: 0;
	@media (max-width: ${THEME.screenSize.tablet}px) {
		flex-direction: column;
	}
`
export const ContentWrapper = styled.div`
	height: 186px;
	width: 100%;
	gap: 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: row;
	padding-right: 60px;
	padding-left: 60px;
	@media (max-width: ${THEME.screenSize.tablet}px) {
		height: 435px;
		align-items: center;
		justify-content: flex-start;
		flex-direction: column;
	}
`

export const CenterElement = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	text-align: center;
	margin: 20px;
	width: 33.3333%;
	@media (max-width: ${THEME.screenSize.tablet}px) {
		height: 80px;
	}
`

export const LeftElement = styled.div`
	display: flex;
	align-items: center;
	justify-content: left;
	margin: 20px;
	width: 33.3333%;
	@media (max-width: ${THEME.screenSize.tablet}px) {
		justify-content: center;
		height: 80px;
	}
`

export const RightElement = styled.div`
	display: flex;
	align-items: center;
	justify-content: right;
	text-align: right;
	margin: 20px;
	width: 33.3333%;
	@media (max-width: ${THEME.screenSize.tablet}px) {
		justify-content: center;
		height: 80px;
		width: 100%;
	}
`

export const IconDiv = styled.span`
	display: flex;
	flex-direction: row;
	gap: 4px;
	margin-left: 4px;
	> svg {
		&:hover {
			color: ${THEME.colors.accentColor};
		}
	}
`
