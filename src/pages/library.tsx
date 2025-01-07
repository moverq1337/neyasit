import Header from 'src/components/header/Header'
import CoursesList from 'src/course-data/course-data'
import Layout from '../layout/Layout'

const Library = () => {
	return (
		<Layout>
			<Header title='Library' />
			<CoursesList />
		</Layout>
	)
}

export default Library
