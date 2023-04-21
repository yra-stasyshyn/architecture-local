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

const Footer = () => (
	<S.Wrapper>
		<S.ContentWrapper>
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
		</S.ContentWrapper>
		<S.SignatureWrapper>
			<span>
				Todos os direitos reservados. © 2023 Arquitetura Local. Desenvolvido por
				Pedro Dardengo.
			</span>
			<S.IconDiv>
				<FaGithubSquare onClick={redirectToDevGitHub} />
				<FaLinkedin onClick={redirectToDevLinkedin} />
			</S.IconDiv>
		</S.SignatureWrapper>
	</S.Wrapper>
)

export default Footer
