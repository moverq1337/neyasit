type Props = {
	children: React.ReactNode
}

const CourseCard: React.FC<Props> = props => {
	return (
		<Button
			{...props}
			className={clsx('text-base font-semibold', props.className)}
		/>
	)
}

export default CourseCard
