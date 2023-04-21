import React from 'react'
import * as S from './styles'
import Statement from '@/components/Statement'
import { useWindowDimensions } from '@/utils/useWindowDimensions'
import THEME from '@/styles/theme'

const StatementSection2 = () => {
	const [statement, setStatement] = React.useState(<></>)
	const windowDimension = useWindowDimensions()

	React.useEffect(() => {
		if (windowDimension.windowWidth < THEME.screenSize.mobile) {
			setStatement(
				<>
					Prática criativa <br />
					comprometida <br />
					com o contexto.
				</>
			)
		} else {
			setStatement(
				<>
					Prática criativa comprometida <br />
					com o contexto.
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

export default StatementSection2
