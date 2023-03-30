import React from 'react'
import * as S from './styles'
import Text from '@/components/Text'
import THEME from '@/styles/theme'
const StatementSection = () => {
	return (
		<S.Wrapper>
			<Text fontWeight={THEME.fontWeight.semiBold}>
				<p>
					Criamos projetos personalizados e autênticos para pessoas e empresas
					que buscam melhorar vidas e cidades.
				</p>
			</Text>
		</S.Wrapper>
	)
}

export default StatementSection
