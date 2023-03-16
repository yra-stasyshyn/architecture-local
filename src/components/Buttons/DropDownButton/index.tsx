import Button from '@/components/Buttons/Button'
import DropdownMenu from '@/components/DropdownMenu'
import React, { useEffect, useRef, useState } from 'react'
import THEME from '@/styles/theme'

const defaultDropDownButtonProps = {
	style: {},
	iconColor: THEME.colors.primaryColor
}

export const DropDownButton = ({
	style = defaultDropDownButtonProps.style,
	iconColor = defaultDropDownButtonProps.iconColor,
	children,
	buttonIcon
}: {
	style?: React.CSSProperties
	iconColor?: string
	buttonIcon: React.ReactNode
	children: JSX.Element
}) => {
	const [isMenuOpen, setMenuOpen] = useState(false)
	const dropdownRef = useRef<HTMLDivElement>(null)

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
		document.addEventListener('mousedown', handleClickOutside)
		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [dropdownRef])

	return (
		<div style={{ ...style, position: 'relative' }} ref={dropdownRef}>
			<Button onClick={OnClickHandler} textColor={iconColor}>
				{buttonIcon}
			</Button>
			<DropdownMenu isOpen={isMenuOpen}>{children}</DropdownMenu>
		</div>
	)
}
