import { Meta, Args, StoryFn } from '@storybook/react'
import React from 'react'
import { render } from '@react-email/render'
import ClientAcquisitionEmail from '@/templates/clientAcquisitionEmail/index'
import { ClientAcquisitionFormData } from '@/components/EmailForm'

export default {
	title: 'ClientAcquisitionEmailTemplate'
} as Meta

const formData: ClientAcquisitionFormData = {
	name: 'Jhon Testerman',
	email: 'test@test.com',
	phone: '5527999880308',
	message:
		'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}
export const Default: StoryFn = (args: Args) => (
	<iframe
		srcDoc={render(ClientAcquisitionEmail(formData))}
		style={{ width: 900, height: 900 }}
	/>
)
