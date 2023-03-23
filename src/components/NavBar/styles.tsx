import styled from 'styled-components'

export const Wrapper = styled.div<{
	backgroundColor: string
}>`
	background-color: ${(props) => props.backgroundColor};
	border: none;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 100px;
	margin: 0;
	padding: 0;
	position: absolute;
	z-index: 2;
	bottom: 0;
	left: 0;
	right: 0;
	box-shadow: 0 20px 15px 0 rgba(0, 0, 0, 0.25);
	transition: background-color 100ms ease-in-out;
`

export const GradientContainer = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	width: 100%;
	height: 180px;
	background: linear-gradient(
		to top,
		rgba(0, 0, 0, 0.8) 0%,
		rgba(0, 0, 0, 0.4) 50%,
		rgba(0, 0, 0, 0.2) 75%,
		rgba(0, 0, 0, 0) 100%
	);
	pointer-events: none; /* to prevent the element from being clickable */
	z-index: 1;
`
export const ContentWrapper = styled.div`
	border: none;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	padding-left: 50px;
	padding-right: 50px;
	margin: 0;
	padding-bottom: 0;
`
