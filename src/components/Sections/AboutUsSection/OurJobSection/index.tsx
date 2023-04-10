import React from 'react'
import AccordionTab from '@/components/AccordionTab'
import * as S from './styles'
import Text from '@/components/Text'
import ContactButton from '@/components/Buttons/ContactButton'

const OurJobSection = () => {
	return (
		<S.Wrapper>
			<S.Content>
				<S.TitleWrapper>
					<Text>
						<h3>/ o que fazemos</h3>
						<br />
						<br />
						<h2>
							Somos um estúdio de arquitetura e design, serviços que podem ser
							contratados individualmente ou em conjunto, para potencializar
							resultados.
						</h2>
					</Text>
					<ContactButton>Quero meu projeto</ContactButton>
				</S.TitleWrapper>
				<S.AccordionWrapper>
					<Text>
						<p>
							Com criatividade e estratégia, atuamos principalmente nas áreas
							de:
						</p>
						<br />
						<br />
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
