import withGlobalStyles from './withGlobalStyles'

export const parameters = {
	actions: { argTypesRegex: '^on[A-Z].*' },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/
		}
	},
	layout: 'centered',
	darkMode: {
		current: 'dark',
		stylePreview: true
	}
}

export const decorators = [withGlobalStyles]
