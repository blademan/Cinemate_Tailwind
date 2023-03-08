import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'

export function Footer() {
	return (
		<footer className='rounded-lg bg-white p-4 shadow dark:bg-gray-900 md:px-6 md:py-8'>
			<div className='sm:flex sm:items-center sm:justify-between'>
				<Link href='https://frontpx.com/' className='mb-4 flex items-center sm:mb-0'>
					<img src={Logo} className='mr-3 h-8' alt='Logo' />
					<span className='self-center whitespace-nowrap text-2xl font-semibold dark:text-white'>Cinema Base</span>
				</Link>
				<ul className='mb-6 flex flex-wrap items-center text-sm text-gray-500 dark:text-gray-400 sm:mb-0'>
					<li>
						<Link href='#' className='mr-4 hover:underline md:mr-6 '>
							About
						</Link>
					</li>
					<li>
						<Link href='#' className='mr-4 hover:underline md:mr-6'>
							Privacy Policy
						</Link>
					</li>
					<li>
						<Link href='#' className='mr-4 hover:underline md:mr-6 '>
							Licensing
						</Link>
					</li>
					<li>
						<Link href='#' className='hover:underline'>
							Contact
						</Link>
					</li>
				</ul>
			</div>
			<hr className='my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8' />
			<span className='block text-sm text-gray-500 dark:text-gray-400 sm:text-center'>
				©
				<Link href='https://frontpx.com/' className='hover:underline'>
					FrontPx™
				</Link>
				. All Rights Reserved.
			</span>
		</footer>
	)
}
