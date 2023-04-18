import styled from 'styled-components'
import THEME from '@/styles/theme'

export const Wrapper = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: center;
`

export const HeaderDiv = styled.div`
	margin-bottom: 10px;
`

export const NumberSpan = styled.div`
	font-size: ${THEME.fontSize.title3Desktop}px;
	font-weight: ${THEME.fontWeight.semiBold};
`
export const TitleSpan = styled.div`
	font-size: ${THEME.fontSize.title3Desktop}px;
	font-weight: ${THEME.fontWeight.semiBold};
`

export const ImageDiv = styled.div`
	position: relative;
	overflow: hidden;
	display: flex;
	justify-content: center;
	align-items: center;
	min-width: 250px;
	min-height: 250px;
	> img {
		width: 70%;
		height: 70%;
	}

	&:hover {
		> div {
			opacity: 1;
			top: 0;
		}
	}

	> div {
		position: absolute;
		display: flex;
		justify-content: center;
		align-items: center;
		top: 100%;
		background-color: ${THEME.colors.accentColor};
		color: ${THEME.colors.secondaryColor};
		padding: 25px;
		transition: top 0.6s ease;
		height: 100%;
		pointer-events: none;
	}
`
