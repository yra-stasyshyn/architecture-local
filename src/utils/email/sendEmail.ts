import nodemailer from 'nodemailer'

const sendEmail = async (html: string, receiver: string, subject: string) => {
	const transporter = nodemailer.createTransport({
		host: process.env.SMTP_HOST,
		port: parseInt(process.env.SMTP_PORT || '2525'),
		auth: {
			user: process.env.SMTP_USER,
			pass: process.env.SMTP_PASS
		}
	})
	const mailOptions = {
		from: process.env.SMTP_USER,
		to: receiver,
		subject,
		html
	}

	await transporter.sendMail(mailOptions)
}

export default sendEmail
