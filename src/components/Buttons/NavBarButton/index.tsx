import * as S from './styles'
import THEME from '@/styles/theme'
import React from 'react'
import useOnMiddleOfScreen from '@/utils/useOnMiddleOfScreen'
import { scrollToRef } from '@/utils/scrollToRef'

export type NavBarButtonProps = {
	textColor?: string
	sectionRef: React.RefObject<HTMLDivElement>
	addUnderLineIfOnSection?: boolean
	scrollOffset?: number
	children?: React.ReactNode | React.ReactNode[]
	style?: React.CSSProperties
}

const NavBarButton = ({
	textColor = THEME.colors.primaryColor,
	sectionRef,
	addUnderLineIfOnSection = false,
	scrollOffset = 0,
	children,
	style
}: NavBarButtonProps) => {
	const isOnSection = useOnMiddleOfScreen(sectionRef)
	return (
		<S.Wrapper
			textColor={textColor}
			underline={addUnderLineIfOnSection && isOnSection}
			onClick={() => scrollToRef(sectionRef, scrollOffset)}
			style={style}
		>
			{children}
		</S.Wrapper>
	)
}

export default NavBarButton
