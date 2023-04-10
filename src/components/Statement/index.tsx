import React from 'react'
import Text from '@/components/Text'
import useOnScreen from '@/utils/useOnScreen'
import * as S from './styles'
import useOnEntireBoxVisible from '@/utils/useOnEntireBoxVisible'
import { RxChevronDown } from 'react-icons/rx'
import { scrollOneScreenHeight } from '@/utils/scrollToRef'

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
			<Text>
				<h1 ref={statementRef}>{children}</h1>
			</Text>
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
