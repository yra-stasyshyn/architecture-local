import { Meta, Args, StoryFn } from '@storybook/react'
import React from 'react'
import ProjectsGrid from './index'
import NextImage from 'next/image'
import img06 from '../../../public/img/06.png'
import img07 from '../../../public/img/07.png'
import img01 from '../../../public/img/01.png'
import img02 from '../../../public/img/02.jpg'
import img04 from '../../../public/img/04.png'
import img05 from '../../../public/img/05.png'
import img09 from '../../../public/img/09.png'
import img10 from '../../../public/img/10.png'
import img11 from '../../../public/img/11.png'

export default {
	title: 'ProjectsGrid',
	component: ProjectsGrid
} as Meta

export const Default: StoryFn = (args: Args) => {
	const quality = 50
	return (
		<div style={{ backgroundColor: '#ffffff', padding: 4 }}>
			<ProjectsGrid>
				<NextImage src={img06} alt={'casa local 1'} quality={quality} />
				<NextImage src={img07} alt={'casa local 2'} quality={quality} />
				<NextImage src={img01} alt={'casa local 3'} quality={quality} />
				<NextImage src={img02} alt={'casa local 4'} quality={quality} />
				<NextImage src={img04} alt={'casa local 5'} quality={quality} />
				<NextImage src={img05} alt={'casa local 6'} quality={quality} />
				<NextImage src={img09} alt={'casa local 7'} quality={quality} />
				<NextImage src={img10} alt={'casa local 1'} quality={quality} />
				<NextImage src={img11} alt={'casa local 2'} quality={quality} />
				<NextImage src={img06} alt={'casa local 3'} quality={quality} />
				<NextImage src={img07} alt={'casa local 4'} quality={quality} />
				<NextImage src={img01} alt={'casa local 5'} quality={quality} />
				<NextImage src={img02} alt={'casa local 6'} quality={quality} />
				<NextImage src={img04} alt={'casa local 7'} quality={quality} />
				<NextImage src={img05} alt={'casa local 1'} quality={quality} />
				<NextImage src={img09} alt={'casa local 2'} quality={quality} />
			</ProjectsGrid>
		</div>
	)
}
