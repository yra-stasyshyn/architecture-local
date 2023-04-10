import CreativeStep from '.'
import { Meta, StoryFn } from '@storybook/react'
import React from 'react'

export default {
	title: 'CreativeStep',
	component: CreativeStep
} as Meta

export const Default: StoryFn = () => (
	<CreativeStep
		stepNumber={2}
		stepTitle={'contexto'}
		stepImageSrc={'/img/al-process-02.svg'}
	>
		Em seguida, partimos para o que é o centro da prática do estúdio: o estudo e
		a análise do local e do contexto em torno da demanda.
	</CreativeStep>
)
