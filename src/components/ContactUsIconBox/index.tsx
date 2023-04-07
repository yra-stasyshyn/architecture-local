import {
	RiFacebookBoxFill,
	RiInstagramFill,
	RiLinkedinBoxFill,
	RiPinterestFill,
	RiWhatsappFill
} from 'react-icons/ri'
import {
	redirectToFacebook,
	redirectToInstagram,
	redirectTolinkedin,
	redirectToPinterest,
	redirectToWhatsapp
} from '@/utils/redirectToPage'
import * as S from './styles'
import React from 'react'

const ContactUsIconBox = () => {
	const iconStyle = { cursor: 'pointer' }
	return (
		<S.Wrapper>
			<RiWhatsappFill
				size={18}
				onClick={redirectToWhatsapp}
				style={iconStyle}
			/>
			<RiInstagramFill
				size={18}
				onClick={redirectToInstagram}
				style={iconStyle}
			/>
			<RiFacebookBoxFill
				size={18}
				onClick={redirectToFacebook}
				style={iconStyle}
			/>
			<RiLinkedinBoxFill
				size={18}
				onClick={redirectTolinkedin}
				style={iconStyle}
			/>
			<RiPinterestFill
				size={18}
				onClick={redirectToPinterest}
				style={iconStyle}
			/>
		</S.Wrapper>
	)
}

export default ContactUsIconBox
