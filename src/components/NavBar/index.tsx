import * as S from './styles'
import React from 'react'
import THEME from '@/styles/theme'
import Button from '@/components/Buttons/Button'
import { useWindowDimensions } from '@/utils/useWindowDimensions'
import { useIsBellowNthSection } from '@/utils/useIsBellowNthSection'
import { DropDownBurgerButton } from '@/components/Buttons/DropDownBurguerButton'
import InstitutionalLogo from '@/components/Logos/InstitutionalLogo'

export type NavBarProps = {
	style?: React.CSSProperties
}

const NavBar = ({ style }: NavBarProps) => {
	const windowWidth = useWindowDimensions().windowWidth
	const shadowHeight = windowWidth < 500 ? 100 : 150
	const shadowContainer = <S.GradientContainer height={shadowHeight} />
	const [elementsColor, setElementsColor] = React.useState(
		THEME.colors.secondaryColor
	)
	const [backgroundColor, setBackgroundColor] = React.useState('transparent')
	const [navBarStyle, setNavBarStyle] = React.useState({})
	const [navBarShadow, setNavBarShadow] = React.useState(shadowContainer)
	function scrollsToBeginning() {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}
	let toRender: JSX.Element = (
		<div>
			<Button textColor={elementsColor}>sobre</Button>
			<Button textColor={elementsColor}>projetos</Button>
			<Button textColor={elementsColor}>contato</Button>
		</div>
	)
	if (windowWidth < 800) {
		toRender = (
			<DropDownBurgerButton
				iconColor={elementsColor}
				iconSize={windowWidth < 500 ? 25 : 35}
			>
				<Button>sobre</Button>
				<Button>projetos</Button>
				<Button>contato</Button>
			</DropDownBurgerButton>
		)
	}
	const isBellowHeroSection = useIsBellowNthSection()

	React.useEffect(() => {
		function handleScroll() {
			if (isBellowHeroSection) {
				setElementsColor(THEME.colors.primaryColor)
				setBackgroundColor(THEME.colors.secondaryColor)
				setNavBarStyle({ top: 0, position: 'fixed' })
				setNavBarShadow(<></>)
			} else {
				setElementsColor(THEME.colors.secondaryColor)
				setNavBarStyle({})
				setBackgroundColor('transparent')
				setNavBarShadow(shadowContainer)
			}
		}
		return handleScroll()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isBellowHeroSection])
	return (
		<>
			<S.Wrapper
				backgroundColor={backgroundColor}
				style={{ ...style, ...navBarStyle }}
			>
				<S.ContentWrapper>
					<InstitutionalLogo
						color={elementsColor}
						sizeMultiplier={windowWidth < 500 ? 0.6 : 1}
						onClick={scrollsToBeginning}
						highlightColorOnHover={THEME.colors.accentColor}
					/>
					{toRender}
				</S.ContentWrapper>
			</S.Wrapper>
			{navBarShadow}
		</>
	)
}

export default NavBar
