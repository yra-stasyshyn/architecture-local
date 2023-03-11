import Button from '@/components/Buttons/Button'
import DropdownMenu from '@/components/DropdownMenu'
import React, { useEffect, useRef, useState } from 'react'

export const DropDownButton = ({
	style = {},
	children,
	buttonIcon
}: {
	style?: React.CSSProperties
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
			<Button onClick={OnClickHandler}>{buttonIcon}</Button>
			<DropdownMenu isOpen={isMenuOpen}>{children}</DropdownMenu>
		</div>
	)
}
