import { createGlobalStyle } from 'styled-components'
import THEME from '@/styles/theme'

const GlobalStyles = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		::selection {
			background-color: ${THEME.colors.accentColor};
			color: ${THEME.colors.secondaryColor}
		}
		-webkit-background-clip: padding-box;
		background-clip: padding-box;
	}

	html {
		font-size: 62.5%;
	}

	html, body, #__next {
		height: 100%;
	}

	body {
		font-family: 'Source Sans Pro', sans-serif;
	}

`

export default GlobalStyles
