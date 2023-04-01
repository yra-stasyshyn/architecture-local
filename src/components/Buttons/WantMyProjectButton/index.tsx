import Button from '@/components/Buttons/Button'
import { redirectToWhatsapp } from '@/utils/redirectToPage'
import THEME from '@/styles/theme'
import { RiWhatsappFill } from 'react-icons/ri'
import React from 'react'
import * as S from './styles'

const WantMyProjectButton = () => {
	return (
		<Button
			onClick={redirectToWhatsapp}
			style={{
				display: 'flex',
				justifyContent: 'space-between',
				border: `3px solid ${THEME.colors.accentColor}`,
				width: 220,
				padding: '5px 10px 7px 10px'
			}}
		>
			Quero meu projeto
			<S.IconWrapper>
				<RiWhatsappFill />
			</S.IconWrapper>
		</Button>
	)
}

export default WantMyProjectButton
