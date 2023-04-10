import * as S from './styles'
import NextImage from 'next/image'
import ContactUsIconBox from '@/components/ContactUsIconBox'
import { FaGithubSquare, FaLinkedin } from 'react-icons/fa'
import {
	redirectToDevGitHub,
	redirectToDevLinkedin
} from '@/utils/redirectToPage'

const Footer = () => (
	<S.Wrapper>
		<S.ContentWrapper>
			<S.LeftElement>
				<NextImage
					src={'/img/AL_Logo_R02_branca.svg'}
					alt={'Arq Local Logo'}
					height={35}
					width={210}
				/>
			</S.LeftElement>
			<S.CenterElement>
				<ContactUsIconBox />
				<p>Prática comprometida com o contexto</p>
			</S.CenterElement>
			<S.RightElement>
				<p>
					contato@local.arq.br
					<br />
					+55 31 972670550
					<br />
					Belo Horizonte, Minas Gerais - Brasil
				</p>
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
