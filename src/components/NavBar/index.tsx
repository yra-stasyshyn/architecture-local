import * as S from './styles'
import React from 'react'
import THEME from '@/styles/theme'
import Button from '@/components/Buttons/Button'
import { useWindowDimensions } from '@/utils/useWindowDimensions'
import { useIsBellowHeroSection } from '@/utils/useIsBellowHeroSection'
import { DropDownBurgerButton } from '@/components/Buttons/DropDownBurguerButton'
import InstitutionalLogo from '@/components/Logos/InstitutionalLogo'
import { RiWhatsappFill, RiInstagramFill } from 'react-icons/ri'
import { redirectToInstagram, redirectToWhatsapp } from '@/utils/redirectToPage'
import { scrollToRef, scrollToStart } from '@/utils/scrollToRef'
import useOnMiddleOfScreen from '@/utils/useOnMiddleOfScreen'

export type NavBarProps = {
	projectsRef: React.RefObject<never>
	aboutUsRef: React.RefObject<never>
	contactUsRef: React.RefObject<never>
	researchRef: React.RefObject<never>
	style?: React.CSSProperties
}

const NavBar = ({
	style,
	projectsRef,
	aboutUsRef,
	contactUsRef,
	researchRef
}: NavBarProps) => {
	const windowWidth = useWindowDimensions().windowWidth
	const [elementsColor, setElementsColor] = React.useState(
		THEME.colors.secondaryColor
	)
	const [backgroundColor, setBackgroundColor] = React.useState('transparent')
	const [navBarStyle, setNavBarStyle] = React.useState({})
	const [navBarShadow, setNavBarShadow] = React.useState(true)

	const isOnProjects = useOnMiddleOfScreen(projectsRef)
	const isOnResearch = useOnMiddleOfScreen(researchRef)
	const isOnAboutUs = useOnMiddleOfScreen(aboutUsRef, -600)
	const isOnContactUs = useOnMiddleOfScreen(contactUsRef)
	const addUnderBorderIf = (isOnSection: boolean): React.CSSProperties => {
		return isOnSection
			? {
					borderBottom: `1px solid ${THEME.colors.accentColor}`,
					marginBottom: 3
			  }
			: {}
	}
	let toRender: JSX.Element = (
		<S.ButtonsBox>
			<Button
				textColor={elementsColor}
				onClick={() => scrollToRef(projectsRef, -120)}
			>
				<span style={addUnderBorderIf(isOnProjects)}>projetos</span>
			</Button>
			<Button
				textColor={elementsColor}
				onClick={() => scrollToRef(researchRef, -120)}
			>
				<span style={addUnderBorderIf(isOnResearch)}>pesquisa</span>
			</Button>
			<Button textColor={elementsColor} onClick={() => scrollToRef(aboutUsRef)}>
				<span style={addUnderBorderIf(isOnAboutUs)}>sobre</span>
			</Button>
			<Button
				textColor={elementsColor}
				onClick={() => scrollToRef(contactUsRef)}
			>
				<span style={addUnderBorderIf(isOnContactUs)}>contato</span>
			</Button>
			<Button
				style={{ paddingRight: 0 }}
				textColor={elementsColor}
				onClick={redirectToInstagram}
			>
				<RiInstagramFill size={18} />
			</Button>
			<Button
				style={{ paddingRight: 0, paddingLeft: 5 }}
				textColor={elementsColor}
				onClick={redirectToWhatsapp}
			>
				<RiWhatsappFill size={18} />
			</Button>
		</S.ButtonsBox>
	)
	if (windowWidth < THEME.screenSize.tablet) {
		toRender = (
			<DropDownBurgerButton
				iconColor={elementsColor}
				iconSize={windowWidth < THEME.screenSize.mobile ? 25 : 30}
			>
				<Button onClick={() => scrollToRef(projectsRef, -120)}>projetos</Button>
				<Button onClick={() => scrollToRef(researchRef, -120)}>pesquisa</Button>
				<Button onClick={() => scrollToRef(aboutUsRef)}>sobre</Button>
				<Button onClick={() => scrollToRef(contactUsRef)}>contato</Button>
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
			shadowHeight={windowWidth < THEME.screenSize.mobile ? 100 : 150}
		>
			<S.ContentWrapper>
				<InstitutionalLogo
					color={elementsColor}
					sizeMultiplier={windowWidth < THEME.screenSize.mobile ? 0.9 : 1}
					onClick={scrollToStart}
					highlightColorOnHover={THEME.colors.accentColor}
				/>
				{toRender}
			</S.ContentWrapper>
		</S.Wrapper>
	)
}

export default NavBar
