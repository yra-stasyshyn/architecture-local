import * as S from './styles'
import THEME from '@/styles/theme'
import React from 'react'

export type DropdownMenuProps = {
	isOpen: boolean
	backgroundColor?: string
	children: React.ReactElement | React.ReactElement[]
}

const defaultDropdownMenuProps = {
	backgroundColor: THEME.colors.secondaryColor
}

export const DropdownMenu = ({
	isOpen,
	backgroundColor = defaultDropdownMenuProps.backgroundColor,
	children
}: DropdownMenuProps) => {
	return (
		<S.Wrapper isOpen={isOpen} backgroundColor={backgroundColor}>
			{children}
		</S.Wrapper>
	)
}
export default DropdownMenu
