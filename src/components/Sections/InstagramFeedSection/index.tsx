import React from 'react'
import * as S from './styles'
import InstagramFeed from '@/components/InstagramFeed'

const InstagramFeedSection = () => {
	return (
		<S.Wrapper>
			<S.Content>
				<InstagramFeed />
			</S.Content>
		</S.Wrapper>
	)
}

export default InstagramFeedSection
