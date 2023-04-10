import React from 'react'
import * as S from './styles'
import EmailForm from '@/components/EmailForm'
import Statement from '@/components/Statement'
import ContactButton from '@/components/Buttons/ContactButton'

const ContactUsSection = React.forwardRef<HTMLDivElement>((props, ref) => {
	return (
		<S.Wrapper ref={ref}>
			<S.StatementDiv>
				<Statement>
					Estamos aqui para te ajudar a concretizar uma ideia.
				</Statement>
			</S.StatementDiv>

			<S.Content>
				<S.ActionContainer>
					<h2>Vamos juntos realizar o seu projeto?</h2>
					<ContactButton style={{ marginTop: 20 }}>
						Fale com a gente!
					</ContactButton>
				</S.ActionContainer>
				<S.FormContainer>
					<p>
						Se preferir, preencha os campos abaixo e entraremos em contato com
						você.
					</p>
					<EmailForm />
				</S.FormContainer>
			</S.Content>
		</S.Wrapper>
	)
})

ContactUsSection.displayName = 'Contact Us Section'
export default ContactUsSection
