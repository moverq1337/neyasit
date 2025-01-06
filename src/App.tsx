import { Spinner } from '@nextui-org/spinner'
import { motion } from 'motion/react'
import './index.css'

function App() {
	return (
		<div>
			<motion.h1
				animate={{ rotate: 360 }}
				className='text-red-700 text-cardtitle'
			>
				hello
			</motion.h1>
			<Spinner />
		</div>
	)
}

export default App
