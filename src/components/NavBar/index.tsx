import * as S from './styles'
import React from 'react'
import THEME from '@/styles/theme'
import Button from '@/components/Buttons/Button'
import { useWindowDimensions } from '@/utils/useWindowDimensions'
import { useIsBellowHeroSection } from '@/utils/useIsBellowHeroSection'
import { DropDownBurgerButton } from '@/components/Buttons/DropDownBurguerButton'
import InstitutionalLogo from '@/components/Logos/InstitutionalLogo'
import { FaWhatsapp, FaInstagram } from 'react-icons/fa'
import { redirectToInstagram, redirectToWhatsapp } from '@/utils/redirectToPage'

export type NavBarProps = {
	style?: React.CSSProperties
}

const NavBar = ({ style }: NavBarProps) => {
	const windowWidth = useWindowDimensions().windowWidth
	const [elementsColor, setElementsColor] = React.useState(
		THEME.colors.secondaryColor
	)
	const [backgroundColor, setBackgroundColor] = React.useState('transparent')
	const [navBarStyle, setNavBarStyle] = React.useState({})
	const [navBarShadow, setNavBarShadow] = React.useState(true)
	function scrollsToBeginning() {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}
	let toRender: JSX.Element = (
		<S.ButtonsBox>
			<Button textColor={elementsColor}>pesquisa</Button>
			<Button textColor={elementsColor}>sobre</Button>
			<Button textColor={elementsColor}>projetos</Button>
			<Button textColor={elementsColor}>contato</Button>
			<Button
				style={{ padding: 0 }}
				textColor={elementsColor}
				onClick={redirectToWhatsapp}
			>
				<FaWhatsapp size={20} />
			</Button>
			<Button
				style={{ paddingRight: 0 }}
				textColor={elementsColor}
				onClick={redirectToInstagram}
			>
				<FaInstagram size={20} />
			</Button>
		</S.ButtonsBox>
	)
	if (windowWidth < 800) {
		toRender = (
			<DropDownBurgerButton
				iconColor={elementsColor}
				iconSize={windowWidth < 500 ? 25 : 30}
			>
				<Button>pesquisa</Button>
				<Button>sobre</Button>
				<Button>projetos</Button>
				<Button>contato</Button>
			</DropDownBurgerButton>
		)
	}
	const isBellowHeroSection = useIsBellowHeroSection()

	React.useEffect(() => {
		function handleScroll() {
			if (isBellowHeroSection) {
				setElementsColor(THEME.colors.primaryColor)
				setBackgroundColor(THEME.colors.secondaryColor)
				setNavBarStyle({ top: 0, position: 'fixed' })
				setNavBarShadow(false)
			} else {
				setElementsColor(THEME.colors.secondaryColor)
				setNavBarStyle({})
				setBackgroundColor('transparent')
				setNavBarShadow(true)
			}
		}
		return handleScroll()
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isBellowHeroSection])
	return (
		<S.Wrapper
			backgroundColor={backgroundColor}
			style={{ ...style, ...navBarStyle }}
			shadowActive={navBarShadow}
			shadowHeight={windowWidth < 500 ? 100 : 150}
		>
			<S.ContentWrapper>
				<InstitutionalLogo
					color={elementsColor}
					sizeMultiplier={windowWidth < 500 ? 0.9 : 1}
					onClick={scrollsToBeginning}
					highlightColorOnHover={THEME.colors.accentColor}
				/>
				{toRender}
			</S.ContentWrapper>
		</S.Wrapper>
	)
}

export default NavBar
