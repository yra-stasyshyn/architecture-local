import * as S from './styles'
import React from 'react'

export type DropdownMenuProps = {
	isOpen: boolean
	renderPosition: 'above' | 'below'
	backgroundColor?: string
	children: React.ReactElement | React.ReactElement[]
}

const defaultDropdownMenuProps = {
	backgroundColor: 'rgb(0, 0, 0, 0.05)',
	renderPosition: 'below' as 'above' | 'below'
}

export const DropdownMenu = ({
	isOpen = false,
	renderPosition = defaultDropdownMenuProps.renderPosition,
	backgroundColor = defaultDropdownMenuProps.backgroundColor,
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
