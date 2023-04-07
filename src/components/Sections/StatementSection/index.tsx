import React from 'react'
import * as S from './styles'
import Text from '@/components/Text'
import useScrollPosition from '@/utils/useScrollPosition'
const StatementSection = () => {
	const [isVisible, setIsVisible] = React.useState(false)
	const scrollPosition = useScrollPosition()

	React.useEffect(() => {
		if (scrollPosition > window.innerHeight / 2) {
			setIsVisible(true)
		}
	}, [scrollPosition])

	return (
		<S.Wrapper isVisible={isVisible}>
			<Text style={{ display: 'flex', justifyContent: 'center' }}>
				<h1 style={{ maxWidth: 1000 }}>
					Criamos projetos autênticos para pessoas e empresas que buscam
					melhorar vidas e cidades.
				</h1>
			</Text>
		</S.Wrapper>
	)
}

export default StatementSection
