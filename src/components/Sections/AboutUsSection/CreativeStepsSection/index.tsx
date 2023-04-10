import React from 'react'
import CreativeStep from '@/components/CreativeStep'
import * as S from './styles'
import Text from '@/components/Text'
const CreativeStepsSection = () => {
	return (
		<S.Wrapper>
			<S.SectionTitleDiv>
				<Text>
					<h3>/ como fazemos </h3>
				</Text>
			</S.SectionTitleDiv>
			<S.StepsGrid>
				<CreativeStep
					stepNumber={1}
					stepTitle={'demanda'}
					stepImageSrc={'/img/al-process-01.svg'}
				>
					O projeto sempre se inicia com a demanda trazida pelo cliente no
					briefieng – nossa maneira de investigar quais as necessidades e
					expectativas particulares em cada caso.
				</CreativeStep>
				<CreativeStep
					stepNumber={2}
					stepTitle={'contexto'}
					stepImageSrc={'/img/al-process-02.svg'}
				>
					Em seguida, partimos para o que é o centro da prática do estúdio: o
					estudo e a análise do local e do contexto em torno da demanda.
				</CreativeStep>
				<CreativeStep
					stepNumber={3}
					stepTitle={'criação'}
					stepImageSrc={'/img/al-process-03.svg'}
				>
					Só então iniciamos o nosso processo de criação: um momento de mergulho
					absoluto no projeto, que envolve estudar, testar, fazer, refazer e,
					sobretudo, costurar todas as premissas envolvidas.
				</CreativeStep>
				<CreativeStep
					stepNumber={4}
					stepTitle={'projeto'}
					stepImageSrc={'/img/al-process-04.svg'}
				>
					Ao final deste processo e das validações intermediáras, que garantem
					maior proximidade com o cliente, atingimos o resultado esperado: um
					projeto coerente e assertivo, capaz de concretizar novas ideias.
				</CreativeStep>
			</S.StepsGrid>
		</S.Wrapper>
	)
}

export default CreativeStepsSection
