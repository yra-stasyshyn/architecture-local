import React from 'react'
import * as S from './styles'
import NextImage from 'next/image'
import Statement from '@/components/Statement'
import { useWindowDimensions } from '@/utils/useWindowDimensions'
import THEME from '@/styles/theme'
import { useOnInterval } from '@/utils/useOnInterval'

const PhilosophySection = React.forwardRef<HTMLDivElement>((props, ref) => {
	const [imageIndex, setImageIndex] = React.useState(1)
	const [statement, setStatement] = React.useState(<></>)
	const windowDimension = useWindowDimensions()
	useOnInterval(
		() => setImageIndex(imageIndex + 1 > 5 ? 1 : imageIndex + 1),
		1000
	)
	React.useEffect(() => {
		if (windowDimension.windowWidth < THEME.screenSize.mobile) {
			setStatement(
				<>
					Uma lente focada <br />
					na demanda específica <br />
					e outra com vista <br />
					panorâmica do lugar, <br />
					do contexto e da <br />
					atualidade.
				</>
			)
		} else {
			setStatement(
				<>
					Uma lente focada na demanda <br />
					específica e outra com vista <br />
					panorâmica do lugar, do contexto <br />e da atualidade.
				</>
			)
		}
	}, [windowDimension])

	return (
		<S.Wrapper ref={ref}>
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
						Para nós, a arquitetura e o design de qualidade são capazes de
						acolher e melhorar a vida, potencializando experiências cotidianas.
						Por isso, focamos no bem-estar das pessoas, na harmonia das soluções
						e na transparência das decisões.
					</p>
					<br />
					<p>
						Nossos projetos, de diferentes tipos e tamanhos, são sempre
						desenvolvidos a partir do olhar atento às demandas de cada cliente e
						ao seu contexto específico. Desenvolvemos propostas autênticas,
						atemporais e descomplicadas que possam ser vivenciadas em sua
						plenitude. Assim geramos impacto positivo para nossos clientes e
						para o mundo, criando conexões entre pessoas e lugares.
					</p>
				</S.ParagraphWrapper>
			</S.Content>
			<S.StatementDiv>
				<Statement>{statement}</Statement>
			</S.StatementDiv>
		</S.Wrapper>
	)
})
PhilosophySection.displayName = 'Philosophy Section'

export default PhilosophySection
