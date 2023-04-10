import * as S from './styles'
import React from 'react'
import axios from 'axios'

type InstaFeedItem = {
	id: string
	media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM'
	media_url: string
	permalink: string
}
const InstagramFeed = () => {
	const [instaFeed, setInstaFeed] = React.useState<InstaFeedItem[]>([])

	React.useEffect(() => {
		const data = axios.get('/api/insta-fee')
		console.log(data)
	}, [])
	return (
		<S.Wrapper>
			<h1>InstagramFeed</h1>
		</S.Wrapper>
	)
}

export default InstagramFeed
