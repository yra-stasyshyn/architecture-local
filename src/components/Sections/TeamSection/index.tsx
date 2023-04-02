import React from 'react'
import AccordionTab from 'src/components/AccordionTab'
import * as S from './styles'
import Text from '@/components/Text'
import { SectionHeader } from './styles'

const TeamSection = () => {
	return (
		<S.Wrapper>
			<SectionHeader>
				<Text>
					<h2>/equipe</h2>
				</Text>
			</SectionHeader>
			<S.Content>
				<S.TitleWrapper>
					<Text>
						<h2>
							Somos pessoas trabalhando para viabilizar os desejos de outras
							pessoas.
						</h2>
					</Text>
				</S.TitleWrapper>
				<S.AccordionWrapper>
					<AccordionTab title={'Mariana Lima . Fundadora, Diretora'}>
						Nasceu em Belo Horizonte, em 1996 e formou-se em Arquitetura e
						Urbanismo na Escola de Arquitetura da Universidade Federal de Minas
						Gerais. Em seu premiado trabalho final de graduação, dedicou-se a
						investigar os exemplares arquitetônicos e o contexto urbano de sua
						cidade natal, que culminou no livro Os Lugares e as Lições – Guia de
						Arquitetura de Belo Horizonte. Iniciou sua carreira em escritórios
						de arquitetura renomados, como Arquitetos Associados, BCMF
						Arquitetos e Gustavo Penna Arquiteto & Associados, antes de fundar
						sua firma, a Arquitetura Local, em 2021.
					</AccordionTab>
					<AccordionTab
						title={'Marcos Lourenço . Fundador, Coordenador Criativo'}
					>
						Nasceu em Belo Horizonte, em 1996 e formou-se em Arquitetura e
						Urbanismo na Escola de Arquitetura da Universidade Federal de Minas
						Gerais. Em seu premiado trabalho final de graduação, dedicou-se a
						investigar os exemplares arquitetônicos e o contexto urbano de sua
						cidade natal, que culminou no livro Os Lugares e as Lições – Guia de
						Arquitetura de Belo Horizonte. Iniciou sua carreira em escritórios
						de arquitetura renomados, como Arquitetos Associados, BCMF
						Arquitetos e Gustavo Penna Arquiteto & Associados, antes de fundar
						sua firma, a Arquitetura Local, em 2021.
					</AccordionTab>
					<AccordionTab title={'Colaboradores'}>Fulano & Beltrano</AccordionTab>
				</S.AccordionWrapper>
			</S.Content>
		</S.Wrapper>
	)
}

export default TeamSection
