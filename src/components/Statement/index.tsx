import React from 'react'
import useOnScreen from '@/utils/useOnScreen'
import * as S from './styles'
import useOnEntireBoxVisible from '@/utils/useOnEntireBoxVisible'
import { RxChevronDown } from 'react-icons/rx'
import { scrollOneScreenHeight } from '@/utils/scrollToRef'
import { Textfit } from 'react-textfit'
import THEME from '@/styles/theme'

const Statement = ({
	children,
	style
}: {
	children: React.ReactNode
	style?: React.CSSProperties
}) => {
	const statementRef = React.useRef<HTMLDivElement>(null)
	const [alreadyBeenSeen, setAlreadyBeenSeen] = React.useState(false)
	const isVisible = useOnScreen(statementRef)
	const statementBoxRef = React.useRef(null)
	const isEntireBoxVisible = useOnEntireBoxVisible(statementBoxRef)
	React.useEffect(() => {
		if (isVisible) {
			setAlreadyBeenSeen(true)
		}
	}, [isVisible])

	return (
		<S.Wrapper isVisible={alreadyBeenSeen} style={style} ref={statementBoxRef}>
			<h1 ref={statementRef}>
				<Textfit mode="single">{children}</Textfit>
			</h1>
			<S.ChevronDiv
				isEntireBoxVisible={isEntireBoxVisible}
				onClick={scrollOneScreenHeight}
			>
				<RxChevronDown size={30} />
			</S.ChevronDiv>
		</S.Wrapper>
	)
}

export default Statement
