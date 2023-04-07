import React from 'react'
import Text from '@/components/Text'
import useOnScreen from '@/utils/useOnScreen'
import * as S from './styles'

const Statement = ({ children }: { children: React.ReactNode }) => {
	const ref = React.useRef<HTMLDivElement>(null)
	const [alreadyBeenSeen, setAlreadyBeenSeen] = React.useState(false)
	const isVisible = useOnScreen(ref)

	React.useEffect(() => {
		if (isVisible) {
			setAlreadyBeenSeen(true)
		}
	}, [isVisible])

	return (
		<S.Wrapper isVisible={alreadyBeenSeen}>
			<Text>
				<h1 ref={ref}>{children}</h1>
			</Text>
		</S.Wrapper>
	)
}

export default Statement
