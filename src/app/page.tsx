import Hero from '@/src/components/home/Hero'
import Blog from '@/src/components/home/Blog'
import Contact from '@/src/components/home/Contact'
import FadeDown from '@/src/components/animations/FadeDown'
import FadeUp from '@/src/components/animations/FadeUp'
import Image from 'next/image'

export default function Home() {
	return (
		<main className='flex flex-col gap-20 my-10'>
			<FadeDown duration={0.4} delay={0}>
				<Hero />
			</FadeDown>
			{/* Full-length photo above Recent Posts */}
			<FadeUp duration={0.4} delay={0}>
				<div className='w-full overflow-hidden rounded-lg'>
					<Image
						src='/dp.png'
						alt='Full-length profile photo'
						priority={false}
						width={1200}
						height={800}
						style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
					/>
				</div>
			</FadeUp>
			<FadeUp duration={0.4} delay={0}>
				<Blog />
			</FadeUp>
			<Contact />
		</main>
	)
}
