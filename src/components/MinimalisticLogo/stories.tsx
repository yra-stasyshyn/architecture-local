import MinimalisticLogo from './index'
import { Meta, Args, StoryFn } from '@storybook/react'
import THEME from '@/styles/theme'
import storiesThemedConfigArgs from '../../../.storybook/storiesThemedConfigArgs'

export default {
	title: 'Logo',
	component: MinimalisticLogo,
	args: {
		sizeMultiplier: 1,
		color: THEME.colors.primaryColor
	},
	argTypes: {
		sizeMultiplier: { control: { type: 'range', min: 0, max: 4, step: 0.05 } },
		color: storiesThemedConfigArgs.colorPalette
	}
} as Meta

export const Default: StoryFn = (args: Args) => (
	<MinimalisticLogo sizeMultiplier={args.sizeMultiplier} color={args.color} />
)
