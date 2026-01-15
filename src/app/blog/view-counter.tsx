'use client'

import { useEffect } from 'react'
import useSWR from 'swr'

import fetcher from '@/src/lib/fetcher'

export default function ViewCounter({
	slug,
	trackView,
}: {
	slug: string
	trackView: boolean
}) {
	const { data, mutate } = useSWR<{ total: number }>(
		`/api/views/${slug}`,
		fetcher
	)

	useEffect(() => {
		if (!trackView) return

		fetch(`/api/views/${slug}`, {
			method: 'POST',
		}).then((res) => {
			if (res.ok) {
				mutate()
			}
		})
	}, [slug, trackView, mutate])

	const views = new Number(data?.total || 0)

	return <span className='inline-block'>{`${views.toLocaleString()} views`}</span>
}
