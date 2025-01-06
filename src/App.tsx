import { Route, Routes } from 'react-router-dom'
import './index.css'
import Library from './pages/library'
import MyCab from './pages/my-cab'
import NotFound from './pages/NotFound'

function App() {
	return (
		<Routes>
			<Route path='/' element={<MyCab />} />
			<Route path='/notfound' element={<NotFound />} />
			<Route path='/mycab' element={<MyCab />} />
			<Route path='/library' element={<Library />} />
		</Routes>
	)
}

export default App
