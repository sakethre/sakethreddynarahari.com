import { allBlogs } from 'contentlayer/generated'

export default async function sitemap() {
	const blogs = allBlogs.map((post) => ({
		url: `https://sakethreddynarahari.com/blog/${post.slug}`,
		lastModified: post.publishedAt,
	}))

	const routes = ['', '/about', '/blog', '/contact'].map(
		(route) => ({
			url: `https://sakethreddynarahari.com${route}`,
			lastModified: new Date().toISOString().split('T')[0],
		})
	)

	return [...routes, ...blogs]
}
