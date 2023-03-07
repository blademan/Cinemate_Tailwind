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

	useEffect(() => {
		if (isError) {
			// Handle error here
			console.log(isError)
		}
	}, [isError])

	if (isLoading || Array.isArray(movieDB)) {
		return <div>Loading...</div>
	}
	console.log(movieDB)
	return (
		<section className='mx-auto max-w-7xl py-7'>
			<section className='py-10 dark:bg-gray-900 sm:py-16 lg:py-24'>
				<div className='mx-auto max-w-5xl px-4 sm:px-6 lg:px-8'>
					<div className='grid grid-cols-1 gap-x-12 gap-y-10 md:grid-cols-2 md:items-stretch lg:gap-x-20'>
						<div className='flex flex-col justify-between lg:py-5'>
							<h2 className='text-3xl font-bold leading-tight dark:text-white sm:text-4xl lg:text-5xl lg:leading-tight'>
								{movieDB.title}
							</h2>

							<div className='py-7'>
								{movieDB.genres.map(g => (
									<span
										key={g.id}
										className='mr-2 rounded border border-gray-200 p-2 dark:border-gray-600 dark:text-gray-100'
									>
										{g.name}
									</span>
								))}
							</div>
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
								<div className='dark:text-gray-400'>{movieDB.vote_count} reviews</div>
							</div>

							<div className='max-w-2xl text-lg text-gray-700	 dark:text-white'>
								<p className='my-4'>
									<span className='mr-2 font-bold'>Runtime:</span>
									{movieDB.runtime}
									<span> min.</span>
								</p>
								<p className='my-4'>
									<span className='mr-2 font-bold'>Budget:</span>
									{movieDB.budget}
								</p>
								<p className='my-4'>
									<span className='mr-2 font-bold'>Revenue:</span>
									{movieDB.revenue}
								</p>
								<p className='my-4'>
									<span className='mr-2 font-bold'>Release Date:</span>
									{movieDB.release_date}
								</p>
								<p className='my-4'>
									<span className='mr-2 font-bold '>IMDB:</span>
									<a
										className='text-blue-400'
										href={`https://www.imdb.com/title/${movieDB.imdb_id}`}
										target='_blank'
										rel='noreferrer'
									>
										Link
									</a>
								</p>
							</div>

							<blockquote className='mt-6'>
								<p className='text-lg leading-relaxed dark:text-white'>{movieDB.overview}</p>
							</blockquote>
						</div>

						<div className='mt-auto'>
							<div className='overflow-hidden rounded-md bg-white'>
								<img src={image} alt={movieDB.title} />
							</div>
						</div>
					</div>
				</div>
			</section>
		</section>
	)
}
