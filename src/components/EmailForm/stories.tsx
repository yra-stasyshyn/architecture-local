import { Meta, StoryFn } from '@storybook/react'
import React from 'react'
import EmailForm from './index'

export default {
	title: 'EmailForm',
	component: EmailForm
} as Meta

export const Default: StoryFn = () => (
	<div style={{ backgroundColor: 'white', padding: 20 }}>
		<EmailForm />
	</div>
)
