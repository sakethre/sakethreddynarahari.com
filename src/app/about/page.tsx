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
					I&apos;m <b>Saketh Reddy Narahari</b>, a <b>Software Engineer</b>, <b>Entrepreneur</b>, and <b>Investor</b> based in Seattle, WA.
					Currently, I work at <b>Microsoft</b> within the Azure Virtual Machines organization, building reliable, secure, and scalable cloud infrastructure.
					My professional moat lies in the intersection of <b>Distributed Systems</b>, <b>Full Stack Development</b>, and <b>Product Strategy</b>.
				</p>

				<h2 className='text-xl md:text-2xl font-medium dark:text-light text-dark mt-8 mb-4'>
					Experience & Impact
				</h2>
				<p>
					Previously at <b>Amazon</b>, I designed and implemented the <b>Concurrent Surveys Tool</b>,
					a high-impact application scaled to 800+ delivery stations globally. This tool streamlined feedback collection for Amazon Delivery Station workers, directly influencing product launches.
					My work emphasizes <b>scalability</b> and <b>operational efficiency</b>.
				</p>
				<p>
					I also refined my skills during an internship at <b>Amazon Search</b>, building real-time dashboards for ML model metadata to optimize search ranking algorithms.
				</p>

				<h2 className='text-xl md:text-2xl font-medium dark:text-light text-dark mt-8 mb-4'>
					Education
				</h2>
				<p>
					I hold an <b>MS in Computer Science</b> from the <b>University of Southern California (USC)</b> and a <b>BS in Computer Science</b> from CVR College of Engineering.
				</p>

				<h2 className='text-xl md:text-2xl font-medium dark:text-light text-dark mt-8 mb-4'>
					Interests
				</h2>
				<p>
					Beyond code, I am deeply interested in <b>Entrepreneurship</b>, <b>Venture Capital</b>, and <b>WEB3</b>.
					I actively research the impact of technology on the environment and health.
					Always driven to build useful, sustainable, and scalable products that empower mankind.
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
