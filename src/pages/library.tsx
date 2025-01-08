import ContiniueStudy from 'src/components/continiueStudy/ContiniueStudy'
import CoursesList from 'src/course-data/course-data'
import Layout from '../layout/Layout'

const Library = () => {
	return (
		<Layout>
			<ContiniueStudy
				title='Продолжить обучение'
				courseName='php'
				description='Какой классный курс'
				progress={80}
			/>
			<CoursesList />
		</Layout>
	)
}

export default Library
