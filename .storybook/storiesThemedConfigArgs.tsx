import THEME from '@/styles/theme'

const storiesThemedConfigArgs = {
	fontSize: {
		control: 'select',
		options: Object.values(THEME.fontSize)
	},
	colorPalette: {
		control: 'select',
		options: Object.values(THEME.colors)
	}
}

export default storiesThemedConfigArgs
