import React from 'react'
import AccordionTab from '@/components/AccordionTab'
import * as S from './styles'
import ContactButton from '@/components/Buttons/ContactButton'

const OurJobSection = () => {
	return (
		<S.Wrapper>
			<S.Content>
				<S.TitleWrapper>
					<h3>/ o que fazemos</h3>
					<h2>
						Somos um estúdio de arquitetura e design, serviços que podem ser
						contratados individualmente ou em conjunto, para potencializar
						resultados.
					</h2>
					<ContactButton>Quero meu projeto</ContactButton>
				</S.TitleWrapper>
				<S.AccordionWrapper>
					<p>
						Com criatividade e estratégia, atuamos principalmente nas áreas de:
					</p>
					<br />
					<br />
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
