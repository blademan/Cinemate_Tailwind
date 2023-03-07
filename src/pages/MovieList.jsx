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

	return (
		<main>
			<section className='mx-auto py-7 '>
				{isLoading && <div>Loading...</div>}
				{movies && (
					<div className='flex flex-wrap justify-start gap-4'>
						{movies.map(movie => (
							<Card key={movie.id} movie={movie} />
						))}
					</div>
				)}
			</section>
		</main>
	)
}
