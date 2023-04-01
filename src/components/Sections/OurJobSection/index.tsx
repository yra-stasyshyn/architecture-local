import React from 'react'
import AccordionTab from 'src/components/AccordionTab'
import * as S from './styles'
import Text from '@/components/Text'
import { SectionHeader } from './styles'

const OurJobSection = () => {
	return (
		<S.Wrapper>
			<SectionHeader>
				<Text>
					<h2>/o que fazemos</h2>
				</Text>
			</SectionHeader>
			<S.Content>
				<S.TitleWrapper>
					<Text>
						<h1>
							Somos um estúdio de arquitetura e design, serviços que podem ser
							contratados individualmente ou em conjunto, para potencializar
							resultados.
						</h1>
					</Text>
				</S.TitleWrapper>
				<S.AccordionWrapper>
					<Text style={{ position: 'absolute', top: -70 }}>
						<p>
							Com criatividade e estratégia, atuamos principalmente nas áreas
							de:
						</p>
					</Text>
					<AccordionTab title={'Arquitetura'}>Top arquiteturas.</AccordionTab>
					<AccordionTab title={'Design'}>
						Bla bla bla bla:
						<br /> - Branding
						<br /> - Comunicação Visual
						<br /> - Editorial
						<br /> - Naming
					</AccordionTab>
				</S.AccordionWrapper>
			</S.Content>
		</S.Wrapper>
	)
}

export default OurJobSection

// <ul>
// <li>Branding</li>
// <li>Comunicação Visual</li>
// <li>Editorial</li>
// <li>Naming</li>
// </ul>
