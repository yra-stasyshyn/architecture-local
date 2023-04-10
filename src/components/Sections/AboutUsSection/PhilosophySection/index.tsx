import React from 'react'
import * as S from './styles'
import { useOnInterval } from '@/utils/useOnInterval'
import NextImage from 'next/image'
import Statement from '@/components/Statement'

const PhilosophySection = React.forwardRef<HTMLDivElement>((props, ref) => {
	const [imageIndex, setImageIndex] = React.useState(1)
	useOnInterval(
		() => setImageIndex(imageIndex + 1 > 5 ? 1 : imageIndex + 1),
		1000
	)
	return (
		<S.Wrapper ref={ref}>
			<S.StatementDiv>
				<Statement>Prática criativa comprometida com o contexto.</Statement>
			</S.StatementDiv>
			<S.Content>
				<S.ImagesWrapper>
					<NextImage
						src={`/img/al-logo-orange-1.svg`}
						alt={''}
						height={150}
						width={300}
						style={{ opacity: imageIndex == 1 ? '1' : '0' }}
					/>
					<NextImage
						src={`/img/al-logo-orange-2.svg`}
						alt={''}
						height={150}
						width={300}
						style={{ opacity: imageIndex == 2 ? '1' : '0' }}
					/>
					<NextImage
						src={`/img/al-logo-orange-3.svg`}
						alt={''}
						height={150}
						width={300}
						style={{ opacity: imageIndex == 3 ? '1' : '0' }}
					/>
					<NextImage
						src={`/img/al-logo-orange-4.svg`}
						alt={''}
						height={150}
						width={300}
						style={{ opacity: imageIndex == 4 ? '1' : '0' }}
					/>
					<NextImage
						src={`/img/al-logo-orange-5.svg`}
						alt={''}
						height={150}
						width={300}
						style={{ opacity: imageIndex == 5 ? '1' : '0' }}
					/>
				</S.ImagesWrapper>
				<S.ParagraphWrapper>
					<h2>
						Somos um estúdio de arquitetura e design que coloca as pessoas no
						centro das decisões.
					</h2>
					<br />
					<br />
					<p>
						Nossos projetos, de diferentes escalas e categorias, são sempre
						desenvolvidos a partir do entedimento profundo das demandas de cada
						cliente e do local em torno de cada demanda. Dessa forma, geramos
						impacto positivo para nossos clientes e para o mundo, criando
						conexões entre pessoas, lugares, cidade e natureza.
					</p>
					<br />
					<p>
						Para nós, a boa arquitetura é capaz de acolher e melhorar a vida
						cotidiana. Focamos no bem estar das pessoas, na harmonia das
						construções com o contexto e na transparência das decisões.
					</p>
				</S.ParagraphWrapper>
			</S.Content>
			<S.StatementDiv>
				<Statement>
					Uma lente focada na demanda específica e outra com vista panorâmica do
					lugar, do contexto e da atualidade.
				</Statement>
			</S.StatementDiv>
		</S.Wrapper>
	)
})
PhilosophySection.displayName = 'Philosophy Section'

export default PhilosophySection
