import { Input } from '@nextui-org/input'
import { User } from '@nextui-org/user'

type Props = {
	title: string
}

const Header: React.FC<Props> = ({ title }) => {
	return (
		<div className='flex items-center justify-between'>
			<h1 className='text-white text-[1.875rem] font-bold '>{title}</h1>
			<Input
				label='Search'
				className='w-[18.75rem] h-[3.125rem] rounded-[1.25rem]'
			/>
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
