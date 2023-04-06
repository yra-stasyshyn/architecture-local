import { ClientAcquisitionFormData } from '@/components/EmailForm'

const sendClientAcquisitionEmail = async (
	formData: ClientAcquisitionFormData
) => {
	await fetch('/api/send-email-client-acquisition', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(formData)
	})
}

export default sendClientAcquisitionEmail
