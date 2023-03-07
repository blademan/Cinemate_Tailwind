import { Link } from 'react-router-dom'
import PageNotFoundImg from '../assets/images/pagenotfound.png'
import { useTitle } from '../hooks/useTitle'

export const PageNotFound = ({ title }) => {
	useTitle(title)
	return (
		<section className='flex h-screen justify-center py-7'>
			<div className='text-center text-4xl text-gray-400'>
				<p className='py-7'> 404, Oops!</p>
				<div className='max-w-xl py-7'>
					<img src={PageNotFoundImg} alt='' />
				</div>
				<Link to={'/'} className=''>
					<button
						type='button'
						className='mr-2 mb-2 rounded-lg border border-blue-700 px-5 py-2.5 text-center text-sm font-medium text-blue-700 hover:bg-blue-800 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-blue-500 dark:text-blue-500 dark:hover:bg-blue-600 dark:hover:text-white dark:focus:ring-blue-800'
					>
						Back to home
					</button>
				</Link>
			</div>
		</section>
	)
}
