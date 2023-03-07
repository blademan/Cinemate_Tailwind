import { useEffect } from 'react'
import { Card } from '../components/Card'
import { useMovies } from '../hooks/useMovies'
import { useTitle } from '../hooks/useTitle'

export const MovieList = ({ title, apiPath }) => {
	useTitle(title)

	const { data: movies, isLoading, isError, refetch } = useMovies(apiPath)

	useEffect(() => {
		refetch()
	}, [apiPath, refetch])

	useEffect(() => {
		if (isError) {
			// Handle error here
			console.log(isError)
		}
	}, [isError])
	if (isError || !Array.isArray(movies)) {
		return <div>Error loading movies</div>
	}
	return (
		<section className='mx-auto max-w-7xl py-7'>
			{isLoading && <div>Loading...</div>}
			{movies && (
				<div className='flex flex-wrap justify-start gap-4 other:justify-evenly'>
					{movies.map(movie => (
						<Card key={movie.id} movie={movie} />
					))}
				</div>
			)}
		</section>
	)
}
