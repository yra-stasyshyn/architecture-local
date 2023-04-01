import React from 'react'
import * as S from './styles'
import { HiPlusCircle, HiPlus, HiMinus, HiMinusCircle } from 'react-icons/hi'
import THEME from '@/styles/theme'

interface AccordionTabProps {
	title: string
	children: React.ReactNode
}

const AccordionTab: React.FC<AccordionTabProps> = ({ title, children }) => {
	const plus = <HiPlus size={25} />
	const plusCircle = <HiPlusCircle color={THEME.colors.accentColor} size={38} />
	const minus = <HiMinus size={25} />
	const minusCircle = (
		<HiMinusCircle color={THEME.colors.accentColor} size={38} />
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
				<span onClick={handleToggleAccordion}>{title}</span>
				<span>
					<S.IconWrapper>{icon}</S.IconWrapper>
				</span>
			</S.AccordionTabHeader>
			<S.AccordionTabContent isOpen={isOpen}>{children}</S.AccordionTabContent>
		</S.AccordionTabContainer>
	)
}

export default AccordionTab
