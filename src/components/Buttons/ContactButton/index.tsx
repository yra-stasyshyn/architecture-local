import { RiWhatsappFill } from 'react-icons/ri'
import React from 'react'
import * as S from './styles'

const ContactButton = ({ style }: { style?: React.CSSProperties }) => {
	return (
		<S.Button style={style}>
			Fale com a gente!
			<RiWhatsappFill size={18} />
		</S.Button>
	)
}

export default ContactButton
