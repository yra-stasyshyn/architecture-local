import React from 'react'
import * as S from './styles'
import Text from '@/components/Text'
import EmailForm from '@/components/EmailForm'
import ContactUsIconBox from '@/components/ContactUsIconBox'

const ContactUsSection = React.forwardRef<HTMLDivElement>((props, ref) => {
	return (
		<S.Wrapper ref={ref}>
			<S.TitleWrapper>
				<Text>
					<h3>/contato</h3>
					<br />
					<br />
				</Text>
				<Text>
					<h2>Estamos aqui para te ajudar a concretizar uma ideia.</h2>
					<br />
					<br />
					<h3>O que você deseja hoje?</h3>
				</Text>
			</S.TitleWrapper>
			<S.Content>
				<S.FormContainer>
					<EmailForm />
				</S.FormContainer>
				<S.ContactContainer>
					<Text style={{ paddingLeft: 8 }}>
						<p>
							Arquitetura Local
							<br />
							<br />
							Belo Horizonte, Minas Gerais - Brasil
							<br />
							Arquitetura e Design
							<br />
							<br />
							contato@local.arq.br
							<br />
							+55 31 972670550
						</p>
					</Text>
					<ContactUsIconBox />
				</S.ContactContainer>
			</S.Content>
		</S.Wrapper>
	)
})

ContactUsSection.displayName = 'Contact Us Section'
export default ContactUsSection
