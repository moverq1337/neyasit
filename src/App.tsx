import LeftNav from './components/LeftNav'
import CourseData from './course-data/course-data'
import './index.css'

function App() {
	return (
		<div>
			<div className='absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'></div>
			<div className='px-4 py-8'>
				<LeftNav />
				<CourseData />
			</div>
		</div>
	)
}

export default App
