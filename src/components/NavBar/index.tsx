import * as S from './styles'
import React from 'react'
import THEME from '@/styles/theme'
import MinimalisticLogo from '@/components/MinimalisticLogo'
import Button from '@/components/Buttons/Button'
import { useWindowDimensions } from '@/utils/useWindowDimensions'
import { useIsBellowNthSection } from '@/utils/useIsBellowNthSection'
import { DropDownBurgerButton } from '@/components/Buttons/DropDownBurguerButton'

export type NavBarProps = {
	style?: React.CSSProperties
}

const NavBar = ({ style }: NavBarProps) => {
	const [elementsColor, setElementsColor] = React.useState(
		THEME.colors.secondaryColor
	)
	const [backgroundColor, setBackgroundColor] = React.useState('transparent')
	const [navBarStyle, setNavBarStyle] = React.useState({})
	const [navBarShadow, setNavBarShadow] = React.useState(
		<S.GradientContainer />
	)
	let toRender: JSX.Element = (
		<div>
			<Button textColor={elementsColor}>sobre</Button>
			<Button textColor={elementsColor}>projetos</Button>
			<Button textColor={elementsColor}>contato</Button>
		</div>
	)
	const windowWidth = useWindowDimensions().windowWidth
	if (windowWidth < 600) {
		toRender = (
			<DropDownBurgerButton iconColor={elementsColor}>
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
				setNavBarShadow(<S.GradientContainer />)
			}
		}
		return handleScroll()
	}, [isBellowHeroSection])
	function scrollsToBeginning() {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}
	return (
		<>
			<S.Wrapper
				backgroundColor={backgroundColor}
				style={{ ...style, ...navBarStyle }}
			>
				<S.ContentWrapper>
					<MinimalisticLogo
						sizeMultiplier={0.35}
						style={{ marginRight: 26 }}
						color={elementsColor}
						highlightColorOnHover={THEME.colors.accentColor}
						onClick={scrollsToBeginning}
					/>
					{toRender}
				</S.ContentWrapper>
			</S.Wrapper>
			{navBarShadow}
		</>
	)
}

export default NavBar
