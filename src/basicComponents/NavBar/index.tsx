import * as S from './styles'
import React from 'react'
import THEME from '@/styles/theme'
import Logo from '@/basicComponents/Logo'
import Button from '@/basicComponents/Button'
import { RxHamburgerMenu } from 'react-icons/rx'
import { useWindowWidth } from '@/utils/useWindowWidth'
import { useIsBellowNthSection } from '@/utils/useIsBellowNthSection'

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
	let buttons = (
		<>
			<Button>sobre</Button>
			<Button>projetos</Button>
			<Button>contato</Button>
		</>
	)
	const windowWidth = useWindowWidth()
	if (windowWidth < 600) {
		buttons = (
			<Button>
				<RxHamburgerMenu size={40} />
			</Button>
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
				{buttons}
			</S.ContentWrapper>
		</S.Wrapper>
	)
}

export default NavBar
