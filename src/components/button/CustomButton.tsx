import { Button } from '@nextui-org/button'
import clsx from 'clsx'

type Props = {
	children: React.ReactNode
	variant: 'solid' | 'bordered' | 'light'
	color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger'
	isDisabled?: boolean
	isIconOnly?: boolean
	className?: string
	startContent?: React.ReactNode
}
const CustomButton: React.FC<Props> = props => {
	return (
		<Button
			{...props}
			className={clsx('text-base font-semibold', props.className)}
		/>
	)
}

export default CustomButton
