import * as S from './styles'
import React from 'react'
import axios from 'axios'

type MediaType = 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM'

type InstaFeedItem = {
	id: string
	media_type: MediaType
	media_url: string
	permalink: string
}
const InstagramFeed = () => {
	const [instaFeed, setInstaFeed] = React.useState<InstaFeedItem[]>([])

	const getFeedData = () => {
		axios.get('/api/insta-feed').then(function (response) {
			setInstaFeed(response.data)
		})
	}

	React.useEffect(() => {
		getFeedData()
	}, [])

	function renderImageOrVideo(mediaType: MediaType, mediaUrl: string) {
		if (mediaType == 'VIDEO') {
			return (
				<video controls width="250" height="250" loop autoPlay muted>
					<source src={mediaUrl} />
				</video>
			)
		}
		return <img src={mediaUrl} alt={'Instagram Post Arq Local'} />
	}
	return (
		<S.Wrapper>
			{instaFeed.map((item) => (
				<a key={item.id} href={item.permalink} target="_blank" rel="noreferrer">
					{renderImageOrVideo(item.media_type, item.media_url)}
				</a>
			))}
		</S.Wrapper>
	)
}

export default InstagramFeed
