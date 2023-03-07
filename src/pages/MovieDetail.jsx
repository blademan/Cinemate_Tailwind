import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Backup from '../assets/images/backup.png'
import { useMovies } from '../hooks/useMovies'

export const MovieDetail = () => {
	const params = useParams()
	const { data: movieDB = [], isLoading, isError, refetch } = useMovies(`movie/${params.id}`)

	const image = movieDB?.poster_path ? `https://image.tmdb.org/t/p/w500/${movieDB.poster_path}` : Backup

	useEffect(() => {
		refetch()
	}, [params.id, refetch])
	console.log(movieDB)
	// useEffect(() => {
	// 	if (movieDB) {
	// 		console.log(movieDB)
	// 	}
	// }, [movieDB])

	useEffect(() => {
		if (isError) {
			// Handle error here
			console.log(isError)
		}
	}, [isError])
	return (
		<section className='mx-auto max-w-7xl py-7'>
			{isLoading && <div>Loading...</div>}
			{movieDB && (
				<section className='py-10 dark:bg-gray-900 sm:py-16 lg:py-24'>
					<div className='mx-auto max-w-5xl px-4 sm:px-6 lg:px-8'>
						<div className='grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2 md:items-stretch lg:gap-x-20'>
							<div className='flex flex-col justify-between lg:py-5'>
								<h2 className='text-3xl font-bold leading-tight dark:text-white sm:text-4xl lg:text-5xl lg:leading-tight'>
									{movieDB.title}
								</h2>
								{movieDB.genres && (
									<div className='pt-7'>
										{movieDB.genres.map(g => (
											<span
												key={g.id}
												className='mr-2 rounded border border-gray-200 p-2 dark:border-gray-600 dark:text-gray-100'
											>
												{g.name}
											</span>
										))}
									</div>
								)}
								<div className='mt-auto'>
									<div className='flex items-center'>
										<svg
											className='h-6 w-6 text-orange-500'
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 20 20'
											fill='currentColor'
										>
											<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
										</svg>
										<div className='pl-1 dark:text-gray-400'>{movieDB.vote_average}</div>

										<span className='mx-2 block h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400'></span>
										<div className=''>{movieDB.vote_count} reviews</div>
									</div>

									<blockquote className='mt-6'>
										<p className='text-lg leading-relaxed dark:text-white'>{movieDB.overview}</p>
									</blockquote>

									<div className='mt-8 flex items-center'>
										<img
											className='h-10 w-10 flex-shrink-0 rounded-full object-cover'
											src='https://cdn.rareblocks.xyz/collection/celebration/images/pricing/2/avatar.jpg'
											alt=''
										/>
										<div className='ml-4'>
											<p className='text-base font-semibold text-white'>Brooklyn Simmons</p>
											<p className='mt-px text-sm text-gray-400'>Digital Marketer</p>
										</div>
									</div>
								</div>
							</div>

							<div className=''>
								<div className='overflow-hidden rounded-md bg-white'>
									<img src={image} alt={movieDB.title} />
								</div>
							</div>
						</div>
					</div>
				</section>
			)}
		</section>
	)
}
