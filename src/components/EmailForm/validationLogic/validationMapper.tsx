import { ClientAcquisitionFormData } from '@/components/EmailForm/validationLogic/types'
import Validator from '@/components/EmailForm/validationLogic/validator'

export type ValidationMapper = {
	[K in keyof ClientAcquisitionFormData]: (a: any) => Validator
}

export const fieldToValidator: ValidationMapper = {
	name: (value: string): Validator => {
		return new Validator(value)
			.isNotEmpty()
			.hasMinLength(2)
			.regex(/^[A-Za-z\s]+$/)
	},
	email: (value: string): Validator => {
		return new Validator(value).isNotEmpty().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
	},
	phone: (value: string): Validator => {
		return new Validator(value)
			.isNotEmpty()
			.hasMinLength(11)
			.regex(/^[0-9]+$/)
	},
	message: (value: string): Validator => {
		return new Validator(value).isNotEmpty().hasMinLength(2)
	}
}
