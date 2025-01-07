import { Card, CardBody } from '@nextui-org/react'
import { Play } from 'lucide-react'

type Props = {
	image: React.ReactNode
	title: string
	description: string
	price: string
	className?: string
}

const CourseCard: React.FC<Props> = props => {
	return (
		<Card
			className={`w-full max-w-[26.25rem] h-[22.3125rem] relative rounded-2xl bg-[#0D1618] shadow-[0_0_1.875rem_0.125rem_#343C25] 
            mt-[0.625rem] ml-[0.9375rem] ${props.className}`}
		>
			<CardBody className='p-4'>
				<div className='relative'>
					{props.image}
					<button className='absolute inset-0 flex items-center justify-center hover:scale-125 duration-200'>
						<Play size={50} className='text-white' />
					</button>
				</div>
				<h2 className='text-xl font-bold text-white mt-4'>{props.title}</h2>
				<p className='text-sm text-gray-400'>{props.description}</p>
				<p className='text-lg font-semibold text-white mt-2'>{props.price}</p>
			</CardBody>
		</Card>
	)
}

export default CourseCard
