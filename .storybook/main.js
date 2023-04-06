module.exports = {
	stories: ['../src/**/stories.tsx'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions',
		'storybook-dark-mode'
	],
	framework: {
		name: '@storybook/nextjs',
		options: {}
	},
	staticDirs: ['../public'],
	docs: {
		autodocs: true
	}
}
