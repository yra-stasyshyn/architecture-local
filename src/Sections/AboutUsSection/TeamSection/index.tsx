import React from 'react'
import AccordionTab from '@/components/AccordionTab'
import * as S from './styles'

const TeamSection = () => {
	return (
		<S.Wrapper>
			<S.Content>
				<S.TitleWrapper>
					<h3>/ equipe</h3>
					<br />
					<br />
					<h2>
						Somos pessoas trabalhando para viabilizar os desejos de outras
						pessoas.
					</h2>
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
						Natural de Marataízes/ES, vive em Belo Horizonte/MG, onde formou-se
						em Arquitetura e Urbanismo pela Escola de Arquitetura da
						Universidade Federal de Minas Gerais (UFMG). É também sócio do
						escritório Arquitetos Associados, onde atua desde 2017 e é coautor
						de projetos de projeção nacional, como a Pina Contemporânea, em São
						Paulo. Em 2021, com Mariana Lima, fundou o escritório Arquitetura
						Local.
					</AccordionTab>
					<AccordionTab title={'Colaboradores'}>Fulano & Beltrano</AccordionTab>
				</S.AccordionWrapper>
			</S.Content>
		</S.Wrapper>
	)
}

export default TeamSection
