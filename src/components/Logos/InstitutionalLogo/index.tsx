import THEME from '@/styles/theme'
import React from 'react'

const InstitutionalLogo = ({
	sizeMultiplier = 1,
	color = THEME.colors.secondaryColor,
	highlightColorOnHover = THEME.colors.secondaryColor,
	onClick
}: {
	sizeMultiplier?: number
	color?: string
	highlightColorOnHover?: string
	onClick?: React.MouseEventHandler
}) => {
	const [isHovered, setIsHovered] = React.useState(false)
	const colorImageMapper = {
		[THEME.colors.primaryColor]: 'AL_Logo_R02_preta.svg',
		[THEME.colors.secondaryColor]: 'AL_Logo_R02_branca.svg',
		[THEME.colors.accentColor]: 'AL_Logo_R02_laranja.svg'
	}
	color = isHovered ? highlightColorOnHover : color
	return (
		<img
			onClick={onClick}
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
			src={`./img/${colorImageMapper[color]}`}
			alt={'Logotipo institucional Aquitetura Local'}
			height={sizeMultiplier * 35}
			width={sizeMultiplier * 210}
		/>
	)
}

export default InstitutionalLogo
