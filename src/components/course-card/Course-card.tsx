import { Card, CardBody, CardFooter } from '@nextui-org/react'
import { Play } from 'lucide-react'
import CustomButton from '../button/CustomButton'

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
			className={`relative rounded-2xl bg-[#0D1618] shadow-[0px_0px_30px_2px_#343C25] w-96 mt-10 ${props.className}`}
		>
			<CardBody className='p-4'>
				<div className='relative'>
					{props.image}
					<button className='absolute inset-0 flex items-center justify-center hover:scale-125 duration-200'>
						<Play size={50} className='text-white' />
					</button>
				</div>
				<div className='mt-4 text-white text-[20px] font-normal leading-[17px] tracking-[0.6px]'>
					{props.title}
				</div>
				<div className='mt-4 text-[#AAA] text-[10px] font-normal leading-[11px] tracking-[0.3px]'>
					{props.description}
				</div>
				<div className='flex items-center justify-between mt-6'>
					<div className='text-[#FFF] font-normal text-[14px] leading-[17px] tracking-[0.42px]'>
						{props.price}
					</div>
					<CustomButton variant='solid' color='primary'>
						Buy Now
					</CustomButton>
				</div>
			</CardBody>

			<CardFooter></CardFooter>
		</Card>
	)
}

export default CourseCard
