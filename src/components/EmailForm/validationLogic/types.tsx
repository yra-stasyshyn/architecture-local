export type ClientAcquisitionFormData = {
	name: string
	email: string
	phone: string
	message: string
}

export type ValidationMessage = {
	[K in keyof ClientAcquisitionFormData]: string
}

export type ValidationState = {
	[K in keyof ClientAcquisitionFormData]: boolean
}

export const noValue: ClientAcquisitionFormData = {
	name: '',
	email: '',
	phone: '',
	message: ''
}

export const noAlert: ValidationMessage = {
	name: '',
	email: '',
	phone: '',
	message: ''
}

export const allInvalid: ValidationState = {
	name: false,
	email: false,
	phone: false,
	message: false
}

export const allValid: ValidationState = {
	name: true,
	email: true,
	phone: true,
	message: true
}
