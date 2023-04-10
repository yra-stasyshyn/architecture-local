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
	padding: 4px;
	border-bottom: 1px solid ${THEME.colors.accentColor};
`
export const TitleSpan = styled.div`
	padding: 4px;
`

export const ImageDiv = styled.div`
	position: relative;
	overflow: hidden;
	> img {
		width: 100%;
		height: 100%;
	}

	&:hover {
		> div {
			opacity: 1;
			top: 0;
		}
	}

	> div {
		position: absolute;
		top: 100%;
		background-color: ${THEME.colors.primaryColor};
		color: ${THEME.colors.secondaryColor};
		padding: 15px;
		transition: top 0.6s ease;
		height: 100%;
		pointer-events: none;
	}
`
