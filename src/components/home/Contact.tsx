import Link from 'next/link'
import { FiTwitter, FiMail, FiArrowRight, FiLinkedin } from 'react-icons/fi'

const Contact = () => {
	return (
		<section id='contact' className='pt-10'>
			<h2 className='section-heading custom-underline'>Get In Touch</h2>
			<p>
				Wooh! You have reached the bottom of the page. Looking to collaborate,
				discuss an opportunity, or just want to say hi? I&apos;m all in! Just
				drop me an email, or hit me up on Twitter to get the conversation
				started. No matter how you choose to connect, I can&apos;t wait to hear
				from you!
			</p>
			<div className='flex gap-16 mt-6'>
				<Link
					href='mailto:sakethreddynarahari@gmail.com?subject=Hi%20Saketh!'
					className='flex items-center gap-2 hover:text-primary transition'
					title='Compose an email to Saketh'
				>
					<FiMail />
					<div className='flex items-center'>
						<span>Email Me&nbsp;</span>
						<span className='animate-bounce-right'>
							<FiArrowRight />
						</span>
					</div>
				</Link>
				<Link
					href='https://linkedin.com/in/sakethreddynarahari'
					target='_blank'
					className='flex items-center gap-2 hover:text-primary transition'
					title='Open LinkedIn profile for Saketh'
				>
					<FiLinkedin />
					<div className='flex items-center'>
						<span>LinkedIn&nbsp;</span>
						<span className='animate-bounce-right'>
							<FiArrowRight />
						</span>
					</div>
				</Link>
			</div>
		</section>
	)
}

export default Contact
