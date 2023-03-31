import React from 'react'
import * as S from './styles'
import Text from '@/components/Text'
import MinimalisticLogo from '@/components/Logos/MinimalisticLogo'
const PhilosophySection = () => {
	return (
		<S.Wrapper>
			<Text width={1000}>
				<h1>Prática criativa comprometida com o contexto</h1>
				<br />
				<br />
				<p>
					ARQUITETURA LOCAL é um estúdio de arquitetura e design baseado em Belo
					Horizonte, Minas Gerais, que se dedica a projetos de diferentes
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
			<MinimalisticLogo />
		</S.Wrapper>
	)
}

export default PhilosophySection
