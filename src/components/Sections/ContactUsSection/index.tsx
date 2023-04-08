import React from 'react'
import * as S from './styles'
import Text from '@/components/Text'
import EmailForm from '@/components/EmailForm'
import Statement from '@/components/Statement'
import ContactButton from '@/components/Buttons/ContactButton'

const ContactUsSection = React.forwardRef<HTMLDivElement>((props, ref) => {
	return (
		<S.Wrapper ref={ref}>
			<S.StatementWrapper>
				<Statement>
					Estamos aqui para te ajudar a concretizar uma ideia.
				</Statement>
			</S.StatementWrapper>

			<S.Content>
				<S.ActionContainer>
					<Text style={{ margin: 0 }}>
						<h2>Vamos juntos realizar o seu projeto?</h2>
					</Text>
					<ContactButton style={{ marginTop: 20 }} />
				</S.ActionContainer>
				<S.FormContainer>
					<Text>
						<p>
							Se preferir, preencha os campos abaixo e entraremos em contato com
							você.
						</p>
					</Text>
					<EmailForm />
				</S.FormContainer>
			</S.Content>
		</S.Wrapper>
	)
})

ContactUsSection.displayName = 'Contact Us Section'
export default ContactUsSection
