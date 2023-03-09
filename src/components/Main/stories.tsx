import Main from '.'
import { Meta, Args, StoryFn } from '@storybook/react'
export default {
	title: 'MainPage',
	component: Main,
	args: {
		title: 'A title',
		description: 'A description'
	}
} as Meta

export const BasicPage: StoryFn = (args: Args) => (
	<Main title={args.title} description={args.description} {...args} />
)
