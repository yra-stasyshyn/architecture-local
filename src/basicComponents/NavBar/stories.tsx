import NavBar from '.'
import { Meta, StoryFn } from '@storybook/react'
import ManyOptionsNavBar from '@/components/NavBars/ManyOptionsNavBar'

export default {
	title: 'NavBar',
	component: NavBar
} as Meta

export const Default: StoryFn = () => <ManyOptionsNavBar />
