import { Meta, Args, StoryFn } from '@storybook/react'
import Button from './index'
import React from 'react'
import THEME from '@/styles/theme'
import storiesThemedConfigArgs from '../../../../.storybook/storiesThemedConfigArgs'

export default {
	title: 'Button',
	component: Button,
	args: {
		text: 'Button',
		textColor: THEME.colors.primaryColor,
		backgroundColor: THEME.colors.secondaryColor,
		fontSize: 20
	},
	argTypes: {
		fontSize: storiesThemedConfigArgs.fontSize,
		backgroundColor: storiesThemedConfigArgs.colorPalette,
		textColor: storiesThemedConfigArgs.colorPalette
	}
} as Meta

export const AButton: StoryFn = (args: Args) => (
	<Button
		bgColor={args.backgroundColor}
		textColor={args.textColor}
		fontSize={args.fontSize}
	>
		{args.text}
	</Button>
)
