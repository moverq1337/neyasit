type ContinueStudyProps = {
	title: string
	courseName: string
	description: string
	progress: number
}

const ContinueStudy: React.FC<ContinueStudyProps> = ({
	title,
	courseName,
	description,
	progress,
}) => {
	return (
		<div className='text-white mx-10 my-6'>
			<h1 className='text-3xl font-bold mb-4'>{title}</h1>
			<div className='flex items-center bg-transparent border-1 border-white rounded-3xl overflow-hidden shadow-lg'>
				<img
					src='../src/assets/card2.png'
					alt='course'
					className='w-1/3 object-cover'
				/>
				<div className='flex flex-col justify-between p-4 w-2/3'>
					<h2 className='text-2xl font-semibold mb-2'>{courseName}</h2>
					<p className='text-gray-300 mb-4'>{description}</p>
					<div className='flex gap-4'>
						<button className='bg-selectedLinkNav text-black font-medium py-2 px-4 rounded hover:bg-teal-500 transition'>
							Перейти к курсу
						</button>
						<button className=' text-gray-300 font-medium py-2 px-4 rounded hover:bg-gray-700 transition'>
							Содержание курса
						</button>
					</div>
				</div>
				<div className='flex items-center justify-center w-1/4 p-4'>
					<div className='relative'>
						<div className='w-16 h-16 rounded-full border-4 border-gray-600 flex items-center justify-center'>
							<span className='text-teal-400 text-lg font-bold'>
								{progress}%
							</span>
						</div>
						<div className='absolute top-0 left-0 w-16 h-16 rounded-full'></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ContinueStudy
