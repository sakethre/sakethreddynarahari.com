'use client'
import { ReactElement } from 'react'
import { FiArrowRight } from 'react-icons/fi'
import Link from 'next/link'

import AnimatedText from '../AnimatedText'
import { useTranslations } from 'next-intl'

export default function Hero(): ReactElement {
	const t = useTranslations('HomePage')
	return (
		<section>
			<h1 className='sr-only'>
				Hi I&apos;m Saketh Reddy Narahari, I&apos;m a software engineer and I craft
				things for the web.
			</h1>
			<div className='flex cursor-default flex-col justify-center'>
				<div className='flex flex-col'>
					<h1 className='text-3xl lg:text-4xl font-medium text-dark dark:text-light name-highlight'>
						<AnimatedText text='Saketh Reddy Narahari' />
					</h1>
					<h4 className='text-base lg:text-lg'>
						Software Engineer @ <b>Microsoft</b>, Entrepreneur
					</h4>
				</div>
				<div className='flex flex-col gap-8 pt-8'>
					<p className='text-base md:text-lg'>{t('description')}</p>
					<Link href='/about'>
						<div className='flex items-center'>
							<span className='link'>{t('learnMore')}&nbsp;</span>
							<span className='animate-bounce-right'>
								<FiArrowRight />
							</span>
						</div>
					</Link>
				</div>
			</div>
		</section>
	)
}
