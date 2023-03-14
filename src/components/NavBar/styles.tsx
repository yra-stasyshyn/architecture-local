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
	box-shadow: 0 0 30px 0 rgba(0, 0, 0, 0.2);
	position: absolute;
	z-index: 1;
	bottom: 0;
	left: 0;
	right: 0;
`
export const ContentWrapper = styled.div`
	border: none;
	display: flex;
	flex-direction: row;
	@media (max-width: 600px) {
		justify-content: space-between;
	}
	width: 100%;
	max-width: 1250px;
	padding-left: 40px;
	padding-right: 40px;
	margin: 0;
	padding-bottom: 0;
`
