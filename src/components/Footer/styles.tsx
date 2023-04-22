import styled from 'styled-components'
import THEME from '@/styles/theme'

export const Wrapper = styled.div`
	position: relative;
	color: ${THEME.colors.primaryColor};
	margin-top: 100px;
	border: none;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
`
export const UpperContent = styled.div`
	margin-bottom: 40px;
	min-height: 80px;
	display: flex;
	align-items: center;
	justify-content: center;

	@media (max-width: ${THEME.screenSize.mobile}px) {
		margin-bottom: 0;
	}
`

export const MiddleContent = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	width: 100%;
	@media (max-width: ${THEME.screenSize.mobile}px) {
		align-items: center;
		justify-content: flex-start;
		flex-direction: column;
		gap: 20px;
	}
`
export const ContentWrapper = styled.div`
	width: 75%;
	gap: 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	flex-direction: column;
	@media (max-width: ${THEME.screenSize.tablet}px) {
		width: 66%;
	}
	@media (max-width: ${THEME.screenSize.mobile}px) {
		width: 75%;
	}
`

export const LeftElement = styled.div`
	display: flex;
	align-items: flex-start;
	flex-direction: column;
	justify-content: center;
	text-align: left;
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
	width: 50%;
	@media (max-width: ${THEME.screenSize.mobile}px) {
		justify-content: center;
		align-items: center;
		height: 80px;
		width: 100%;
	}
`

export const IconDiv = styled.span`
	display: inline-block;
	vertical-align: middle;
	gap: 4px;
	margin-left: 4px;
	> svg {
		&:hover {
			color: ${THEME.colors.accentColor};
		}
	}
`
export const SignatureWrapper = styled.div`
	border: none;
	color: ${THEME.colors.lightGrey};
	padding: 8px;
	width: 100%;
	margin-bottom: 10px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	> p {
		font-size: ${THEME.fontSize.smallText}px;
	}
`
