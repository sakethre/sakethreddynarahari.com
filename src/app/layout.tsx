import type { Metadata } from 'next'
import clsx from 'clsx'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { NextIntlClientProvider } from 'next-intl'

import Navbar from '@/src/components/Navbar'
import Provider from '@/src/components/Provider'
import StickySocial from '@/src/components/StickySocial'

import './globals.css'
import Footer from '@/src/components/Footer'
import en from '@/locales/en.json'

const inter = Inter({
	subsets: ['latin'],
	variable: '--font-inter',
	display: 'swap',
})

export const metadata: Metadata = {
	title: {
		default: 'Saketh Reddy Narahari',
		template: '%s | Saketh Reddy Narahari',
	},
	description: 'Software Development Engineer',
	openGraph: {
		title: 'Saketh Reddy Narahari',
		description: 'Software Development Engineer',
		url: 'https://sakethreddynarahari.com',
		siteName: 'Saketh Reddy Narahari',
		locale: 'en-US',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
	twitter: {
		title: 'Saketh Reddy Narahari',
		card: 'summary_large_image',
	},
	icons: {
		shortcut: '/favicon.ico',
	},
	verification: {
		google: '',
		yandex: '',
	},
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='en'>
			<body className={clsx('antialiased bg-light dark:bg-dark', inter.variable)}>
				<NextIntlClientProvider messages={en as any}>
					<Provider>
						<Navbar />
						<div className='max-w-2xl w-[92vw] sm:w-[90vw] mx-auto pt-20'>
							<StickySocial />
							{children}
							<Footer />
							<Analytics />
						</div>
					</Provider>
				</NextIntlClientProvider>
			</body>
		</html>
	)
}
