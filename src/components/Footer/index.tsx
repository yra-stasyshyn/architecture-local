import * as S from './styles'
import ContactUsIconBox from '@/components/ContactUsIconBox'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import {
	redirectToDevGitHub,
	redirectToDevLinkedin
} from '@/utils/redirectToPage'
import MinimalisticLogo from '@/components/Logos/MinimalisticLogo'
import THEME from '@/styles/theme'
import { scrollToStart } from '@/utils/scrollToRef'
import React from 'react'
import { useWindowDimensions } from '@/utils/useWindowDimensions'
import InstagramFeed from '@/components/InstagramFeed'

const Footer = () => {
	const [signature, setSignature] = React.useState(<></>)
	const windowDimension = useWindowDimensions()

	React.useEffect(() => {
		if (windowDimension.windowWidth < THEME.screenSize.tablet) {
			setSignature(
				<>
					Todos os direitos reservados. © 2023 Arquitetura Local.
					<br />
					Desenvolvido por Pedro Dardengo.
				</>
			)
		} else {
			setSignature(
				<>
					Todos os direitos reservados. © 2023 Arquitetura Local. Desenvolvido
					por Pedro Dardengo.
				</>
			)
		}
	}, [windowDimension])
	return (
		<S.Wrapper>
			<S.ContentWrapper>
				<S.UpperContent>
					<InstagramFeed />
				</S.UpperContent>
				<S.MiddleContent>
					<S.LeftElement>
						<ContactUsIconBox />
						<p>
							contato@local.arq.br
							<br />
							+55 31 972670550
						</p>
					</S.LeftElement>
					<S.RightElement>
						<MinimalisticLogo
							sizeMultiplier={0.4}
							highlightColorOnHover={THEME.colors.accentColor}
							onClick={scrollToStart}
						/>
					</S.RightElement>
				</S.MiddleContent>
				<S.SignatureWrapper>
					<p>
						{signature}
						<S.IconDiv>
							<FaGithubSquare onClick={redirectToDevGitHub} />
							<FaLinkedin onClick={redirectToDevLinkedin} />
						</S.IconDiv>
					</p>
				</S.SignatureWrapper>
			</S.ContentWrapper>
		</S.Wrapper>
	)
}

export default Footer
