// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { render } from '@react-email/render'
import sendEmail from '@/utils/email/sendEmail'
import ClientAcquisitionEmail from '@/templates/clientAcquisitionEmail'
import { ClientAcquisitionFormData } from '@/components/EmailForm/validationLogic/types'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const formData: ClientAcquisitionFormData = req.body
	const html_body = render(await ClientAcquisitionEmail(formData))
	await sendEmail(
		html_body,
		process.env.SMTP_USER || '',
		'Captação de clientes - Site Arq Local'
	)
	return res.status(200).json({ message: 'Client Acquisition Email was sent' })
}
