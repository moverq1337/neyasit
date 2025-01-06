import { Route, Routes } from 'react-router-dom'
import './index.css'
import MyCab from './pages/my-cab'
import NotFound from './pages/NotFound'

function App() {
	return (
		<Routes>
			<Route path='/' element={<MyCab />} />
			<Route path='/notfound' element={<NotFound />} />
			<Route path='/mycab' element={<MyCab />} />
		</Routes>
	)
}

export default App
