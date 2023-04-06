export default class Validator {
	value: any
	isValid: boolean
	message: string
	constructor(value: any) {
		this.value = value
		this.isValid = true
		this.message = ''
	}
	hasMinLength(length: number): Validator {
		const hasMinimalLength = this.value.length >= length
		if (!hasMinimalLength && this.message == '')
			this.message = `Necessário pelo menos ${length} caracteres.`
		if (this.isValid) this.isValid = hasMinimalLength
		return this
	}

	regex(exp: RegExp): Validator {
		const obeysRegex = exp.test(this.value)
		if (!obeysRegex && this.message == '') this.message = `Valor inválido.`
		if (this.isValid) this.isValid = obeysRegex
		return this
	}
	isNotEmpty(): Validator {
		const isItEmpty = this.value == ''
		if (isItEmpty && this.message == '') this.message = `Campo necessário.`
		if (this.isValid) this.isValid = !isItEmpty
		return this
	}
}
