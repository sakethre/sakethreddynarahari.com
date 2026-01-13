import AnimatedText from '@/src/components/AnimatedText'
import Timeline from '@/src/components/Timeline'
import FadeDown from '@/src/components/animations/FadeDown'
import FadeUp from '@/src/components/animations/FadeUp'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'About',
	description: 'Software Engineer and Entrepreneur &  based in Seattle and Hyderabad',
}

const About = () => {
	return (
		<section className='prose  prose-neutral dark:prose-invert my-10'>
			<FadeDown duration={0.4}>
				<h1 className='heading custom-underline'>
					<AnimatedText text='About me' />
				</h1>
				<p>
					I&apos;m <b>Saketh Reddy Narahari</b>, a <b>Software Engineer and Entrepreneur	</b>
					based in Seattle, WA and Hyderabad, India . I build reliable, secure, and scalable software
					, currently at <b>Microsoft</b> in the Azure Virtual Machines Org and I think about making impact via entrepreneurship.
				</p>
				<p>
					At Amazon, I did (cool?)stuff like designing and implementing <b>Concurrent Surveys Tool</b>,
					a high-impact application currently used across 800+ delivery stations
					globally to collect feedback for Amazon Delivery Station workers regarding new product launches.
					It was a great experience at Amazon that made me see and learn the real scale game and build efficiencies on top of it.
				</p>
				<p>
					During my SDE internship at Amazon Search, I built a dashboard for live ML model metadata that kind of shows what heading and description for an item makes its search rank high. Super cool stuff.
					Before that, I interned at OpenText creating
					responsive and resuable tools for their web applications.
				</p>
				<p>
					I hold an <b>MS in Computer Science</b> from the University of Southern
					California(USC) <b>BS in Computer Science</b> from CVR College of
					Engineering. I enjoy building for the web, systems, and developer
					experience, with interests spanning distributed systems, ML, and clean
					UX.
				</p>
				<h4 className='text-lg md:text-xl font-medium dark:text-light text-dark'>
					When I&apos;m not at my desk...
				</h4>
				<p>
					Outside of work, I&apos;m into entrepreneurship,reading about business, environment and impacts on health, gadgets, WEB3, volunteering, MUN, debates,
					and quiz. Always up for learning something new or shipping a
					small tool that makes life easier.
				</p>
				<h4 className='text-lg md:text-xl font-medium dark:text-light text-dark'>
					What drives me
				</h4>
				<p>
					As an entrepreneur, and an environment enthusiast, I like building products that are
					useful, sustainable, and scalable. I&apos;m motivated by solving real problems that help the mankind
					shipping quickly with high quality, and creating systems that empower
					people and teams to do their best work.
				</p>
			</FadeDown>
			<FadeUp duration={0.4}>
				<h2 className='text-xl md:text-2xl text-dark dark:text-light'>
					<AnimatedText text='Timeline' />
				</h2>
				<Timeline />
			</FadeUp>
		</section>
	)
}

export default About
