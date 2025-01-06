import { Spinner } from '@nextui-org/spinner'
import { motion } from 'motion/react'
import './App.css'

function App() {
	return (
		<>
			<motion.h1 animate={{ rotate: 360 }} className='text-red-700'>
				hello
			</motion.h1>
			<Spinner />
		</>
	)
}

export default App
