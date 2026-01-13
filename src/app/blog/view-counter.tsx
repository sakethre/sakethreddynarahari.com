'use client'

import useSWR from 'swr'

import fetcher from '@/src/lib/fetcher'

export default function ViewCounter({
	slug,
	trackView,
}: {
	slug: string
	trackView: boolean
}) {
	const { data } = useSWR<{ total: number }>(
		`/api/views/${slug}`,
		fetcher
	)

	const views = new Number(data?.total || 0)

	return <span className='inline-block'>{`${views.toLocaleString()} views`}</span>
}
