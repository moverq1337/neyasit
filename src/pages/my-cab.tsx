import CoursesList from 'src/course-data/course-data'
import Layout from 'src/layout/layout'

const MyCab = () => {
	return (
		<Layout>
			<div className='flex justify-between text-red-600'>
				<h3>hello</h3>
				<h3>world</h3>
				<h3>my name is </h3>
			</div>
			<CoursesList />
		</Layout>
	)
}

export default MyCab
