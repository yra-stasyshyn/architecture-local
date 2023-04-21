import React from 'react'
import * as S from './styles'
import EmailForm from '@/components/EmailForm'
import Statement from '@/components/Statement'
import ContactButton from '@/components/Buttons/ContactButton'
import { useWindowDimensions } from '@/utils/useWindowDimensions'
import THEME from '@/styles/theme'

const ContactUsSection = React.forwardRef<HTMLDivElement>((props, ref) => {
	const [statement, setStatement] = React.useState(<></>)
	const windowDimension = useWindowDimensions()

	React.useEffect(() => {
		if (windowDimension.windowWidth < THEME.screenSize.mobile) {
			setStatement(
				<>
					Estamos aqui para <br />
					te ajudar aconcretizar <br />
					uma ideia.
				</>
			)
		} else {
			setStatement(
				<>
					Estamos aqui para te ajudar a<br />
					concretizar uma ideia.
				</>
			)
		}
	}, [windowDimension])
	return (
		<S.Wrapper ref={ref}>
			<S.StatementDiv>
				<Statement>{statement}</Statement>
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
