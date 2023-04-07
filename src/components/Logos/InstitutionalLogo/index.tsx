import THEME from '@/styles/theme'
import React from 'react'
import * as S from './styles'
import NextImage from 'next/image'

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
	color = isHovered ? highlightColorOnHover : color
	return (
		<S.LogoWrapper
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}
		>
			<NextImage
				onClick={onClick}
				src={`/img/AL_Logo_R02_preta.svg`}
				alt={'Logotipo institucional Aquitetura Local'}
				height={sizeMultiplier * 35}
				width={sizeMultiplier * 210}
				style={{ opacity: color == THEME.colors.primaryColor ? '1' : '0' }}
			/>
			<NextImage
				onClick={onClick}
				src={`/img/AL_Logo_R02_branca.svg`}
				alt={'Logotipo institucional Aquitetura Local'}
				height={sizeMultiplier * 35}
				width={sizeMultiplier * 210}
				style={{ opacity: color == THEME.colors.secondaryColor ? '1' : '0' }}
			/>
			<NextImage
				onClick={onClick}
				src={`/img/AL_Logo_R02_laranja.svg`}
				alt={'Logotipo institucional Aquitetura Local'}
				height={sizeMultiplier * 35}
				width={sizeMultiplier * 210}
				style={{ opacity: color == THEME.colors.accentColor ? '1' : '0' }}
			/>
		</S.LogoWrapper>
	)
}

export default InstitutionalLogo
