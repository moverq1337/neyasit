import {
	BookMinus,
	BookOpen,
	CalendarDays,
	Library,
	LogOut,
	Mail,
	MessageSquare,
	Settings,
	ShieldQuestion,
} from 'lucide-react'
import { useState } from 'react'

const LeftNav = () => {
	const [isOpen, setIsOpen] = useState(true)
	const [activeIndex, setActiveIndex] = useState<number | null>(null)

	const menuItems = [
		{ icon: BookMinus, text: 'Личный кабинет' },
		{ icon: Library, text: 'Библиотека' },
		{ icon: Mail, text: 'Мои курсы' },
		{ icon: BookOpen, text: 'Домашнее задание' },
		{ icon: CalendarDays, text: 'Расписание' },
		{ icon: MessageSquare, text: 'Чат' },
		{ icon: Settings, text: 'Настройки' },
	]

	const bottomItems = [
		{ icon: ShieldQuestion, text: 'Тех/Поддержка' },
		{ icon: LogOut, text: 'Выход' },
	]

	return (
		<div
			className={`transition-all duration-300 bg-navColor p-6 rounded-3xl text-white shadow-xl ${
				isOpen ? 'max-w-[20.625rem]' : 'max-w-[7rem]'
			} min-h-[62.5rem] flex flex-col justify-between`}
		>
			<div>
				<div
					className='flex justify-between items-center cursor-pointer'
					onClick={() => setIsOpen(!isOpen)}
				>
					<div className='flex items-center gap-2'>
						<img src='/src/assets/neyas.png' alt='logo' className='h-10 w-10' />
						{isOpen && <h1 className='text-big font-bold'>НЕЯСЫТЬ</h1>}
					</div>
					<button
						className={`text-white hover:text-indigo-400 transition ${
							isOpen ? 'mr-0' : 'mr-4'
						}`}
					>
						{isOpen ? '<' : '>'}
					</button>
				</div>
				<nav className='mt-8'>
					{menuItems.map((item, index) => (
						<a
							key={index}
							href='#'
							className={`flex items-center px-4 py-3 my-4 rounded-lg transition-all duration-300 group relative ${
								activeIndex === index
									? 'bg-selectedLinkNav shadow-lg shadow-selectedLinkNav text-black'
									: 'text-gray-200 hover:bg-selectedLinkNav hover:text-black'
							}`}
							onClick={() => setActiveIndex(index)}
						>
							<item.icon className='h-6 w-6' />
							<span
								className={`ml-4 whitespace-nowrap transition-opacity duration-300 ${
									isOpen ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden'
								}`}
							>
								{item.text}
							</span>
							{!isOpen && (
								<span className='absolute left-16 bg-gray-900 text-white px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-sm shadow-lg'>
									{item.text}
								</span>
							)}
						</a>
					))}
				</nav>
			</div>
			<div className='mt-auto'>
				<nav>
					{bottomItems.map((item, index) => (
						<a
							key={index}
							href='#'
							className={`flex items-center px-4 py-3 rounded-lg transition-all duration-300 group relative ${
								activeIndex === menuItems.length + index
									? 'bg-selectedLinkNav shadow-lg shadow-selectedLinkNav text-black'
									: 'text-gray-200 hover:bg-selectedLinkNav hover:text-black'
							}`}
							onClick={() => setActiveIndex(menuItems.length + index)}
						>
							<item.icon className='h-6 w-6' />
							<span
								className={`ml-4 whitespace-nowrap transition-opacity duration-300 ${
									isOpen ? 'opacity-100' : 'opacity-0 w-0 overflow-hidden'
								}`}
							>
								{item.text}
							</span>
							{!isOpen && (
								<span className='absolute left-16 bg-gray-900 text-white px-3 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-sm shadow-lg'>
									{item.text}
								</span>
							)}
						</a>
					))}
				</nav>
			</div>
		</div>
	)
}

export default LeftNav
