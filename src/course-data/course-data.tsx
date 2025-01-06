import card2 from '../assets/card2.png'
import CourseCard from '../components/course-card/Course-card'

const CoursesList: React.FC = () => {
	const courses = [
		{
			img: <img src={card2} alt='card2' />,
			title: 'Основы web-разработки',
			description:
				'Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
			price: '$100',
		},
		{
			img: <img src={card2} alt='card2' />,
			title: 'Основы web-разработки',
			description:
				'Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
			price: '$100',
		},
		{
			img: <img src={card2} alt='card2' />,
			title: 'Основы web-разработки',
			description:
				'Sorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.',
			price: '$100',
		},
	]

	return (
		<div className='grid grid-cols-4 gap-56'>
			{courses.map((el, index) => (
				<CourseCard
					key={index}
					image={el.img}
					title={el.title}
					description={el.description}
					price={el.price}
				/>
			))}
		</div>
	)
}

export default CoursesList
