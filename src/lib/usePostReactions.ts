import { REACTION } from '@/src/constants'
import React from 'react'
import { useDebounce } from 'react-use'
import useSWR, { SWRConfiguration } from 'swr'

const API_URL = `/api/reactions`

type MetricsPayload = {
	likes: string
	loves: string
	isLiked: Boolean
	isLoved: Boolean
}

async function getPostReactions(
	slug: string,
	sessionId: string
): Promise<MetricsPayload> {
	const res = await fetch(API_URL + `/${slug}`, {
		headers: {
			'x-reaction-session-id': sessionId,
		},
	})
	if (!res.ok) {
		throw new Error('An error occurred while fetching the data.')
	}
	return res.json()
}

async function updatePostReactions(
	slug: string,
	reactionTypes: string[],
	sessionId: string
): Promise<MetricsPayload> {
	const res = await fetch(API_URL + `/${slug}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'x-reaction-session-id': sessionId,
		},
		body: JSON.stringify(reactionTypes),
	})

	if (!res.ok) {
		throw new Error('An error occurred while posting the data.')
	}

	return res.json()
}

export const usePostReactions = (slug: string, config?: SWRConfiguration) => {
	const [sessionId, setSessionId] = React.useState<string>('')

	React.useEffect(() => {
		let id = localStorage.getItem('reaction-session-id')
		if (!id) {
			id = crypto.randomUUID()
			localStorage.setItem('reaction-session-id', id)
		}
		setSessionId(id)
	}, [])

	const { data, error, mutate } = useSWR(
		sessionId ? [API_URL, slug, sessionId] : null,
		([_, slug, sessionId]) => getPostReactions(slug, sessionId),
		{
			dedupingInterval: 60000,
			...config,
		}
	)

	const [batchedReactions, setBatchedReactions] = React.useState<string[]>([])

	const reaction = (type: string) => {
		// Prevent the user from reacting again
		if (
			!data ||
			(type === REACTION.like && data.isLiked) ||
			(type === REACTION.love && data.isLoved)
		) {
			return
		}

		// update the local swr cache so reactions updates immediately for the user
		if (type === REACTION.love) {
			setBatchedReactions((prevReactions) => [...prevReactions, REACTION.love])
			mutate(
				{
					likes: data.likes,
					loves: (BigInt(data.loves) + BigInt(1)).toString(),
					isLoved: true,
					isLiked: data.isLiked,
				},
				false
			)
		}
		if (type === REACTION.like) {
			setBatchedReactions((prevReactions) => [...prevReactions, REACTION.like])
			mutate(
				{
					likes: (BigInt(data.likes) + BigInt(1)).toString(),
					loves: data.loves,
					isLiked: true,
					isLoved: data.isLoved,
				},
				false
			)
		}
	}

	useDebounce(
		() => {
			if (batchedReactions.length === 0 || !sessionId) return

			const reactionsCopy = [...batchedReactions]
			// Clear the batchedReactions array
			setBatchedReactions([])

			// update the database and use the data updatePostReactions returns to update
			// the local cache with database data
			mutate(updatePostReactions(slug, reactionsCopy, sessionId))
		},
		1000,
		[batchedReactions, sessionId]
	)

	return {
		loves: data?.loves,
		likes: data?.likes,
		isLoved: data?.isLoved,
		isLiked: data?.isLiked,
		isLoading: !error && !data,
		isError: !!error,
		reaction,
	}
}
