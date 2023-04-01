import React from 'react'
import * as S from './styles'
import Text from '@/components/Text'
import { doOnInterval } from '@/utils/doOnInterval'

const PhilosophySection = () => {
	const [imageIndex, setImageIndex] = React.useState(1)
	doOnInterval(
		() => setImageIndex(imageIndex + 1 > 5 ? 1 : imageIndex + 1),
		1000
	)
	return (
		<S.Wrapper>
			<S.Content>
				<S.TitleWrapper>
					<Text>
						<h1>Prática criativa comprometida com o contexto</h1>
					</Text>
				</S.TitleWrapper>
				<S.ParagraphWrapper>
					<Text>
						<p>
							ARQUITETURA LOCAL é um estúdio de arquitetura e design baseado em
							Belo Horizonte, Minas Gerais, que se dedica a projetos de
							diferentes escalas e categorias, sempre desenvolvidos a partir do
							entendimento profundo das demandas de seus clientes e do local em
							torno de cada proposta.
						</p>
						<br />
						<p>
							Essa são os dois sentidos que orientam o trabalho do escritório:
							uma lente focada na demanda específica e outra com vista
							panorâmica do lugar, do contexto e da atualidade.
						</p>
					</Text>
				</S.ParagraphWrapper>
			</S.Content>
			<S.ImageWrapper>
				<img
					src={`./img/al-logo-${imageIndex}.svg`}
					alt={''}
					height={250}
					width={250}
				/>
			</S.ImageWrapper>
		</S.Wrapper>
	)
}

export default PhilosophySection
