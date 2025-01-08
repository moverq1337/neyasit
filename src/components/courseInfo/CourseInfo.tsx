import {
	ChevronsRightLeftIcon,
	HeartIcon,
	LanguagesIcon,
	RefreshCcwIcon,
	School,
	TimerIcon,
} from 'lucide-react'

import { Button } from '@nextui-org/react'
import { useState } from 'react'
type Props = {
	courseName: string
	language: string
	modules: number
	hours: number
	exam: number
	certificate: boolean
}

const CourseInfo: React.FC<Props> = ({
	courseName,
	language,
	modules,
	hours,
	exam,
	certificate,
}) => {
	const [isFavorite, setIsFavorite] = useState(false)

	const CourseItems = [
		{ icon: <LanguagesIcon className='h-6 w-6' />, text: language },
		{
			icon: <RefreshCcwIcon className='h-6 w-6' />,
			text: `Modules: ${modules}`,
		},
		{ icon: <TimerIcon className='h-6 w-6' />, text: `Hours: ${hours}` },
		{ icon: <School className='h-6 w-6' />, text: `Exam: ${exam}` },
		{
			icon: <ChevronsRightLeftIcon className='h-6 w-6' />,
			text: certificate ? 'Certificate Included' : 'No Certificate',
		},
	]

	return (
		<div className='p-4'>
			<h1 className='text-2xl text-white font-bold mb-4'>{courseName}</h1>
			<div className='border-2 rounded-lg gap-2 flex text-white p-4'>
				<img src='../src/assets/image5.png' alt='Course preview' />
				<div className='flex flex-col gap-5'>
					{CourseItems.map((item, index) => (
						<div key={index} className='flex items-center space-x-2 '>
							{item.icon}
							<span>{item.text}</span>
						</div>
					))}
					<div className='flex gap-2'>
						<Button
							onPress={() => setIsFavorite(!isFavorite)}
							isIconOnly
							color='primary'
							className={isFavorite ? 'text-red-800' : 'text-white '}
						>
							<HeartIcon />
						</Button>
						<Button color='primary'>Продолжить обучение</Button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default CourseInfo
