import React from 'react'
import * as S from './styles'
import { HiPlusCircle, HiPlus, HiMinus, HiMinusCircle } from 'react-icons/hi'
import THEME from '@/styles/theme'

interface AccordionTabProps {
	title: string
	children: React.ReactNode
}

const AccordionTab: React.FC<AccordionTabProps> = ({ title, children }) => {
	const plus = <HiPlus size={0.8 * THEME.fontSize.title3Desktop} />
	const plusCircle = (
		<HiPlusCircle
			color={THEME.colors.accentColor}
			size={1.2 * THEME.fontSize.title3Desktop}
		/>
	)
	const minus = <HiMinus size={0.8 * THEME.fontSize.title3Desktop} />
	const minusCircle = (
		<HiMinusCircle
			color={THEME.colors.accentColor}
			size={1.2 * THEME.fontSize.title3Desktop}
		/>
	)

	const [isOpen, setIsOpen] = React.useState(false)
	const [icon, setIcon] = React.useState(plus)
	const handleToggleAccordion = () => {
		setIcon(isOpen ? plus : minus)
		setIsOpen(!isOpen)
	}
	const OnMouseOverTab = () => {
		setIcon(isOpen ? minusCircle : plusCircle)
	}

	const OnMouseLeaveTab = () => {
		setIcon(isOpen ? minus : plus)
	}

	return (
		<S.AccordionTabContainer>
			<S.AccordionTabHeader
				onClick={handleToggleAccordion}
				onMouseOver={OnMouseOverTab}
				onMouseLeave={OnMouseLeaveTab}
			>
				<h3 onClick={handleToggleAccordion}>{title}</h3>
				<S.IconWrapper>{icon}</S.IconWrapper>
			</S.AccordionTabHeader>
			<S.AccordionTabContent isOpen={isOpen}>
				<p>{children}</p>
			</S.AccordionTabContent>
		</S.AccordionTabContainer>
	)
}

export default AccordionTab
