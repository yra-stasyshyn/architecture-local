import * as S from './styles'
import React from 'react'
import THEME from '@/styles/theme'
import Logo from '@/components/Logo'
import Button from '@/components/Buttons/Button'
import { useWindowDimensions } from '@/utils/useWindowDimensions'
import { useIsBellowNthSection } from '@/utils/useIsBellowNthSection'
import { DropDownButton } from '@/components/Buttons/DropDownButton'
import { RxHamburgerMenu } from 'react-icons/rx'

export type NavBarProps = {
	backgroundColor?: string
	style?: React.CSSProperties
}

const defaultNavBarProps = {
	backgroundColor: THEME.colors.secondaryColor,
	addShadow: false
}
const NavBar = ({
	backgroundColor = defaultNavBarProps.backgroundColor,
	style
}: NavBarProps) => {
	const buttons: JSX.Element = (
		<>
			<Button>sobre</Button>
			<Button>projetos</Button>
			<Button>contato</Button>
		</>
	)
	let toRender = buttons
	const windowWidth = useWindowDimensions().windowWidth
	if (windowWidth < 600) {
		toRender = (
			<DropDownButton buttonIcon={<RxHamburgerMenu size={40} />}>
				{buttons}
			</DropDownButton>
		)
	}

	const isBellowHeroSection = useIsBellowNthSection()
	if (isBellowHeroSection) {
		style = {
			...style,
			top: 0,
			position: 'fixed'
		}
	}
	function scrollsToBeginning() {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}
	return (
		<S.Wrapper backgroundColor={backgroundColor} style={style}>
			<S.ContentWrapper>
				<Logo
					sizeMultiplier={0.35}
					style={{ marginRight: 26 }}
					color={THEME.colors.primaryColor}
					highlightColorOnHover={THEME.colors.accentColor}
					onClick={scrollsToBeginning}
				/>
				{toRender}
			</S.ContentWrapper>
		</S.Wrapper>
	)
}

export default NavBar
