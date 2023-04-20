import React from 'react'
import * as S from './styles'
import Statement from '@/components/Statement'
import { useWindowDimensions } from '@/utils/useWindowDimensions'
import THEME from '@/styles/theme'

const StatementSection = () => {
	const [statement, setStatement] = React.useState(<></>)
	const windowDimension = useWindowDimensions()

	React.useEffect(() => {
		if (windowDimension.windowWidth < THEME.screenSize.mobile) {
			setStatement(
				<>
					Criamos projetos <br />
					autênticos para <br />
					pessoas e empresas <br />
					que buscam <br />
					melhorar vidas e <br />
					cidades.
				</>
			)
		} else {
			setStatement(
				<>
					Criamos projetos autênticos para <br />
					pessoas e empresas que buscam <br />
					melhorar vidas e cidades.
				</>
			)
		}
	}, [windowDimension])

	return (
		<S.Wrapper>
			<Statement>{statement}</Statement>
		</S.Wrapper>
	)
}

export default StatementSection
