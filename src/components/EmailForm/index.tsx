import React from 'react'
import * as S from './styles'
import sendClientAcquisitionEmail from '@/utils/email/sendClientAcquisitionEmail'
import { AlertMessage } from './styles'
import {
	ClientAcquisitionFormData,
	noValue,
	noAlert,
	allInvalid,
	allValid,
	ValidationMessage,
	ValidationState
} from '@/components/EmailForm/validationLogic/types'
import {
	fieldToValidator,
	ValidationMapper
} from '@/components/EmailForm/validationLogic/validationMapper'

const EmailForm = ({ style }: { style?: React.CSSProperties }) => {
	const [formData, setFormData] =
		React.useState<ClientAcquisitionFormData>(noValue)
	const [validationMessage, setValidationMessage] =
		React.useState<ValidationMessage>(noAlert)
	const [validationState, setValidationState] =
		React.useState<ValidationState>(allInvalid)

	const validateFields = () => {
		setValidationState({
			name: fieldToValidator.name(formData.name).isValid,
			email: fieldToValidator.email(formData.email).isValid,
			phone: fieldToValidator.phone(formData.phone).isValid,
			message: fieldToValidator.message(formData.message).isValid
		})
	}

	const handleOnBlur = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	): void => {
		const name = event.target.name
		setValidationMessage({
			...validationMessage,
			[name]: fieldToValidator[name as keyof ValidationMapper](
				formData[name as keyof ClientAcquisitionFormData]
			).message
		})
	}
	const handleInputChange = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	): void => {
		setFormData({
			...formData,
			[event.target.name]: event.target.value
		})
		validateFields()
	}
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		validateFields()
		setValidationMessage({
			name: fieldToValidator.name(formData.name).message,
			email: fieldToValidator.email(formData.email).message,
			phone: fieldToValidator.phone(formData.phone).message,
			message: fieldToValidator.message(formData.message).message
		})
		event.preventDefault()
		if (JSON.stringify(validationState) == JSON.stringify(allValid)) {
			console.log('SENDING EMAIL')
			await sendClientAcquisitionEmail(formData)
		}
	}
	return (
		<S.FormContainer onSubmit={handleSubmit} style={style}>
			<S.Input
				type="text"
				id="name"
				name="name"
				placeholder="Nome"
				value={formData.name}
				onChange={handleInputChange}
				onBlur={handleOnBlur}
			/>
			<AlertMessage>{validationMessage.name}</AlertMessage>
			<S.Input
				type="email"
				id="email"
				name="email"
				placeholder="Email"
				value={formData.email}
				onChange={handleInputChange}
				onBlur={handleOnBlur}
			/>
			<AlertMessage>{validationMessage.email}</AlertMessage>
			<S.Input
				type="text"
				id="phone"
				name="phone"
				placeholder="Telefone"
				value={formData.phone}
				onChange={handleInputChange}
				onBlur={handleOnBlur}
			/>

			<AlertMessage>{validationMessage.phone}</AlertMessage>
			<S.TextArea
				id="message"
				name="message"
				placeholder="Message"
				value={formData.message}
				onChange={handleInputChange}
				onBlur={handleOnBlur}
			/>
			<AlertMessage>{validationMessage.message}</AlertMessage>
			<S.Button type="submit">{'enviar >'}</S.Button>
		</S.FormContainer>
	)
}

export default EmailForm
