import Button from '@/components/Buttons/Button'
import DropdownMenu from '@/components/DropdownMenu'
import React, { ReactElement, useEffect, useRef, useState } from 'react'
import THEME from '@/styles/theme'
import { RxHamburgerMenu } from 'react-icons/rx'

export const DropDownBurgerButton = ({
	style = {},
	iconColor = THEME.colors.primaryColor,
	iconSize = 35,
	children
}: {
	style?: React.CSSProperties
	iconColor?: string
	iconSize?: number
	children: React.ReactElement[]
}) => {
	const [isMenuOpen, setMenuOpen] = useState(false)
	const dropdownRef = useRef<HTMLDivElement>(null)
	const [renderPosition, setRenderPosition] = useState<'above' | 'below'>(
		'above'
	)
	const [elementsColor, setElementsColor] = React.useState(
		THEME.colors.secondaryColor
	)
	function OnClickHandler() {
		setMenuOpen(!isMenuOpen)
	}

	useEffect(() => {
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
			<Button
				onClick={OnClickHandler}
				textColor={iconColor}
				style={{ paddingRight: 0 }}
			>
				<RxHamburgerMenu size={iconSize} color={iconColor} />
			</Button>
			<DropdownMenu
				isOpen={isMenuOpen}
				renderPosition={renderPosition}
				backgroundColor={
					renderPosition == 'above'
						? 'rgba(0, 0, 0, 0.2)'
						: THEME.colors.lightGrey
				}
			>
				{React.Children.map(children, (child: ReactElement) => {
					return React.cloneElement(child, {
						textColor: elementsColor,
						bgColor:
							renderPosition == 'above' ? 'rgba(0, 0, 0, 0.2)' : 'transparent',
						style: { width: '100%' }
					})
				})}
			</DropdownMenu>
		</div>
	)
}
