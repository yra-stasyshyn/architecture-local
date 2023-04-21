import * as S from './styles'
import React from 'react'
import THEME from '@/styles/theme'

export type DropdownMenuProps = {
	isOpen: boolean
	renderPosition: 'above' | 'below'
	backgroundColor?: string
	aboveBackgroundColor?: string
	children: React.ReactElement | React.ReactElement[]
}

export const DropdownMenu = ({
	isOpen = false,
	renderPosition = 'below' as 'above' | 'below',
	backgroundColor = THEME.colors.faintGrey,
	children
}: DropdownMenuProps) => {
	return (
		<S.Wrapper
			isOpen={isOpen}
			backgroundColor={backgroundColor}
			renderPosition={renderPosition}
		>
			{children}
		</S.Wrapper>
	)
}
export default DropdownMenu
