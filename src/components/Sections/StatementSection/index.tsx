import React from 'react'
import * as S from './styles'
import Text from '@/components/Text'
import { useIsBellowHeroSection } from '@/utils/useIsBellowHeroSection'
const StatementSection = () => {
	const [isVisible, setIsVisible] = React.useState(false)
	const isBellowHeroSection = useIsBellowHeroSection()

	React.useEffect(() => {
		if (isBellowHeroSection) {
			setIsVisible(true)
		}
	}, [isBellowHeroSection])

	return (
		<S.Wrapper isVisible={isVisible}>
			<Text>
				<div>
					<h1>Criamos projetos autênticos para pessoas e empresas</h1>
				</div>
				<div>
					<h1>que buscam melhorar vidas e cidades.</h1>
				</div>
			</Text>
		</S.Wrapper>
	)
}

export default StatementSection
