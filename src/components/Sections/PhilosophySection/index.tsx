import React from 'react'
import * as S from './styles'
import Text from '@/components/Text'
import { doOnInterval } from '@/utils/doOnInterval'
import NextImage from 'next/image'

const PhilosophySection = React.forwardRef<HTMLDivElement>((props, ref) => {
	const [imageIndex, setImageIndex] = React.useState(1)
	doOnInterval(
		() => setImageIndex(imageIndex + 1 > 5 ? 1 : imageIndex + 1),
		1000
	)
	return (
		<S.Wrapper ref={ref}>
			<S.TitleWrapper>
				<Text>
					<h1>Prática criativa comprometida com o contexto</h1>
					<br />
					<br />
				</Text>
			</S.TitleWrapper>

			<S.Content>
				<Text>
					<p>
						ARQUITETURA LOCAL é um estúdio de arquitetura e design baseado em
						Belo Horizonte, Minas Gerais, que se dedica a projetos de diferentes
						escalas e categorias, sempre desenvolvidos a partir do entendimento
						profundo das demandas de seus clientes e do local em torno de cada
						proposta.
					</p>
					<br />
					<p>
						Essa são os dois sentidos que orientam o trabalho do escritório: uma
						lente focada na demanda específica e outra com vista panorâmica do
						lugar, do contexto e da atualidade.
					</p>
				</Text>
				<S.ImagesWrapper>
					<NextImage
						src={`/img/al-logo-1.svg`}
						alt={''}
						height={150}
						width={300}
						style={{ opacity: imageIndex == 1 ? '1' : '0' }}
					/>
					<NextImage
						src={`/img/al-logo-2.svg`}
						alt={''}
						height={150}
						width={300}
						style={{ opacity: imageIndex == 2 ? '1' : '0' }}
					/>
					<NextImage
						src={`/img/al-logo-3.svg`}
						alt={''}
						height={150}
						width={300}
						style={{ opacity: imageIndex == 3 ? '1' : '0' }}
					/>
					<NextImage
						src={`/img/al-logo-4.svg`}
						alt={''}
						height={150}
						width={300}
						style={{ opacity: imageIndex == 4 ? '1' : '0' }}
					/>
					<NextImage
						src={`/img/al-logo-5.svg`}
						alt={''}
						height={150}
						width={300}
						style={{ opacity: imageIndex == 5 ? '1' : '0' }}
					/>
				</S.ImagesWrapper>
			</S.Content>
		</S.Wrapper>
	)
})

PhilosophySection.displayName = 'About Us Section'

export default PhilosophySection
