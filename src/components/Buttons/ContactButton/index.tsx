import { RiWhatsappFill } from 'react-icons/ri'
import React from 'react'
import * as S from './styles'
import { redirectToWhatsapp } from '@/utils/redirectToPage'

const ContactButton = ({
	style,
	children
}: {
	style?: React.CSSProperties
	children: string
}) => {
	return (
		<S.Button style={style} onClick={redirectToWhatsapp}>
			{children}
			<RiWhatsappFill size={18} />
		</S.Button>
	)
}

export default ContactButton
