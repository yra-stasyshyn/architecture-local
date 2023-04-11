import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios'

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	const token = process.env.INSTAGRAM_TOKEN
	const fields = 'media_url,media_type,permalink'
	const url = `https://graph.instagram.com/me/media?access_token=${token}&fields=${fields}&limit=4`

	const { data } = await axios.get(url)
	return res.status(200).json(data.data)
}
