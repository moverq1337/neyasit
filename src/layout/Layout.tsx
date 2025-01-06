import { ReactNode } from 'react'
import LeftNav from 'src/components/LeftNav'

type LayoutProps = {
	children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<div className='absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'></div>
			<div className='px-4 py-8 flex flex-row'>
				<LeftNav />
				<div className='flex flex-col'>{children}</div>
			</div>
		</>
	)
}

export default Layout
