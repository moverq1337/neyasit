import CourseInfo from 'src/components/courseInfo/CourseInfo'
import Layout from '../layout/Layout'

const Library = () => {
	return (
		<Layout>
			<CourseInfo
				courseName='php'
				language='русский'
				modules={0}
				hours={0}
				exam={0}
				certificate={false}
			/>
		</Layout>
	)
}

export default Library
