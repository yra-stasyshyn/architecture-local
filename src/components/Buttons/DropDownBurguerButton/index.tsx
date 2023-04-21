import DropdownMenu from '@/components/DropdownMenu'
import React from 'react'
import THEME from '@/styles/theme'
import * as S from './styles'
import { RxHamburgerMenu } from 'react-icons/rx'
import NavBarButton from '@/components/Buttons/NavBarButton'

export const DropDownBurgerButton = ({
	style,
	projectsRef,
	aboutUsRef,
	contactUsRef,
	researchRef,
	iconColor = THEME.colors.primaryColor,
	iconSize = 35
}: {
	style?: React.CSSProperties
	projectsRef: React.RefObject<any>
	aboutUsRef: React.RefObject<any>
	contactUsRef: React.RefObject<any>
	researchRef: React.RefObject<any>
	iconColor?: string
	iconSize?: number
}) => {
	const [isMenuOpen, setMenuOpen] = React.useState(false)
	const dropdownRef = React.useRef<HTMLDivElement>(null)
	const [renderPosition, setRenderPosition] = React.useState<'above' | 'below'>(
		'above'
	)
	const [elementsColor, setElementsColor] = React.useState(
		THEME.colors.secondaryColor
	)
	function OnClickHandler() {
		setMenuOpen(!isMenuOpen)
	}

	React.useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const target = event.target
			if (!(target instanceof Node)) return
			if (dropdownRef.current && !dropdownRef.current.contains(target)) {
				setMenuOpen(false)
			}
		}

		const handleScroll = () => {
			const buttonRect = dropdownRef.current?.getBoundingClientRect()
			const windowHeight = window.innerHeight
			const buttonBottom = buttonRect?.bottom || 0
			if (windowHeight - buttonBottom < 200) {
				setRenderPosition('above')
				setElementsColor(THEME.colors.secondaryColor)
			} else {
				setRenderPosition('below')
				setElementsColor(THEME.colors.primaryColor)
			}
		}

		window.addEventListener('scroll', handleScroll)
		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
			window.removeEventListener('scroll', handleScroll)
		}
	}, [dropdownRef])

	return (
		<div style={{ ...style, position: 'relative' }} ref={dropdownRef}>
			<S.BurgerIconWrapper onClick={OnClickHandler} textColor={elementsColor}>
				<RxHamburgerMenu size={iconSize} color={iconColor} />
			</S.BurgerIconWrapper>
			<DropdownMenu
				isOpen={isMenuOpen}
				renderPosition={renderPosition}
				backgroundColor={
					renderPosition == 'above'
						? THEME.colors.shadow
						: THEME.colors.faintGrey
				}
			>
				<NavBarButton
					textColor={elementsColor}
					sectionRef={projectsRef}
					scrollOffset={-120}
				>
					PROJETOS
				</NavBarButton>
				<NavBarButton
					textColor={elementsColor}
					sectionRef={researchRef}
					scrollOffset={-120}
				>
					PESQUISA
				</NavBarButton>
				<NavBarButton textColor={elementsColor} sectionRef={aboutUsRef}>
					SOBRE
				</NavBarButton>
				<NavBarButton textColor={elementsColor} sectionRef={contactUsRef}>
					CONTATO
				</NavBarButton>
			</DropdownMenu>
		</div>
	)
}
