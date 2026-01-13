'use client'

import AnimatedText from '@/src/components/AnimatedText'
import FadeDown from '@/src/components/animations/FadeDown'
import FadeUp from '@/src/components/animations/FadeUp'
import Link from 'next/link'

const Contact = () => {
    return (
        <section className='prose prose-neutral dark:prose-invert my-10'>
            <FadeDown duration={0.4}>
                <h1 className='heading custom-underline'>
                    <AnimatedText text='Get in Touch' />
                </h1>
                <p>
                    I'm open to new opportunities, collaborations, and interesting conversations.
                    Feel free to reach out if you'd like to discuss about entrepreneurship, investing, projects, ask a question, or just say hi!
                </p>
            </FadeDown>

            <FadeUp duration={0.4}>
                <h4 className='text-lg md:text-xl font-medium dark:text-light text-dark'>
                    Email
                </h4>
                <p>
                    The best way to reach me is via email at{' '}
                    <a href='mailto:narahari.saketh@gmail.com' className='link'>
                        sakethreddynsr@gmail.com
                    </a>
                </p>

                <h4 className='text-lg md:text-xl font-medium dark:text-light text-dark'>
                    Connect on Social
                </h4>
                <p>
                    You can also find me on{' '}
                    <a
                        href='https://linkedin.com/in/sakethreddynarahari'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='link'
                    >
                        LinkedIn
                    </a>{' '}
                    and{' '}
                    <a
                        href='https://github.com/sakethre'
                        target='_blank'
                        rel='noopener noreferrer'
                        className='link'
                    >
                        GitHub
                    </a>
                    . Let's connect and collaborate!
                </p>

                <h4 className='text-lg md:text-xl font-medium dark:text-light text-dark'>
                    What I'm interested in
                </h4>
                <p>
                    I'm particularly interested in discussing:
                </p>
                <ul>
                    <li>Entrepreneurship and building impactful products</li>
                    <li>Distributed systems and scalable architecture</li>
                    <li>Collaborations/Meetups</li>
                    <li>Technical career advice and mentorship</li>
                    <li>Volunteering</li><li>Investing and Venturing</li>
                </ul>

                <p>
                    Whether you have a project in mind, need technical advice, or just want to
                    chat about tech and entrepreneurship, DM!
                </p>
            </FadeUp>
        </section>
    )
}

export default Contact
