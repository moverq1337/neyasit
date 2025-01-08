import { Input } from '@nextui-org/input'
import { User } from '@nextui-org/user'

type Props = {
	title: string
}

const Header: React.FC<Props> = ({ title }) => {
	return (
		<div className='mx-10 flex items-center justify-between'>
			<h1 className='text-white text-[1.875rem] font-bold '>{title}</h1>
			<Input
				label='Search'
				className='w-[18.75rem] h-[2.5rem] bg-red-400 text-transparent rounded-[1.25rem]'
			></Input>
			<User
				className='text-white'
				avatarProps={{
					src: 'https://i.pravatar.cc/150?u=a04258114e29026702d',
				}}
				description='Product Designer'
				name='Jane Doe'
			/>
		</div>
	)
}

export default Header
