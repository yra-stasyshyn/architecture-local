import SlideShow from '.'
import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

export default {
	title: 'SlideShow',
	component: SlideShow
} as Meta

export const Default: StoryFn = () => (
	<SlideShow>
		{/*<img src={'/img/01.png'} alt={''} />*/}
		{/*<img src={'/img/02.jpg'} alt={''} />*/}
		<img src={'/img/04.png'} alt={''} />
		<img src={'/img/05.png'} alt={''} />
		<img src={'/img/06.png'} alt={''} />
		<img src={'/img/07.png'} alt={''} />
		<img src={'/img/08.jpg'} alt={''} />
		<img src={'/img/09.png'} alt={''} />
		{/*<img src={'/img/10.png'} alt={''} />*/}
		{/*<img src={'/img/11.png'} alt={''} />*/}
		{/*<img src={'/img/12.jpg'} alt={''} />*/}
	</SlideShow>
)
