import * as S from './styles'
import { Description } from './styles'

export type MainProps = {
	title: string
	description: string
}

const defaultMainProps = {
	title: 'A Title',
	description: 'A description'
}

const Main = ({ title, description }: MainProps & typeof defaultMainProps) => (
	<S.Wrapper>
		<S.Logo src="./img/next.svg" alt="Next Js Logo, contains the word next" />
		<S.Title>{title}</S.Title>
		<Description>{description}</Description>
		<S.Illustration
			src="./img/vercel.svg"
			alt="Vercel Logo, basically a black triangle"
		/>
	</S.Wrapper>
)

Main.defaultProps = defaultMainProps

export default Main
