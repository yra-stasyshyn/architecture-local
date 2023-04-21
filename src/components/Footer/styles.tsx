import styled from 'styled-components'
import THEME from '@/styles/theme'

export const Wrapper = styled.div`
	position: relative;
	color: ${THEME.colors.primaryColor};
	margin-top: 100px;
	border: none;
	height: 200px;
	width: 100%;
	@media (max-width: ${THEME.screenSize.mobile}px) {
		height: auto;
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
	@media (max-width: ${THEME.screenSize.mobile}px) {
		height: 300px;
		align-items: center;
		justify-content: flex-start;
		flex-direction: column;
	}
`

export const LeftElement = styled.div`
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	justify-content: center;
	text-align: left;
	margin: 20px;
	width: 50%;
	@media (max-width: ${THEME.screenSize.mobile}px) {
		justify-content: center;
		align-items: center;
		text-align: center;
		height: 80px;
	}
`

export const RightElement = styled.div`
	display: flex;
	align-items: center;
	justify-content: right;
	text-align: right;
	margin: 20px;
	width: 50%;
	@media (max-width: ${THEME.screenSize.mobile}px) {
		justify-content: center;
		align-items: center;
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
export const SignatureWrapper = styled.div`
	font-size: ${THEME.fontSize.smallText}px;
	border: none;
	color: ${THEME.colors.lightGrey};
	height: auto;
	padding: 8px;
	width: 100%;
	margin-bottom: 10px;
	position: absolute;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	text-align: center;
	bottom: 0;
	@media (max-width: ${THEME.screenSize.mobile}px) {
		flex-direction: column;
		height: auto;
	}
`
