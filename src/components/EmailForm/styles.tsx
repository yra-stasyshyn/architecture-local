import styled from 'styled-components'
import THEME from '@/styles/theme'

export const FormContainer = styled.form`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: 2px;
	max-width: 700px;
	min-width: 120px;
	::selection {
		background-color: ${THEME.colors.accentColor} !important;
		color: ${THEME.colors.secondaryColor} !important;
	}
`

export const Input = styled.input`
	width: 100%;
	padding: 8px;
	border: 0;
	font-size: ${THEME.fontSize.textDesktop}px;
	border-bottom: 1px solid ${THEME.colors.accentColor};
	color: ${THEME.colors.primaryColor};
	font-family: ${THEME.fonts.primaryFont};

	&:focus {
		outline-width: 0;
	}

	&:-webkit-autofill,
	&:-webkit-autofill:hover,
	&:-webkit-autofill:focus {
		-webkit-box-shadow: 0 0 0 100px white inset;
		-webkit-text-fill-color: #333;
		-webkit-text-decoration-color: ${THEME.colors.primaryColor};
		-webkit-text-size-adjust: none;
	}
`

export const TextArea = styled.textarea`
	width: 100%;
	padding: 8px;
	border: none;
	resize: vertical;
	min-height: 120px;
	border-bottom: 1px solid ${THEME.colors.accentColor};
	font-size: ${THEME.fontSize.textDesktop}px;
	font-family: ${THEME.fonts.primaryFont};
	-webkit-rtl-ordering: logical;
	text-indent: 0;
	&:focus {
		outline-width: 0;
	}
`

export const AlertMessage = styled.span`
	font-size: ${THEME.fontSize.smallText}px;
	color: #333;
	padding-left: 8px;
`

export const Button = styled.button`
	margin-top: 10px;
	padding: 8px;
	width: 100%;
	display: flex;
	justify-content: left;
	border: none;
	max-width: 400px;
	color: ${THEME.colors.secondaryColor};
	background-color: ${THEME.colors.primaryColor};
	font-size: ${THEME.fontSize.textDesktop}px;
	font-family: ${THEME.fonts.primaryFont};
	cursor: pointer;
`
