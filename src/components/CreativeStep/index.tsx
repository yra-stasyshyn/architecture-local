import * as S from './styles'
import NextImage from 'next/image'
import React from 'react'

const CreativeStep = ({
	stepNumber,
	stepTitle,
	stepImageSrc,
	children
}: {
	stepNumber: number
	stepTitle: string
	stepImageSrc: string
	children: string
}) => {
	return (
		<S.Wrapper>
			<S.HeaderDiv>
				<S.NumberSpan>{stepNumber}</S.NumberSpan>
				<S.TitleSpan>{stepTitle}</S.TitleSpan>
			</S.HeaderDiv>
			<S.ImageDiv>
				<NextImage
					src={stepImageSrc}
					alt={`Passo criativo ${stepNumber}: ${stepTitle}`}
					height={200}
					width={200}
				/>
				<div>
					<p>{children}</p>
				</div>
			</S.ImageDiv>
		</S.Wrapper>
	)
}

export default CreativeStep
