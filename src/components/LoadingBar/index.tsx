import * as S from './styles'
import THEME from '@/styles/theme'

const LoadingBar = ({
	progress,
	width = 90,
	color = THEME.colors.secondaryColor,
	backColor = 'rgb(180, 180, 180)'
}: {
	progress: number
	width?: number
	backColor?: string
	color?: string
}) => {
	return (
		<S.Wrapper
			backColor={backColor}
			color={color}
			width={width}
			value={progress}
			max={100}
		/>
	)
}

export default LoadingBar
