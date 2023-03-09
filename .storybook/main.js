module.exports = {
	stories: [
		'../src/basicComponents/**/stories.tsx',
		'../src/components/**/stories.tsx'
	],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-interactions'
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
