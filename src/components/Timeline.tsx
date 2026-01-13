import { HiBadgeCheck } from 'react-icons/hi'
import { Link } from '@/src/i18n/routing'

interface YearProps {
    children: React.ReactNode
}

const Year = ({ children }: YearProps) => (
    <h4 className='font-medium text-base md:text-lg mb-4 text-dark dark:text-light'>
        {children}
    </h4>
)

interface CheckpointProps {
    title: string
    children?: React.ReactNode
}

const Checkpoint = ({ title, children }: CheckpointProps) => (
    <>
        <div className='flex items-start mb-1'>
            <div className='text-green-700 dark:text-green-300 mt-1'>
                <HiBadgeCheck className='h-5 w-5' />
            </div>
            <h5 className='font-medium text-base ml-2 text-dark dark:text-light'>
                {title}
            </h5>
        </div>
        <li className='pb-4 ml-2 border-solid border-l-2 border-gray-200 dark:border-gray-800 last:border-0 last:pb-0'>
            <p className='ml-5 text-base'>{children}</p>
        </li>
    </>
)

const FullTimeline = () => (
    <div className='text-gray-900 dark:text-gray-400 timeline'>
        <Year>2026</Year>
        <ul>
            <Checkpoint title='Software Engineer, Microsoft'>
                Azure Compute: Curious how it might turn out
            </Checkpoint>
        </ul>
        <Year>2024</Year>
        <ul>
            <Checkpoint title='Software Engineer, Amazon'>
                Last Mile Delivery Tech: Built concurrent surveys tool for delivery stations, Did Migrations, Infra work and Oncall stuff
            </Checkpoint>
        </ul>
        <Year>2023</Year>
        <ul>
            <Checkpoint title='Software Engineer Intern, Amazon'>
                Amazon Search: Built live ML model dashboards to show product ranks
            </Checkpoint>
            <Checkpoint title='USC Teaching Assistant'>
                Assignements and Office hours
            </Checkpoint>
            <Checkpoint title='M.S. in Computer Science, USC'>
                Completed the program in Dec 2023. Focus areas: Web Technologies, ML,
                Advanced Algorithms, Databases, Security.
            </Checkpoint>
        </ul>
        <Year>2022</Year>
        <ul>
            <Checkpoint title='Started M.S. CS at USC – Los Angeles'>
                Began graduate studies
            </Checkpoint>
        </ul>
        <Year>2021</Year>
        <ul>
            <Checkpoint title='Founder'>
                Built and sold my first startup Flywise - a study abroad platform
            </Checkpoint>

        </ul>
        <Year>2020</Year>
        <ul>
            <Checkpoint title='SDE Intern, OpenText – Hyderabad'>
                Built reusable web tools for OpenText
            </Checkpoint>
            <Checkpoint title='B.S. in Computer Science, CVR College 🧑‍🎓'>
                Graduated Aug 2020. Dean’s Merit List (2019, 2020).
            </Checkpoint>
        </ul>
        <Year>2019</Year>
        <ul>
            <Checkpoint title='Google Summer of Code 2019'>
                Selected for GSoC; contributed to open-source and collaborated with mentors.
            </Checkpoint>
        </ul>
        <Year>2016</Year>
        <ul>
            <Checkpoint title='Started B.S. CS at CVR College of Engineering'>
                Built a strong foundation in data structures, OS, and web development.
            </Checkpoint>
        </ul>
        <Year>1999</Year>
        <ul>
            <Checkpoint title='Born 👶' />
        </ul>
    </div>
)

const Timeline = () => <FullTimeline />

export default Timeline
